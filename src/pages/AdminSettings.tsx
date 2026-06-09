import { useState } from 'react'
import {
  Users, Shield, Database, Bell, Globe, Key,
  Plus, Trash2, Edit, Save, Upload, RefreshCw, Award, Mail
} from 'lucide-react'

// ── Data ───────────────────────────────────────────────────────────────────

const settingsSections = [
  { key: 'users',         label: 'Users & Roles',    icon: Users },
  { key: 'certificates',  label: 'Certificates',     icon: Award },
  { key: 'email',         label: 'Email / SMTP',     icon: Mail },
  { key: 'security',      label: 'Security',         icon: Shield },
  { key: 'integrations',  label: 'Integrations',     icon: Globe },
  { key: 'data',          label: 'Data & Import',    icon: Database },
  { key: 'notifications', label: 'Notifications',    icon: Bell },
  { key: 'api',           label: 'API & Keys',       icon: Key },
]

const defaultCertificates = [
  { id: 1,  name: 'SMSTS',               category: 'Site Management',    description: 'Site Management Safety Training Scheme' },
  { id: 2,  name: 'CSCS Gold Card',      category: 'CSCS',               description: 'Construction Skills Certification Scheme — Supervisory' },
  { id: 3,  name: 'CSCS Black Card',     category: 'CSCS',               description: 'Construction Skills Certification Scheme — Manager' },
  { id: 4,  name: 'CSCS Blue Card',      category: 'CSCS',               description: 'Construction Skills Certification Scheme — Skilled Worker' },
  { id: 5,  name: 'NEBOSH Diploma',      category: 'Health & Safety',    description: 'National Examination Board in Occupational Safety & Health' },
  { id: 6,  name: 'IOSH Managing Safely',category: 'Health & Safety',    description: 'Institution of Occupational Safety and Health' },
  { id: 7,  name: 'First Aid at Work',   category: 'First Aid',          description: '3-day HSE First Aid certificate' },
  { id: 8,  name: 'MRICS',              category: 'Professional',        description: 'Membership of the Royal Institution of Chartered Surveyors' },
  { id: 9,  name: 'IStructE Chartership',category: 'Professional',       description: 'Institution of Structural Engineers' },
  { id: 10, name: 'PMP',               category: 'Project Management',   description: 'Project Management Professional' },
  { id: 11, name: 'PRINCE2 Practitioner',category: 'Project Management', description: 'Projects IN Controlled Environments' },
  { id: 12, name: 'CPCS Appointed Person',category: 'Plant',             description: 'Construction Plant Competence Scheme' },
  { id: 13, name: 'NPORS',             category: 'Plant',                description: 'National Plant Operators Registration Scheme' },
  { id: 14, name: 'ECS Gold Card',     category: 'Electrical',           description: 'Electrotechnical Certification Scheme — Approved Electrician' },
  { id: 15, name: 'CIBSE Membership', category: 'MEP',                   description: 'Chartered Institution of Building Services Engineers' },
]

const teamMembers = [
  { id: 1, name: 'Super Admin',   email: 'admin@backfill.co', role: 'Super Admin', status: 'active', lastLogin: '08 Jun 2025' },
  { id: 2, name: 'Tom Bradley',   email: 'tom@backfill.co',   role: 'Recruiter',   status: 'active', lastLogin: '08 Jun 2025' },
  { id: 3, name: 'Emma Clarke',   email: 'emma@backfill.co',  role: 'Recruiter',   status: 'active', lastLogin: '07 Jun 2025' },
  { id: 4, name: 'Mark Richards', email: 'mark@backfill.co',  role: 'Recruiter',   status: 'active', lastLogin: '06 Jun 2025' },
  { id: 5, name: 'Priya Sharma',  email: 'priya@backfill.co', role: 'Recruiter',   status: 'active', lastLogin: '05 Jun 2025' },
  { id: 6, name: 'Sales Manager', email: 'sales@backfill.co', role: 'Admin',       status: 'active', lastLogin: '04 Jun 2025' },
]

const roleConfig: Record<string, string> = {
  'Super Admin': 'badge-gold',
  'Admin':       'badge-blue',
  'Recruiter':   'badge-green',
  'Read Only':   'badge-gray',
}

