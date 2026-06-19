import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Mail, Phone, MapPin, Calendar, FileText,
  Briefcase, Edit, Plus, Download, CheckCircle, MessageSquare,
  Clock, Award, Building2, Star, User
} from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'

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

const timelineIcon = (type: string) => {
  const map: Record<string, { Icon: typeof Calendar; color: string }> = {
    interview:    { Icon: Calendar,      color: '#2563eb' },
    call:         { Icon: Phone,         color: '#16a34a' },
    submission:   { Icon: FileText,      color: '#b8942e' },
    vacancy:      { Icon: Briefcase,     color: '#7c3aed' },
    registration: { Icon: CheckCircle,   color: '#6b7280' },
  }
  return map[type] ?? { Icon: MessageSquare, color: '#6b7280' }
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.55rem 0', borderBottom: '1px solid #f3f4f6' }}>
      <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 600, textAlign: 'right', maxWidth: '58%' }}>{value}</span>
    </div>
  )
}

export default function CandidateDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { candidates, loading, error } = useCrmData()
  const c = candidates.find(c => c.id === Number(id))

  if (loading || error) return <DataState loading={loading} error={error} />

  if (!c) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p style={{ color: '#6b7280' }}>Candidate not found.</p>
      <button onClick={() => navigate(-1)} className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>Back</button>
    </div>
  )

  const initials = c.name.split(' ').map((n: string) => n[0]).join('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Nav bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <button onClick={() => navigate(-1)} className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Download size={13} />Export CV</button>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Edit size={13} />Edit</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }}><Briefcase size={13} />Match to Vacancy</button>
        </div>
      </div>

      {/* Profile header */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Avatar */}
          <div style={{
            width: 64, height: 64, borderRadius: '0.75rem', flexShrink: 0,
            background: '#1a1a2e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#b8942e', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em'
          }}>{initials}</div>

          {/* Name / role / contact */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{c.name}</h1>
              <span className={`badge ${statusConfig[c.status]?.cls ?? 'badge-gray'}`}>{statusConfig[c.status]?.label ?? c.status}</span>
              {c.rightToWork && <span className="badge badge-green">Right to Work</span>}
            </div>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#b8942e', fontWeight: 600 }}>{c.role}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.6rem' }}>
              <a href={`mailto:${c.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#374151', textDecoration: 'none' }}>
                <Mail size={12} style={{ color: '#9ca3af' }} />{c.email}
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#374151' }}>
                <Phone size={12} style={{ color: '#9ca3af' }} />{c.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#374151' }}>
                <MapPin size={12} style={{ color: '#9ca3af' }} />{c.location}, {c.postcode}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
              <span className="badge badge-gold">{c.discipline}</span>
              {c.tags.map((t: string) => <span key={t} className="badge badge-gray">{t}</span>)}
            </div>
          </div>

          {/* Key metrics */}
          <div style={{ display: 'flex', gap: '0', flexShrink: 0, border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden' }}>
            {[
              { label: 'Experience', value: `${c.experienceYears} yrs` },
              { label: 'Salary', value: `£${(c.salary / 1000).toFixed(0)}k` },
              { label: 'Travel', value: `${c.travelRadius} mi` },
            ].map((m, i) => (
              <div key={m.label} style={{
                padding: '0.875rem 1.25rem', textAlign: 'center',
                borderRight: i < 2 ? '1px solid #e8eaf0' : 'none'
              }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{m.value}</div>
                <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '0.15rem', fontWeight: 500 }}>{m.label}</div>
              </div>
            ))}
            <div style={{ padding: '0.875rem 1.25rem', textAlign: 'center', borderLeft: '1px solid #e8eaf0' }}>
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />
                ))}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '0.3rem', fontWeight: 500 }}>Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.25rem', alignItems: 'start' }}>

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Qualifications */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Qualifications &amp; Certificates
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: c.skills?.length ? '1rem' : 0 }}>
              {(c.certificates || c.skills || []).map((cert: string) => (
                <div key={cert} style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.3rem 0.7rem',
                  background: '#fdfaf3', border: '1px solid #e9d98a',
                  borderRadius: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: '#92400e'
                }}>
                  <Award size={11} />{cert}
                </div>
              ))}
            </div>
            {c.skills && c.skills.length > 0 && (
              <>
                <p style={{ margin: '0 0 0.5rem', fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Skills</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {c.skills.map((s: string) => (
                    <span key={s} style={{ padding: '0.25rem 0.65rem', background: '#f3f4f6', color: '#374151', borderRadius: '0.375rem', fontSize: '0.8rem', fontWeight: 500 }}>{s}</span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Employment History */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Employment History
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {(c.employmentHistory || []).map((job: { company: string; role: string; from: string; to: string; current: boolean }, i: number, arr: unknown[]) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, marginBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '0.5rem',
                      background: job.current ? '#1a1a2e' : '#f3f4f6',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Building2 size={15} style={{ color: job.current ? '#b8942e' : '#9ca3af' }} />
                    </div>
                    {i < arr.length - 1 && <div style={{ width: 1, flex: 1, background: '#e5e7eb', marginTop: '0.5rem' }} />}
                  </div>
                  <div style={{ paddingTop: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111' }}>{job.role}</span>
                      {job.current && <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>Current</span>}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#374151', fontWeight: 500, marginTop: '0.1rem' }}>{job.company}</div>
                    <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '0.15rem' }}>{job.from} — {job.to}</div>
                  </div>
                </div>
              ))}
              {(!c.employmentHistory || c.employmentHistory.length === 0) && (
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No employment history added.</p>
              )}
            </div>
          </div>

          {/* Documents */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Documents</h3>
              <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}><Plus size={11} />Upload</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[
                { name: `CV – ${c.name.replace(' ', '_')}_2025.pdf`, type: 'CV', size: '245 KB', date: '01 Jun 2025' },
                { name: 'SMSTS_Certificate.pdf', type: 'Certificate', size: '128 KB', date: '15 Mar 2024' },
                { name: 'Right_to_Work_Docs.pdf', type: 'Right to Work', size: '312 KB', date: '01 Jan 2024' },
                { name: 'Passport_Copy.pdf', type: 'Passport', size: '890 KB', date: '01 Jan 2024' },
              ].map(doc => (
                <div key={doc.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 0.75rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                  <FileText size={14} style={{ color: '#b8942e', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.82rem', color: '#111', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.1rem' }}>{doc.type} · {doc.size} · {doc.date}</div>
                  </div>
                  <button className="btn-ghost" style={{ padding: '0.25rem', flexShrink: 0 }}><Download size={13} style={{ color: '#9ca3af' }} /></button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity timeline */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Activity</h3>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}><Plus size={11} />Add Note</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {timeline.map((t, i) => {
                const { Icon, color } = timelineIcon(t.type)
                return (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', paddingBottom: i < timeline.length - 1 ? '1rem' : 0, marginBottom: i < timeline.length - 1 ? '1rem' : 0, borderBottom: i < timeline.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <Icon size={13} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#111', fontWeight: 500, lineHeight: 1.4 }}>{t.event}</p>
                      <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>{t.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Quick actions */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 0.875rem', fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start', fontSize: '0.82rem' }}><Mail size={13} />Send Email</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start', fontSize: '0.82rem' }}><Phone size={13} />Log Call</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start', fontSize: '0.82rem' }}><MessageSquare size={13} />Add Note</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start', fontSize: '0.82rem' }}><Calendar size={13} />Schedule Interview</button>
              <div style={{ height: '0.25rem' }} />
              <button className="btn-primary" style={{ justifyContent: 'flex-start', fontSize: '0.82rem' }}><Briefcase size={13} />Match to Vacancy</button>
            </div>
          </div>

          {/* Candidate Info */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 0.25rem', fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Candidate Info</h3>
            <div>
              <InfoRow label="Availability" value={c.availability || '—'} />
              <InfoRow label="Notice Period" value={c.noticePeriod || '—'} />
              <InfoRow label="Travel Radius" value={`${c.travelRadius} miles`} />
              <InfoRow label="Source" value={c.source} />
              <InfoRow label="Recruiter" value={c.recruiter} />
              <InfoRow label="Date Added" value={c.dateAdded} />
              <InfoRow label="Last Contacted" value={c.lastContacted} />
              <InfoRow label="Right to Work" value={c.rightToWork ? 'Yes' : 'Sponsorship Required'} />
            </div>
          </div>

          {/* References */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <h3 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>References</h3>
              <button className="btn-ghost" style={{ fontSize: '0.78rem', padding: '0.25rem 0.5rem' }}><Plus size={11} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {c.references.map((r) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.7rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <User size={13} style={{ color: '#9ca3af' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111' }}>{r.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{r.role}</div>
                  </div>
                  <span className={`badge ${r.status === 'obtained' ? 'badge-green' : 'badge-yellow'}`} style={{ fontSize: '0.7rem' }}>{r.status}</span>
                </div>
              ))}
              {c.references.length === 0 && (
                <p style={{ color: '#9ca3af', fontSize: '0.82rem', margin: 0 }}>No references added.</p>
              )}
            </div>
          </div>

          {/* Interviews */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <h3 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Interviews</h3>
              <button className="btn-ghost" style={{ fontSize: '0.78rem', padding: '0.25rem 0.5rem' }}><Plus size={11} />Schedule</button>
            </div>
            {[{ client: 'Mace Group', date: 'Today 2:00 pm', type: 'Video Call', status: 'Confirmed' }].map((iv, i) => (
              <div key={i} style={{ padding: '0.75rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#111' }}>{iv.client}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  <Clock size={11} />{iv.date} · {iv.type}
                </div>
                <span className="badge badge-green" style={{ marginTop: '0.4rem', fontSize: '0.7rem' }}>{iv.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
