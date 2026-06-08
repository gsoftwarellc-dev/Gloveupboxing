import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, Star, Mail, Phone, MapPin, Calendar, FileText,
  Briefcase, Edit, Plus, Download, CheckCircle, MessageSquare,
  Clock, Award, Building2
} from 'lucide-react'
import { candidates } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  available:       { label: 'Available',      cls: 'badge-green' },
  placed:          { label: 'Placed',         cls: 'badge-blue' },
  interviewing:    { label: 'Interviewing',   cls: 'badge-yellow' },
  'not-available': { label: 'Not Available',  cls: 'badge-red' },
}

const timeline = [
  { date: '08 Jun 2025', event: 'Interview scheduled with Mace Group — Video Call 2:00 pm', type: 'interview' },
  { date: '05 Jun 2025', event: 'Phone screen completed — strong candidate, available in 4 weeks', type: 'call' },
  { date: '01 Jun 2025', event: 'CV submitted to Balfour Beatty for Senior Site Manager', type: 'submission' },
  { date: '28 May 2025', event: 'Added to vacancy: Senior Site Manager – Manchester', type: 'vacancy' },
  { date: '20 May 2025', event: 'Candidate registered via LinkedIn', type: 'registration' },
]

export default function CandidateDetail() {
  const { id } = useParams()
  const c = candidates.find(c => c.id === Number(id))

  if (!c) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p>Candidate not found.</p>
      <Link to="/candidates" className="btn-primary" style={{ marginTop: '1rem' }}>Back to Candidates</Link>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Back + actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/candidates" className="btn-ghost"><ArrowLeft size={15} /> Back to Candidates</Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Download size={14} />Export CV</button>
          <button className="btn-secondary"><Edit size={14} />Edit</button>
          <button className="btn-primary"><Briefcase size={14} />Match to Vacancy</button>
        </div>
      </div>

      {/* Profile header */}
      <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg,#b8942e,#d4af5a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ffffff', fontWeight: 800, fontSize: '1.5rem'
        }}>{c.name.split(' ').map(n => n[0]).join('')}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h1 className="page-title">{c.name}</h1>
            <span className={`badge ${statusConfig[c.status].cls}`} style={{ marginTop: '0.3rem' }}>{statusConfig[c.status].label}</span>
            <span className="badge badge-green" style={{ marginTop: '0.3rem' }}>{c.rightToWork ? 'Right to Work ✓' : 'Sponsorship Required'}</span>
          </div>
          <p style={{ color: '#b8942e', fontWeight: 700, margin: '0.25rem 0', fontSize: '1.05rem' }}>{c.role}</p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', color: '#000000' }}><MapPin size={13} />{c.location}, {c.postcode}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', color: '#000000' }}><Mail size={13} />{c.email}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1rem', color: '#000000' }}><Phone size={13} />{c.phone}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.625rem', flexWrap: 'wrap' }}>
            <span className="badge badge-gold">{c.discipline}</span>
            {c.tags.map(t => <span key={t} className="badge badge-gray">{t}</span>)}
          </div>
        </div>

        {/* Key stats */}
        <div style={{ display: 'flex', gap: '1.5rem', flexShrink: 0, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#b8942e' }}>£{(c.salary / 1000).toFixed(0)}k</div>
            <div style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 600 }}>Salary Expectation</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000000' }}>{c.experienceYears} yrs</div>
            <div style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 600 }}>Experience</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6' }}>{c.travelRadius} mi</div>
            <div style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 600 }}>Travel Radius</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#000000', fontWeight: 600, marginTop: '0.25rem' }}>Rating</div>
          </div>
        </div>
      </div>

      {/* Two column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Certificates */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Certificates & Qualifications</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              {(c.certificates || c.skills).map(cert => (
                <span key={cert} style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  background: '#fef3c7', border: '1px solid rgba(184,148,46,0.35)',
                  color: '#92400e', padding: '0.35rem 0.75rem', borderRadius: '6px',
                  fontSize: '0.9rem', fontWeight: 700
                }}>
                  <Award size={12} style={{ flexShrink: 0 }} />{cert}
                </span>
              ))}
            </div>
            {c.skills && c.skills.length > 0 && (
              <>
                <div className="label" style={{ marginBottom: '0.5rem' }}>Additional Skills</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {c.skills.map(s => (
                    <span key={s} style={{
                      background: '#f1f5f9', color: '#000000',
                      padding: '0.3rem 0.7rem', borderRadius: '6px',
                      fontSize: '0.9rem', fontWeight: 600
                    }}>{s}</span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Employment History */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Employment History</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(c.employmentHistory || []).map((job, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.875rem', padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.625rem', border: '1px solid #e8eaf0' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '8px', flexShrink: 0,
                    background: job.current ? 'linear-gradient(135deg,#b8942e,#d4af5a)' : '#e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Building2 size={16} style={{ color: job.current ? '#ffffff' : '#6b7280' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: '#000000' }}>{job.role}</span>
                      {job.current && <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>Current</span>}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#000000', fontWeight: 600, marginTop: '0.1rem' }}>{job.company}</div>
                    <div style={{ fontSize: '0.85rem', color: '#000000', marginTop: '0.1rem' }}>{job.from} — {job.to}</div>
                  </div>
                </div>
              ))}
              {(!c.employmentHistory || c.employmentHistory.length === 0) && (
                <p style={{ color: '#000000', fontSize: '0.95rem' }}>No employment history added yet.</p>
              )}
            </div>
          </div>

          {/* Documents */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="section-title">Documents</h3>
              <button className="btn-secondary" style={{ fontSize: '0.95rem', padding: '0.35rem 0.75rem' }}><Plus size={13} />Upload</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { name: `CV – ${c.name.replace(' ', '_')}_2025.pdf`, type: 'CV', size: '245 KB', date: '01 Jun 2025' },
                { name: 'SMSTS_Certificate.pdf', type: 'Certificate', size: '128 KB', date: '15 Mar 2024' },
                { name: 'Right_to_Work_Docs.pdf', type: 'Right to Work', size: '312 KB', date: '01 Jan 2024' },
                { name: 'Passport_Copy.pdf', type: 'Passport', size: '890 KB', date: '01 Jan 2024' },
              ].map(doc => (
                <div key={doc.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <FileText size={16} style={{ color: '#b8942e', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 600 }}>{doc.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#000000' }}>{doc.type} · {doc.size} · {doc.date}</div>
                  </div>
                  <span className="badge badge-gray">{doc.type}</span>
                  <button className="btn-ghost" style={{ padding: '0.25rem 0.5rem', fontSize: '0.95rem' }}><Download size={12} /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity timeline */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="section-title">Activity Timeline</h3>
              <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.35rem 0.75rem' }}><Plus size={13} />Add Note</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.875rem', padding: '0.75rem 0', borderBottom: i < timeline.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: t.type === 'interview' ? '#dbeafe' : t.type === 'call' ? '#dcfce7' : t.type === 'submission' ? '#fef3c7' : '#f3e8ff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px'
                  }}>
                    {t.type === 'interview' ? <Calendar size={13} style={{ color: '#2563eb' }} /> :
                     t.type === 'call'       ? <Phone size={13} style={{ color: '#16a34a' }} /> :
                     t.type === 'submission' ? <FileText size={13} style={{ color: '#d97706' }} /> :
                     t.type === 'vacancy'    ? <Briefcase size={13} style={{ color: '#7c3aed' }} /> :
                     <CheckCircle size={13} style={{ color: '#b8942e' }} />}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: '#000000', fontWeight: 500 }}>{t.event}</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000', marginTop: '0.15rem' }}>{t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Availability & key info */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Candidate Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Availability',    value: c.availability || '—' },
                { label: 'Notice Period',   value: c.noticePeriod || '—' },
                { label: 'Travel Radius',   value: `${c.travelRadius} miles` },
                { label: 'Source',          value: c.source },
                { label: 'Recruiter',       value: c.recruiter },
                { label: 'Date Added',      value: c.dateAdded },
                { label: 'Last Contacted',  value: c.lastContacted },
                { label: 'Right to Work',   value: c.rightToWork ? 'Yes ✓' : 'No — Sponsorship' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="label">{row.label}</span>
                  <span style={{ fontSize: '0.95rem', color: '#000000', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Mail size={14} />Send Email</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Phone size={14} />Log Call</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><MessageSquare size={14} />Add Note</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Calendar size={14} />Schedule Interview</button>
              <button className="btn-primary" style={{ justifyContent: 'flex-start', marginTop: '0.25rem' }}><Briefcase size={14} />Match to Vacancy</button>
            </div>
          </div>

          {/* References */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <h3 className="section-title">References</h3>
              <button className="btn-ghost" style={{ fontSize: '0.95rem', padding: '0.25rem 0.5rem' }}><Plus size={12} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {(c.references || []).map(r => (
                <div key={r.name} style={{ padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#000000' }}>{r.name}</span>
                    <span className={`badge ${r.status === 'obtained' ? 'badge-green' : 'badge-yellow'}`}>{r.status}</span>
                  </div>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#000000' }}>{r.role}</p>
                </div>
              ))}
              {(!c.references || c.references.length === 0) && (
                <p style={{ color: '#000000', fontSize: '0.9rem', margin: 0 }}>No references added yet.</p>
              )}
            </div>
          </div>

          {/* Interview schedule */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <h3 className="section-title">Interviews</h3>
              <button className="btn-ghost" style={{ fontSize: '0.95rem', padding: '0.25rem 0.5rem' }}><Plus size={12} />Schedule</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[{ client: 'Mace Group', date: 'Today 2:00 pm', type: 'Video Call', status: 'Confirmed' }].map((iv, i) => (
                <div key={i} style={{ padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#000000' }}>{iv.client}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#000000', marginTop: '0.2rem' }}>
                    <Clock size={11} />{iv.date} · {iv.type}
                  </div>
                  <span className="badge badge-green" style={{ marginTop: '0.3rem' }}>{iv.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
