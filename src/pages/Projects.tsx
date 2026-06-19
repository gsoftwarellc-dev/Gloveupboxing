import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, MapPin, Calendar, Users, ChevronRight, ChevronLeft, ClipboardPaste, Sparkles, X, Trash2, Phone, Mail, UserCheck } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { BulkImportResult } from '../context/crmDataStore'
import type { Project } from '../types/crm'
import { fetchProjectsPaged } from '../lib/api'
import { useServerPage } from '../hooks/useServerPage'
import { parseProjects, type ParsedProject } from '../utils/aiClient'

const PAGE_SIZE = 25

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:  { label: 'Active',  cls: 'badge-green' },
  tender:  { label: 'Tender',  cls: 'badge-yellow' },
  closed:  { label: 'Closed',  cls: 'badge-red' },
  paused:  { label: 'Paused',  cls: 'badge-gray' },
}

type SortKey = 'score' | 'priority' | 'value' | 'name'

function valueToMillions(v: string | number): number {
  const m = String(v).match(/£\s*([\d,.]+)\s*(bn|m|k)?/i)
  if (!m) return 0
  let num = parseFloat(m[1].replace(/,/g, ''))
  const unit = (m[2] || '').toLowerCase()
  if (unit === 'bn') num *= 1000
  else if (unit === 'k') num /= 1000
  return num
}

const priorityRank: Record<string, number> = {
  'Priority 1': 1, 'Priority 1+': 0, 'Priority 2': 2, 'Priority 3': 3, 'Priority 4': 4,
}

