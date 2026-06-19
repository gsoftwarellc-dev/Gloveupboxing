import { useMemo, useState } from 'react'
import {
  FileText, Search, Copy, Check, Sparkles, Wand2, ClipboardPaste,
  AlertTriangle, Star, X, Trophy, Download, Printer, Mail, MapPin, Building2,
} from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { CvRecord } from '../types/crm'
import {
  analyzeCv, rankProfiles, formatCv,
  type CvAnalysis, type RankedProfile, type FormattedCv,
} from '../utils/aiClient'
import { buildFormattedCvHtml } from '../utils/cvTemplate'

function CopyButton({ text, label = 'Copy', className = 'btn-secondary' }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }
  return (
    <button className={className} type="button" onClick={copy} disabled={!text}>
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Copied' : label}
    </button>
  )
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 75 ? '#16a34a' : score >= 50 ? '#b8942e' : '#dc2626'
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 800, color }}>
      <Star size={14} style={{ fill: color, color }} />{score}
    </span>
  )
}

export default function Cvs() {
  const { cvs: allCvs, loading, error } = useCrmData()
  const [search, setSearch] = useState('')
  const [disciplineFilter, setDisciplineFilter] = useState('All')
  const [selectedIdOverride, setSelectedIdOverride] = useState<string | null>(null)

  // Per-CV analysis
  const [analysis, setAnalysis] = useState<CvAnalysis | null>(null)
  const [analyzing, setAnalyzing] = useState(false)

  // Formatting
  const [formatted, setFormatted] = useState<FormattedCv | null>(null)
  const [formatting, setFormatting] = useState(false)

  // Ranking
  const [brief, setBrief] = useState('')
  const [ranking, setRanking] = useState(false)
  const [ranked, setRanked] = useState<RankedProfile[] | null>(null)

  const allDisciplines = Array.from(new Set(allCvs.map(c => c.discipline).filter(Boolean))).sort()

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return allCvs.filter(c => {
      if (disciplineFilter !== 'All' && c.discipline !== disciplineFilter) return false
      if (!q) return true
      return (
        c.candidateName.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.rawText.toLowerCase().includes(q)
      )
    })
  }, [allCvs, search, disciplineFilter])

  const selectedId = selectedIdOverride ?? allCvs[0]?.id ?? null
  const selected = allCvs.find(c => c.id === selectedId) ?? null

  if (loading || error) return <DataState loading={loading} error={error} />

  function openCv(cv: CvRecord) {
    setSelectedIdOverride(cv.id)
    setAnalysis(null)
    setFormatted(null)
  }

  async function runAnalysis() {
    if (!selected) return
    setAnalyzing(true)
    setAnalysis(null)
    try {
      setAnalysis(await analyzeCv(selected))
    } finally {
      setAnalyzing(false)
    }
  }

  async function runFormat() {
    if (!selected) return
    setFormatting(true)
    setFormatted(null)
    try {
      setFormatted(await formatCv(selected))
    } finally {
      setFormatting(false)
    }
  }

  async function runRanking() {
    if (!brief.trim()) return
    setRanking(true)
    setRanked(null)
    try {
      setRanked(await rankProfiles(filtered.length ? filtered : allCvs, brief))
    } finally {
      setRanking(false)
    }
  }

  function downloadFormatted() {
    if (!formatted) return
    const html = buildFormattedCvHtml(formatted)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${formatted.name.replace(/\s+/g, '-')}-Backfill-CV.html`
    a.click()
    URL.revokeObjectURL(url)
  }

  function printFormatted() {
    if (!formatted) return
    const w = window.open('', '_blank')
    if (!w) return
    w.document.write(buildFormattedCvHtml(formatted))
    w.document.close()
    w.focus()
    w.print()
  }

  const formattedPlainText = formatted
    ? [
        formatted.name,
        formatted.headline,
        [formatted.contact.email, formatted.contact.phone, formatted.contact.location].filter(Boolean).join(' · '),
        '',
        'PROFILE',
        formatted.profile,
        '',
        'EXPERIENCE',
        ...formatted.experience.lines,
        '',
        formatted.skills.length ? `SKILLS\n${formatted.skills.join(', ')}` : '',
        formatted.certifications.length ? `CERTIFICATIONS\n${formatted.certifications.join(', ')}` : '',
      ].filter(Boolean).join('\n')
    : ''

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Candidate CVs</h1>
          <p style={{ color: '#000', fontSize: '1.05rem', margin: '0.25rem 0 0' }}>
            Read CVs submitted through the application form, copy them, rank profiles against a brief with AI, and reformat to the Backfill standard.
          </p>
        </div>
      </div>


      {/* AI ranking across the list */}
      <div className="card" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Trophy size={18} style={{ color: '#b8942e' }} />
          <h3 className="section-title" style={{ margin: 0 }}>Find the Best Profiles</h3>
        </div>
        <p style={{ margin: '0 0 0.75rem', color: '#4b5563', fontSize: '0.95rem' }}>
          Describe the role or what the client is looking for, and rank the CVs by fit.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <input
            className="input"
            style={{ flex: 1, minWidth: 260 }}
            placeholder="e.g. Senior Site Manager, Cambridge, NEC4, education sector, 10+ years..."
            value={brief}
            onChange={e => setBrief(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') runRanking() }}
          />
          <button className="btn-primary" onClick={runRanking} disabled={ranking || !brief.trim()}>
            <Sparkles size={15} />{ranking ? 'Ranking…' : 'Rank Profiles'}
          </button>
        </div>
        {ranked && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {ranked.length === 0 && <div style={{ color: '#6b7280' }}>No CVs to rank yet.</div>}
            {ranked.slice(0, 10).map((r, i) => (
              <button
                key={r.cvId}
                type="button"
                onClick={() => { const cv = allCvs.find(c => c.id === r.cvId); if (cv) openCv(cv) }}
                style={{ textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.7rem 0.875rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.5rem' }}
              >
                <span style={{ fontWeight: 800, color: '#9ca3af', width: 22 }}>{i + 1}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#111' }}>{r.candidateName}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.reasons.join(' · ')}</div>
                </div>
                <ScoreBadge score={r.matchScore} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="cv-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 340px) 1fr', gap: '1.25rem', alignItems: 'start' }}>
        {/* List */}
        <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={14} style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input className="input" style={{ paddingLeft: '2rem' }} placeholder="Search CVs..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="input" value={disciplineFilter} onChange={e => setDisciplineFilter(e.target.value)}>
            <option>All</option>
            {allDisciplines.map(d => <option key={d}>{d}</option>)}
          </select>
          <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{filtered.length} CV{filtered.length !== 1 ? 's' : ''}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '60vh', overflowY: 'auto' }}>
            {filtered.map(cv => {
              const active = cv.id === selectedId
              return (
                <button
                  key={cv.id}
                  type="button"
                  onClick={() => openCv(cv)}
                  style={{
                    textAlign: 'left', cursor: 'pointer', padding: '0.7rem 0.75rem', borderRadius: '0.5rem',
                    border: active ? '1px solid #b8942e' : '1px solid #e8eaf0',
                    background: active ? 'rgba(184,148,46,0.06)' : '#fff',
                  }}
                >
                  <div style={{ fontWeight: 700, color: '#111' }}>{cv.candidateName}</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280' }}>{cv.role}{cv.location ? ` · ${cv.location}` : ''}</div>
                </button>
              )
            })}
            {filtered.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', textAlign: 'center', padding: '1.5rem 0.5rem', color: '#9ca3af' }}>
                <FileText size={28} />
                <div style={{ fontSize: '0.9rem' }}>
                  {allCvs.length === 0 ? 'No CVs submitted yet.' : 'No CVs match your search.'}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reader / tools */}
        <div className="card" style={{ padding: '1.25rem', minHeight: 320 }}>
          {!selected && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: '#9ca3af', padding: '3rem 1rem', textAlign: 'center' }}>
              <ClipboardPaste size={36} />
              <h3 style={{ color: '#374151', margin: 0 }}>No CV selected</h3>
              <p style={{ margin: 0, maxWidth: 420 }}>
                When candidates submit the application form with their CV, they appear in the list on the left.
                Select one to read it, copy it, analyse it, or reformat it to the Backfill standard.
              </p>
            </div>
          )}

          {selected && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: '#111' }}>{selected.candidateName}</h2>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.35rem', color: '#6b7280', fontSize: '0.9rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Building2 size={13} />{selected.discipline || selected.role}</span>
                    {selected.location && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={13} />{selected.location}</span>}
                    {selected.email && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={13} />{selected.email}</span>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <CopyButton text={selected.rawText} label="Copy CV" />
                  <button className="btn-secondary" onClick={runAnalysis} disabled={analyzing}>
                    <Sparkles size={14} />{analyzing ? 'Analysing…' : 'AI Analyse'}
                  </button>
                  <button className="btn-primary" onClick={runFormat} disabled={formatting}>
                    <Wand2 size={14} />{formatting ? 'Formatting…' : 'Format to our standard'}
                  </button>
                </div>
              </div>

              {analysis && (
                <div style={{ padding: '1rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, color: '#0f172a' }}>
                      <Sparkles size={15} style={{ color: '#b8942e' }} /> AI Assessment
                    </div>
                    <span>Score <ScoreBadge score={analysis.score} /></span>
                  </div>
                  <p style={{ margin: '0 0 0.75rem', color: '#374151', fontSize: '0.92rem', lineHeight: 1.6 }}>{analysis.summary}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#16a34a', fontSize: '0.82rem', marginBottom: '0.3rem' }}>Strengths</div>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#374151', fontSize: '0.86rem', lineHeight: 1.7 }}>
                        {analysis.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '0.82rem', marginBottom: '0.3rem' }}>To check</div>
                      <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#374151', fontSize: '0.86rem', lineHeight: 1.7 }}>
                        {analysis.concerns.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  </div>
                  {analysis.keySkills.length > 0 && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {analysis.keySkills.map(s => <span key={s} className="badge badge-gold">{s}</span>)}
                    </div>
                  )}
                </div>
              )}

              {formatted && (
                <div style={{ border: '1px solid #e8eaf0', borderRadius: '0.75rem', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', padding: '0.6rem 0.875rem', background: '#1a1a2e' }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Wand2 size={14} style={{ color: '#d4af5a' }} />Backfill-Formatted CV
                    </span>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <CopyButton text={formattedPlainText} label="Copy" className="btn-secondary" />
                      <button className="btn-secondary" onClick={printFormatted}><Printer size={14} />Print</button>
                      <button className="btn-secondary" onClick={downloadFormatted}><Download size={14} />Download</button>
                      <button className="btn-secondary" onClick={() => setFormatted(null)}><X size={14} /></button>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem', background: '#fff' }}>
                    <FormattedPreview cv={formatted} />
                  </div>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <div className="label">Submitted CV</div>
                  <span style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                    {selected.fileName ? selected.fileName : 'Pasted text'} · {selected.source}
                  </span>
                </div>
                {selected.rawText ? (
                  <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', fontSize: '0.9rem', color: '#374151', lineHeight: 1.65, background: '#fcfcfd', border: '1px solid #eef0f4', borderRadius: '0.5rem', padding: '1rem', maxHeight: '50vh', overflowY: 'auto' }}>
                    {selected.rawText}
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#92400e', background: '#fefce8', border: '1px solid #f5d36b', borderRadius: '0.5rem', padding: '0.875rem' }}>
                    <AlertTriangle size={15} /> This applicant uploaded a file but no extractable text is stored. Connect a backend to parse uploaded PDFs/DOCX.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FormattedPreview({ cv }: { cv: FormattedCv }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1a1a2e' }}>
      <div style={{ borderBottom: '3px solid #b8942e', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.01em' }}>{cv.name}</div>
        <div style={{ color: '#b8942e', fontWeight: 700, fontSize: '1rem' }}>{cv.headline}</div>
        <div style={{ marginTop: '0.35rem', color: '#6b7280', fontSize: '0.85rem' }}>
          {[cv.contact.email, cv.contact.phone, cv.contact.location].filter(Boolean).join('  ·  ')}
        </div>
      </div>
      {cv.profile && <Section title="Profile"><p style={{ margin: 0, lineHeight: 1.65 }}>{cv.profile}</p></Section>}
      {cv.experience.lines.length > 0 && (
        <Section title="Experience">
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.7 }}>
            {cv.experience.lines.slice(0, 30).map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </Section>
      )}
      {cv.skills.length > 0 && (
        <Section title="Key Skills">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {cv.skills.map(s => <span key={s} style={{ background: 'rgba(184,148,46,0.1)', color: '#8a6d1f', borderRadius: '999px', padding: '0.2rem 0.7rem', fontSize: '0.82rem', fontWeight: 600 }}>{s}</span>)}
          </div>
        </Section>
      )}
      {cv.certifications.length > 0 && (
        <Section title="Certifications">
          <div style={{ lineHeight: 1.7 }}>{cv.certifications.join(' · ')}</div>
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1a2e', marginBottom: '0.4rem' }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color: '#374151' }}>{children}</div>
    </div>
  )
}
