import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, Edit, Plus, MapPin, Calendar, Building2, Users,
  Briefcase, FileText, Phone, Mail, Clock, Activity,
  Star, X, Search
} from 'lucide-react'
import { candidates as allCandidates } from '../data/mock'

// ── Mock Data ──────────────────────────────────────────────────────────────

const mockProjects = [
  {
    id: 1,
    name: 'Manchester Victoria Gateway',
    client: 'Balfour Beatty',
    value: '£45M',
    sector: 'Infrastructure',
    projectType: 'Civil / Infrastructure',
    location: 'Manchester',
    postcode: 'M1 1AA',
    status: 'active',
    stage: 'Construction',
    startDate: '2024-03-01',
    endDate: '2026-06-30',
    opportunityScore: 88,
    contacts: 3,
    rolesNeeded: 6,
    priority: 'High',
    notes: 'Client may need additional site managers as programme accelerates in Q3 2025. Balfour Beatty confirmed they will be expanding the team. Start pre-qualifying senior site managers now.',
  },
  {
    id: 2,
    name: 'London Bridge Residential',
    client: 'Mace Group',
    value: '£120M',
    sector: 'Residential',
    projectType: 'Residential',
    location: 'London',
    postcode: 'SE1 9RT',
    status: 'active',
    stage: 'Design',
    startDate: '2025-01-15',
    endDate: '2027-12-31',
    opportunityScore: 75,
    contacts: 4,
    rolesNeeded: 12,
    priority: 'High',
    notes: 'Multiple roles across structural, MEP and commercial disciplines expected. First wave of recruitment begins Q1 2026.',
  },
  {
    id: 3,
    name: 'Birmingham Metro Extension',
    client: 'Costain Ltd',
    value: '£200M',
    sector: 'Transport',
    projectType: 'Civil / Transport',
    location: 'Birmingham',
    postcode: 'B1 1BB',
    status: 'tender',
    stage: 'Procurement',
    startDate: '2026-01-01',
    endDate: '2029-03-31',
    opportunityScore: 62,
    contacts: 2,
    rolesNeeded: 20,
    priority: 'Medium',
    notes: 'Tender result expected Q4 2025. Pre-qualify candidates early. Focus on groundworks, civils, and site management.',
  },
  {
    id: 4,
    name: 'Glasgow City Centre Regen',
    client: 'Skanska UK',
    value: '£85M',
    sector: 'Commercial',
    projectType: 'Commercial',
    location: 'Glasgow',
    postcode: 'G1 1AA',
    status: 'active',
    stage: 'Construction',
    startDate: '2024-09-01',
    endDate: '2026-12-31',
    opportunityScore: 91,
    contacts: 5,
    rolesNeeded: 8,
    priority: 'High',
    notes: 'Fast-track programme. Urgent roles: Site Manager x2, QS x1. Client contact is John Reid.',
  },
]

const projectRoles: Record<number, { role: string; qty: number; status: 'Searching' | 'Shortlisted' | 'Filled' }[]> = {
  1: [
    { role: 'Senior Site Manager', qty: 2, status: 'Shortlisted' },
    { role: 'Site Engineer', qty: 2, status: 'Searching' },
    { role: 'Groundworks Foreman', qty: 2, status: 'Searching' },
  ],
  2: [
    { role: 'Structural Engineer', qty: 3, status: 'Searching' },
    { role: 'MEP Coordinator', qty: 2, status: 'Searching' },
    { role: 'Senior QS', qty: 2, status: 'Shortlisted' },
    { role: 'Project Manager', qty: 2, status: 'Searching' },
    { role: 'Site Manager', qty: 3, status: 'Searching' },
  ],
  3: [
    { role: 'Civils Site Manager', qty: 4, status: 'Searching' },
    { role: 'Groundworks Foreman', qty: 4, status: 'Searching' },
    { role: 'Site Engineer', qty: 4, status: 'Searching' },
    { role: 'QS', qty: 3, status: 'Searching' },
    { role: 'Contracts Manager', qty: 2, status: 'Searching' },
    { role: 'Traffic Management Co-ordinator', qty: 3, status: 'Searching' },
  ],
  4: [
    { role: 'Site Manager', qty: 2, status: 'Shortlisted' },
    { role: 'Quantity Surveyor', qty: 1, status: 'Searching' },
    { role: 'M&E Engineer', qty: 2, status: 'Filled' },
    { role: 'Site Administrator', qty: 1, status: 'Filled' },
    { role: 'Structural Engineer', qty: 2, status: 'Searching' },
  ],
}

