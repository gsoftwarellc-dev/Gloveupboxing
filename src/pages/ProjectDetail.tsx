import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, Edit, Plus, MapPin, Calendar, Building2, Users,
  Briefcase, FileText, Phone, Mail, Clock, Star,
  Activity, ChevronRight
} from 'lucide-react'

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

// ── Per-project mock roles ─────────────────────────────────────────────────

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

// ── Per-project mock contacts ──────────────────────────────────────────────

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

// ── Per-project activity ───────────────────────────────────────────────────

const projectActivity: Record<number, { icon: any; color: string; text: string; time: string }[]> = {
  1: [
    { icon: FileText, color: '#b8942e', text: 'Note added: Client confirmed team expansion for Q3 2025', time: '2 days ago' },
    { icon: Briefcase, color: '#3b82f6', text: 'Vacancy created: Senior Site Manager – Manchester', time: '1 week ago' },
    { icon: Users, color: '#22c55e', text: 'Candidate shortlisted: James Holloway for Site Engineer role', time: '10 days ago' },
    { icon: Building2, color: '#f97316', text: 'Contact added: Tom Fletcher (Site Director)', time: '2 weeks ago' },
    { icon: Activity, color: '#a855f7', text: 'Project stage updated: Pre-Construction → Construction', time: '3 weeks ago' },
  ],
  2: [
    { icon: FileText, color: '#b8942e', text: 'Note added: First wave of recruitment begins Q1 2026', time: '3 days ago' },
    { icon: Briefcase, color: '#3b82f6', text: 'Vacancy created: Structural Engineer – London Bridge', time: '1 week ago' },
    { icon: Users, color: '#22c55e', text: 'Candidate shortlisted: Linda Park for MEP Coordinator', time: '2 weeks ago' },
    { icon: Building2, color: '#f97316', text: 'Contact added: Anita Patel (Commercial Director)', time: '3 weeks ago' },
  ],
  3: [
    { icon: FileText, color: '#b8942e', text: 'Note added: Tender result expected Q4 2025', time: '1 day ago' },
    { icon: Activity, color: '#a855f7', text: 'Project stage updated: Feasibility → Procurement', time: '2 weeks ago' },
    { icon: Users, color: '#22c55e', text: 'Candidate pre-qualified: Ryan Moss for Civils SM role', time: '3 weeks ago' },
    { icon: Building2, color: '#f97316', text: 'Contact added: Fiona Walsh (Talent Acquisition)', time: '1 month ago' },
  ],
  4: [
    { icon: Briefcase, color: '#3b82f6', text: 'Vacancy filled: M&E Engineer placed', time: '5 days ago' },
    { icon: FileText, color: '#b8942e', text: 'Note added: Urgent – Site Manager x2 required immediately', time: '1 week ago' },
    { icon: Users, color: '#22c55e', text: 'Candidate shortlisted: Paul Thomson for QS role', time: '10 days ago' },
    { icon: Building2, color: '#f97316', text: 'Contact added: Gregor Black (MEP Lead)', time: '2 weeks ago' },
    { icon: Activity, color: '#a855f7', text: 'Opportunity score updated to 91 — high priority confirmed', time: '3 weeks ago' },
  ],
}

// ── Linked vacancies ───────────────────────────────────────────────────────

const linkedVacancies: Record<number, { id: number; title: string; status: string; type: string }[]> = {
  1: [
    { id: 1, title: 'Senior Site Manager', status: 'active', type: 'Permanent' },
    { id: 3, title: 'Groundworks Foreman', status: 'active', type: 'Contract' },
  ],
  2: [
    { id: 2, title: 'Structural Engineer', status: 'active', type: 'Permanent' },
    { id: 5, title: 'MEP Coordinator', status: 'active', type: 'Contract' },
  ],
  3: [
    { id: 3, title: 'Groundworks Foreman', status: 'active', type: 'Contract' },
    { id: 6, title: 'Quantity Surveyor', status: 'on-hold', type: 'Permanent' },
  ],
  4: [
    { id: 3, title: 'Project Manager', status: 'active', type: 'Permanent' },
    { id: 4, title: 'Site Administrator', status: 'filled', type: 'Contract' },
  ],
}

