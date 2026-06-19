<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Client::query()
            ->with(['contacts', 'disciplines'])
            ->orderBy('name');

        $query->when($request->filled('search'), function ($query) use ($request): void {
            $search = (string) $request->string('search');
            $query->where(function ($query) use ($search): void {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhereHas('contacts', function ($query) use ($search): void {
                        $query->where('name', 'like', "%{$search}%")
                            ->orWhere('role', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
                    });
            });
        });

        $query->when($request->filled('discipline'), function ($query) use ($request): void {
            $query->whereHas('disciplines', fn ($query) => $query->where('name', $request->string('discipline')));
        });

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (Client $client) => FrontendPayload::client($client))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (Client $client) => FrontendPayload::client($client))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->validated($request);

        $client = DB::transaction(function () use ($data): Client {
            $client = Client::create(['name' => $data['name']]);
            $this->syncNested($client, $data);

            return $client->load(['contacts', 'disciplines']);
        });

        return response()->json(['data' => FrontendPayload::client($client)], 201);
    }

    public function show(Client $client): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::client($client->load(['contacts', 'disciplines']))]);
    }

    public function update(Request $request, Client $client): JsonResponse
    {
        $data = $this->validated($request, updating: true);

        $client = DB::transaction(function () use ($client, $data): Client {
            $client->update(['name' => $data['name'] ?? $client->name]);
            $this->syncNested($client, $data);

            return $client->load(['contacts', 'disciplines']);
        });

        return response()->json(['data' => FrontendPayload::client($client)]);
    }

    public function destroy(Client $client): JsonResponse
    {
        $client->delete();

        return response()->json(status: 204);
    }

    private function validated(Request $request, bool $updating = false): array
    {
        return $request->validate([
            'name' => [$updating ? 'sometimes' : 'required', 'string', 'max:255'],
            'disciplines' => ['sometimes', 'array'],
            'disciplines.*' => ['string', 'max:120'],
            'contacts' => ['sometimes', 'array'],
            'contacts.*.name' => ['required_with:contacts', 'string', 'max:255'],
            'contacts.*.role' => ['nullable', 'string', 'max:255'],
            'contacts.*.email' => ['nullable', 'email', 'max:255'],
            'contacts.*.phone' => ['nullable', 'string', 'max:80'],
        ]);
    }

    private function syncNested(Client $client, array $data): void
    {
        if (array_key_exists('disciplines', $data)) {
            $client->disciplines()->delete();
            foreach (array_values(array_unique($data['disciplines'] ?: ['General'])) as $discipline) {
                $client->disciplines()->create(['name' => $discipline]);
            }
        }

        if (array_key_exists('contacts', $data)) {
            $client->contacts()->delete();
            foreach ($data['contacts'] ?? [] as $contact) {
                $client->contacts()->create($contact);
            }
        }
    }
}
