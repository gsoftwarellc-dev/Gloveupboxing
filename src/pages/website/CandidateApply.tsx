import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Upload, CheckCircle, ChevronRight, ChevronLeft, User, Briefcase, Award, FileText, X } from 'lucide-react'
import { useCrmData } from '../../context/useCrmData'

const steps = ['Personal Details', 'Work Experience', 'Certificates', 'CV Upload', 'Review']

const disciplines = ['Civil', 'Structural', 'Groundworks', 'MEP', 'Commercial', 'H&S', 'Other']
const certOptions = ['SMSTS', 'CSCS Gold Card', 'CSCS Black Card', 'CSCS Blue Card', 'NEBOSH Diploma', 'IOSH Managing Safely', 'First Aid at Work', 'MRICS', 'IStructE Chartership', 'PMP', 'PRINCE2 Practitioner', 'CPCS Appointed Person', 'NPORS', 'ECS Gold Card', 'CIBSE Membership']

// Per-step required fields → shown as validation error before advancing
const stepValidation: Record<number, { field: keyof typeof defaultForm; label: string }[]> = {
  0: [
    { field: 'firstName', label: 'First name' },
    { field: 'lastName',  label: 'Last name'  },
    { field: 'email',     label: 'Email address' },
    { field: 'phone',     label: 'Phone number'  },
    { field: 'location',  label: 'Town / City'   },
    { field: 'postcode',  label: 'Postcode'      },
  ],
  1: [
    { field: 'jobTitle', label: 'Job title' },
  ],
}

const defaultForm = {
  firstName: '', lastName: '', email: '', phone: '',
  location: '', postcode: '',
  jobTitle: '', discipline: 'Civil', experience: '', salary: '', noticePeriod: '', travelRadius: '',
  rightToWork: 'Yes',
  cvText: '',
}