export default function Projects() {
  const { clients, projectAssignments: assignments, addProject, addProjects: saveProjects, loading: ctxLoading, error: ctxError } = useCrmData()
  const [searchRaw, setSearchRaw] = useState('')
  const search = useDeferredValue(searchRaw)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showPasteModal, setShowPasteModal] = useState(false)
  const [sortBy, setSortBy] = useState<SortKey>('score')
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  const clientNames = useMemo(
    () => Array.from(new Set(clients.map(c => c.name).filter(Boolean))).sort(),
    [clients]
  )

  const serverFilters = useMemo(() => ({
    search: search || undefined,
    status: statusFilter !== 'all' ? statusFilter : undefined,
    date_from: dateFrom || undefined,
    date_to: dateTo || undefined,
  }), [search, statusFilter, dateFrom, dateTo])

  const { data: projectsRaw, meta, page, setPage, loading: pageLoading, error: pageError, reload } = useServerPage<Project, typeof serverFilters>({
    fetcher: fetchProjectsPaged as Parameters<typeof useServerPage>[0]['fetcher'],
    filters: serverFilters,
    perPage: PAGE_SIZE,
  })

  // Client-side sort within the current page
  const projects = useMemo(() => [...projectsRaw].sort((a, b) => {
    switch (sortBy) {
      case 'score': return b.opportunityScore - a.opportunityScore
      case 'priority': return (priorityRank[a.priority ?? ''] ?? 99) - (priorityRank[b.priority ?? ''] ?? 99)
      case 'value': return valueToMillions(b.value) - valueToMillions(a.value)
      case 'name': return a.name.localeCompare(b.name)
      default: return 0
    }
  }), [projectsRaw, sortBy])

  const totalPages = meta?.lastPage ?? 1
  const total = meta?.total ?? projects.length

  if (ctxLoading && !projects.length && pageLoading) return <DataState loading={true} error={null} />
  if (ctxError) return <DataState loading={false} error={ctxError} />

  const totalValueM = projects.reduce((sum, p) => sum + valueToMillions(p.value), 0)
  const totalValueLabel = totalValueM >= 1000 ? `£${(totalValueM / 1000).toFixed(1)}bn+` : `£${Math.round(totalValueM)}m+`
  const activeCount = projects.filter(p => p.status === 'active').length
  const totalRoles = projects.reduce((a, p) => a + p.rolesNeeded, 0)

  async function addParsedProjects(parsed: ParsedProject[]) {
    const result = await saveProjects(parsed.map(p => ({
      name: p.name,
      client: p.client ?? '',
      location: p.location ?? '',
      postcode: p.postcode ?? '',
      status: 'tender',
      stage: p.stage ?? '',
      startDate: p.startDate ?? '',
      endDate: p.endDate ?? '',
      value: p.value ?? '',
      rolesNeeded: 0,
      contacts: (p.contacts ?? []).map(c => ({
        type: 'person' as const,
        name: c.name,
        role: c.role,
        email: c.email,
        phone: c.phone,
      })),
      opportunityScore: 0,
      sector: p.sector,
      tags: [],
      notes: p.notes,
    })))
    reload()
    return result
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Project Intelligence</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.2rem 0 0' }}>Track construction projects and recruitment opportunities</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn-secondary" onClick={() => setShowPasteModal(true)}><ClipboardPaste size={14} />Paste Data</button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={14} />Add Project</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Total Projects', value: meta?.total ?? total },
          { label: 'Active (this page)', value: activeCount },
          { label: 'Value (this page)', value: totalValueLabel },
          { label: 'Roles (this page)', value: totalRoles },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters row */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
          <input
            className="input"
            style={{ paddingLeft: '2.25rem', fontSize: '0.9rem' }}
            placeholder="Search projects, clients, locations..."
            value={searchRaw}
            onChange={e => setSearchRaw(e.target.value)}
          />
        </div>
        <select
          className="input"
          style={{ fontSize: '0.9rem', width: 'auto' }}
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          {Object.entries(statusConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
        <select
          className="input"
          style={{ fontSize: '0.9rem', width: 'auto', minWidth: 200 }}
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
        >
          <option value="score">Sort: Opportunity Score</option>
          <option value="priority">Sort: Priority</option>
          <option value="value">Sort: Contract Value</option>
          <option value="name">Sort: Name (A → Z)</option>
        </select>
        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>From</label>
          <input type="date" className="input" style={{ fontSize: '0.9rem' }} value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>To</label>
          <input type="date" className="input" style={{ fontSize: '0.9rem' }} value={dateTo} onChange={e => setDateTo(e.target.value)} />
        </div>
        {(dateFrom || dateTo) && (
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => { setDateFrom(''); setDateTo('') }}>
            Clear
          </button>
        )}
      </div>

      {pageError && (
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
          {pageError}
        </div>
      )}

      {pageLoading && <DataState loading={true} error={null} />}

      {/* Projects list */}
      {!pageLoading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {projects.length === 0 && (
            <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
              No projects match your filters.
            </div>
          )}
          {projects.map(p => {
            const scoreColor = p.opportunityScore >= 80 ? '#15803d' : p.opportunityScore >= 60 ? '#b8942e' : '#b91c1c'
            const scoreBg = p.opportunityScore >= 80 ? '#f0fdf4' : p.opportunityScore >= 60 ? '#fefce8' : '#fef2f2'
            const assignedCount = assignments[p.id]?.length ?? 0
            return (
              <div key={p.id} className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                {/* Score badge */}
                <div style={{
                  width: 44, height: 44, borderRadius: '0.5rem',
                  background: scoreBg, flexShrink: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: scoreColor, lineHeight: 1 }}>{p.opportunityScore}</span>
                  <span style={{ fontSize: '0.6rem', color: scoreColor, opacity: 0.7, fontWeight: 600 }}>/ 100</span>
                </div>

                {/* Project info */}
                <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111' }}>{p.name}</span>
                    <span className={`badge ${statusConfig[p.status]?.cls || 'badge-gray'}`}>{statusConfig[p.status]?.label || p.status}</span>
                    {p.priority && <span className="badge badge-gray">{p.priority}</span>}
                    {assignedCount > 0 && <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>{assignedCount} assigned</span>}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#b8942e', fontWeight: 600, marginTop: '0.15rem' }}>{p.client}</div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                      <MapPin size={11} />{p.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                      <Calendar size={11} />Start: {p.startDate || 'TBC'}
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: 'flex', gap: '2rem', flexShrink: 0, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.15rem' }}>Stage</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>{p.stage}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.15rem' }}>Value</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>{p.value}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.15rem' }}>Roles</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>{p.rolesNeeded}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.15rem' }}>Contacts</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>{Array.isArray(p.contacts) ? p.contacts.length : 0}</div>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                  <Link to={`/admin/candidates?search=${encodeURIComponent(p.location)}`} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                    <Users size={12} />Find Candidates
                  </Link>
                  <Link to={`/admin/projects/${p.id}`} className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                    View Intel<ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && !pageLoading && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total} projects
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
              disabled={page === 1}
              onClick={() => setPage(Math.max(1, page - 1))}
            ><ChevronLeft size={12} /></button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(n => n === 1 || n === totalPages || Math.abs(n - page) <= 2)
              .reduce<(number | 'ellipsis')[]>((acc, n, i, arr) => {
                if (i > 0 && n - (arr[i - 1] as number) > 1) acc.push('ellipsis')
                acc.push(n)
                return acc
              }, [])
              .map((n, i) =>
                n === 'ellipsis'
                  ? <span key={`e${i}`} style={{ fontSize: '0.82rem', color: '#9ca3af', padding: '0 0.25rem' }}>…</span>
                  : (
                    <button
                      key={n}
                      className={n === page ? 'btn-primary' : 'btn-secondary'}
                      style={{ fontSize: '0.82rem', padding: '0.4rem 0.75rem', minWidth: '2.25rem' }}
                      onClick={() => setPage(n)}
                    >{n}</button>
                  )
              )}
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
              disabled={page === totalPages}
              onClick={() => setPage(Math.min(totalPages, page + 1))}
            ><ChevronRight size={12} /></button>
          </div>
        </div>
      )}

      {showAddModal && (
        <AddProjectModal
          clientNames={clientNames}
          onClose={() => setShowAddModal(false)}
          onAdd={async payload => {
            await addProject(payload)
            reload()
          }}
        />
      )}
      {showPasteModal && (
        <PasteProjectsModal
          onClose={() => setShowPasteModal(false)}
          onImport={addParsedProjects}
        />
      )}
    </div>
  )
}

