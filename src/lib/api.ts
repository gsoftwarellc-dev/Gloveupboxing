import type {
  Candidate,
  CandidateAssignment,
  CallLog,
  ClientCompany,
  CvRecord,
  PostcodeCoordinate,
  Project,
  ProjectAssignment,
  Vacancy,
} from '../types/crm'

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000/api').replace(/\/$/, '')

interface ApiData<T> {
  data: T
}

export interface PageMeta {
  currentPage: number
  perPage: number
  total: number
  lastPage: number
}

export interface PagedResponse<T> {
  data: T[]
  meta: PageMeta
}

export interface CandidateFilters {
  search?: string
  status?: string
  discipline?: string
  page?: number
  per_page?: number
}

export interface ClientFilters {
  search?: string
  discipline?: string
  page?: number
  per_page?: number
}

export interface ProjectFilters {
  search?: string
  status?: string
  sector?: string
  priority?: string
  date_from?: string
  date_to?: string
  page?: number
  per_page?: number
}

export interface VacancyFilters {
  search?: string
  status?: string
  discipline?: string
  page?: number
  per_page?: number
}

function toQueryString(params: Record<string, string | number | undefined>): string {
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== '')
  if (!entries.length) return ''
  return '?' + entries.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join('&')
}

export async function fetchCandidatesPaged(filters: CandidateFilters): Promise<PagedResponse<Candidate>> {
  const qs = toQueryString(filters as Record<string, string | number | undefined>)
  const payload = await apiFetch<PagedResponse<Candidate>>(`/candidates${qs}`)
  return { ...payload, data: payload.data.map(normalizeCandidate) }
}

export async function fetchClientsPaged(filters: ClientFilters): Promise<PagedResponse<ClientCompany>> {
  const qs = toQueryString(filters as Record<string, string | number | undefined>)
  const payload = await apiFetch<PagedResponse<ClientCompany>>(`/clients${qs}`)
  return { ...payload, data: payload.data.map(normalizeClient) }
}

export async function fetchProjectsPaged(filters: ProjectFilters): Promise<PagedResponse<Project>> {
  const qs = toQueryString(filters as Record<string, string | number | undefined>)
  const payload = await apiFetch<PagedResponse<Project>>(`/projects${qs}`)
  return { ...payload, data: payload.data.map(normalizeProject) }
}

export async function fetchVacanciesPaged(filters: VacancyFilters): Promise<PagedResponse<Vacancy>> {
  const qs = toQueryString(filters as Record<string, string | number | undefined>)
  const payload = await apiFetch<PagedResponse<Vacancy>>(`/vacancies${qs}`)
  return { ...payload, data: payload.data.map(normalizeVacancy) }
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem('crm_token')
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('crm_token')
    }
    const payload = await response.json().catch(() => null)
    const message = payload?.message || `API request failed with ${response.status}`
    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}

async function listAll<T>(path: string): Promise<T[]> {
  const joiner = path.includes('?') ? '&' : '?'
  const payload = await apiFetch<ApiData<T[]>>(`${path}${joiner}all=1`)
  return payload.data
}

function arrayValue<T>(value: T[] | null | undefined): T[] {
  return Array.isArray(value) ? value : []
}

export function normalizeCandidate(candidate: Candidate): Candidate {
  return {
    ...candidate,
    role: candidate.role ?? '',
    status: candidate.status ?? 'new',
    location: candidate.location ?? '',
    postcode: candidate.postcode ?? '',
    discipline: candidate.discipline ?? '',
    email: candidate.email ?? '',
    phone: candidate.phone ?? '',
    salary: Number(candidate.salary ?? 0),
    experienceYears: Number(candidate.experienceYears ?? 0),
    travelRadius: Number(candidate.travelRadius ?? 0),
    rating: Number(candidate.rating ?? 0),
    tags: arrayValue(candidate.tags),
    source: candidate.source ?? 'Manual',
    recruiter: candidate.recruiter ?? '',
    dateAdded: candidate.dateAdded ?? '',
    lastContacted: candidate.lastContacted ?? '',
    rightToWork: Boolean(candidate.rightToWork),
    certificates: arrayValue(candidate.certificates),
    skills: arrayValue(candidate.skills),
    employmentHistory: arrayValue(candidate.employmentHistory),
    references: arrayValue(candidate.references),
  }
}

