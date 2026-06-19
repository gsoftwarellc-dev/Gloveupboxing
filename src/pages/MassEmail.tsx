import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  Building2,
  CheckCircle,
  Clipboard,
  Mail,
  MapPin,
  MessageSquare,
  Plus,
  Search,
  Send,
  SlidersHorizontal,
  Trash2,
  Users,
} from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { Candidate, ClientCompany, Project } from '../types/crm'

type Channel = 'mail' | 'sms'
type SendMode = 'now' | 'scheduled'
type RecipientType = 'candidate' | 'client' | 'project' | 'pasted'

interface Recipient {
  id: string            // stable key, e.g. "candidate-12", "client-3-6248", "project-145-571", "pasted-foo@bar.com"
  type: RecipientType
  name: string
  email: string
  role: string          // job title / contact role
  org: string           // company (client) or project name
  // candidate-only fields used for filtering + merge
  candidateId?: number
  discipline?: string
  status?: string
  location?: string
  postcode?: string
  phone?: string
}

const recipientTypeConfig: Record<RecipientType, { label: string; cls: string }> = {
  candidate: { label: 'Candidate', cls: 'badge-blue' },
  client:    { label: 'Client',    cls: 'badge-gold' },
  project:   { label: 'Project',   cls: 'badge-green' },
  pasted:    { label: 'Pasted',    cls: 'badge-gray' },
}

// Pulls every email-looking token out of pasted text, regardless of separator (newline, comma, semicolon, tab, space).
const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

function parsePastedEmails(text: string): string[] {
  const matches = text.match(EMAIL_RE) ?? []
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of matches) {
    const email = raw.trim().toLowerCase()
    if (!seen.has(email)) {
      seen.add(email)
      out.push(email)
    }
  }
  return out
}

function buildRecipients(
  candidates: Candidate[],
  clients: ClientCompany[],
  projects: Project[],
): Recipient[] {
  const list: Recipient[] = []

  for (const c of candidates) {
    if (!c.email?.trim()) continue
    list.push({
      id: `candidate-${c.id}`,
      type: 'candidate',
      name: c.name,
      email: c.email.trim(),
      role: c.role || '',
      org: '',
      candidateId: c.id,
      discipline: c.discipline,
      status: c.status,
      location: c.location,
      postcode: c.postcode,
      phone: c.phone,
    })
  }

  for (const client of clients) {
    for (const contact of client.contacts || []) {
      if (!contact.email?.trim()) continue
      list.push({
        id: `client-${client.id}-${contact.id ?? contact.email}`,
        type: 'client',
        name: contact.name,
        email: contact.email.trim(),
        role: contact.role || '',
        org: client.name,
        discipline: client.disciplines?.[0] ?? '',
        phone: contact.phone,
      })
    }
  }

  for (const project of projects) {
    for (const contact of project.contacts || []) {
      if (!contact.email?.trim()) continue
      list.push({
        id: `project-${project.id}-${contact.id ?? contact.email}`,
        type: 'project',
        name: contact.name,
        email: contact.email.trim(),
        role: contact.role || '',
        org: project.name,
        location: project.location,
        postcode: project.postcode,
        discipline: project.sector ?? '',
        phone: contact.phone,
      })
    }
  }

  return list
}

interface CandidateTemplate {
  id: string
  name: string
  audience: string
  subject: string
  body: string
}

const PAGE_SIZE = 50

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

const statusConfig: Record<string, { label: string; cls: string }> = {
  new:             { label: 'New',           cls: 'badge-blue' },
  available:       { label: 'Available',     cls: 'badge-green' },
  placed:          { label: 'Placed',        cls: 'badge-blue' },
  interviewing:    { label: 'Interviewing',  cls: 'badge-yellow' },
  'not-available': { label: 'Not Available', cls: 'badge-red' },
  reserve:         { label: 'Unqualified',   cls: 'badge-gray' },
  qualified:       { label: 'Ready to Work', cls: 'badge-gold' },
}

function normalize(value: string) {
  return value.trim().toLowerCase()
}

