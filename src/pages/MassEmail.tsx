import { useState } from 'react'
import { Mail, Send, Users, Eye, Plus, AlertTriangle, CheckCircle } from 'lucide-react'

const campaigns = [
  { id: 1, name: 'Site Managers – Manchester Opportunities', recipients: 45, sent: 45, opened: 32, clicked: 12, status: 'sent', date: '2025-06-06' },
  { id: 2, name: 'Civil Engineers – Monthly Newsletter', recipients: 180, sent: 180, opened: 126, clicked: 45, status: 'sent', date: '2025-06-01' },
  { id: 3, name: 'New Vacancies – Structural Engineers', recipients: 62, sent: 62, opened: 41, clicked: 18, status: 'sent', date: '2025-05-28' },
  { id: 4, name: 'Groundworks Foremen – Contract Roles', recipients: 28, sent: 0, opened: 0, clicked: 0, status: 'draft', date: '2025-06-08' },
]

const templates = [
  { id: 1, name: 'New Vacancy Alert', category: 'Vacancies' },
  { id: 2, name: 'Monthly Newsletter', category: 'Newsletter' },
  { id: 3, name: 'Interview Invitation', category: 'Candidates' },
  { id: 4, name: 'Job Offer', category: 'Candidates' },
  { id: 5, name: 'Check-in / Keep Warm', category: 'Candidates' },
]

const statusConfig: Record<string, { label: string; cls: string }> = {
  sent: { label: 'Sent', cls: 'badge-green' },
  draft: { label: 'Draft', cls: 'badge-gray' },
  scheduled: { label: 'Scheduled', cls: 'badge-yellow' },
  failed: { label: 'Failed', cls: 'badge-red' },
}

