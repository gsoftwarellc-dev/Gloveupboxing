import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react'

const offices = [
  {
    name: 'Head Office',
    address: ['71-75 Shelton Street', 'Covent Garden, London', 'WC2H 9JQ, United Kingdom'],
    phone: '01234 332960',
    email: 'info@backfillrecruitment.co.uk',
  },
]

const inputStyle: React.CSSProperties = {
  width: '100%', border: '1px solid #d8dce4', borderRadius: '8px',
  padding: '0.8rem 1rem', fontSize: '1rem', color: '#0f1320',
  outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="site-kicker" style={{ color: '#d4af5a' }}>Get In Touch</span>
          <h1 className="page-hero__title">Contact Backfill</h1>
          <p className="page-hero__sub">
            Whether you're hiring or looking for your next role, our specialist consultants are ready to help.
          </p>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: '4rem' }}>
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={32} style={{ color: '#16a34a' }} />
                </div>
                <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.4rem', fontWeight: 800, color: '#0f1320' }}>Message sent!</h2>
                <p style={{ color: '#5a6172', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                  Thanks {form.name || 'for getting in touch'} — one of our consultants will be in
                  touch within one working day.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ margin: '0 0 0.4rem', fontSize: '1.4rem', fontWeight: 800, color: '#0f1320' }}>Send us a message</h2>
                <p style={{ margin: '0 0 1.75rem', color: '#5a6172', fontSize: '0.98rem' }}>Fill in the form and we'll get right back to you.</p>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label className="contact-label">Full Name *</label>
                      <input style={inputStyle} placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} required />
                    </div>
                    <div>
                      <label className="contact-label">Phone</label>
                      <input style={inputStyle} placeholder="07700 000000" value={form.phone} onChange={e => update('phone', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="contact-label">Email Address *</label>
                    <input style={inputStyle} type="email" placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} required />
                  </div>
                  <div>
                    <label className="contact-label">Message *</label>
                    <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={5} placeholder="How can we help?" value={form.message} onChange={e => update('message', e.target.value)} required />
                  </div>
                  <button type="submit" className="site-btn site-btn--gold site-btn--lg" style={{ alignSelf: 'flex-start' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {offices.map(o => (
              <div key={o.name} className="contact-office">
                <h3 style={{ margin: '0 0 1rem', fontSize: '1.1rem', fontWeight: 800, color: '#0f1320' }}>{o.name}</h3>
                <div className="contact-office__row"><MapPin size={17} /><span>{o.address.map((l, i) => <span key={i}>{l}<br /></span>)}</span></div>
                <a className="contact-office__row contact-office__link" href={`tel:${o.phone.replace(/\s/g, '')}`}><Phone size={17} /><span>{o.phone}</span></a>
                <a className="contact-office__row contact-office__link" href={`mailto:${o.email}`}><Mail size={17} /><span>{o.email}</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
