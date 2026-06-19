// AI client — single seam between the UI and future server-side AI endpoints.
// API keys must stay server-side; these deterministic helpers are UI-only
// parsing/preview behavior and do not store business records.

import type { CvRecord } from '../types/crm'

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
      email: emailMatch?.[0] ?? cv.email ?? undefined,
      phone: phoneMatch?.[0] ?? cv.phone ?? undefined,
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

export interface ParsedProjectContact {
  name: string
  company?: string
  role?: string
  phone?: string
  email?: string
}

export interface ParsedProject {
  name: string
  client?: string
  location?: string
  postcode?: string
  value?: string
  sector?: string
  stage?: string
  startDate?: string
  endDate?: string
  notes?: string
  mainContractor?: string
  contacts: ParsedProjectContact[]
}

const POSTCODE_RE = /\b[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}\b/i
const VALUE_RE = /£\s?[\d,.]+\s?(?:bn|m|k)?/i
const EMAIL_RE2 = /[\w.+-]+@[\w-]+\.[\w.]+/
const PHONE_RE2 = /(?:(?:\+44|0)\s?\d[\d\s]{7,}\d|\d{5}\s?\d{6}|\d{3,4}\s\d{3,4}\s\d{3,4})/

// ── Free-form Glenigan / Barbour ABI style parser ────────────────────────────
// Handles block-of-text project intelligence reports with labelled fields
// and contact sections ("People working on this project (Company Name)")