// ── Linked companies ───────────────────────────────────────────────────────

const linkedCompanies: Record<number, { name: string; sector: string }[]> = {
  1: [{ name: 'Balfour Beatty', sector: 'Infrastructure' }, { name: 'Amey Engineering', sector: 'Civil' }],
  2: [{ name: 'Mace Group', sector: 'Construction' }, { name: 'Arup', sector: 'Engineering' }],
  3: [{ name: 'Costain Ltd', sector: 'Transport' }, { name: 'TfWM', sector: 'Public Sector' }],
  4: [{ name: 'Skanska UK', sector: 'Commercial' }, { name: 'Glasgow City Council', sector: 'Public Sector' }],
}

// ── Config maps ────────────────────────────────────────────────────────────

const statusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'badge-green' },
  tender: { label: 'Tender', cls: 'badge-yellow' },
  completed: { label: 'Completed', cls: 'badge-blue' },
  cancelled: { label: 'Cancelled', cls: 'badge-red' },
}

const priorityConfig: Record<string, string> = {
  High: 'badge-red',
  Medium: 'badge-yellow',
  Low: 'badge-gray',
}

const vacStatusConfig: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active', cls: 'badge-green' },
  'on-hold': { label: 'On Hold', cls: 'badge-yellow' },
  filled: { label: 'Filled', cls: 'badge-blue' },
  closed: { label: 'Closed', cls: 'badge-red' },
}

const roleStatusConfig: Record<string, string> = {
  Searching: 'badge-yellow',
  Shortlisted: 'badge-blue',
  Filled: 'badge-green',
}

// ── Score Ring ─────────────────────────────────────────────────────────────

function ScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444'
  const r = 28
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ

  return (
    <div style={{ position: 'relative', width: 72, height: 72, flexShrink: 0 }}>
      <svg width="72" height="72" viewBox="0 0 72 72" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="36" cy="36" r={r} fill="none" stroke="#e5e7eb" strokeWidth="5" />
        <circle
          cx="36" cy="36" r={r} fill="none"
          stroke={color} strokeWidth="5"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <span style={{ fontSize: '1rem', fontWeight: 800, color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#6b7280' }}>/ 100</span>
      </div>
    </div>
  )
}

// ── Detail Row ─────────────────────────────────────────────────────────────

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: '1px solid #f3f4f6' }}>
      <span className="label" style={{ paddingTop: '0.1rem', flexShrink: 0, marginRight: '0.5rem' }}>{label}</span>
      <span style={{ fontWeight: 600, color: '#000000', fontSize: '0.9rem', textAlign: 'right' }}>{value}</span>
    </div>
  )
}

// ── Stat Item ──────────────────────────────────────────────────────────────