export default function MassEmail() {
  const [tab, setTab] = useState<'campaigns' | 'compose' | 'templates'>('campaigns')
  const [composeStep, setComposeStep] = useState(1)
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Mass Email</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>Send targeted campaigns to candidates and clients</p>
        </div>
        <button className="btn-primary" onClick={() => { setTab('compose'); setComposeStep(1) }}><Plus size={15} />New Campaign</button>
      </div>

      {/* Safety notice */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 1rem', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '0.5rem' }}>
        <AlertTriangle size={16} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '1px' }} />
        <div style={{ fontSize: '1.05rem', color: '#000000' }}>
          <strong style={{ color: '#fbbf24' }}>Email Safety Rules Active:</strong> Max 500 recipients per campaign • 24h cooldown per recipient • Unsubscribe link auto-appended • GDPR compliant
        </div>
      </div>

      <div className="tab-bar">
        <button className={`tab ${tab === 'campaigns' ? 'active' : ''}`} onClick={() => setTab('campaigns')}>Campaigns</button>
        <button className={`tab ${tab === 'compose' ? 'active' : ''}`} onClick={() => { setTab('compose'); setComposeStep(1) }}>Compose</button>
        <button className={`tab ${tab === 'templates' ? 'active' : ''}`} onClick={() => setTab('templates')}>Templates</button>
      </div>

      {tab === 'campaigns' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Tracking note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.25)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#000000' }}>
            <Eye size={15} style={{ color: '#60a5fa', flexShrink: 0 }} />
            Open/click tracking available when Mailgun is enabled. Configure in <strong>Settings → Email / SMTP</strong>.
          </div>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
            {[
              { label: 'Campaigns', value: campaigns.length, color: '#b8942e' },
              { label: 'Emails Sent', value: campaigns.reduce((a, c) => a + c.sent, 0), color: '#60a5fa' },
              { label: 'Avg Open Rate', value: '68%', color: '#34d399' },
              { label: 'Avg Click Rate', value: '28%', color: '#c084fc' },
            ].map(s => (
              <div key={s.label} className="card" style={{ textAlign: 'center', padding: '0.875rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="data-table">
              <thead>
                <tr><th>Campaign Name</th><th>Status</th><th>Recipients</th><th>Opens</th><th>Clicks</th><th>Open Rate</th><th>Date</th><th></th></tr>
              </thead>
              <tbody>
                {campaigns.map(c => (
                  <tr key={c.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{c.name}</div>
                    </td>
                    <td><span className={`badge ${statusConfig[c.status].cls}`}>{statusConfig[c.status].label}</span></td>
                    <td style={{ color: '#000000' }}>{c.recipients}</td>
                    <td style={{ color: '#000000' }}>{c.opened}</td>
                    <td style={{ color: '#000000' }}>{c.clicked}</td>
                    <td>
                      {c.sent > 0 ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <div style={{ flex: 1, height: 5, background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden', minWidth: 60 }}>
                            <div style={{ height: '100%', width: `${Math.round((c.opened / c.sent) * 100)}%`, background: '#34d399', borderRadius: '9999px' }} />
                          </div>
                          <span style={{ fontSize: '1.05rem', color: '#34d399', fontWeight: 600 }}>{Math.round((c.opened / c.sent) * 100)}%</span>
                        </div>
                      ) : <span style={{ color: '#000000', fontSize: '1.05rem' }}>—</span>}
                    </td>
                    <td style={{ fontSize: '1.05rem', color: '#000000' }}>{c.date}</td>
                    <td>
                      <button className="btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '1.05rem' }}><Eye size={13} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'compose' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.25rem', alignItems: 'start' }}>
          <div className="card">
            {/* Steps */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Recipients', 'Message', 'Review & Send'].map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: composeStep > i + 1 ? '#b8942e' : composeStep === i + 1 ? '#b8942e' : '#e5e7eb',
                    color: composeStep >= i + 1 ? '#ffffff' : '#000000', fontWeight: 700, fontSize: '1.05rem', flexShrink: 0
                  }}>
                    {composeStep > i + 1 ? <CheckCircle size={14} /> : i + 1}
                  </div>
                  <span style={{ fontSize: '1.05rem', color: composeStep === i + 1 ? '#000000' : '#000000', fontWeight: composeStep === i + 1 ? 600 : 400 }}>{step}</span>
                  {i < 2 && <div style={{ width: 30, height: 1, background: '#f1f5f9' }} />}
                </div>
              ))}
            </div>

            {composeStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="section-title">Select Recipients</h3>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Recipient Type</label>
                  <select className="input">
                    <option>Candidates</option><option>Clients</option><option>Both</option>
                  </select>
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Filter by Discipline</label>
                  <select className="input">
                    <option>All Disciplines</option>
                    <option>Civil</option><option>Structural</option><option>Groundworks</option><option>MEP</option>
                  </select>
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Filter by Location</label>
                  <input className="input" placeholder="e.g. Manchester, London" />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Filter by Status</label>
                  <select className="input">
                    <option>All Status</option><option>Available</option><option>Interviewing</option>
                  </select>
                </div>
                <div style={{ padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Users size={18} style={{ color: '#b8942e' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.1rem' }}>47 recipients selected</div>
                    <div style={{ fontSize: '1.05rem', color: '#000000' }}>From your filters above</div>
                  </div>
                </div>
                <button className="btn-primary" style={{ alignSelf: 'flex-end' }} onClick={() => setComposeStep(2)}>Next: Message →</button>
              </div>
            )}

            {composeStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="section-title">Compose Message</h3>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Campaign Name</label>
                  <input className="input" placeholder="e.g. Site Managers – June Opportunities" />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Subject</label>
                  <input className="input" placeholder="Subject line..." value={subject} onChange={e => setSubject(e.target.value)} />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>From Name</label>
                  <input className="input" defaultValue="Tom Bradley – Backfill Construction Recruitment" />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Message Body</label>
                  <textarea className="input" rows={8} placeholder="Write your email message here...

Hi {{first_name}},

I hope this message finds you well..." value={body} onChange={e => setBody(e.target.value)} style={{ resize: 'vertical' }} />
                </div>
                <div style={{ fontSize: '1.05rem', color: '#000000' }}>Available merge fields: {'{{first_name}}'} {'{{last_name}}'} {'{{role}}'} {'{{location}}'}</div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
                  <button className="btn-secondary" onClick={() => setComposeStep(1)}>← Back</button>
                  <button className="btn-primary" onClick={() => setComposeStep(3)}>Next: Review →</button>
                </div>
              </div>
            )}

            {composeStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="section-title">Review & Send</h3>
                <div style={{ padding: '1rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  {[
                    { label: 'Recipients', value: '47 candidates' },
                    { label: 'Subject', value: subject || 'No subject set' },
                    { label: 'From', value: 'Tom Bradley – Backfill' },
                    { label: 'Schedule', value: 'Send now' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #1e1e1e' }}>
                      <span className="label">{r.label}</span>
                      <span style={{ fontSize: '1.05rem', color: '#000000' }}>{r.value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0.875rem', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#d0c060' }}>
                  ⚠ Sending to 47 recipients. This action cannot be undone.
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

          {/* Templates panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="card">
              <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Email Templates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {templates.map(t => (
                  <button key={t.id} style={{
                    background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.5rem',
                    padding: '0.625rem 0.75rem', textAlign: 'left', cursor: 'pointer', transition: 'border-color 0.15s'
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#b8942e')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#222')}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#000000' }}>{t.name}</div>
                    <span className="badge badge-gray" style={{ marginTop: '0.3rem' }}>{t.category}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'templates' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {templates.map(t => (
            <div key={t.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#000000' }}>{t.name}</h4>
                <span className="badge badge-gold">{t.category}</span>
              </div>
              <p style={{ margin: 0, fontSize: '1.05rem', color: '#000000', lineHeight: 1.5 }}>Template for sending {t.name.toLowerCase()} communications to candidates and clients.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '1.05rem' }}><Eye size={13} />Preview</button>
                <button className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '1.05rem' }}><Mail size={13} />Use</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
