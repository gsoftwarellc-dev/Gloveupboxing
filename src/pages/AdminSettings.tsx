import { useState } from 'react'
import { Users, Shield, Database, Bell, Globe, Key, Plus, Trash2, Edit, Save, Upload, RefreshCw, Award, Mail } from 'lucide-react'

const settingsSections = [
  { key: 'users', label: 'Users & Roles', icon: Users },
  { key: 'certificates', label: 'Certificates', icon: Award },
  { key: 'email', label: 'Email / SMTP', icon: Mail },
  { key: 'security', label: 'Security', icon: Shield },
  { key: 'integrations', label: 'Integrations', icon: Globe },
  { key: 'data', label: 'Data & Import', icon: Database },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'api', label: 'API & Keys', icon: Key },
]

const defaultCertificates = [
  { id: 1, name: 'SMSTS', category: 'Site Management', description: 'Site Management Safety Training Scheme' },
  { id: 2, name: 'CSCS Gold Card', category: 'CSCS', description: 'Construction Skills Certification Scheme — Supervisory' },
  { id: 3, name: 'CSCS Black Card', category: 'CSCS', description: 'Construction Skills Certification Scheme — Manager' },
  { id: 4, name: 'CSCS Blue Card', category: 'CSCS', description: 'Construction Skills Certification Scheme — Skilled Worker' },
  { id: 5, name: 'NEBOSH Diploma', category: 'Health & Safety', description: 'National Examination Board in Occupational Safety & Health' },
  { id: 6, name: 'IOSH Managing Safely', category: 'Health & Safety', description: 'Institution of Occupational Safety and Health' },
  { id: 7, name: 'First Aid at Work', category: 'First Aid', description: '3-day HSE First Aid certificate' },
  { id: 8, name: 'MRICS', category: 'Professional', description: 'Membership of the Royal Institution of Chartered Surveyors' },
  { id: 9, name: 'IStructE Chartership', category: 'Professional', description: 'Institution of Structural Engineers' },
  { id: 10, name: 'PMP', category: 'Project Management', description: 'Project Management Professional' },
  { id: 11, name: 'PRINCE2 Practitioner', category: 'Project Management', description: 'Projects IN Controlled Environments' },
  { id: 12, name: 'CPCS Appointed Person', category: 'Plant', description: 'Construction Plant Competence Scheme' },
  { id: 13, name: 'NPORS', category: 'Plant', description: 'National Plant Operators Registration Scheme' },
  { id: 14, name: 'ECS Gold Card', category: 'Electrical', description: 'Electrotechnical Certification Scheme — Approved Electrician' },
  { id: 15, name: 'CIBSE Membership', category: 'MEP', description: 'Chartered Institution of Building Services Engineers' },
]

const teamMembers = [
  { id: 1, name: 'Super Admin', email: 'admin@backfill.co', role: 'Super Admin', status: 'active', lastLogin: '2025-06-08' },
  { id: 2, name: 'Tom Bradley', email: 'tom@backfill.co', role: 'Recruiter', status: 'active', lastLogin: '2025-06-08' },
  { id: 3, name: 'Emma Clarke', email: 'emma@backfill.co', role: 'Recruiter', status: 'active', lastLogin: '2025-06-07' },
  { id: 4, name: 'Mark Richards', email: 'mark@backfill.co', role: 'Recruiter', status: 'active', lastLogin: '2025-06-06' },
  { id: 5, name: 'Priya Sharma', email: 'priya@backfill.co', role: 'Recruiter', status: 'active', lastLogin: '2025-06-05' },
  { id: 6, name: 'Sales Manager', email: 'sales@backfill.co', role: 'Admin', status: 'active', lastLogin: '2025-06-04' },
]

const roleConfig: Record<string, string> = {
  'Super Admin': 'badge-gold',
  'Admin': 'badge-blue',
  'Recruiter': 'badge-green',
  'Read Only': 'badge-gray',
}

