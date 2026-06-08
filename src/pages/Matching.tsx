import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Search, Star, MapPin, CheckCircle, XCircle, Brain, Award, Clock, Banknote } from 'lucide-react'
import { candidates, vacancies } from '../data/mock'

function MatchBar({ score }: { score: number }) {
  const color = score >= 80 ? '#34d399' : score >= 65 ? '#fbbf24' : '#f87171'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
      <div style={{ flex: 1, height: 6, background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${score}%`, background: color, borderRadius: '9999px', transition: 'width 0.5s ease' }} />
      </div>
      <span style={{ fontSize: '1.05rem', fontWeight: 700, color, minWidth: '2.5rem', textAlign: 'right' }}>{score}%</span>
    </div>
  )
}

function computeMatch(c: typeof candidates[0], v: typeof vacancies[0]) {
  const reasons: { text: string; pass: boolean; icon: typeof CheckCircle }[] = []
  let score = 0

  // Discipline / role match
  const disciplineMatch = c.discipline === v.discipline
  reasons.push({ text: disciplineMatch ? `Discipline match: ${c.discipline}` : `Discipline mismatch: ${c.discipline} vs ${v.discipline}`, pass: disciplineMatch, icon: Zap })
  if (disciplineMatch) score += 30

  // Salary match — parse vacancy salary range
  const salaryMatch = (() => {
    const m = v.salary.match(/£(\d+)k[^£]*£(\d+)k/)
    if (!m) return true
    const [min, max] = [parseInt(m[1]) * 1000, parseInt(m[2]) * 1000]
    return c.salary >= min * 0.9 && c.salary <= max * 1.15
  })()
  reasons.push({ text: salaryMatch ? `Salary aligned: £${(c.salary / 1000).toFixed(0)}k within ${v.salary}` : `Salary mismatch: £${(c.salary / 1000).toFixed(0)}k vs ${v.salary}`, pass: salaryMatch, icon: Banknote })
  if (salaryMatch) score += 20

  // Location / radius
  const sameCity = c.location === v.location
  const nearbyCity = ['Manchester', 'Birmingham', 'London', 'Glasgow', 'Leeds'].includes(c.location) &&
    ['Manchester', 'Birmingham', 'London', 'Glasgow', 'Leeds'].includes(v.location) &&
    c.travelRadius >= 30
  const locationMatch = sameCity || (nearbyCity && c.travelRadius >= 20)
  reasons.push({
    text: sameCity ? `Location match: both in ${c.location}` : locationMatch ? `Within travel radius: ${c.location} → ${v.location} (${c.travelRadius}mi radius)` : `Location gap: ${c.location} → ${v.location}, ${c.travelRadius}mi radius`,
    pass: locationMatch, icon: MapPin
  })
  if (locationMatch) score += 20

  // Certificate matching
  const requiredCerts = v.requiredCerts || []
  const matchedCerts = requiredCerts.filter(rc =>
    c.certificates.some(cc => cc.toLowerCase().includes(rc.toLowerCase()) || rc.toLowerCase().includes(cc.toLowerCase()))
  )
  const certsPass = requiredCerts.length === 0 || matchedCerts.length >= Math.ceil(requiredCerts.length * 0.5)
  reasons.push({
    text: requiredCerts.length === 0 ? 'No certificate requirements' :
      certsPass ? `Certificates: ${matchedCerts.length}/${requiredCerts.length} matched (${matchedCerts.join(', ')})` :
        `Missing certificates: ${requiredCerts.filter(rc => !matchedCerts.includes(rc)).join(', ')}`,
    pass: certsPass, icon: Award
  })
  if (certsPass) score += 20

  // Availability
  const availDate = c.availability ? new Date(c.availability) : null
  const availPass = !availDate || availDate <= new Date('2025-09-01')
  reasons.push({
    text: availPass ? `Available: ${c.availability || 'Immediately'}` : `Not available until ${c.availability}`,
    pass: availPass, icon: Clock
  })
  if (availPass) score += 10

  return { score, reasons }
}

export default function Matching() {
  const [selectedVacancy, setSelectedVacancy] = useState(vacancies[0].id)
  const [mode, setMode] = useState<'vacancy' | 'candidate'>('vacancy')
  const [search, setSearch] = useState('')

  const vacancy = vacancies.find(v => v.id === selectedVacancy)!

  const matchedCandidates = candidates
    .map(c => ({ ...c, ...computeMatch(c, vacancy) }))
    .sort((a, b) => b.score - a.score)

  const filtered = matchedCandidates.filter(c => {
    const q = search.toLowerCase()
    return c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.location.toLowerCase().includes(q)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Candidate Matching</h1>
          <p style={{ color: '#000000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>AI-assisted candidate-to-vacancy matching with explainable scores</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.875rem', background: 'rgba(184,148,46,0.1)', border: '1px solid rgba(184,148,46,0.3)', borderRadius: '0.5rem', fontSize: '1.05rem', color: '#b8942e' }}>
            <Brain size={14} />AI Matching Active
          </div>
        </div>
      </div>

      {/* Mode tabs */}
      <div className="tab-bar">
        <button className={`tab ${mode === 'vacancy' ? 'active' : ''}`} onClick={() => setMode('vacancy')}>Match Candidates to Vacancy</button>
        <button className={`tab ${mode === 'candidate' ? 'active' : ''}`} onClick={() => setMode('candidate')}>Match Vacancies to Candidate</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.25rem', alignItems: 'start' }}>
        {/* Vacancy selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div className="card" style={{ padding: '0.875rem' }}>
            <h3 className="section-title" style={{ marginBottom: '0.875rem' }}>Select Vacancy</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              {vacancies.filter(v => v.status === 'active').map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVacancy(v.id)}
                  style={{
                    background: selectedVacancy === v.id ? 'rgba(184,148,46,0.12)' : 'transparent',
                    border: selectedVacancy === v.id ? '1px solid rgba(184,148,46,0.3)' : '1px solid transparent',
                    borderRadius: '0.5rem', padding: '0.625rem 0.75rem', textAlign: 'left', cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#000000' }}>{v.title}</div>
                  <div style={{ fontSize: '0.9rem', marginTop: '0.2rem', color: '#000000' }}>{v.client} • {v.location}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Vacancy requirements */}
          <div className="card" style={{ padding: '0.875rem' }}>
            <h4 className="label" style={{ marginBottom: '0.75rem' }}>Vacancy Requirements</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Discipline', value: vacancy.discipline },
                { label: 'Location', value: vacancy.location },
                { label: 'Salary', value: vacancy.salary },
                { label: 'Type', value: vacancy.type },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem' }}>
                  <span style={{ color: '#000000', fontWeight: 500 }}>{r.label}</span>
                  <span style={{ color: '#000000', fontWeight: 700 }}>{r.value}</span>
                </div>
              ))}
              {vacancy.requiredCerts && vacancy.requiredCerts.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#000000', fontWeight: 600, marginBottom: '0.3rem' }}>Required Certs</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                    {vacancy.requiredCerts.map(c => (
                      <span key={c} className="badge badge-gold">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Match results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 className="section-title">
              Matched Candidates
              <span style={{ color: '#000000', fontWeight: 400, fontSize: '1.05rem', marginLeft: '0.5rem' }}>({filtered.length} ranked)</span>
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div className="search-bar" style={{ minWidth: 200 }}>
                <Search size={13} />
                <input className="input" placeholder="Filter candidates..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
          </div>

          {filtered.map((c) => (
            <div key={c.id} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                background: c.score >= 80 ? 'linear-gradient(135deg,#b8942e,#d4af5a)' : '#f1f5f9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: c.score >= 80 ? '#ffffff' : '#000000', fontWeight: 700, fontSize: '1.05rem'
              }}>{c.name.split(' ').map(n => n[0]).join('')}</div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: '#000000', fontSize: '1.05rem' }}>{c.name}</div>
                    <div style={{ fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>{c.role} • {c.discipline}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '1.05rem', color: '#000000', marginTop: '0.2rem' }}>
                      <MapPin size={11} />{c.location} • £{(c.salary / 1000).toFixed(0)}k • {c.experienceYears}yrs exp
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: '0.8rem', color: '#000000', marginBottom: '0.25rem' }}>Match Score</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: c.score >= 80 ? '#34d399' : c.score >= 65 ? '#fbbf24' : '#f87171', lineHeight: 1 }}>{c.score}%</div>
                  </div>
                </div>

                <div style={{ marginTop: '0.75rem' }}>
                  <MatchBar score={c.score} />
                </div>

                {/* Explainable reasons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.625rem' }}>
                  {c.reasons.map((r, i) => (
                    <span key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      fontSize: '0.82rem', fontWeight: 600,
                      color: r.pass ? '#16a34a' : '#dc2626',
                      background: r.pass ? '#dcfce7' : '#fee2e2',
                      padding: '0.15rem 0.5rem', borderRadius: '4px'
                    }}>
                      {r.pass ? <CheckCircle size={10} /> : <XCircle size={10} />}
                      {r.text}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1px', marginTop: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill={s <= c.rating ? '#b8942e' : 'none'} color={s <= c.rating ? '#b8942e' : '#d1d5db'} />)}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexShrink: 0 }}>
                <Link to={`/candidates/${c.id}`} className="btn-secondary" style={{ fontSize: '1.05rem', padding: '0.35rem 0.75rem' }}>Profile</Link>
                <button className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.35rem 0.75rem' }}>
                  <Zap size={12} />Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
