import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  HardHat, Users, Wrench, Truck, Briefcase, FileText, Mail,
  ChevronLeft, ChevronRight, ArrowRight,
} from 'lucide-react'

// Construction imagery (swap for your own assets in /public when ready)
const IMG = {
  professional: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  trades: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  plant: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
  clients: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  candidates: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
  payroll: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  testimonial: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  heroPoster: '/hero-poster.png',
}

// Hero background video. Drop a file at crm-frontend/public/hero.mp4 and it plays
// automatically; until then the poster image (a construction shot) is shown.
const HERO_VIDEO = '/hero.mp4?v=2'

const serviceTiles = [
  { label: 'Professional & Technical', icon: Briefcase, img: IMG.professional },
  { label: 'Labour & Trades', icon: HardHat, img: IMG.trades },
  { label: 'Plant Operatives', icon: Truck, img: IMG.plant },
  { label: 'Clients', icon: FileText, img: IMG.clients },
  { label: 'Candidates', icon: Users, img: IMG.candidates },
  { label: 'Payroll & Partners', icon: Wrench, img: IMG.payroll },
]

const stats = [
  { num: '100%', label: 'Construction focused' },
  { num: 'UK', label: 'Nationwide coverage' },
  { num: '24h', label: 'Response time' },
  { num: '1:1', label: 'Dedicated consultant' },
]

const testimonials = [
  {
    quote: 'Backfill consistently supply us with reliable, qualified site staff at short notice. Their understanding of our projects and the construction sector sets them apart from other agencies.',
    author: 'SITE MANAGER · MAJOR CONTRACTOR',
  },
  {
    quote: "From our first conversation, the Backfill team took the time to understand exactly what we needed. Their candidate-focused approach means we get people who genuinely want to be on site.",
    author: 'OPERATIONS DIRECTOR · RESIDENTIAL DEVELOPER',
  },
  {
    quote: 'Quick turnaround, honest communication, and they actually understand the technical requirements of our roles. That makes a real difference to delivery.',
    author: 'COMMERCIAL MANAGER · M&E CONTRACTOR',
  },
]

const companies = ['McLaren', 'Redrow', 'SDC', 'United Living', 'Vistry Group', 'Willmott Dixon']

export default function Home() {
  const [testimonial, setTestimonial] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTestimonial(t => (t + 1) % testimonials.length), 7000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setTestimonial(t => (t - 1 + testimonials.length) % testimonials.length)
  const next = () => setTestimonial(t => (t + 1) % testimonials.length)

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
          <h1 className="hero__title reveal reveal-d1">
            Building relationships,<br /><em>constructing the future</em>
          </h1>
          <p className="hero__sub reveal reveal-d2">
            We connect the UK's leading contractors, developers and consultancies with the best
            permanent, freelance and temporary talent in the industry.
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
              <div className="statbar__num">{s.num}</div>
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
              A fresh, independent construction recruitment agency.
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#161c2d', marginTop: '1.5rem', lineHeight: 1.6 }}>
              We supply temporary, freelance &amp; permanent staff to the construction and associated
              industries — based across the UK, working on a national scale.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4a5160', fontSize: '1rem', lineHeight: 1.8, paddingTop: '0.5rem' }}>
            <p style={{ margin: 0 }}>
              We provide innovative recruitment solutions, with core values built on being
              candidate-focussed and client-driven. We pride ourselves on a service that exceeds
              expectations, with our sole focus on the construction sector — so all of our effort goes
              into one marketplace.
            </p>
            <p style={{ margin: 0 }}>
              Our consultants look after designated regions, combining genuine local knowledge with
              national reach. That gives us strength in depth and a real understanding of the
              operational, regulatory and market constraints our clients work within.
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

      {/* ── Testimonial ── */}
      <section id="people" className="tmonial">
        <div className="tmonial__bg" style={{ backgroundImage: `url(${IMG.testimonial})` }} />
        <div className="tmonial__inner">
          <div className="tmonial__mark">&ldquo;</div>
          <p className="tmonial__quote">{testimonials[testimonial].quote}</p>
          <div className="tmonial__author">{testimonials[testimonial].author}</div>
          <div className="tmonial__nav">
            <button className="tmonial__btn" onClick={prev} aria-label="Previous"><ChevronLeft size={20} /></button>
            <button className="tmonial__btn" onClick={next} aria-label="Next"><ChevronRight size={20} /></button>
          </div>
          <div className="tmonial__dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`tmonial__dot ${i === testimonial ? 'is-active' : ''}`} onClick={() => setTestimonial(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Companies ── */}
      <section className="site-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="site-kicker" style={{ justifyContent: 'center' }}>Trusted By</span>
          <h2 className="site-h2" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)' }}>Some of the great companies we work with</h2>
        </div>
        <div className="logos">
          {companies.map(c => <span key={c}>{c}</span>)}
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