function parseDate(raw: string): string {
  // "fourth quarter 2026" → "2026-10-01", "01-Jul-2022" → "2022-07-01"
  const q: Record<string, string> = { first: '01', second: '04', third: '07', fourth: '10' }
  const qm = raw.toLowerCase().match(/(first|second|third|fourth)\s+quarter\s+(\d{4})/)
  if (qm) return `${qm[2]}-${q[qm[1]]}-01`
  const dm = raw.match(/(\d{1,2})[-/]([A-Za-z]{3,})[-/](\d{4})/)
  if (dm) {
    const months: Record<string, string> = { jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12' }
    const m = months[dm[2].toLowerCase().slice(0,3)]
    if (m) return `${dm[3]}-${m}-${dm[1].padStart(2,'0')}`
  }
  const ym = raw.match(/(\d{4})/)
  if (ym) return `${ym[1]}-01-01`
  return ''
}

function extractLabel(line: string, label: RegExp): string | null {
  const m = line.match(new RegExp(`^${label.source}[:\\s]+(.+)$`, 'i'))
  return m ? m[1].trim() : null
}

function isFreeForm(lines: string[]): boolean {
  // Detect free-form report: has labelled fields like "Project value:" or "Stage:"
  const labelCount = lines.filter(l =>
    /^(address|project value|stage|status|start|finish|funding|planning stage|contract stage|people working)/i.test(l)
  ).length
  return labelCount >= 2
}

function parseFreeFormReport(text: string): ParsedProject[] {
  const lines = text.split(/\r?\n/).map(l => l.trim())
  const project: ParsedProject = { name: '', contacts: [] }

  // First non-empty line is typically the project name
  for (const line of lines) {
    if (line) { project.name = line; break }
  }

  // Collect full text for notes
  const noteLines: string[] = []

  // Contact parsing state
  let currentCompany: string | null = null
  const contactBuffer: { lines: string[]; company: string }[] = []
  let inContactSection = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line) continue

    // ── Labelled fields ──────────────────────────────────────────────────────

    const addressMatch = extractLabel(line, /address/)
    if (addressMatch) {
      project.location = addressMatch.replace(POSTCODE_RE, '').replace(/,\s*$/, '').trim()
      const pc = addressMatch.match(POSTCODE_RE)
      if (pc) project.postcode = pc[0].toUpperCase()
      continue
    }

    const valueMatch = extractLabel(line, /project value/)
    if (valueMatch) {
      const m = valueMatch.match(VALUE_RE)
      project.value = m ? m[0].replace(/\s/g, '') : valueMatch.split(' ')[0]
      continue
    }

    // Stage — take the contract stage if present, else planning stage
    if (/^stage\s*:/i.test(line)) {
      const val = line.replace(/^stage\s*:\s*/i, '').trim()
      if (!project.stage || /contract/i.test(lines[i - 1] ?? '')) project.stage = val
      continue
    }

    // Start / Finish dates
    const startMatch = extractLabel(line, /start/)
    if (startMatch && !project.startDate) {
      project.startDate = parseDate(startMatch)
      continue
    }
    const finishMatch = extractLabel(line, /finish/)
    if (finishMatch && !project.endDate) {
      project.endDate = parseDate(finishMatch)
      continue
    }

    // Sector / development type
    const devMatch = extractLabel(line, /development type/)
    if (devMatch) { project.sector = devMatch; continue }

    // ── Contact sections ─────────────────────────────────────────────────────
    // "People working on this project (Company Name)"
    const companySection = line.match(/people working on this project\s*\(([^)]+)\)/i)
    if (companySection) {
      inContactSection = true
      currentCompany = companySection[1].trim()
      contactBuffer.push({ lines: [], company: currentCompany })
      continue
    }

    // Skip contact table headers
    if (inContactSection && /^(contact details|date added)/i.test(line)) continue

    if (inContactSection && currentCompany) {
      // Accumulate lines into the current company's contact buffer
      contactBuffer[contactBuffer.length - 1].lines.push(line)
    } else {
      noteLines.push(line)
    }
  }

  // ── Parse accumulated contact lines ─────────────────────────────────────────
  // Each person block: name line, optional role line, phone(s), email, date
  for (const { lines: clines, company } of contactBuffer) {
    let i = 0
    while (i < clines.length) {
      const line = clines[i]
      if (!line) { i++; continue }

      // Skip pure date lines like "24-Aug-2022"
      if (/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(line)) { i++; continue }

      const isPhone = PHONE_RE2.test(line)
      const isEmail = EMAIL_RE2.test(line)

      // A contact name: not a phone, not an email, not too long
      if (!isPhone && !isEmail && line.length < 60) {
        const contact: ParsedProjectContact = { name: line, company }

        // Look ahead for role, phones, email
        let j = i + 1
        while (j < clines.length) {
          const next = clines[j]
          if (!next || /^\d{2}-[A-Za-z]{3}-\d{4}$/.test(next)) { j++; break }
          if (EMAIL_RE2.test(next)) { contact.email = next.match(EMAIL_RE2)![0]; j++; continue }
          if (PHONE_RE2.test(next)) {
            // Could be two phone numbers on separate lines
            if (!contact.phone) contact.phone = next.match(PHONE_RE2)![0].trim()
            j++; continue
          }
          // Short non-phone non-email line = role title
          if (next.length < 50 && !contact.role) { contact.role = next; j++; continue }
          break
        }

        // Skip if the "name" is actually a phone number we missed
        if (!PHONE_RE2.test(contact.name)) {
          project.contacts.push(contact)
        }
        i = j
      } else {
        i++
      }
    }
  }

  // Deduplicate contacts by email / name
  const seen = new Set<string>()
  project.contacts = project.contacts.filter(c => {
    const key = (c.email || c.name).toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  // Build short notes from the scheme description
  const schemeIdx = noteLines.findIndex(l => /scheme|396|flats|planning/i.test(l))
  if (schemeIdx >= 0) {
    project.notes = noteLines.slice(schemeIdx, schemeIdx + 4).join(' ').slice(0, 500)
  }

  if (!project.name) return []
  return [project]
}

function classifyProjectHeader(h: string): keyof Omit<ParsedProject, 'contacts'> | null {
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
 * Parses pasted project data — handles both:
 * 1. Free-form intelligence reports (Glenigan / Barbour ABI style) with contacts
 * 2. Spreadsheet rows (tab/comma separated)
 */
export async function parseProjects(raw: string): Promise<ParsedProject[]> {
  if (AI_ENABLED) {
    // TODO: POST { text: raw } to /api/projects/parse and return ParsedProject[]
  }

  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  if (!lines.length) return delay([], 300)

  // Detect free-form report and use the specialist parser
  if (isFreeForm(lines)) {
    return delay(parseFreeFormReport(raw), 300)
  }

  // ── Spreadsheet / tabular fallback ───────────────────────────────────────────
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
    const project: ParsedProject = { name: '', contacts: [] }

    if (headerMap) {
      headerMap.forEach((kind, idx) => {
        const val = cells[idx]
        if (val && kind) (project as unknown as Record<string, unknown>)[kind] = val
      })
    }

    for (const cell of cells) {
      if (!project.value) { const m = cell.match(VALUE_RE); if (m) project.value = m[0].replace(/\s/g, '') }
      if (!project.postcode) { const m = cell.match(POSTCODE_RE); if (m) project.postcode = m[0].toUpperCase() }
    }
    if (!project.name) {
      project.name = cells.find(c => c && !VALUE_RE.test(c) && !POSTCODE_RE.test(c)) || ''
    }
    if (!project.location && project.postcode) {
      const cell = cells.find(c => POSTCODE_RE.test(c))
      if (cell) project.location = cell.trim()
    }

    if (!project.name) continue
    out.push(project)
  }

  return delay(out, 500)
}
