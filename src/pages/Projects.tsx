import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, MapPin, Calendar, TrendingUp, Users } from 'lucide-react'
import { projects } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:  { label: 'Active',  cls: 'badge-green' },
  tender:  { label: 'Tender',  cls: 'badge-yellow' },
  closed:  { label: 'Closed',  cls: 'badge-red' },
  paused:  { label: 'Paused',  cls: 'badge-gray' },
}

const stageColors: Record<string, string> = {
  Design: '#60a5fa', Procurement: '#fbbf24', Construction: '#34d399', Handover: '#c084fc'
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? '#34d399' : score >= 60 ? '#fbbf24' : '#f87171'
  return (
    <div style={{
      width: 52, height: 52, borderRadius: '50%',
      border: `3px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0
    }}>
      <span style={{ fontWeight: 700, fontSize: '1.05rem', color }}>{score}</span>
    </div>
  )
}

export default function Projects() {
  const [search, setSearch] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = projects.filter(p => {
    const q = search.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Project Intelligence</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>Track construction projects and recruitment opportunities</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Add Project</button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Total Projects', value: projects.length, color: '#b8942e' },
          { label: 'Active', value: projects.filter(p => p.status === 'active').length, color: '#34d399' },
          { label: 'Total Value', value: '£450M+', color: '#60a5fa' },
          { label: 'Roles Identified', value: projects.reduce((a, p) => a + p.rolesNeeded, 0), color: '#c084fc' },
        ].map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div className="search-bar">
          <Search size={14} />
          <input className="input" placeholder="Search projects, clients, locations..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {/* Projects grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1rem' }}>
        {filtered.map(p => (
          <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
              <ScoreRing score={p.opportunityScore} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#000000', lineHeight: 1.3 }}>{p.name}</h3>
                  <span className={`badge ${statusConfig[p.status]?.cls || 'badge-gray'}`}>{statusConfig[p.status]?.label || p.status}</span>
                </div>
                <div style={{ fontSize: '1.05rem', color: '#b8942e', fontWeight: 600, marginTop: '0.2rem' }}>{p.client}</div>
                <div style={{ display: 'flex', gap: '0.875rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}><MapPin size={11} />{p.location}</span>
                  <span style={{ fontSize: '1.05rem', color: '#000000' }}>{p.value}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.875rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: stageColors[p.stage] || '#888' }}>{p.stage}</div>
                <div style={{ fontSize: '0.78rem', color: '#000000', marginTop: '0.1rem' }}>Stage</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#000000' }}>{p.rolesNeeded}</div>
                <div style={{ fontSize: '0.78rem', color: '#000000', marginTop: '0.1rem' }}>Roles Needed</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#000000' }}>{p.contacts}</div>
                <div style={{ fontSize: '0.78rem', color: '#000000', marginTop: '0.1rem' }}>Contacts</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem', color: '#000000' }}>
              <Calendar size={12} />
              <span>{p.startDate} → {p.endDate}</span>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.05rem', color: '#000000' }}>Opportunity Score</span>
                <span style={{ fontSize: '1.05rem', color: '#000000' }}>{p.opportunityScore}/100</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{
                  width: `${p.opportunityScore}%`,
                  background: p.opportunityScore >= 80 ? '#34d399' : p.opportunityScore >= 60 ? '#fbbf24' : '#f87171'
                }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '1.05rem' }}><Users size={13} />Find Candidates</button>
              <Link to={`/projects/${p.id}`} className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '1.05rem' }}><TrendingUp size={13} />View Intel</Link>
            </div>
          </div>
        ))}
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
