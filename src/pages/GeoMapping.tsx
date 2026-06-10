import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Search, FolderKanban, Building2, Navigation2, Globe, ChevronRight } from 'lucide-react'
import { projects } from '../data/mock'
import { postcodeCoords } from '../data/geo'
import { findProjectsNear, resolvePostcode, projectCoords, type ProjectWithDistance } from '../utils/geoSearch'

/** Approximate Google Maps zoom level for a given search radius in miles. */
function radiusToZoom(radiusMiles: number) {
  if (radiusMiles <= 5) return 11
  if (radiusMiles <= 10) return 10
  if (radiusMiles <= 25) return 9
  if (radiusMiles <= 50) return 8
  return 7
}

const projectsWithCoords = projects
  .map(p => ({ project: p, coords: projectCoords(p) }))
  .filter((x): x is { project: typeof projects[number]; coords: { lat: number; lng: number } } => x.coords !== null)

export default function GeoMapping() {
  const [postcodeInput, setPostcodeInput] = useState('')
  const [radius, setRadius] = useState('25')
  const [searched, setSearched] = useState<{ centre: { lat: number; lng: number }; label: string } | null>(null)
  const [error, setError] = useState('')

  const results: ProjectWithDistance[] = useMemo(() => {
    if (!searched) return []
    return findProjectsNear(searched.centre, Number(radius))
  }, [searched, radius])

  function handleSearch() {
    const coords = resolvePostcode(postcodeInput)
    if (!coords) {
      setError(`Couldn't find "${postcodeInput}" — try a postcode from one of our projects (e.g. CB2 3BU, M1 1AA).`)
      setSearched(null)
      return
    }
    setError('')
    setSearched({ centre: coords, label: postcodeInput.trim().toUpperCase() })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <h1 className="page-title">Geo Mapping & Radius Search</h1>
        <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>
          Find projects and related client contacts near a postcode — {projectsWithCoords.length} of {projects.length} projects have mapped locations
        </p>
      </div>

      {/* Controls */}
      <div className="card" style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: 180 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Centre Postcode</label>
            <div className="search-bar">
              <MapPin size={14} />
              <input
                className="input"
                placeholder="e.g. CB2 3BU or M1"
                value={postcodeInput}
                onChange={e => setPostcodeInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSearch() }}
              />
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
          <button className="btn-primary" onClick={handleSearch}><Search size={15} />Search Area</button>
        </div>
        {error && (
          <div style={{ marginTop: '0.75rem', padding: '0.625rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.95rem', color: '#dc2626' }}>
            {error}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '1.25rem', alignItems: 'start' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={15} style={{ color: '#b8942e' }} />
              <h2 className="section-title" style={{ margin: 0 }}>UK project map</h2>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {searched ? (
                <>
                  <span className="badge badge-gold">Centre: {searched.label}</span>
                  <span className="badge badge-blue">{radius}mi radius</span>
                  <span className="badge badge-green">{results.length} projects found</span>
                </>
              ) : (
                <span className="badge badge-gray">{projectsWithCoords.length} projects plotted</span>
              )}
            </div>
          </div>

          <div style={{ height: '440px', position: 'relative', background: '#e5e3df' }}>
            <iframe
              key={searched ? `${searched.centre.lat},${searched.centre.lng},${radius}` : 'default'}
              title="UK project map"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={
                searched
                  ? `https://maps.google.com/maps?q=${searched.centre.lat},${searched.centre.lng}&z=${radiusToZoom(Number(radius))}&output=embed`
                  : `https://maps.google.com/maps?q=United+Kingdom&z=6&output=embed`
              }
            />

            <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end', pointerEvents: 'none' }}>
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
                UK project coverage
              </span>
            </div>
          </div>
        </div>

        {/* Results panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {!searched ? (
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center', color: '#9ca3af' }}>
              <MapPin size={28} style={{ marginBottom: '0.5rem', color: '#d1d5db' }} />
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Enter a postcode and radius to find nearby projects and their related client contacts.
              </p>
            </div>
          ) : (
            <>
              <div className="card">
                <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Results in Radius</h3>
                <div style={{ textAlign: 'center', padding: '0.75rem', background: '#f8f9fb', borderRadius: '0.5rem', border: '1px solid #e8eaf0' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#b8942e' }}>{results.length}</div>
                  <div style={{ fontSize: '0.92rem', color: '#334155', marginTop: '0.15rem' }}>Projects within {radius} miles of {searched.label}</div>
                </div>
              </div>

              <div className="card" style={{ maxHeight: '460px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <FolderKanban size={15} style={{ color: '#b8942e' }} />
                  <h4 className="section-title" style={{ fontSize: '1.05rem' }}>Nearby Projects</h4>
                </div>
                {results.length === 0 ? (
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0 }}>No projects found within {radius} miles. Try a larger radius.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {results.map(({ project, distance, relatedClients }) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        style={{
                          display: 'block', padding: '0.625rem 0.75rem', background: '#f8f9fb',
                          borderRadius: '0.6rem', border: '1px solid #edf1f6', textDecoration: 'none'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.name}</div>
                            <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: '0.15rem' }}>{project.postcode} · {project.sector ?? 'Construction'}</div>
                          </div>
                          <span style={{ fontSize: '0.8rem', color: '#b8942e', fontWeight: 700, flexShrink: 0 }}>{distance.toFixed(1)}mi</span>
                        </div>
                        {relatedClients.length > 0 && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.4rem', fontSize: '0.76rem', color: '#6b7280' }}>
                            <Building2 size={11} style={{ color: '#9ca3af' }} />
                            {relatedClients.map(c => c.name).join(', ')}
                            <ChevronRight size={11} style={{ marginLeft: 'auto', color: '#9ca3af' }} />
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {!searched && (
            <div className="card">
              <h4 className="section-title" style={{ fontSize: '1.05rem', marginBottom: '0.625rem' }}>Quick search</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {Object.keys(postcodeCoords).slice(0, 8).map(pc => (
                  <button
                    key={pc}
                    className="badge badge-gray"
                    style={{ cursor: 'pointer', border: 'none' }}
                    onClick={() => { setPostcodeInput(pc); setError(''); setSearched({ centre: postcodeCoords[pc], label: pc }) }}
                  >
                    {pc}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