function AddProjectModal({
  clientNames,
  onClose,
  onAdd,
}: {
  clientNames: string[]
  onClose: () => void
  onAdd: (project: Partial<Project> & { name: string }) => Promise<void>
}) {
  const [form, setForm] = useState({
    name: '',
    client: '',
    value: '',
    sector: 'Infrastructure',
    stage: 'Design',
    location: '',
    startDate: '',
    endDate: '',
    rolesNeeded: '0',
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function update(field: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  async function save() {
    if (!form.name.trim()) {
      setError('Project name is required.')
      return
    }
    setSaving(true)
    try {
      await onAdd({
        name: form.name.trim(),
        client: form.client,
        value: form.value,
        sector: form.sector,
        stage: form.stage,
        location: form.location,
        startDate: form.startDate,
        endDate: form.endDate,
        rolesNeeded: Number(form.rolesNeeded || 0),
        status: 'active',
        contacts: [],
        opportunityScore: 0,
        tags: [],
      })
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save project.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '600px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 className="section-title">Add Project</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Project Name</label>
            <input className="input" placeholder="e.g. Manchester Victoria Gateway" value={form.name} onChange={e => update('name', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Client</label>
            <select className="input" value={form.client} onChange={e => update('client', e.target.value)}>
              <option value="" disabled>Select a client…</option>
              {clientNames.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Contract Value</label>
            <input className="input" placeholder="£45M" value={form.value} onChange={e => update('value', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Sector</label>
            <select className="input" value={form.sector} onChange={e => update('sector', e.target.value)}><option>Infrastructure</option><option>Residential</option><option>Commercial</option><option>Transport</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Stage</label>
            <select className="input" value={form.stage} onChange={e => update('stage', e.target.value)}><option>Design</option><option>Procurement</option><option>Construction</option><option>Handover</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location</label>
            <input className="input" placeholder="City" value={form.location} onChange={e => update('location', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date</label>
            <input className="input" type="date" value={form.startDate} onChange={e => update('startDate', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>End Date</label>
            <input className="input" type="date" value={form.endDate} onChange={e => update('endDate', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Roles Needed</label>
            <input className="input" type="number" placeholder="0" value={form.rolesNeeded} onChange={e => update('rolesNeeded', e.target.value)} />
          </div>
        </div>
        {error && (
          <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
            {error}
          </div>
        )}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Add Project'}</button>
        </div>
      </div>
    </div>
  )
}

function PasteProjectsModal({
  onClose,
  onImport,
}: {
  onClose: () => void
  onImport: (projects: ParsedProject[]) => Promise<BulkImportResult>
}) {
  const [raw, setRaw] = useState('')
  const [parsing, setParsing] = useState(false)
  const [parsed, setParsed] = useState<ParsedProject[] | null>(null)
  const [importing, setImporting] = useState(false)
  const [importError, setImportError] = useState('')

  async function runParse() {
    if (!raw.trim()) return
    setParsing(true)
    setParsed(null)
    try {
      setParsed(await parseProjects(raw))
    } finally {
      setParsing(false)
    }
  }

  function removeRow(idx: number) {
    setParsed(prev => (prev ? prev.filter((_, i) => i !== idx) : prev))
  }

  async function confirmImport() {
    if (!parsed || parsed.length === 0) {
      onClose()
      return
    }
    const validRows = parsed.filter(p => p.name.trim())
    const skipped = parsed.length - validRows.length
    if (validRows.length === 0) {
      setImportError('None of the rows have a project name — nothing to import.')
      return
    }
    setImporting(true)
    setImportError('')
    try {
      const result = await onImport(validRows)
      if (result.failed === 0 && skipped === 0) {
        onClose()
      } else {
        setImportError(
          `Imported ${result.succeeded} project${result.succeeded === 1 ? '' : 's'}.` +
          (skipped > 0 ? ` Skipped ${skipped} row${skipped === 1 ? '' : 's'} with no project name.` : '') +
          (result.failed > 0 ? ` ${result.failed} row${result.failed === 1 ? '' : 's'} failed: ${result.errors[0] ?? ''}` : '')
        )
      }
    } catch (err) {
      setImportError(err instanceof Error ? err.message : 'Import failed.')
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '760px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 className="section-title">Paste Project Data</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}><X size={16} /></button>
        </div>

        <p style={{ margin: '0 0 0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
          Paste project intelligence text (Glenigan, Barbour ABI, etc.) or spreadsheet rows. Key contacts are automatically detected and imported.
        </p>
        <textarea
          className="input"
          rows={8}
          style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '0.82rem' }}
          placeholder={'Paste project intelligence text here — e.g. from Glenigan or Barbour ABI.\nKey contacts, value, dates, address and stage are detected automatically.\n\nOr paste spreadsheet rows:\nProject\tClient\tLocation\tValue\tSector'}
          value={raw}
          onChange={e => setRaw(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
          <button className="btn-secondary" onClick={runParse} disabled={parsing || !raw.trim()}>
            <Sparkles size={14} />{parsing ? 'Reading…' : 'Detect Projects'}
          </button>
        </div>

        {parsed && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <div className="label">Detected {parsed.length} project{parsed.length !== 1 ? 's' : ''}</div>
            </div>
            {parsed.length === 0 && (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                Couldn't detect any projects. Check the pasted format.
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '42vh', overflowY: 'auto' }}>
              {parsed.map((p, idx) => {
                const meta = [p.client, p.location || p.postcode, p.value, p.sector, p.stage, p.startDate ? `Start: ${p.startDate}` : ''].filter(Boolean).join(' · ')
                return (
                  <div key={idx} style={{ padding: '0.75rem 0.875rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>{p.name}</div>
                        {meta && <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.2rem' }}>{meta}</div>}
                      </div>
                      <button className="btn-ghost" style={{ padding: '0.2rem', color: '#9ca3af', flexShrink: 0 }} onClick={() => removeRow(idx)} title="Remove"><Trash2 size={14} /></button>
                    </div>
                    {p.contacts && p.contacts.length > 0 && (
                      <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #e8eaf0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                          <UserCheck size={11} /> {p.contacts.length} Contact{p.contacts.length !== 1 ? 's' : ''} detected
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {p.contacts.map((c, ci) => (
                            <div key={ci} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.78rem', color: '#374151', alignItems: 'center' }}>
                              <span style={{ fontWeight: 600 }}>{c.name}</span>
                              {c.role && <span style={{ color: '#b8942e' }}>{c.role}</span>}
                              {c.company && <span style={{ color: '#6b7280' }}>· {c.company}</span>}
                              {c.phone && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: '#6b7280' }}><Phone size={10} />{c.phone}</span>}
                              {c.email && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem', color: '#6b7280' }}><Mail size={10} />{c.email}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {importError && (
          <div style={{ marginTop: '1rem', padding: '0.6rem 0.875rem', background: 'rgba(184,148,46,0.08)', border: '1px solid rgba(184,148,46,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#8a6d1f' }}>
            {importError}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={confirmImport} disabled={!parsed || parsed.length === 0 || importing}>
            {importing ? 'Importing…' : `Add ${parsed?.length || ''} Project${(parsed?.length ?? 0) !== 1 ? 's' : ''}`}
          </button>
        </div>
      </div>
    </div>
  )
}
