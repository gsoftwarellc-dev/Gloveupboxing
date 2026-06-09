import { useMemo, useState } from 'react'
import { MapPin, Search, Users, Briefcase, Navigation2, Globe } from 'lucide-react'
import { candidates, vacancies } from '../data/mock'

type Hub = {
  name: string
  lat: number
  lng: number
  dx: number
  dy: number
}

const ukHubs: Hub[] = [
  { name: 'London', lat: 51.5074, lng: -0.1278, dx: 12, dy: -10 },
  { name: 'Manchester', lat: 53.4808, lng: -2.2426, dx: 12, dy: -10 },
  { name: 'Birmingham', lat: 52.4862, lng: -1.8904, dx: 12, dy: -10 },
  { name: 'Leeds', lat: 53.8008, lng: -1.5491, dx: 12, dy: -10 },
  { name: 'Glasgow', lat: 55.8642, lng: -4.2518, dx: 12, dy: -10 },
  { name: 'Bristol', lat: 51.4545, lng: -2.5879, dx: 12, dy: 18 },
  { name: 'Sheffield', lat: 53.3811, lng: -1.4701, dx: 12, dy: 18 },
]

const focusHubName = 'Manchester'

const bounds = {
  minLat: 49.8,
  maxLat: 59.6,
  minLng: -8.8,
  maxLng: 2.2,
}

function projectPoint(lat: number, lng: number) {
  const width = 640
  const height = 600
  const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * width
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * height
  return { x, y }
}

function cityCountMap(items: { location: string }[]) {
  return items.reduce<Record<string, number>>((acc, item) => {
    acc[item.location] = (acc[item.location] || 0) + 1
    return acc
  }, {})
}

