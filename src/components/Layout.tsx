import { useState } from 'react'
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom'
import {
  LayoutDashboard, Users, Briefcase, FolderKanban, Building2,
  Zap, MapPin, Mail, Settings, FileText, Phone,
  LogOut, Menu, Globe, ChevronDown, UserCheck, List, PlusCircle,
  KeyRound
} from 'lucide-react'
import logo from '../assets/logo_updated.png'
import { useAuth } from '../context/useAuth'

const navItems = [
  { to: '/admin',       icon: LayoutDashboard, label: 'Dashboard' },
  {
    to: '/admin/candidates', icon: Users,            label: 'Candidates',
    children: [
      { to: '/admin/candidates',                label: 'All Candidates',      icon: Users },
      { to: '/admin/candidates?pool=qualified', label: 'Ready to Work',        icon: UserCheck },
      { to: '/admin/candidates?pool=placed',    label: 'Work Assigned Already', icon: UserCheck },
    ],
  },
  {
    to: '/admin/vacancies',  icon: Briefcase,        label: 'Job Portal',
    children: [
      { to: '/admin/vacancies',     label: 'All Jobs Posted', icon: List },
      { to: '/admin/vacancies/new', label: 'Post New Job',  icon: PlusCircle },
    ],
  },
  { to: '/admin/cvs',         icon: FileText,         label: 'CVs' },
  { to: '/admin/projects',    icon: FolderKanban,     label: 'Projects' },
  { to: '/admin/clients',     icon: Building2,        label: 'Clients' },
  { to: '/admin/matching',    icon: Zap,              label: 'Matching' },
  { to: '/admin/geo-mapping', icon: MapPin,           label: 'Geo Mapping' },
  { to: '/admin/email',       icon: Mail,             label: 'Mass Email' },
  { to: '/admin/call-logs',   icon: Phone,            label: 'Call Logs' },
]

