import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Building2, MapPin, Briefcase, Users, TrendingUp, Download, ChevronRight } from 'lucide-react'
import { clients } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'badge-green' },
  prospect: { label: 'Prospect', cls: 'badge-yellow' },
  inactive: { label: 'Inactive', cls: 'badge-red' },
}

export default function Clients() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = clients.filter(c => {
    const q = search.toLowerCase()
    return (
      (c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || c.sector.toLowerCase().includes(q)) &&
      (status === 'All' || c.status === status)
    )
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Clients</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>{clients.length} companies</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Download size={14} />Export</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddModal(true)}><Plus size={14} />Add Client</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Active Clients',   value: clients.filter(c => c.status === 'active').length, icon: Building2, color: '#60a5fa' },
          { label: 'Total Vacancies',  value: clients.reduce((a, c) => a + c.vacancies, 0),      icon: Briefcase,  color: '#b8942e' },
          { label: 'Total Placements', value: clients.reduce((a, c) => a + c.placements, 0),     icon: Users,      color: '#34d399' },
          { label: 'Total Revenue',    value: '£702k',                                            icon: TrendingUp, color: '#c084fc' },
        ].map(s => (
          <div key={s.label} className="stat-card" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{ width: 38, height: 38, borderRadius: '10px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon size={18} style={{ color: s.color }} />
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
            <Search size={14} />
            <input className="input" placeholder="Search company name, sector, location..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="input" style={{ width: 'auto', fontSize: '0.82rem' }} value={status} onChange={e => setStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="active">Active</option>
            <option value="prospect">Prospect</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* List */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {filtered.map((c, i) => (
          <Link
            key={c.id}
            to={`/clients/${c.id}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: '0.875rem 1.25rem',
              borderBottom: i < filtered.length - 1 ? '1px solid #f3f4f6' : 'none',
              textDecoration: 'none',
              transition: 'background 0.12s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fafaf9'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >
            {/* Avatar */}
            <div style={{ width: 40, height: 40, borderRadius: '0.625rem', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
              {c.name[0]}
            </div>

            {/* Name + sector + location */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#6b7280' }}>{c.sector}</span>
                <span style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.2rem' }}><MapPin size={10} />{c.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '1.5rem', flexShrink: 0 }}>
              {[
                { label: 'Vacancies',  value: c.vacancies },
                { label: 'Placements', value: c.placements },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{s.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{s.label}</div>
                </div>
              ))}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#b8942e' }}>{c.revenue}</div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Revenue</div>
              </div>
            </div>

            {/* AM + status */}
            <div style={{ flexShrink: 0, textAlign: 'right', minWidth: 120 }}>
              <span className={`badge ${statusConfig[c.status].cls}`} style={{ fontSize: '0.72rem' }}>{statusConfig[c.status].label}</span>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.3rem' }}>{c.accountManager}</div>
            </div>

            <ChevronRight size={15} style={{ color: '#d1d5db', flexShrink: 0 }} />
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No clients found.</p>
        )}
      </div>

      {showAddModal && <AddClientModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function AddClientModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 className="section-title">Add New Client</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Company Name</label>
            <input className="input" placeholder="e.g. Balfour Beatty" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Sector</label>
            <select className="input"><option>Construction</option><option>Infrastructure</option><option>Engineering</option><option>Residential</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Website</label>
            <input className="input" placeholder="company.co.uk" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location</label>
            <input className="input" placeholder="City" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Account Manager</label>
            <select className="input"><option>Tom Bradley</option><option>Emma Clarke</option><option>Mark Richards</option><option>Priya Sharma</option></select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Notes</label>
            <textarea className="input" rows={3} placeholder="Company overview, key contacts..." style={{ resize: 'vertical' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onClose}>Add Client</button>
        </div>
      </div>
    </div>
  )
}
