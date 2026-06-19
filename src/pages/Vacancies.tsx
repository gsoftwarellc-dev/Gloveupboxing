import { useDeferredValue, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Plus, Search, MapPin, Download, SlidersHorizontal, Globe, Lock, Eye, EyeOff, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import { pipelineStages } from '../lib/constants'
import { fetchVacanciesPaged } from '../lib/api'
import { useServerPage } from '../hooks/useServerPage'
import { defaultDisciplines } from '../lib/constants'
import type { ClientCompany, Project, Vacancy } from '../types/crm'

const PAGE_SIZE = 25

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:    { label: 'Active',   cls: 'badge-green' },
  'on-hold': { label: 'On Hold', cls: 'badge-yellow' },
  filled:    { label: 'Filled',  cls: 'badge-blue' },
  closed:    { label: 'Closed',  cls: 'badge-red' },
}

const disciplineColors: Record<string, string> = {
  Civil: '#3b82f6', Structural: '#8b5cf6', Groundworks: '#f59e0b',
  MEP: '#14b8a6', Commercial: '#f97316', 'H&S': '#ef4444',
}

export default function Vacancies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { clients, projects, saveVacancy, addVacancy, loading: ctxLoading, error: ctxError } = useCrmData()
  const [searchRaw, setSearchRaw] = useState('')
  const search = useDeferredValue(searchRaw)
  const [statusFilter, setStatusFilter] = useState('All')
  const [disciplineFilter, setDisciplineFilter] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const viewMode = (searchParams.get('view') as 'list' | 'pipeline' | 'jobposts') || 'list'

  function setViewMode(mode: 'list' | 'pipeline' | 'jobposts') {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      if (mode === 'list') next.delete('view')
      else next.set('view', mode)
      return next
    })
  }

  const serverFilters = {
    search: search || undefined,
    status: statusFilter !== 'All' ? statusFilter : undefined,
    discipline: disciplineFilter !== 'All' ? disciplineFilter : undefined,
  } as Record<string, string | undefined>

  const { data: vacancies, meta, page, setPage, loading: pageLoading, error: pageError, reload } = useServerPage<Vacancy, typeof serverFilters>({
    fetcher: fetchVacanciesPaged as Parameters<typeof useServerPage>[0]['fetcher'],
    filters: serverFilters,
    perPage: PAGE_SIZE,
  })

  const totalPages = meta?.lastPage ?? 1
  const total = meta?.total ?? vacancies.length

  if (ctxLoading && !vacancies.length && pageLoading) return <DataState loading={true} error={null} />
  if (ctxError) return <DataState loading={false} error={ctxError} />

  const publishedCount = vacancies.filter(v => v.published).length
  const activeCount = vacancies.filter(v => v.status === 'active').length

  async function togglePublish(id: number) {
    const vacancy = vacancies.find(v => v.id === id)
    if (!vacancy) return
    await saveVacancy(id, {
      published: !vacancy.published,
      visibility: !vacancy.published ? 'Public' : vacancy.visibility,
    })
    reload()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">All Jobs Posted</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
            {meta ? `${meta.total} total` : '…'} · {activeCount} active · {publishedCount} published to website
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Download size={14} />Export</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddModal(true)}><Plus size={14} />Post Vacancy</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
        {[
          { label: 'Total Jobs Posted',  value: meta?.total ?? total,                                   color: '#374151' },
          { label: 'Active (this page)', value: activeCount,                                             color: '#16a34a' },
          { label: 'On Hold',            value: vacancies.filter(v => v.status === 'on-hold').length,  color: '#d97706' },
          { label: 'Filled',             value: vacancies.filter(v => v.status === 'filled').length,   color: '#2563eb' },
          { label: 'Published Online',   value: publishedCount,                                          color: '#b8942e' },
          { label: 'Applications',       value: vacancies.reduce((a, v) => a + v.applications, 0),     color: '#7c3aed' },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters + view toggle */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
            <Search size={14} />
            <input className="input" placeholder="Search title, client, location..." value={searchRaw} onChange={e => setSearchRaw(e.target.value)} />
          </div>
          <select className="input" style={{ width: 'auto', fontSize: '0.82rem' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="filled">Filled</option>
            <option value="closed">Closed</option>
          </select>
          <select className="input" style={{ width: 'auto', fontSize: '0.82rem' }} value={disciplineFilter} onChange={e => setDisciplineFilter(e.target.value)}>
            <option value="All">All Disciplines</option>
            {defaultDisciplines.map(d => <option key={d}>{d}</option>)}
          </select>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><SlidersHorizontal size={14} />More</button>
          <div style={{ display: 'flex', gap: '2px', marginLeft: 'auto', background: '#f3f4f6', borderRadius: '0.5rem', padding: '2px' }}>
            {[
              { key: 'list',     label: 'List' },
              { key: 'pipeline', label: 'Pipeline' },
              { key: 'jobposts', label: 'Job Posts' },
            ].map(v => (
              <button
                key={v.key}
                onClick={() => setViewMode(v.key as typeof viewMode)}
                style={{
                  padding: '0.35rem 0.75rem', fontSize: '0.78rem', fontWeight: 600,
                  border: 'none', cursor: 'pointer', borderRadius: '0.375rem',
                  background: viewMode === v.key ? '#1a1a2e' : 'transparent',
                  color: viewMode === v.key ? '#fff' : '#6b7280',
                  transition: 'all 0.15s',
                }}
              >{v.label}</button>
            ))}
          </div>
        </div>
      </div>

      {pageError && (
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
          {pageError}
        </div>
      )}

      {pageLoading && <DataState loading={true} error={null} />}

      {/* ── List view ── */}
      {!pageLoading && viewMode === 'list' && (
        <>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Vacancy</th><th>Client</th><th>Location</th><th>Salary</th>
                    <th>Type</th><th>Status</th><th>Website</th><th>Applications</th><th>Recruiter</th><th>Deadline</th><th></th>
                  </tr>
                </thead>
                <tbody>
                  {vacancies.length === 0 && (
                    <tr><td colSpan={11} style={{ textAlign: 'center', color: '#9ca3af', padding: '2rem', fontSize: '0.85rem' }}>No vacancies found.</td></tr>
                  )}
                  {vacancies.map(v => (
                    <tr key={v.id}>
                      <td>
                        <div style={{ fontWeight: 600, color: '#111', fontSize: '0.88rem' }}>{v.title}</div>
                        <span className="badge badge-gold" style={{ marginTop: '0.2rem', fontSize: '0.7rem' }}>{v.discipline}</span>
                      </td>
                      <td style={{ fontSize: '0.85rem', color: '#374151' }}>{v.client}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                          <MapPin size={12} />{v.location}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#374151', whiteSpace: 'nowrap' }}>{v.salary}</td>
                      <td><span className="badge badge-gray" style={{ fontSize: '0.7rem' }}>{v.type}</span></td>
                      <td><span className={`badge ${statusConfig[v.status]?.cls ?? 'badge-gray'}`} style={{ fontSize: '0.7rem' }}>{statusConfig[v.status]?.label ?? v.status}</span></td>
                      <td>
                        {v.published
                          ? <span className="badge badge-blue" style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: 3 }}><Globe size={9} />Live</span>
                          : <span className="badge badge-gray" style={{ fontSize: '0.7rem', display: 'inline-flex', alignItems: 'center', gap: 3 }}><Lock size={9} />Private</span>}
                      </td>
                      <td>
                        <div style={{ fontSize: '0.85rem', color: '#111', fontWeight: 700 }}>{v.applications}</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{v.interviews} interviews</div>
                      </td>
                      <td style={{ fontSize: '0.82rem', color: '#6b7280' }}>{v.recruiter}</td>
                      <td style={{ fontSize: '0.82rem', color: '#6b7280' }}>{v.deadline}</td>
                      <td><Link to={`/vacancies/${v.id}`} className="btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '0.82rem' }}>View</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total} vacancies
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <button className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }} disabled={page === 1} onClick={() => setPage(Math.max(1, page - 1))}><ChevronLeft size={12} /></button>
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
                      : <button key={n} className={n === page ? 'btn-primary' : 'btn-secondary'} style={{ fontSize: '0.82rem', padding: '0.4rem 0.75rem', minWidth: '2.25rem' }} onClick={() => setPage(n)}>{n}</button>
                  )}
                <button className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }} disabled={page === totalPages} onClick={() => setPage(Math.min(totalPages, page + 1))}><ChevronRight size={12} /></button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Pipeline view ── */}
      {!pageLoading && viewMode === 'pipeline' && (
        <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', minWidth: 1200 }}>
            {pipelineStages.map((stage, si) => {
              const stageVacancies = vacancies.filter((_, i) => i % pipelineStages.length === si)
              return (
                <div key={stage.key} style={{ flex: '0 0 180px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem', padding: '0 0.25rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stage.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stage.key}</span>
                    <span style={{ background: '#f1f5f9', color: '#374151', padding: '0.1rem 0.45rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700 }}>{stageVacancies.length}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {stageVacancies.map(v => (
                      <Link key={v.id} to={`/vacancies/${v.id}`} style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ padding: '0.75rem', cursor: 'pointer', borderLeft: `3px solid ${stage.color}` }}>
                          <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#111', marginBottom: '0.25rem', lineHeight: 1.3 }}>{v.title}</div>
                          <div style={{ fontSize: '0.78rem', color: '#6b7280', marginBottom: '0.375rem' }}>{v.client}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span className={`badge ${statusConfig[v.status]?.cls ?? 'badge-gray'}`} style={{ fontSize: '0.68rem' }}>{statusConfig[v.status]?.label ?? v.status}</span>
                            <span style={{ fontSize: '0.78rem', color: '#374151', fontWeight: 600 }}>{v.applications}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {stageVacancies.length === 0 && (
                      <div style={{ border: '2px dashed #e5e7eb', borderRadius: '0.625rem', padding: '1rem', textAlign: 'center', fontSize: '0.78rem', color: '#9ca3af' }}>Empty</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Job Posts view ── */}
      {!pageLoading && viewMode === 'jobposts' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '0.75rem 1rem', background: '#fdfaf3', border: '1px solid #e9d98a', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '0.82rem', color: '#92400e', fontWeight: 600 }}>
              <Globe size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              {publishedCount} of {total} vacancies are live on your public jobs page
            </div>
            <a href="http://localhost:5173/jobs" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem', color: '#b8942e', fontWeight: 700, textDecoration: 'none' }}>Preview website →</a>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1fr 1fr 1fr 1fr auto', gap: '1rem', padding: '0.625rem 1rem', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
              {['Job Title', 'Client', 'Discipline', 'Type', 'Status', 'Website', 'Actions'].map(h => (
                <span key={h} style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
              ))}
            </div>

            {vacancies.map((v, i) => (
              <div key={v.id} style={{
                display: 'grid', gridTemplateColumns: '2.5fr 1.5fr 1fr 1fr 1fr 1fr auto',
                gap: '1rem', alignItems: 'center', padding: '0.875rem 1rem',
                borderBottom: i < vacancies.length - 1 ? '1px solid #f3f4f6' : 'none',
                background: v.published ? '#fff' : '#fafafa',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '0.5rem', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Briefcase size={15} style={{ color: '#b8942e' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{v.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />{v.location} · {v.salary}</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.82rem', color: '#374151' }}>{v.client}</span>
                <span style={{ display: 'inline-block', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.72rem', fontWeight: 700, color: disciplineColors[v.discipline] || '#374151', background: `${disciplineColors[v.discipline] || '#374151'}18` }}>{v.discipline}</span>
                <span className="badge badge-gray" style={{ fontSize: '0.7rem' }}>{v.type}</span>
                <span className={`badge ${statusConfig[v.status]?.cls ?? 'badge-gray'}`} style={{ fontSize: '0.7rem' }}>{statusConfig[v.status]?.label ?? v.status}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => togglePublish(v.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.375rem',
                      padding: '0.3rem 0.65rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer',
                      fontSize: '0.75rem', fontWeight: 700,
                      background: v.published ? '#dcfce7' : '#f3f4f6',
                      color: v.published ? '#15803d' : '#6b7280',
                      transition: 'all 0.15s',
                    }}
                  >
                    {v.published ? <><Eye size={12} />Live</> : <><EyeOff size={12} />Draft</>}
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  <Link to={`/vacancies/${v.id}`} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>Edit</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>Published by Discipline</div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Object.entries(
                vacancies.filter(v => v.published).reduce((acc, v) => {
                  acc[v.discipline] = (acc[v.discipline] || 0) + 1
                  return acc
                }, {} as Record<string, number>)
              ).map(([disc, count]) => (
                <div key={disc} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.35rem 0.75rem', borderRadius: '0.375rem', background: `${disciplineColors[disc] || '#374151'}12`, border: `1px solid ${disciplineColors[disc] || '#374151'}30` }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: disciplineColors[disc] || '#374151', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: disciplineColors[disc] || '#374151' }}>{disc}</span>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <AddVacancyModal
          clients={clients}
          projects={projects}
          disciplines={defaultDisciplines}
          onClose={() => setShowAddModal(false)}
          onAdd={async v => { const saved = await addVacancy(v); reload(); return saved }}
        />
      )}
    </div>
  )
}

function AddVacancyModal({
  clients,
  projects,
  disciplines,
  onClose,
  onAdd,
}: {
  clients: ClientCompany[]
  projects: Project[]
  disciplines: string[]
  onClose: () => void
  onAdd: (vacancy: Partial<Vacancy> & { title: string }) => Promise<Vacancy>
}) {
  const [form, setForm] = useState({
    title: '',
    clientId: clients[0]?.id ? String(clients[0].id) : '',
    projectId: '',
    discipline: disciplines[0] ?? 'Civil',
    type: 'Permanent',
    location: '',
    postcode: '',
    salary: '',
    deadline: '',
    recruiter: 'Tom Bradley',
    priority: 'High',
    visibility: 'Public',
    description: '',
  })
  const [requiredCerts, setRequiredCerts] = useState<string[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function update(field: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  function toggleCert(cert: string) {
    setRequiredCerts(prev => prev.includes(cert) ? prev.filter(item => item !== cert) : [...prev, cert])
  }

  async function save() {
    if (!form.title.trim()) {
      setError('Job title is required.')
      return
    }
    const client = clients.find(item => item.id === Number(form.clientId))
    const project = projects.find(item => item.id === Number(form.projectId))
    setSaving(true)
    try {
      await onAdd({
        title: form.title.trim(),
        clientId: client?.id,
        client: client?.name ?? '',
        projectId: project?.id,
        project: project?.name ?? '',
        discipline: form.discipline,
        type: form.type,
        location: form.location,
        postcode: form.postcode,
        salary: form.salary,
        deadline: form.deadline,
        recruiter: form.recruiter,
        priority: form.priority,
        visibility: form.visibility,
        published: form.visibility === 'Public',
        status: 'active',
        description: form.description,
        requiredCerts,
        applications: 0,
        shortlisted: 0,
        interviews: 0,
        dateAdded: new Date().toISOString().slice(0, 10),
      })
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to save vacancy.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '680px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Post New Vacancy</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Title *</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. Senior Site Manager" value={form.title} onChange={e => update('title', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Client *</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.clientId} onChange={e => update('clientId', e.target.value)}>
              {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Linked Project</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.projectId} onChange={e => update('projectId', e.target.value)}>
              <option value="">— None —</option>
              {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Discipline *</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.discipline} onChange={e => update('discipline', e.target.value)}>
              {disciplines.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Employment Type *</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.type} onChange={e => update('type', e.target.value)}><option>Permanent</option><option>Contract</option><option>Temporary</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location *</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="City" value={form.location} onChange={e => update('location', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Postcode *</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="M1 1AA" value={form.postcode} onChange={e => update('postcode', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Salary / Day Rate *</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="£60,000 – £70,000" value={form.salary} onChange={e => update('salary', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Application Deadline</label>
            <input className="input" style={{ fontSize: '0.82rem' }} type="date" value={form.deadline} onChange={e => update('deadline', e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Assigned Recruiter</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.recruiter} onChange={e => update('recruiter', e.target.value)}><option>Tom Bradley</option><option>Emma Clarke</option><option>Mark Richards</option><option>Priya Sharma</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Priority</label>
            <select className="input" style={{ fontSize: '0.82rem' }} value={form.priority} onChange={e => update('priority', e.target.value)}><option>High</option><option>Medium</option><option>Low</option></select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Required Certificates</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['SMSTS', 'SSSTS', 'CSCS', 'First Aid', 'CPCS', 'NPORS', 'NEBOSH', 'IOSH', 'PMP', 'MRICS'].map(cert => (
                <label key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 500 }}>
                  <input type="checkbox" checked={requiredCerts.includes(cert)} onChange={() => toggleCert(cert)} style={{ accentColor: '#b8942e' }} />{cert}
                </label>
              ))}
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Website Visibility</label>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                <input type="radio" name="visibility" checked={form.visibility === 'Public'} onChange={() => update('visibility', 'Public')} style={{ accentColor: '#b8942e' }} />
                <Globe size={14} /> Public — appears on website job listings
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                <input type="radio" name="visibility" checked={form.visibility === 'Private'} onChange={() => update('visibility', 'Private')} style={{ accentColor: '#b8942e' }} />
                <Lock size={14} /> Private — CRM only
              </label>
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Description</label>
            <textarea className="input" style={{ fontSize: '0.82rem', resize: 'vertical' }} rows={4} placeholder="Describe the role, key responsibilities, and requirements..." value={form.description} onChange={e => update('description', e.target.value)} />
          </div>
        </div>
        {error && (
          <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
            {error}
          </div>
        )}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={onClose}>Cancel</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={save} disabled={saving}>{saving ? 'Saving...' : 'Post Vacancy'}</button>
        </div>
      </div>
    </div>
  )
}