function StatItem({ label, value, icon: Icon, accent }: { label: string; value: React.ReactNode; icon: any; accent?: boolean }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '0.25rem',
      padding: '0.875rem 1rem',
      background: '#fafbfc',
      borderRadius: '0.625rem',
      border: '1px solid #e8eaf0',
      minWidth: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
        <Icon size={13} style={{ color: accent ? '#b8942e' : '#9ca3af' }} />
        <span className="label" style={{ fontSize: '0.7rem' }}>{label}</span>
      </div>
      <span style={{ fontWeight: 800, fontSize: '1rem', color: accent ? '#b8942e' : '#000000' }}>{value}</span>
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams()
  const project = mockProjects.find(p => p.id === Number(id)) ?? mockProjects[0]

  const roles = projectRoles[project.id] ?? projectRoles[1]
  const contacts = projectContacts[project.id] ?? projectContacts[1]
  const activity = projectActivity[project.id] ?? projectActivity[1]
  const vacancies = linkedVacancies[project.id] ?? linkedVacancies[1]
  const companies = linkedCompanies[project.id] ?? linkedCompanies[1]

  const status = statusConfig[project.status] ?? { label: project.status, cls: 'badge-gray' }

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* ── Top navigation bar ──────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link to="/projects" className="btn-ghost">
          <ArrowLeft size={15} /> Back to Projects
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn-secondary"><Edit size={14} /> Edit Project</button>
          <button className="btn-primary"><Plus size={14} /> Add Vacancy</button>
        </div>
      </div>

      {/* ── Header card ─────────────────────────────────────────────────── */}
      <div className="card">
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Score ring */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
            <ScoreRing score={project.opportunityScore} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textAlign: 'center' }}>Opp. Score</span>
          </div>

          {/* Title + meta */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <h1 className="page-title">{project.name}</h1>
            </div>
            <p style={{ color: '#b8942e', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.625rem' }}>
              {project.client}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span className={`badge ${status.cls}`}>{status.label}</span>
              <span className={`badge ${priorityConfig[project.priority] ?? 'badge-gray'}`}>{project.priority} Priority</span>
              <span className="badge badge-gray">{project.projectType}</span>
              <span className="badge badge-blue">{project.sector}</span>
              <span className="badge badge-purple">{project.stage}</span>
            </div>
          </div>

          {/* Value callout */}
          <div style={{
            background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
            border: '1px solid #fde68a',
            borderRadius: '0.75rem',
            padding: '0.875rem 1.25rem',
            textAlign: 'center',
            flexShrink: 0,
          }}>
            <p className="label" style={{ marginBottom: '0.25rem' }}>Project Value</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#b8942e', lineHeight: 1 }}>{project.value}</p>
          </div>
        </div>

        {/* Key stats strip */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
          <StatItem label="Roles Needed" value={project.rolesNeeded} icon={Briefcase} accent />
          <StatItem label="Stage" value={project.stage} icon={Activity} />
          <StatItem label="Start Date" value={formatDate(project.startDate)} icon={Calendar} />
          <StatItem label="End Date" value={formatDate(project.endDate)} icon={Calendar} />
          <StatItem label="Location" value={`${project.location} (${project.postcode})`} icon={MapPin} />
          <StatItem label="Priority" value={project.priority} icon={Star} accent />
        </div>
      </div>

      {/* ── Two-column layout ────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>

        {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Map Placeholder */}
          <div className="card">
            <p className="section-title" style={{ marginBottom: '1rem' }}>Project Location</p>
            <div style={{
              height: 220,
              background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
              border: '2px dashed #d1d5db',
              borderRadius: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.625rem',
            }}>
              <MapPin size={32} style={{ color: '#94a3b8' }} />
              <p style={{ fontWeight: 700, color: '#475569', fontSize: '0.95rem', margin: 0 }}>
                📍 Map preview — Google Maps API will be connected after backend setup
              </p>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
                {project.location} · {project.postcode}
              </p>
            </div>
          </div>

          {/* Recruitment Opportunities */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.25rem 1rem', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p className="section-title">Recruitment Opportunities</p>
              <span className="badge badge-gold">{roles.length} roles</span>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Qty</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700 }}>{r.role}</td>
                    <td>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: 28, height: 28, borderRadius: '50%',
                        background: '#fef3c7', color: '#92400e', fontWeight: 800, fontSize: '0.85rem'
                      }}>
                        {r.qty}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${roleStatusConfig[r.status]}`}>{r.status}</span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                        Find Candidates
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Linked Vacancies */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <p className="section-title">Linked Vacancies</p>
              <Link to="/vacancies" className="btn-ghost" style={{ fontSize: '0.82rem' }}>View All</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {vacancies.map(v => (
                <Link
                  key={v.id}
                  to={`/vacancies/${v.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    background: '#fafbfc',
                    borderRadius: '0.625rem',
                    border: '1px solid #e8eaf0',
                    textDecoration: 'none',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#b8942e')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#e8eaf0')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '0.5rem', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={16} style={{ color: '#b8942e' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#000000', margin: 0, fontSize: '0.9rem' }}>{v.title}</p>
                      <p style={{ color: '#6b7280', margin: 0, fontSize: '0.8rem', fontWeight: 500 }}>{v.type}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`badge ${vacStatusConfig[v.status]?.cls ?? 'badge-gray'}`}>
                      {vacStatusConfig[v.status]?.label ?? v.status}
                    </span>
                    <ChevronRight size={14} style={{ color: '#9ca3af' }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
              <p className="section-title">Activity Timeline</p>
              <Link to="/activity" className="btn-ghost" style={{ fontSize: '0.82rem' }}>View All Activity</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {activity.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', paddingBottom: i < activity.length - 1 ? '1rem' : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%',
                        background: item.color + '18',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={14} style={{ color: item.color }} />
                      </div>
                      {i < activity.length - 1 && (
                        <div style={{ flex: 1, width: 1, background: '#e5e7eb', marginTop: '0.25rem' }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingBottom: i < activity.length - 1 ? '0.25rem' : 0 }}>
                      <p style={{ fontWeight: 600, color: '#000000', fontSize: '0.875rem', margin: '0 0 0.1rem' }}>
                        {item.text}
                      </p>
                      <p style={{ color: '#9ca3af', fontSize: '0.78rem', fontWeight: 500, margin: 0, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={10} /> {item.time}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN ────────────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Project Details */}
          <div className="card">
            <p className="section-title" style={{ marginBottom: '0.75rem' }}>Project Details</p>
            <div>
              <DetailRow label="Client" value={<span style={{ color: '#b8942e', fontWeight: 700 }}>{project.client}</span>} />
              <DetailRow label="Type" value={project.projectType} />
              <DetailRow label="Sector" value={project.sector} />
              <DetailRow label="Location" value={project.location} />
              <DetailRow label="Postcode" value={project.postcode} />
              <DetailRow label="Stage" value={<span className="badge badge-purple">{project.stage}</span>} />
              <DetailRow label="Start" value={formatDate(project.startDate)} />
              <DetailRow label="End" value={formatDate(project.endDate)} />
              <DetailRow label="Priority" value={
                <span className={`badge ${priorityConfig[project.priority] ?? 'badge-gray'}`}>{project.priority}</span>
              } />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0' }}>
                <span className="label">Opp. Score</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="progress-bar" style={{ width: 60 }}>
                    <div className="progress-fill" style={{ width: `${project.opportunityScore}%` }} />
                  </div>
                  <span style={{ fontWeight: 800, color: '#b8942e', fontSize: '0.9rem' }}>{project.opportunityScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Linked Companies */}
          <div className="card">
            <p className="section-title" style={{ marginBottom: '1rem' }}>Linked Companies</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {companies.map(c => (
                <div key={c.name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.625rem 0.875rem',
                  background: '#fafbfc',
                  borderRadius: '0.5rem',
                  border: '1px solid #e8eaf0',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '0.4rem', background: '#1e2535', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={14} style={{ color: '#d4af5a' }} />
                    </div>
                    <span style={{ fontWeight: 700, color: '#000000', fontSize: '0.875rem' }}>{c.name}</span>
                  </div>
                  <span className="badge badge-gray">{c.sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Contacts */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <p className="section-title">Key Contacts</p>
              <button className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem' }}>
                <Plus size={13} /> Add
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {contacts.slice(0, 3).map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div className="avatar" style={{ width: '2.4rem', height: '2.4rem', fontSize: '0.7rem', flexShrink: 0 }}>
                    {c.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 700, color: '#000000', fontSize: '0.875rem', margin: '0 0 0.1rem' }}>{c.name}</p>
                    <p style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600, margin: '0 0 0.35rem' }}>{c.role}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                      <a href={`mailto:${c.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#b8942e', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>
                        <Mail size={11} /> {c.email}
                      </a>
                      <a href={`tel:${c.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#374151', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none' }}>
                        <Phone size={11} /> {c.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              {contacts.length > 3 && (
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', fontWeight: 600, margin: 0, paddingTop: '0.25rem', borderTop: '1px solid #f3f4f6' }}>
                  +{contacts.length - 3} more contact{contacts.length - 3 > 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>

          {/* Project Notes */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
              <p className="section-title">Project Notes</p>
              <button className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem' }}>
                <Edit size={12} /> Edit
              </button>
            </div>
            <div style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '0.625rem',
              padding: '0.875rem',
              borderLeft: '3px solid #b8942e',
            }}>
              <p style={{ color: '#000000', fontSize: '0.875rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                {project.notes}
              </p>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 500, marginTop: '0.5rem', marginBottom: 0 }}>
              Last updated 2 days ago
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
