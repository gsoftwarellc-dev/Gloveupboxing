import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Search, Star, MapPin, CheckCircle, XCircle,
  Award, Clock, Banknote, Briefcase, ChevronDown, ChevronUp,
  Users, Building2, Calendar, ArrowLeft, Filter
} from 'lucide-react'
import { candidates, projects } from '../data/mock'

// ── Project positions needed ──────────────────────────────────────────────────

const projectPositions: Record<number, { role: string; discipline: string; qty: number }[]> = {
  1: [
    { role: 'Senior Site Manager',  discipline: 'Civil',      qty: 2 },
    { role: 'Site Engineer',        discipline: 'Civil',      qty: 2 },
    { role: 'Groundworks Foreman',  discipline: 'Groundworks', qty: 2 },
  ],
  2: [
    { role: 'Structural Engineer',  discipline: 'Structural', qty: 3 },
    { role: 'MEP Coordinator',      discipline: 'MEP',        qty: 2 },
    { role: 'Senior QS',            discipline: 'Commercial', qty: 2 },
    { role: 'Project Manager',      discipline: 'Civil',      qty: 2 },
    { role: 'Site Manager',         discipline: 'Civil',      qty: 3 },
  ],
  3: [
    { role: 'Civils Site Manager',  discipline: 'Civil',      qty: 4 },
    { role: 'Groundworks Foreman',  discipline: 'Groundworks', qty: 4 },
    { role: 'Site Engineer',        discipline: 'Civil',      qty: 4 },
    { role: 'QS',                   discipline: 'Commercial', qty: 3 },
  ],
  4: [
    { role: 'Site Manager',         discipline: 'Civil',      qty: 2 },
    { role: 'Quantity Surveyor',    discipline: 'Commercial', qty: 1 },
    { role: 'Structural Engineer',  discipline: 'Structural', qty: 2 },
  ],
}

// ── Match engine ──────────────────────────────────────────────────────────────

function computeMatch(c: typeof candidates[0], projectId: number) {
  const positions = projectPositions[projectId] ?? []
  const disciplines = [...new Set(positions.map(p => p.discipline))]
  const reasons: { text: string; pass: boolean; icon: any }[] = []
  let score = 0

  const disciplineMatch = disciplines.includes(c.discipline)
  reasons.push({
    text: disciplineMatch ? `Discipline: ${c.discipline}` : `Discipline: ${c.discipline} — not needed`,
    pass: disciplineMatch, icon: Briefcase
  })
  if (disciplineMatch) score += 35

  const isQualified = c.status === 'qualified' || c.status === 'available'
  reasons.push({ text: isQualified ? 'Ready to Work' : `Status: ${c.status}`, pass: isQualified, icon: CheckCircle })
  if (isQualified) score += 25

  const availDate = c.availability ? new Date(c.availability) : null
  const availPass = !availDate || availDate <= new Date('2025-09-30')
  reasons.push({ text: availPass ? `Available: ${c.availability || 'Now'}` : `Available: ${c.availability}`, pass: availPass, icon: Clock })
  if (availPass) score += 20

  const hasCerts = c.certificates && c.certificates.length > 0
  reasons.push({ text: hasCerts ? `${c.certificates.length} certificates` : 'No certificates', pass: hasCerts, icon: Award })
  if (hasCerts) score += 10

  const expPass = c.experienceYears >= 4
  reasons.push({ text: `${c.experienceYears} yrs experience`, pass: expPass, icon: Banknote })
  if (expPass) score += 10

  return { score, reasons }
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
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const [search, setSearch] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [filterDiscipline, setFilterDiscipline] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [assignedMap, setAssignedMap] = useState<Record<number, number[]>>({})

  const selectedProject = projects.find(p => p.id === selectedProjectId) ?? null
  const positions = selectedProject ? (projectPositions[selectedProject.id] ?? []) : []
  const assignedIds = selectedProject ? (assignedMap[selectedProject.id] ?? []) : []

  const allLocations = [...new Set(candidates.map(c => c.location))].sort()
  const allDisciplines = [...new Set(candidates.map(c => c.discipline))].sort()

  const matchedCandidates = selectedProject
    ? candidates
        .map(c => ({ ...c, ...computeMatch(c, selectedProject.id) }))
        .sort((a, b) => b.score - a.score)
    : []

  const filtered = matchedCandidates.filter(c => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.role.toLowerCase().includes(search.toLowerCase())) return false
    if (filterLocation && c.location !== filterLocation) return false
    if (filterDiscipline && c.discipline !== filterDiscipline) return false
    return true
  })

  const strongCount = filtered.filter(c => c.score >= 80).length
  const goodCount   = filtered.filter(c => c.score >= 60 && c.score < 80).length

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  function assign(candidateId: number) {
    if (!selectedProject) return
    setAssignedMap(prev => ({
      ...prev,
      [selectedProject.id]: [...(prev[selectedProject.id] ?? []), candidateId]
    }))
  }

  function unassign(candidateId: number) {
    if (!selectedProject) return
    setAssignedMap(prev => ({
      ...prev,
      [selectedProject.id]: (prev[selectedProject.id] ?? []).filter(id => id !== candidateId)
    }))
  }

  // ── Project list view ─────────────────────────────────────────────────────
  if (!selectedProject) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <h1 className="page-title">Matching</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
            Select a project to match and assign candidates to open positions
          </p>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {projects.map((p, i) => {
            const st = statusConfig[p.status] ?? { label: p.status, cls: 'badge-gray' }
            const pos = projectPositions[p.id] ?? []
            const totalRoles = pos.reduce((a, r) => a + r.qty, 0)
            const assigned = (assignedMap[p.id] ?? []).length
            return (
              <button
                key={p.id}
                onClick={() => { setSelectedProjectId(p.id); setSearch(''); setFilterLocation(''); setFilterDiscipline(''); setSelectedPosition(''); setExpandedId(null) }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem 1.25rem', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', borderBottom: i < projects.length - 1 ? '1px solid #f3f4f6' : 'none', transition: 'background 0.12s' }}
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
                onClick={() => setSelectedPosition('')}
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
                  onClick={() => setSelectedPosition(pos.role === selectedPosition ? '' : pos.role)}
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
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
                <option value="">All Locations</option>
                {allLocations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={filterDiscipline} onChange={e => setFilterDiscipline(e.target.value)}>
                <option value="">All Disciplines</option>
                {allDisciplines.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              {(search || filterLocation || filterDiscipline) && (
                <button className="btn-ghost" style={{ fontSize: '0.78rem', color: '#b91c1c' }} onClick={() => { setSearch(''); setFilterLocation(''); setFilterDiscipline('') }}>
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
          {filtered.map((c, rank) => {
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
                            {c.certificates.map(cert => (
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
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No candidates match the current filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
