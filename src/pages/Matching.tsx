import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Search, Star, MapPin, CheckCircle, XCircle,
  Award, Clock, TrendingUp, Briefcase, ChevronDown, ChevronUp,
  Users, Building2, Calendar, ArrowLeft, Filter, ChevronLeft, ChevronRight
} from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { Candidate, Project } from '../types/crm'

const PAGE_SIZE = 20

function Pagination({ page, setPage, total }: { page: number; setPage: (fn: (p: number) => number) => void; total: number }) {
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  if (totalPages <= 1) return null

  // Show at most 7 page buttons with ellipsis
  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | '…')[] = [1]
    if (currentPage > 3) pages.push('…')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i)
    if (currentPage < totalPages - 2) pages.push('…')
    pages.push(totalPages)
    return pages
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
      <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
        Showing {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, total)} of {total}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
        <button className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
          disabled={currentPage === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>
          <ChevronLeft size={12} />
        </button>
        {getPages().map((n, i) =>
          n === '…'
            ? <span key={`e${i}`} style={{ fontSize: '0.82rem', color: '#9ca3af', padding: '0 0.2rem' }}>…</span>
            : <button key={n} className={n === currentPage ? 'btn-primary' : 'btn-secondary'}
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.75rem', minWidth: '2.25rem' }}
                onClick={() => setPage(() => n as number)}>{n}</button>
        )}
        <button className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
          disabled={currentPage === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  )
}

// ── Match engine ──────────────────────────────────────────────────────────────

function positionsForProject(project: Project): { role: string; discipline: string; qty: number }[] {
  // Use tags if set, otherwise fall back to rolesNeeded count of generic roles,
  // and always ensure at least 1 position so matching always runs
  const count = Math.max(1, project.rolesNeeded ?? 1)
  if (project.tags && project.tags.length > 0) {
    return project.tags.map(role => ({
      role,
      discipline: project.sector || 'Construction',
      qty: 1,
    }))
  }
  return [{
    role: project.sector ? `${project.sector} Role` : 'Construction Role',
    discipline: project.sector || 'Construction',
    qty: count,
  }]
}

function computeMatch(c: Candidate, positions: { role: string; discipline: string; qty: number }[]) {
  const disciplines = [...new Set(positions.map(p => p.discipline.toLowerCase()))]
  const roles       = [...new Set(positions.map(p => p.role.toLowerCase()))]
  const reasons: { text: string; pass: boolean; icon: typeof Briefcase }[] = []
  let score = 0

  // Discipline — case-insensitive match; if project has no specific discipline every candidate passes
  const cDisc = (c.discipline ?? '').toLowerCase()
  const disciplineMatch = disciplines.length === 0 || disciplines.some(d => d === 'construction' || d === cDisc || cDisc.includes(d) || d.includes(cDisc))
  reasons.push({
    text: disciplineMatch ? `Discipline: ${c.discipline}` : `Discipline mismatch (${c.discipline})`,
    pass: disciplineMatch, icon: Briefcase,
  })
  if (disciplineMatch) score += 30

  // Role keyword match (bonus, not required)
  const cRole = (c.role ?? '').toLowerCase()
  const roleMatch = roles.length === 0 || roles.some(r => cRole.includes(r) || r.includes(cRole) || r === 'construction role')
  reasons.push({
    text: roleMatch ? `Role: ${c.role}` : `Role mismatch (${c.role})`,
    pass: roleMatch, icon: Briefcase,
  })
  if (roleMatch) score += 15

  // Status — case-insensitive; "available", "active", "qualified" all count as ready
  const statusLower = (c.status ?? '').toLowerCase()
  const isReady = ['available', 'active', 'qualified'].includes(statusLower)
  reasons.push({ text: isReady ? `Status: ${c.status}` : `Status: ${c.status} (not active)`, pass: isReady, icon: CheckCircle })
  if (isReady) score += 20

  // Availability — compare against today, not a hardcoded past date
  const availDate = c.availability ? new Date(c.availability) : null
  const today     = new Date()
  today.setHours(0, 0, 0, 0)
  const availPass = !availDate || availDate <= today
  reasons.push({
    text: availPass ? `Available: ${c.availability || 'Now'}` : `Available from: ${c.availability}`,
    pass: availPass, icon: Clock,
  })
  if (availPass) score += 20

  // Certificates
  const hasCerts = !!(c.certificates && c.certificates.length > 0)
  reasons.push({ text: hasCerts ? `${c.certificates.length} certificate(s)` : 'No certificates', pass: hasCerts, icon: Award })
  if (hasCerts) score += 10

  // Experience
  const expPass = (c.experienceYears ?? 0) >= 2
  reasons.push({ text: `${c.experienceYears ?? 0} yrs experience`, pass: expPass, icon: TrendingUp })
  if (expPass) score += 5

  return { score: Math.min(100, score), reasons }
}

