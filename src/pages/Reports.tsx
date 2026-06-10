import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import { Link } from 'react-router-dom'
import { Banknote, Briefcase, TrendingUp, Building2 } from 'lucide-react'
import { projects } from '../data/mock'

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

// Pipeline value by sector
const colors = ['#b8942e', '#d4af5a', '#8a6e1e', '#6b5218', '#3b82f6', '#10b981', '#ef4444', '#94a3b8', '#c084fc', '#60a5fa']
const valueBySectorMap = projects.reduce<Record<string, number>>((acc, p) => {
  const s = p.sector ?? 'Other'
  acc[s] = (acc[s] ?? 0) + parseValueMillions(p.value)
  return acc
}, {})
const valueBySector = Object.entries(valueBySectorMap)
  .map(([name, value], i) => ({ name, value: Math.round(value * 10) / 10, color: colors[i % colors.length] }))
  .sort((a, b) => b.value - a.value)
  .slice(0, 8)

// Roles needed by stage
const stageOrder = ['Pipeline', 'Tender', 'Pre-Construction', 'Mobilising', 'On Site']
const rolesByStage = stageOrder.map(stage => ({
  stage,
  roles: projects.filter(p => p.stage === stage).reduce((sum, p) => sum + (p.rolesNeeded ?? 0), 0),
}))

// Top main contractors by number of associated projects
const contractorCounts = projects.reduce<Record<string, number>>((acc, p) => {
  const c = p.mainContractor
  if (!c) return acc
  acc[c] = (acc[c] ?? 0) + 1
  return acc
}, {})
const topContractors = Object.entries(contractorCounts)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 6)

// Highest opportunity-score projects
const topOpportunities = [...projects]
  .sort((a, b) => (b.opportunityScore ?? 0) - (a.opportunityScore ?? 0))
  .slice(0, 8)

const TooltipStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '1.05rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
}

function KpiCard({ icon: Icon, label, value, color }: any) {
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

export default function Reports() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <h1 className="page-title">Reports & Analytics</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
          Pipeline value, opportunity scoring, and contractor relationships across the project portfolio
        </p>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
        <KpiCard icon={Banknote} label="Total Pipeline Value" value={`£${totalPipelineValue.toFixed(0)}m+`} color="#fbbf24" />
        <KpiCard icon={Briefcase} label="Roles Needed" value={totalRolesNeeded} color="#60a5fa" />
        <KpiCard icon={TrendingUp} label="Avg Opportunity Score" value={`${avgOpportunityScore}/100`} color="#10b981" />
        <KpiCard icon={Building2} label="Main Contractors Tracked" value={Object.keys(contractorCounts).length} color="#b8942e" />
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        {/* Pipeline value by sector */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Pipeline Value by Sector (£m)</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={valueBySector}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#000000' }} axisLine={false} tickLine={false} angle={-20} textAnchor="end" height={60} interval={0} />
              <YAxis tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={TooltipStyle} formatter={(v: any) => [`£${v}m`, 'Value']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {valueBySector.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Roles needed by stage */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Roles Needed by Stage</h2>
          <ResponsiveContainer width="100%" height={170}>
            <PieChart>
              <Pie data={rolesByStage.filter(r => r.roles > 0)} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="roles" nameKey="stage" paddingAngle={3}>
                {rolesByStage.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={TooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
            {rolesByStage.map((s, i) => (
              <div key={s.stage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: colors[i % colors.length], display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#000000' }}>{s.stage}</span>
                </div>
                <span style={{ color: '#000000' }}>{s.roles}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Top contractors */}
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

        {/* Top opportunities table */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="section-title">Top Opportunities</h2>
            <Link to="/projects" style={{ fontSize: '0.82rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {topOpportunities.map(p => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.6rem 0.875rem',
                  background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 700, color: '#111', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{p.client} · {typeof p.value === 'string' ? p.value : `£${p.value}m`}</p>
                </div>
                <span
                  className="badge"
                  style={{
                    fontSize: '0.72rem',
                    background: `${scoreColor(p.opportunityScore ?? 0)}15`,
                    color: scoreColor(p.opportunityScore ?? 0),
                    border: `1px solid ${scoreColor(p.opportunityScore ?? 0)}30`,
                    flexShrink: 0,
                  }}
                >
                  {p.opportunityScore ?? 0}/100
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
