import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Edit, Plus, MapPin, Calendar, Building2, Users,
  Phone, Mail, Star, X, Search, AlertCircle, CheckCircle2, ArrowRight, Trash2
} from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import { findRelatedClients } from '../utils/clientMatching'
import type { Project } from '../types/crm'

// ── Config ─────────────────────────────────────────────────────────────────

const statusConfig: Record<string, { label: string; cls: string }> = {
  active:    { label: 'Active',     cls: 'badge-green' },
  tender:    { label: 'Tender',     cls: 'badge-yellow' },
  completed: { label: 'Completed',  cls: 'badge-blue' },
  cancelled: { label: 'Cancelled',  cls: 'badge-red' },
}

// ── Helpers ────────────────────────────────────────────────────────────────

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

// ── Main Page ──────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    projects,
    clients,
    candidates: allCandidates,
    projectAssignments,
    loading,
    error,
    assignCandidateToProject,
    unassignCandidateFromProject,
    saveProject,
    deleteProject,
  } = useCrmData()
  const project = projects.find(p => p.id === Number(id))
  const [showModal, setShowModal] = useState(false)

  // ── Edit modal state ───────────────────────────────────────────────────────
  const [showEdit, setShowEdit] = useState(false)
  const [editForm, setEditForm] = useState<Partial<Project>>({})
  const [editSaving, setEditSaving] = useState(false)
  const [editError, setEditError] = useState<string | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleting, setDeleting] = useState(false)

  function openEdit() {
    if (!project) return
    setEditForm({
      name: project.name,
      client: project.client,
      mainContractor: project.mainContractor ?? '',
      location: project.location,
      postcode: project.postcode,
      status: project.status,
      stage: project.stage,
      sector: project.sector ?? '',
      priority: project.priority ?? '',
      startDate: project.startDate,
      endDate: project.endDate ?? '',
      value: project.value ?? '',
      rolesNeeded: project.rolesNeeded,
      opportunityScore: project.opportunityScore,
      notes: project.notes ?? '',
    })
    setEditError(null)
    setShowDeleteConfirm(false)
    setShowEdit(true)
  }

  function editField(field: keyof Project, value: unknown) {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  async function saveEdit() {
    if (!project) return
    if (!editForm.name?.toString().trim()) { setEditError('Project name is required.'); return }
    setEditSaving(true)
    setEditError(null)
    try {
      await saveProject(project.id, editForm)
      setShowEdit(false)
    } catch (e) {
      setEditError(e instanceof Error ? e.message : 'Failed to save.')
    } finally {
      setEditSaving(false)
    }
  }

  async function confirmDelete() {
    if (!project) return
    setDeleting(true)
    try {
      await deleteProject(project.id)
      navigate('/admin/projects')
    } catch (e) {
      setEditError(e instanceof Error ? e.message : 'Failed to delete.')
      setDeleting(false)
    }
  }
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedStartDate, setSelectedStartDate] = useState('2025-07-01')
  const [modalSearch, setModalSearch] = useState('')
  const [modalLocation, setModalLocation] = useState('')
  const [modalDiscipline, setModalDiscipline] = useState('')

  if (loading || error) return <DataState loading={loading} error={error} />

  if (!project) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <button onClick={() => navigate(-1)} className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back
        </button>
        <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>
          Project not found.
        </div>
      </div>
    )
  }

  const roles    = project.tags ?? []
  const contacts = project.contacts ?? []
  const status = statusConfig[project.status] ?? { label: project.status, cls: 'badge-gray' }
  const relatedClients = findRelatedClients(project, clients)

  const assignedIds = projectAssignments[project.id] ?? []

  const assignedCandidates = allCandidates.filter(c => assignedIds.includes(c.id))

  const rolesNeeded = project.rolesNeeded ?? 0
  const recruitmentStatus = assignedCandidates.length === 0
    ? { label: 'Recruitment: Not Started', cls: 'badge-gray' }
    : rolesNeeded > 0 && assignedCandidates.length < rolesNeeded
      ? { label: `Recruitment: In Progress (${assignedCandidates.length}/${rolesNeeded})`, cls: 'badge-yellow' }
      : { label: 'Recruitment: Staffed', cls: 'badge-green' }

  const allLocations = [...new Set(allCandidates.map(c => c.location))].sort()
  const allDisciplines = [...new Set(allCandidates.map(c => c.discipline))].sort()

  const readyToWork = allCandidates.filter(c => {
    if (!(c.status === 'qualified' || c.status === 'available')) return false
    if (assignedIds.includes(c.id)) return false
    if (modalSearch && !c.name.toLowerCase().includes(modalSearch.toLowerCase()) && !c.role.toLowerCase().includes(modalSearch.toLowerCase())) return false
    if (modalLocation && c.location !== modalLocation) return false
    if (modalDiscipline && c.discipline !== modalDiscipline) return false
    return true
  })

  function openModal() {
    setModalSearch(''); setModalLocation(''); setModalDiscipline('')
    setShowModal(true)
  }

  async function assignCandidate(candidateId: number) {
    await assignCandidateToProject(project!.id, candidateId, {
      role: selectedRole || undefined,
      startDate: selectedStartDate || undefined,
    })
    setShowModal(false)
  }

  async function removeAssignment(candidateId: number) {
    await unassignCandidateFromProject(project!.id, candidateId)
  }

  const fmt = (d: string) => {
    if (!d) return 'TBC'
    const date = new Date(d)
    if (isNaN(date.getTime())) return d
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  const scoreColor = project.opportunityScore >= 80 ? '#15803d' : project.opportunityScore >= 60 ? '#b8942e' : '#b91c1c'
  const scoreBg = project.opportunityScore >= 80 ? '#f0fdf4' : project.opportunityScore >= 60 ? '#fefce8' : '#fef2f2'

  // Next-action banner: surface the single most important thing to do on this project
  type NextAction = { tone: 'urgent' | 'warning' | 'done'; title: string; body: string; ctaLabel: string; onClick: () => void }
  let nextAction: NextAction | null = null
  if (contacts.length === 0) {
    nextAction = {
      tone: 'urgent',
      title: 'No client contacts on file',
      body: `Add the people at ${project.client}${project.mainContractor ? ` or ${project.mainContractor}` : ''} you need to reach out to before recruitment can start.`,
      ctaLabel: 'Add Contact',
      onClick: () => document.getElementById('key-contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    }
  } else if (rolesNeeded > 0 && assignedCandidates.length < rolesNeeded) {
    const remaining = rolesNeeded - assignedCandidates.length
    nextAction = {
      tone: 'warning',
      title: `${remaining} role${remaining === 1 ? '' : 's'} still need${remaining === 1 ? 's' : ''} a candidate`,
      body: `${assignedCandidates.length} of ${rolesNeeded} roles filled. Assign candidates from your Ready to Work pool to keep this project moving.`,
      ctaLabel: 'Assign Candidate',
      onClick: () => openModal(),
    }
  } else if (rolesNeeded > 0) {
    nextAction = {
      tone: 'done',
      title: 'Fully staffed',
      body: `All ${rolesNeeded} role${rolesNeeded === 1 ? '' : 's'} on this project have an assigned candidate.`,
      ctaLabel: 'View Assigned',
      onClick: () => document.getElementById('assigned-candidates')?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
    }
  }

  const actionStyles: Record<NextAction['tone'], { bg: string; border: string; iconColor: string; icon: typeof AlertCircle }> = {
    urgent:  { bg: '#fef2f2', border: '#fca5a5', iconColor: '#ef4444', icon: AlertCircle },
    warning: { bg: '#fefce8', border: '#e9d98a', iconColor: '#b8942e', icon: AlertCircle },
    done:    { bg: '#f0fdf4', border: '#bbf7d0', iconColor: '#15803d', icon: CheckCircle2 },
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <button onClick={() => navigate(-1)} className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back
        </button>
        <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={openEdit}><Edit size={13} />Edit Project</button>
      </div>

      {/* Header card */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Opportunity score */}
          <div style={{
            width: 64, height: 64, borderRadius: '0.75rem', flexShrink: 0,
            background: scoreBg, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontSize: '1.4rem', fontWeight: 700, color: scoreColor, lineHeight: 1 }}>{project.opportunityScore}</span>
            <span style={{ fontSize: '0.6rem', color: scoreColor, opacity: 0.7, fontWeight: 600 }}>/ 100</span>
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{project.name}</h1>
              <span className={`badge ${status.cls}`}>{status.label}</span>
              <span className="badge badge-gray">{project.stage}</span>
              {project.priority && <span className="badge badge-gold">{project.priority}</span>}
              <span className={`badge ${recruitmentStatus.cls}`}>{recruitmentStatus.label}</span>
            </div>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#b8942e', fontWeight: 600 }}>
              {project.client}{project.mainContractor ? ` · Main Contractor: ${project.mainContractor}` : ''}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.6rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                <MapPin size={12} />{project.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                <Calendar size={12} />Start: {fmt(project.startDate)}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{project.sector}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0', border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0 }}>
            {[
              { label: 'Value',     value: project.value },
              { label: 'Roles Needed', value: project.rolesNeeded },
              { label: 'Contacts',  value: contacts.length },
            ].map((m, i) => (
              <div key={m.label} style={{ padding: '0.875rem 1.1rem', textAlign: 'center', borderRight: i < 2 ? '1px solid #e8eaf0' : 'none' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{m.value}</div>
                <div style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '0.15rem', fontWeight: 500 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Action banner */}
      {nextAction && (() => {
        const style = actionStyles[nextAction.tone]
        const Icon = style.icon
        return (
          <div className="card" style={{
            padding: '1rem 1.25rem', background: style.bg, border: `1px solid ${style.border}`,
            display: 'flex', alignItems: 'center', gap: '0.875rem', flexWrap: 'wrap'
          }}>
            <Icon size={22} style={{ color: style.iconColor, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>{nextAction.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.15rem' }}>{nextAction.body}</div>
            </div>
            <button className="btn-primary" style={{ fontSize: '0.82rem', flexShrink: 0 }} onClick={nextAction.onClick}>
              {nextAction.ctaLabel}<ArrowRight size={13} />
            </button>
          </div>
        )
      })()}

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.25rem', alignItems: 'start' }}>

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Why this is hot */}
          {project.notes && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionLabel>Why This Opportunity Matters</SectionLabel>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#374151', lineHeight: 1.7, fontWeight: 400, padding: '0.875rem', background: '#fafaf7', border: '1px solid #e9d98a', borderLeft: '3px solid #b8942e', borderRadius: '0.5rem' }}>
                {project.notes}
              </p>
            </div>
          )}

          {/* Key Contacts */}
          <div id="key-contacts" className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <SectionLabel>Key Contacts ({contacts.length})</SectionLabel>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}><Plus size={11} />Add Contact</button>
            </div>
            {contacts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
                  No contacts recorded for this project yet. Add the people at {project.client}{project.mainContractor ? ` or ${project.mainContractor}` : ''} you need to reach out to.
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.875rem' }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem', background: '#f9fafb', border: '1px solid #f3f4f6', borderRadius: '0.5rem' }}>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.02em' }}>
                      {c.type === 'org' ? <Building2 size={14} /> : c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role}</div>
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

          {/* Target Roles */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Target Roles to Recruit ({roles.length})</SectionLabel>
            {roles.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No target roles recorded for this project yet.</p>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {roles.map((role, i) => (
                  <span key={i} className="badge badge-gray" style={{ fontSize: '0.78rem', padding: '0.35rem 0.7rem' }}>{role}</span>
                ))}
              </div>
            )}
          </div>

          {/* Assigned Candidates */}
          <div id="assigned-candidates" className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <SectionLabel>Assigned Candidates ({assignedCandidates.length})</SectionLabel>
              <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }} onClick={() => openModal()}>
                <Users size={11} />Assign Candidate
              </button>
            </div>

            {assignedCandidates.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
                No candidates assigned yet. Once a contact is engaged and a role opens up, assign a candidate from your Ready to Work pool here.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {assignedCandidates.map((c, i) => (
                  <div key={c.id} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.75rem 0',
                    borderBottom: i < assignedCandidates.length - 1 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>
                      {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role} · {c.discipline}</div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.2rem' }}>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={10} />{c.location}</span>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><Phone size={10} />{c.phone}</span>
                        <span style={{ fontSize: '0.72rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 3 }}><Mail size={10} />{c.email}</span>
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
        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Project Details */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Project Details</SectionLabel>
            <div>
              <InfoRow label="Client"     value={<span style={{ color: '#b8942e' }}>{project.client}</span>} />
              {project.mainContractor && <InfoRow label="Main Contractor" value={project.mainContractor} />}
              <InfoRow label="Sector"     value={project.sector} />
              <InfoRow label="Stage"      value={<span className="badge badge-gray" style={{ fontSize: '0.72rem' }}>{project.stage}</span>} />
              <InfoRow label="Postcode"   value={project.postcode || '—'} />
              <InfoRow label="Start"      value={fmt(project.startDate)} />
              <InfoRow label="Priority"   value={project.priority} />
              <InfoRow label="Opp. Score" value={`${project.opportunityScore} / 100`} />
            </div>
          </div>

          {/* Related Clients */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Related Clients ({relatedClients.length})</SectionLabel>
            {relatedClients.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
                {project.mainContractor
                  ? `No contacts on file for "${project.mainContractor}" yet.`
                  : 'No related clients on file for this project yet.'}
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {relatedClients.map(client => (
                  <Link
                    key={client.id}
                    to={`/clients/${client.id}`}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.6rem 0.75rem', background: '#f9fafb', border: '1px solid #f3f4f6',
                      borderRadius: '0.5rem', textDecoration: 'none'
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: '0.4rem', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={14} style={{ color: '#b8942e' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111' }}>{client.name}</div>
                      <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>{client.contacts.length} contacts</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Edit Project Modal ── */}
      {showEdit && (
        <div className="modal-overlay" onClick={() => { if (!editSaving && !deleting) setShowEdit(false) }}>
          <div className="modal" style={{ maxWidth: 640 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Edit Project</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowEdit(false)} disabled={editSaving || deleting}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {/* Name */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Project Name *</label>
                <input className="input" value={editForm.name ?? ''} onChange={e => editField('name', e.target.value)} placeholder="Project name" />
              </div>
              {/* Client */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Client</label>
                <input className="input" value={editForm.client ?? ''} onChange={e => editField('client', e.target.value)} placeholder="Client name" />
              </div>
              {/* Main Contractor */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Main Contractor</label>
                <input className="input" value={editForm.mainContractor ?? ''} onChange={e => editField('mainContractor', e.target.value)} placeholder="Main contractor" />
              </div>
              {/* Location */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Location</label>
                <input className="input" value={editForm.location ?? ''} onChange={e => editField('location', e.target.value)} placeholder="e.g. London" />
              </div>
              {/* Postcode */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Postcode</label>
                <input className="input" value={editForm.postcode ?? ''} onChange={e => editField('postcode', e.target.value)} placeholder="e.g. AL4 0XB" />
              </div>
              {/* Status */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Status</label>
                <select className="input" value={editForm.status ?? ''} onChange={e => editField('status', e.target.value)}>
                  <option value="active">Active</option>
                  <option value="tender">Tender</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              {/* Stage */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Stage</label>
                <input className="input" value={editForm.stage ?? ''} onChange={e => editField('stage', e.target.value)} placeholder="e.g. Planning" />
              </div>
              {/* Sector */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Sector</label>
                <input className="input" value={editForm.sector ?? ''} onChange={e => editField('sector', e.target.value)} placeholder="e.g. Construction" />
              </div>
              {/* Priority */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Priority</label>
                <select className="input" value={editForm.priority ?? ''} onChange={e => editField('priority', e.target.value)}>
                  <option value="">— None —</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              {/* Value */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Project Value</label>
                <input className="input" value={editForm.value ?? ''} onChange={e => editField('value', e.target.value)} placeholder="e.g. £2.5m" />
              </div>
              {/* Roles Needed */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Roles Needed</label>
                <input className="input" type="number" min={0} value={editForm.rolesNeeded ?? 0} onChange={e => editField('rolesNeeded', Number(e.target.value))} />
              </div>
              {/* Opportunity Score */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Opportunity Score (0–100)</label>
                <input className="input" type="number" min={0} max={100} value={editForm.opportunityScore ?? 0} onChange={e => editField('opportunityScore', Number(e.target.value))} />
              </div>
              {/* Start Date */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Start Date</label>
                <input className="input" type="date" value={editForm.startDate ?? ''} onChange={e => editField('startDate', e.target.value)} />
              </div>
              {/* End Date */}
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>End Date</label>
                <input className="input" type="date" value={editForm.endDate ?? ''} onChange={e => editField('endDate', e.target.value)} />
              </div>
              {/* Notes */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Notes / Opportunity Description</label>
                <textarea
                  className="input"
                  rows={3}
                  style={{ resize: 'vertical' }}
                  value={editForm.notes ?? ''}
                  onChange={e => editField('notes', e.target.value)}
                  placeholder="Describe why this opportunity matters..."
                />
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
                  Delete "{project.name}"? This cannot be undone.
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
                  <Trash2 size={13} /> Delete Project
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

      {/* ── Assign Candidate Modal ── */}
      {showModal && (
        <div className="modal-overlay" onClick={() => { setShowModal(false); setModalSearch(''); setModalLocation(''); setModalDiscipline('') }}>
          <div className="modal" style={{ maxWidth: 580 }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Assign Candidate to {project.name}</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => { setShowModal(false); setModalSearch(''); setModalLocation(''); setModalDiscipline('') }}>✕</button>
            </div>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.78rem', color: '#6b7280' }}>
              Pick a candidate from your Ready to Work pool to assign to this project.
            </p>

            {/* Role + start date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Role on this Project</label>
                <select className="input" style={{ fontSize: '0.82rem' }} value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                  <option value="">— Select role —</option>
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Start Date</label>
                <input className="input" style={{ fontSize: '0.82rem' }} type="date" value={selectedStartDate} onChange={e => setSelectedStartDate(e.target.value)} />
              </div>
            </div>

            {/* Search + filters */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.875rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: 160 }}>
                <Search size={12} style={{ position: 'absolute', left: '0.6rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
                <input
                  className="input"
                  style={{ paddingLeft: '1.75rem', fontSize: '0.82rem' }}
                  placeholder="Search name or role..."
                  value={modalSearch}
                  onChange={e => setModalSearch(e.target.value)}
                />
              </div>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={modalLocation} onChange={e => setModalLocation(e.target.value)}>
                <option value="">All Locations</option>
                {allLocations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              <select className="input" style={{ fontSize: '0.82rem', width: 'auto' }} value={modalDiscipline} onChange={e => setModalDiscipline(e.target.value)}>
                <option value="">All Disciplines</option>
                {allDisciplines.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <p style={{ margin: '0 0 0.625rem', fontSize: '0.75rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ready to Work Pool ({readyToWork.length})
            </p>

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
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{c.role} · {c.discipline}</div>
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
              <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => { setShowModal(false); setModalSearch(''); setModalLocation(''); setModalDiscipline('') }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
