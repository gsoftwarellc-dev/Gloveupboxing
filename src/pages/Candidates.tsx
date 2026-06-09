import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Plus, Search, Download, MapPin, Phone, Mail, Star, SlidersHorizontal, CheckCircle, Briefcase, Building2, Calendar, X } from 'lucide-react'
import { candidates as initialCandidates, clients, vacancies } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  available:       { label: 'Available',     cls: 'badge-green' },
  placed:          { label: 'Placed',        cls: 'badge-blue' },
  interviewing:    { label: 'Interviewing',  cls: 'badge-yellow' },
  'not-available': { label: 'Not Available', cls: 'badge-red' },
  reserve:         { label: 'Unqualified',   cls: 'badge-gray' },
  qualified:       { label: 'Ready to Work', cls: 'badge-gold' },
}

const disciplines = ['All', 'Civil', 'Structural', 'Groundworks', 'MEP', 'Commercial', 'H&S']

const poolTabs = [
  { key: 'all',       label: 'All Candidates' },
  { key: 'qualified', label: 'Ready to Work' },
  { key: 'placed',    label: 'Work Assigned Already' },
]

type Assignment = { candidateId: number; clientId: number; vacancyId: number; startDate: string }

export default function Candidates() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [candidates, setCandidates] = useState(initialCandidates.map(c => ({ ...c })))
  const [assignments, setAssignments] = useState<Assignment[]>([
    { candidateId: 2, clientId: 1, vacancyId: 1, startDate: '2025-06-16' },
    { candidateId: 3, clientId: 2, vacancyId: 3, startDate: '2025-06-01' },
  ])
  const [search, setSearch] = useState(searchParams.get('search') ?? '')
  const [discipline, setDiscipline] = useState('All')
  const [status, setStatus] = useState('All')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')
  const [showAddModal, setShowAddModal] = useState(false)
  const [assignModal, setAssignModal] = useState<number | null>(null)
  const [assignClientId, setAssignClientId] = useState(clients[0].id)
  const [assignVacancyId, setAssignVacancyId] = useState(vacancies[0].id)
  const [assignStartDate, setAssignStartDate] = useState('2025-07-01')

  const poolTab = searchParams.get('pool') ?? 'all'

  function setPoolTab(key: string) {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      if (key === 'all') next.delete('pool')
      else next.set('pool', key)
      return next
    })
  }


  function confirmAssign() {
    if (!assignModal) return
    setCandidates(prev => prev.map(c => c.id === assignModal ? { ...c, status: 'placed' } : c))
    setAssignments(prev => [...prev, { candidateId: assignModal, clientId: assignClientId, vacancyId: assignVacancyId, startDate: assignStartDate }])
    setAssignModal(null)
  }

  function removeAssignment(candidateId: number) {
    setCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, status: 'qualified' } : c))
    setAssignments(prev => prev.filter(a => a.candidateId !== candidateId))
  }

  function getAssignment(candidateId: number) {
    return assignments.find(a => a.candidateId === candidateId)
  }

  const qualifiedCount = candidates.filter(c => c.status === 'qualified').length
  const placedCount = candidates.filter(c => c.status === 'placed').length

  const filtered = candidates.filter(c => {
    const q = search.toLowerCase()
    const matchSearch = c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
    const matchDiscipline = discipline === 'All' || c.discipline === discipline
    const matchStatus = status === 'All' || c.status === status
    const matchPool =
      poolTab === 'qualified' ? c.status === 'qualified' :
      poolTab === 'placed' ? c.status === 'placed' : true
    return matchSearch && matchDiscipline && matchStatus && matchPool
  })

  const assignCandidate = assignModal ? candidates.find(c => c.id === assignModal) : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Candidates</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
            {candidates.length} total · {qualifiedCount} ready to work · {placedCount} assigned
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Download size={14} />Export</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddModal(true)}><Plus size={14} />Add Candidate</button>
        </div>
      </div>

      {/* Pool tabs */}
      <div style={{ display: 'flex', gap: '2px', background: '#f3f4f6', borderRadius: '0.5rem', padding: '2px', alignSelf: 'flex-start' }}>
        {poolTabs.map(t => (
          <button
            key={t.key}
            onClick={() => setPoolTab(t.key)}
            style={{
              padding: '0.4rem 0.875rem', fontSize: '0.82rem', fontWeight: 600,
              border: 'none', cursor: 'pointer', borderRadius: '0.375rem',
              background: poolTab === t.key ? '#1a1a2e' : 'transparent',
              color: poolTab === t.key ? '#fff' : '#6b7280',
              transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '0.375rem',
            }}
          >
            {t.label}
            {t.key === 'qualified' && qualifiedCount > 0 && (
              <span style={{ background: poolTab === t.key ? '#b8942e' : '#e5e7eb', color: poolTab === t.key ? '#fff' : '#374151', borderRadius: '9999px', padding: '0 0.4rem', fontSize: '0.7rem', fontWeight: 700 }}>{qualifiedCount}</span>
            )}
            {t.key === 'placed' && placedCount > 0 && (
              <span style={{ background: poolTab === t.key ? '#b8942e' : '#e5e7eb', color: poolTab === t.key ? '#fff' : '#374151', borderRadius: '9999px', padding: '0 0.4rem', fontSize: '0.7rem', fontWeight: 700 }}>{placedCount}</span>
            )}
          </button>
        ))}
      </div>

      {/* Banners */}
      {poolTab === 'qualified' && (
        <div style={{ padding: '0.75rem 1rem', background: '#fdfaf3', border: '1px solid #e9d98a', borderRadius: '0.5rem', fontSize: '0.82rem', color: '#92400e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={14} />
          These candidates are qualified and available — click their profile to view details or use "Assign to Company" to place them.
        </div>
      )}
      {poolTab === 'placed' && (
        <div style={{ padding: '0.75rem 1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', fontSize: '0.82rem', color: '#15803d', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Briefcase size={14} />
          These candidates have been assigned and are currently working via Backfill.
        </div>
      )}

      {/* ── Ready to Work view ── */}
      {poolTab === 'qualified' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {filtered.length === 0 && (
            <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.85rem' }}>
              No qualified candidates yet. Mark candidates as qualified from the All Candidates tab.
            </div>
          )}
          {filtered.map(c => (
            <div key={c.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem' }}>
              {/* Avatar */}
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
              </div>
              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>{c.name}</span>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{c.discipline}</span>
                  <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>Ready to Work</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.25rem' }}>{c.role}</div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.375rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#6b7280' }}><MapPin size={11} />{c.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#6b7280' }}><Phone size={11} />{c.phone}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#6b7280' }}><Mail size={11} />{c.email}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#374151', fontWeight: 600 }}><Calendar size={11} />Available: {c.availability}</span>
                </div>
              </div>
              {/* Rating */}
              <div style={{ display: 'flex', gap: '1px', flexShrink: 0 }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
              </div>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <Link to={`/candidates/${c.id}`} className="btn-secondary" style={{ fontSize: '0.78rem' }}>View Profile</Link>
                <button
                  className="btn-primary"
                  style={{ fontSize: '0.78rem' }}
                  onClick={() => { setAssignModal(c.id); setAssignClientId(clients[0].id); setAssignVacancyId(vacancies[0].id) }}
                >
                  <Briefcase size={13} />Assign to Company
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Work Assigned Already view ── */}
      {poolTab === 'placed' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {filtered.length === 0 && (
            <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.85rem' }}>
              No candidates assigned yet. Assign candidates from the Ready to Work tab.
            </div>
          )}
          {filtered.map(c => {
            const a = getAssignment(c.id)
            const assignedClient = a ? clients.find(cl => cl.id === a.clientId) : null
            const assignedVacancy = a ? vacancies.find(v => v.id === a.vacancyId) : null
            return (
              <div key={c.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem' }}>
                {/* Avatar */}
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                  {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
                {/* Candidate info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>{c.name}</span>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{c.discipline}</span>
                    <span className="badge badge-blue" style={{ fontSize: '0.7rem' }}>Assigned</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.2rem' }}>{c.role}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem', fontSize: '0.78rem', color: '#6b7280' }}>
                    <MapPin size={11} />{c.location} · <Phone size={11} />{c.phone}
                  </div>
                </div>
                {/* Assignment details */}
                {assignedClient && (
                  <div style={{ padding: '0.625rem 0.875rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', minWidth: 200, flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                      <Building2 size={13} style={{ color: '#b8942e' }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111' }}>{assignedClient.name}</span>
                    </div>
                    {assignedVacancy && <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{assignedVacancy.title}</div>}
                    {a && <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#6b7280', marginTop: '0.2rem' }}><Calendar size={10} />Started: {a.startDate}</div>}
                  </div>
                )}
                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                  <Link to={`/candidates/${c.id}`} className="btn-secondary" style={{ fontSize: '0.78rem' }}>View Profile</Link>
                  <button className="btn-ghost" style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem', color: '#ef4444' }} onClick={() => removeAssignment(c.id)}>
                    <X size={13} />Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── All Candidates view ── */}
      {poolTab === 'all' && (
        <>
          {/* Filters */}
          <div className="card" style={{ padding: '0.875rem 1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
                <Search size={14} />
                <input className="input" placeholder="Search name, role, location..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              <select className="input" style={{ width: 'auto', fontSize: '0.82rem' }} value={discipline} onChange={e => setDiscipline(e.target.value)}>
                {disciplines.map(d => <option key={d}>{d}</option>)}
              </select>
              <select className="input" style={{ width: 'auto', fontSize: '0.82rem' }} value={status} onChange={e => setStatus(e.target.value)}>
                <option value="All">All Status</option>
                {Object.entries(statusConfig).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
              <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><SlidersHorizontal size={14} />More Filters</button>
              <div style={{ display: 'flex', gap: '2px', marginLeft: 'auto', background: '#f3f4f6', borderRadius: '0.5rem', padding: '2px' }}>
                <button onClick={() => setViewMode('table')} style={{ padding: '0.35rem 0.6rem', border: 'none', cursor: 'pointer', borderRadius: '0.375rem', background: viewMode === 'table' ? '#1a1a2e' : 'transparent', color: viewMode === 'table' ? '#fff' : '#6b7280' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg>
                </button>
                <button onClick={() => setViewMode('cards')} style={{ padding: '0.35rem 0.6rem', border: 'none', cursor: 'pointer', borderRadius: '0.375rem', background: viewMode === 'cards' ? '#1a1a2e' : 'transparent', color: viewMode === 'cards' ? '#fff' : '#6b7280' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'table' ? (
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Candidate</th><th>Role / Discipline</th><th>Location</th><th>Salary</th>
                      <th>Status</th><th>Rating</th><th>Recruiter</th><th>Last Contact</th><th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(c => (
                      <tr key={c.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.65rem', flexShrink: 0 }}>
                              {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, color: '#111', fontSize: '0.88rem' }}>{c.name}</div>
                              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{c.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontSize: '0.85rem', color: '#374151' }}>{c.role}</div>
                          <span className="badge badge-gold" style={{ fontSize: '0.7rem', marginTop: '0.2rem' }}>{c.discipline}</span>
                        </td>
                        <td><div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}><MapPin size={12} />{c.location}</div></td>
                        <td style={{ fontSize: '0.82rem', color: '#374151' }}>£{(c.salary / 1000).toFixed(0)}k</td>
                        <td><span className={`badge ${statusConfig[c.status]?.cls || 'badge-gray'}`} style={{ fontSize: '0.7rem' }}>{statusConfig[c.status]?.label || c.status}</span></td>
                        <td>
                          <div style={{ display: 'flex', gap: '1px' }}>
                            {[1,2,3,4,5].map(s => <Star key={s} size={12} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                          </div>
                        </td>
                        <td style={{ fontSize: '0.82rem', color: '#6b7280' }}>{c.recruiter}</td>
                        <td style={{ fontSize: '0.82rem', color: '#6b7280' }}>{c.lastContacted}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                            <Link to={`/candidates/${c.id}`} className="btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '0.82rem' }}>View</Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: '0.875rem 1rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>Showing {filtered.length} of {candidates.length} candidates</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>Previous</button>
                  <button className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>Next</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {filtered.map(c => (
                <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>
                        {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: '#111', fontSize: '0.9rem' }}>{c.name}</div>
                        <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role}</div>
                      </div>
                    </div>
                    <span className={`badge ${statusConfig[c.status]?.cls || 'badge-gray'}`} style={{ fontSize: '0.7rem' }}>{statusConfig[c.status]?.label || c.status}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#6b7280' }}><MapPin size={12} />{c.location} · {c.postcode}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#6b7280' }}><Mail size={12} />{c.email}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#6b7280' }}><Phone size={12} />{c.phone}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{c.discipline}</span>
                    {c.tags.slice(0, 2).map((t: string) => <span key={t} className="badge badge-gray" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={13} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                    </div>
                    <div style={{ display: 'flex', gap: '0.375rem' }}>
                      <Link to={`/candidates/${c.id}`} className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── Assign to Company Modal ── */}
      {assignModal && assignCandidate && (
        <div className="modal-overlay" onClick={() => setAssignModal(null)}>
          <div className="modal" style={{ maxWidth: 520 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Assign to Company</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setAssignModal(null)}>✕</button>
            </div>

            {/* Candidate summary */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>
                {assignCandidate.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111' }}>{assignCandidate.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{assignCandidate.role} · {assignCandidate.location}</div>
              </div>
              <span className="badge badge-gold" style={{ fontSize: '0.7rem', marginLeft: 'auto' }}>{assignCandidate.discipline}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Select Company *</label>
                <select className="input" style={{ fontSize: '0.82rem' }} value={assignClientId} onChange={e => setAssignClientId(Number(e.target.value))}>
                  {clients.map(cl => <option key={cl.id} value={cl.id}>{cl.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Select Vacancy / Role *</label>
                <select className="input" style={{ fontSize: '0.82rem' }} value={assignVacancyId} onChange={e => setAssignVacancyId(Number(e.target.value))}>
                  {vacancies.map(v => <option key={v.id} value={v.id}>{v.title} — {v.client}</option>)}
                </select>
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date *</label>
                <input className="input" style={{ fontSize: '0.82rem' }} type="date" value={assignStartDate} onChange={e => setAssignStartDate(e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setAssignModal(null)}>Cancel</button>
              <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={confirmAssign}>
                <Briefcase size={13} />Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && <AddCandidateModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function AddCandidateModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Add New Candidate</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          {[{ label: 'First Name', ph: 'John' }, { label: 'Last Name', ph: 'Smith' }, { label: 'Email', ph: 'john.smith@email.com' }, { label: 'Phone', ph: '07700 000000' }].map(f => (
            <div key={f.label}>
              <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>{f.label}</label>
              <input className="input" style={{ fontSize: '0.82rem' }} placeholder={f.ph} />
            </div>
          ))}
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Role / Title</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. Senior Site Manager" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Discipline</label>
            <select className="input" style={{ fontSize: '0.82rem' }}>
              <option>Civil</option><option>Structural</option><option>Groundworks</option><option>MEP</option><option>Commercial</option><option>H&S</option>
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="City" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Postcode</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="SW1A 1AA" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Salary Expectation</label>
            <input className="input" style={{ fontSize: '0.82rem' }} placeholder="£50,000" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Source</label>
            <select className="input" style={{ fontSize: '0.82rem' }}>
              <option>LinkedIn</option><option>Job Board</option><option>Referral</option><option>Website</option><option>Cold Call</option>
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Right to Work</label>
            <select className="input" style={{ fontSize: '0.82rem' }}><option>Yes</option><option>No</option><option>Requires Sponsorship</option></select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Notes</label>
            <textarea className="input" style={{ fontSize: '0.82rem', resize: 'vertical' } as React.CSSProperties} rows={3} placeholder="Initial notes about the candidate..." />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={onClose}>Cancel</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={onClose}>Add Candidate</button>
        </div>
      </div>
    </div>
  )
}
