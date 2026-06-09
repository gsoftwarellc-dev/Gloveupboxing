import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft, MapPin, Globe, Plus, Briefcase, Users,
  Edit, Phone, Mail, CheckCircle, MessageSquare, FileText, Calendar, User, Star, X
} from 'lucide-react'
import { clients, vacancies as allVacancies, candidates as allCandidates } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:   { label: 'Active',   cls: 'badge-green' },
  prospect: { label: 'Prospect', cls: 'badge-yellow' },
  inactive: { label: 'Inactive', cls: 'badge-red' },
}

const vacStatusConfig: Record<string, { label: string; cls: string }> = {
  active:    { label: 'Active',   cls: 'badge-green' },
  'on-hold': { label: 'On Hold', cls: 'badge-yellow' },
  filled:    { label: 'Filled',  cls: 'badge-blue' },
  closed:    { label: 'Closed',  cls: 'badge-red' },
}

const contacts = [
  { name: 'David Harris',  role: 'Recruitment Director', email: 'd.harris@balfourbeatty.com', phone: '020 7001 2345', primary: true },
  { name: 'Claire Newton', role: 'HR Manager',           email: 'c.newton@balfourbeatty.com', phone: '020 7001 2346', primary: false },
]

const activityLog = [
  { icon: CheckCircle,   text: 'James Holloway placed as Senior Site Manager',     sub: 'By Tom Bradley',       date: '08 Jun 2025' },
  { icon: Phone,         text: 'Call with David Harris — discussed Q3 hiring plans', sub: 'Tom Bradley logged', date: '05 Jun 2025' },
  { icon: FileText,      text: 'CV submitted: Ryan Moss for Project Manager',       sub: 'By Mark Richards',    date: '03 Jun 2025' },
  { icon: Calendar,      text: 'Interview arranged: Lisa Park — Tue 10am on-site',  sub: 'Confirmed by Claire Newton', date: '02 Jun 2025' },
  { icon: MessageSquare, text: 'Email sent: 3 CVs for Structural Engineer role',    sub: 'By Emma Clarke',      date: '30 May 2025' },
  { icon: Plus,          text: 'New vacancy added: Senior Site Manager',            sub: 'By Tom Bradley',      date: '20 May 2025' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ margin: '0 0 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
      {children}
    </h3>
  )
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #f3f4f6' }}>
      <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: '0.82rem', color: '#111', fontWeight: 600, textAlign: 'right' }}>{value}</span>
    </div>
  )
}

