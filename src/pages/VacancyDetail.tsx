import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Users, Edit, Plus, Star, Globe, Lock, CheckCircle, Clock } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import { pipelineStages } from '../lib/constants'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:    { label: 'Active',   cls: 'badge-green' },
  'on-hold': { label: 'On Hold', cls: 'badge-yellow' },
  filled:    { label: 'Filled',  cls: 'badge-blue' },
  closed:    { label: 'Closed',  cls: 'badge-red' },
}

const priorityConfig: Record<string, string> = {
  High: 'badge-red', Medium: 'badge-yellow', Low: 'badge-gray'
}

export default function VacancyDetail() {
  const { id } = useParams()
  const {
    vacancies,
    candidates,
    candidateAssignments,
    updateCandidateAssignment,
    removeCandidateAssignment,
    loading,
    error
  } = useCrmData()
  const v = vacancies.find(v => v.id === Number(id))
  const [activeStageFilter, setActiveStageFilter] = useState('All')

  if (loading || error) return <DataState loading={loading} error={error} />

  if (!v) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p>Vacancy not found.</p>
      <Link to="/admin/vacancies" className="btn-primary" style={{ marginTop: '1rem' }}>Back to Vacancies</Link>
    </div>
  )

  const appCandidates = candidateAssignments
    .filter(a => a.vacancyId === Number(id))
    .map(a => {
      const candidate = candidates.find(c => c.id === a.candidateId)
      if (!candidate) return null
      return {
        ...candidate,
        stage: a.status === 'assigned' ? 'New Application' : a.status,
        assignmentId: a.id,
        notes: a.notes,
        startDate: a.startDate,
      }
    })
    .filter((c): c is NonNullable<typeof c> => c !== null)

  const filtered = activeStageFilter === 'All' ? appCandidates : appCandidates.filter(c => c.stage === activeStageFilter)

  const stageCounts: Record<string, number> = {}
  pipelineStages.forEach(s => { stageCounts[s.key] = appCandidates.filter(c => c.stage === s.key).length })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/admin/vacancies" className="btn-ghost"><ArrowLeft size={15} /> Back to Vacancies</Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Edit size={14} />Edit</button>
          <button className="btn-primary"><Users size={14} />Find Candidates</button>
        </div>
      </div>

      {/* Header card */}
      <div className="card">
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
              <h1 className="page-title">{v.title}</h1>
              <span className={`badge ${statusConfig[v.status]?.cls ?? 'badge-gray'}`}>{statusConfig[v.status]?.label ?? v.status}</span>
              <span className="badge badge-gray">{v.type}</span>
              {v.priority && <span className={`badge ${priorityConfig[v.priority] || 'badge-gray'}`}>{v.priority} Priority</span>}
              {v.visibility === 'Public'
                ? <span className="badge badge-blue"><Globe size={10} style={{ marginRight: 3 }} />Public</span>
                : <span className="badge badge-gray"><Lock size={10} style={{ marginRight: 3 }} />Private</span>}
            </div>
            <p style={{ color: '#b8942e', fontWeight: 700, margin: '0.3rem 0 0', fontSize: '1.05rem' }}>{v.client}</p>
            {v.project && <p style={{ color: '#000000', fontSize: '0.95rem', margin: '0.1rem 0 0' }}>Project: {v.project}</p>}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', color: '#000000' }}><MapPin size={13} />{v.location}, {v.postcode}</span>
              <span style={{ fontSize: '1rem', color: '#000000', fontWeight: 600 }}>{v.salary}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', color: '#000000' }}><Calendar size={13} />Deadline: {v.deadline}</span>
              <span style={{ fontSize: '1rem', color: '#000000' }}>Recruiter: <strong>{v.recruiter}</strong></span>
            </div>
            {v.requiredCerts && v.requiredCerts.length > 0 && (
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginTop: '0.625rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 600 }}>Required:</span>
                {v.requiredCerts.map(cert => (
                  <span key={cert} className="badge badge-gold">{cert}</span>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexShrink: 0 }}>
            {[
              { label: 'Applications', value: v.applications, color: '#000000' },
              { label: 'Shortlisted',  value: v.shortlisted,  color: '#8b5cf6' },
              { label: 'Interviews',   value: v.interviews,   color: '#3b82f6' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', color: '#000000', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11-Stage Pipeline */}
      <div className="card">
        <h3 className="section-title" style={{ marginBottom: '1.1rem' }}>Recruitment Pipeline</h3>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', gap: '0', minWidth: 900 }}>
            {pipelineStages.map((stage, i) => {
              const count = stageCounts[stage.key] || (i === 0 ? v.applications : i === 2 ? v.shortlisted : i === 6 ? v.interviews : 0)
              const isActive = count > 0
              return (
                <div
                  key={stage.key}
                  style={{
                    flex: 1, textAlign: 'center', padding: '0.75rem 0.25rem',
                    borderRight: i < pipelineStages.length - 1 ? '1px dashed #e5e7eb' : 'none',
                    opacity: isActive ? 1 : 0.45,
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                  onClick={() => setActiveStageFilter(activeStageFilter === stage.key ? 'All' : stage.key)}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: stage.color }}>{count}</div>
                  <div style={{ fontSize: '0.75rem', color: '#000000', fontWeight: 600, marginTop: '0.2rem', lineHeight: 1.2 }}>{stage.key}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ height: 5, background: '#f1f5f9', borderRadius: '9999px', marginTop: '1rem', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${v.applications > 0 ? Math.round((v.interviews / v.applications) * 100) : 0}%`, background: 'linear-gradient(90deg,#b8942e,#34d399)', borderRadius: '9999px' }} />
        </div>
        {activeStageFilter !== 'All' && (
          <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Filtering: {activeStageFilter}</span>
            <button className="btn-ghost" style={{ padding: '0.2rem 0.5rem', fontSize: '0.85rem' }} onClick={() => setActiveStageFilter('All')}>✕ Clear</button>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
        {/* Applications */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 className="section-title">Applications ({filtered.length})</h3>
            <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.35rem 0.75rem' }}><Plus size={13} />Add Candidate</button>
          </div>

          {/* Stage filter pills */}
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {['All', ...pipelineStages.map(s => s.key)].map(s => (
              <button
                key={s}
                onClick={() => setActiveStageFilter(s)}
                style={{
                  padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.82rem',
                  fontWeight: 600, cursor: 'pointer', border: 'none',
                  background: activeStageFilter === s ? '#000000' : '#f1f5f9',
                  color: activeStageFilter === s ? '#ffffff' : '#000000',
                  transition: 'all 0.15s'
                }}
              >{s}</button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {filtered.map((c) => {
              const ps = pipelineStages.find(p => p.key === c.stage)
              return (
                <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.625rem', border: '1px solid #e8eaf0' }}>
                  <div className="avatar">{c.name.split(' ').map(n => n[0]).join('')}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: '#000000', fontSize: '1rem' }}>{c.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#000000' }}>{c.role} • {c.location}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '1px', flexShrink: 0 }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={11} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                  </div>
                  <span className={`badge ${ps?.badge || 'badge-gray'}`} style={{ flexShrink: 0 }}>{c.stage}</span>
                  <div style={{ display: 'flex', gap: '0.375rem', flexShrink: 0, alignItems: 'center' }}>
                    <Link to={`/candidates/${c.id}`} className="btn-ghost" style={{ padding: '0.3rem 0.5rem', fontSize: '0.9rem' }}>Profile</Link>
                    <select
                      value={c.stage}
                      onChange={async (e) => {
                        try {
                          await updateCandidateAssignment(c.assignmentId, { status: e.target.value })
                        } catch (err) {
                          alert(err instanceof Error ? err.message : 'Failed to update stage')
                        }
                      }}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.85rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        background: '#ffffff',
                        color: '#000000',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {pipelineStages.map(stage => (
                        <option key={stage.key} value={stage.key}>{stage.key}</option>
                      ))}
                    </select>
                    <button
                      onClick={async () => {
                        if (confirm(`Remove ${c.name} from this vacancy?`)) {
                          try {
                            await removeCandidateAssignment(c.assignmentId)
                          } catch (err) {
                            alert(err instanceof Error ? err.message : 'Failed to remove candidate')
                          }
                        }
                      }}
                      className="btn-ghost"
                      style={{ padding: '0.3rem 0.5rem', fontSize: '0.9rem', color: '#dc2626' }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#000000', fontSize: '0.95rem' }}>
                No candidates at this stage.
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Vacancy Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Discipline',   value: v.discipline },
                { label: 'Recruiter',    value: v.recruiter },
                { label: 'Priority',     value: v.priority || '—' },
                { label: 'Visibility',   value: v.visibility || '—' },
                { label: 'Date Posted',  value: v.dateAdded },
                { label: 'Deadline',     value: v.deadline },
                { label: 'Postcode',     value: v.postcode },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="label">{row.label}</span>
                  <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 600 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required certs */}
          {v.requiredCerts && v.requiredCerts.length > 0 && (
            <div className="card">
              <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Required Certificates</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {v.requiredCerts.map(cert => (
                  <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#000000', fontWeight: 500 }}>
                    <CheckCircle size={13} style={{ color: '#16a34a', flexShrink: 0 }} />{cert}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interview schedule */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <h3 className="section-title">Interviews</h3>
              <button className="btn-ghost" style={{ padding: '0.25rem 0.5rem', fontSize: '0.9rem' }}><Plus size={12} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { candidate: 'James Holloway', date: 'Today 2:00 pm', type: 'Video Call', outcome: 'Pending' },
                { candidate: 'Ryan Moss', date: 'Thu 10:00 am', type: 'On-site', outcome: 'Pending' },
              ].map((iv, i) => (
                <div key={i} style={{ padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#000000' }}>{iv.candidate}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#000000', marginTop: '0.2rem' }}>
                    <Clock size={11} />{iv.date} · {iv.type}
                  </div>
                  <span className="badge badge-yellow" style={{ marginTop: '0.3rem' }}>{iv.outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Job Description</h3>
            <p style={{ fontSize: '0.95rem', color: '#000000', lineHeight: 1.65, margin: 0 }}>{v.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
