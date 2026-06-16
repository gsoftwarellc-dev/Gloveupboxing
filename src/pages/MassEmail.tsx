import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  Building2,
  CheckCircle,
  Mail,
  MapPin,
  Plus,
  Search,
  Send,
  SlidersHorizontal,
  Users,
} from 'lucide-react'
import { candidates as initialCandidates, type Candidate } from '../data/mock'

type Channel = 'mail' | 'message'
type SendMode = 'now' | 'scheduled'

interface CandidateTemplate {
  id: string
  name: string
  audience: string
  subject: string
  body: string
}

const PAGE_SIZE = 50
const allCandidates: Candidate[] = initialCandidates.map(c => ({ ...c }))

const allSectors = Array.from(new Set(allCandidates.map(c => c.discipline).filter(Boolean))).sort()
const allStatuses = Array.from(new Set(allCandidates.map(c => c.status).filter(Boolean))).sort()

const candidateTemplates: CandidateTemplate[] = [
  {
    id: 'new-role',
    name: 'New Role Alert',
    audience: 'Qualified candidates',
    subject: 'New opportunities for {{discipline}} professionals',
    body: `Hi {{first_name}},

We have new opportunities that could be a strong fit for your background in {{discipline}}.

Based on your location in {{location}}, we wanted to send this through personally.

If you're open to a conversation, reply and we can talk through the details.
`,
  },
  {
    id: 'availability',
    name: 'Availability Check-In',
    audience: 'All candidates',
    subject: 'Are you available for work at the moment?',
    body: `Hi {{first_name}},

Just checking in to see whether you are currently available or expecting to be free soon.

We are matching candidates across {{discipline}} roles and would like to keep you in mind for upcoming opportunities.
`,
  },
  {
    id: 'interview',
    name: 'Interview Invite',
    audience: 'Shortlisted candidates',
    subject: 'Next step for your {{role}} application',
    body: `Hi {{first_name}},

We would like to move you forward for a role that matches your {{role}} experience.

If you are happy to proceed, reply to this message and we will share the next steps.
`,
  },
  {
    id: 'market-update',
    name: 'Market Update',
    audience: 'Candidates by area',
    subject: 'Current opportunities in {{location}}',
    body: `Hi {{first_name}},

We are sending a quick market update for candidates based around {{location}}.

There are strong opportunities across {{discipline}}, and we wanted to make sure you are aware of them first.
`,
  },
]

function normalize(value: string) {
  return value.trim().toLowerCase()
}

function mergeCandidateFields(template: string, candidate: Candidate): string {
  const firstName = candidate.name.trim().split(/\s+/)[0] || candidate.name

  return template
    .replaceAll('{{first_name}}', firstName)
    .replaceAll('{{role}}', candidate.role || 'your role')
    .replaceAll('{{discipline}}', candidate.discipline || 'your sector')
    .replaceAll('{{location}}', candidate.location || 'your area')
    .replaceAll('{{postcode}}', candidate.postcode || 'your postcode')
}

