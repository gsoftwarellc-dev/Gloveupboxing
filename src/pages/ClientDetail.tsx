import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Building2, Mail, Phone, Users, FolderKanban, ChevronRight, Edit, Trash2 } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import { findRelatedProjects } from '../utils/clientMatching'
import type { ClientCompany, ClientContact } from '../types/crm'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ margin: '0 0 0.875rem', fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
      {children}
    </h3>
  )
}

type ClientEditForm = {
  name: string
  disciplines: string
  contacts: ClientContact[]
}

export default function ClientDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { clients, projects, loading, error, saveClient, deleteClient } = useCrmData()
  const client = clients.find(c => c.id === Number(id))
  const relatedProjects = client ? findRelatedProjects(client, projects) : []

  const [showEdit, setShowEdit] = useState(false)
  const [editForm, setEditForm] = useState<ClientEditForm>({ name: '', disciplines: '', contacts: [] })
  const [editSaving, setEditSaving] = useState(false)
  const [editError, setEditError] = useState<string | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  function openEdit() {
    if (!client) return
    setEditForm({
      name: client.name,
      disciplines: client.disciplines.join(', '),
      contacts: client.contacts.map(c => ({ ...c })),
    })
    setEditError(null)
    setShowDeleteConfirm(false)
    setShowEdit(true)
  }

  function editContactField(idx: number, field: keyof ClientContact, value: string) {
    setEditForm(prev => ({
      ...prev,
      contacts: prev.contacts.map((c, i) => i === idx ? { ...c, [field]: value } : c),
    }))
  }

  function addContactRow() {
    setEditForm(prev => ({ ...prev, contacts: [...prev.contacts, { name: '', role: '', email: '', phone: '' }] }))
  }

  function removeContactRow(idx: number) {
    setEditForm(prev => ({ ...prev, contacts: prev.contacts.filter((_, i) => i !== idx) }))
  }

  async function saveEdit() {
    if (!client) return
    if (!editForm.name.trim()) { setEditError('Company name is required.'); return }
    setEditSaving(true)
    setEditError(null)
    try {
      const disciplines = editForm.disciplines.split(',').map(d => d.trim()).filter(Boolean)
      const contacts = editForm.contacts.filter(c => c.name.trim())
      await saveClient(client.id, {
        name: editForm.name.trim(),
        disciplines: disciplines.length ? disciplines : ['General'],
        contacts,
      } as Partial<ClientCompany>)
      setShowEdit(false)
    } catch (e) {
      setEditError(e instanceof Error ? e.message : 'Failed to save.')
    } finally {
      setEditSaving(false)
    }
  }

  async function confirmDelete() {
    if (!client) return
    setDeleting(true)
    try {
      await deleteClient(client.id)
      navigate('/admin/clients')
    } catch (e) {
      setEditError(e instanceof Error ? e.message : 'Failed to delete.')
      setDeleting(false)
    }
  }

  if (loading || error) return <DataState loading={loading} error={error} />

  if (!client) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <Link to="/admin/clients" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link to="/admin/clients" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back to Clients
        </Link>
        <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={openEdit}><Edit size={13} />Edit Client</button>
      </div>

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

      {/* ── Edit Client Modal ── */}
      {showEdit && (
        <div className="modal-overlay" onClick={() => { if (!editSaving && !deleting) setShowEdit(false) }}>
          <div className="modal" style={{ maxWidth: 640 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Edit Client</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowEdit(false)} disabled={editSaving || deleting}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Company Name *</label>
                <input className="input" value={editForm.name} onChange={e => setEditForm(prev => ({ ...prev, name: e.target.value }))} placeholder="Company name" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Trades / Disciplines</label>
                <input className="input" value={editForm.disciplines} onChange={e => setEditForm(prev => ({ ...prev, disciplines: e.target.value }))} placeholder="e.g. Joinery, Steelwork" />
              </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <label className="label" style={{ margin: 0 }}>Contacts</label>
                <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.6rem' }} onClick={addContactRow}>+ Add Contact</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {editForm.contacts.map((c, idx) => (
                  <div key={idx} style={{ padding: '0.6rem', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <input className="input" style={{ fontSize: '0.82rem' }} value={c.name} onChange={e => editContactField(idx, 'name', e.target.value)} placeholder="Name" />
                      <input className="input" style={{ fontSize: '0.82rem' }} value={c.role ?? ''} onChange={e => editContactField(idx, 'role', e.target.value)} placeholder="Role" />
                      <input className="input" style={{ fontSize: '0.82rem' }} value={c.email ?? ''} onChange={e => editContactField(idx, 'email', e.target.value)} placeholder="Email" />
                      <input className="input" style={{ fontSize: '0.82rem' }} value={c.phone ?? ''} onChange={e => editContactField(idx, 'phone', e.target.value)} placeholder="Phone" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                      <button className="btn-ghost" style={{ padding: '0.2rem', color: '#9ca3af' }} onClick={() => removeContactRow(idx)} title="Remove contact"><Trash2 size={13} /></button>
                    </div>
                  </div>
                ))}
                {editForm.contacts.length === 0 && (
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#9ca3af' }}>No contacts yet — add one above.</p>
                )}
              </div>
            </div>

            {editError && (
              <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '0.5rem', fontSize: '0.82rem', color: '#b91c1c' }}>
                {editError}
              </div>
            )}

            {/* Delete confirmation */}
            {showDeleteConfirm ? (
              <div style={{ marginTop: '1.25rem', padding: '1rem', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '0.5rem' }}>
                <p style={{ margin: '0 0 0.875rem', fontSize: '0.85rem', fontWeight: 600, color: '#b91c1c' }}>
                  Delete "{client.name}"? This cannot be undone.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-primary" style={{ fontSize: '0.82rem', background: '#dc2626', borderColor: '#dc2626' }} onClick={confirmDelete} disabled={deleting}>
                    {deleting ? 'Deleting…' : 'Yes, Delete'}
                  </button>
                  <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setShowDeleteConfirm(false)} disabled={deleting}>Cancel</button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                <button
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem 0.6rem', borderRadius: '0.4rem' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#fef2f2')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                  onClick={() => setShowDeleteConfirm(true)}
                  disabled={editSaving}
                >
                  <Trash2 size={13} /> Delete Client
                </button>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setShowEdit(false)} disabled={editSaving}>Cancel</button>
                  <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={saveEdit} disabled={editSaving}>
                    {editSaving ? 'Saving…' : 'Save Changes'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
