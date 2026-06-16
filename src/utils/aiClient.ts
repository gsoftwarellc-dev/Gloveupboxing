// AI client — single seam between the UI and a real AI backend.
//
// The app is currently frontend-only, so there is NO API key available in the
// browser and these functions return deterministic stubbed analysis. When a
// backend is added, replace the bodies of `analyzeCv`, `rankProfiles`,
// `formatCv`, and `parseClients` with `fetch('/api/...')` calls. The function
// signatures and return shapes are the contract the UI relies on — keep stable.
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

// --- Client data parsing -------------------------------------------------

export interface ParsedContact {
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface ParsedClient {
  name: string
  disciplines: string[]
  contacts: ParsedContact[]
}

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/
const PHONE_RE = /(?:\+44\s?|0)(?:\d\s?){9,12}/

/** Header keywords → which column a value belongs to. */
function classifyHeader(h: string): keyof ParsedContact | 'company' | 'discipline' | null {
  const k = h.trim().toLowerCase()
  if (/(company|client|firm|organisation|organization|business)/.test(k)) return 'company'
  if (/(discipline|trade|sector|category)/.test(k)) return 'discipline'
  if (/(e-?mail)/.test(k)) return 'email'
  if (/(phone|tel|mobile|number)/.test(k)) return 'phone'
  if (/(role|title|position|job)/.test(k)) return 'role'
  if (/(name|contact)/.test(k)) return 'name'
  return null
}

function splitRow(line: string): string[] {
  if (line.includes('\t')) return line.split('\t').map(c => c.trim())
  // Fall back to comma, but avoid splitting inside obvious emails handled separately.
  return line.split(',').map(c => c.trim())
}

/**
 * Parses pasted spreadsheet/table data (tab- or comma-separated, optional
 * header row) into structured clients. Each row becomes a contact; rows sharing
 * the same company name are grouped into one client.
 *
 * On-device heuristic parsing for now. When an AI backend exists, swap the body
 * for `fetch('/api/clients/parse', ...)` — keep the ParsedClient[] return shape.
 */
export async function parseClients(raw: string): Promise<ParsedClient[]> {
  if (AI_ENABLED) {
    // TODO: POST { text: raw } to /api/clients/parse and return ParsedClient[]
  }

  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  if (!lines.length) return delay([], 300)

  // Detect a header row: first row with no email/phone and recognisable headers.
  let headerMap: (ReturnType<typeof classifyHeader>)[] | null = null
  let startIndex = 0
  const firstCells = splitRow(lines[0])
  const looksLikeHeader =
    !EMAIL_RE.test(lines[0]) &&
    firstCells.filter(c => classifyHeader(c)).length >= 2
  if (looksLikeHeader) {
    headerMap = firstCells.map(classifyHeader)
    startIndex = 1
  }

  const grouped = new Map<string, ParsedClient>()

  for (let i = startIndex; i < lines.length; i++) {
    const cells = splitRow(lines[i])
    const contact: ParsedContact = { name: '' }
    let company = ''
    const disciplines: string[] = []

    if (headerMap) {
      headerMap.forEach((kind, idx) => {
        const val = cells[idx]
        if (!val) return
        if (kind === 'company') company = val
        else if (kind === 'discipline') disciplines.push(...val.split(/[;/]/).map(s => s.trim()).filter(Boolean))
        else if (kind === 'name') contact.name = val
        else if (kind === 'role') contact.role = val
        else if (kind === 'email') contact.email = val
        else if (kind === 'phone') contact.phone = val
      })
    }

    // Fallback / fill gaps from raw cell content regardless of header.
    for (const cell of cells) {
      if (!contact.email) { const m = cell.match(EMAIL_RE); if (m) contact.email = m[0] }
      if (!contact.phone) { const m = cell.match(PHONE_RE); if (m) contact.phone = m[0].trim() }
    }
    if (!company) {
      // First non-email, non-phone-looking cell is the company if nothing else claimed it.
      company = cells.find(c => c && !EMAIL_RE.test(c) && !PHONE_RE.test(c)) || ''
    }
    if (!contact.name) {
      // Derive a contact name from the email local part if we have nothing better.
      if (contact.email) {
        contact.name = contact.email.split('@')[0].replace(/[._]+/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase())
      }
    }

    if (!company && !contact.name && !contact.email) continue

    const key = (company || contact.name).toLowerCase()
    const existing = grouped.get(key)
    if (existing) {
      if (contact.name || contact.email) existing.contacts.push(contact)
      for (const d of disciplines) if (!existing.disciplines.includes(d)) existing.disciplines.push(d)
    } else {
      grouped.set(key, {
        name: company || contact.name || 'Unnamed Client',
        disciplines,
        contacts: contact.name || contact.email ? [contact] : [],
      })
    }
  }

  return delay(Array.from(grouped.values()), 500)
}

// --- Project data parsing ------------------------------------------------

export interface ParsedProject {
  name: string
  client?: string
  location?: string
  postcode?: string
  value?: string
  sector?: string
  stage?: string
  startDate?: string
}

const POSTCODE_RE = /\b[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}\b/i
const VALUE_RE = /£\s?[\d,.]+\s?(?:bn|m|k)?/i

function classifyProjectHeader(h: string): keyof ParsedProject | null {
  const k = h.trim().toLowerCase()
  if (/(project|scheme|job|development|title)/.test(k)) return 'name'
  if (/(client|customer|employer)/.test(k)) return 'client'
  if (/(postcode|post code)/.test(k)) return 'postcode'
  if (/(location|address|site|town|city)/.test(k)) return 'location'
  if (/(value|contract|budget|£|gbp|worth)/.test(k)) return 'value'
  if (/(sector|category|type)/.test(k)) return 'sector'
  if (/(stage|phase|status)/.test(k)) return 'stage'
  if (/(start|begin|date)/.test(k)) return 'startDate'
  return null
}

/**
 * Parses pasted spreadsheet/table data into structured projects (one row = one
 * project). On-device heuristic parsing for now; swap for `fetch('/api/projects/parse')`
 * when an AI backend exists. Keep the ParsedProject[] return shape stable.
 */
export async function parseProjects(raw: string): Promise<ParsedProject[]> {
  if (AI_ENABLED) {
    // TODO: POST { text: raw } to /api/projects/parse and return ParsedProject[]
  }

  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  if (!lines.length) return delay([], 300)

  let headerMap: (ReturnType<typeof classifyProjectHeader>)[] | null = null
  let startIndex = 0
  const firstCells = splitRow(lines[0])
  const looksLikeHeader =
    !VALUE_RE.test(lines[0]) &&
    !POSTCODE_RE.test(lines[0]) &&
    firstCells.filter(c => classifyProjectHeader(c)).length >= 2
  if (looksLikeHeader) {
    headerMap = firstCells.map(classifyProjectHeader)
    startIndex = 1
  }

  const out: ParsedProject[] = []

  for (let i = startIndex; i < lines.length; i++) {
    const cells = splitRow(lines[i])
    const project: ParsedProject = { name: '' }

    if (headerMap) {
      headerMap.forEach((kind, idx) => {
        const val = cells[idx]
        if (val && kind) project[kind] = val
      })
    }

    // Fill gaps by sniffing cell content regardless of header.
    for (const cell of cells) {
      if (!project.value) { const m = cell.match(VALUE_RE); if (m) project.value = m[0].replace(/\s/g, '') }
      if (!project.postcode) { const m = cell.match(POSTCODE_RE); if (m) project.postcode = m[0].toUpperCase() }
    }
    if (!project.name) {
      project.name = cells.find(c => c && !VALUE_RE.test(c) && !POSTCODE_RE.test(c)) || ''
    }
    // Derive a location from the postcode-bearing cell if location is still empty.
    if (!project.location && project.postcode) {
      const cell = cells.find(c => POSTCODE_RE.test(c))
      if (cell) project.location = cell.trim()
    }

    if (!project.name) continue
    out.push(project)
  }

  return delay(out, 500)
}
