export interface ClientContact {
  id?: number
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface ClientCompany {
  id: number
  name: string
  disciplines: string[]
  contacts: ClientContact[]
  createdAt?: string
  updatedAt?: string
}

export interface ProjectContact {
  id?: number
  type: 'person' | 'org'
  name: string
  role?: string
  email?: string
  phone?: string
}

export interface Project {
  id: number
  name: string
  clientId?: number | null
  client: string
  location: string
  postcode: string
  status: string
  stage: string
  startDate: string
  endDate: string
  value: string | number
  rolesNeeded: number
  contacts: ProjectContact[]
  opportunityScore: number
  sector?: string
  priority?: string
  mainContractor?: string | null
  tags: string[]
  notes?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface Candidate {
  id: number
  name: string
  role: string
  status: string
  location: string
  postcode: string
  discipline: string
  email: string
  phone: string
  salary: number
  experienceYears: number
  travelRadius: number
  rating: number
  tags: string[]
  availability?: string
  noticePeriod?: string
  source: string
  recruiter: string
  dateAdded: string
  lastContacted: string
  rightToWork: boolean
  notes?: string | number | null
  certificates: string[]
  skills: string[]
  employmentHistory: { company: string; role: string; from: string; to: string; current: boolean }[]
  references: { name: string; role: string; status: string }[]
}

export interface Vacancy {
  id: number
  title: string
  clientId?: number | null
  client: string
  projectId?: number | null
  project?: string | null
  location: string
  postcode: string
  salary: string
  discipline: string
  type: string
  status: string
  recruiter: string
  dateAdded: string
  deadline: string
  description: string
  applications: number
  shortlisted: number
  interviews: number
  requiredCerts: string[]
  priority?: string
  visibility?: string
  published: boolean
}

export interface CvRecord {
  id: string
  candidateId?: number | null
  candidateName: string
  role: string
  discipline: string
  location: string
  postcode?: string | null
  email?: string | null
  phone?: string | null
  experienceYears?: number | null
  skills: string[]
  certificates: string[]
  rawText: string
  fileName?: string | null
  filePath?: string | null
  submittedAt: string
  source: string
}

export interface PostcodeCoordinate {
  postcode: string
  lat: number
  lng: number
}

export type PostcodeCoordinateMap = Record<string, { lat: number; lng: number }>

export interface ProjectAssignment {
  id: number
  projectId: number
  candidateId: number
  role?: string | null
  startDate?: string | null
  status: string
  notes?: string | null
  candidate?: Candidate | null
}

export interface CandidateAssignment {
  id: number
  candidateId: number
  clientId?: number | null
  vacancyId?: number | null
  projectId?: number | null
  startDate?: string | null
  status: string
  notes?: string | null
  client?: string | null
  vacancy?: string | null
  project?: string | null
}

export type ProjectAssignments = Record<number, number[]>

export interface CallLog {
  id: number
  clientId?: number | null
  projectId?: number | null
  candidateId?: number | null
  contactName: string
  contactPhone?: string | null
  contactEmail?: string | null
  notes?: string | null
  requirements?: string | null
  callBackDate?: string | null
  calledAt: string
  createdAt?: string
  updatedAt?: string
}
