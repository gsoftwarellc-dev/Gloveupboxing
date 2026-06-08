import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Building2, MapPin, Briefcase, Users, TrendingUp, Download } from 'lucide-react'
import { clients } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'badge-green' },
  prospect: { label: 'Prospect', cls: 'badge-yellow' },
  inactive: { label: 'Inactive', cls: 'badge-red' },
}

export default function Clients() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')
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
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>{clients.length} companies</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Download size={15} />Export</button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Add Client</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Active Clients', value: clients.filter(c => c.status === 'active').length, icon: Building2, color: '#60a5fa' },
          { label: 'Total Vacancies', value: clients.reduce((a, c) => a + c.vacancies, 0), icon: Briefcase, color: '#b8942e' },
          { label: 'Total Placements', value: clients.reduce((a, c) => a + c.placements, 0), icon: Users, color: '#34d399' },
          { label: 'Total Revenue', value: '£702k', icon: TrendingUp, color: '#c084fc' },
        ].map(s => (
          <div key={s.label} className="stat-card" style={{ flexDirection: 'row', alignItems: 'center', gap: '0.875rem' }}>
            <div style={{ width: 40, height: 40, borderRadius: '10px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <s.icon size={20} style={{ color: s.color }} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#000000', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{s.label}</div>
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
          <select className="input" style={{ width: 'auto' }} value={status} onChange={e => setStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="active">Active</option>
            <option value="prospect">Prospect</option>
            <option value="inactive">Inactive</option>
          </select>
          <div style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto' }}>
            <button className={`btn-${viewMode === 'cards' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem' }} onClick={() => setViewMode('cards')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            </button>
            <button className={`btn-${viewMode === 'table' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem' }} onClick={() => setViewMode('table')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg>
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'cards' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {filtered.map(c => (
            <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '10px',
                    background: '#1a1a1a', border: '1px solid #e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#b8942e', fontWeight: 800, fontSize: '1.05rem', flexShrink: 0
                  }}>{c.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.05rem' }}>{c.name}</div>
                    <div style={{ fontSize: '1.05rem', color: '#000000' }}>{c.sector}</div>
                  </div>
                </div>
                <span className={`badge ${statusConfig[c.status].cls}`}>{statusConfig[c.status].label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000' }}>
                <MapPin size={12} />{c.location}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', borderTop: '1px solid #222', paddingTop: '0.875rem' }}>
                {[
                  { label: 'Contacts', value: c.contacts },
                  { label: 'Vacancies', value: c.vacancies },
                  { label: 'Placements', value: c.placements },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#000000' }}>{s.value}</div>
                    <div style={{ fontSize: '0.78rem', color: '#000000', marginTop: '0.1rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.05rem', color: '#000000' }}>Account Manager</div>
                  <div style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 500 }}>{c.accountManager}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.05rem', color: '#000000' }}>Revenue</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#b8942e' }}>{c.revenue}</div>
                </div>
              </div>
              <Link to={`/clients/${c.id}`} className="btn-secondary" style={{ justifyContent: 'center', fontSize: '1.05rem' }}>View Client</Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Company</th><th>Sector</th><th>Location</th><th>Status</th>
                <th>Vacancies</th><th>Placements</th><th>Revenue</th><th>Account Manager</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: '#1a1a1a', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '1.05rem', flexShrink: 0 }}>{c.name[0]}</div>
                      <div style={{ fontWeight: 600, color: '#000000' }}>{c.name}</div>
                    </div>
                  </td>
                  <td style={{ color: '#000000', fontSize: '1.05rem' }}>{c.sector}</td>
                  <td style={{ color: '#000000', fontSize: '1.05rem' }}>{c.location}</td>
                  <td><span className={`badge ${statusConfig[c.status].cls}`}>{statusConfig[c.status].label}</span></td>
                  <td style={{ fontWeight: 600, color: '#000000' }}>{c.vacancies}</td>
                  <td style={{ fontWeight: 600, color: '#000000' }}>{c.placements}</td>
                  <td style={{ fontWeight: 700, color: '#b8942e' }}>{c.revenue}</td>
                  <td style={{ fontSize: '1.05rem', color: '#000000' }}>{c.accountManager}</td>
                  <td><Link to={`/clients/${c.id}`} className="btn-ghost" style={{ fontSize: '1.05rem', padding: '0.3rem 0.6rem' }}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
