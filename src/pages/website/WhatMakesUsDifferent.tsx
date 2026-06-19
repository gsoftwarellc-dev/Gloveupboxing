export default function WhatMakesUsDifferent() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="site-kicker" style={{ color: '#d4af5a' }}>What Makes Us Different?</span>
          <h1 className="page-hero__title">What Makes Us Different?</h1>
          <p className="page-hero__sub">
            The way we combine project intelligence, geo mapping and specialist recruitment.
          </p>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', border: '1px solid #e5e7eb', borderRadius: 14, padding: '2.25rem', boxShadow: '0 8px 24px rgba(15,19,32,0.04)' }}>
          <span className="label" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>Geo-Mapping</span>
          <h2 style={{ margin: '0 0 1rem', fontSize: '1.6rem', fontWeight: 800, color: '#0f1320', letterSpacing: '-0.02em' }}>
            Placing the Right People in the Right Locations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#1f2937', fontSize: '1.02rem', lineHeight: 1.75, maxWidth: 980 }}>
            <p style={{ margin: 0 }}>
              Successful construction recruitment is about more than finding qualified candidates. It’s about identifying the right people, in the right location, at the right time.
            </p>
            <p style={{ margin: 0 }}>
              Bravo combines advanced geo mapping technology with detailed project intelligence to provide a more accurate and strategic approach to recruitment.
            </p>
            <p style={{ margin: 0 }}>
              Our systems analyse candidate locations, travel distances, project locations, upcoming developments and regional availability, enabling us to identify the most suitable professionals for every opportunity.
            </p>
            <p style={{ margin: 0 }}>
              By understanding where skilled professionals are located in relation to live and upcoming projects, we help our clients reduce recruitment delays, improve workforce planning and secure talent before competitors enter the market.
            </p>
            <div style={{ padding: '1rem 1.1rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.75rem' }}>
              <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>This intelligence-led approach allows us to:</div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'grid', gap: '0.5rem', color: '#334155' }}>
                <li>Identify candidates within targeted travel radiuses</li>
                <li>Map workforce availability against project demand</li>
                <li>Reduce failed placements caused by location constraints</li>
                <li>Improve candidate retention and project continuity</li>
                <li>Support mobilisation planning for upcoming projects</li>
                <li>Deliver faster, more accurate hiring outcomes</li>
              </ul>
            </div>
            <p style={{ margin: 0 }}>
              Combined with our project intelligence platform, Bravo provides clients with a level of recruitment insight that goes beyond traditional candidate sourcing.
            </p>
            <p style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>
              The result is a more efficient hiring process, stronger workforce planning and access to the talent needed to successfully deliver projects.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