function mergeRecipientFields(template: string, r: Recipient): string {
  const firstName = r.name.trim().split(/\s+/)[0] || r.name

  return template
    .replaceAll('{{first_name}}', firstName)
    .replaceAll('{{role}}', r.role || 'your role')
    .replaceAll('{{discipline}}', r.discipline || 'your sector')
    .replaceAll('{{location}}', r.location || 'your area')
    .replaceAll('{{postcode}}', r.postcode || 'your postcode')
    .replaceAll('{{company}}', r.org || 'your company')
}

export default function MassEmail() {
  const { candidates: allCandidates, clients: allClients, projects: allProjects, saveCampaign, loading, error } = useCrmData()
  const [pastedRecipients, setPastedRecipients] = useState<Recipient[]>([])
  const [pasteText, setPasteText] = useState('')
  const [pasteFeedback, setPasteFeedback] = useState('')
  const allRecipients = useMemo(
    () => [...buildRecipients(allCandidates, allClients, allProjects), ...pastedRecipients],
    [allCandidates, allClients, allProjects, pastedRecipients],
  )

  function handleAddPastedEmails() {
    const emails = parsePastedEmails(pasteText)
    if (emails.length === 0) {
      setPasteFeedback('No valid email addresses found in that text.')
      return
    }
    const existing = new Set(allRecipients.map(r => r.email.toLowerCase()).filter(Boolean))
    const fresh = emails.filter(email => !existing.has(email))
    const skipped = emails.length - fresh.length

    setPastedRecipients(prev => [
      ...prev,
      ...fresh.map(email => ({
        id: `pasted-${email}`,
        type: 'pasted' as const,
        name: email.split('@')[0],
        email,
        role: 'Pasted contact',
        org: '—',
      })),
    ])
    setPasteText('')
    setPasteFeedback(
      fresh.length === 0
        ? `All ${emails.length} email${emails.length === 1 ? '' : 's'} were already in the list.`
        : `Added ${fresh.length} email${fresh.length === 1 ? '' : 's'}.${skipped > 0 ? ` Skipped ${skipped} duplicate${skipped === 1 ? '' : 's'}.` : ''}`,
    )
  }

  function handleClearPasted() {
    setPastedRecipients([])
    setPasteFeedback('')
  }

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
  // 'clients-all' groups Clients-page contacts + Projects-page contacts into one bulk client section.
  const [typeFilter, setTypeFilter] = useState<'all' | RecipientType | 'clients-all'>('all')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [page, setPage] = useState(1)
  const [savingCampaign, setSavingCampaign] = useState(false)
  const [campaignMessage, setCampaignMessage] = useState('')

  // SMS needs a phone number; Mail needs an email address — the same person can lack one or the other.
  const channelRecipients = useMemo(
    () => allRecipients.filter(r => (channel === 'mail' ? !!r.email : !!r.phone?.trim())),
    [allRecipients, channel],
  )

  const allSectors = Array.from(new Set(channelRecipients.map(r => r.discipline).filter(Boolean) as string[])).sort()
  const allStatuses = Array.from(new Set(allCandidates.map(c => c.status).filter(Boolean))).sort()

  const typeCounts = useMemo(() => ({
    all: channelRecipients.length,
    candidate: channelRecipients.filter(r => r.type === 'candidate').length,
    client: channelRecipients.filter(r => r.type === 'client').length,
    project: channelRecipients.filter(r => r.type === 'project').length,
    pasted: channelRecipients.filter(r => r.type === 'pasted').length,
    'clients-all': channelRecipients.filter(r => r.type === 'client' || r.type === 'project').length,
  }), [channelRecipients])

  const filtered = useMemo(() => {
    const q = normalize(search)
    const postcode = normalize(postcodeFilter)
    const area = normalize(areaFilter)

    return channelRecipients.filter(r => {
      if (typeFilter === 'clients-all') {
        if (r.type !== 'client' && r.type !== 'project') return false
      } else if (typeFilter !== 'all' && r.type !== typeFilter) return false
      if (sectorFilter !== 'All Sectors' && r.discipline !== sectorFilter) return false
      // Status only applies to candidates; non-candidates pass through unless a status is chosen.
      if (statusFilter !== 'All Statuses' && r.status !== statusFilter) return false
      if (postcode && !normalize(r.postcode ?? '').includes(postcode)) return false
      if (area && !normalize(r.location ?? '').includes(area) && !normalize(r.postcode ?? '').includes(area)) return false
      if (
        q &&
        !normalize(r.name).includes(q) &&
        !normalize(r.email).includes(q) &&
        !normalize(r.role).includes(q) &&
        !normalize(r.org).includes(q) &&
        !normalize(r.location ?? '').includes(q) &&
        !normalize(r.postcode ?? '').includes(q) &&
        !normalize(r.discipline ?? '').includes(q)
      ) return false
      return true
    })
  }, [channelRecipients, areaFilter, postcodeFilter, search, sectorFilter, statusFilter, typeFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const previewRecipient = channelRecipients.find(r => selected.has(r.id)) ?? filtered[0] ?? channelRecipients[0] ?? null
  const selectedTemplate = candidateTemplates.find(t => t.id === activeTemplateId) ?? candidateTemplates[0]

  const previewSubject = previewRecipient
    ? mergeRecipientFields(subject, previewRecipient)
    : subject
  const previewBodyTemplate = body || `Hi {{first_name}},

I hope this message finds you well.

We have opportunities relevant to your background in {{discipline}}.`
  const previewBody = previewRecipient
    ? mergeRecipientFields(previewBodyTemplate, previewRecipient)
    : previewBodyTemplate
  const selectedCount = selected.size
  const reviewRows = channel === 'mail'
    ? [
        { label: 'Recipients', value: `${selectedCount} recipients` },
        { label: 'Subject', value: subject || 'No subject set' },
        { label: 'Delivery', value: sendMode === 'scheduled' ? `${scheduleDate || 'No date'} ${scheduleTime ? `at ${scheduleTime}` : ''}` : 'Send now' },
        { label: 'Template', value: selectedTemplate.name },
      ]
    : [
        { label: 'Recipients', value: `${selectedCount} recipients` },
        { label: 'SMS Text', value: body ? 'Ready' : 'No message set' },
        { label: 'Delivery', value: sendMode === 'scheduled' ? `${scheduleDate || 'No date'} ${scheduleTime ? `at ${scheduleTime}` : ''}` : 'Send now' },
        { label: 'Mode', value: 'Bulk SMS' },
      ]

  function toggle(id: string) {
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
    setSelected(new Set(filtered.map(r => r.id)))
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
    setTypeFilter('all')
    setSelected(new Set())
    setPage(1)
  }

  function openChannel(nextChannel: Channel) {
    setChannel(nextChannel)
    setComposeStep(1)
  }

  async function persistCampaign(status: 'draft' | 'queued' | 'scheduled') {
    setSavingCampaign(true)
    setCampaignMessage('')
    try {
      const selectedRecipients = channelRecipients.filter(r => selected.has(r.id))
      const candidateIds = selectedRecipients
        .filter(r => r.type === 'candidate' && r.candidateId != null)
        .map(r => r.candidateId as number)
      const recipients = selectedRecipients
        .filter(r => r.type !== 'candidate')
        .map(r => ({ email: r.email || null, name: r.name, phone: r.phone ?? null }))

      await saveCampaign({
        channel: channel === 'mail' ? 'email' : 'sms',
        audience: selectedTemplate.audience,
        subject: channel === 'mail' ? subject : null,
        body: body || previewBodyTemplate,
        sendMode,
        scheduledAt: sendMode === 'scheduled' && scheduleDate ? `${scheduleDate} ${scheduleTime || '09:00'}:00` : null,
        status,
        filters: {
          search,
          postcodeFilter,
          areaFilter,
          sectorFilter,
          statusFilter,
          typeFilter,
          templateId: activeTemplateId,
        },
        candidateIds,
        recipients,
      })
      setCampaignMessage(status === 'draft' ? 'Campaign draft saved to MySQL.' : 'Campaign saved to MySQL for delivery.')
      if (status !== 'draft') startNewCampaign()
    } catch (err) {
      setCampaignMessage(err instanceof Error ? err.message : 'Unable to save campaign.')
    } finally {
      setSavingCampaign(false)
    }
  }

  if (loading || error) return <DataState loading={loading} error={error} />

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">{channel === 'mail' ? 'Bulk Email' : 'Bulk SMS'}</h1>
        </div>
        <button className="btn-primary" onClick={startNewCampaign}><Plus size={15} />New Campaign</button>
      </div>

      <div style={{ display: 'inline-flex', gap: '0.25rem', padding: '0.25rem', background: '#f3f4f6', borderRadius: '0.75rem', width: 'fit-content' }}>
        <button
          type="button"
          onClick={() => openChannel('mail')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
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
          <Mail size={15} /> Mail
        </button>
        <button
          type="button"
          onClick={() => openChannel('sms')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '0.5rem',
            padding: '0.6rem 1rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            background: channel === 'sms' ? '#1a1a2e' : 'transparent',
            color: channel === 'sms' ? '#fff' : '#6b7280',
          }}
        >
          <MessageSquare size={15} /> SMS
        </button>
      </div>

      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="badge badge-gold">{selectedCount.toLocaleString()} selected</span>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div className="label" style={{ marginBottom: '0.5rem' }}>Quick Templates {channel === 'sms' ? '(used as starting text for SMS)' : ''}</div>
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
          {['Filters', channel === 'mail' ? 'Compose Mail' : 'Compose SMS', 'Review & Send'].map((step, i) => (
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
            <h3 className="section-title">{channel === 'mail' ? 'Filter Recipients for Mail' : 'Filter Recipients for SMS'}</h3>

            {/* Recipient type tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {([
                { key: 'all', label: 'All' },
                { key: 'candidate', label: 'Candidates' },
                { key: 'clients-all', label: 'Clients' },
                { key: 'pasted', label: 'Pasted' },
              ] as const).map(t => {
                const active = typeFilter === t.key
                return (
                  <button
                    key={t.key}
                    type="button"
                    className="btn-secondary"
                    onClick={() => { setTypeFilter(t.key); setPage(1) }}
                    style={{
                      borderColor: active ? '#b8942e' : undefined,
                      background: active ? 'rgba(184,148,46,0.08)' : undefined,
                      color: active ? '#b8942e' : undefined,
                      fontWeight: 700,
                    }}
                  >
                    {t.label} ({typeCounts[t.key].toLocaleString()})
                  </button>
                )
              })}
            </div>
            {typeFilter === 'clients-all' && (
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                Bulk client emailing — pulled directly from contacts on the <strong>Clients</strong> page and the <strong>Projects</strong> page, not from the candidate mail list.
              </div>
            )}

            {/* Paste a raw block of text (any format/separator) and pull every email address out of it. */}
            <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', background: '#fafafa' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clipboard size={15} style={{ color: '#b8942e' }} />
                <span style={{ fontWeight: 700, color: '#000000' }}>Paste a list of emails</span>
                {pastedRecipients.length > 0 && (
                  <span className="badge badge-gray">{pastedRecipients.length} added</span>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>
                Paste any block of text containing email addresses (newline, comma or space separated — copy-paste straight from a spreadsheet or email thread).
              </p>
              <textarea
                className="input"
                rows={4}
                placeholder="jane@example.com, john@example.co.uk&#10;sara@company.com"
                value={pasteText}
                onChange={e => setPasteText(e.target.value)}
                style={{ resize: 'vertical', fontFamily: 'inherit' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn-primary" onClick={handleAddPastedEmails} disabled={!pasteText.trim()}>
                  <Plus size={14} /> Add to recipient list
                </button>
                {pastedRecipients.length > 0 && (
                  <button type="button" className="btn-secondary" onClick={handleClearPasted}>
                    <Trash2 size={14} /> Clear pasted ({pastedRecipients.length})
                  </button>
                )}
                {pasteFeedback && (
                  <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{pasteFeedback}</span>
                )}
              </div>
            </div>

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
                  <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.1rem' }}>{selectedCount} recipients selected</div>
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
                      <input type="checkbox" checked={pageItems.length > 0 && pageItems.every(r => selected.has(r.id))} onChange={toggleAllOnPage} />
                    </th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>{channel === 'mail' ? 'Email' : 'Phone'}</th>
                    <th>Role / Company</th>
                    <th>Sector</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pageItems.map(r => (
                    <tr key={r.id}>
                      <td><input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} /></td>
                      <td style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{r.name || '—'}</td>
                      <td>
                        <span className={`badge ${recipientTypeConfig[r.type].cls}`}>{recipientTypeConfig[r.type].label}</span>
                      </td>
                      <td style={{ color: '#000000' }}>{channel === 'mail' ? r.email : (r.phone || '—')}</td>
                      <td style={{ color: '#000000' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                          <div>{r.role || '—'}</div>
                          {r.org && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#6b7280', fontSize: '0.85rem' }}>
                              <Building2 size={12} style={{ color: '#b8942e' }} />{r.org}
                            </div>
                          )}
                          {r.location && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#6b7280', fontSize: '0.85rem' }}>
                              <MapPin size={12} style={{ color: '#9ca3af' }} />{r.location}
                            </div>
                          )}
                        </div>
                      </td>
                      <td style={{ color: '#000000' }}>{r.discipline || '—'}</td>
                      <td style={{ color: '#000000' }}>
                        {r.type === 'candidate' && r.status
                          ? <span className={`badge ${statusConfig[r.status]?.cls ?? 'badge-gray'}`}>{statusConfig[r.status]?.label ?? r.status}</span>
                          : <span style={{ color: '#9ca3af' }}>—</span>}
                      </td>
                    </tr>
                  ))}
                  {pageItems.length === 0 && (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', color: '#9ca3af', padding: '1.5rem' }}>
                        No recipients match these filters.
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
              {channel === 'mail' ? 'Next: Compose Mail →' : 'Next: Compose SMS →'}
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
              {previewRecipient && (
                <div style={{ paddingBottom: '0.875rem', marginBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.2rem' }}>
                    Previewing as {selectedCount > 0 ? 'selected' : 'sample'} {recipientTypeConfig[previewRecipient.type].label.toLowerCase()}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{previewRecipient.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>
                    {[previewRecipient.role, previewRecipient.org || previewRecipient.discipline].filter(Boolean).join(' · ') || previewRecipient.email}
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

        {composeStep === 2 && channel === 'sms' && (
          <div className="email-compose-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
              <h3 className="section-title">Compose SMS</h3>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>SMS Text</label>
                <textarea
                  className="input"
                  rows={6}
                  placeholder="Write your bulk SMS here...

Hi {{first_name}}, we have a new opportunity in {{discipline}} that may suit you. Reply to find out more."
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
                <div style={{ marginTop: '0.35rem', fontSize: '0.82rem', color: body.length > 160 ? '#dc2626' : '#6b7280' }}>
                  {body.length} characters · {Math.max(1, Math.ceil(body.length / 160))} SMS segment{Math.max(1, Math.ceil(body.length / 160)) > 1 ? 's' : ''} per recipient
                </div>
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
                <MessageSquare size={17} style={{ color: '#b8942e' }} />
                <h3 className="section-title">SMS Preview</h3>
              </div>
              {previewRecipient && (
                <div style={{ paddingBottom: '0.875rem', marginBottom: '0.875rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.2rem' }}>
                    Previewing as {selectedCount > 0 ? 'selected' : 'sample'} {recipientTypeConfig[previewRecipient.type].label.toLowerCase()}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{previewRecipient.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>
                    {[previewRecipient.role, previewRecipient.org || previewRecipient.discipline].filter(Boolean).join(' · ') || previewRecipient.phone}
                  </div>
                </div>
              )}
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                SMS Text
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
              ⚠ Sending to {selectedCount} recipient{selectedCount === 1 ? '' : 's'}. This action cannot be undone.
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'space-between' }}>
              <button className="btn-secondary" onClick={() => setComposeStep(2)}>← Back</button>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn-secondary" disabled={savingCampaign} onClick={() => persistCampaign('draft')}><CheckCircle size={14} />Save Draft</button>
                <button className="btn-primary" disabled={savingCampaign || selectedCount === 0} onClick={() => persistCampaign(sendMode === 'scheduled' ? 'scheduled' : 'queued')}>{channel === 'mail' ? <Send size={14} /> : <MessageSquare size={14} />}{channel === 'mail' ? 'Send Mail' : 'Send SMS'}</button>
              </div>
            </div>
            {campaignMessage && (
              <div style={{ padding: '0.75rem 0.875rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', fontSize: '0.95rem', color: '#15803d' }}>
                {campaignMessage}
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  )
}
