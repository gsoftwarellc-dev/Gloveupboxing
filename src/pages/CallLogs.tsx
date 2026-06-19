import { useMemo, useState } from 'react'
import { Phone, Copy, Check, Search, CalendarClock, Trash2, AlertTriangle } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { CallLog } from '../types/crm'

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

function isDue(callBackDate?: string | null): boolean {
  if (!callBackDate) return false
  return new Date(callBackDate) <= new Date(new Date().toDateString())
}

function CopyPhoneButton({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API unavailable — nothing else useful to do here.
    }
  }

  return (
    <button
      type="button"
      className="btn-secondary"
      style={{ fontSize: '0.8rem', padding: '0.35rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
      onClick={copy}
      title="Copy phone number for your dialer"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? 'Copied' : phone}
    </button>
  )
}

export default function CallLogs() {
  const { callLogs, addCallLog, deleteCallLog, loading, error } = useCrmData()
  const [search, setSearch] = useState('')
  const [dueOnly, setDueOnly] = useState(false)

  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [requirements, setRequirements] = useState('')
  const [callBackDate, setCallBackDate] = useState('')
  const [formError, setFormError] = useState('')
  const [saving, setSaving] = useState(false)

  const filtered = useMemo(() => {
    const q = normalize(search)
    return callLogs.filter(log => {
      if (dueOnly && !isDue(log.callBackDate)) return false
      if (
        q &&
        !normalize(log.contactName).includes(q) &&
        !normalize(log.notes ?? '').includes(q) &&
        !normalize(log.requirements ?? '').includes(q) &&
        !normalize(log.contactPhone ?? '').includes(q)
      ) return false
      return true
    })
  }, [callLogs, dueOnly, search])

  const dueCount = useMemo(() => callLogs.filter(log => isDue(log.callBackDate)).length, [callLogs])

  if (loading && !callLogs.length) return <DataState loading={true} error={null} />
  if (error) return <DataState loading={false} error={error} />

  function resetForm() {
    setContactName('')
    setContactPhone('')
    setContactEmail('')
    setNotes('')
    setRequirements('')
    setCallBackDate('')
    setFormError('')
  }

  async function logCall() {
    const trimmedName = contactName.trim()
    if (!trimmedName) {
      setFormError('Contact name is required.')
      return
    }
    setSaving(true)
    setFormError('')
    try {
      await addCallLog({
        contactName: trimmedName,
        contactPhone: contactPhone.trim() || null,
        contactEmail: contactEmail.trim() || null,
        notes: notes.trim() || null,
        requirements: requirements.trim() || null,
        callBackDate: callBackDate || null,
        calledAt: new Date().toISOString(),
      })
      resetForm()
    } finally {
      setSaving(false)
    }
  }

  async function removeLog(id: number) {
    if (!confirm('Delete this call log?')) return
    await deleteCallLog(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Call Logs</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.2rem 0 0' }}>
            Copy a number into your dialer, take notes during the call, and set a callback date.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        <div className="card" style={{ padding: '1.1rem 1.25rem' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{callLogs.length}</div>
          <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>Total Calls Logged</div>
        </div>
        <div className="card" style={{ padding: '1.1rem 1.25rem' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 700, color: dueCount > 0 ? '#dc2626' : '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{dueCount}</div>
          <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>Callbacks Due</div>
        </div>
      </div>

      {/* Log a call */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <h2 className="section-title" style={{ marginBottom: '0.9rem' }}>Log a Call</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Contact Name *</label>
            <input className="input" placeholder="e.g. Gary" value={contactName} onChange={e => { setContactName(e.target.value); setFormError('') }} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Phone Number</label>
            <input className="input" placeholder="07700 000000" value={contactPhone} onChange={e => setContactPhone(e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email</label>
            <input className="input" type="email" placeholder="name@company.co.uk" value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Call Back</label>
            <input className="input" type="date" value={callBackDate} onChange={e => setCallBackDate(e.target.value)} />
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Notes</label>
            <textarea
              className="input"
              rows={3}
              style={{ resize: 'vertical' }}
              placeholder="e.g. Gary is currently working on a £20 million project in Beckton and will be moving soon."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Requirements</label>
            <textarea
              className="input"
              rows={2}
              style={{ resize: 'vertical' }}
              placeholder="Specific project requirements discussed on the call..."
              value={requirements}
              onChange={e => setRequirements(e.target.value)}
            />
          </div>
        </div>

        {formError && (
          <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
            {formError}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button className="btn-primary" onClick={logCall} disabled={saving}>
            <Phone size={14} />{saving ? 'Saving…' : 'Save Call Log'}
          </button>
        </div>
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
          <input
            className="input"
            style={{ paddingLeft: '2.25rem', fontSize: '0.9rem' }}
            placeholder="Search contact, phone, notes or requirements..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn-secondary"
          style={{
            borderColor: dueOnly ? '#b8942e' : undefined,
            background: dueOnly ? 'rgba(184,148,46,0.08)' : undefined,
            color: dueOnly ? '#b8942e' : undefined,
            fontWeight: 700,
          }}
          onClick={() => setDueOnly(prev => !prev)}
        >
          <CalendarClock size={14} />Callbacks Due ({dueCount})
        </button>
      </div>

      {/* Call list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {filtered.map(log => (
          <CallLogRow key={log.id} log={log} onDelete={() => removeLog(log.id)} />
        ))}

        {filtered.length === 0 && (
          <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
            No call logs match your search.
          </div>
        )}
      </div>
    </div>
  )
}

function CallLogRow({ log, onDelete }: { log: CallLog; onDelete: () => void }) {
  const due = isDue(log.callBackDate)

  return (
    <div className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
      <div style={{
        width: 44, height: 44, borderRadius: '0.5rem', flexShrink: 0,
        background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Phone size={20} style={{ color: '#b8942e' }} />
      </div>

      <div style={{ flex: '1 1 260px', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111' }}>{log.contactName}</span>
          {log.contactPhone && <CopyPhoneButton phone={log.contactPhone} />}
          {log.contactEmail && <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{log.contactEmail}</span>}
        </div>

        {log.notes && (
          <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#374151' }}>
            <span style={{ fontWeight: 600, color: '#9ca3af' }}>Note: </span>{log.notes}
          </div>
        )}
        {log.requirements && (
          <div style={{ marginTop: '0.3rem', fontSize: '0.85rem', color: '#374151' }}>
            <span style={{ fontWeight: 600, color: '#9ca3af' }}>Requirements: </span>{log.requirements}
          </div>
        )}

        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
            Logged {new Date(log.calledAt).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </span>
          {log.callBackDate && (
            <span className={`badge ${due ? 'badge-gold' : 'badge-gray'}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              {due && <AlertTriangle size={11} />}
              Call back {new Date(log.callBackDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
            </span>
          )}
        </div>
      </div>

      <button className="btn-ghost" style={{ padding: '0.4rem', color: '#9ca3af', flexShrink: 0 }} onClick={onDelete} title="Delete log">
        <Trash2 size={15} />
      </button>
    </div>
  )
}
