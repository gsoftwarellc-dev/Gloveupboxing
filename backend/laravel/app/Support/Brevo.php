<?php

namespace App\Support;

class Brevo
{
    /**
     * Send a transactional email.
     *
     * @param  string|array  $to   ['email' => ..., 'name' => ...] or just an email string
     * @param  string        $subject
     * @param  string        $html
     * @return bool
     */
    public static function send(string|array $to, string $subject, string $html): bool
    {
        if (is_string($to)) {
            $to = ['email' => $to];
        }

        $payload = json_encode([
            'sender'      => self::sender(),
            'to'          => [$to],
            'subject'     => $subject,
            'htmlContent' => $html,
        ]);

        $ch = curl_init('https://api.brevo.com/v3/smtp/email');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_HTTPHEADER     => [
                'api-key: ' . self::apiKey(),
                'Content-Type: application/json',
                'Accept: application/json',
            ],
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode !== 200 && $httpCode !== 201) {
            \Illuminate\Support\Facades\Log::error('Brevo send failed', [
                'status'   => $httpCode,
                'response' => $response,
                'to'       => $to,
                'subject'  => $subject,
            ]);
            return false;
        }

        return true;
    }

    /**
     * Send to multiple recipients individually.
     *
     * @param  array  $recipients  [['email' => ..., 'name' => ...], ...]
     * @param  string $subject
     * @param  string $html        May contain {{name}} placeholder replaced per recipient
     * @return array{sent:int, failed:int}
     */
    public static function sendBulk(array $recipients, string $subject, string $html): array
    {
        $sent   = 0;
        $failed = 0;

        foreach ($recipients as $recipient) {
            $personalised = str_replace(
                ['{{name}}', '{{email}}'],
                [$recipient['name'] ?? '', $recipient['email'] ?? ''],
                $html
            );

            $ok = self::send($recipient, $subject, $personalised);
            $ok ? $sent++ : $failed++;
        }

        return ['sent' => $sent, 'failed' => $failed];
    }

    // Alphanumeric sender ID shown to the recipient (max 11 chars, no spaces) — must be approved in Brevo for the target country.
    private const SMS_SENDER = 'Backfill';

    /**
     * Send a single transactional SMS via Brevo.
     *
     * @param  string  $phone  Any format; non-digit characters are stripped, a leading '0' is assumed UK and rewritten to '44'.
     * @param  string  $text
     * @return bool
     */
    public static function sendSms(string $phone, string $text): bool
    {
        $normalised = self::normalisePhone($phone);
        if ($normalised === '') {
            return false;
        }

        $payload = json_encode([
            'sender'    => self::SMS_SENDER,
            'recipient' => $normalised,
            'content'   => $text,
            'type'      => 'transactional',
        ]);

        $ch = curl_init('https://api.brevo.com/v3/transactionalSMS/sms');
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_HTTPHEADER     => [
                'api-key: ' . self::apiKey(),
                'Content-Type: application/json',
                'Accept: application/json',
            ],
        ]);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode !== 200 && $httpCode !== 201) {
            \Illuminate\Support\Facades\Log::error('Brevo SMS send failed', [
                'status'   => $httpCode,
                'response' => $response,
                'phone'    => $normalised,
            ]);
            return false;
        }

        return true;
    }

    /**
     * Send an SMS to multiple recipients individually.
     *
     * @param  array  $recipients  [['phone' => ..., 'name' => ...], ...]
     * @param  string $text        May contain {{name}} placeholder replaced per recipient
     * @return array{sent:int, failed:int}
     */
    public static function sendBulkSms(array $recipients, string $text): array
    {
        $sent   = 0;
        $failed = 0;

        foreach ($recipients as $recipient) {
            $personalised = str_replace('{{name}}', $recipient['name'] ?? '', $text);
            $ok = self::sendSms($recipient['phone'] ?? '', $personalised);
            $ok ? $sent++ : $failed++;
        }

        return ['sent' => $sent, 'failed' => $failed];
    }

    private static function normalisePhone(string $phone): string
    {
        $digits = preg_replace('/\D+/', '', $phone) ?? '';
        if ($digits === '') {
            return '';
        }
        if ($digits[0] === '0') {
            $digits = '44' . substr($digits, 1);
        }

        return $digits;
    }

    private static function apiKey(): string
    {
        return (string) config('services.brevo.api_key', '');
    }

    private static function sender(): array
    {
        return [
            'name' => (string) config('services.brevo.sender_name', 'Backfill CRM'),
            'email' => (string) config('services.brevo.sender_email', 'no-reply@example.com'),
        ];
    }
}
