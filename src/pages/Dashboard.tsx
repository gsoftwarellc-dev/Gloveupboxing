import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import {
  Banknote, Briefcase, Building2, Calendar, CheckCircle,
  Clock, FolderKanban, Mail, TrendingUp, Users
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/mock'
import { clientCompanies } from '../data/clients'

// Total contacts across all client companies
const totalClientContacts = clientCompanies.reduce((sum, c) => sum + c.contacts.length, 0)

// Parse "£20m" / "£8.3m (Est)" style values into millions
function parseValueMillions(value: string | number): number {
  if (typeof value === 'number') return value
  const match = value.match(/£?([\d.]+)\s*m/i)
  return match ? parseFloat(match[1]) : 0
}

const totalPipelineValue = projects.reduce((sum, p) => sum + parseValueMillions(p.value), 0)
const totalRolesNeeded = projects.reduce((sum, p) => sum + (p.rolesNeeded ?? 0), 0)
const avgOpportunityScore = projects.length
  ? Math.round(projects.reduce((sum, p) => sum + (p.opportunityScore ?? 0), 0) / projects.length)
  : 0

// Projects by sector
const sectorCounts = projects.reduce<Record<string, number>>((acc, p) => {
  const s = p.sector ?? 'Other'
  acc[s] = (acc[s] ?? 0) + 1
  return acc
}, {})
const colors = ['#b8942e', '#d4af5a', '#8a6e1e', '#6b5218', '#3b82f6', '#10b981', '#ef4444', '#94a3b8', '#c084fc', '#60a5fa']
const sectorData = Object.entries(sectorCounts)
  .map(([name, value], i) => ({ name, value, color: colors[i % colors.length] }))
  .sort((a, b) => b.value - a.value)

// Pipeline value by sector
const valueBySectorMap = projects.reduce<Record<string, number>>((acc, p) => {
  const sector = p.sector ?? 'Other'
  acc[sector] = (acc[sector] ?? 0) + parseValueMillions(p.value)
  return acc
}, {})
const valueBySector = Object.entries(valueBySectorMap)
  .map(([name, value], i) => ({
    name,
    value: Math.round(value * 10) / 10,
    color: colors[i % colors.length],
  }))
  .sort((a, b) => b.value - a.value)
  .slice(0, 8)

// Projects by stage
const stageOrder = ['Pipeline', 'Tender', 'Pre-Construction', 'Mobilising', 'On Site']
const stageData = stageOrder.map(stage => ({
  stage,
  count: projects.filter(p => p.stage === stage).length,
}))
const rolesByStage = stageOrder.map(stage => ({
  stage,
  roles: projects
    .filter(p => p.stage === stage)
    .reduce((sum, p) => sum + (p.rolesNeeded ?? 0), 0),
}))

// Top disciplines by client contact count
const disciplineCounts = clientCompanies.reduce<Record<string, number>>((acc, c) => {
  for (const d of c.disciplines) {
    acc[d] = (acc[d] ?? 0) + c.contacts.length
  }
  return acc
}, {})
const disciplineData = Object.entries(disciplineCounts)
  .map(([discipline, contacts]) => ({ discipline, contacts }))
  .sort((a, b) => b.contacts - a.contacts)
  .slice(0, 6)

// Highest-priority active projects for the highlights list
const priorityProjects = projects
  .filter(p => p.priority === 'Priority 1')
  .slice(0, 5)

// Main contractors and opportunity ranking
const contractorCounts = projects.reduce<Record<string, number>>((acc, p) => {
  if (p.mainContractor) {
    acc[p.mainContractor] = (acc[p.mainContractor] ?? 0) + 1
  }
  return acc
}, {})
const topContractors = Object.entries(contractorCounts)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 6)
const topOpportunities = [...projects]
  .sort((a, b) => (b.opportunityScore ?? 0) - (a.opportunityScore ?? 0))
  .slice(0, 8)