export default function ClientDetail() {
  const { id } = useParams()
  const client = clients.find(c => c.id === Number(id))

  const [showAssignModal, setShowAssignModal] = useState(false)
  const [assignedCandidates, setAssignedCandidates] = useState<number[]>([
    2, // Sarah Mitchell — pre-assigned as mock data
  ])
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedStartDate, setSelectedStartDate] = useState('2025-07-01')

  if (!client) return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <p style={{ color: '#6b7280' }}>Client not found.</p>
      <Link to="/clients" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>Back to Clients</Link>
    </div>
  )

  const clientVacancies = allVacancies.filter(v => v.client === client.name)

  // Qualified (ready to work) candidates not already assigned here
  const readyToWork = allCandidates.filter(c =>
    (c.status === 'qualified' || c.status === 'available') && !assignedCandidates.includes(c.id)
  )

  // Candidates assigned to this client
  const assignedList = allCandidates.filter(c => assignedCandidates.includes(c.id))

  const status = statusConfig[client.status] ?? { label: client.status, cls: 'badge-gray' }

  function assignCandidate(candidateId: number) {
    setAssignedCandidates(prev => [...prev, candidateId])
    setShowAssignModal(false)
  }

  function removeAssignment(candidateId: number) {
    setAssignedCandidates(prev => prev.filter(id => id !== candidateId))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link to="/clients" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back to Clients
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Edit size={13} />Edit Client</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAssignModal(true)}>
            <Users size={13} />Assign Candidate
          </button>
        </div>
      </div>

      {/* Header card */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 60, height: 60, borderRadius: '0.75rem', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 800, fontSize: '1.3rem' }}>
            {client.name[0]}
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#111' }}>{client.name}</h1>
              <span className={`badge ${status.cls}`}>{status.label}</span>
            </div>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.88rem', color: '#b8942e', fontWeight: 600 }}>{client.sector}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.6rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}><MapPin size={12} />{client.location}</span>
              <a href={`https://${client.website}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280', textDecoration: 'none' }}>
                <Globe size={12} />{client.website}
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}><User size={12} />AM: {client.accountManager}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0', border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0 }}>
            {[
              { label: 'Vacancies',  value: client.vacancies },
              { label: 'Placements', value: client.placements },
              { label: 'Revenue',    value: client.revenue },
            ].map((m, i) => (
              <div key={m.label} style={{ padding: '0.875rem 1.25rem', textAlign: 'center', borderRight: i < 2 ? '1px solid #e8eaf0' : 'none' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111' }}>{m.value}</div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '0.15rem', fontWeight: 500 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.25rem', alignItems: 'start' }}>

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Assigned Candidates */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <SectionLabel>Assigned Candidates ({assignedList.length})</SectionLabel>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }} onClick={() => setShowAssignModal(true)}>
                <Users size={11} />Assign Candidate
              </button>
            </div>
            {assignedList.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: '0 0 0.75rem' }}>No candidates assigned yet.</p>
                <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAssignModal(true)}>
                  <Users size={13} />Assign from Ready to Work
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {assignedList.map((c, i) => (
                  <div key={c.id} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.75rem 0',
                    borderBottom: i < assignedList.length - 1 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>
                      {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role} · {c.discipline}</div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={10} />{c.location}</span>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><Phone size={10} />{c.phone}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1px', flexShrink: 0 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={11} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                    </div>
                    <span className="badge badge-green" style={{ fontSize: '0.7rem', flexShrink: 0 }}>Assigned</span>
                    <Link to={`/candidates/${c.id}`} className="btn-ghost" style={{ fontSize: '0.75rem', padding: '0.3rem 0.55rem', flexShrink: 0 }}>Profile</Link>
                    <button onClick={() => removeAssignment(c.id)} className="btn-ghost" style={{ padding: '0.3rem', flexShrink: 0 }}>
                      <X size={13} style={{ color: '#ef4444' }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Active Vacancies */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Active Vacancies</SectionLabel>
            {clientVacancies.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', textAlign: 'center', padding: '1.5rem 0', margin: 0 }}>No vacancies yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {clientVacancies.map((v, i) => (
                  <div key={v.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0', borderBottom: i < clientVacancies.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '0.375rem', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Briefcase size={14} style={{ color: '#9ca3af' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{v.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{v.location} · {v.salary} · {v.type}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.78rem', color: '#374151', fontWeight: 600 }}>{v.applications} apps</div>
                        <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{v.interviews} interviews</div>
                      </div>
                      <span className={`badge ${vacStatusConfig[v.status]?.cls ?? 'badge-gray'}`} style={{ fontSize: '0.72rem' }}>{vacStatusConfig[v.status]?.label ?? v.status}</span>
                      <Link to={`/vacancies/${v.id}`} className="btn-ghost" style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>View</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Activity */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <SectionLabel>Activity</SectionLabel>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}><Plus size={11} />Add Note</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {activityLog.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.875rem', paddingBottom: i < activityLog.length - 1 ? '1rem' : 0, marginBottom: i < activityLog.length - 1 ? '1rem' : 0, borderBottom: i < activityLog.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <a.icon size={13} style={{ color: '#6b7280' }} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#111', fontWeight: 500, lineHeight: 1.4 }}>{a.text}</p>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>{a.sub} · {a.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Client Info</SectionLabel>
            <InfoRow label="Sector"          value={client.sector} />
            <InfoRow label="Location"        value={client.location} />
            <InfoRow label="Website"         value={client.website} />
            <InfoRow label="Account Manager" value={client.accountManager} />
            <InfoRow label="Date Added"      value={client.dateAdded} />
            <InfoRow label="Status"          value={<span className={`badge ${status.cls}`} style={{ fontSize: '0.72rem' }}>{status.label}</span>} />
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <SectionLabel>Contacts</SectionLabel>
              <button className="btn-ghost" style={{ fontSize: '0.78rem', padding: '0.25rem 0.5rem' }}><Plus size={11} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.map((ct, i) => (
                <div key={ct.name} style={{ paddingBottom: i < contacts.length - 1 ? '1rem' : 0, borderBottom: i < contacts.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#b8942e', fontWeight: 700, fontSize: '0.65rem' }}>{ct.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{ct.name}</span>
                        {ct.primary && <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>Primary</span>}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{ct.role}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', paddingLeft: '0.25rem' }}>
                    <a href={`mailto:${ct.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#b8942e', textDecoration: 'none' }}><Mail size={10} />{ct.email}</a>
                    <a href={`tel:${ct.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#374151', textDecoration: 'none' }}><Phone size={10} />{ct.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Assign Candidate Modal ── */}
      {showAssignModal && (
        <div className="modal-overlay" onClick={() => setShowAssignModal(false)}>
          <div className="modal" style={{ maxWidth: 580 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Assign Candidate to {client.name}</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowAssignModal(false)}>✕</button>
            </div>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.78rem', color: '#6b7280' }}>Select a candidate from your Ready to Work pool to assign to this company.</p>

            {/* Role + start date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Role / Position</label>
                <select className="input" style={{ fontSize: '0.82rem' }} value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                  <option value="">— Select vacancy —</option>
                  {clientVacancies.map(v => <option key={v.id} value={v.title}>{v.title}</option>)}
                  <option value="General Labour">General Labour</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date</label>
                <input className="input" style={{ fontSize: '0.82rem' }} type="date" value={selectedStartDate} onChange={e => setSelectedStartDate(e.target.value)} />
              </div>
            </div>

            {/* Ready to Work list */}
            <p style={{ margin: '0 0 0.625rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ready to Work Pool</p>

            {readyToWork.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                No candidates available right now. Mark candidates as qualified from the Candidates page.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: 340, overflowY: 'auto' }}>
                {readyToWork.map(c => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>
                      {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{c.role}</div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={10} />{c.location}</span>
                        <span style={{ fontSize: '0.72rem', color: '#374151', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3 }}><Calendar size={10} />Available: {c.availability}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1px', flexShrink: 0 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={11} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                    </div>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem', flexShrink: 0 }}>{c.discipline}</span>
                    <button
                      className="btn-primary"
                      style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', flexShrink: 0 }}
                      onClick={() => assignCandidate(c.id)}
                    >
                      Assign
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAssignModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
