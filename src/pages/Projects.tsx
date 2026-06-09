import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, MapPin, Calendar, Users, TrendingUp, ChevronRight } from 'lucide-react'
import { projects } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:  { label: 'Active',  cls: 'badge-green' },
  tender:  { label: 'Tender',  cls: 'badge-yellow' },
  closed:  { label: 'Closed',  cls: 'badge-red' },
  paused:  { label: 'Paused',  cls: 'badge-gray' },
}

export default function Projects() {
  const [search, setSearch] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = projects.filter(p => {
    const q = search.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
  })

  const totalRoles = projects.reduce((a, p) => a + p.rolesNeeded, 0)
  const activeCount = projects.filter(p => p.status === 'active').length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Project Intelligence</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.2rem 0 0' }}>Track construction projects and recruitment opportunities</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={14} />Add Project</button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Total Projects', value: projects.length },
          { label: 'Active', value: activeCount },
          { label: 'Total Value', value: '£450M+' },
          { label: 'Roles Identified', value: totalRoles },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ position: 'relative' }}>
        <Search size={14} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
        <input
          className="input"
          style={{ paddingLeft: '2.25rem', fontSize: '0.9rem' }}
          placeholder="Search projects, clients, locations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Projects table-style list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {filtered.map(p => {
          const scoreColor = p.opportunityScore >= 80 ? '#15803d' : p.opportunityScore >= 60 ? '#b8942e' : '#b91c1c'
          const scoreBg = p.opportunityScore >= 80 ? '#f0fdf4' : p.opportunityScore >= 60 ? '#fefce8' : '#fef2f2'
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
                </div>
                <div style={{ fontSize: '0.85rem', color: '#b8942e', fontWeight: 600, marginTop: '0.15rem' }}>{p.client}</div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                    <MapPin size={11} />{p.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                    <Calendar size={11} />{p.startDate} – {p.endDate}
                  </span>
                </div>
              </div>

              {/* Stage + metrics */}
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
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151' }}>{p.contacts}</div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <Link to={`/candidates?search=${encodeURIComponent(p.location)}`} className="btn-secondary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                  <Users size={12} />Find Candidates
                </Link>
                <Link to={`/projects/${p.id}`} className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                  View Intel<ChevronRight size={12} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {showAddModal && <AddProjectModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function AddProjectModal({ onClose }: { onClose: () => void }) {
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
            <input className="input" placeholder="e.g. Manchester Victoria Gateway" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Client</label>
            <select className="input"><option>Balfour Beatty</option><option>Mace Group</option><option>Skanska UK</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Contract Value</label>
            <input className="input" placeholder="£45M" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Sector</label>
            <select className="input"><option>Infrastructure</option><option>Residential</option><option>Commercial</option><option>Transport</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Stage</label>
            <select className="input"><option>Design</option><option>Procurement</option><option>Construction</option><option>Handover</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location</label>
            <input className="input" placeholder="City" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date</label>
            <input className="input" type="date" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>End Date</label>
            <input className="input" type="date" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Roles Needed</label>
            <input className="input" type="number" placeholder="0" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onClose}>Add Project</button>
        </div>
      </div>
    </div>
  )
}
