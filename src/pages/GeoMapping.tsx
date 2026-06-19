import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapPin, Search, FolderKanban, Users, Building2, ChevronRight, Briefcase } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import { findProjectsNear, resolvePostcode, projectCoords, type ProjectWithDistance } from '../utils/geoSearch'
import { distanceMiles } from '../utils/geoSearch'
import type { Candidate } from '../types/crm'
import L from 'leaflet'

// Fix Leaflet default icon paths broken by Vite bundling
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function makeIcon(color: string, size: number = 22) {
  const s = size
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="${s}" height="${Math.round(s * 1.5)}">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z" fill="${color}" stroke="#fff" stroke-width="2"/>
    <circle cx="12" cy="12" r="4.5" fill="#fff" fill-opacity="0.95"/>
  </svg>`
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [s, Math.round(s * 1.5)],
    iconAnchor: [s / 2, Math.round(s * 1.5)],
    popupAnchor: [0, -Math.round(s * 1.5)],
  })
}

// Colours
const GOLD   = '#b8942e'
const NAVY   = '#1a1a2e'
const TEAL   = '#0d9488'
const GREY   = '#94a3b8'

const centreIcon     = makeIcon(GOLD, 28)   // search centre — gold, bigger
const projectIcon    = makeIcon(NAVY, 22)   // project in radius — navy
const candidateIcon  = makeIcon(TEAL, 22)   // candidate in radius — teal
const allProjIcon    = makeIcon(GREY, 18)   // background project pin — grey/small
const allCandIcon    = makeIcon('#64748b', 18) // background candidate pin

function toMetres(miles: number) { return miles * 1609.344 }

type ViewMode = 'projects' | 'candidates'

interface MapPoint { id: number; lat: number; lng: number; name: string; postcode: string }

interface CandidateWithDistance {
  candidate: Candidate
  distance: number
}

interface MapViewProps {
  mode: ViewMode
  centre: { lat: number; lng: number } | null
  radiusMiles: number
  centreLabel: string
  projectResults: ProjectWithDistance[]
  candidateResults: CandidateWithDistance[]
  allProjectPoints: MapPoint[]
  allCandidatePoints: MapPoint[]
}

function MapView({
  mode, centre, radiusMiles, centreLabel,
  projectResults, candidateResults,
  allProjectPoints, allCandidatePoints,
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)
  const layersRef = useRef<L.Layer[]>([])

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return
    const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: true }).setView([54.5, -2], 6)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)
    leafletMap.current = map
    return () => { map.remove(); leafletMap.current = null }
  }, [])

  useEffect(() => {
    const map = leafletMap.current
    if (!map) return

    layersRef.current.forEach(l => l.remove())
    layersRef.current = []
    const add = (l: L.Layer) => { l.addTo(map); layersRef.current.push(l) }

    if (centre) {
      // Dashed radius circle
      add(L.circle([centre.lat, centre.lng], {
        radius: toMetres(radiusMiles),
        color: GOLD, fillColor: GOLD, fillOpacity: 0.07, weight: 2, dashArray: '8 5',
      }))

      // Search centre pin (gold, big)
      add(L.marker([centre.lat, centre.lng], { icon: centreIcon, zIndexOffset: 2000 })
        .bindPopup(`<b style="color:${GOLD}">📍 ${centreLabel}</b><br><span style="font-size:0.8rem;color:#555">Search centre · ${radiusMiles} mi radius</span>`))

      const boundsPoints: L.LatLngExpression[] = [[centre.lat, centre.lng]]

      if (mode === 'projects') {
        projectResults.forEach(({ project, distance }) => {
          const pt = allProjectPoints.find(p => p.id === project.id)
          if (!pt) return
          boundsPoints.push([pt.lat, pt.lng])
          add(L.marker([pt.lat, pt.lng], { icon: projectIcon, zIndexOffset: 1000 })
            .bindPopup(`
              <div style="min-width:190px;font-family:sans-serif">
                <div style="font-size:0.9rem;font-weight:700;color:${NAVY};margin-bottom:3px">${project.name}</div>
                ${project.client ? `<div style="font-size:0.78rem;color:${GOLD};margin-bottom:2px">${project.client}</div>` : ''}
                <div style="font-size:0.75rem;color:#6b7280">${project.postcode} · <b style="color:${NAVY}">${distance.toFixed(1)} mi</b></div>
                ${project.stage  ? `<div style="font-size:0.75rem;color:#374151;margin-top:2px">Stage: ${project.stage}</div>` : ''}
                ${project.value  ? `<div style="font-size:0.75rem;color:#374151">Value: ${project.value}</div>` : ''}
                ${project.sector ? `<div style="font-size:0.75rem;color:#374151">Sector: ${project.sector}</div>` : ''}
              </div>
            `))
        })
      } else {
        candidateResults.forEach(({ candidate, distance }) => {
          const pt = allCandidatePoints.find(p => p.id === candidate.id)
          if (!pt) return
          boundsPoints.push([pt.lat, pt.lng])
          add(L.marker([pt.lat, pt.lng], { icon: candidateIcon, zIndexOffset: 1000 })
            .bindPopup(`
              <div style="min-width:190px;font-family:sans-serif">
                <div style="font-size:0.9rem;font-weight:700;color:${NAVY};margin-bottom:3px">${candidate.name}</div>
                <div style="font-size:0.78rem;color:${TEAL};margin-bottom:2px">${candidate.role}</div>
                <div style="font-size:0.75rem;color:#6b7280">${candidate.postcode} · <b style="color:${NAVY}">${distance.toFixed(1)} mi</b></div>
                <div style="font-size:0.75rem;color:#374151;margin-top:2px">Status: ${candidate.status}</div>
                ${candidate.discipline ? `<div style="font-size:0.75rem;color:#374151">Discipline: ${candidate.discipline}</div>` : ''}
                ${candidate.travelRadius ? `<div style="font-size:0.75rem;color:#374151">Travel radius: ${candidate.travelRadius} mi</div>` : ''}
              </div>
            `))
        })
      }

      if (boundsPoints.length > 1) {
        map.fitBounds(L.latLngBounds(boundsPoints), { padding: [50, 50] })
      } else {
        const zoom = radiusMiles <= 5 ? 12 : radiusMiles <= 10 ? 11 : radiusMiles <= 25 ? 9 : 8
        map.setView([centre.lat, centre.lng], zoom)
      }
    } else {
      // No search — show all pins
      const points = mode === 'projects' ? allProjectPoints : allCandidatePoints
      const icon = mode === 'projects' ? allProjIcon : allCandIcon
      points.forEach(pt => {
        add(L.marker([pt.lat, pt.lng], { icon })
          .bindPopup(`<b style="color:${NAVY};font-size:0.85rem">${pt.name}</b><br><span style="font-size:0.75rem;color:#6b7280">${pt.postcode}</span>`))
      })
      if (points.length > 0) {
        map.fitBounds(L.latLngBounds(points.map(p => [p.lat, p.lng] as L.LatLngExpression)), { padding: [30, 30] })
      } else {
        map.setView([54.5, -2], 6)
      }
    }
  }, [mode, centre, radiusMiles, centreLabel, projectResults, candidateResults, allProjectPoints, allCandidatePoints])

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function GeoMapping() {
  const { projects, clients, candidates, postcodeCoords, loading, error: dataError } = useCrmData()

  // All search state lives in the URL so Back restores it exactly
  const [searchParams, setSearchParams] = useSearchParams()
  const urlPostcode = searchParams.get('postcode') ?? ''
  const urlRadius   = searchParams.get('radius')   ?? '25'
  const urlMode     = (searchParams.get('mode') ?? 'projects') as ViewMode

  const [postcodeInput, setPostcodeInput] = useState(urlPostcode)
  const [searchError, setSearchError] = useState('')

  // Derived from URL params
  const radius = urlRadius
  const mode   = urlMode

  function setRadius(r: string) {
    setSearchParams(p => { p.set('radius', r); return p }, { replace: true })
  }
  function setMode(m: ViewMode) {
    setSearchParams(p => { p.set('mode', m); return p }, { replace: true })
  }

  // All project points with known coordinates
  const allProjectPoints = useMemo<MapPoint[]>(() =>
    projects.flatMap(p => {
      const c = projectCoords(p, postcodeCoords)
      return c ? [{ id: p.id, lat: c.lat, lng: c.lng, name: p.name, postcode: p.postcode ?? '' }] : []
    }),
    [projects, postcodeCoords]
  )

  // All candidate points with known coordinates
  const allCandidatePoints = useMemo<MapPoint[]>(() =>
    candidates.flatMap(c => {
      const pc = (c.postcode ?? '').trim().toUpperCase()
      if (!pc) return []
      const coord = postcodeCoords[pc]
      if (!coord) {
        // Try outward code match
        const outward = pc.split(' ')[0]
        const match = Object.entries(postcodeCoords).find(([k]) => k.split(' ')[0] === outward)
        if (!match) return []
        return [{ id: c.id, lat: match[1].lat, lng: match[1].lng, name: c.name, postcode: c.postcode }]
      }
      return [{ id: c.id, lat: coord.lat, lng: coord.lng, name: c.name, postcode: c.postcode }]
    }),
    [candidates, postcodeCoords]
  )

  // Resolve the URL postcode to coords (this is the "searched" state)
  const searched = useMemo(() => {
    if (!urlPostcode) return null
    const coords = resolvePostcode(urlPostcode, postcodeCoords)
    if (!coords) return null
    return { centre: coords, label: urlPostcode.trim().toUpperCase() }
  }, [urlPostcode, postcodeCoords])

  // Project search results
  const projectResults = useMemo<ProjectWithDistance[]>(() => {
    if (!searched) return []
    return findProjectsNear(searched.centre, Number(radius), projects, postcodeCoords, clients)
  }, [searched, radius, projects, postcodeCoords, clients])

  // Candidate search results
  const candidateResults = useMemo<CandidateWithDistance[]>(() => {
    if (!searched) return []
    return candidates
      .flatMap(c => {
        const pt = allCandidatePoints.find(p => p.id === c.id)
        if (!pt) return []
        const dist = distanceMiles(searched.centre, { lat: pt.lat, lng: pt.lng })
        return dist <= Number(radius) ? [{ candidate: c, distance: dist }] : []
      })
      .sort((a, b) => a.distance - b.distance)
  }, [searched, radius, candidates, allCandidatePoints])

  function handleSearch() {
    const coords = resolvePostcode(postcodeInput, postcodeCoords)
    if (!coords) {
      setSearchError(`Couldn't locate "${postcodeInput}" — enter a postcode matching a project or candidate (e.g. CB2 3BU, M1).`)
      return
    }
    setSearchError('')
    setSearchParams(p => {
      p.set('postcode', postcodeInput.trim().toUpperCase())
      p.set('radius', radius)
      p.set('mode', mode)
      return p
    })
  }

  function handleClear() {
    setPostcodeInput('')
    setSearchError('')
    setSearchParams(p => { p.delete('postcode'); return p }, { replace: true })
  }

  const activeCount = searched
    ? (mode === 'projects' ? projectResults.length : candidateResults.length)
    : (mode === 'projects' ? allProjectPoints.length : allCandidatePoints.length)

  const quickPostcodes = Object.keys(postcodeCoords).slice(0, 8)

  if (loading || dataError) return <DataState loading={loading} error={dataError} />

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h1 className="page-title" style={{ marginBottom: '0.15rem' }}>Geo Mapping</h1>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#6b7280' }}>
            {allProjectPoints.length} projects · {allCandidatePoints.length} candidates mapped
          </p>
        </div>

        {/* View toggle — Projects / Candidates */}
        <div style={{
          display: 'flex', background: '#f1f5f9', borderRadius: '0.6rem',
          padding: '3px', gap: '2px', border: '1px solid #e2e8f0',
        }}>
          {(['projects', 'candidates'] as ViewMode[]).map(v => (
            <button
              key={v}
              onClick={() => setMode(v)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 1rem', borderRadius: '0.45rem', border: 'none',
                cursor: 'pointer', fontSize: '0.88rem', fontWeight: 700,
                transition: 'all 0.15s',
                background: mode === v ? (v === 'projects' ? NAVY : TEAL) : 'transparent',
                color: mode === v ? '#fff' : '#64748b',
              }}
            >
              {v === 'projects' ? <FolderKanban size={14} /> : <Users size={14} />}
              {v === 'projects' ? 'Projects' : 'Candidates'}
            </button>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>
              Postcode / Area
            </label>
            <div className="search-bar">
              <MapPin size={14} style={{ color: GOLD }} />
              <input
                className="input"
                placeholder="e.g. CB2 3BU, M1, SW1A"
                value={postcodeInput}
                onChange={e => setPostcodeInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSearch() }}
              />
            </div>
          </div>
          <div style={{ minWidth: 130 }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.3rem' }}>Radius</label>
            <select className="input" value={radius} onChange={e => setRadius(e.target.value)}>
              {['5','10','20','25','50','100'].map(r => (
                <option key={r} value={r}>{r} miles</option>
              ))}
            </select>
          </div>
          <button className="btn-primary" style={{ height: 38 }} onClick={handleSearch}>
            <Search size={14} /> Search
          </button>
          {searched && (
            <button className="btn-secondary" style={{ height: 38 }} onClick={handleClear}>
              Clear
            </button>
          )}
        </div>

        {searchError && (
          <div style={{ marginTop: '0.65rem', padding: '0.5rem 0.75rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '0.45rem', fontSize: '0.87rem', color: '#dc2626' }}>
            {searchError}
          </div>
        )}

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.65rem', flexWrap: 'wrap' }}>
          <LegendDot color={GOLD} label="Search centre" />
          {mode === 'projects'
            ? <><LegendDot color={NAVY} label="Projects in radius" /><LegendDot color={GREY} label="All projects" /></>
            : <><LegendDot color={TEAL} label="Candidates in radius" /><LegendDot color="#64748b" label="All candidates" /></>
          }
        </div>
      </div>

      {/* Map + Results side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 350px', gap: '1rem', alignItems: 'start' }}>

        {/* Map card */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {/* Map header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.75rem 1rem', borderBottom: '1px solid #e8eaf0',
            background: 'linear-gradient(180deg,#fbfcff,#f4f7fb)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <MapPin size={14} style={{ color: GOLD }} />
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                {searched
                  ? `${activeCount} ${mode} within ${radius} mi of ${searched.label}`
                  : `UK ${mode} map`}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {searched ? (
                <>
                  <span className="badge badge-gold">📍 {searched.label}</span>
                  <span className="badge badge-blue">{radius} mi</span>
                  <span className={`badge ${mode === 'projects' ? 'badge-blue' : 'badge-green'}`}>
                    {activeCount} found
                  </span>
                </>
              ) : (
                <span className="badge badge-gray">{activeCount} pinned</span>
              )}
            </div>
          </div>

          <div style={{ height: 520 }}>
            <MapView
              mode={mode}
              centre={searched?.centre ?? null}
              radiusMiles={Number(radius)}
              centreLabel={searched?.label ?? ''}
              projectResults={projectResults}
              candidateResults={candidateResults}
              allProjectPoints={allProjectPoints}
              allCandidatePoints={allCandidatePoints}
            />
          </div>
        </div>

        {/* Results panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {!searched ? (
            <NoSearchPanel
              mode={mode}
              allProjectPoints={allProjectPoints}
              allCandidatePoints={allCandidatePoints}
              quickPostcodes={quickPostcodes}
              onQuickSearch={(pc) => {
                setPostcodeInput(pc)
                setSearchParams(p => { p.set('postcode', pc); p.set('radius', radius); p.set('mode', mode); return p })
              }}
            />
          ) : mode === 'projects' ? (
            <ProjectResults results={projectResults} radius={radius} label={searched.label} />
          ) : (
            <CandidateResults results={candidateResults} radius={radius} label={searched.label} />
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.77rem', color: '#6b7280' }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
      {label}
    </span>
  )
}

function NoSearchPanel({
  mode, allProjectPoints, allCandidatePoints, quickPostcodes, onQuickSearch,
}: {
  mode: ViewMode
  allProjectPoints: MapPoint[]
  allCandidatePoints: MapPoint[]
  quickPostcodes: string[]
  onQuickSearch: (pc: string) => void
}) {
  return (
    <>
      <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
        {mode === 'projects'
          ? <FolderKanban size={26} style={{ color: NAVY, marginBottom: '0.5rem' }} />
          : <Users size={26} style={{ color: TEAL, marginBottom: '0.5rem' }} />}
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.5 }}>
          {mode === 'projects'
            ? `${allProjectPoints.length} projects pinned. Enter a postcode to search by radius.`
            : `${allCandidatePoints.length} candidates pinned. Enter a postcode to find nearby candidates.`}
        </p>
      </div>
      {quickPostcodes.length > 0 && (
        <div className="card" style={{ padding: '0.875rem 1rem' }}>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.8rem', fontWeight: 700, color: '#334155' }}>Quick search</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {quickPostcodes.map(pc => (
              <button
                key={pc}
                className="badge badge-gray"
                style={{ cursor: 'pointer', border: 'none', fontSize: '0.78rem' }}
                onClick={() => onQuickSearch(pc)}
              >
                {pc}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function ProjectResults({ results, radius, label }: { results: ProjectWithDistance[]; radius: string; label: string }) {
  return (
    <>
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <FolderKanban size={14} style={{ color: NAVY }} />
          <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>Projects</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: NAVY }}>{results.length}</span>
          <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>within {radius} mi of <b>{label}</b></span>
        </div>
      </div>

      <div className="card" style={{ padding: '0.875rem 1rem', maxHeight: 440, overflowY: 'auto' }}>
        {results.length === 0 ? (
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#9ca3af' }}>
            No projects found within {radius} miles. Try a larger radius.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {results.map(({ project, distance, relatedClients }) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                style={{
                  display: 'block', padding: '0.6rem 0.7rem',
                  background: '#f8f9fb', borderRadius: '0.55rem',
                  border: '1px solid #edf1f6', textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {project.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#6b7280', marginTop: '0.1rem' }}>
                      {project.postcode}{project.sector ? ` · ${project.sector}` : ''}{project.stage ? ` · ${project.stage}` : ''}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: GOLD, fontWeight: 800, flexShrink: 0, whiteSpace: 'nowrap' }}>
                    {distance.toFixed(1)} mi
                  </span>
                </div>
                {project.value && (
                  <div style={{ fontSize: '0.73rem', color: '#374151', fontWeight: 600, marginTop: '0.15rem' }}>{project.value}</div>
                )}
                {relatedClients.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.3rem', fontSize: '0.72rem', color: '#6b7280' }}>
                    <Building2 size={9} style={{ flexShrink: 0 }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {relatedClients.map(c => c.name).join(', ')}
                    </span>
                    <ChevronRight size={9} style={{ marginLeft: 'auto', flexShrink: 0 }} />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

function CandidateResults({ results, radius, label }: { results: CandidateWithDistance[]; radius: string; label: string }) {
  return (
    <>
      <div className="card" style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Users size={14} style={{ color: TEAL }} />
          <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>Candidates</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
          <span style={{ fontSize: '1.75rem', fontWeight: 800, color: TEAL }}>{results.length}</span>
          <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>within {radius} mi of <b>{label}</b></span>
        </div>
      </div>

      <div className="card" style={{ padding: '0.875rem 1rem', maxHeight: 440, overflowY: 'auto' }}>
        {results.length === 0 ? (
          <p style={{ margin: 0, fontSize: '0.88rem', color: '#9ca3af' }}>
            No candidates found within {radius} miles. Try a larger radius.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {results.map(({ candidate, distance }) => (
              <Link
                key={candidate.id}
                to={`/candidates/${candidate.id}`}
                style={{
                  display: 'block', padding: '0.6rem 0.7rem',
                  background: '#f0fdfc', borderRadius: '0.55rem',
                  border: '1px solid #99f6e4', textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {candidate.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: TEAL, marginTop: '0.1rem', fontWeight: 600 }}>
                      {candidate.role}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>
                      {candidate.postcode}{candidate.discipline ? ` · ${candidate.discipline}` : ''}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: GOLD, fontWeight: 800, flexShrink: 0, whiteSpace: 'nowrap' }}>
                    {distance.toFixed(1)} mi
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '999px', background: candidate.status === 'Available' ? '#dcfce7' : '#f1f5f9', color: candidate.status === 'Available' ? '#15803d' : '#475569', fontWeight: 600 }}>
                    {candidate.status}
                  </span>
                  {candidate.travelRadius > 0 && (
                    <span style={{ fontSize: '0.7rem', padding: '1px 6px', borderRadius: '999px', background: '#f0fdf4', color: '#166534', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Briefcase size={9} /> {candidate.travelRadius} mi radius
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