export default function CandidateApply() {
  const { submitApplication } = useCrmData()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [validationError, setValidationError] = useState('')
  const [certs, setCerts] = useState<string[]>([])
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [form, setForm] = useState(defaultForm)

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))
  const toggleCert = (cert: string) => setCerts(prev => prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert])

  function handleFile(file: File | null) {
    if (!file) return
    if (file.size > 10 * 1024 * 1024) { setValidationError('File must be under 10 MB.'); return }
    setCvFile(file)
    setValidationError('')
  }

  function goNext() {
    const rules = stepValidation[step]
    if (rules) {
      const missing = rules.filter(r => !form[r.field as keyof typeof form]?.toString().trim())
      if (missing.length) {
        setValidationError(`Please fill in: ${missing.map(r => r.label).join(', ')}`)
        return
      }
      // Basic email check on step 0
      if (step === 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setValidationError('Please enter a valid email address.')
        return
      }
    }
    setValidationError('')
    setStep(s => s + 1)
  }

  async function submit() {
    if (!form.cvText.trim() && !cvFile) {
      setValidationError('Please paste your CV text or upload a CV file before submitting.')
      return
    }
    setSubmitting(true)
    setSubmitError('')
    setValidationError('')
    try {
      // If a file was attached, send as multipart/form-data
      if (cvFile) {
        const fd = new FormData()
        Object.entries({ ...form, experience: form.experience || '', certificates: JSON.stringify(certs), skills: '[]' })
          .forEach(([k, v]) => fd.append(k, v as string))
        fd.append('cvFile', cvFile)
        // submitApplication accepts Record<string, unknown> so we use the raw fetch path
        await submitApplication(fd as unknown as Record<string, unknown>)
      } else {
        await submitApplication({
          ...form,
          experience: form.experience ? Number(form.experience) : null,
          certificates: certs,
          skills: [],
        })
      }
      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit application.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '70vh', background: '#f5f6fa', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '3rem', textAlign: 'center', maxWidth: 480, border: '1px solid #e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <CheckCircle size={32} style={{ color: '#16a34a' }} />
          </div>
          <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.4rem', fontWeight: 800, color: '#000' }}>Application Received!</h1>
          <p style={{ margin: '0 0 1.5rem', color: '#6b7280', fontSize: '1rem', lineHeight: 1.6 }}>
            Thank you, {form.firstName || 'there'}! One of our consultants will review your details and be in touch within 2 working days.
          </p>
          <Link to="/jobs" style={{ display: 'inline-block', background: '#b8942e', color: '#fff', borderRadius: '8px', padding: '0.75rem 1.5rem', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>Browse More Jobs</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', background: '#f5f6fa', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', fontWeight: 800, color: '#000' }}>Register Your CV</h1>
          <p style={{ color: '#6b7280', fontSize: '1rem', margin: 0 }}>Join our construction & engineering talent pool. We'll match you to the right opportunities.</p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '2rem', overflowX: 'auto' }}>
          {steps.map((s, i) => {
            const icons = [User, Briefcase, Award, FileText, CheckCircle]
            const Icon = icons[i]
            return (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: step > i ? '#b8942e' : step === i ? '#b8942e' : '#e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step >= i ? '#fff' : '#9ca3af',
                  }}>
                    {step > i ? <CheckCircle size={18} /> : <Icon size={16} />}
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: step === i ? 700 : 400, color: step === i ? '#b8942e' : '#6b7280', whiteSpace: 'nowrap' }}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 48, height: 2, background: step > i ? '#b8942e' : '#e5e7eb', margin: '0 0.375rem 1.5rem' }} />
                )}
              </div>
            )
          })}
        </div>

        <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {step === 0 && (
            <div>
              <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#000' }}>Personal Details</h2>
              <div className="apply-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>First Name *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="John" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Last Name *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="Smith" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Email Address *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} type="email" placeholder="john@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Phone Number *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="07700 000000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Town / City *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="Manchester" value={form.location} onChange={e => update('location', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Postcode *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="M1 1AA" value={form.postcode} onChange={e => update('postcode', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Right to Work in UK</label>
                  <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} value={form.rightToWork} onChange={e => update('rightToWork', e.target.value)}>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Requires Sponsorship</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#000' }}>Work Experience</h2>
              <div className="apply-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ gridColumn: '1/-1' }}>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Job Title / Role *</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="e.g. Senior Site Manager" value={form.jobTitle} onChange={e => update('jobTitle', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Discipline *</label>
                  <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} value={form.discipline} onChange={e => update('discipline', e.target.value)}>
                    {disciplines.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Years of Experience</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="e.g. 8" type="number" value={form.experience} onChange={e => update('experience', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Salary Expectation</label>
                  <input style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} placeholder="e.g. £60,000" value={form.salary} onChange={e => update('salary', e.target.value)} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Notice Period</label>
                  <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} value={form.noticePeriod} onChange={e => update('noticePeriod', e.target.value)}>
                    <option value="">Select...</option>
                    <option>Immediately</option>
                    <option>2 weeks</option>
                    <option>4 weeks</option>
                    <option>1 month</option>
                    <option>2 months</option>
                    <option>3 months</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Travel Radius (miles)</label>
                  <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.625rem 0.875rem', fontSize: '1rem', color: '#000', outline: 'none', boxSizing: 'border-box' }} value={form.travelRadius} onChange={e => update('travelRadius', e.target.value)}>
                    <option value="">Select...</option>
                    <option>10</option><option>20</option><option>30</option><option>50</option><option>Nationwide</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#000' }}>Certificates & Qualifications</h2>
              <p style={{ margin: '0 0 1.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Select all certificates you currently hold. This helps us match you to suitable vacancies.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.625rem' }}>
                {certOptions.map(cert => {
                  const selected = certs.includes(cert)
                  return (
                    <button key={cert} onClick={() => toggleCert(cert)} style={{
                      display: 'flex', alignItems: 'center', gap: '0.625rem',
                      padding: '0.75rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left',
                      border: selected ? '2px solid #b8942e' : '1px solid #e5e7eb',
                      background: selected ? 'rgba(184,148,46,0.06)' : '#fff',
                      transition: 'all 0.15s'
                    }}>
                      <div style={{ width: 20, height: 20, borderRadius: '4px', border: selected ? '2px solid #b8942e' : '2px solid #d1d5db', background: selected ? '#b8942e' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {selected && <CheckCircle size={12} style={{ color: '#fff' }} />}
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: selected ? 600 : 400, color: selected ? '#000' : '#374151' }}>{cert}</span>
                    </button>
                  )
                })}
              </div>
              {certs.length > 0 && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(184,148,46,0.08)', border: '1px solid rgba(184,148,46,0.25)', borderRadius: '8px', fontSize: '0.9rem', color: '#b8942e', fontWeight: 600 }}>
                  {certs.length} certificate{certs.length !== 1 ? 's' : ''} selected: {certs.join(', ')}
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#000' }}>Upload Your CV</h2>
              <p style={{ margin: '0 0 1.5rem', color: '#6b7280', fontSize: '0.9rem' }}>Upload your CV in PDF, Word, or similar format — or paste the text below. Max file size 10MB.</p>

              {/* Hidden real file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.rtf,.txt"
                style={{ display: 'none' }}
                onChange={e => handleFile(e.target.files?.[0] ?? null)}
              />

              {/* Drop zone */}
              {cvFile ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', background: 'rgba(184,148,46,0.06)', border: '2px solid #b8942e', borderRadius: '12px' }}>
                  <FileText size={22} style={{ color: '#b8942e', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cvFile.name}</div>
                    <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{(cvFile.size / 1024).toFixed(0)} KB</div>
                  </div>
                  <button
                    onClick={() => { setCvFile(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '0.25rem' }}
                  ><X size={16} /></button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0] ?? null) }}
                  style={{ border: `2px dashed ${dragOver ? '#b8942e' : '#e5e7eb'}`, borderRadius: '12px', padding: '3rem', textAlign: 'center', background: dragOver ? 'rgba(184,148,46,0.04)' : '#f8f9fb', cursor: 'pointer', transition: 'all 0.15s' }}
                >
                  <Upload size={32} style={{ color: '#9ca3af', margin: '0 auto 0.875rem', display: 'block' }} />
                  <div style={{ fontWeight: 600, color: '#000', marginBottom: '0.5rem', fontSize: '1rem' }}>Click to upload or drag & drop</div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>PDF, DOCX, RTF up to 10MB</div>
                  <div style={{ marginTop: '1.25rem', display: 'inline-block', padding: '0.625rem 1.5rem', background: '#b8942e', color: '#fff', borderRadius: '7px', fontWeight: 700, fontSize: '0.95rem' }}>
                    Choose File
                  </div>
                </div>
              )}

              <div style={{ marginTop: '1rem', padding: '0.875rem', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '8px', fontSize: '0.9rem', color: '#059669' }}>
                ✓ Your CV will be stored securely and only shared with your consent.
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: 600, color: '#000', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Or paste your CV text</label>
                <p style={{ margin: '0 0 0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
                  Prefer not to upload a file? Paste your CV here and we can review it straight away.
                </p>
                <textarea
                  rows={8}
                  placeholder="Paste your full CV here..."
                  value={form.cvText}
                  onChange={e => update('cvText', e.target.value)}
                  style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: '7px', padding: '0.75rem 0.875rem', fontSize: '0.95rem', color: '#000', outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit', lineHeight: 1.6 }}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 style={{ margin: '0 0 1.5rem', fontSize: '1.15rem', fontWeight: 700, color: '#000' }}>Review Your Application</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Personal Details', items: [{ label: 'Name', value: `${form.firstName} ${form.lastName}`.trim() || '—' }, { label: 'Email', value: form.email || '—' }, { label: 'Phone', value: form.phone || '—' }, { label: 'Location', value: form.location || '—' }] },
                  { title: 'Work Experience', items: [{ label: 'Role', value: form.jobTitle || '—' }, { label: 'Discipline', value: form.discipline }, { label: 'Experience', value: form.experience ? `${form.experience} years` : '—' }, { label: 'Salary', value: form.salary || '—' }, { label: 'Notice Period', value: form.noticePeriod || '—' }] },
                  { title: 'Certificates', items: [{ label: 'Selected', value: certs.length > 0 ? certs.join(', ') : 'None selected' }] },
                ].map(section => (
                  <div key={section.title} style={{ padding: '1rem', background: '#f8f9fb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontWeight: 700, color: '#000', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{section.title}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.4rem' }}>
                      {section.items.map(item => (
                        <>
                          <span key={`l-${item.label}`} style={{ fontSize: '0.9rem', color: '#6b7280' }}>{item.label}</span>
                          <span key={`v-${item.label}`} style={{ fontSize: '0.9rem', color: '#000', fontWeight: 500 }}>{item.value}</span>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{ padding: '0.875rem', background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)', borderRadius: '8px', fontSize: '0.9rem', color: '#92400e' }}>
                  By submitting, you agree to our Privacy Policy and consent to Bravo Construction Recruitment storing and using your data to match you to suitable roles.
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
            <button
              onClick={() => { setValidationError(''); setStep(s => Math.max(0, s - 1)) }}
              disabled={step === 0}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.625rem 1.25rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fff', cursor: step === 0 ? 'default' : 'pointer', color: step === 0 ? '#d1d5db' : '#000', fontWeight: 600, fontSize: '0.95rem' }}
            >
              <ChevronLeft size={16} />Back
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={goNext}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.625rem 1.5rem', background: '#b8942e', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem' }}
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={submitting}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.625rem 1.75rem', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem' }}
              >
                <CheckCircle size={16} />{submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
          {(validationError || submitError) && (
            <div style={{ marginTop: '0.875rem', padding: '0.75rem 0.875rem', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#b91c1c', fontSize: '0.9rem' }}>
              {validationError || submitError}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