export default function GeoMapping() {
  const [searchPostcode, setSearchPostcode] = useState('')
  const [radius, setRadius] = useState('25')
  const [filterType, setFilterType] = useState<'candidates' | 'vacancies' | 'both'>('both')
  const [certFilter, setCertFilter] = useState('All')

  const candidateCities = useMemo(() => cityCountMap(candidates), [])
  const vacancyCities = useMemo(() => cityCountMap(vacancies.filter(v => v.status === 'active')), [])

  const focusHub = ukHubs.find(h => h.name === focusHubName) ?? ukHubs[0]
  const totalCandidateCities = Object.keys(candidateCities).length
  const totalVacancyCities = Object.keys(vacancyCities).length
  const totalCandidateCount = candidates.length
  const totalVacancyCount = vacancies.filter(v => v.status === 'active').length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h1 className="page-title">Geo Mapping & Radius Search</h1>
      </div>

      {/* Controls */}
      <div className="card" style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: 180 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Centre Postcode</label>
            <div className="search-bar">
              <MapPin size={14} />
              <input className="input" placeholder="e.g. M1 1AA" value={searchPostcode} onChange={e => setSearchPostcode(e.target.value)} />
            </div>
          </div>
          <div style={{ minWidth: 120 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Radius (miles)</label>
            <select className="input" value={radius} onChange={e => setRadius(e.target.value)}>
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="25">25 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
            </select>
          </div>
          <div style={{ minWidth: 160 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Show</label>
            <select className="input" value={filterType} onChange={e => setFilterType(e.target.value as any)}>
              <option value="both">Candidates & Vacancies</option>
              <option value="candidates">Candidates only</option>
              <option value="vacancies">Vacancies only</option>
            </select>
          </div>
          <div style={{ minWidth: 180 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Filter by Certificate</label>
            <select className="input" value={certFilter} onChange={e => setCertFilter(e.target.value)}>
              <option value="All">All Certificates</option>
              <option>SMSTS</option>
              <option>CSCS Gold Card</option>
              <option>NEBOSH Diploma</option>
              <option>First Aid at Work</option>
              <option>MRICS</option>
              <option>PMP</option>
              <option>CPCS Appointed Person</option>
            </select>
          </div>
          <button className="btn-primary"><Search size={15} />Search Area</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '1.25rem', alignItems: 'start' }}>
        {/* Map */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', minHeight: '540px', position: 'relative' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.1rem',
            borderBottom: '1px solid #e8eaf0',
            background: 'linear-gradient(180deg, #fbfcff 0%, #f4f7fb 100%)',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <Globe size={15} style={{ color: '#b8942e' }} />
                <h2 className="section-title" style={{ margin: 0 }}>UK coverage map</h2>
              </div>
            </div>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}>
              <span className="badge badge-gold">Focus: Manchester</span>
              <span className="badge badge-blue">{radius}mi radius</span>
            </div>
          </div>

          <div style={{
            height: '440px',
            position: 'relative',
            background: 'radial-gradient(circle at 50% 30%, rgba(18,32,49,0.86), rgba(9,20,38,0.98) 55%, #07111f 100%)',
            overflow: 'hidden',
          }}>
            <svg width="100%" height="100%" viewBox="0 0 640 600" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <linearGradient id="ukSeaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#18304f" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#09111f" stopOpacity="0.75" />
                </linearGradient>
                <pattern id="ukGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#23405f" strokeWidth="0.7" />
                </pattern>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.35" />
                </filter>
              </defs>

              <rect width="640" height="600" fill="url(#ukSeaGlow)" />
              <rect width="640" height="600" fill="url(#ukGrid)" opacity="0.55" />

              <g transform="translate(0,-22)">
                {/* Great Britain silhouette */}
                <path
                  d="M 233 88
                     L 250 70 L 268 58 L 292 52 L 318 55 L 335 66 L 347 84 L 356 106
                     L 351 126 L 360 148 L 372 166 L 366 189 L 371 208 L 377 232 L 372 253
                     L 363 276 L 354 297 L 360 322 L 351 345 L 341 366 L 329 389 L 317 410
                     L 298 426 L 275 434 L 255 430 L 243 416 L 241 398 L 246 381 L 240 361
                     L 230 339 L 222 318 L 218 293 L 223 273 L 214 250 L 208 223 L 212 201
                     L 207 178 L 212 154 L 221 132 L 218 113 L 223 96 Z"
                  fill="#0f2742"
                  stroke="#2c5c92"
                  strokeWidth="1.1"
                  filter="url(#softShadow)"
                />

                {/* Scotland cap */}
                <path
                  d="M 246 71 L 262 57 L 283 49 L 308 47 L 326 54 L 332 66 L 319 74 L 303 76 L 286 72 L 268 74 L 256 81 Z"
                  fill="#123355"
                  stroke="#2c5c92"
                  strokeWidth="1.1"
                />

                {/* Northern Ireland */}
                <path
                  d="M 181 243 L 194 236 L 204 239 L 207 251 L 200 263 L 187 264 L 180 256 Z"
                  fill="#123355"
                  stroke="#2c5c92"
                  strokeWidth="1"
                />

                {/* Republic outline hint for context */}
                <path
                  d="M 190 267 L 201 274 L 204 286 L 199 298 L 189 303 L 179 299 L 176 287 L 180 274 Z"
                  fill="none"
                  stroke="#1e3f62"
                  strokeWidth="0.8"
                  strokeDasharray="3 4"
                  opacity="0.7"
                />

                {/* Major hubs */}
                {ukHubs.map((hub) => {
                  const point = projectPoint(hub.lat, hub.lng)
                  const candidateCount = candidateCities[hub.name] || 0
                  const vacancyCount = vacancyCities[hub.name] || 0
                  const total = candidateCount + vacancyCount
                  const isFocus = hub.name === focusHubName
                  const ring = Math.max(18, 14 + total * 4)

                  return (
                    <g key={`${hub.name}-${hub.lat}-${hub.lng}`} transform={`translate(${point.x}, ${point.y})`}>
                      <circle
                        r={ring}
                        fill={isFocus ? 'rgba(184,148,46,0.14)' : 'rgba(96,165,250,0.09)'}
                        stroke={isFocus ? 'rgba(184,148,46,0.45)' : 'rgba(96,165,250,0.3)'}
                        strokeWidth="1.2"
                        strokeDasharray={isFocus ? '5 5' : '0'}
                      />
                      <circle
                        r={isFocus ? 9 : 7}
                        fill={isFocus ? '#ffd86b' : '#8bb5ff'}
                        stroke="#0b1422"
                        strokeWidth="2"
                      />
                      <circle r="20" fill={isFocus ? 'rgba(184,148,46,0.12)' : 'rgba(96,165,250,0.08)'} />
                      <text
                        x={hub.dx}
                        y={hub.dy}
                        fill="#f8fafc"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="Inter, system-ui, sans-serif"
                      >
                        {hub.name}
                      </text>
                      {(candidateCount > 0 || vacancyCount > 0) && (
                        <text
                          x={hub.dx}
                          y={hub.dy + 15}
                          fill={isFocus ? '#ffd86b' : '#a5b6ce'}
                          fontSize="10"
                          fontWeight="600"
                          fontFamily="Inter, system-ui, sans-serif"
                        >
                          {candidateCount} cand · {vacancyCount} vac
                        </text>
                      )}
                    </g>
                  )
                })}

                {/* Focus radius */}
                {(() => {
                  const p = projectPoint(focusHub.lat, focusHub.lng)
                  const radiusValue = Number(radius)
                  const visualRadius = 20 + radiusValue * 1.35
                  return (
                    <g transform={`translate(${p.x}, ${p.y})`}>
                      <circle r={visualRadius} fill="rgba(184,148,46,0.045)" stroke="rgba(184,148,46,0.65)" strokeWidth="2" strokeDasharray="7 6" />
                      <circle r="4" fill="#ffd86b" />
                      <path d="M 0 -20 L 0 -36" stroke="#ffd86b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 20 0 L 36 0" stroke="#ffd86b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 0 20 L 0 36" stroke="#ffd86b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M -20 0 L -36 0" stroke="#ffd86b" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  )
                })()}

                {/* Region labels */}
                <text x="266" y="100" fill="#d9e6f7" fontSize="12" fontWeight="700">Scotland</text>
                <text x="246" y="235" fill="#d9e6f7" fontSize="12" fontWeight="700">England</text>
                <text x="205" y="355" fill="#d9e6f7" fontSize="12" fontWeight="700">Wales</text>
                <text x="184" y="258" fill="#d9e6f7" fontSize="11" fontWeight="700">N. Ireland</text>
              </g>
            </svg>

            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.95)',
                borderRadius: '9999px',
                padding: '0.45rem 0.8rem',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 10px 24px rgba(15,23,42,0.18)',
              }}>
                <Navigation2 size={13} style={{ color: '#b8942e' }} />
                UK market coverage
              </span>
            </div>
          </div>
        </div>

        {/* Results panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Results in Radius</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#b8942e' }}>{totalCandidateCount}</div>
                <div style={{ fontSize: '0.92rem', color: '#334155', marginTop: '0.15rem' }}>Candidates</div>
              </div>
              <div style={{ textAlign: 'center', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60a5fa' }}>{totalVacancyCount}</div>
                <div style={{ fontSize: '0.92rem', color: '#334155', marginTop: '0.15rem' }}>Vacancies</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-gray">{totalCandidateCities} active candidate cities</span>
              <span className="badge badge-gray">{totalVacancyCities} active vacancy cities</span>
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <Users size={15} style={{ color: '#b8942e' }} />
              <h4 className="section-title" style={{ fontSize: '1.05rem' }}>Nearby Candidates</h4>
            </div>
            {certFilter !== 'All' && (
              <div style={{ marginBottom: '0.625rem', padding: '0.4rem 0.75rem', background: 'rgba(184,148,46,0.08)', border: '1px solid rgba(184,148,46,0.25)', borderRadius: '0.375rem', fontSize: '0.85rem', color: '#b8942e', fontWeight: 600 }}>
                Filtering by cert: {certFilter}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {candidates
                .filter(c => certFilter === 'All' || c.certificates.some(cert => cert.toLowerCase().includes(certFilter.toLowerCase())))
                .slice(0, 4)
                .map((c, i) => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.55rem', background: '#f8f9fb', borderRadius: '0.6rem', border: '1px solid #edf1f6' }}>
                    <div className="avatar">{c.name.split(' ').map(n => n[0]).join('')}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</div>
                      <div style={{ fontSize: '0.82rem', color: '#475569' }}>{c.location} • {c.travelRadius}mi radius</div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: '#b8942e', fontWeight: 700, flexShrink: 0 }}>{[2.3, 5.1, 8.4, 12.7][i]}mi</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <Briefcase size={15} style={{ color: '#60a5fa' }} />
              <h4 className="section-title" style={{ fontSize: '1.05rem' }}>Nearby Vacancies</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {vacancies.filter(v => v.status === 'active').slice(0, 3).map((v, i) => (
                <div key={v.id} style={{ padding: '0.55rem 0.65rem', background: '#f8f9fb', borderRadius: '0.6rem', border: '1px solid #edf1f6' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.15rem' }}>{v.title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#475569' }}>{v.location}</span>
                    <span style={{ fontSize: '0.8rem', color: '#60a5fa', fontWeight: 700 }}>{[3.2, 7.8, 15.4][i]}mi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