export default function MassEmail() {
  const [channel, setChannel] = useState<Channel>('mail')
  const [composeStep, setComposeStep] = useState(1)
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [activeTemplateId, setActiveTemplateId] = useState(candidateTemplates[0].id)
  const [sendMode, setSendMode] = useState<SendMode>('now')
  const [scheduleDate, setScheduleDate] = useState('')
  const [scheduleTime, setScheduleTime] = useState('')

  const [search, setSearch] = useState('')
  const [postcodeFilter, setPostcodeFilter] = useState('')
  const [areaFilter, setAreaFilter] = useState('')
  const [sectorFilter, setSectorFilter] = useState('All Sectors')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = normalize(search)
    const postcode = normalize(postcodeFilter)
    const area = normalize(areaFilter)

    return allCandidates.filter(c => {
      if (sectorFilter !== 'All Sectors' && c.discipline !== sectorFilter) return false
      if (statusFilter !== 'All Statuses' && c.status !== statusFilter) return false
      if (postcode && !normalize(c.postcode).includes(postcode)) return false
      if (area && !normalize(c.location).includes(area) && !normalize(c.postcode).includes(area)) return false
      if (
        q &&
        !normalize(c.name).includes(q) &&
        !normalize(c.role).includes(q) &&
        !normalize(c.location).includes(q) &&
        !normalize(c.postcode).includes(q) &&
        !normalize(c.discipline).includes(q)
      ) return false
      return true
    })
  }, [areaFilter, postcodeFilter, search, sectorFilter, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const previewCandidate = allCandidates.find(candidate => selected.has(candidate.id)) ?? filtered[0] ?? allCandidates[0] ?? null
  const selectedTemplate = candidateTemplates.find(t => t.id === activeTemplateId) ?? candidateTemplates[0]

  const previewSubject = previewCandidate
    ? mergeCandidateFields(subject, previewCandidate)
    : subject
  const previewBodyTemplate = body || `Hi {{first_name}},

I hope this message finds you well.

We have opportunities relevant to your background in {{discipline}}.`
  const previewBody = previewCandidate
    ? mergeCandidateFields(previewBodyTemplate, previewCandidate)
    : previewBodyTemplate
  const selectedCount = selected.size
  const reviewRows = channel === 'mail'
    ? [
        { label: 'Recipients', value: `${selectedCount} candidates` },
        { label: 'Subject', value: subject || 'No subject set' },
        { label: 'Delivery', value: sendMode === 'scheduled' ? `${scheduleDate || 'No date'} ${scheduleTime ? `at ${scheduleTime}` : ''}` : 'Send now' },
        { label: 'Template', value: selectedTemplate.name },
      ]
    : [
        { label: 'Recipients', value: `${selectedCount} candidates` },
        { label: 'Message', value: body ? 'Ready' : 'No message set' },
        { label: 'Delivery', value: sendMode === 'scheduled' ? `${scheduleDate || 'No date'} ${scheduleTime ? `at ${scheduleTime}` : ''}` : 'Send now' },
        { label: 'Mode', value: 'Bulk Message' },
      ]

  function toggle(id: number) {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function toggleAllOnPage() {
    setSelected(prev => {
      const next = new Set(prev)
      const allSelected = pageItems.length > 0 && pageItems.every(c => next.has(c.id))
      for (const c of pageItems) {
        if (allSelected) next.delete(c.id)
        else next.add(c.id)
      }
      return next
    })
  }

  function selectAllFiltered() {
    setSelected(new Set(filtered.map(c => c.id)))
  }

  function clearSelection() {
    setSelected(new Set())
  }

  function applyTemplate(template: CandidateTemplate) {
    setActiveTemplateId(template.id)
    setSubject(channel === 'mail' ? template.subject : '')
    setBody(template.body)
  }

  function startNewCampaign() {
    setComposeStep(1)
    setSubject('')
    setBody('')
    setActiveTemplateId(candidateTemplates[0].id)
    setSendMode('now')
    setScheduleDate('')
    setScheduleTime('')
    setSearch('')
    setPostcodeFilter('')
    setAreaFilter('')
    setSectorFilter('All Sectors')
    setStatusFilter('All Statuses')
    setSelected(new Set())
    setPage(1)
  }

  function openChannel(nextChannel: Channel) {
    setChannel(nextChannel)
    setComposeStep(1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Candidate Bulk Messaging</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>
            Filter candidates by postcode, area, sector and status, then send targeted mail or messages
          </p>
        </div>
        <button className="btn-primary" onClick={startNewCampaign}><Plus size={15} />New Campaign</button>
      </div>

      <div style={{ display: 'inline-flex', gap: '0.25rem', padding: '0.25rem', background: '#f3f4f6', borderRadius: '0.75rem', width: 'fit-content' }}>
        <button
          type="button"
          onClick={() => openChannel('mail')}
          style={{
            border: 'none',
            cursor: 'pointer',
            borderRadius: '0.5rem',
            padding: '0.6rem 1rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            background: channel === 'mail' ? '#1a1a2e' : 'transparent',
            color: channel === 'mail' ? '#fff' : '#6b7280',
          }}
        >
          Mail
        </button>
        <button
          type="button"
          onClick={() => openChannel('message')}
          style={{
            border: 'none',
            cursor: 'pointer',
            borderRadius: '0.5rem',
            padding: '0.6rem 1rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            background: channel === 'message' ? '#1a1a2e' : 'transparent',
            color: channel === 'message' ? '#fff' : '#6b7280',
          }}
        >
          Message
        </button>
      </div>

      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 0 }}>
            <h3 className="section-title" style={{ marginBottom: '0.35rem' }}>Bulk Messaging Features</h3>
            <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Target the right candidates by postcode, area, and sector before you send a bulk message.
            </p>
          </div>
          <span className="badge badge-gold">{selectedCount.toLocaleString()} selected</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '0.75rem', marginTop: '1rem' }}>
          <div className="card" style={{ padding: '1rem', background: '#f8f9fb' }}>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>Postcode Filters</div>
            <div style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6 }}>Find candidates by exact postcode or outcode.</div>
          </div>
          <div className="card" style={{ padding: '1rem', background: '#f8f9fb' }}>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>Area Filters</div>
            <div style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6 }}>Narrow to a town, city, or local area.</div>
          </div>
          <div className="card" style={{ padding: '1rem', background: '#f8f9fb' }}>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>Sector Filters</div>
            <div style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6 }}>Target discipline, sector, or status.</div>
          </div>
          <div className="card" style={{ padding: '1rem', background: '#f8f9fb' }}>
            <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              {channel === 'mail' ? 'Bulk Delivery' : 'Bulk Messaging'}
            </div>
            <div style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {channel === 'mail' ? 'Send immediately or schedule later.' : 'Send a shorter bulk message with the same filters.'}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div className="label" style={{ marginBottom: '0.5rem' }}>Quick Templates</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {candidateTemplates.map(template => {
              const active = template.id === activeTemplateId
              return (
                <button
                  key={template.id}
                  className="btn-secondary"
                  type="button"
                  onClick={() => applyTemplate(template)}
                  style={{
                    borderColor: active ? '#b8942e' : undefined,
                    background: active ? 'rgba(184,148,46,0.08)' : undefined,
                    color: active ? '#b8942e' : undefined,
                  }}
                >
                  {template.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['Filters', 'Message', 'Review & Send'].map((step, i) => (
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
            <h3 className="section-title">{channel === 'mail' ? 'Filter Candidates for Mail' : 'Filter Candidates for Message'}</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <Search size={14} style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                <input
                  className="input"
                  style={{ paddingLeft: '2rem' }}
                  placeholder="Search name, role, postcode or sector..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1) }}
                />
              </div>
              <div>
                <select className="input" value={sectorFilter} onChange={e => { setSectorFilter(e.target.value); setPage(1) }}>
                  <option>All Sectors</option>
                  {allSectors.map(sector => <option key={sector}>{sector}</option>)}
                </select>
              </div>
              <div>
                <input
                  className="input"
                  placeholder="Postcode or outcode, e.g. CB2"
                  value={postcodeFilter}
                  onChange={e => { setPostcodeFilter(e.target.value); setPage(1) }}
                />
              </div>
              <div>
                <input
                  className="input"
                  placeholder="Area / town / city"
                  value={areaFilter}
                  onChange={e => { setAreaFilter(e.target.value); setPage(1) }}
                />
              </div>
              <div>
                <select className="input" value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1) }}>
                  <option>All Statuses</option>
                  {allStatuses.map(status => <option key={status}>{status}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 0.25rem', color: '#6b7280', fontSize: '0.9rem' }}>
                <SlidersHorizontal size={14} /> Use postcode, area and sector together to narrow the list
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <button className="badge badge-gray" style={{ cursor: 'pointer', border: 'none' }} onClick={() => { setSectorFilter('All Sectors'); setPage(1) }}>
                All Sectors
              </button>
              {allSectors.map(sector => (
                <button
                  key={sector}
                  className="badge badge-gray"
                  style={{ cursor: 'pointer', border: 'none' }}
                  onClick={() => { setSectorFilter(sector); setPage(1) }}
                >
                  {sector}
                </button>
              ))}
            </div>

            <div style={{ padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Users size={18} style={{ color: '#b8942e' }} />
                <div>
                  <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.1rem' }}>{selectedCount} candidates selected</div>
                  <div style={{ fontSize: '1.05rem', color: '#000000' }}>{filtered.length.toLocaleString()} match current filters</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button className="btn-secondary" onClick={selectAllFiltered}>Select All Filtered</button>
                <button className="btn-secondary" onClick={clearSelection}>Clear</button>
              </div>
            </div>

            {selectedCount > 500 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#dc2626' }}>
                <AlertTriangle size={14} /> Selection exceeds the 500 recipient safety limit — narrow your filters before sending.
              </div>
            )}

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: 36 }}>
                      <input type="checkbox" checked={pageItems.length > 0 && pageItems.every(c => selected.has(c.id))} onChange={toggleAllOnPage} />
                    </th>
                    <th>Candidate</th>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Sector</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map(c => (
                    <tr key={c.id}>
                      <td><input type="checkbox" checked={selected.has(c.id)} onChange={() => toggle(c.id)} /></td>
                      <td style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{c.name}</td>
                      <td style={{ color: '#000000' }}>{c.role}</td>
                      <td style={{ color: '#000000' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <MapPin size={12} style={{ color: '#9ca3af' }} />
                            {c.location || '—'}
                          </div>
                          <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>{c.postcode || 'No postcode'}</div>
                        </div>
                      </td>
                      <td style={{ color: '#000000' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Building2 size={12} style={{ color: '#b8942e' }} />{c.discipline}
                        </div>
                      </td>
                      <td style={{ color: '#000000', fontSize: '0.95rem' }}>{c.status}</td>
                    </tr>
                  ))}
                  {pageItems.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', color: '#9ca3af', padding: '1.5rem' }}>
                        No candidates match these filters.
                      </td>
                    </tr>
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

            <button className="btn-primary" style={{ alignSelf: 'flex-end' }} disabled={selectedCount === 0 || selectedCount > 500} onClick={() => setComposeStep(2)}>
              Next: Message →
            </button>
          </div>
        )}

        {composeStep === 2 && channel === 'mail' && (
          <div className="email-compose-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
              <h3 className="section-title">Compose Mail</h3>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Mail Subject</label>
                <input className="input" placeholder="Subject line..." value={subject} onChange={e => setSubject(e.target.value)} />
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Mail Body</label>
                <textarea
                  className="input"
                  rows={8}
                  placeholder="Write your email message here...

Hi {{first_name}},

I hope this message finds you well..."
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>
              <div style={{ fontSize: '1.05rem', color: '#000000' }}>
                Available merge fields: {'{{first_name}}'} {'{{role}}'} {'{{discipline}}'} {'{{location}}'} {'{{postcode}}'}
              </div>
              <div style={{ display: 'grid', gap: '0.75rem', padding: '1rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.75rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Delivery Options</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSendMode('now')}
                    style={{
                      borderColor: sendMode === 'now' ? '#b8942e' : undefined,
                      background: sendMode === 'now' ? 'rgba(184,148,46,0.08)' : undefined,
                      color: sendMode === 'now' ? '#b8942e' : undefined,
                    }}
                  >
                    Send now
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSendMode('scheduled')}
                    style={{
                      borderColor: sendMode === 'scheduled' ? '#b8942e' : undefined,
                      background: sendMode === 'scheduled' ? 'rgba(184,148,46,0.08)' : undefined,
                      color: sendMode === 'scheduled' ? '#b8942e' : undefined,
                    }}
                  >
                    Schedule later
                  </button>
                </div>
                {sendMode === 'scheduled' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Send Date</label>
                      <input className="input" type="date" value={scheduleDate} onChange={e => setScheduleDate(e.target.value)} />
                    </div>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Send Time</label>
                      <input className="input" type="time" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
                <button className="btn-secondary" onClick={() => setComposeStep(1)}>← Back</button>
                <button className="btn-primary" onClick={() => setComposeStep(3)}>Next: Review →</button>
              </div>
            </div>

            <aside className="email-preview">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Mail size={17} style={{ color: '#b8942e' }} />
                <h3 className="section-title">Mail Preview</h3>
              </div>
              {previewCandidate && (
                <div style={{ paddingBottom: '0.875rem', marginBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.2rem' }}>
                    Previewing as {selectedCount > 0 ? 'selected candidate' : 'sample candidate'}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{previewCandidate.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>
                    {previewCandidate.role} · {previewCandidate.discipline}
                  </div>
                </div>
              )}
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Template
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginTop: '0.35rem', paddingBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                {selectedTemplate.name} · {selectedTemplate.audience}
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.875rem' }}>
                Subject
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginTop: '0.35rem', paddingBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                {previewSubject || 'Your mail subject will appear here'}
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.875rem' }}>
                Body
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#374151', lineHeight: 1.65, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                {previewBody}
              </div>
            </aside>
          </div>
        )}

        {composeStep === 2 && channel === 'message' && (
          <div className="email-compose-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
              <h3 className="section-title">Compose Message</h3>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Message</label>
                <textarea
                  className="input"
                  rows={8}
                  placeholder="Write your bulk message here...

Hi {{first_name}},

We have a new opportunity that may be relevant to your background in {{discipline}}..."
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>
              <div style={{ fontSize: '1.05rem', color: '#000000' }}>
                Available merge fields: {'{{first_name}}'} {'{{role}}'} {'{{discipline}}'} {'{{location}}'} {'{{postcode}}'}
              </div>
              <div style={{ display: 'grid', gap: '0.75rem', padding: '1rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.75rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a' }}>Delivery Options</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSendMode('now')}
                    style={{
                      borderColor: sendMode === 'now' ? '#b8942e' : undefined,
                      background: sendMode === 'now' ? 'rgba(184,148,46,0.08)' : undefined,
                      color: sendMode === 'now' ? '#b8942e' : undefined,
                    }}
                  >
                    Send now
                  </button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSendMode('scheduled')}
                    style={{
                      borderColor: sendMode === 'scheduled' ? '#b8942e' : undefined,
                      background: sendMode === 'scheduled' ? 'rgba(184,148,46,0.08)' : undefined,
                      color: sendMode === 'scheduled' ? '#b8942e' : undefined,
                    }}
                  >
                    Schedule later
                  </button>
                </div>
                {sendMode === 'scheduled' && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Send Date</label>
                      <input className="input" type="date" value={scheduleDate} onChange={e => setScheduleDate(e.target.value)} />
                    </div>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Send Time</label>
                      <input className="input" type="time" value={scheduleTime} onChange={e => setScheduleTime(e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
                <button className="btn-secondary" onClick={() => setComposeStep(1)}>← Back</button>
                <button className="btn-primary" onClick={() => setComposeStep(3)}>Next: Review →</button>
              </div>
            </div>

            <aside className="email-preview">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Mail size={17} style={{ color: '#b8942e' }} />
                <h3 className="section-title">Message Preview</h3>
              </div>
              {previewCandidate && (
                <div style={{ paddingBottom: '0.875rem', marginBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.2rem' }}>
                    Previewing as {selectedCount > 0 ? 'selected candidate' : 'sample candidate'}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{previewCandidate.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>
                    {previewCandidate.role} · {previewCandidate.discipline}
                  </div>
                </div>
              )}
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
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
              {reviewRows.map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.5rem 0', borderBottom: '1px solid #1e1e1e' }}>
                  <span className="label">{r.label}</span>
                  <span style={{ fontSize: '1.05rem', color: '#000000', textAlign: 'right' }}>{r.value}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '0.875rem', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#d0c060' }}>
              ⚠ Sending to {selectedCount} candidates. This action cannot be undone.
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setComposeStep(2)}>← Back</button>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-secondary"><CheckCircle size={14} />Save Draft</button>
                <button className="btn-primary">{channel === 'mail' ? <Send size={14} /> : <Mail size={14} />}{channel === 'mail' ? 'Send Mail' : 'Send Message'}</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {allCandidates.length === 0 && (
        <div className="card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#92400e', background: '#fefce8', borderColor: '#f5d36b' }}>
          <AlertTriangle size={16} />
          No candidate records are currently loaded in the mock data. Once candidate data is imported, this page will filter and message them.
        </div>
      )}
    </div>
  )
}
