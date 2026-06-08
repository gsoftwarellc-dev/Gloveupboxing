import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Download, MapPin, Phone, Mail, Star, SlidersHorizontal } from 'lucide-react'
import { candidates } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  available:     { label: 'Available',     cls: 'badge-green' },
  placed:        { label: 'Placed',        cls: 'badge-blue' },
  interviewing:  { label: 'Interviewing',  cls: 'badge-yellow' },
  'not-available': { label: 'Not Available', cls: 'badge-red' },
}

const disciplines = ['All', 'Civil', 'Structural', 'Groundworks', 'MEP', 'Commercial', 'H&S']
const statuses = ['All', 'available', 'placed', 'interviewing', 'not-available']

export default function Candidates() {
  const [search, setSearch] = useState('')
  const [discipline, setDiscipline] = useState('All')
  const [status, setStatus] = useState('All')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = candidates.filter(c => {
    const q = search.toLowerCase()
    return (
      (c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)) &&
      (discipline === 'All' || c.discipline === discipline) &&
      (status === 'All' || c.status === status)
    )
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Candidates</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>{candidates.length} total candidates</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Download size={15} />Export</button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Add Candidate</button>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
            <Search size={14} />
            <input className="input" placeholder="Search name, role, location..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="input" style={{ width: 'auto' }} value={discipline} onChange={e => setDiscipline(e.target.value)}>
            {disciplines.map(d => <option key={d}>{d}</option>)}
          </select>
          <select className="input" style={{ width: 'auto' }} value={status} onChange={e => setStatus(e.target.value)}>
            {statuses.map(s => <option key={s} value={s}>{s === 'All' ? 'All Status' : statusConfig[s]?.label}</option>)}
          </select>
          <button className="btn-secondary"><SlidersHorizontal size={14} />More Filters</button>
          <div style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto' }}>
            <button className={`btn-${viewMode === 'table' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem' }} onClick={() => setViewMode('table')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18M3 9h18M3 15h18M3 21h18" /></svg>
            </button>
            <button className={`btn-${viewMode === 'cards' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem' }} onClick={() => setViewMode('cards')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'table' ? (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Role / Discipline</th>
                  <th>Location</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Rating</th>
                  <th>Recruiter</th>
                  <th>Last Contact</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div className="avatar">{c.name.split(' ').map(n => n[0]).join('')}</div>
                        <div>
                          <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{c.name}</div>
                          <div style={{ fontSize: '1.05rem', color: '#000000' }}>{c.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: '1.05rem', color: '#000000' }}>{c.role}</div>
                      <span className="badge badge-gold">{c.discipline}</span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}>
                        <MapPin size={12} />{c.location}
                      </div>
                    </td>
                    <td style={{ fontSize: '1.05rem', color: '#000000' }}>£{(c.salary / 1000).toFixed(0)}k</td>
                    <td><span className={`badge ${statusConfig[c.status].cls}`}>{statusConfig[c.status].label}</span></td>
                    <td>
                      <div style={{ display: 'flex', gap: '1px' }}>
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} size={12} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />
                        ))}
                      </div>
                    </td>
                    <td style={{ fontSize: '1.05rem', color: '#000000' }}>{c.recruiter}</td>
                    <td style={{ fontSize: '1.05rem', color: '#000000' }}>{c.lastContacted}</td>
                    <td>
                      <Link to={`/candidates/${c.id}`} className="btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '1.05rem' }}>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '0.875rem 1rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '1.05rem', color: '#000000' }}>Showing {filtered.length} of {candidates.length} candidates</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '1.05rem' }}>Previous</button>
              <button className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '1.05rem' }}>Next</button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {filtered.map(c => (
            <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#b8942e,#d4af5a)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: '1.05rem', flexShrink: 0
                  }}>{c.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#000000' }}>{c.name}</div>
                    <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.1rem' }}>{c.role}</div>
                  </div>
                </div>
                <span className={`badge ${statusConfig[c.status].cls}`}>{statusConfig[c.status].label}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000' }}>
                  <MapPin size={12} />{c.location} • {c.postcode}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000' }}>
                  <Mail size={12} />{c.email}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000' }}>
                  <Phone size={12} />{c.phone}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">{c.discipline}</span>
                {c.tags.slice(0,2).map(t => <span key={t} className="badge badge-gray">{t}</span>)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={13} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />
                  ))}
                </div>
                <Link to={`/candidates/${c.id}`} className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '1.05rem' }}>View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Candidate Modal */}
      {showAddModal && <AddCandidateModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function AddCandidateModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 className="section-title">Add New Candidate</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          {[
            { label: 'First Name', ph: 'John' },
            { label: 'Last Name', ph: 'Smith' },
            { label: 'Email', ph: 'john.smith@email.com' },
            { label: 'Phone', ph: '07700 000000' },
          ].map(f => (
            <div key={f.label}>
              <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>{f.label}</label>
              <input className="input" placeholder={f.ph} />
            </div>
          ))}
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Role / Title</label>
            <input className="input" placeholder="e.g. Senior Site Manager" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Discipline</label>
            <select className="input">
              <option>Civil</option><option>Structural</option><option>Groundworks</option>
              <option>MEP</option><option>Commercial</option><option>H&S</option>
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location</label>
            <input className="input" placeholder="City" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Postcode</label>
            <input className="input" placeholder="SW1A 1AA" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Salary Expectation</label>
            <input className="input" placeholder="£50,000" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Source</label>
            <select className="input">
              <option>LinkedIn</option><option>Job Board</option><option>Referral</option>
              <option>Website</option><option>Cold Call</option>
            </select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Right to Work</label>
            <select className="input"><option>Yes</option><option>No</option><option>Requires Sponsorship</option></select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Notes</label>
            <textarea className="input" rows={3} placeholder="Initial notes about the candidate..." style={{ resize: 'vertical' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onClose}>Add Candidate</button>
        </div>
      </div>
    </div>
  )
}
