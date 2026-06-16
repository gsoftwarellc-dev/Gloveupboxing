// AI client — single seam between the UI and a real AI backend.
//
// The app is currently frontend-only, so there is NO API key available in the
// browser and these functions return deterministic stubbed analysis. When a
// backend is added, replace the bodies of `analyzeCv`, `rankProfiles`, and
// `formatCv` with `fetch('/api/...')` calls. The function signatures and return
// shapes are the contract the UI relies on — keep them stable.
//
// Recommended backend: a serverless/Node function that calls Claude
// (claude-opus-4-8) with the CV text, keeping the ANTHROPIC_API_KEY server-side.

import type { CvRecord } from '../data/cvs'

export const AI_ENABLED = false // flip to true once a real backend is wired in

export interface CvAnalysis {
  summary: string
  strengths: string[]
  concerns: string[]
  keySkills: string[]
  yearsExperience: number | null
  /** 0–100 overall quality/readiness score */
  score: number
}

export interface RankedProfile {
  cvId: string
  candidateName: string
  /** 0–100 fit score for the supplied brief */
  matchScore: number
  reasons: string[]
}

/** Simulated latency so the UI's loading states are exercised realistically. */
function delay<T>(value: T, ms = 650): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value), ms))
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

// --- Stubbed heuristics (replace with real AI calls) ---------------------

const SKILL_KEYWORDS = [
  'NEC4', 'JCT', 'Revit', 'BIM', 'Primavera', 'Asta', 'SMSTS', 'CSCS', 'NEBOSH',
  'cost planning', 'valuations', 'final accounts', 'setting out', 'programme',
  'procurement', 'stakeholder', 'subcontractor', 'health & safety', 'CDM',
]

export async function analyzeCv(cv: CvRecord): Promise<CvAnalysis> {
  if (AI_ENABLED) {
    // TODO: const res = await fetch('/api/cv/analyze', { method: 'POST', body: JSON.stringify({ text: cv.rawText }) })
    //       return res.json()
  }

  const text = cv.rawText || ''
  const lower = text.toLowerCase()
  const words = wordCount(text)
  const found = SKILL_KEYWORDS.filter(k => lower.includes(k.toLowerCase()))
  const yearsMatch = lower.match(/(\d{1,2})\s*(?:\+)?\s*years?/)
  const years = yearsMatch ? Number(yearsMatch[1]) : cv.experienceYears ?? null

  const lengthScore = Math.min(40, Math.round((words / 400) * 40))
  const skillScore = Math.min(35, found.length * 6)
  const contactScore = (lower.includes('@') ? 10 : 0) + (/\b07\d|\+44/.test(text) ? 5 : 0)
  const certScore = /cscs|smsts|nebosh|mrics|prince2/.test(lower) ? 10 : 0
  const score = Math.max(5, Math.min(100, lengthScore + skillScore + contactScore + certScore))

  const strengths: string[] = []
  if (found.length >= 4) strengths.push(`Strong technical keyword coverage (${found.length} relevant terms)`)
  if (certScore) strengths.push('Holds recognised construction certifications')
  if (years && years >= 8) strengths.push(`Substantial experience (~${years} years)`)
  if (words >= 350) strengths.push('Detailed work history provided')
  if (!strengths.length) strengths.push('CV on file and ready to review')

  const concerns: string[] = []
  if (words < 150) concerns.push('CV is short — limited detail to assess')
  if (!lower.includes('@')) concerns.push('No email address detected in CV text')
  if (!certScore) concerns.push('No certifications detected — verify cards/qualifications')
  if (found.length < 2) concerns.push('Few role-specific keywords — confirm sector fit')

  return delay({
    summary:
      `${cv.candidateName || 'Candidate'} — ${cv.role || 'role unspecified'}. ` +
      `Approx. ${years ?? '?'} years' experience, ${found.length} relevant skill markers detected. ` +
      `[Stubbed analysis — connect an AI backend for real assessment.]`,
    strengths,
    concerns,
    keySkills: found.slice(0, 8),
    yearsExperience: years,
    score,
  })
}

export async function rankProfiles(cvs: CvRecord[], brief: string): Promise<RankedProfile[]> {
  if (AI_ENABLED) {
    // TODO: POST { brief, cvs: cvs.map(c => ({ id, text })) } to /api/cv/rank
  }

  const briefLower = brief.toLowerCase()
  const briefTerms = Array.from(new Set(briefLower.split(/[^a-z0-9&+]+/).filter(t => t.length > 2)))

  const ranked = cvs.map(cv => {
    const hay = `${cv.candidateName} ${cv.role} ${cv.discipline} ${cv.location} ${cv.rawText}`.toLowerCase()
    const hits = briefTerms.filter(t => hay.includes(t))
    const base = briefTerms.length ? (hits.length / briefTerms.length) * 80 : 40
    const expBonus = Math.min(20, (cv.experienceYears ?? 0))
    const matchScore = Math.max(5, Math.min(100, Math.round(base + expBonus)))
    const reasons: string[] = []
    if (hits.length) reasons.push(`Matches: ${hits.slice(0, 5).join(', ')}`)
    if (cv.discipline && briefLower.includes(cv.discipline.toLowerCase())) reasons.push(`Discipline match: ${cv.discipline}`)
    if (cv.experienceYears) reasons.push(`${cv.experienceYears} years' experience`)
    if (!reasons.length) reasons.push('No strong brief overlap — included for completeness')
    return { cvId: cv.id, candidateName: cv.candidateName, matchScore, reasons }
  })

  ranked.sort((a, b) => b.matchScore - a.matchScore)
  return delay(ranked, 800)
}

/**
 * Reformats raw CV text into the Backfill house structure as plain sections.
 * The stub does light parsing; a real AI backend would do far better extraction.
 * Returns structured sections the UI renders into the branded template.
 */
export interface FormattedCv {
  name: string
  headline: string
  contact: { email?: string; phone?: string; location?: string }
  profile: string
  experience: { lines: string[] }
  skills: string[]
  certifications: string[]
}

export async function formatCv(cv: CvRecord): Promise<FormattedCv> {
  if (AI_ENABLED) {
    // TODO: POST { text: cv.rawText } to /api/cv/format and return the structured result
  }

  const text = cv.rawText || ''
  const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[\w.-]+/)
  const phoneMatch = text.match(/(?:\+44|0)\d[\d\s]{7,}\d/)

  // Split into non-empty lines for a best-effort experience block.
  const lines = text.split(/\n+/).map(l => l.trim()).filter(Boolean)
  const skills = SKILL_KEYWORDS.filter(k => text.toLowerCase().includes(k.toLowerCase()))

  return delay({
    name: cv.candidateName || 'Candidate Name',
    headline: cv.role || cv.discipline || 'Construction Professional',
    contact: {
      email: emailMatch?.[0] ?? cv.email,
      phone: phoneMatch?.[0] ?? cv.phone,
      location: cv.location,
    },
    profile:
      lines.slice(0, 3).join(' ') ||
      `Experienced ${cv.role || 'construction professional'} based in ${cv.location || 'the UK'}.`,
    experience: { lines: lines.length > 3 ? lines.slice(3) : lines },
    skills: skills.length ? skills : (cv.skills ?? []),
    certifications: cv.certificates ?? [],
  })
}
