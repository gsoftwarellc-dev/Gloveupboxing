import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts'
import {
  Download, Users, FileText, CalendarCheck, Trophy
} from 'lucide-react'

// ── Mock Data ──────────────────────────────────────────────────────────────

const placementsOverTime = [
  { month: 'Jan', placements: 4, cvsSent: 18 },
  { month: 'Feb', placements: 6, cvsSent: 24 },
  { month: 'Mar', placements: 5, cvsSent: 21 },
  { month: 'Apr', placements: 9, cvsSent: 32 },
  { month: 'May', placements: 7, cvsSent: 28 },
  { month: 'Jun', placements: 12, cvsSent: 41 },
]

const funnelData = [
  { stage: 'Applications', count: 84 },
  { stage: 'Screening', count: 56 },
  { stage: 'Shortlisted', count: 34 },
  { stage: 'Contacted', count: 28 },
  { stage: 'CV Sent', count: 22 },
  { stage: 'Interview', count: 14 },
  { stage: 'Offer', count: 8 },
  { stage: 'Placed', count: 6 },
]

const activityData = [
  { name: 'Calls', value: 142, color: '#b8942e' },
  { name: 'Emails', value: 98, color: '#3b82f6' },
  { name: 'Notes', value: 67, color: '#22c55e' },
  { name: 'Interviews', value: 31, color: '#a855f7' },
  { name: 'Submissions', value: 44, color: '#f97316' },
]


const vacancyPerf = [
  { vacancy: 'Senior Site Manager', client: 'Balfour Beatty', applications: 18, shortlisted: 7, cvsSent: 5, interviews: 3, status: 'active' },
  { vacancy: 'Structural Engineer', client: 'Arup', applications: 14, shortlisted: 6, cvsSent: 4, interviews: 2, status: 'active' },
  { vacancy: 'Project Manager', client: 'Mace Group', applications: 22, shortlisted: 9, cvsSent: 6, interviews: 4, status: 'active' },
  { vacancy: 'Groundworks Foreman', client: 'Costain Ltd', applications: 11, shortlisted: 4, cvsSent: 3, interviews: 2, status: 'filled' },
  { vacancy: 'MEP Coordinator', client: 'Skanska UK', applications: 9, shortlisted: 3, cvsSent: 2, interviews: 1, status: 'active' },
  { vacancy: 'Quantity Surveyor', client: 'Kier Group', applications: 10, shortlisted: 5, cvsSent: 2, interviews: 2, status: 'on-hold' },
]

const statusBadge: Record<string, string> = {
  active: 'badge-green',
  filled: 'badge-blue',
  'on-hold': 'badge-yellow',
  closed: 'badge-red',
}
const statusLabel: Record<string, string> = {
  active: 'Active',
  filled: 'Filled',
  'on-hold': 'On Hold',
  closed: 'Closed',
}

const TOOLTIP_STYLE = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '0.875rem',
}

// ── Custom Tooltip ──────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ ...TOOLTIP_STYLE, padding: '0.6rem 0.875rem' }}>
      <p style={{ fontWeight: 700, marginBottom: '0.25rem', color: '#000000' }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color, margin: '0.15rem 0', fontWeight: 600 }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  )
}

// ── Subcomponents ───────────────────────────────────────────────────────────

function KpiCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: string | number; color: string }) {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p className="stat-label">{label}</p>
        <div style={{ width: 36, height: 36, borderRadius: '0.5rem', background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={16} style={{ color }} />
        </div>
      </div>
      <p className="stat-value">{value}</p>
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function Reports() {
  const [dateRange, setDateRange] = useState('This Month')
  const [recruiterFilter, setRecruiterFilter] = useState('All Recruiters')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Reports &amp; Analytics</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', fontWeight: 500 }}>
            Recruiter performance, placement trends, and pipeline conversion
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Date range */}
          <div style={{ position: 'relative' }}>
            <select
              className="input"
              style={{ width: 'auto', paddingRight: '2.25rem', fontWeight: 600 }}
              value={dateRange}
              onChange={e => setDateRange(e.target.value)}
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          {/* Recruiter filter */}
          <div style={{ position: 'relative' }}>
            <select
              className="input"
              style={{ width: 'auto', paddingRight: '2.25rem', fontWeight: 600 }}
              value={recruiterFilter}
              onChange={e => setRecruiterFilter(e.target.value)}
            >
              <option>All Recruiters</option>
              <option>Tom Bradley</option>
              <option>Emma Clarke</option>
              <option>Mark Richards</option>
              <option>Priya Sharma</option>
            </select>
          </div>
          <button className="btn-primary">
            <Download size={14} /> Export
          </button>
        </div>
      </div>

      {/* ── KPI Summary Row ─────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        <KpiCard icon={Users} label="Candidates Added" value={100} color="#b8942e" />
        <KpiCard icon={FileText} label="CVs Sent" value={61} color="#22c55e" />
        <KpiCard icon={CalendarCheck} label="Interviews Arranged" value={34} color="#a855f7" />
        <KpiCard icon={Trophy} label="Placements" value={34} color="#b8942e" />
      </div>

      {/* ── Charts Row ──────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>

        {/* Placements Over Time */}
        <div className="card">
          <p className="section-title" style={{ marginBottom: '1.25rem' }}>Placements Over Time</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={placementsOverTime} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradPlacements" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#b8942e" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="#b8942e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradCvs" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
              <XAxis dataKey="month" tick={{ fill: '#000000', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#000000', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '0.82rem', fontWeight: 600, color: '#000000' }} />
              <Area type="monotone" dataKey="placements" name="Placements" stroke="#b8942e" strokeWidth={2.5} fill="url(#gradPlacements)" dot={{ fill: '#b8942e', r: 3 }} activeDot={{ r: 5 }} />
              <Area type="monotone" dataKey="cvsSent" name="CVs Sent" stroke="#3b82f6" strokeWidth={2} fill="url(#gradCvs)" dot={{ fill: '#3b82f6', r: 3 }} activeDot={{ r: 5 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Activity by Type */}
        <div className="card">
          <p className="section-title" style={{ marginBottom: '1.25rem' }}>Activity by Type</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: '0 0 220px' }}>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={95}
                    dataKey="value"
                    paddingAngle={3}
                  >
                    {activityData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={TOOLTIP_STYLE}
                    formatter={(v: any, name: any) => [v, name]}
                    labelStyle={{ color: '#000000', fontWeight: 700 }}
                    itemStyle={{ color: '#000000' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {activityData.map(d => (
                <div key={d.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#000000' }}>{d.name}</span>
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#000000' }}>{d.value}</span>
                </div>
              ))}
              <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#000000' }}>Total</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#b8942e' }}>
                  {activityData.reduce((s, d) => s + d.value, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pipeline Conversion Funnel ───────────────────────────────────── */}
      <div className="card">
        <p className="section-title" style={{ marginBottom: '1.25rem' }}>Pipeline Conversion Funnel</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={funnelData} margin={{ top: 4, right: 16, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" vertical={false} />
            <XAxis dataKey="stage" tick={{ fill: '#000000', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#000000', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={TOOLTIP_STYLE}
              labelStyle={{ color: '#000000', fontWeight: 700 }}
              itemStyle={{ color: '#000000' }}
              formatter={(v: any) => [v, 'Candidates']}
            />
            <Bar dataKey="count" name="Candidates" radius={[6, 6, 0, 0]}>
              {funnelData.map((_, i) => {
                const opacity = 1 - (i / funnelData.length) * 0.55
                return <Cell key={i} fill={`rgba(184, 148, 46, ${opacity})`} />
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {/* Conversion rates row */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {funnelData.map((d, i) => {
            if (i === 0) return null
            const rate = Math.round((d.count / funnelData[i - 1].count) * 100)
            return (
              <div key={d.stage} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', color: '#6b7280', fontWeight: 600 }}>
                <span style={{ color: '#b8942e', fontWeight: 800 }}>{rate}%</span>
                <span>{funnelData[i - 1].stage}→{d.stage}</span>
                {i < funnelData.length - 1 && <span style={{ color: '#d1d5db', marginLeft: '0.25rem' }}>·</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Vacancy Performance Table ─────────────────────────────────────── */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.25rem 1rem', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p className="section-title">Vacancy Performance</p>
          <Link to="/vacancies" className="btn-ghost" style={{ fontSize: '0.85rem' }}>View All Vacancies</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Vacancy</th>
                <th>Client</th>
                <th>Applications</th>
                <th>Shortlisted</th>
                <th>CVs Sent</th>
                <th>Interviews</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {vacancyPerf.map(v => (
                <tr key={v.vacancy}>
                  <td style={{ fontWeight: 700 }}>{v.vacancy}</td>
                  <td style={{ color: '#374151' }}>{v.client}</td>
                  <td>
                    <span style={{ fontWeight: 700 }}>{v.applications}</span>
                  </td>
                  <td>{v.shortlisted}</td>
                  <td>{v.cvsSent}</td>
                  <td>{v.interviews}</td>
                  <td>
                    <span className={`badge ${statusBadge[v.status]}`}>
                      {statusLabel[v.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
