import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import { Building2, FolderKanban, Users, Banknote, Star, Hammer } from 'lucide-react'
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

const priority1Count = projects.filter(p => p.priority === 'Priority 1').length
const onSiteCount = projects.filter(p => p.stage === 'On Site').length

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

// Projects by stage
const stageOrder = ['Pipeline', 'Tender', 'Pre-Construction', 'Mobilising', 'On Site']
const stageData = stageOrder.map(stage => ({
  stage,
  count: projects.filter(p => p.stage === stage).length,
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

function StatCard({ icon: Icon, label, value, color }: any) {
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.75rem' }}>
        <StatCard icon={FolderKanban} label="Active Projects" value={projects.length} color="#f97316" />
        <StatCard icon={Building2} label="Client Companies" value={clientCompanies.length} color="#60a5fa" />
        <StatCard icon={Users} label="Client Contacts" value={totalClientContacts.toLocaleString()} color="#b8942e" />
        <StatCard icon={Banknote} label="Pipeline Value" value={`£${totalPipelineValue.toFixed(0)}m+`} color="#fbbf24" />
        <StatCard icon={Star} label="Priority 1 Projects" value={priority1Count} color="#ef4444" />
        <StatCard icon={Hammer} label="Projects On Site" value={onSiteCount} color="#10b981" />
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
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
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
    </div>
  )
}
