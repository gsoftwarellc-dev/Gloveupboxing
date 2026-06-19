import { useEffect, useState } from 'react'
import { Mail, Save, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react'
import { fetchSmtpSettings, saveSmtpSettings, type SmtpSettings } from '../lib/api'

export default function AdminSettings() {
  const [form, setForm] = useState<SmtpSettings>({
    host: '',
    port: 587,
    username: '',
    password: '',
    encryption: 'tls',
    from_address: '',
    from_name: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    async function loadSettings() {
      try {
        setLoading(true)
        const settings = await fetchSmtpSettings()
        setForm({
          ...settings,
          password: '', // Don't show existing password value for safety
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load SMTP settings.')
      } finally {
        setLoading(false)
      }
    }
    void loadSettings()
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(null)
    try {
      const saved = await saveSmtpSettings(form)
      setSuccess('SMTP settings saved successfully! Laravel config updated.')
      setForm({
        ...saved,
        password: '', // Clear password input field but keep config value on server
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save SMTP settings.')
    } finally {
      setSaving(false)
    }
  }

  function updateField<K extends keyof SmtpSettings>(key: K, value: SmtpSettings[K]) {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '0.5rem' }}>
        <RefreshCw className="animate-spin" size={20} color="#b8942e" />
        <span style={{ fontSize: '1rem', fontWeight: 600, color: '#374151' }}>Loading settings...</span>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h1 className="page-title">Settings</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
          Configure your global SMTP server to connect custom business email accounts (Outlook, Brevo, Gmail, etc.)
        </p>
      </div>

      <form onSubmit={handleSave} className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '1rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(184,148,46,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', flexShrink: 0 }}>
            <Mail size={18} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#111' }}>Email / SMTP Configuration</h2>
            <p style={{ margin: '0.15rem 0 0', fontSize: '0.78rem', color: '#6b7280' }}>
              These settings control how the CRM sends system notifications, vacancy matches, and campaign emails.
            </p>
          </div>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1rem', background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#b91c1c' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.75rem 1rem', background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#15803d' }}>
            <CheckCircle size={16} />
            <span>{success}</span>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.25rem' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              SMTP Mail Host *
            </label>
            <input
              required
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="e.g. smtp.office365.com or smtp-relay.brevo.com"
              value={form.host}
              onChange={e => updateField('host', e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Port *
            </label>
            <input
              required
              type="number"
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="e.g. 587 or 465"
              value={form.port}
              onChange={e => updateField('port', Number(e.target.value))}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Encryption *
            </label>
            <select
              className="input"
              style={{ fontSize: '0.85rem' }}
              value={form.encryption}
              onChange={e => updateField('encryption', e.target.value)}
            >
              <option value="tls">TLS (Recommended)</option>
              <option value="ssl">SSL</option>
              <option value="none">None</option>
            </select>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              SMTP Username *
            </label>
            <input
              required
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="e.g. your_email@outlook.com or API Username"
              value={form.username}
              onChange={e => updateField('username', e.target.value)}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              SMTP Password
            </label>
            <input
              type="password"
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="Leave blank to keep existing password..."
              value={form.password || ''}
              onChange={e => updateField('password', e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Sender From Email *
            </label>
            <input
              required
              type="email"
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="e.g. sender@gloveupboxing.com"
              value={form.from_address}
              onChange={e => updateField('from_address', e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Sender From Name *
            </label>
            <input
              required
              className="input"
              style={{ fontSize: '0.85rem' }}
              placeholder="e.g. Glove Up Boxing Team"
              value={form.from_name}
              onChange={e => updateField('from_name', e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
          <button
            type="submit"
            disabled={saving}
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem' }}
          >
            {saving ? <RefreshCw className="animate-spin" size={13} /> : <Save size={13} />}
            {saving ? 'Saving...' : 'Save Configuration'}
          </button>
        </div>
      </form>
    </div>
  )
}
