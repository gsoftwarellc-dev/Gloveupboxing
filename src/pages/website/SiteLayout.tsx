import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Menu, X } from 'lucide-react'
import logo from '../../assets/logo-sidebar.png'

const navLinks = [
  { label: 'Home', to: '/home', end: true },
  { label: 'Jobs', to: '/home/jobs', end: false },
  { label: 'Story', to: '/home#story', hash: true },
  { label: 'Services', to: '/home#services', hash: true },
  { label: 'Weekly Intelligence Reports', headerLabel: 'Weekly Reports', to: '/home/weekly-intelligence-reports', end: false },
  { label: 'What Makes Us Different?', headerLabel: 'Why Us?', to: '/home/what-makes-us-different', end: false },
  { label: 'Contact', to: '/home/contact', end: false },
]

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // let the target section exist, then scroll to it
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

export default function SiteLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the drawer whenever the route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="site" style={{ width: '100%', background: '#fff', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />

      {/* ── Header ── */}
      <header
        className="site-header is-solid"
        style={{ background: '#161c2d', boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none' }}
      >
        <div className="site-header__inner">
          <Link to="/home" style={{ display: 'flex', alignItems: 'center' }} aria-label="Backfill — Home">
            <img src={logo} alt="Backfill Construction Recruitment" style={{ height: 46, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </Link>
          <nav className="site-nav">
            {navLinks.map(l =>
              l.hash ? (
                <a key={l.label} href={l.to}>{l.label}</a>
              ) : (
                <NavLink key={l.label} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-current' : '')}>
                  {l.headerLabel ?? l.label}
                </NavLink>
              )
            )}
          </nav>
          <div className="site-header__cta" style={{ gap: '0.7rem' }}>
            <Link to="/home/apply" className="site-btn site-btn--outline">REGISTER</Link>
            <Link to="/home/jobs" className="site-btn site-btn--gold">VACANCIES</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="site-burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} color="#fff" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="site-drawer-overlay" onClick={() => setMenuOpen(false)}>
          <div className="site-drawer" onClick={e => e.stopPropagation()}>
            <div className="site-drawer__top">
              <img src={logo} alt="Backfill" style={{ height: 38, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <button className="site-drawer__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={24} color="#fff" />
              </button>
            </div>
            <nav className="site-drawer__nav">
              {navLinks.map(l =>
                l.hash ? (
                  <a key={l.label} href={l.to} onClick={() => setMenuOpen(false)}>{l.label}</a>
                ) : (
                  <NavLink key={l.label} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-current' : '')}>
                    {l.label}
                  </NavLink>
                )
              )}
            </nav>
            <div className="site-drawer__cta">
              <Link to="/home/apply" className="site-btn site-btn--outline site-btn--lg" style={{ justifyContent: 'center' }}>REGISTER CV</Link>
              <Link to="/home/jobs" className="site-btn site-btn--gold site-btn--lg" style={{ justifyContent: 'center' }}>VIEW VACANCIES</Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Page content ── */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer id="contact-footer" className="site-footer">
        <div className="site-footer__grid">
          <div>
            <img src={logo} alt="Backfill" style={{ height: 42, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#8b93a4', maxWidth: '34ch' }}>
              Specialist construction recruitment — connecting the best talent with the UK's leading
              contractors and developers.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="#" aria-label="Website"><Globe size={18} /></a>
            </div>
          </div>
          <div>
            <h4>Head Office</h4>
            <div className="site-footer__row"><Phone size={15} style={{ marginTop: 2 }} /> 01234 332960</div>
            <div className="site-footer__row"><Mail size={15} style={{ marginTop: 2 }} /> info@backfillrecruitment.co.uk</div>
            <div className="site-footer__row"><MapPin size={15} style={{ marginTop: 2 }} /> <span>Bedford Heights, Manton Lane,<br />Bedford, MK41 7PH</span></div>
          </div>
          <div>
            <h4>London</h4>
            <div className="site-footer__row"><Phone size={15} style={{ marginTop: 2 }} /> 020 3897 8249</div>
            <div className="site-footer__row"><Mail size={15} style={{ marginTop: 2 }} /> info@backfillrecruitment.co.uk</div>
            <div className="site-footer__row"><MapPin size={15} style={{ marginTop: 2 }} /> <span>9th Floor, 30 Crown Place,<br />City of London, EC2A 4EB</span></div>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/home" style={{ display: 'block', marginBottom: '0.55rem' }}>Home</Link>
            <Link to="/home/jobs" style={{ display: 'block', marginBottom: '0.55rem' }}>Jobs</Link>
            <Link to="/home/apply" style={{ display: 'block', marginBottom: '0.55rem' }}>Register CV</Link>
            <Link to="/home/contact" style={{ display: 'block', marginBottom: '0.55rem' }}>Contact</Link>
            <a href="#" style={{ display: 'block', marginBottom: '0.55rem' }}>Privacy Policy</a>
            <a href="#" style={{ display: 'block' }}>Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="site-footer__bar">
          <span>© Copyright Backfill Construction Recruitment {new Date().getFullYear()}</span>
          <span>Built with care.</span>
        </div>
      </footer>
    </div>
  )
}
