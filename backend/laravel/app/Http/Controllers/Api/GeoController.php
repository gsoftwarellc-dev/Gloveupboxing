<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PostcodeCoordinate;
use App\Models\Project;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GeoController extends Controller
{
    public function coordinates(): JsonResponse
    {
        return response()->json([
            'data' => PostcodeCoordinate::query()
                ->orderBy('postcode')
                ->get()
                ->map(fn (PostcodeCoordinate $coord) => [
                    'postcode' => $coord->postcode,
                    'lat' => (float) $coord->latitude,
                    'lng' => (float) $coord->longitude,
                ])
                ->values(),
        ]);
    }

    public function projectsNear(Request $request): JsonResponse
    {
        $data = $request->validate([
            'postcode' => ['required', 'string', 'max:40'],
            'radius' => ['sometimes', 'numeric', 'min:1', 'max:250'],
        ]);

        $origin = PostcodeCoordinate::find(strtoupper($data['postcode']));

        if (! $origin) {
            return response()->json(['message' => 'Postcode coordinates not found.'], 404);
        }

        $radius = (float) ($data['radius'] ?? 25);
        $coordinates = PostcodeCoordinate::query()->get()->keyBy('postcode');

        $projects = Project::query()
            ->with(['client', 'contacts'])
            ->whereNotNull('postcode')
            ->get()
            ->map(function (Project $project) use ($coordinates, $origin) {
                $coord = $coordinates->get(strtoupper((string) $project->postcode));
                if (! $coord) {
                    return null;
                }

                return [
                    'project' => FrontendPayload::project($project),
                    'distanceMiles' => round($this->distanceMiles(
                        (float) $origin->latitude,
                        (float) $origin->longitude,
                        (float) $coord->latitude,
                        (float) $coord->longitude
                    ), 1),
                ];
            })
            ->filter()
            ->filter(fn (array $row) => $row['distanceMiles'] <= $radius)
            ->sortBy('distanceMiles')
            ->values();

        return response()->json(['data' => $projects]);
    }

    private function distanceMiles(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $earthMiles = 3958.7613;
        $latDelta = deg2rad($lat2 - $lat1);
        $lngDelta = deg2rad($lng2 - $lng1);
        $a = sin($latDelta / 2) ** 2
            + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($lngDelta / 2) ** 2;

        return $earthMiles * 2 * atan2(sqrt($a), sqrt(1 - $a));
    }
}
