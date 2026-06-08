import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, MapPin, Download, SlidersHorizontal, Globe, Lock } from 'lucide-react'
import { vacancies, pipelineStages } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:   { label: 'Active',   cls: 'badge-green' },
  'on-hold': { label: 'On Hold', cls: 'badge-yellow' },
  filled:   { label: 'Filled',   cls: 'badge-blue' },
  closed:   { label: 'Closed',   cls: 'badge-red' },
}


export default function Vacancies() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [disciplineFilter, setDisciplineFilter] = useState('All')
  const [viewMode, setViewMode] = useState<'list' | 'pipeline'>('list')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = vacancies.filter(v => {
    const q = search.toLowerCase()
    return (
      (v.title.toLowerCase().includes(q) || v.client.toLowerCase().includes(q) || v.location.toLowerCase().includes(q)) &&
      (statusFilter === 'All' || v.status === statusFilter) &&
      (disciplineFilter === 'All' || v.discipline === disciplineFilter)
    )
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Vacancies</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>{vacancies.filter(v => v.status === 'active').length} active vacancies</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Download size={15} />Export</button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Post Vacancy</button>
        </div>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
        {[
          { label: 'Total', value: vacancies.length, color: '#000000' },
          { label: 'Active', value: vacancies.filter(v => v.status === 'active').length, color: '#34d399' },
          { label: 'On Hold', value: vacancies.filter(v => v.status === 'on-hold').length, color: '#fbbf24' },
          { label: 'Filled', value: vacancies.filter(v => v.status === 'filled').length, color: '#60a5fa' },
          { label: 'Applications', value: vacancies.reduce((a, v) => a + v.applications, 0), color: '#b8942e' },
        ].map(s => (
          <div key={s.label} className="card" style={{ textAlign: 'center', padding: '0.875rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
            <Search size={14} />
            <input className="input" placeholder="Search title, client, location..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="input" style={{ width: 'auto' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option value="active">Active</option>
            <option value="on-hold">On Hold</option>
            <option value="filled">Filled</option>
            <option value="closed">Closed</option>
          </select>
          <select className="input" style={{ width: 'auto' }} value={disciplineFilter} onChange={e => setDisciplineFilter(e.target.value)}>
            <option value="All">All Disciplines</option>
            {['Civil', 'Structural', 'Groundworks', 'MEP', 'Commercial', 'H&S'].map(d => <option key={d}>{d}</option>)}
          </select>
          <button className="btn-secondary"><SlidersHorizontal size={14} />More</button>
          <div style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto' }}>
            <button className={`btn-${viewMode === 'list' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem', fontSize: '1.05rem' }} onClick={() => setViewMode('list')}>List</button>
            <button className={`btn-${viewMode === 'pipeline' ? 'primary' : 'secondary'}`} style={{ padding: '0.4rem 0.625rem', fontSize: '1.05rem' }} onClick={() => setViewMode('pipeline')}>Pipeline</button>
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Vacancy</th><th>Client</th><th>Location</th><th>Salary</th>
                <th>Type</th><th>Status</th><th>Applications</th><th>Recruiter</th><th>Deadline</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(v => (
                <tr key={v.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{v.title}</div>
                    <span className="badge badge-gold" style={{ marginTop: '0.2rem' }}>{v.discipline}</span>
                  </td>
                  <td style={{ fontSize: '1.05rem', color: '#000000' }}>{v.client}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}>
                      <MapPin size={12} />{v.location}
                    </div>
                  </td>
                  <td style={{ fontSize: '1.05rem', color: '#000000', whiteSpace: 'nowrap' }}>{v.salary}</td>
                  <td><span className="badge badge-gray">{v.type}</span></td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span className={`badge ${statusConfig[v.status].cls}`}>{statusConfig[v.status].label}</span>
                      {v.visibility === 'Public'
                        ? <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}><Globe size={9} style={{ marginRight: 2 }} />Public</span>
                        : <span className="badge badge-gray" style={{ fontSize: '0.72rem' }}><Lock size={9} style={{ marginRight: 2 }} />Private</span>}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 700 }}>{v.applications}</div>
                    <div style={{ fontSize: '0.9rem', color: '#000000' }}>{v.interviews} interviews</div>
                  </td>
                  <td style={{ fontSize: '1.05rem', color: '#000000' }}>{v.recruiter}</td>
                  <td style={{ fontSize: '1.05rem', color: '#000000' }}>{v.deadline}</td>
                  <td><Link to={`/vacancies/${v.id}`} className="btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '1.05rem' }}>View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Pipeline Kanban — 11 stages */
        <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', minWidth: 1200 }}>
            {pipelineStages.map((stage, si) => {
              const stageVacancies = filtered.filter((_, i) => i % pipelineStages.length === si)
              return (
                <div key={stage.key} style={{ flex: '0 0 180px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem', padding: '0 0.25rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: stage.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stage.key}</span>
                    <span style={{ background: '#f1f5f9', color: '#000000', padding: '0.1rem 0.45rem', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 700 }}>{stageVacancies.length}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {stageVacancies.map(v => (
                      <Link key={v.id} to={`/vacancies/${v.id}`} style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ padding: '0.75rem', cursor: 'pointer', borderLeft: `3px solid ${stage.color}` }}>
                          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#000000', marginBottom: '0.25rem', lineHeight: 1.3 }}>{v.title}</div>
                          <div style={{ fontSize: '0.82rem', color: '#000000', marginBottom: '0.375rem' }}>{v.client}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span className={`badge ${statusConfig[v.status].cls}`} style={{ fontSize: '0.7rem' }}>{statusConfig[v.status].label}</span>
                            <span style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 600 }}>{v.applications}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {stageVacancies.length === 0 && (
                      <div style={{ border: '2px dashed #e5e7eb', borderRadius: '0.625rem', padding: '1rem', textAlign: 'center', fontSize: '0.82rem', color: '#000000' }}>Empty</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {showAddModal && <AddVacancyModal onClose={() => setShowAddModal(false)} />}
    </div>
  )
}

function AddVacancyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '680px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 className="section-title">Post New Vacancy</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}>✕</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Title *</label>
            <input className="input" placeholder="e.g. Senior Site Manager" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Client *</label>
            <select className="input"><option>Balfour Beatty</option><option>Mace Group</option><option>Skanska UK</option><option>Costain Ltd</option><option>Arup</option><option>Kier Group</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Linked Project</label>
            <select className="input"><option value="">— None —</option><option>Manchester Victoria Gateway</option><option>London Bridge Residential</option><option>Birmingham Metro Extension</option><option>Glasgow City Centre Regen</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Discipline *</label>
            <select className="input"><option>Civil</option><option>Structural</option><option>Groundworks</option><option>MEP</option><option>Commercial</option><option>H&S</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Employment Type *</label>
            <select className="input"><option>Permanent</option><option>Contract</option><option>Temporary</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Location *</label>
            <input className="input" placeholder="City" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Postcode *</label>
            <input className="input" placeholder="M1 1AA" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Salary / Day Rate *</label>
            <input className="input" placeholder="£60,000 – £70,000" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date</label>
            <input className="input" type="date" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Application Deadline</label>
            <input className="input" type="date" />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Assigned Recruiter</label>
            <select className="input"><option>Tom Bradley</option><option>Emma Clarke</option><option>Mark Richards</option><option>Priya Sharma</option></select>
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Priority</label>
            <select className="input"><option>High</option><option>Medium</option><option>Low</option></select>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Required Certificates</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['SMSTS', 'SSSTS', 'CSCS', 'First Aid', 'CPCS', 'NPORS', 'NEBOSH', 'IOSH', 'PMP', 'MRICS'].map(cert => (
                <label key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', cursor: 'pointer', fontWeight: 500 }}>
                  <input type="checkbox" style={{ accentColor: '#b8942e' }} />{cert}
                </label>
              ))}
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Website Visibility</label>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}>
                <input type="radio" name="visibility" defaultChecked style={{ accentColor: '#b8942e' }} />
                <Globe size={14} /> Public — appears on website job listings
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }}>
                <input type="radio" name="visibility" style={{ accentColor: '#b8942e' }} />
                <Lock size={14} /> Private — CRM only
              </label>
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Job Description</label>
            <textarea className="input" rows={4} placeholder="Describe the role, key responsibilities, and requirements..." style={{ resize: 'vertical' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={onClose}>Post Vacancy</button>
        </div>
      </div>
    </div>
  )
}