const activities = [
  { id: 1, type: 'meeting', user: 'Tom Bradley', entity: 'James Holloway', time: '8 Jun 2025, 14:32', note: 'Discussed new opportunities in Manchester. Available from July.' },
  { id: 2, type: 'placement', user: 'Emma Clarke', entity: 'Sarah Mitchell → Costain Ltd', time: '8 Jun 2025, 11:15', note: 'Placed as Structural Engineer. Start date: 16 Jun 2025.' },
  { id: 3, type: 'email', user: 'Tom Bradley', entity: '45 Civil Engineers', time: '7 Jun 2025, 16:45', note: 'Bulk email: New Site Manager opportunities in Manchester. 32 opened.' },
  { id: 4, type: 'meeting', user: 'Emma Clarke', entity: 'Balfour Beatty – David Harris', time: '7 Jun 2025, 11:00', note: 'Client meeting. Groundworks project starting Sept, 3 foremen needed.' },
  { id: 5, type: 'email', user: 'Mark Richards', entity: 'Lisa Park', time: '6 Jun 2025, 15:30', note: 'Sent vacancy details for Groundworks Foreman role at Costain Ltd.' },
  { id: 6, type: 'placement', user: 'Mark Richards', entity: 'Ryan Moss → Mace Group', time: '5 Jun 2025, 09:00', note: 'Placed as Project Manager. Start date: 23 Jun 2025.' },
]

const activityTypeConfig = {
  meeting: { icon: Users, color: '#60a5fa', label: 'Meeting' },
  email: { icon: Mail, color: '#c084fc', label: 'Email' },
  placement: { icon: CheckCircle, color: '#34d399', label: 'Placement' },
}

type StatCardProps = {
  icon: typeof FolderKanban
  label: string
  value: string | number
  color: string
}

