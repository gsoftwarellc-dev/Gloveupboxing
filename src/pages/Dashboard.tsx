import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import { Users, Building2, Briefcase, Zap, TrendingUp, Clock, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const placementsData = [
  { month: 'Jan', placements: 4, revenue: 28000 },
  { month: 'Feb', placements: 6, revenue: 42000 },
  { month: 'Mar', placements: 5, revenue: 35000 },
  { month: 'Apr', placements: 9, revenue: 63000 },
  { month: 'May', placements: 7, revenue: 49000 },
  { month: 'Jun', placements: 12, revenue: 84000 },
]

const pipelineData = [
  { stage: 'Applied', count: 84 },
  { stage: 'Screening', count: 56 },
  { stage: 'Interview', count: 31 },
  { stage: 'Offer', count: 14 },
  { stage: 'Placed', count: 8 },
]

const sectorData = [
  { name: 'Civil', value: 34, color: '#b8942e' },
  { name: 'Structural', value: 22, color: '#d4af5a' },
  { name: 'Groundworks', value: 18, color: '#8a6e1e' },
  { name: 'MEP', value: 16, color: '#6b5218' },
  { name: 'Other', value: 10, color: '#94a3b8' },
]


const upcomingInterviews = [
  { candidate: 'John Davies', role: 'Senior Site Manager', client: 'Mace Group', date: 'Today 2:00pm', status: 'confirmed' },
  { candidate: 'Lisa Park', role: 'Structural Engineer', client: 'Arup', date: 'Tomorrow 10:00am', status: 'confirmed' },
  { candidate: 'Ryan Moss', role: 'Project Manager', client: 'Skanska', date: 'Thu 3:30pm', status: 'pending' },
]

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Dashboard</h1>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <select className="input" style={{ width: 'auto', fontSize: '1.05rem' }}>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="btn-primary">
            <TrendingUp size={15} />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.75rem' }}>
        <StatCard icon={Users} label="Total Candidates" value="1,284" change="+12%" up color="#b8942e" />
        <StatCard icon={Building2} label="Active Clients" value="87" change="+5%" up color="#60a5fa" />
        <StatCard icon={Briefcase} label="Open Job Posts" value="143" change="-3%" up={false} color="#c084fc" />
        <StatCard icon={AlertCircle} label="New Candidates Applied" value="38" change="+24%" up color="#f97316" />
        <StatCard icon={Zap} label="Interviews Arranged" value="27" change="+15%" up color="#3b82f6" />
        <StatCard icon={TrendingUp} label="Revenue (MTD)" value="£301k" change="+22%" up color="#fbbf24" />
      </div>

      {/* Upcoming Interviews — directly after stat cards */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 className="section-title">Upcoming Interviews</h2>
          <Link to="/candidates" style={{ fontSize: '0.82rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {upcomingInterviews.map((iv, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: '0.7rem 0.875rem',
              background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                background: '#1a1a2e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#b8942e', fontWeight: 700, fontSize: '0.7rem'
              }}>
                {iv.candidate.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{iv.candidate}</p>
                <p style={{ margin: 0, fontSize: '0.78rem', color: '#6b7280', marginTop: '0.1rem' }}>{iv.role} · {iv.client}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#374151' }}>
                  <Clock size={11} />{iv.date}
                </span>
                <span className={`badge ${iv.status === 'confirmed' ? 'badge-green' : 'badge-yellow'}`} style={{ fontSize: '0.72rem' }}>
                  {iv.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        {/* Placements over time */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <h2 className="section-title">Placements & Revenue</h2>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.05rem', color: '#000000' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#b8942e', display: 'inline-block' }} />
                Placements
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={placementsData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#b8942e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#b8942e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={TooltipStyle} />
              <Area type="monotone" dataKey="placements" stroke="#b8942e" strokeWidth={2} fill="url(#goldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sector breakdown */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Placements by Sector</h2>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem' }}>
            {sectorData.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '1.05rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: '#000000' }}>{s.name}</span>
                </div>
                <span style={{ color: '#000000' }}>{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row — Pipeline */}
      <div className="card">
        <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Recruitment Pipeline</h2>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={pipelineData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="stage" tick={{ fontSize: 11, fill: '#000000' }} axisLine={false} tickLine={false} width={65} />
            <Tooltip contentStyle={TooltipStyle} />
            <Bar dataKey="count" fill="#b8942e" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