function scoreColor(s: number) { return s >= 80 ? '#15803d' : s >= 60 ? '#b8942e' : '#b91c1c' }
function scoreBg(s: number)    { return s >= 80 ? '#f0fdf4' : s >= 60 ? '#fefce8' : '#fef2f2' }
function scoreLabel(s: number) { return s >= 80 ? 'Strong Match' : s >= 60 ? 'Good Match' : 'Partial Match' }

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:    { label: 'Active',    cls: 'badge-green'  },
  tender:    { label: 'Tender',    cls: 'badge-yellow' },
  completed: { label: 'Completed', cls: 'badge-blue'   },
  cancelled: { label: 'Cancelled', cls: 'badge-red'    },
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function Matching() {
  const {
    projects,
    candidates,
    projectAssignments,
    loading,
    error,
    assignCandidateToProject,
    unassignCandidateFromProject,
  } = useCrmData()
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const [search, setSearch] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [filterDiscipline, setFilterDiscipline] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [projectPage, setProjectPage] = useState(1)
  const [candidatePage, setCandidatePage] = useState(1)

  const selectedProject = projects.find(p => p.id === selectedProjectId) ?? null
  const positions = selectedProject ? positionsForProject(selectedProject) : []
  const assignedIds = selectedProject ? (projectAssignments[selectedProject.id] ?? []) : []

  const allLocations = [...new Set(candidates.map(c => c.location))].sort()
  const allDisciplines = [...new Set(candidates.map(c => c.discipline))].sort()

  const matchedCandidates = selectedProject
    ? candidates
        .map(c => ({ ...c, ...computeMatch(c, positions) }))
        .sort((a, b) => b.score - a.score)
    : []

  const filtered = matchedCandidates.filter(c => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.role.toLowerCase().includes(search.toLowerCase())) return false
    if (filterLocation && c.location !== filterLocation) return false
    if (filterDiscipline && c.discipline !== filterDiscipline) return false
    // Filter by selected position — keep candidates whose role/discipline matches that position
    if (selectedPosition) {
      const pos = positions.find(p => p.role === selectedPosition)
      if (pos) {
        const posLower  = pos.role.toLowerCase()
        const discLower = pos.discipline.toLowerCase()
        const cRole = c.role.toLowerCase()
        const cDisc = c.discipline.toLowerCase()
        const roleOk = posLower === 'construction role' || cRole.includes(posLower) || posLower.includes(cRole)
        const discOk = discLower === 'construction' || cDisc === discLower || cDisc.includes(discLower) || discLower.includes(cDisc)
        if (!roleOk && !discOk) return false
      }
    }
    return true
  })

  const strongCount = filtered.filter(c => c.score >= 80).length
  const goodCount   = filtered.filter(c => c.score >= 60 && c.score < 80).length

  const paginate = <T,>(items: T[], page: number) => {
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
    const currentPage = Math.min(page, totalPages)
    return items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  }
  const pagedProjects = paginate(projects, projectPage)
  const pagedFiltered = paginate(filtered, candidatePage)

  const fmt = (d: string) =>
    d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Ongoing'

  async function assign(candidateId: number) {
    if (!selectedProject) return
    await assignCandidateToProject(selectedProject.id, candidateId)
  }

  async function unassign(candidateId: number) {
    if (!selectedProject) return
    await unassignCandidateFromProject(selectedProject.id, candidateId)
  }

  if (loading || error) return <DataState loading={loading} error={error} />

  // ── Project list view ─────────────────────────────────────────────────────
  if (!selectedProject) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <h1 className="page-title">Matching</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
            Projects matched with their clients — select one to match and assign candidates to open positions
          </p>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {pagedProjects.map((p, i) => {
            const st = statusConfig[p.status] ?? { label: p.status, cls: 'badge-gray' }
            const pos = positionsForProject(p)
            const totalRoles = pos.reduce((a, r) => a + r.qty, 0)
            const assigned = (projectAssignments[p.id] ?? []).length
            return (
              <button
                key={p.id}
                onClick={() => { setSelectedProjectId(p.id); setSearch(''); setFilterLocation(''); setFilterDiscipline(''); setSelectedPosition(''); setExpandedId(null); setCandidatePage(1) }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem 1.25rem', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', borderBottom: i < pagedProjects.length - 1 ? '1px solid #f3f4f6' : 'none', transition: 'background 0.12s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafaf9'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
              >
                <div style={{ width: 42, height: 42, borderRadius: '0.625rem', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building2 size={18} style={{ color: '#b8942e' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111' }}>{p.name}</div>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.78rem', color: '#b8942e', fontWeight: 600 }}>{p.client}</span>
                    <span style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={10} />{p.location}</span>
                    <span style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><Calendar size={10} />{fmt(p.startDate)} – {fmt(p.endDate)}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.35rem', flexWrap: 'wrap' }}>
                    {pos.map(r => (
                      <span key={r.role} style={{ padding: '0.15rem 0.45rem', background: '#fdfaf3', border: '1px solid #e9d98a', borderRadius: '0.3rem', fontSize: '0.7rem', fontWeight: 600, color: '#92400e' }}>{r.role} ×{r.qty}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', flexShrink: 0 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{totalRoles}</div>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Positions</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#15803d' }}>{assigned}</div>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Assigned</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{p.value}</div>
                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Value</div>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className={`badge ${st.cls}`} style={{ fontSize: '0.72rem' }}>{st.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.35rem 0.75rem', background: '#1a1a2e', borderRadius: '0.4rem', fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>
                    <Zap size={11} style={{ color: '#b8942e' }} />Match & Assign
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <Pagination page={projectPage} setPage={setProjectPage} total={projects.length} />
      </div>
    )
  }

  // ── Split-panel matches view ──────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-ghost" style={{ fontSize: '0.85rem' }} onClick={() => setSelectedProjectId(null)}>
            <ArrowLeft size={14} />All Projects
          </button>
          <div>
            <h1 className="page-title" style={{ margin: 0 }}>{selectedProject.name}</h1>
            <p style={{ color: '#b8942e', fontSize: '0.82rem', margin: '0.1rem 0 0', fontWeight: 600 }}>
              {selectedProject.client} · {selectedProject.location}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.875rem', background: '#fefce8', border: '1px solid #e9d98a', borderRadius: '0.5rem', fontSize: '0.82rem', color: '#b8942e', fontWeight: 600 }}>
          <Zap size={13} />Matching Engine Active
        </div>
      </div>

      {/* Two-column body */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.25rem', alignItems: 'start' }}>

        {/* ── Left: project positions ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Positions needed */}
          <div className="card" style={{ padding: '1.1rem' }}>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Positions Needed
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              {/* All positions button */}
              <button
                onClick={() => { setSelectedPosition(''); setCandidatePage(1) }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.55rem 0.75rem', borderRadius: '0.4rem', border: 'none', cursor: 'pointer',
                  background: selectedPosition === '' ? '#1a1a2e' : '#f9fafb',
                  transition: 'all 0.12s',
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: selectedPosition === '' ? '#fff' : '#374151' }}>All Positions</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: selectedPosition === '' ? '#b8942e' : '#9ca3af' }}>
                  {positions.reduce((a, r) => a + r.qty, 0)} total
                </span>
              </button>
              {positions.map(pos => (
                <button
                  key={pos.role}
                  onClick={() => { setSelectedPosition(pos.role === selectedPosition ? '' : pos.role); setCandidatePage(1) }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.55rem 0.75rem', borderRadius: '0.4rem', border: 'none', cursor: 'pointer',
                    background: selectedPosition === pos.role ? '#1a1a2e' : '#f9fafb',
                    transition: 'all 0.12s',
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: selectedPosition === pos.role ? '#fff' : '#374151' }}>{pos.role}</div>
                    <div style={{ fontSize: '0.7rem', color: selectedPosition === pos.role ? '#b8942e' : '#9ca3af', marginTop: '0.1rem' }}>{pos.discipline}</div>
                  </div>
                  <span style={{
                    padding: '0.1rem 0.45rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 700,
                    background: selectedPosition === pos.role ? 'rgba(184,148,46,0.2)' : '#e5e7eb',
                    color: selectedPosition === pos.role ? '#b8942e' : '#6b7280',
                  }}>×{pos.qty}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="card" style={{ padding: '1.1rem' }}>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Match Summary
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Candidates shown', value: filtered.length,  color: '#111'     },
                { label: 'Strong match (80%+)', value: strongCount,   color: '#15803d'  },
                { label: 'Good match (60–79%)', value: goodCount,     color: '#b8942e'  },
                { label: 'Assigned so far',   value: assignedIds.length, color: '#2563eb' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500 }}>{s.label}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className="card" style={{ padding: '1.1rem' }}>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.72rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Project Info
            </p>
            {[
              { label: 'Client',   value: selectedProject.client },
              { label: 'Sector',   value: selectedProject.sector },
              { label: 'Stage',    value: selectedProject.stage },
              { label: 'Start',    value: fmt(selectedProject.startDate) },
              { label: 'End',      value: fmt(selectedProject.endDate) },
              { label: 'Value',    value: selectedProject.value },
              { label: 'Priority', value: selectedProject.priority },
            ].map(r => (
              <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 500 }}>{r.label}</span>
                <span style={{ fontSize: '0.78rem', color: '#111', fontWeight: 600 }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: candidates ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

          {/* Search + filters */}
          <div className="card" style={{ padding: '0.875rem 1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Filter size={13} style={{ color: '#9ca3af', flexShrink: 0 }} />
              <div style={{ position: 'relative', flex: 1, minWidth: 160 }}>
                <Search size={12} style={{ position: 'absolute', left: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
                <input
                  className="input"
                  style={{ paddingLeft: '1.75rem', fontSize: '0.82rem' }}
                  placeholder="Search name or role..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setCandidatePage(1) }}
                />
              </div>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={filterLocation} onChange={e => { setFilterLocation(e.target.value); setCandidatePage(1) }}>
                <option value="">All Locations</option>
                {allLocations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={filterDiscipline} onChange={e => { setFilterDiscipline(e.target.value); setCandidatePage(1) }}>
                <option value="">All Disciplines</option>
                {allDisciplines.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              {(search || filterLocation || filterDiscipline) && (
                <button className="btn-ghost" style={{ fontSize: '0.78rem', color: '#b91c1c' }} onClick={() => { setSearch(''); setFilterLocation(''); setFilterDiscipline(''); setCandidatePage(1) }}>
                  Clear
                </button>
              )}
            </div>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>
            <span style={{ fontWeight: 700, color: '#111' }}>{filtered.length}</span> candidates ranked
            {selectedPosition && <span> for <span style={{ fontWeight: 600, color: '#b8942e' }}>{selectedPosition}</span></span>}
          </div>

          {/* Candidate cards */}
          {pagedFiltered.map((c, i) => {
            const rank = (Math.min(candidatePage, Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))) - 1) * PAGE_SIZE + i
            const isExpanded = expandedId === c.id
            const isAssigned = assignedIds.includes(c.id)
            const passCount = c.reasons.filter(r => r.pass).length
            return (
              <div key={c.id} className="card" style={{
                padding: '1rem',
                border: isAssigned ? '1px solid #93c5fd' : c.score >= 80 ? '1px solid #bbf7d0' : '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>

                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', width: 18, paddingTop: '0.3rem', flexShrink: 0, textAlign: 'center' }}>#{rank + 1}</div>

                  <div style={{ width: 38, height: 38, borderRadius: '50%', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.72rem' }}>
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{c.name}</span>
                          {isAssigned && <span className="badge badge-blue" style={{ fontSize: '0.68rem' }}>Assigned</span>}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role} · {c.discipline}</div>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.74rem', color: '#6b7280' }}><MapPin size={10} />{c.location}</span>
                          <span style={{ fontSize: '0.74rem', color: '#6b7280' }}>£{(c.salary / 1000).toFixed(0)}k</span>
                          <span style={{ fontSize: '0.74rem', color: '#6b7280' }}>{c.experienceYears} yrs exp</span>
                          <span style={{ display: 'flex', gap: '1px' }}>
                            {[1,2,3,4,5].map(s => <Star key={s} size={10} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                          </span>
                        </div>
                      </div>

                      <div style={{ textAlign: 'center', flexShrink: 0 }}>
                        <div style={{ padding: '0.35rem 0.75rem', borderRadius: '0.5rem', background: scoreBg(c.score), border: `1px solid ${scoreColor(c.score)}30` }}>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: scoreColor(c.score), lineHeight: 1 }}>{c.score}%</div>
                          <div style={{ fontSize: '0.62rem', fontWeight: 600, color: scoreColor(c.score), marginTop: '0.1rem', whiteSpace: 'nowrap' }}>{scoreLabel(c.score)}</div>
                        </div>
                        <div style={{ fontSize: '0.68rem', color: '#9ca3af', marginTop: '0.25rem' }}>{passCount}/{c.reasons.length} criteria</div>
                      </div>
                    </div>

                    {/* Criteria pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.625rem' }}>
                      {c.reasons.map((r, i) => {
                        const Icon = r.icon
                        return (
                          <span key={i} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
                            padding: '0.18rem 0.45rem', borderRadius: '0.3rem', fontSize: '0.7rem', fontWeight: 600,
                            background: r.pass ? '#f0fdf4' : '#fef2f2',
                            color: r.pass ? '#15803d' : '#b91c1c',
                            border: `1px solid ${r.pass ? '#bbf7d0' : '#fecaca'}`
                          }}>
                            {r.pass ? <CheckCircle size={9} /> : <XCircle size={9} />}
                            <Icon size={9} />{r.text}
                          </span>
                        )
                      })}
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #f3f4f6', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem' }}>
                        <div>
                          <p style={{ margin: '0 0 0.3rem', fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Certificates</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.2rem' }}>
                            {(c.certificates ?? []).map(cert => (
                              <span key={cert} style={{ padding: '0.12rem 0.4rem', background: '#fdfaf3', border: '1px solid #e9d98a', borderRadius: '0.25rem', fontSize: '0.7rem', fontWeight: 600, color: '#92400e' }}>{cert}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p style={{ margin: '0 0 0.3rem', fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Details</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.18rem' }}>
                            <span style={{ fontSize: '0.74rem', color: '#374151' }}>Notice: {c.noticePeriod}</span>
                            <span style={{ fontSize: '0.74rem', color: '#374151' }}>Available: {c.availability}</span>
                            <span style={{ fontSize: '0.74rem', color: '#374151' }}>Travel radius: {c.travelRadius} miles</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Actions row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.625rem', paddingTop: '0.625rem', borderTop: '1px solid #f3f4f6' }}>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : c.id)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.74rem', color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 500 }}
                      >
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        {isExpanded ? 'Less detail' : 'More detail'}
                      </button>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <Link to={`/candidates/${c.id}`} className="btn-secondary" style={{ fontSize: '0.76rem', padding: '0.3rem 0.65rem' }}>
                          <Users size={11} />Profile
                        </Link>
                        {isAssigned
                          ? <button className="btn-secondary" style={{ fontSize: '0.76rem', padding: '0.3rem 0.65rem', color: '#b91c1c' }} onClick={() => unassign(c.id)}>
                              Remove
                            </button>
                          : <button className="btn-primary" style={{ fontSize: '0.76rem', padding: '0.3rem 0.65rem' }} onClick={() => assign(c.id)}>
                              <Zap size={11} />Assign
                            </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
                {candidates.length === 0
                  ? 'No candidates in the system yet — once candidates are added, they\'ll be ranked here against this project\'s open positions.'
                  : 'No candidates match the current filters.'}
              </p>
            </div>
          )}

          <Pagination page={candidatePage} setPage={setCandidatePage} total={filtered.length} />
        </div>
      </div>
    </div>
  )
}
