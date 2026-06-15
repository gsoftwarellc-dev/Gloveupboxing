import { useState, useMemo } from 'react'
import { Send, Users, Plus, AlertTriangle, CheckCircle, Search, Building2, Mail } from 'lucide-react'
import { clientCompanies } from '../data/clients'

const ALL_DISCIPLINES = Array.from(
  new Set(clientCompanies.flatMap(c => c.disciplines))
).sort()

interface Recipient {
  key: string
  name: string
  role?: string
  email: string
  company: string
  disciplines: string[]
}

const allRecipients: Recipient[] = clientCompanies.flatMap(c =>
  c.contacts
    .filter(ct => !!ct.email)
    .map((ct, i) => ({
      key: `${c.id}-${i}`,
      name: ct.name,
      role: ct.role,
      email: ct.email!,
      company: c.name,
      disciplines: c.disciplines,
    }))
)

const PAGE_SIZE = 50

function mergeRecipientFields(template: string, recipient: Recipient): string {
  const firstName = recipient.name.trim().split(/\s+/)[0] || recipient.name

  return template
    .replaceAll('{{first_name}}', firstName)
    .replaceAll('{{role}}', recipient.role || 'your role')
    .replaceAll('{{company}}', recipient.company)
}

export default function MassEmail() {
  const [composeStep, setComposeStep] = useState(1)
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const [search, setSearch] = useState('')
  const [discipline, setDiscipline] = useState('All Disciplines')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return allRecipients.filter(r => {
      if (discipline !== 'All Disciplines' && !r.disciplines.includes(discipline)) return false
      if (term && !r.name.toLowerCase().includes(term) && !r.company.toLowerCase().includes(term) && !(r.role ?? '').toLowerCase().includes(term)) return false
      return true
    })
  }, [search, discipline])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const previewRecipient = allRecipients.find(recipient => selected.has(recipient.key)) ?? allRecipients[0]
  const previewSubject = previewRecipient
    ? mergeRecipientFields(subject, previewRecipient)
    : subject
  const previewBodyTemplate = body || `Hi {{first_name}},

I hope this message finds you well.

We are contacting you about opportunities relevant to your work as {{role}} at {{company}}.`
  const previewBody = previewRecipient
    ? mergeRecipientFields(previewBodyTemplate, previewRecipient)
    : previewBodyTemplate

  function toggle(key: string) {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  function toggleAllOnPage() {
    setSelected(prev => {
      const next = new Set(prev)
      const allSelected = pageItems.every(r => next.has(r.key))
      for (const r of pageItems) {
        if (allSelected) next.delete(r.key)
        else next.add(r.key)
      }
      return next
    })
  }

  function selectAllFiltered() {
    setSelected(new Set(filtered.map(r => r.key)))
  }

  function clearSelection() {
    setSelected(new Set())
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Mass Mailing Hub</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>
            Send targeted campaigns to {allRecipients.length.toLocaleString()} client contacts across {clientCompanies.length} companies
          </p>
        </div>
        <button className="btn-primary" onClick={() => setComposeStep(1)}><Plus size={15} />New Campaign</button>
      </div>

      <div>
          <div className="card">
            {/* Steps */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Recipients', 'Message', 'Review & Send'].map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: composeStep >= i + 1 ? '#b8942e' : '#e5e7eb',
                    color: composeStep >= i + 1 ? '#ffffff' : '#000000', fontWeight: 700, fontSize: '1.05rem', flexShrink: 0
                  }}>
                    {composeStep > i + 1 ? <CheckCircle size={14} /> : i + 1}
                  </div>
                  <span style={{ fontSize: '1.05rem', color: '#000000', fontWeight: composeStep === i + 1 ? 600 : 400 }}>{step}</span>
                  {i < 2 && <div style={{ width: 30, height: 1, background: '#f1f5f9' }} />}
                </div>
              ))}
            </div>

            {composeStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="section-title">Select Recipients</h3>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 220px', position: 'relative' }}>
                    <Search size={14} style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                      className="input"
                      style={{ paddingLeft: '2rem' }}
                      placeholder="Search name, company, or role..."
                      value={search}
                      onChange={e => { setSearch(e.target.value); setPage(1) }}
                    />
                  </div>
                  <select className="input" style={{ flex: '0 0 200px' }} value={discipline} onChange={e => { setDiscipline(e.target.value); setPage(1) }}>
                    <option>All Disciplines</option>
                    {ALL_DISCIPLINES.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>

                <div style={{ padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Users size={18} style={{ color: '#b8942e' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.1rem' }}>{selected.size} recipients selected</div>
                      <div style={{ fontSize: '1.05rem', color: '#000000' }}>{filtered.length.toLocaleString()} match current filters</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary" onClick={selectAllFiltered}>Select All Filtered</button>
                    <button className="btn-secondary" onClick={clearSelection}>Clear</button>
                  </div>
                </div>

                {selected.size > 500 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#dc2626' }}>
                    <AlertTriangle size={14} /> Selection exceeds the 500 recipient safety limit — narrow your filters before sending.
                  </div>
                )}

                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th style={{ width: 36 }}>
                          <input type="checkbox" checked={pageItems.length > 0 && pageItems.every(r => selected.has(r.key))} onChange={toggleAllOnPage} />
                        </th>
                        <th>Contact</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageItems.map(r => (
                        <tr key={r.key}>
                          <td><input type="checkbox" checked={selected.has(r.key)} onChange={() => toggle(r.key)} /></td>
                          <td style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{r.name}</td>
                          <td style={{ color: '#000000' }}>{r.role ?? '—'}</td>
                          <td style={{ color: '#000000' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <Building2 size={12} style={{ color: '#b8942e' }} />{r.company}
                            </div>
                          </td>
                          <td style={{ color: '#000000', fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              <Mail size={12} style={{ color: '#9ca3af' }} />{r.email}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {pageItems.length === 0 && (
                        <tr><td colSpan={5} style={{ textAlign: 'center', color: '#9ca3af', padding: '1.5rem' }}>No contacts match these filters.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {totalPages > 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <button className="btn-secondary" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>← Prev</button>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}>Page {page} of {totalPages}</span>
                    <button className="btn-secondary" disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next →</button>
                  </div>
                )}

                <button className="btn-primary" style={{ alignSelf: 'flex-end' }} disabled={selected.size === 0 || selected.size > 500} onClick={() => setComposeStep(2)}>Next: Message →</button>
              </div>
            )}

            {composeStep === 2 && (
              <div className="email-compose-layout">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
                  <h3 className="section-title">Compose Message</h3>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Subject</label>
                    <input className="input" placeholder="Subject line..." value={subject} onChange={e => setSubject(e.target.value)} />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Message Body</label>
                    <textarea className="input" rows={8} placeholder="Write your email message here...

Hi {{first_name}},

I hope this message finds you well..." value={body} onChange={e => setBody(e.target.value)} style={{ resize: 'vertical' }} />
                  </div>
                  <div style={{ fontSize: '1.05rem', color: '#000000' }}>Available merge fields: {'{{first_name}}'} {'{{role}}'} {'{{company}}'}</div>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
                    <button className="btn-secondary" onClick={() => setComposeStep(1)}>← Back</button>
                    <button className="btn-primary" onClick={() => setComposeStep(3)}>Next: Review →</button>
                  </div>
                </div>

                <aside className="email-preview">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Mail size={17} style={{ color: '#b8942e' }} />
                    <h3 className="section-title">Client Preview</h3>
                  </div>
                  {previewRecipient && (
                    <div style={{ paddingBottom: '0.875rem', marginBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.2rem' }}>
                        Previewing as {selected.size > 0 ? 'selected recipient' : 'sample recipient'}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{previewRecipient.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>
                        {previewRecipient.email}
                      </div>
                    </div>
                  )}
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Subject
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginTop: '0.35rem', paddingBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                    {previewSubject || 'Your email subject will appear here'}
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.875rem' }}>
                    Message
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#374151', lineHeight: 1.65, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                    {previewBody}
                  </div>
                </aside>
              </div>
            )}

            {composeStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="section-title">Review & Send</h3>
                <div style={{ padding: '1rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  {[
                    { label: 'Recipients', value: `${selected.size} contacts` },
                    { label: 'Subject', value: subject || 'No subject set' },
                    { label: 'Schedule', value: 'Send now' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #1e1e1e' }}>
                      <span className="label">{r.label}</span>
                      <span style={{ fontSize: '1.05rem', color: '#000000' }}>{r.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0.875rem', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#d0c060' }}>
                  ⚠ Sending to {selected.size} recipients. This action cannot be undone.
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
                  <button className="btn-secondary" onClick={() => setComposeStep(2)}>← Back</button>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-secondary"><CheckCircle size={14} />Save Draft</button>
                    <button className="btn-primary"><Send size={14} />Send Campaign</button>
                  </div>
                </div>
              </div>
            )}
          </div>

      </div>

    </div>
  )
}
