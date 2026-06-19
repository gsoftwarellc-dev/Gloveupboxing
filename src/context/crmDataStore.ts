import { createContext } from 'react'
import type {
  Candidate,
  CandidateAssignment,
  CallLog,
  ClientCompany,
  CvRecord,
  PostcodeCoordinate,
  PostcodeCoordinateMap,
  Project,
  ProjectAssignment,
  ProjectAssignments,
  Vacancy,
} from '../types/crm'

export interface BulkImportResult {
  succeeded: number
  failed: number
  errors: string[]
}

export interface CrmDataContextValue {
  clients: ClientCompany[]
  projects: Project[]
  candidates: Candidate[]
  vacancies: Vacancy[]
  cvs: CvRecord[]
  callLogs: CallLog[]
  postcodeCoordinates: PostcodeCoordinate[]
  postcodeCoords: PostcodeCoordinateMap
  projectAssignmentRecords: ProjectAssignment[]
  projectAssignments: ProjectAssignments
  candidateAssignments: CandidateAssignment[]
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
  addClient: (payload: Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>) => Promise<ClientCompany>
  addClients: (payloads: Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>[]) => Promise<BulkImportResult>
  saveClient: (id: number, payload: Partial<Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>>) => Promise<ClientCompany>
  deleteClient: (id: number) => Promise<void>
  addProject: (payload: Partial<Project> & { name: string }) => Promise<Project>
  addProjects: (payloads: (Partial<Project> & { name: string })[]) => Promise<BulkImportResult>
  saveProject: (id: number, payload: Partial<Project>) => Promise<Project>
  deleteProject: (id: number) => Promise<void>
  addCandidate: (payload: Partial<Candidate> & { name: string }) => Promise<Candidate>
  saveCandidate: (id: number, payload: Partial<Candidate>) => Promise<Candidate>
  addVacancy: (payload: Partial<Vacancy> & { title: string }) => Promise<Vacancy>
  saveVacancy: (id: number, payload: Partial<Vacancy>) => Promise<Vacancy>
  submitApplication: (payload: Record<string, unknown> | FormData) => Promise<void>
  saveCampaign: (payload: Record<string, unknown>) => Promise<void>
  assignCandidateToProject: (projectId: number, candidateId: number, payload?: Record<string, unknown>) => Promise<void>
  unassignCandidateFromProject: (projectId: number, candidateId: number) => Promise<void>
  assignCandidateToCompany: (payload: {
    candidateId: number
    clientId?: number | null
    vacancyId?: number | null
    projectId?: number | null
    startDate?: string
    notes?: string
  }) => Promise<void>
  removeCandidateAssignment: (assignmentId: number) => Promise<void>
  updateCandidateAssignment: (assignmentId: number, payload: Partial<CandidateAssignment>) => Promise<void>
  addCallLog: (payload: Partial<CallLog> & { contactName: string }) => Promise<CallLog>
  saveCallLog: (id: number, payload: Partial<CallLog>) => Promise<CallLog>
  deleteCallLog: (id: number) => Promise<void>
}

export const CrmDataContext = createContext<CrmDataContextValue | null>(null)
