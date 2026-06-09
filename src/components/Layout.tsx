import { useState } from 'react'
import { Outlet, NavLink, useLocation, Link } from 'react-router-dom'
import {
  LayoutDashboard, Users, Building2, Briefcase, FolderKanban,
  Zap, MapPin, Mail, Activity, Settings, ChevronLeft, ChevronRight,
  Search, LogOut, Menu, BarChart2, Globe, ChevronDown, UserCheck, List, PlusCircle
} from 'lucide-react'
import logo from '../assets/logo-sidebar.png'

const navItems = [
  { to: '/dashboard',   icon: LayoutDashboard, label: 'Dashboard' },
  {
    to: '/candidates',  icon: Users,            label: 'Candidates',
    children: [
      { to: '/candidates',                label: 'All Candidates',      icon: Users },
      { to: '/candidates?pool=qualified', label: 'Ready to Work',        icon: UserCheck },
      { to: '/candidates?pool=placed',    label: 'Work Assigned Already', icon: UserCheck },
    ],
  },
  { to: '/clients',     icon: Building2,        label: 'Clients' },
  {
    to: '/vacancies',   icon: Briefcase,        label: 'Job Portal',
    children: [
      { to: '/vacancies',     label: 'All Jobs Posted', icon: List },
      { to: '/vacancies/new', label: 'Post New Job',  icon: PlusCircle },
    ],
  },
  { to: '/projects',    icon: FolderKanban,     label: 'Projects' },
  { to: '/matching',    icon: Zap,              label: 'Matching' },
  { to: '/geo-mapping', icon: MapPin,           label: 'Geo Mapping' },
  { to: '/email',       icon: Mail,             label: 'Mass Email' },
  { to: '/activity',    icon: Activity,         label: 'Activity' },
  { to: '/reports',     icon: BarChart2,        label: 'Reports' },
]

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ '/candidates': true, '/vacancies': false })
  const location = useLocation()

  const currentPage = navItems.find(n => location.pathname.startsWith(n.to))?.label || 'CRM'

  function toggleExpand(to: string) {
    setExpanded(prev => ({ ...prev, [to]: !prev[to] }))
  }

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 40 }} />
      )}

      {/* Sidebar */}
      <aside style={{
        width: collapsed ? '64px' : '230px',
        minWidth: collapsed ? '64px' : '230px',
        background: 'linear-gradient(180deg, #192235 0%, #121a29 100%)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.2s ease, min-width 0.2s ease',
        position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        zIndex: 45, boxShadow: '8px 0 28px rgba(4, 8, 20, 0.16)',
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          padding: collapsed ? '0 0' : '0 0.75rem 0 1rem',
          borderBottom: '1px solid rgba(184,148,46,0.18)',
          height: '64px', flexShrink: 0,
          background: 'linear-gradient(180deg, #fbfaf6 0%, #f2efe6 100%)',
          boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.65)',
        }}>
          {!collapsed && (
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
              <img src={logo} alt="Backfill CRM" style={{ height: '36px', width: 'auto', objectFit: 'contain', objectPosition: 'left center', maxWidth: '160px', display: 'block' }} />
            </div>
          )}
          {collapsed && (
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,rgba(184,148,46,0.24),rgba(184,148,46,0.08))', borderRadius: '10px', border: '1px solid rgba(184,148,46,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5c842', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0, margin: '0 auto' }}>B</div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{ background: '#ffffff', border: '1px solid rgba(17,24,39,0.12)', color: '#6b7280', borderRadius: '8px', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, marginLeft: collapsed ? 0 : '0.5rem', boxShadow: '0 1px 2px rgba(15, 23, 42, 0.08)' }}
          >
            {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '0.75rem 0.65rem' }}>
          {!collapsed && (
            <p style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.11em', padding: '0.35rem 0.7rem 0.55rem', margin: 0 }}>
              Main Menu
            </p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {navItems.map(({ to, icon: Icon, label, children }) => {
              const isActive = location.pathname.startsWith(to)
              const isOpen = expanded[to]

              if (!children) {
                return (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                    title={collapsed ? label : undefined}
                    style={collapsed ? { justifyContent: 'center', padding: '0.68rem 0' } : {}}
                  >
                    <Icon size={17} style={{ flexShrink: 0 }} />
                    {!collapsed && <span>{label}</span>}
                  </NavLink>
                )
              }

              return (
                <div key={to}>
                  {/* Parent row — clickable to toggle children */}
                  <button
                    onClick={() => !collapsed && toggleExpand(to)}
                    className={`sidebar-link${isActive ? ' active' : ''}`}
                    style={{
                      width: '100%', border: 'none', cursor: 'pointer',
                      justifyContent: collapsed ? 'center' : 'space-between',
                      padding: collapsed ? '0.68rem 0' : undefined,
                    }}
                    title={collapsed ? label : undefined}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Icon size={17} style={{ flexShrink: 0 }} />
                      {!collapsed && <span>{label}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown
                        size={13}
                        style={{
                          color: isActive ? '#b8942e' : '#ffffff',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s',
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </button>

                  {/* Children */}
                  {!collapsed && isOpen && (
                    <div style={{ marginTop: '2px', marginBottom: '2px', paddingLeft: '0.85rem' }}>
                      {/* Vertical guide line */}
                      <div style={{ borderLeft: '1px solid rgba(184,148,46,0.2)', paddingLeft: '0.65rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {children.map(child => {
                          const childActive = location.pathname + location.search === child.to ||
                            (child.to === to && !location.search)
                          return (
                            <Link
                              key={child.to}
                              to={child.to}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.42rem 0.6rem', borderRadius: '0.4rem',
                                textDecoration: 'none', fontSize: '0.8rem',
                                fontWeight: childActive ? 700 : 500,
                                color: childActive ? '#b8942e' : '#ffffff',
                                background: childActive ? 'rgba(184,148,46,0.1)' : 'transparent',
                                transition: 'all 0.15s',
                              }}
                              onMouseEnter={e => {
                                if (!childActive) (e.currentTarget as HTMLElement).style.color = '#ffffff'
                              }}
                              onMouseLeave={e => {
                                if (!childActive) (e.currentTarget as HTMLElement).style.color = '#ffffff'
                              }}
                            >
                              <child.icon size={13} style={{ flexShrink: 0 }} />
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

          {!collapsed && (
            <p style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.11em', padding: '1rem 0.7rem 0.55rem', margin: '0.3rem 0 0' }}>
              System
            </p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: collapsed ? '1rem' : 0 }}>
            <NavLink
              to="/settings"
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
              title={collapsed ? 'Settings' : undefined}
              style={collapsed ? { justifyContent: 'center', padding: '0.68rem 0' } : {}}
            >
              <Settings size={17} style={{ flexShrink: 0 }} />
              {!collapsed && <span>Settings</span>}
            </NavLink>
            <a
              href="/website-preview/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
              title={collapsed ? 'Website Preview' : undefined}
              style={collapsed ? { justifyContent: 'center', padding: '0.68rem 0' } : {}}
            >
              <Globe size={17} style={{ flexShrink: 0 }} />
              {!collapsed && <span>Website Preview</span>}
            </a>
          </div>
        </nav>

        {/* User profile */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: collapsed ? '0.8rem 0' : '0.85rem 0.85rem 0.9rem', display: 'flex', alignItems: 'center', gap: '0.7rem', justifyContent: collapsed ? 'center' : 'flex-start' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #d6b15a, #a47b19)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#122031', fontWeight: 800, fontSize: '1.02rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(184,148,46,0.28)' }}>SA</div>
          {!collapsed && (
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Super Admin</div>
              <div style={{ fontSize: '0.75rem', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>admin@backfill.co</div>
            </div>
          )}
          {!collapsed && <LogOut size={15} style={{ color: '#ffffff', flexShrink: 0, cursor: 'pointer' }} />}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ height: '64px', background: '#F8F7F5', borderBottom: '1px solid #e8eaf0', display: 'flex', alignItems: 'center', padding: '0 1.5rem', gap: '1rem', position: 'sticky', top: 0, zIndex: 30 }}>
          <button className="btn-ghost" style={{ padding: '0.4rem', display: 'flex' }} onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu size={18} />
          </button>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: '#000000' }}>{currentPage}</h1>
          </div>
          <div className="search-bar" style={{ maxWidth: '260px' }}>
            <Search size={15} />
            <input className="input" placeholder="Search CRM..." style={{ width: '220px' }} />
          </div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #b8942e, #d4af5a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer' }}>SA</div>
        </header>

        <main style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
