// CV store — applicant CVs captured from the public application form.
//
// Like `candidates`, this is intentionally EMPTY until real data is imported.
// No mock/placeholder CVs are seeded here. When the application form is wired
// to a backend, submitted CVs should be appended to this list (or fetched).

import type { Candidate } from './mock'

export interface CvRecord {
  id: string
  /** Links back to a Candidate.id when the applicant exists in the candidate pool. */
  candidateId?: number
  candidateName: string
  role: string
  discipline: string
  location: string
  postcode?: string
  email?: string
  phone?: string
  experienceYears?: number
  skills?: string[]
  certificates?: string[]
  /** The full CV text the applicant pasted/uploaded — the thing we read, copy, rank, and format. */
  rawText: string
  /** Original file name if uploaded, else undefined for pasted text. */
  fileName?: string
  submittedAt: string
  source: string
}

export const cvs: CvRecord[] = []

/**
 * Builds a CvRecord from a Candidate that has CV text available.
 * Useful once real candidate data (with CV text) is imported, so the CVs page
 * can show one entry per candidate without duplicating data entry.
 */
export function cvFromCandidate(c: Candidate, rawText: string, source = 'Application Form'): CvRecord {
  return {
    id: `cv-${c.id}`,
    candidateId: c.id,
    candidateName: c.name,
    role: c.role,
    discipline: c.discipline,
    location: c.location,
    postcode: c.postcode,
    email: c.email,
    phone: c.phone,
    experienceYears: c.experienceYears,
    skills: c.skills,
    certificates: c.certificates,
    rawText,
    submittedAt: c.dateAdded,
    source,
  }
}