export function normalizeClient(client: ClientCompany): ClientCompany {
  return {
    ...client,
    disciplines: arrayValue(client.disciplines),
    contacts: arrayValue(client.contacts),
  }
}

export function normalizeProject(project: Project): Project {
  return {
    ...project,
    client: project.client ?? '',
    location: project.location ?? '',
    postcode: project.postcode ?? '',
    status: project.status ?? 'active',
    stage: project.stage ?? '',
    startDate: project.startDate ?? '',
    endDate: project.endDate ?? '',
    value: project.value ?? '',
    rolesNeeded: Number(project.rolesNeeded ?? 0),
    contacts: arrayValue(project.contacts),
    opportunityScore: Number(project.opportunityScore ?? 0),
    tags: arrayValue(project.tags),
  }
}

export function normalizeVacancy(vacancy: Vacancy): Vacancy {
  return {
    ...vacancy,
    client: vacancy.client ?? '',
    project: vacancy.project ?? '',
    location: vacancy.location ?? '',
    postcode: vacancy.postcode ?? '',
    salary: vacancy.salary ?? '',
    discipline: vacancy.discipline ?? '',
    type: vacancy.type ?? '',
    status: vacancy.status ?? 'active',
    recruiter: vacancy.recruiter ?? '',
    dateAdded: vacancy.dateAdded ?? '',
    deadline: vacancy.deadline ?? '',
    description: vacancy.description ?? '',
    applications: Number(vacancy.applications ?? 0),
    shortlisted: Number(vacancy.shortlisted ?? 0),
    interviews: Number(vacancy.interviews ?? 0),
    requiredCerts: arrayValue(vacancy.requiredCerts),
    visibility: vacancy.visibility ?? 'Public',
    published: Boolean(vacancy.published),
  }
}

export function normalizeCv(cv: CvRecord): CvRecord {
  return {
    ...cv,
    role: cv.role ?? '',
    discipline: cv.discipline ?? '',
    location: cv.location ?? '',
    skills: arrayValue(cv.skills),
    certificates: arrayValue(cv.certificates),
    rawText: cv.rawText ?? '',
    submittedAt: cv.submittedAt ?? '',
    source: cv.source ?? 'Application Form',
  }
}

export async function fetchClients() {
  return (await listAll<ClientCompany>('/clients')).map(normalizeClient)
}

export async function fetchProjects() {
  return (await listAll<Project>('/projects')).map(normalizeProject)
}

export async function fetchCandidates() {
  return (await listAll<Candidate>('/candidates')).map(normalizeCandidate)
}

export async function fetchVacancies() {
  return (await listAll<Vacancy>('/vacancies')).map(normalizeVacancy)
}

export async function fetchCvs() {
  return (await listAll<CvRecord>('/cvs')).map(normalizeCv)
}

export async function fetchPostcodeCoordinates() {
  const payload = await apiFetch<ApiData<PostcodeCoordinate[]>>('/postcode-coordinates')
  return payload.data
}

export async function fetchProjectAssignments() {
  const payload = await apiFetch<ApiData<ProjectAssignment[]>>('/project-assignments')
  return payload.data
}

export async function fetchCandidateAssignments() {
  const payload = await apiFetch<ApiData<CandidateAssignment[]>>('/candidate-assignments')
  return payload.data
}