export default function AdminSettings() {
  const [activeSection, setActiveSection] = useState('users')
  const [showAddUser, setShowAddUser] = useState(false)
  const [certificates, setCertificates] = useState(defaultCertificates)
  const [newCertName, setNewCertName] = useState('')
  const [newCertCategory, setNewCertCategory] = useState('Site Management')
  const [newCertDesc, setNewCertDesc] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h1 className="page-title">Admin Settings</h1>
        <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>Manage your CRM configuration, users, and integrations</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1.25rem', alignItems: 'start' }}>
        {/* Sidebar nav */}
        <div className="card" style={{ padding: '0.5rem' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {settingsSections.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`sidebar-link${activeSection === s.key ? ' active' : ''}`}
              >
                <s.icon size={16} />
                <span>{s.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div>
          {activeSection === 'users' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div>
                    <h2 className="section-title">Team Members</h2>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '1.05rem', color: '#000000' }}>{teamMembers.length} users</p>
                  </div>
                  <button className="btn-primary" onClick={() => setShowAddUser(true)}><Plus size={14} />Invite User</button>
                </div>
                <table className="data-table">
                  <thead>
                    <tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Last Login</th><th></th></tr>
                  </thead>
                  <tbody>
                    {teamMembers.map(u => (
                      <tr key={u.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#b8942e,#8a6e1e)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111', fontWeight: 700, fontSize: '1.05rem', flexShrink: 0 }}>
                              {u.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                            </div>
                            <span style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{u.name}</span>
                          </div>
                        </td>
                        <td style={{ fontSize: '1.05rem', color: '#000000' }}>{u.email}</td>
                        <td><span className={`badge ${roleConfig[u.role] || 'badge-gray'}`}>{u.role}</span></td>
                        <td><span className="badge badge-green">{u.status}</span></td>
                        <td style={{ fontSize: '1.05rem', color: '#000000' }}>{u.lastLogin}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.375rem' }}>
                            <button className="btn-ghost" style={{ padding: '0.3rem' }}><Edit size={14} /></button>
                            {u.role !== 'Super Admin' && <button className="btn-ghost" style={{ padding: '0.3rem', color: '#f87171' }}><Trash2 size={14} /></button>}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Role Permissions */}
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Role Permissions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.875rem' }}>
                  {[
                    { role: 'Super Admin', color: '#b8942e', perms: ['Full system access', 'User management', 'All modules', 'API access', 'Data export', 'Settings'] },
                    { role: 'Admin', color: '#60a5fa', perms: ['All modules', 'Reports', 'Data export', 'Email campaigns', 'Settings (limited)'] },
                    { role: 'Recruiter', color: '#34d399', perms: ['Candidates', 'Clients', 'Vacancies', 'Matching', 'Email (own)', 'Activity log'] },
                    { role: 'Read Only', color: '#000000', perms: ['View candidates', 'View clients', 'View vacancies', 'View reports'] },
                  ].map(r => (
                    <div key={r.role} style={{ padding: '1rem', background: '#f8f9fb', borderRadius: '0.625rem', border: `1px solid ${r.color}30` }}>
                      <div style={{ fontWeight: 700, color: r.color, marginBottom: '0.625rem', fontSize: '1.05rem' }}>{r.role}</div>
                      <ul style={{ margin: 0, padding: '0 0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {r.perms.map(p => <li key={p} style={{ fontSize: '1.05rem', color: '#000000' }}>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'certificates' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div>
                    <h2 className="section-title">Certificate Library</h2>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '1.05rem', color: '#000000' }}>{certificates.length} certificates configured</p>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {certificates.map(cert => (
                    <div key={cert.id} style={{ padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.625rem', border: '1px solid #e8eaf0', display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                      <Award size={16} style={{ color: '#b8942e', marginTop: '2px', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.05rem' }}>{cert.name}</div>
                        <div style={{ fontSize: '0.85rem', color: '#000000', marginTop: '0.15rem' }}>{cert.description}</div>
                        <span className="badge badge-gold" style={{ marginTop: '0.35rem' }}>{cert.category}</span>
                      </div>
                      <button className="btn-ghost" style={{ padding: '0.25rem', color: '#f87171', flexShrink: 0 }} onClick={() => setCertificates(prev => prev.filter(c => c.id !== cert.id))}><Trash2 size={13} /></button>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #e8eaf0', paddingTop: '1.25rem' }}>
                  <h3 className="section-title" style={{ marginBottom: '0.875rem', fontSize: '1.05rem' }}>Add New Certificate</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr auto', gap: '0.75rem', alignItems: 'flex-end' }}>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Certificate Name</label>
                      <input className="input" placeholder="e.g. SMSTS" value={newCertName} onChange={e => setNewCertName(e.target.value)} />
                    </div>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Category</label>
                      <select className="input" value={newCertCategory} onChange={e => setNewCertCategory(e.target.value)}>
                        {['Site Management', 'CSCS', 'Health & Safety', 'First Aid', 'Professional', 'Project Management', 'Plant', 'Electrical', 'MEP'].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Description</label>
                      <input className="input" placeholder="Short description..." value={newCertDesc} onChange={e => setNewCertDesc(e.target.value)} />
                    </div>
                    <button className="btn-primary" onClick={() => {
                      if (!newCertName.trim()) return
                      setCertificates(prev => [...prev, { id: Date.now(), name: newCertName.trim(), category: newCertCategory, description: newCertDesc.trim() }])
                      setNewCertName(''); setNewCertDesc('')
                    }}><Plus size={14} />Add</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'email' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Email / SMTP Settings</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                  <div style={{ gridColumn: '1/-1' }}>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Provider</label>
                    <select className="input">
                      <option>Mailgun (Recommended)</option>
                      <option>SendGrid</option>
                      <option>Custom SMTP</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Mailgun API Key</label>
                    <input className="input" type="password" placeholder="key-••••••••••••••••••••••••••••••" defaultValue="key-demo" />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Mailgun Domain</label>
                    <input className="input" placeholder="mail.backfill.co" defaultValue="mail.backfill.co" />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>From Name</label>
                    <input className="input" placeholder="Backfill Recruitment" defaultValue="Backfill Recruitment" />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>From Email</label>
                    <input className="input" placeholder="noreply@backfill.co" defaultValue="noreply@backfill.co" />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Reply-To Email</label>
                    <input className="input" placeholder="recruiter@backfill.co" defaultValue="recruiter@backfill.co" />
                  </div>
                  <div>
                    <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Max Recipients / Campaign</label>
                    <input className="input" type="number" defaultValue="500" />
                  </div>
                </div>
                <div style={{ padding: '0.875rem', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.25)', borderRadius: '0.5rem', marginTop: '1rem', fontSize: '1.05rem', color: '#000000' }}>
                  Open/click tracking available when Mailgun is connected. Unsubscribe links are auto-appended to all campaigns.
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                  <button className="btn-secondary">Send Test Email</button>
                  <button className="btn-primary"><Save size={14} />Save Settings</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="card">
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Security Settings</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Two-Factor Authentication', desc: 'Require 2FA for all users', enabled: true },
                  { label: 'Session Timeout', desc: 'Auto-logout after 4 hours of inactivity', enabled: true },
                  { label: 'IP Whitelist', desc: 'Restrict access to approved IPs', enabled: false },
                  { label: 'Audit Log', desc: 'Record all user actions', enabled: true },
                  { label: 'GDPR Mode', desc: 'Enforce GDPR data handling rules', enabled: true },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{s.label}</div>
                      <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{s.desc}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className={`badge ${s.enabled ? 'badge-green' : 'badge-gray'}`}>{s.enabled ? 'On' : 'Off'}</span>
                      <button className="btn-secondary" style={{ padding: '0.3rem 0.625rem', fontSize: '1.05rem' }}>Configure</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'integrations' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Connected Integrations</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    { name: 'Mailgun (Email)', status: 'connected', desc: 'SMTP email delivery service' },
                    { name: 'Google Maps API', status: 'disconnected', desc: 'Geo-mapping and radius search' },
                    { name: 'LinkedIn Recruiter', status: 'connected', desc: 'Import candidates from LinkedIn' },
                    { name: 'Indeed API', status: 'disconnected', desc: 'Job posting and applications' },
                    { name: 'CV-Library API', status: 'disconnected', desc: 'CV search and candidate import' },
                  ].map(integration => (
                    <div key={integration.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{integration.name}</div>
                        <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{integration.desc}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span className={`badge ${integration.status === 'connected' ? 'badge-green' : 'badge-gray'}`}>{integration.status}</span>
                        <button className={integration.status === 'connected' ? 'btn-secondary' : 'btn-primary'} style={{ padding: '0.35rem 0.75rem', fontSize: '1.05rem' }}>
                          {integration.status === 'connected' ? 'Configure' : 'Connect'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Google Maps API Key</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input className="input" type="password" placeholder="AIza..." defaultValue="AIzaSyDev••••••••••••••••" />
                  <button className="btn-primary" style={{ flexShrink: 0 }}><Save size={14} />Save</button>
                </div>
                <p style={{ margin: '0.5rem 0 0', fontSize: '1.05rem', color: '#000000' }}>Required for Geo Mapping module. Get your key from Google Cloud Console.</p>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Data Import</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[
                    { label: 'Import Candidates', desc: 'Upload CSV with candidate data', icon: Users },
                    { label: 'Import Clients', desc: 'Upload CSV with company data', icon: Database },
                    { label: 'Import Vacancies', desc: 'Upload CSV with job data', icon: RefreshCw },
                    { label: 'Import from LinkedIn', desc: 'Bulk import from LinkedIn export', icon: Upload },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '1.25rem', background: '#f8f9fb', borderRadius: '0.625rem', border: '1px solid #e8eaf0' }}>
                      <item.icon size={22} style={{ color: '#b8942e', marginBottom: '0.75rem' }} />
                      <div style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.label}</div>
                      <div style={{ fontSize: '1.05rem', color: '#000000', marginBottom: '0.875rem' }}>{item.desc}</div>
                      <button className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.35rem 0.75rem' }}><Upload size={13} />Upload CSV</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1rem' }}>Data Export</h2>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {['All Candidates', 'All Clients', 'All Vacancies', 'Activity Log', 'Placements Report'].map(e => (
                    <button key={e} className="btn-secondary" style={{ fontSize: '1.05rem' }}><Database size={13} />Export {e}</button>
                  ))}
                </div>
              </div>

              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 className="section-title">Backup Settings</h2>
                  <span className="badge badge-green">Auto-backup: On</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '1.05rem', color: '#000000' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                    <span>Last backup</span><span style={{ color: '#000000' }}>2025-06-08 03:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                    <span>Backup frequency</span><span style={{ color: '#000000' }}>Daily at 3:00 AM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                    <span>Retention period</span><span style={{ color: '#000000' }}>30 days</span>
                  </div>
                </div>
                <button className="btn-secondary" style={{ marginTop: '0.875rem', fontSize: '1.05rem' }}><RefreshCw size={14} />Run Manual Backup</button>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="card">
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Notification Preferences</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'New candidate registration', email: true, inApp: true },
                  { label: 'Vacancy application received', email: true, inApp: true },
                  { label: 'Interview scheduled', email: true, inApp: true },
                  { label: 'Placement confirmed', email: true, inApp: true },
                  { label: 'Email campaign results', email: false, inApp: true },
                  { label: 'Weekly summary report', email: true, inApp: false },
                  { label: 'System alerts', email: true, inApp: true },
                ].map(n => (
                  <div key={n.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                    <span style={{ fontSize: '1.05rem', color: '#000000' }}>{n.label}</span>
                    <div style={{ display: 'flex', gap: '0.875rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000', cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked={n.email} style={{ accentColor: '#b8942e' }} />Email
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.05rem', color: '#000000', cursor: 'pointer' }}>
                        <input type="checkbox" defaultChecked={n.inApp} style={{ accentColor: '#b8942e' }} />In-App
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ marginTop: '1.25rem' }}><Save size={14} />Save Preferences</button>
            </div>
          )}

          {activeSection === 'api' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>API Keys</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { name: 'Production API Key', key: 'bck_live_••••••••••••••••••••••••••••••••', created: '2024-01-15', lastUsed: '2025-06-08' },
                    { name: 'Development API Key', key: 'bck_test_••••••••••••••••••••••••••••••', created: '2024-06-01', lastUsed: '2025-06-05' },
                  ].map(k => (
                    <div key={k.name} style={{ padding: '1rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
                        <span style={{ fontWeight: 600, color: '#000000', fontSize: '1.05rem' }}>{k.name}</span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button className="btn-secondary" style={{ padding: '0.3rem 0.625rem', fontSize: '1.05rem' }}>Copy</button>
                          <button className="btn-ghost" style={{ padding: '0.3rem', color: '#f87171' }}><Trash2 size={14} /></button>
                        </div>
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: '1.05rem', color: '#000000', background: '#111', padding: '0.5rem 0.75rem', borderRadius: '4px', marginBottom: '0.5rem' }}>{k.key}</div>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.05rem', color: '#000000' }}>
                        <span>Created: {k.created}</span>
                        <span>Last used: {k.lastUsed}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-primary" style={{ marginTop: '1rem' }}><Plus size={14} />Generate New Key</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showAddUser && (
        <div className="modal-overlay" onClick={() => setShowAddUser(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h2 className="section-title">Invite Team Member</h2>
              <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={() => setShowAddUser(false)}>✕</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>First Name</label>
                  <input className="input" placeholder="John" />
                </div>
                <div>
                  <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Last Name</label>
                  <input className="input" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
                <input className="input" type="email" placeholder="john.smith@backfill.co" />
              </div>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Role</label>
                <select className="input">
                  <option>Recruiter</option><option>Admin</option><option>Read Only</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
              <button className="btn-secondary" onClick={() => setShowAddUser(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowAddUser(false)}>Send Invite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
