import { useState } from 'react'
import { Plus, Phone, Mail, Calendar, FileText, MessageSquare, CheckCircle, Clock, Users, Briefcase } from 'lucide-react'

const activityTypes = [
  { key: 'all', label: 'All' },
  { key: 'call', label: 'Calls' },
  { key: 'email', label: 'Emails' },
  { key: 'note', label: 'Notes' },
  { key: 'interview', label: 'Interviews' },
  { key: 'placement', label: 'Placements' },
]

const activities = [
  { id: 1, type: 'call', user: 'Tom Bradley', entity: 'James Holloway', entityType: 'candidate', time: '2025-06-08 14:32', duration: '12 min', note: 'Discussed new opportunities in Manchester area. Candidate available from July.', tags: ['Available', 'Manchester'] },
  { id: 2, type: 'placement', user: 'Emma Clarke', entity: 'Sarah Mitchell → Costain Ltd', entityType: 'placement', time: '2025-06-08 11:15', duration: '', note: 'Successful placement: Structural Engineer at Costain Ltd. Start date: 16 June 2025.', tags: ['Placement', 'Structural'] },
  { id: 3, type: 'interview', user: 'Mark Richards', entity: 'Ryan Moss – Mace Group', entityType: 'interview', time: '2025-06-08 10:00', duration: '1h', note: 'First stage interview completed. Positive feedback from client. Second round scheduled.', tags: ['Interview', 'Civil'] },
  { id: 4, type: 'email', user: 'Tom Bradley', entity: '45 Civil Engineers', entityType: 'bulk', time: '2025-06-07 16:45', duration: '', note: 'Bulk email sent: New Site Manager opportunities in Manchester. 32 opened.', tags: ['Bulk Email', 'Civil'] },
  { id: 5, type: 'note', user: 'Priya Sharma', entity: 'Tom Nguyen', entityType: 'candidate', time: '2025-06-07 14:20', duration: '', note: 'MEP candidate. Strong background in HVAC. Interested in Glasgow/Edinburgh area roles only.', tags: ['Note', 'MEP'] },
  { id: 6, type: 'call', user: 'Emma Clarke', entity: 'Balfour Beatty – David Harris', entityType: 'client', time: '2025-06-07 11:00', duration: '28 min', note: 'Client call. Discussed upcoming groundworks project starting Sept. 3 foremen needed.', tags: ['Client Call', 'Groundworks'] },
  { id: 7, type: 'email', user: 'Mark Richards', entity: 'Lisa Park', entityType: 'candidate', time: '2025-06-06 15:30', duration: '', note: 'Sent vacancy details for Groundworks Foreman role at Costain Ltd.', tags: ['Vacancy', 'Groundworks'] },
  { id: 8, type: 'interview', user: 'Tom Bradley', entity: 'Emma Davies – Kier Group', entityType: 'interview', time: '2025-06-06 09:00', duration: '45 min', note: 'QS interview scheduled. Candidate requested feedback within 24h.', tags: ['Interview', 'QS'] },
]

const iconMap: Record<string, any> = {
  call: Phone, email: Mail, note: FileText, interview: Calendar, placement: CheckCircle, meeting: Users
}
const colorMap: Record<string, string> = {
  call: '#60a5fa', email: '#c084fc', note: '#fbbf24', interview: '#b8942e', placement: '#34d399', meeting: '#f87171'
}

export default function Activity() {
  const [typeFilter, setTypeFilter] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [addType, setAddType] = useState('call')

  const filtered = activities.filter(a => typeFilter === 'all' || a.type === typeFilter)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Notes & Activity</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>All CRM activity log and notes</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Log Activity</button>
      </div>

      {/* Summary stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
        {[
          { label: 'Today', value: 3, color: '#b8942e', icon: Clock },
          { label: 'This Week', value: 14, color: '#60a5fa', icon: Calendar },
          { label: 'Calls', value: 8, color: '#34d399', icon: Phone },
          { label: 'Emails', value: 12, color: '#c084fc', icon: Mail },
          { label: 'Interviews', value: 5, color: '#fbbf24', icon: Briefcase },
          { label: 'Placements', value: 2, color: '#34d399', icon: CheckCircle },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '0.875rem', textAlign: 'center' }}>
            <s.icon size={18} style={{ color: s.color, margin: '0 auto 0.375rem' }} />
            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.1rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Type filter */}
      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
        {activityTypes.map(t => (
          <button
            key={t.key}
            onClick={() => setTypeFilter(t.key)}
            className={typeFilter === t.key ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.35rem 0.875rem', fontSize: '1.05rem' }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Activity feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {filtered.map(a => {
          const Icon = iconMap[a.type] || MessageSquare
          const color = colorMap[a.type] || '#b8942e'
          return (
            <div key={a.id} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '10px', flexShrink: 0,
                background: `${color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '2px'
              }}>
                <Icon size={18} style={{ color }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{a.entity}</span>
                    {a.duration && <span style={{ marginLeft: '0.5rem', fontSize: '1.05rem', color: '#000000' }}>• {a.duration}</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}>{a.time}</span>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}>by {a.user}</span>
                  </div>
                </div>
                <p style={{ margin: '0.35rem 0 0.5rem', fontSize: '1.05rem', color: '#999', lineHeight: 1.5 }}>{a.note}</p>
                <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                  {a.tags.map(t => <span key={t} className="badge badge-gray" style={{ fontSize: '0.78rem' }}>{t}</span>)}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 className="section-title">Log Activity</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              <div style={{ gridColumn: '1/-1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Activity Type</label>
                <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                  {['call', 'email', 'note', 'interview', 'placement'].map(t => (
                    <button key={t} onClick={() => setAddType(t)} className={addType === t ? 'btn-primary' : 'btn-secondary'} style={{ padding: '0.35rem 0.75rem', fontSize: '1.05rem', textTransform: 'capitalize' }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Related To</label>
                <input className="input" placeholder="Search candidate, client, or vacancy..." />
              </div>
              {addType === 'call' && (
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Duration</label>
                  <input className="input" placeholder="e.g. 15 min" />
                </div>
              )}
              <div style={{ gridColumn: '1/-1' }}>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Notes</label>
                <textarea className="input" rows={4} placeholder="What happened? Key points discussed..." style={{ resize: 'vertical' }} />
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Date & Time</label>
                <input className="input" type="datetime-local" defaultValue={new Date().toISOString().slice(0,16)} />
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Logged By</label>
                <select className="input">
                  <option>Tom Bradley</option><option>Emma Clarke</option><option>Mark Richards</option><option>Priya Sharma</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowAddModal(false)}>Log Activity</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
