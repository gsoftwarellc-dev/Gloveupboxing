import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase, ChevronLeft, Award, CheckCircle, Share2, Bookmark } from 'lucide-react'
import { vacancies } from '../../data/mock'

export default function JobDetail() {
  const { id } = useParams()
  const v = vacancies.find(v => v.id === Number(id))

  if (!v) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#000', marginBottom: '0.75rem' }}>Job not found</div>
        <Link to="/home/jobs" style={{ color: '#b8942e', fontWeight: 600 }}>← Back to all jobs</Link>
      </div>
    </div>
  )

  return (
    <div style={{ width: '100%', background: '#f5f6fa', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {/* Breadcrumb */}
        <Link to="/home/jobs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <ChevronLeft size={14} />All jobs
        </Link>

        <div className="job-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem', alignItems: 'start' }}>
          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Header card */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ width: 56, height: 56, borderRadius: '12px', background: '#1e2535', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 800, fontSize: '1.4rem', flexShrink: 0 }}>
                  {v.client[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h1 style={{ margin: '0 0 0.25rem', fontSize: '1.4rem', fontWeight: 800, color: '#000' }}>{v.title}</h1>
                  <div style={{ color: '#b8942e', fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>{v.client}</div>
                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.95rem', color: '#374151' }}>
                      <MapPin size={14} />{v.location}, {v.postcode}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.95rem', color: '#374151' }}>
                      <Briefcase size={14} />{v.type}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.95rem', color: '#374151' }}>
                      <Clock size={14} />Deadline: {v.deadline}
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#000' }}>{v.salary}</div>
                  <span style={{ display: 'inline-block', padding: '0.2rem 0.625rem', background: '#dcfce7', color: '#16a34a', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.3rem' }}>Active</span>
                </div>
              </div>
            </div>

            {/* Job description */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e5e7eb' }}>
              <h2 style={{ margin: '0 0 1rem', fontSize: '1.1rem', fontWeight: 700, color: '#000' }}>Job Description</h2>
              <p style={{ margin: '0 0 1rem', fontSize: '1rem', color: '#374151', lineHeight: 1.7 }}>{v.description}</p>
              <h3 style={{ margin: '1.5rem 0 0.75rem', fontSize: '1rem', fontWeight: 700, color: '#000' }}>Key Responsibilities</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Manage the on-site construction team and subcontractors',
                  'Ensure health and safety compliance on site at all times',
                  'Liaise with the client, design team and procurement team',
                  'Monitor programme and report progress to senior management',
                  'Coordinate site inspections, surveys and quality checks',
                  'Maintain accurate site records, daily logs and RFIs',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
              <h3 style={{ margin: '1.5rem 0 0.75rem', fontSize: '1rem', fontWeight: 700, color: '#000' }}>What We're Looking For</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  `5+ years experience in ${v.discipline} construction`,
                  'Strong communication and leadership skills',
                  'Proven track record on similar value projects',
                  'Full right to work in the UK',
                  'Local to the project or willing to travel',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Required certs */}
            {v.requiredCerts && v.requiredCerts.length > 0 && (
              <div style={{ background: '#fff', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e5e7eb' }}>
                <h2 style={{ margin: '0 0 1rem', fontSize: '1.1rem', fontWeight: 700, color: '#000' }}>Required Certificates</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {v.requiredCerts.map(cert => (
                    <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f8f9fb', borderRadius: '8px' }}>
                      <Award size={16} style={{ color: '#b8942e', flexShrink: 0 }} />
                      <span style={{ fontWeight: 600, color: '#000', fontSize: '1rem' }}>{cert}</span>
                      <CheckCircle size={14} style={{ color: '#16a34a', marginLeft: 'auto' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Apply sidebar */}
          <div className="job-detail-aside" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'sticky', top: '1.5rem' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000', marginBottom: '0.25rem' }}>{v.salary}</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1.25rem' }}>{v.type} · {v.location}</div>
              <Link to="/home/apply" style={{
                display: 'block', background: '#b8942e', color: '#fff', borderRadius: '8px',
                padding: '0.875rem 1rem', textDecoration: 'none', textAlign: 'center',
                fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem'
              }}>Apply Now</Link>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.625rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontSize: '0.9rem', color: '#374151', fontWeight: 500 }}>
                  <Bookmark size={14} />Save
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.625rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontSize: '0.9rem', color: '#374151', fontWeight: 500 }}>
                  <Share2 size={14} />Share
                </button>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
              <h3 style={{ margin: '0 0 0.875rem', fontSize: '1rem', fontWeight: 700, color: '#000' }}>Job Overview</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { label: 'Discipline', value: v.discipline },
                  { label: 'Job Type', value: v.type },
                  { label: 'Location', value: v.location },
                  { label: 'Salary', value: v.salary },
                  { label: 'Posted', value: v.dateAdded },
                  { label: 'Deadline', value: v.deadline },
                ].map(r => (
                  <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: '#6b7280' }}>{r.label}</span>
                    <span style={{ color: '#000', fontWeight: 600 }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg,#1e2535,#252f46)', borderRadius: '12px', padding: '1.5rem', border: '1px solid #b8942e30' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Not quite right?</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0 0 0.875rem', lineHeight: 1.5 }}>Register your CV and we'll contact you when a suitable role comes in.</p>
              <Link to="/home/apply" style={{ display: 'block', background: '#b8942e', color: '#fff', borderRadius: '6px', padding: '0.5rem 1rem', textDecoration: 'none', textAlign: 'center', fontWeight: 700, fontSize: '0.9rem' }}>Register CV</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
