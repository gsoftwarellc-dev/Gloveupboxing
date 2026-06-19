import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase, Search, Filter, ChevronRight, Building2 } from 'lucide-react'
import { DataState } from '../../components/DataState'
import { useCrmData } from '../../context/useCrmData'

export default function PublicJobs() {
  const { vacancies, loading, error } = useCrmData()
  const [search, setSearch] = useState('')
  const [discipline, setDiscipline] = useState('All')
  const [type, setType] = useState('All')
  const publicVacancies = vacancies.filter(v => v.published && v.visibility !== 'Private' && v.status !== 'closed')
  const disciplines = ['All', ...Array.from(new Set(publicVacancies.map(v => v.discipline))).filter(Boolean)]
  const types = ['All', ...Array.from(new Set(publicVacancies.map(v => v.type))).filter(Boolean)]

  const filtered = publicVacancies.filter(v => {
    const q = search.toLowerCase()
    return (
      (v.title.toLowerCase().includes(q) || v.location.toLowerCase().includes(q) || v.client.toLowerCase().includes(q)) &&
      (discipline === 'All' || v.discipline === discipline) &&
      (type === 'All' || v.type === type)
    )
  })

  if (loading || error) return <DataState loading={loading} error={error} />

  return (
    <div style={{ width: '100%', background: '#f5f6fa', fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e2535 0%, #252f46 100%)', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 800, margin: '0 0 0.5rem' }}>Construction & Engineering Jobs</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: '0 0 2rem' }}>Find your next role with the UK's specialist construction recruiter</p>
        <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', gap: '0.5rem', background: '#fff', borderRadius: '10px', padding: '0.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
          <Search size={18} style={{ color: '#94a3b8', margin: '0.5rem 0.25rem 0.5rem 0.5rem', flexShrink: 0 }} />
          <input
            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', color: '#000', background: 'transparent' }}
            placeholder="Job title, skill or location..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button style={{ background: '#b8942e', color: '#fff', border: 'none', borderRadius: '7px', padding: '0.5rem 1.25rem', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>Search</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>
        <div className="jobs-layout" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1.5rem', alignItems: 'start' }}>
          {/* Filters sidebar */}
          <aside>
            <div style={{ background: '#fff', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#000', marginBottom: '1.25rem', fontSize: '1rem' }}>
                <Filter size={15} />Filters
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Discipline</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {disciplines.map(d => (
                      <button key={d} onClick={() => setDiscipline(d)} style={{ border: 'none', padding: '0.3rem 0.5rem', textAlign: 'left', borderRadius: '6px', cursor: 'pointer', fontWeight: discipline === d ? 700 : 400, color: discipline === d ? '#b8942e' : '#000', background: discipline === d ? 'rgba(184,148,46,0.08)' : 'transparent', fontSize: '1rem' }}>
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Job Type</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {types.map(t => (
                      <button key={t} onClick={() => setType(t)} style={{ border: 'none', padding: '0.3rem 0.5rem', textAlign: 'left', borderRadius: '6px', cursor: 'pointer', fontWeight: type === t ? 700 : 400, color: type === t ? '#b8942e' : '#000', background: type === t ? 'rgba(184,148,46,0.08)' : 'transparent', fontSize: '1rem' }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1rem', background: 'linear-gradient(135deg,#1e2535,#252f46)', borderRadius: '10px', padding: '1.25rem', border: '1px solid #b8942e30' }}>
              <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>Don't see your role?</div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 0.875rem' }}>Register your CV and we'll match you when the right vacancy comes in.</p>
              <Link to="/apply" style={{ display: 'block', background: '#b8942e', color: '#fff', borderRadius: '6px', padding: '0.5rem 1rem', textDecoration: 'none', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>Register CV</Link>
            </div>
          </aside>

          {/* Job listings */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 700, color: '#000', fontSize: '1rem' }}>{filtered.length} job{filtered.length !== 1 ? 's' : ''} found</div>
              <select style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '0.4rem 0.75rem', fontSize: '0.9rem', color: '#000', background: '#fff', cursor: 'pointer' }}>
                <option>Most Recent</option>
                <option>Highest Salary</option>
                <option>Closest Location</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {filtered.map(v => (
                <Link key={v.id} to={`/jobs/${v.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: '10px', padding: '1.25rem', border: '1px solid #e5e7eb', transition: 'box-shadow 0.15s, border-color 0.15s', cursor: 'pointer' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#b8942e'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(184,148,46,0.1)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', gap: '0.875rem', flex: 1, minWidth: 0 }}>
                        <div style={{ width: 44, height: 44, borderRadius: '10px', background: '#1e2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0 }}>
                          {v.client[0]}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, color: '#000', fontSize: '1.05rem' }}>{v.title}</div>
                          <div style={{ color: '#b8942e', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.15rem' }}>{v.client}</div>
                          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', color: '#374151' }}>
                              <MapPin size={12} />{v.location}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', color: '#374151' }}>
                              <Briefcase size={12} />{v.type}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', color: '#374151' }}>
                              <Clock size={12} />Posted {v.dateAdded}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontWeight: 800, color: '#000', fontSize: '1.05rem' }}>{v.salary}</div>
                        <span style={{ display: 'inline-block', marginTop: '0.35rem', padding: '0.2rem 0.625rem', background: '#dcfce7', color: '#16a34a', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>Active</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.875rem', paddingTop: '0.875rem', borderTop: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                        <span style={{ padding: '0.2rem 0.625rem', background: 'rgba(184,148,46,0.1)', color: '#b8942e', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{v.discipline}</span>
                        {v.requiredCerts?.slice(0, 2).map(c => (
                          <span key={c} style={{ padding: '0.2rem 0.625rem', background: '#f1f5f9', color: '#374151', borderRadius: '4px', fontSize: '0.8rem' }}>{c}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#b8942e', fontWeight: 700, fontSize: '0.9rem' }}>
                        View Job <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div style={{ background: '#fff', borderRadius: '10px', padding: '3rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                  <Building2 size={40} style={{ color: '#d1d5db', margin: '0 auto 1rem' }} />
                  <div style={{ fontWeight: 600, color: '#000', marginBottom: '0.5rem' }}>No jobs match your search</div>
                  <div style={{ color: '#6b7280', fontSize: '0.95rem' }}>Try adjusting your filters or search term.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