function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  return (
    <div className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{
        width: 44, height: 44, borderRadius: '0.625rem', flexShrink: 0,
        background: `${color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280', fontWeight: 500 }}>{label}</p>
        <p style={{ margin: '0.2rem 0 0', fontSize: '1.35rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</p>
      </div>
    </div>
  )
}

function scoreColor(score: number) {
  if (score >= 80) return '#10b981'
  if (score >= 60) return '#b8942e'
  if (score >= 40) return '#f97316'
  return '#ef4444'
}

const TooltipStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '1.05rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
}

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <h1 className="page-title">Dashboard</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
          Overview of your project pipeline and client network
        </p>
      </div>

      {/* KPI cards */}
      <div className="dashboard-grid-4">
        <StatCard icon={FolderKanban} label="Active Projects" value={projects.length} color="#f97316" />
        <StatCard icon={Building2} label="Client Companies" value={clientCompanies.length} color="#60a5fa" />
        <StatCard icon={Users} label="Client Contacts" value={totalClientContacts.toLocaleString()} color="#b8942e" />
        <StatCard icon={Banknote} label="Pipeline Value" value={`£${totalPipelineValue.toFixed(0)}m+`} color="#fbbf24" />
      </div>

      {/* Priority highlights — directly after stat cards */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 className="section-title">Priority 1 Projects</h2>
          <Link to="/projects" style={{ fontSize: '0.82rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {priorityProjects.map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '0.7rem 0.875rem',
                background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: '0.5rem', flexShrink: 0,
                background: '#1a1a2e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#b8942e'
              }}>
                <FolderKanban size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: '#6b7280', marginTop: '0.1rem' }}>{p.client} · {p.sector}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <span style={{ fontSize: '0.78rem', color: '#374151', fontWeight: 600 }}>{typeof p.value === 'string' ? p.value : `£${p.value}`}</span>
                <span className="badge badge-gray" style={{ fontSize: '0.72rem' }}>{p.stage}</span>
              </div>
            </Link>
          ))}
          {priorityProjects.length === 0 && (
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No Priority 1 projects on file.</p>
          )}
        </div>
      </div>

      {/* Charts row */}
      <div className="dashboard-grid-2-1">
        {/* Projects by stage */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Projects by Stage</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={stageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
              <XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={TooltipStyle} />
              <Bar dataKey="count" fill="#b8942e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sector breakdown */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Projects by Sector</h2>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={sectorData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                {sectorData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={TooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem', maxHeight: 140, overflowY: 'auto' }}>
            {sectorData.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#000000' }}>{s.name}</span>
                </div>
                <span style={{ color: '#000000' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row — Disciplines */}
      <div className="card">
        <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Top Disciplines by Client Contacts</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={disciplineData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="discipline" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} width={140} />
            <Tooltip contentStyle={TooltipStyle} />
            <Bar dataKey="contacts" fill="#60a5fa" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ paddingTop: '0.25rem' }}>
        <h2 className="page-title">Reports & Analytics</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
          Opportunity scoring, staffing demand, and contractor relationships across the project portfolio
        </p>
      </div>

      {/* Unique report KPIs; pipeline value already appears at the top of the dashboard. */}
      <div className="dashboard-grid-3">
        <StatCard icon={Briefcase} label="Roles Needed" value={totalRolesNeeded} color="#60a5fa" />
        <StatCard icon={TrendingUp} label="Avg Opportunity Score" value={`${avgOpportunityScore}/100`} color="#10b981" />
        <StatCard icon={Building2} label="Main Contractors Tracked" value={Object.keys(contractorCounts).length} color="#b8942e" />
      </div>

      <div className="dashboard-grid-2-1">
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Pipeline Value by Sector (£m)</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={valueBySector}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: '#000000' }}
                axisLine={false}
                tickLine={false}
                angle={-20}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={TooltipStyle} formatter={(value) => [`£${value}m`, 'Value']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {valueBySector.map(entry => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Roles Needed by Stage</h2>
          <ResponsiveContainer width="100%" height={170}>
            <PieChart>
              <Pie
                data={rolesByStage.filter(item => item.roles > 0)}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={70}
                dataKey="roles"
                nameKey="stage"
                paddingAngle={3}
              >
                {rolesByStage.filter(item => item.roles > 0).map((item, i) => (
                  <Cell key={item.stage} fill={colors[i % colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={TooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
            {rolesByStage.map((item, i) => (
              <div key={item.stage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: colors[i % colors.length], display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#000000' }}>{item.stage}</span>
                </div>
                <span style={{ color: '#000000' }}>{item.roles}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2">
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Top Main Contractors by Project Count</h2>
          {topContractors.length === 0 ? (
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>No main contractor data on file.</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={topContractors} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" horizontal={false} />
                <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} width={140} />
                <Tooltip contentStyle={TooltipStyle} />
                <Bar dataKey="count" fill="#60a5fa" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="section-title">Top Opportunities</h2>
            <Link to="/projects" style={{ fontSize: '0.82rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topOpportunities.map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.6rem 0.875rem',
                  background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.name}</p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.75rem', color: '#6b7280' }}>
                    {project.client} · {typeof project.value === 'string' ? project.value : `£${project.value}m`}
                  </p>
                </div>
                <span
                  className="badge"
                  style={{
                    fontSize: '0.72rem',
                    background: `${scoreColor(project.opportunityScore ?? 0)}15`,
                    color: scoreColor(project.opportunityScore ?? 0),
                    border: `1px solid ${scoreColor(project.opportunityScore ?? 0)}30`,
                    flexShrink: 0,
                  }}
                >
                  {project.opportunityScore ?? 0}/100
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '0.25rem' }}>
        <h2 className="page-title">Recent Activity</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>Recent CRM activity log</p>
      </div>

      <div className="dashboard-grid-4">
        {[
          { label: 'Today', value: 3, color: '#b8942e', icon: Clock },
          { label: 'This Week', value: 14, color: '#60a5fa', icon: Calendar },
          { label: 'Emails', value: 12, color: '#c084fc', icon: Mail },
          { label: 'Placements', value: 2, color: '#34d399', icon: CheckCircle },
        ].map(item => (
          <div key={item.label} className="card" style={{ padding: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <item.icon size={20} style={{ color: item.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: item.color, lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.15rem' }}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {activities.map((activity, index) => {
          const config = activityTypeConfig[activity.type as keyof typeof activityTypeConfig]
          const Icon = config.icon

          return (
            <div
              key={activity.id}
              className="activity-row"
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
                padding: '0.875rem 1.25rem',
                borderBottom: index < activities.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '0.5rem', flexShrink: 0, background: `${config.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                <Icon size={16} style={{ color: config.color }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="activity-row-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{activity.entity}</span>
                  <div className="activity-row-meta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{activity.time}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>by {activity.user}</span>
                    <span style={{ padding: '0.15rem 0.5rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600, background: `${config.color}15`, color: config.color }}>{config.label}</span>
                  </div>
                </div>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>{activity.note}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
