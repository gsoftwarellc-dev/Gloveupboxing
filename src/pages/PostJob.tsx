import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Globe, Lock, MapPin, Briefcase, ChevronRight } from 'lucide-react'

const disciplines = ['Civil', 'Structural', 'Groundworks', 'MEP', 'Commercial', 'H&S']
const clients = ['Balfour Beatty', 'Mace Group', 'Skanska UK', 'Costain Ltd', 'Arup', 'Kier Group']
const projects = ['— None —', 'Manchester Victoria Gateway', 'London Bridge Residential', 'Birmingham Metro Extension', 'Glasgow City Centre Regen']
const recruiters = ['Tom Bradley', 'Emma Clarke', 'Mark Richards', 'Priya Sharma']
const certs = ['SMSTS', 'SSSTS', 'CSCS Gold Card', 'CSCS Black Card', 'CSCS Blue Card', 'First Aid at Work', 'CPCS', 'NPORS', 'NEBOSH Diploma', 'IOSH Managing Safely', 'PMP', 'PRINCE2 Practitioner', 'MRICS', 'IStructE Chartership', 'ECS Gold Card', 'CIBSE Membership']

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151' }}>
        {label}{required && <span style={{ color: '#ef4444', marginLeft: 2 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', paddingBottom: '0.625rem', borderBottom: '1px solid #f3f4f6', marginBottom: '0.125rem' }}>
      {children}
    </div>
  )
}

export default function PostJob() {
  const navigate = useNavigate()
  const [visibility, setVisibility] = useState<'public' | 'private'>('public')
  const [selectedCerts, setSelectedCerts] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  function toggleCert(c: string) {
    setSelectedCerts(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])
  }

  if (submitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '1rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', border: '2px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111', marginBottom: '0.25rem' }}>Vacancy Posted</div>
          <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
            {visibility === 'public' ? 'This job is now live on your public jobs page.' : 'This vacancy has been saved as a private CRM record.'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setSubmitted(false)}>Post Another</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => navigate('/vacancies')}>View Vacancies</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 860 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.78rem', color: '#6b7280' }}>
        <span style={{ cursor: 'pointer', color: '#b8942e', fontWeight: 600 }} onClick={() => navigate('/vacancies')}>Vacancies</span>
        <ChevronRight size={13} />
        <span>Post New Job</span>
      </div>

      <div>
        <h1 className="page-title">Post New Job</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>Fill in the details below to create a new vacancy</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem', alignItems: 'start' }}>

        {/* Left — main form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Role details */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SectionLabel>Role Details</SectionLabel>
            <Field label="Job Title" required>
              <input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. Senior Site Manager" />
            </Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <Field label="Discipline" required>
                <select className="input" style={{ fontSize: '0.82rem' }}>
                  {disciplines.map(d => <option key={d}>{d}</option>)}
                </select>
              </Field>
              <Field label="Employment Type" required>
                <select className="input" style={{ fontSize: '0.82rem' }}>
                  <option>Permanent</option>
                  <option>Contract</option>
                  <option>Temporary</option>
                </select>
              </Field>
              <Field label="Salary / Day Rate" required>
                <input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. £60,000 – £70,000" />
              </Field>
              <Field label="Priority">
                <select className="input" style={{ fontSize: '0.82rem' }}>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </Field>
            </div>
            <Field label="Job Description" required>
              <textarea
                className="input"
                style={{ fontSize: '0.82rem', resize: 'vertical', minHeight: 130 } as React.CSSProperties}
                placeholder="Describe the role, key responsibilities, and what you're looking for in a candidate..."
              />
            </Field>
          </div>

          {/* Location */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SectionLabel>Location</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <Field label="City" required>
                <div style={{ position: 'relative' }}>
                  <MapPin size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                  <input className="input" style={{ fontSize: '0.82rem', paddingLeft: '1.75rem' }} placeholder="e.g. Manchester" />
                </div>
              </Field>
              <Field label="Postcode" required>
                <input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. M1 1AA" />
              </Field>
            </div>
          </div>

          {/* Required certificates */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SectionLabel>Required Certificates</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {certs.map(c => {
                const on = selectedCerts.includes(c)
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCert(c)}
                    style={{
                      padding: '0.3rem 0.65rem', borderRadius: '0.375rem', cursor: 'pointer',
                      fontSize: '0.78rem', fontWeight: on ? 700 : 500,
                      border: on ? '1px solid #b8942e' : '1px solid #e5e7eb',
                      background: on ? '#fdfaf3' : '#f9fafb',
                      color: on ? '#92400e' : '#374151',
                      transition: 'all 0.15s',
                    }}
                  >{c}</button>
                )
              })}
            </div>
            {selectedCerts.length > 0 && (
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{selectedCerts.length} certificate{selectedCerts.length !== 1 ? 's' : ''} selected</div>
            )}
          </div>
        </div>

        {/* Right — sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Client & project */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <SectionLabel>Client & Project</SectionLabel>
            <Field label="Client" required>
              <select className="input" style={{ fontSize: '0.82rem' }}>
                {clients.map(c => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Linked Project">
              <select className="input" style={{ fontSize: '0.82rem' }}>
                {projects.map(p => <option key={p}>{p}</option>)}
              </select>
            </Field>
          </div>

          {/* Dates & recruiter */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <SectionLabel>Assignment</SectionLabel>
            <Field label="Assigned Recruiter">
              <select className="input" style={{ fontSize: '0.82rem' }}>
                {recruiters.map(r => <option key={r}>{r}</option>)}
              </select>
            </Field>
            <Field label="Start Date">
              <input className="input" style={{ fontSize: '0.82rem' }} type="date" />
            </Field>
            <Field label="Application Deadline">
              <input className="input" style={{ fontSize: '0.82rem' }} type="date" />
            </Field>
          </div>

          {/* Website visibility */}
          <div className="card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <SectionLabel>Website Visibility</SectionLabel>
            {[
              { key: 'public',  icon: Globe, label: 'Public',  desc: 'Live on your jobs page' },
              { key: 'private', icon: Lock,  label: 'Private', desc: 'CRM only — not published' },
            ].map(opt => {
              const on = visibility === opt.key
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setVisibility(opt.key as 'public' | 'private')}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer',
                    border: on ? '1px solid #b8942e' : '1px solid #e5e7eb',
                    background: on ? '#fdfaf3' : '#f9fafb',
                    textAlign: 'left', width: '100%', transition: 'all 0.15s',
                  }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: '0.375rem', background: on ? '#fdf3c7' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <opt.icon size={15} style={{ color: on ? '#b8942e' : '#9ca3af' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: on ? '#92400e' : '#111' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{opt.desc}</div>
                  </div>
                  {on && <div style={{ marginLeft: 'auto', width: 16, height: 16, borderRadius: '50%', background: '#b8942e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>}
                </button>
              )
            })}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              className="btn-primary"
              style={{ fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
              onClick={() => setSubmitted(true)}
            >
              <Briefcase size={14} />
              {visibility === 'public' ? 'Post & Publish Job' : 'Save as Private'}
            </button>
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              onClick={() => navigate('/vacancies')}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