export default function Layout() {
  const { logout, user, changePassword } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ '/admin/candidates': true, '/admin/vacancies': false })
  const location = useLocation()

  // Change Password Modal States
  const [passwordModalOpen, setPasswordModalOpen] = useState(false)
  const [currentPwd, setCurrentPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [pwdError, setPwdError] = useState('')
  const [pwdSuccess, setPwdSuccess] = useState('')
  const [pwdSubmitting, setPwdSubmitting] = useState(false)

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'SA'

  function toggleExpand(to: string) {
    setExpanded(prev => ({ ...prev, [to]: !prev[to] }))
  }

  function closePasswordModal() {
    setPasswordModalOpen(false)
    setCurrentPwd('')
    setNewPwd('')
    setConfirmPwd('')
    setPwdError('')
    setPwdSuccess('')
  }

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPwdError('')
    setPwdSuccess('')

    if (newPwd.length < 6) {
      setPwdError('New password must be at least 6 characters.')
      return
    }

    if (newPwd !== confirmPwd) {
      setPwdError('New passwords do not match.')
      return
    }

    setPwdSubmitting(true)
    try {
      const msg = await changePassword(currentPwd, newPwd)
      setPwdSuccess(msg || 'Password updated successfully!')
      setTimeout(() => {
        closePasswordModal()
      }, 1500)
    } catch (err) {
      setPwdError(err instanceof Error ? err.message : 'Failed to update password.')
    } finally {
      setPwdSubmitting(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}>
      {/* Top Header Bar */}
      <header style={{
        height: '72px',
        background: '#fbfaf6',
        borderBottom: '1px solid rgba(184,148,46,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 12px rgba(18, 26, 41, 0.05)',
      }}>
        {/* Left: Hamburger (mobile) + Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Hamburger button (visible on mobile, hidden on desktop via CSS) */}
          <button 
            className="btn-ghost mobile-menu-btn" 
            style={{ padding: '0.4rem', display: 'none', alignItems: 'center' }} 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={20} />
          </button>
          
          <Link to="/admin" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Backfill CRM" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Center: Desktop Nav Menu */}
        <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {navItems.map(({ to, icon: Icon, label, children }) => {
            const isActive = location.pathname.startsWith(to)
            
            if (!children) {
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `header-nav-link${isActive ? ' active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </NavLink>
              )
            }

            return (
              <div key={to} className="header-dropdown-container">
                <button
                  className={`header-nav-link${isActive ? ' active' : ''}`}
                  style={{ gap: '0.35rem' }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  <ChevronDown size={12} style={{ opacity: 0.7 }} />
                </button>
                <div className="header-dropdown-menu">
                  {children.map(child => {
                    const childActive = location.pathname + location.search === child.to ||
                      (child.to === to && !location.search)
                    return (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`header-dropdown-item${childActive ? ' active' : ''}`}
                      >
                        <child.icon size={14} />
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>

        {/* Right: Settings, Web Preview, User Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Desktop System Buttons */}
          <div className="desktop-system-buttons" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) => `btn-ghost${isActive ? ' active' : ''}`}
              title="Settings"
              style={{ padding: '0.5rem' }}
            >
              <Settings size={18} />
            </NavLink>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              title="Website Preview"
              style={{ padding: '0.5rem' }}
            >
              <Globe size={18} />
            </a>
          </div>

          {/* User Profile dropdown */}
          <div className="header-dropdown-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <div style={{ 
                width: 34, 
                height: 34, 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #b8942e, #d4af5a)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#fff', 
                fontWeight: 700, 
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(184,148,46,0.25)'
              }}>{initials}</div>
              <ChevronDown size={12} style={{ color: '#475569' }} />
            </div>
            
            <div className="header-dropdown-menu" style={{ right: 0, left: 'auto', transform: 'translateY(4px)' }}>
              <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid #f1f5f9', marginBottom: '0.25rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>{user?.name || 'Super Admin'}</div>
              </div>
              <Link to="/admin/settings" className="header-dropdown-item">
                <Settings size={14} />
                Settings
              </Link>
              <a href="/" target="_blank" rel="noopener noreferrer" className="header-dropdown-item">
                <Globe size={14} />
                Website Preview
              </a>
              <button 
                onClick={() => setPasswordModalOpen(true)}
                className="header-dropdown-item"
                style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}
              >
                <KeyRound size={14} />
                Change Password
              </button>
              <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '0.25rem', paddingTop: '0.25rem' }}>
                <button 
                  onClick={logout}
                  className="header-dropdown-item" 
                  style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side-Drawer Menu */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={logo} alt="Backfill CRM" style={{ height: '32px', width: 'auto' }} />
              <button 
                onClick={() => setMobileOpen(false)} 
                style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '1.2rem' }}
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav Link List */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '1rem 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navItems.map(({ to, icon: Icon, label, children }) => {
                  const isActive = location.pathname.startsWith(to)
                  const isOpen = expanded[to]

                  if (!children) {
                    return (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                      >
                        <Icon size={17} style={{ flexShrink: 0 }} />
                        <span>{label}</span>
                      </NavLink>
                    )
                  }

                  return (
                    <div key={to}>
                      <button
                        onClick={() => toggleExpand(to)}
                        className={`sidebar-link${isActive ? ' active' : ''}`}
                        style={{ width: '100%', border: 'none', cursor: 'pointer', justifyContent: 'space-between' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <Icon size={17} style={{ flexShrink: 0 }} />
                          <span>{label}</span>
                        </div>
                        <ChevronDown
                          size={13}
                          style={{
                            color: isActive ? '#b8942e' : '#ffffff',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s',
                          }}
                        />
                      </button>

                      {isOpen && (
                        <div style={{ marginTop: '2px', marginBottom: '2px', paddingLeft: '0.85rem' }}>
                          <div style={{ borderLeft: '1px solid rgba(184,148,46,0.2)', paddingLeft: '0.65rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {children.map(child => {
                              const childActive = location.pathname + location.search === child.to ||
                                (child.to === to && !location.search)
                              return (
                                <Link
                                  key={child.to}
                                  to={child.to}
                                  onClick={() => setMobileOpen(false)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.42rem 0.6rem',
                                    borderRadius: '0.4rem',
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    fontWeight: childActive ? 700 : 500,
                                    color: childActive ? '#b8942e' : '#ffffff',
                                    background: childActive ? 'rgba(184,148,46,0.1)' : 'transparent',
                                  }}
                                >
                                  <child.icon size={13} />
                                  {child.label}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '1rem 0' }} />

              {/* System and profile items on mobile */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <NavLink
                  to="/admin/settings"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                >
                  <Settings size={17} />
                  <span>Settings</span>
                </NavLink>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                >
                  <Globe size={17} />
                  <span>Website Preview</span>
                </a>
              </div>
            </nav>

            {/* Mobile Profile Footer */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #d6b15a, #a47b19)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#122031', fontWeight: 800, fontSize: '1rem' }}>{initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user?.name || 'Super Admin'}</div>
              </div>
              <LogOut size={16} style={{ color: '#ffffff', cursor: 'pointer' }} onClick={logout} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main style={{ flex: 1, overflow: 'auto', padding: '2rem 1.5rem', background: '#f8f9fc' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
          <Outlet />
        </div>
      </main>

      {/* Change Password Modal */}
      {passwordModalOpen && (
        <div className="modal-overlay" style={{ zIndex: 100 }}>
          <div className="modal" style={{ maxWidth: '420px', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#000', margin: 0 }}>Change Password</h3>
              <button 
                onClick={closePasswordModal}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            {pwdError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '0.75rem',
                marginBottom: '1rem',
                color: '#b91c1c',
                fontSize: '0.85rem'
              }}>
                <span>{pwdError}</span>
              </div>
            )}

            {pwdSuccess && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '8px',
                padding: '0.75rem',
                marginBottom: '1rem',
                color: '#166534',
                fontSize: '0.85rem'
              }}>
                <span>{pwdSuccess}</span>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem' }}>Current Password</label>
                <input
                  type="password"
                  className="input"
                  value={currentPwd}
                  onChange={e => setCurrentPwd(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem' }}>New Password</label>
                <input
                  type="password"
                  className="input"
                  value={newPwd}
                  onChange={e => setNewPwd(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.75rem' }}>Confirm New Password</label>
                <input
                  type="password"
                  className="input"
                  value={confirmPwd}
                  onChange={e => setConfirmPwd(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={closePasswordModal}
                  disabled={pwdSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={pwdSubmitting}
                >
                  {pwdSubmitting ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
