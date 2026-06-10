import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Building2, Mail, Phone, Users, FolderKanban, ChevronRight } from 'lucide-react'
import { clientCompanies } from '../data/clients'
import { findRelatedProjects } from '../utils/clientMatching'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ margin: '0 0 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
      {children}
    </h3>
  )
}

export default function ClientDetail() {
  const { id } = useParams()
  const client = clientCompanies.find(c => c.id === Number(id))
  const relatedProjects = client ? findRelatedProjects(client) : []

  if (!client) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <Link to="/clients" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back to Clients
        </Link>
        <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>
          Client not found.
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Nav */}
      <Link to="/clients" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
        <ArrowLeft size={14} /> Back to Clients
      </Link>

      {/* Header card */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 56, height: 56, borderRadius: '0.75rem', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={24} style={{ color: '#b8942e' }} />
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{client.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
              {client.disciplines.map(d => (
                <span key={d} className="badge badge-gray" style={{ fontSize: '0.72rem' }}>{d}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ padding: '0.875rem 1.1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'center' }}>
                <Users size={14} />{client.contacts.length}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '0.15rem', fontWeight: 500 }}>Contacts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <SectionLabel>Contacts ({client.contacts.length})</SectionLabel>
        {client.contacts.length === 0 ? (
          <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No contacts recorded for this company yet.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.875rem' }}>
            {client.contacts.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '0.5rem' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.02em' }}>
                  {c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                  {c.role && <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role}</div>}
                  {(c.email || c.phone) && (
                    <div style={{ marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      {c.email && <a href={`mailto:${c.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#b8942e', textDecoration: 'none', fontWeight: 500 }}><Mail size={10} />{c.email}</a>}
                      {c.phone && <a href={`tel:${c.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#374151', textDecoration: 'none' }}><Phone size={10} />{c.phone}</a>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Projects */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <SectionLabel>Related Projects ({relatedProjects.length})</SectionLabel>
        {relatedProjects.length === 0 ? (
          <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
            No projects on file link to this company yet.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {relatedProjects.map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.6rem 0.75rem', background: '#f9fafb', border: '1px solid #f3f4f6',
                  borderRadius: '0.5rem', textDecoration: 'none'
                }}
              >
                <div style={{ width: 32, height: 32, borderRadius: '0.4rem', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FolderKanban size={14} style={{ color: '#b8942e' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111' }}>{project.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>{project.client}</div>
                </div>
                <ChevronRight size={14} style={{ color: '#9ca3af', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