const projectContacts: Record<number, { name: string; role: string; email: string; phone: string }[]> = {
  1: [
    { name: 'David Marsh', role: 'Project Director', email: 'd.marsh@balfourbeatty.com', phone: '07712 334 891' },
    { name: 'Karen Hughes', role: 'Resourcing Manager', email: 'k.hughes@balfourbeatty.com', phone: '07823 441 007' },
    { name: 'Tom Fletcher', role: 'Site Director', email: 't.fletcher@balfourbeatty.com', phone: '07654 229 103' },
  ],
  2: [
    { name: 'Sarah Lowe', role: 'Operations Director', email: 's.lowe@macegroup.com', phone: '07711 223 445' },
    { name: 'Paul Jennings', role: 'HR Business Partner', email: 'p.jennings@macegroup.com', phone: '07988 554 772' },
    { name: 'Richard Cole', role: 'Project Manager', email: 'r.cole@macegroup.com', phone: '07823 667 990' },
    { name: 'Anita Patel', role: 'Commercial Director', email: 'a.patel@macegroup.com', phone: '07600 112 334' },
  ],
  3: [
    { name: "James O'Brien", role: 'Procurement Lead', email: 'j.obrien@costain.com', phone: '07734 556 881' },
    { name: 'Fiona Walsh', role: 'Talent Acquisition', email: 'f.walsh@costain.com', phone: '07801 334 667' },
  ],
  4: [
    { name: 'John Reid', role: 'Programme Director', email: 'j.reid@skanska.co.uk', phone: '07900 112 556' },
    { name: 'Claire Docherty', role: 'HR Manager', email: 'c.docherty@skanska.co.uk', phone: '07744 223 009' },
    { name: 'Alex Murray', role: 'Senior QS', email: 'a.murray@skanska.co.uk', phone: '07612 009 334' },
    { name: 'Emma Stewart', role: 'Site Manager', email: 'e.stewart@skanska.co.uk', phone: '07823 445 119' },
    { name: 'Gregor Black', role: 'MEP Lead', email: 'g.black@skanska.co.uk', phone: '07765 334 007' },
  ],
}

