import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Globe, User, Plus, Briefcase, Users, Edit, Phone, Mail, CheckCircle, MessageSquare, FileText, Calendar } from 'lucide-react'
import { clients, vacancies as allVacancies, candidates as allCandidates } from '../data/mock'

const statusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'badge-green' },
  prospect: { label: 'Prospect', cls: 'badge-yellow' },
  inactive: { label: 'Inactive', cls: 'badge-red' },
}

const contacts = [
  { name: 'David Harris', role: 'Recruitment Director', email: 'd.harris@company.com', phone: '020 7001 2345', primary: true },
  { name: 'Claire Newton', role: 'HR Manager', email: 'c.newton@company.com', phone: '020 7001 2346', primary: false },
]

export default function ClientDetail() {
  const { id } = useParams()
  const client = clients.find(c => c.id === Number(id))

  if (!client) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#000000' }}>
      <p>Client not found.</p>
      <Link to="/clients" className="btn-primary" style={{ marginTop: '1rem' }}>Back to Clients</Link>
    </div>
  )

  const clientVacancies = allVacancies.filter(v => v.client === client.name)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/clients" className="btn-ghost"><ArrowLeft size={15} /> Back to Clients</Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Edit size={14} />Edit Client</button>
          <button className="btn-primary"><Plus size={14} />Add Vacancy</button>
        </div>
      </div>

      {/* Header */}
      <div className="card">
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 64, height: 64, borderRadius: '14px', background: '#1a1a1a', border: '2px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 800, fontSize: '1.5rem', flexShrink: 0 }}>
            {client.name[0]}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h1 className="page-title">{client.name}</h1>
              <span className={`badge ${statusConfig[client.status].cls}`}>{statusConfig[client.status].label}</span>
            </div>
            <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>{client.sector}</p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.625rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}><MapPin size={13} />{client.location}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}><Globe size={13} />{client.website}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}><User size={13} />AM: {client.accountManager}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexShrink: 0 }}>
            {[
              { label: 'Vacancies', value: client.vacancies },
              { label: 'Placements', value: client.placements },
              { label: 'Revenue', value: client.revenue },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: s.label === 'Revenue' ? '#b8942e' : '#111827' }}>{s.value}</div>
                <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Vacancies */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="section-title">Active Vacancies</h3>
              <button className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.35rem 0.75rem' }}><Plus size={13} />New Vacancy</button>
            </div>
            {clientVacancies.length === 0 ? (
              <p style={{ color: '#000000', fontSize: '1.05rem', textAlign: 'center', padding: '2rem' }}>No vacancies yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {clientVacancies.map(v => (
                  <div key={v.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{v.title}</div>
                      <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{v.location} • {v.salary} • {v.type}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ textAlign: 'right', fontSize: '1.05rem' }}>
                        <div style={{ color: '#000000' }}>{v.applications} apps</div>
                        <div style={{ color: '#000000' }}>{v.interviews} interviews</div>
                      </div>
                      <Link to={`/vacancies/${v.id}`} className="btn-ghost" style={{ fontSize: '1.05rem', padding: '0.3rem 0.6rem' }}>View</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Activity timeline */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Activity Timeline</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { icon: CheckCircle, color: '#34d399', text: 'James Holloway placed as Senior Site Manager', sub: 'By Tom Bradley', date: '2025-06-08' },
                { icon: Phone, color: '#60a5fa', text: 'Call with David Harris — discussed Q3 hiring plans', sub: 'Tom Bradley logged', date: '2025-06-05' },
                { icon: FileText, color: '#b8942e', text: 'CV submitted: Ryan Moss for Project Manager', sub: 'By Mark Richards', date: '2025-06-03' },
                { icon: Calendar, color: '#8b5cf6', text: 'Interview arranged: Lisa Park — Tue 10am on-site', sub: 'Confirmed by Claire Newton', date: '2025-06-02' },
                { icon: MessageSquare, color: '#f59e0b', text: 'Email sent: 3 CVs for Structural Engineer role', sub: 'By Emma Clarke', date: '2025-05-30' },
                { icon: Plus, color: '#94a3b8', text: 'New vacancy added: Senior Site Manager', sub: 'By Tom Bradley', date: '2025-05-20' },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.875rem', padding: '0.75rem 0', borderBottom: i < 5 ? '1px solid #f8f9fb' : 'none' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '8px', background: `${a.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <a.icon size={14} style={{ color: a.color }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 500, lineHeight: 1.3 }}>{a.text}</div>
                    <div style={{ fontSize: '0.875rem', color: '#000000', marginTop: '0.15rem' }}>{a.sub} · {a.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placed candidates */}
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>Placed Candidates</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {allCandidates.filter(c => c.status === 'placed').slice(0, 3).map(c => (
                <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div className="avatar">{c.name.split(' ').map(n => n[0]).join('')}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#000000' }}>{c.name}</div>
                    <div style={{ fontSize: '1.05rem', color: '#000000' }}>{c.role} • {c.discipline}</div>
                  </div>
                  <span className="badge badge-blue">Placed</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contacts sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="section-title">Contacts</h3>
              <button className="btn-ghost" style={{ fontSize: '1.05rem', padding: '0.25rem 0.5rem' }}><Plus size={12} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contacts.map(ct => (
                <div key={ct.name} style={{ padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{ct.name}</div>
                    {ct.primary && <span className="badge badge-gold">Primary</span>}
                  </div>
                  <p style={{ margin: '0.2rem 0 0.5rem', fontSize: '1.05rem', color: '#000000' }}>{ct.role}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1.05rem', color: '#000000' }}><Mail size={11} />{ct.email}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '1.05rem', color: '#000000' }}><Phone size={11} />{ct.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Mail size={14} />Send Email</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Phone size={14} />Log Call</button>
              <button className="btn-secondary" style={{ justifyContent: 'flex-start' }}><Users size={14} />Find Candidates</button>
              <button className="btn-primary" style={{ justifyContent: 'flex-start', marginTop: '0.25rem' }}><Briefcase size={14} />Add Vacancy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
