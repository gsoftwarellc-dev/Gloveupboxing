import { Mail, Users, CheckCircle, Clock, Calendar } from 'lucide-react'

const activities = [
  { id: 1, type: 'meeting',   user: 'Tom Bradley',   entity: 'James Holloway',                time: '8 Jun 2025, 14:32', note: 'Discussed new opportunities in Manchester. Available from July.' },
  { id: 2, type: 'placement', user: 'Emma Clarke',   entity: 'Sarah Mitchell → Costain Ltd',  time: '8 Jun 2025, 11:15', note: 'Placed as Structural Engineer. Start date: 16 Jun 2025.' },
  { id: 3, type: 'email',     user: 'Tom Bradley',   entity: '45 Civil Engineers',             time: '7 Jun 2025, 16:45', note: 'Bulk email: New Site Manager opportunities in Manchester. 32 opened.' },
  { id: 4, type: 'meeting',   user: 'Emma Clarke',   entity: 'Balfour Beatty – David Harris',  time: '7 Jun 2025, 11:00', note: 'Client meeting. Groundworks project starting Sept, 3 foremen needed.' },
  { id: 5, type: 'email',     user: 'Mark Richards', entity: 'Lisa Park',                      time: '6 Jun 2025, 15:30', note: 'Sent vacancy details for Groundworks Foreman role at Costain Ltd.' },
  { id: 6, type: 'placement', user: 'Mark Richards', entity: 'Ryan Moss → Mace Group',         time: '5 Jun 2025, 09:00', note: 'Placed as Project Manager. Start date: 23 Jun 2025.' },
]

const typeConfig: Record<string, { icon: any; color: string; label: string }> = {
  meeting:   { icon: Users,        color: '#60a5fa', label: 'Meeting'   },
  email:     { icon: Mail,         color: '#c084fc', label: 'Email'     },
  placement: { icon: CheckCircle,  color: '#34d399', label: 'Placement' },
}

export default function Activity() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      <div>
        <h1 className="page-title">Activity</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>Recent CRM activity log</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
        {[
          { label: 'Today',       value: 3,  color: '#b8942e', icon: Clock        },
          { label: 'This Week',   value: 14, color: '#60a5fa', icon: Calendar     },
          { label: 'Emails',      value: 12, color: '#c084fc', icon: Mail         },
          { label: 'Placements',  value: 2,  color: '#34d399', icon: CheckCircle  },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <s.icon size={20} style={{ color: s.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.15rem' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {activities.map((a, i) => {
          const cfg = typeConfig[a.type] ?? typeConfig.meeting
          const Icon = cfg.icon
          return (
            <div key={a.id} style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              padding: '0.875rem 1.25rem',
              borderBottom: i < activities.length - 1 ? '1px solid #f3f4f6' : 'none',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '0.5rem', flexShrink: 0, background: `${cfg.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                <Icon size={16} style={{ color: cfg.color }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{a.entity}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{a.time}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>by {a.user}</span>
                    <span style={{ padding: '0.15rem 0.5rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600, background: `${cfg.color}15`, color: cfg.color }}>{cfg.label}</span>
                  </div>
                </div>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.5 }}>{a.note}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