const projectActivity: Record<number, { icon: any; text: string; time: string }[]> = {
  1: [
    { icon: FileText, text: 'Note added: Client confirmed team expansion for Q3 2025', time: '2 days ago' },
    { icon: Briefcase, text: 'Vacancy created: Senior Site Manager – Manchester', time: '1 week ago' },
    { icon: Users, text: 'Candidate shortlisted: James Holloway for Site Engineer role', time: '10 days ago' },
    { icon: Building2, text: 'Contact added: Tom Fletcher (Site Director)', time: '2 weeks ago' },
    { icon: Activity, text: 'Project stage updated: Pre-Construction → Construction', time: '3 weeks ago' },
  ],
  2: [
    { icon: FileText, text: 'Note added: First wave of recruitment begins Q1 2026', time: '3 days ago' },
    { icon: Briefcase, text: 'Vacancy created: Structural Engineer – London Bridge', time: '1 week ago' },
    { icon: Users, text: 'Candidate shortlisted: Linda Park for MEP Coordinator', time: '2 weeks ago' },
    { icon: Building2, text: 'Contact added: Anita Patel (Commercial Director)', time: '3 weeks ago' },
  ],
  3: [
    { icon: FileText, text: 'Note added: Tender result expected Q4 2025', time: '1 day ago' },
    { icon: Activity, text: 'Project stage updated: Feasibility → Procurement', time: '2 weeks ago' },
    { icon: Users, text: 'Candidate pre-qualified: Ryan Moss for Civils SM role', time: '3 weeks ago' },
    { icon: Building2, text: 'Contact added: Fiona Walsh (Talent Acquisition)', time: '1 month ago' },
  ],
  4: [
    { icon: Briefcase, text: 'Vacancy filled: M&E Engineer placed', time: '5 days ago' },
    { icon: FileText, text: 'Note added: Urgent – Site Manager x2 required immediately', time: '1 week ago' },
    { icon: Users, text: 'Candidate shortlisted: Paul Thomson for QS role', time: '10 days ago' },
    { icon: Building2, text: 'Contact added: Gregor Black (MEP Lead)', time: '2 weeks ago' },
    { icon: Activity, text: 'Opportunity score updated to 91 — high priority confirmed', time: '3 weeks ago' },
  ],
}


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
  const project = mockProjects.find(p => p.id === Number(id)) ?? mockProjects[0]

  const roles     = projectRoles[project.id]    ?? projectRoles[1]
  const contacts  = projectContacts[project.id] ?? projectContacts[1]
  const activity  = projectActivity[project.id] ?? projectActivity[1]
  const status = statusConfig[project.status] ?? { label: project.status, cls: 'badge-gray' }

  // Assigned candidates state (pre-seed project 1 with James Holloway)
  const [assignedIds, setAssignedIds] = useState<number[]>(project.id === 1 ? [1] : [])
  const [showModal, setShowModal] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedStartDate, setSelectedStartDate] = useState('2025-07-01')
  const [modalSearch, setModalSearch] = useState('')
  const [modalLocation, setModalLocation] = useState('')
  const [modalDiscipline, setModalDiscipline] = useState('')

  const assignedCandidates = allCandidates.filter(c => assignedIds.includes(c.id))

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

  function assignCandidate(candidateId: number) {
    setAssignedIds(prev => [...prev, candidateId])
    setShowModal(false)
  }

  function removeAssignment(candidateId: number) {
    setAssignedIds(prev => prev.filter(i => i !== candidateId))
  }

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link to="/projects" className="btn-ghost" style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={14} /> Back to Projects
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary" style={{ fontSize: '0.82rem' }}><Edit size={13} />Edit Project</button>
          <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => openModal()}>
            <Users size={13} />Assign Candidate
          </button>
        </div>
      </div>

      {/* Header card */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 56, height: 56, borderRadius: '0.75rem', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={24} style={{ color: '#b8942e' }} />
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{project.name}</h1>
              <span className={`badge ${status.cls}`}>{status.label}</span>
              <span className="badge badge-gray">{project.stage}</span>
            </div>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.9rem', color: '#b8942e', fontWeight: 600 }}>{project.client}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.6rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                <MapPin size={12} />{project.location}, {project.postcode}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: '#6b7280' }}>
                <Calendar size={12} />{fmt(project.startDate)} – {fmt(project.endDate)}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{project.sector} · {project.projectType}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0', border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0 }}>
            {[
              { label: 'Value',     value: project.value },
              { label: 'Roles Needed', value: project.rolesNeeded },
              { label: 'Assigned',  value: assignedCandidates.length },
              { label: 'Priority',  value: project.priority },
            ].map((m, i) => (
              <div key={m.label} style={{ padding: '0.875rem 1.1rem', textAlign: 'center', borderRight: i < 3 ? '1px solid #e8eaf0' : 'none' }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111', letterSpacing: '-0.02em' }}>{m.value}</div>
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
              <SectionLabel>Assigned Candidates ({assignedCandidates.length})</SectionLabel>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }} onClick={() => openModal()}>
                <Users size={11} />Assign Candidate
              </button>
            </div>

            {assignedCandidates.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: '0 0 0.75rem' }}>
                  No candidates assigned to this project yet.
                </p>
                <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => openModal()}>
                  <Users size={13} />Assign from Ready to Work
                </button>
              </div>
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

          {/* Activity */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <SectionLabel>Activity</SectionLabel>
              <button className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}><Plus size={11} />Add Note</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {activity.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', paddingBottom: i < activity.length - 1 ? '1rem' : 0, marginBottom: i < activity.length - 1 ? '1rem' : 0, borderBottom: i < activity.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <Icon size={13} style={{ color: '#6b7280' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#111', fontWeight: 500, lineHeight: 1.4 }}>{item.text}</p>
                      <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={10} />{item.time}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Project Details */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <SectionLabel>Project Details</SectionLabel>
            <div>
              <InfoRow label="Client"     value={<span style={{ color: '#b8942e' }}>{project.client}</span>} />
              <InfoRow label="Type"       value={project.projectType} />
              <InfoRow label="Sector"     value={project.sector} />
              <InfoRow label="Stage"      value={<span className="badge badge-gray" style={{ fontSize: '0.72rem' }}>{project.stage}</span>} />
              <InfoRow label="Location"   value={`${project.location}, ${project.postcode}`} />
              <InfoRow label="Start"      value={fmt(project.startDate)} />
              <InfoRow label="End"        value={fmt(project.endDate)} />
              <InfoRow label="Priority"   value={project.priority} />
              <InfoRow label="Opp. Score" value={`${project.opportunityScore} / 100`} />
            </div>
          </div>

          {/* Key Contacts */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <SectionLabel>Key Contacts</SectionLabel>
              <button className="btn-ghost" style={{ fontSize: '0.78rem', padding: '0.25rem 0.5rem' }}><Plus size={11} />Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.slice(0, 3).map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', paddingBottom: i < Math.min(contacts.length, 3) - 1 ? '1rem' : 0, borderBottom: i < Math.min(contacts.length, 3) - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.02em' }}>
                    {c.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{c.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{c.role}</div>
                    <div style={{ marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <a href={`mailto:${c.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#b8942e', textDecoration: 'none', fontWeight: 500 }}><Mail size={10} />{c.email}</a>
                      <a href={`tel:${c.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#374151', textDecoration: 'none' }}><Phone size={10} />{c.phone}</a>
                    </div>
                  </div>
                </div>
              ))}
              {contacts.length > 3 && (
                <p style={{ color: '#9ca3af', fontSize: '0.78rem', margin: 0, paddingTop: '0.5rem', borderTop: '1px solid #f3f4f6' }}>
                  +{contacts.length - 3} more contact{contacts.length - 3 > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <SectionLabel>Notes</SectionLabel>
              <button className="btn-ghost" style={{ fontSize: '0.78rem', padding: '0.25rem 0.5rem' }}><Edit size={11} />Edit</button>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#374151', lineHeight: 1.7, fontWeight: 400, padding: '0.875rem', background: '#fafaf7', border: '1px solid #e9d98a', borderLeft: '3px solid #b8942e', borderRadius: '0.5rem' }}>
              {project.notes}
            </p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.72rem', color: '#9ca3af' }}>Last updated 2 days ago</p>
          </div>
        </div>
      </div>

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
                  {roles.map(r => <option key={r.role} value={r.role}>{r.role} (×{r.qty})</option>)}
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