// ── Helpers ────────────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
      <div>
        <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>{title}</h2>
        {subtitle && <p style={{ margin: '0.2rem 0 0', fontSize: '0.78rem', color: '#6b7280' }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

function SettingRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #f3f4f6' }}>
      <div>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>{label}</div>
        {desc && <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{desc}</div>}
      </div>
      <div style={{ flexShrink: 0 }}>{children}</div>
    </div>
  )
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 600, color: '#374151' }}>{label}</label>
      {children}
    </div>
  )
}

// ── Main ───────────────────────────────────────────────────────────────────

export default function AdminSettings() {
  const [activeSection, setActiveSection] = useState('users')
  const [showAddUser, setShowAddUser] = useState(false)
  const [certificates, setCertificates] = useState(defaultCertificates)
  const [newCertName, setNewCertName] = useState('')
  const [newCertCategory, setNewCertCategory] = useState('Site Management')
  const [newCertDesc, setNewCertDesc] = useState('')

  const activeLabel = settingsSections.find(s => s.key === activeSection)?.label ?? ''

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h1 className="page-title">Settings</h1>
        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>Manage your CRM configuration, users and integrations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '1.25rem', alignItems: 'start' }}>

        {/* Nav sidebar */}
        <div className="card" style={{ padding: '0.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {settingsSections.map(s => {
              const active = activeSection === s.key
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveSection(s.key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.65rem',
                    padding: '0.6rem 0.75rem', borderRadius: '0.5rem',
                    border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%',
                    fontSize: '0.85rem', fontWeight: active ? 700 : 500,
                    background: active ? '#1a1a2e' : 'transparent',
                    color: active ? '#fff' : '#374151',
                    transition: 'all 0.15s',
                  }}
                >
                  <s.icon size={15} style={{ color: active ? '#b8942e' : '#9ca3af', flexShrink: 0 }} />
                  {s.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* ── Users & Roles ── */}
          {activeSection === 'users' && (
            <>
              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader
                  title="Team Members"
                  subtitle={`${teamMembers.length} users in your workspace`}
                  action={<button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddUser(true)}><Plus size={13} />Invite User</button>}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {/* Table header */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr auto', gap: '1rem', padding: '0.5rem 0.75rem', background: '#f9fafb', borderRadius: '0.375rem', marginBottom: '0.25rem' }}>
                    {['Name', 'Email', 'Role', 'Status', 'Last Login', ''].map(h => (
                      <span key={h} style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</span>
                    ))}
                  </div>
                  {teamMembers.map((u, i) => (
                    <div key={u.id} style={{
                      display: 'grid', gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr auto',
                      gap: '1rem', alignItems: 'center',
                      padding: '0.75rem',
                      borderBottom: i < teamMembers.length - 1 ? '1px solid #f3f4f6' : 'none'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8942e', fontWeight: 700, fontSize: '0.65rem', flexShrink: 0 }}>
                          {u.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111' }}>{u.name}</span>
                      </div>
                      <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>{u.email}</span>
                      <span className={`badge ${roleConfig[u.role] || 'badge-gray'}`} style={{ fontSize: '0.72rem' }}>{u.role}</span>
                      <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>{u.status}</span>
                      <span style={{ fontSize: '0.78rem', color: '#6b7280' }}>{u.lastLogin}</span>
                      <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button className="btn-ghost" style={{ padding: '0.25rem' }}><Edit size={13} style={{ color: '#6b7280' }} /></button>
                        {u.role !== 'Super Admin' && <button className="btn-ghost" style={{ padding: '0.25rem' }}><Trash2 size={13} style={{ color: '#ef4444' }} /></button>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Role Permissions" />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.75rem' }}>
                  {[
                    { role: 'Super Admin', cls: 'badge-gold',  perms: ['Full system access', 'User management', 'All modules', 'API access', 'Data export', 'Settings'] },
                    { role: 'Admin',       cls: 'badge-blue',  perms: ['All modules', 'Reports', 'Data export', 'Email campaigns', 'Settings (limited)'] },
                    { role: 'Recruiter',   cls: 'badge-green', perms: ['Candidates', 'Clients', 'Vacancies', 'Matching', 'Email (own)', 'Activity log'] },
                    { role: 'Read Only',   cls: 'badge-gray',  perms: ['View candidates', 'View clients', 'View vacancies', 'View reports'] },
                  ].map(r => (
                    <div key={r.role} style={{ padding: '0.875rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                      <span className={`badge ${r.cls}`} style={{ fontSize: '0.72rem', marginBottom: '0.625rem', display: 'inline-flex' }}>{r.role}</span>
                      <ul style={{ margin: 0, padding: '0 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        {r.perms.map(p => <li key={p} style={{ fontSize: '0.78rem', color: '#374151' }}>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── Certificates ── */}
          {activeSection === 'certificates' && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionHeader title="Certificate Library" subtitle={`${certificates.length} certificates configured`} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {certificates.map((cert, i) => (
                  <div key={cert.id} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.7rem 0',
                    borderBottom: i < certificates.length - 1 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div style={{ width: 32, height: 32, borderRadius: '0.375rem', background: '#fdfaf3', border: '1px solid #e9d98a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Award size={14} style={{ color: '#b8942e' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{cert.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.1rem' }}>{cert.description}</div>
                    </div>
                    <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem', background: '#fdfaf3', border: '1px solid #e9d98a', borderRadius: '0.375rem', color: '#92400e', fontWeight: 600, flexShrink: 0 }}>{cert.category}</span>
                    <button className="btn-ghost" style={{ padding: '0.25rem', flexShrink: 0 }} onClick={() => setCertificates(prev => prev.filter(c => c.id !== cert.id))}>
                      <Trash2 size={13} style={{ color: '#ef4444' }} />
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ margin: '0 0 0.75rem', fontSize: '0.78rem', fontWeight: 700, color: '#374151' }}>Add New Certificate</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr auto', gap: '0.625rem', alignItems: 'flex-end' }}>
                  <FormField label="Name"><input className="input" style={{ fontSize: '0.82rem' }} placeholder="e.g. SMSTS" value={newCertName} onChange={e => setNewCertName(e.target.value)} /></FormField>
                  <FormField label="Category">
                    <select className="input" style={{ fontSize: '0.82rem' }} value={newCertCategory} onChange={e => setNewCertCategory(e.target.value)}>
                      {['Site Management','CSCS','Health & Safety','First Aid','Professional','Project Management','Plant','Electrical','MEP'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </FormField>
                  <FormField label="Description"><input className="input" style={{ fontSize: '0.82rem' }} placeholder="Short description..." value={newCertDesc} onChange={e => setNewCertDesc(e.target.value)} /></FormField>
                  <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => {
                    if (!newCertName.trim()) return
                    setCertificates(prev => [...prev, { id: Date.now(), name: newCertName.trim(), category: newCertCategory, description: newCertDesc.trim() }])
                    setNewCertName(''); setNewCertDesc('')
                  }}><Plus size={13} />Add</button>
                </div>
              </div>
            </div>
          )}

          {/* ── Email / SMTP ── */}
          {activeSection === 'email' && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionHeader title="Email / SMTP" subtitle="Configure your email delivery provider" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                <div style={{ gridColumn: '1/-1' }}>
                  <FormField label="Email Provider">
                    <select className="input" style={{ fontSize: '0.82rem' }}>
                      <option>Mailgun (Recommended)</option>
                      <option>SendGrid</option>
                      <option>Custom SMTP</option>
                    </select>
                  </FormField>
                </div>
                {[
                  { label: 'Mailgun API Key',          placeholder: 'key-••••••••••••••••••••••', type: 'password', defaultVal: 'key-demo' },
                  { label: 'Mailgun Domain',            placeholder: 'mail.backfill.co',         type: 'text',     defaultVal: 'mail.backfill.co' },
                  { label: 'From Name',                 placeholder: 'Backfill Recruitment',     type: 'text',     defaultVal: 'Backfill Recruitment' },
                  { label: 'From Email',                placeholder: 'noreply@backfill.co',      type: 'email',    defaultVal: 'noreply@backfill.co' },
                  { label: 'Reply-To Email',            placeholder: 'recruiter@backfill.co',    type: 'email',    defaultVal: 'recruiter@backfill.co' },
                  { label: 'Max Recipients / Campaign', placeholder: '500',                      type: 'number',   defaultVal: '500' },
                ].map(f => (
                  <FormField key={f.label} label={f.label}>
                    <input className="input" style={{ fontSize: '0.82rem' }} type={f.type} placeholder={f.placeholder} defaultValue={f.defaultVal} />
                  </FormField>
                ))}
              </div>
              <div style={{ padding: '0.75rem 1rem', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', marginTop: '1rem', fontSize: '0.78rem', color: '#15803d' }}>
                Open/click tracking available when Mailgun is connected. Unsubscribe links are auto-appended to all campaigns.
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem' }}>
                <button className="btn-secondary" style={{ fontSize: '0.82rem' }}>Send Test Email</button>
                <button className="btn-primary" style={{ fontSize: '0.82rem' }}><Save size={13} />Save Settings</button>
              </div>
            </div>
          )}

          {/* ── Security ── */}
          {activeSection === 'security' && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionHeader title="Security" subtitle="Manage access controls and compliance settings" />
              {[
                { label: 'Two-Factor Authentication', desc: 'Require 2FA for all users',                 enabled: true },
                { label: 'Session Timeout',           desc: 'Auto-logout after 4 hours of inactivity',  enabled: true },
                { label: 'IP Whitelist',              desc: 'Restrict access to approved IP addresses', enabled: false },
                { label: 'Audit Log',                 desc: 'Record all user actions for compliance',   enabled: true },
                { label: 'GDPR Mode',                 desc: 'Enforce GDPR data handling rules',         enabled: true },
              ].map(s => (
                <SettingRow key={s.label} label={s.label} desc={s.desc}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span className={`badge ${s.enabled ? 'badge-green' : 'badge-gray'}`} style={{ fontSize: '0.72rem' }}>{s.enabled ? 'Enabled' : 'Disabled'}</span>
                    <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}>Configure</button>
                  </div>
                </SettingRow>
              ))}
            </div>
          )}

          {/* ── Integrations ── */}
          {activeSection === 'integrations' && (
            <>
              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Connected Integrations" subtitle="Third-party services connected to your CRM" />
                {[
                  { name: 'Mailgun (Email)',    status: 'connected',    desc: 'SMTP email delivery service' },
                  { name: 'Google Maps API',    status: 'disconnected', desc: 'Geo-mapping and radius search' },
                  { name: 'LinkedIn Recruiter', status: 'connected',    desc: 'Import candidates from LinkedIn' },
                  { name: 'Indeed API',         status: 'disconnected', desc: 'Job posting and applications' },
                  { name: 'CV-Library API',     status: 'disconnected', desc: 'CV search and candidate import' },
                ].map(int => (
                  <SettingRow key={int.name} label={int.name} desc={int.desc}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <span className={`badge ${int.status === 'connected' ? 'badge-green' : 'badge-gray'}`} style={{ fontSize: '0.72rem' }}>{int.status}</span>
                      <button className={int.status === 'connected' ? 'btn-secondary' : 'btn-primary'} style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}>
                        {int.status === 'connected' ? 'Configure' : 'Connect'}
                      </button>
                    </div>
                  </SettingRow>
                ))}
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Google Maps API Key" subtitle="Required for the Geo Mapping module" />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input className="input" style={{ fontSize: '0.82rem' }} type="password" placeholder="AIza..." defaultValue="AIzaSyDev••••••••••••" />
                  <button className="btn-primary" style={{ fontSize: '0.82rem', flexShrink: 0 }}><Save size={13} />Save</button>
                </div>
              </div>
            </>
          )}

          {/* ── Data & Import ── */}
          {activeSection === 'data' && (
            <>
              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Data Import" subtitle="Upload CSV files to bulk-import records" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { label: 'Import Candidates',      desc: 'Upload CSV with candidate data',    icon: Users },
                    { label: 'Import Clients',         desc: 'Upload CSV with company data',      icon: Database },
                    { label: 'Import Vacancies',       desc: 'Upload CSV with job data',          icon: RefreshCw },
                    { label: 'Import from LinkedIn',   desc: 'Bulk import from LinkedIn export',  icon: Upload },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '1rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '0.5rem', background: '#fdfaf3', border: '1px solid #e9d98a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <item.icon size={16} style={{ color: '#b8942e' }} />
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{item.label}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{item.desc}</div>
                      <button className="btn-secondary" style={{ fontSize: '0.78rem', alignSelf: 'flex-start' }}><Upload size={12} />Upload CSV</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Data Export" subtitle="Download your CRM data as CSV files" />
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['All Candidates', 'All Clients', 'All Vacancies', 'Activity Log', 'Placements Report'].map(e => (
                    <button key={e} className="btn-secondary" style={{ fontSize: '0.78rem' }}><Database size={12} />Export {e}</button>
                  ))}
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <SectionHeader title="Backup" action={<span className="badge badge-green" style={{ fontSize: '0.72rem' }}>Auto-backup On</span>} />
                {[
                  { label: 'Last backup',        value: '08 Jun 2025, 03:00 AM' },
                  { label: 'Backup frequency',   value: 'Daily at 3:00 AM' },
                  { label: 'Retention period',   value: '30 days' },
                ].map(r => (
                  <SettingRow key={r.label} label={r.label}>
                    <span style={{ fontSize: '0.82rem', color: '#374151', fontWeight: 600 }}>{r.value}</span>
                  </SettingRow>
                ))}
                <button className="btn-secondary" style={{ fontSize: '0.82rem', marginTop: '1rem' }}><RefreshCw size={13} />Run Manual Backup</button>
              </div>
            </>
          )}

          {/* ── Notifications ── */}
          {activeSection === 'notifications' && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionHeader title="Notification Preferences" subtitle="Choose how you receive alerts and updates" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem 1.5rem', alignItems: 'center', marginBottom: '0.5rem', padding: '0 0 0.5rem', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Event</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>In-App</span>
              </div>
              {[
                { label: 'New candidate registration',    email: true,  inApp: true },
                { label: 'Vacancy application received',  email: true,  inApp: true },
                { label: 'Interview scheduled',           email: true,  inApp: true },
                { label: 'Placement confirmed',           email: true,  inApp: true },
                { label: 'Email campaign results',        email: false, inApp: true },
                { label: 'Weekly summary report',         email: true,  inApp: false },
                { label: 'System alerts',                 email: true,  inApp: true },
              ].map(n => (
                <div key={n.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem 1.5rem', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ fontSize: '0.85rem', color: '#111', fontWeight: 500 }}>{n.label}</span>
                  <input type="checkbox" defaultChecked={n.email} style={{ accentColor: '#b8942e', width: 15, height: 15 }} />
                  <input type="checkbox" defaultChecked={n.inApp} style={{ accentColor: '#b8942e', width: 15, height: 15 }} />
                </div>
              ))}
              <button className="btn-primary" style={{ fontSize: '0.82rem', marginTop: '1.25rem' }}><Save size={13} />Save Preferences</button>
            </div>
          )}

          {/* ── API & Keys ── */}
          {activeSection === 'api' && (
            <div className="card" style={{ padding: '1.25rem' }}>
              <SectionHeader
                title="API Keys"
                subtitle="Manage API keys for external integrations"
                action={<button className="btn-primary" style={{ fontSize: '0.82rem' }}><Plus size={13} />Generate New Key</button>}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { name: 'Production API Key',  key: 'bck_live_••••••••••••••••••••••••••••••', created: '15 Jan 2024', lastUsed: '08 Jun 2025' },
                  { name: 'Development API Key', key: 'bck_test_••••••••••••••••••••••••••••••', created: '01 Jun 2024', lastUsed: '05 Jun 2025' },
                ].map(k => (
                  <div key={k.name} style={{ padding: '1rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#111' }}>{k.name}</span>
                      <div style={{ display: 'flex', gap: '0.375rem' }}>
                        <button className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}>Copy</button>
                        <button className="btn-ghost" style={{ padding: '0.3rem' }}><Trash2 size={13} style={{ color: '#ef4444' }} /></button>
                      </div>
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#e2e8f0', background: '#1a1a2e', padding: '0.55rem 0.875rem', borderRadius: '0.375rem', marginBottom: '0.625rem' }}>{k.key}</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Created: {k.created}</span>
                      <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Last used: {k.lastUsed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Invite user modal */}
      {showAddUser && (
        <div className="modal-overlay" onClick={() => setShowAddUser(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#111' }}>Invite Team Member</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowAddUser(false)}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <FormField label="First Name"><input className="input" style={{ fontSize: '0.82rem' }} placeholder="John" /></FormField>
                <FormField label="Last Name"><input className="input" style={{ fontSize: '0.82rem' }} placeholder="Smith" /></FormField>
              </div>
              <FormField label="Email Address"><input className="input" style={{ fontSize: '0.82rem' }} type="email" placeholder="john.smith@backfill.co" /></FormField>
              <FormField label="Role">
                <select className="input" style={{ fontSize: '0.82rem' }}>
                  <option>Recruiter</option>
                  <option>Admin</option>
                  <option>Read Only</option>
                </select>
              </FormField>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button className="btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddUser(false)}>Cancel</button>
              <button className="btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => setShowAddUser(false)}>Send Invite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
