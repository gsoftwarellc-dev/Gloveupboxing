import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'
import { Users, Building2, Briefcase, Zap, TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle } from 'lucide-react'
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

const recentActivity = [
  { id: 1, type: 'placement', text: 'James Holloway placed at Costain Ltd', time: '2h ago', icon: CheckCircle, color: '#34d399' },
  { id: 2, type: 'vacancy', text: 'New vacancy: Site Manager – Manchester', time: '3h ago', icon: Briefcase, color: '#60a5fa' },
  { id: 3, type: 'candidate', text: 'Sarah Mitchell added as new candidate', time: '4h ago', icon: Users, color: '#b8942e' },
  { id: 4, type: 'email', text: 'Bulk email sent to 45 civil engineers', time: '5h ago', icon: AlertCircle, color: '#c084fc' },
  { id: 5, type: 'client', text: 'Balfour Beatty – new contact added', time: '6h ago', icon: Building2, color: '#fbbf24' },
]

const topRecruiters = [
  { name: 'Tom Bradley', placements: 12, target: 15, revenue: '£84k' },
  { name: 'Emma Clarke', placements: 9, target: 15, revenue: '£63k' },
  { name: 'Mark Richards', placements: 7, target: 10, revenue: '£49k' },
  { name: 'Priya Sharma', placements: 6, target: 10, revenue: '£42k' },
]

const upcomingInterviews = [
  { candidate: 'John Davies', role: 'Senior Site Manager', client: 'Mace Group', date: 'Today 2:00pm', status: 'confirmed' },
  { candidate: 'Lisa Park', role: 'Structural Engineer', client: 'Arup', date: 'Tomorrow 10:00am', status: 'confirmed' },
  { candidate: 'Ryan Moss', role: 'Project Manager', client: 'Skanska', date: 'Thu 3:30pm', status: 'pending' },
]

function StatCard({ icon: Icon, label, value, change, up, color }: any) {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p className="stat-label">{label}</p>
          <p className="stat-value" style={{ marginTop: '0.25rem' }}>{value}</p>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: '10px',
          background: `${color}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Icon size={20} style={{ color }} />
        </div>
      </div>
      <span className={`stat-change ${up ? 'up' : 'down'}`}>
        {up ? <TrendingUp size={12} style={{ display: 'inline', marginRight: 3 }} /> : <TrendingDown size={12} style={{ display: 'inline', marginRight: 3 }} />}
        {change} vs last month
      </span>
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
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>Welcome back — here's what's happening today</p>
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem' }}>
        <StatCard icon={Users} label="Total Candidates" value="1,284" change="+12%" up color="#b8942e" />
        <StatCard icon={Building2} label="Active Clients" value="87" change="+5%" up color="#60a5fa" />
        <StatCard icon={Briefcase} label="Open Vacancies" value="143" change="-3%" up={false} color="#c084fc" />
        <StatCard icon={AlertCircle} label="New Applications" value="38" change="+24%" up color="#f97316" />
        <StatCard icon={Clock} label="CVs Sent (MTD)" value="91" change="+9%" up color="#8b5cf6" />
        <StatCard icon={Zap} label="Interviews Arranged" value="27" change="+15%" up color="#3b82f6" />
        <StatCard icon={CheckCircle} label="Placements (MTD)" value="43" change="+18%" up color="#34d399" />
        <StatCard icon={TrendingUp} label="Revenue (MTD)" value="£301k" change="+22%" up color="#fbbf24" />
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

      {/* Pipeline + Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Recruitment pipeline */}
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

        {/* Recent activity */}
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Recent Activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {recentActivity.map(a => (
              <div key={a.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.625rem 0', borderBottom: '1px solid #f8f9fb' }}>
                <div style={{
                  width: 30, height: 30, borderRadius: '8px',
                  background: `${a.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <a.icon size={14} style={{ color: a.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '1.05rem', color: '#000000', lineHeight: 1.4 }}>{a.text}</p>
                  <p style={{ margin: 0, fontSize: '1.05rem', color: '#000000', marginTop: '0.15rem' }}>{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Top recruiters */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="section-title">Top Recruiters</h2>
            <Link to="/settings" style={{ fontSize: '1.05rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {topRecruiters.map((r, i) => (
              <div key={r.name}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: i === 0 ? 'linear-gradient(135deg,#b8942e,#d4af5a)' : '#f1f5f9',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: i === 0 ? '#ffffff' : '#000000', fontWeight: 700, fontSize: '0.8rem'
                    }}>
                      {r.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}>{r.name}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#000000' }}>{r.placements}</span>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}> / {r.target}</span>
                    <span style={{ fontSize: '1.05rem', color: '#000000', marginLeft: '0.5rem' }}>{r.revenue}</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(r.placements / r.target) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming interviews */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h2 className="section-title">Upcoming Interviews</h2>
            <Link to="/candidates" style={{ fontSize: '1.05rem', color: '#b8942e', textDecoration: 'none' }}>View all</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {upcomingInterviews.map((iv, i) => (
              <div key={i} style={{
                background: '#f8f9fb', borderRadius: '0.5rem', padding: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                border: '1px solid #e8eaf0'
              }}>
                <div className="avatar">{iv.candidate.split(' ').map(n => n[0]).join('')}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: '#000000' }}>{iv.candidate}</p>
                  <p style={{ margin: 0, fontSize: '1.05rem', color: '#000000' }}>{iv.role} • {iv.client}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem', color: '#000000' }}>
                    <Clock size={11} />
                    {iv.date}
                  </div>
                  <span className={`badge ${iv.status === 'confirmed' ? 'badge-green' : 'badge-yellow'}`} style={{ marginTop: '0.25rem' }}>
                    {iv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