export async function createClient(payload: Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>) {
  const response = await apiFetch<ApiData<ClientCompany>>('/clients', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return normalizeClient(response.data)
}

export async function updateClient(id: number, payload: Partial<Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>>) {
  const response = await apiFetch<ApiData<ClientCompany>>(`/clients/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return normalizeClient(response.data)
}

export async function deleteClient(id: number) {
  await apiFetch(`/clients/${id}`, { method: 'DELETE' })
}

export async function createProject(payload: Partial<Project> & { name: string }) {
  const response = await apiFetch<ApiData<Project>>('/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return normalizeProject(response.data)
}

export async function createCandidate(payload: Partial<Candidate> & { name: string }) {
  const response = await apiFetch<ApiData<Candidate>>('/candidates', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return normalizeCandidate(response.data)
}

export async function updateCandidate(id: number, payload: Partial<Candidate>) {
  const response = await apiFetch<ApiData<Candidate>>(`/candidates/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return normalizeCandidate(response.data)
}

export async function updateProject(id: number, payload: Partial<Project>) {
  const response = await apiFetch<ApiData<Project>>(`/projects/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return normalizeProject(response.data)
}

export async function deleteProject(id: number) {
  await apiFetch(`/projects/${id}`, { method: 'DELETE' })
}

export async function createVacancy(payload: Partial<Vacancy> & { title: string }) {
  const response = await apiFetch<ApiData<Vacancy>>('/vacancies', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return normalizeVacancy(response.data)
}

export async function updateVacancy(id: number, payload: Partial<Vacancy>) {
  const response = await apiFetch<ApiData<Vacancy>>(`/vacancies/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return normalizeVacancy(response.data)
}

export async function createCvApplication(payload: Record<string, unknown> | FormData) {
  return apiFetch<{ candidate: Candidate; cv: CvRecord }>('/applications', {
    method: 'POST',
    body: payload instanceof FormData ? payload : JSON.stringify(payload),
  })
}

export async function createEmailCampaign(payload: Record<string, unknown>) {
  return apiFetch('/email-campaigns', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function assignProjectCandidate(projectId: number, candidateId: number, payload: Record<string, unknown> = {}) {
  const response = await apiFetch<ApiData<ProjectAssignment>>(`/projects/${projectId}/assignments`, {
    method: 'POST',
    body: JSON.stringify({ ...payload, candidate_id: candidateId }),
  })
  return response.data
}

export async function unassignProjectCandidate(projectId: number, candidateId: number) {
  await apiFetch(`/projects/${projectId}/assignments/${candidateId}`, { method: 'DELETE' })
}

export async function createCandidateAssignment(payload: {
  candidate_id: number
  client_id?: number | null
  vacancy_id?: number | null
  project_id?: number | null
  startDate?: string
  status?: string
  notes?: string
}) {
  const response = await apiFetch<ApiData<CandidateAssignment>>('/candidate-assignments', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return response.data
}

export async function deleteCandidateAssignment(id: number) {
  await apiFetch(`/candidate-assignments/${id}`, { method: 'DELETE' })
}

export async function updateCandidateAssignment(id: number, payload: Partial<CandidateAssignment>) {
  const response = await apiFetch<ApiData<CandidateAssignment>>(`/candidate-assignments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return response.data
}

export async function fetchCallLogs() {
  return listAll<CallLog>('/call-logs')
}

export async function createCallLog(payload: Partial<CallLog> & { contactName: string }) {
  const response = await apiFetch<ApiData<CallLog>>('/call-logs', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return response.data
}

export async function updateCallLog(id: number, payload: Partial<CallLog>) {
  const response = await apiFetch<ApiData<CallLog>>(`/call-logs/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
  return response.data
}

export async function deleteCallLog(id: number) {
  await apiFetch(`/call-logs/${id}`, { method: 'DELETE' })
}

export interface SmtpSettings {
  host: string
  port: number
  username: string
  password?: string
  encryption: string
  from_address: string
  from_name: string
}

export async function fetchSmtpSettings() {
  const response = await apiFetch<ApiData<SmtpSettings>>('/settings/smtp')
  return response.data
}

export async function saveSmtpSettings(payload: SmtpSettings) {
  const response = await apiFetch<ApiData<SmtpSettings>>('/settings/smtp', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return response.data
}
