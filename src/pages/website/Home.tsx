import { Link } from 'react-router-dom'
import {
  Users, Briefcase, FileText, Mail, ArrowRight,
} from 'lucide-react'

// Construction imagery (swap for your own assets in /public when ready)
const IMG = {
  professional: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  clients: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  candidates: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
  heroPoster: '/hero-poster.png',
}

// Hero background video. Drop a file at crm-frontend/public/hero.mp4 and it plays
// automatically; until then the poster image (a construction shot) is shown.
const HERO_VIDEO = '/hero.mp4?v=2'

const serviceTiles = [
  { label: 'Professional & Technical', icon: Briefcase, img: IMG.professional },
  { label: 'Clients', icon: FileText, img: IMG.clients },
  { label: 'Candidates', icon: Users, img: IMG.candidates },
]

const stats = [
  { num: '100%', label: 'Construction focused' },
  { num: 'UK & International', label: 'Coverage' },
  { num: '1:1', label: 'Dedicated consultant' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__media">
          <video key={HERO_VIDEO} autoPlay muted loop playsInline poster={IMG.heroPoster}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__eyebrow reveal">Specialist Construction Recruitment</div>
          <h1 className="hero__title hero__title--words">
            <span className="hero__word"><span className="hero__word-in" style={{ '--d': '0.10s' } as React.CSSProperties}>Project</span></span>{' '}
            <span className="hero__word"><span className="hero__word-in" style={{ '--d': '0.20s' } as React.CSSProperties}>intelligence,</span></span>
            <br />
            <span className="hero__word"><span className="hero__word-in hero__title-accent" style={{ '--d': '0.34s' } as React.CSSProperties}>driving</span></span>{' '}
            <span className="hero__word"><span className="hero__word-in hero__title-accent" style={{ '--d': '0.44s' } as React.CSSProperties}>better</span></span>{' '}
            <span className="hero__word"><span className="hero__word-in hero__title-accent" style={{ '--d': '0.54s' } as React.CSSProperties}>hiring</span></span>{' '}
            <span className="hero__word"><span className="hero__word-in hero__title-accent" style={{ '--d': '0.64s' } as React.CSSProperties}>decisions</span></span>
          </h1>
          <p className="hero__sub reveal reveal-d2">
            Backfill combines project intelligence, advanced geo mapping and specialist recruitment
            expertise to help contractors, developers and consultancies identify opportunities, plan
            ahead and secure the talent they need to deliver successful projects.
          </p>
          <div className="hero__cta reveal reveal-d3">
            <Link to="/home/jobs" className="site-btn site-btn--gold site-btn--lg">View Vacancies <ArrowRight size={18} /></Link>
            <Link to="/home/apply" className="site-btn site-btn--ghost site-btn--lg">Register Your CV</Link>
          </div>
        </div>
        <a href="#story" className="hero__scroll">
          <span>Scroll</span>
          <span className="hero__scroll-dot" />
        </a>
      </section>

      {/* ── Stat bar ── */}
      <div className="statbar">
        <div className="statbar__inner">
          {stats.map(s => (
            <div key={s.label} className="statbar__item">
              <div className="statbar__num" style={s.num.length > 6 ? { fontSize: '1.6rem' } : undefined}>{s.num}</div>
              <div className="statbar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Intro / Story ── */}
      <section id="story" className="site-section">
        <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="site-kicker">Our Story</span>
            <h2 className="site-h2">
              Built From Real Construction Experience
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#161c2d', marginTop: '1.5rem', lineHeight: 1.6 }}>
              Backfill Construction Recruitment was founded on first-hand experience within the
              construction industry.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4a5160', fontSize: '1rem', lineHeight: 1.8, paddingTop: '0.5rem' }}>
            <p style={{ margin: 0 }}>
              Before entering recruitment, our founder spent years working on site, from digging out
              footings by hand and mixing concrete in wheelbarrows to working within groundworks and
              landscaping projects across the UK.
            </p>
            <p style={{ margin: 0 }}>
              That experience provided a genuine understanding of the challenges construction
              businesses face every day — labour shortages, tight programmes, project deadlines and
              the importance of having the right people in the right roles.
            </p>
            <a href="#services" style={{ color: '#b8942e', fontWeight: 800, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
              Explore our services <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ background: '#f6f7f9' }}>
        <div className="site-section">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="site-kicker" style={{ justifyContent: 'center' }}>What We Do</span>
            <h2 className="site-h2">Recruitment across every corner of construction</h2>
          </div>
          <div className="svc-grid">
            {serviceTiles.map(tile => {
              const Icon = tile.icon
              return (
                <Link key={tile.label} to="/home/jobs" className="svc-card">
                  <div className="svc-card__bg" style={{ backgroundImage: `url(${tile.img})` }} />
                  <div className="svc-card__veil" />
                  <div className="svc-card__body">
                    <div className="svc-card__icon"><Icon size={24} color="#fff" /></div>
                    <div className="svc-card__title">{tile.label}</div>
                    <span className="svc-card__link">Find out more <ArrowRight size={14} /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="ctaband">
        <div className="ctaband__inner">
          <div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              Looking to hire, or looking for your next role?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
              Let's build something together. Talk to one of our specialist consultants today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/home/jobs" className="site-btn site-btn--gold site-btn--lg">Browse Vacancies <ArrowRight size={18} /></Link>
            <Link to="/home/contact" className="site-btn site-btn--ghost site-btn--lg">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="news">
        <div className="news__inner">
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={22} /> Join our mailing list
            </div>
            <p style={{ color: '#fdf6e8', margin: '0.4rem 0 0', fontSize: '0.98rem' }}>Sign up to receive news, market insight and the latest vacancies.</p>
          </div>
          <form className="news__form" onSubmit={e => e.preventDefault()}>
            <input className="news__input" type="email" placeholder="Email Address" />
            <button className="news__btn" type="submit">SIGN UP</button>
          </form>
        </div>
      </section>
    </>
  )
}
