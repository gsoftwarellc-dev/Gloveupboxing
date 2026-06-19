import { startTransition, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  assignProjectCandidate,
  createCallLog,
  createCandidate,
  createCandidateAssignment,
  createClient,
  createCvApplication,
  createEmailCampaign,
  createProject,
  updateClient,
  updateProject,
  deleteCallLog as apiDeleteCallLog,
  deleteClient as apiDeleteClient,
  deleteProject as apiDeleteProject,
  createVacancy,
  deleteCandidateAssignment,
  fetchCallLogs,
  fetchCandidateAssignments,
  fetchCandidates,
  fetchClients,
  fetchCvs,
  fetchPostcodeCoordinates,
  fetchProjectAssignments,
  fetchProjects,
  fetchVacancies,
  unassignProjectCandidate,
  updateCallLog,
  updateCandidate,
  updateVacancy,
  updateCandidateAssignment,
} from '../lib/api'
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
import { CrmDataContext, type CrmDataContextValue } from './crmDataStore'

export function CrmDataProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<ClientCompany[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [vacancies, setVacancies] = useState<Vacancy[]>([])
  const [cvs, setCvs] = useState<CvRecord[]>([])
  const [callLogs, setCallLogs] = useState<CallLog[]>([])
  const [postcodeCoordinates, setPostcodeCoordinates] = useState<PostcodeCoordinate[]>([])
  const [projectAssignmentRecords, setProjectAssignmentRecords] = useState<ProjectAssignment[]>([])
  const [candidateAssignments, setCandidateAssignments] = useState<CandidateAssignment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [
        nextClients,
        nextProjects,
        nextCandidates,
        nextVacancies,
        nextCvs,
        nextCallLogs,
        nextCoordinates,
        nextProjectAssignments,
        nextCandidateAssignments,
      ] = await Promise.all([
        fetchClients(),
        fetchProjects(),
        fetchCandidates(),
        fetchVacancies(),
        fetchCvs(),
        fetchCallLogs(),
        fetchPostcodeCoordinates(),
        fetchProjectAssignments(),
        fetchCandidateAssignments(),
      ])

      startTransition(() => {
        setClients(nextClients)
        setProjects(nextProjects)
        setCandidates(nextCandidates)
        setVacancies(nextVacancies)
        setCvs(nextCvs)
        setCallLogs(nextCallLogs)
        setPostcodeCoordinates(nextCoordinates)
        setProjectAssignmentRecords(nextProjectAssignments)
        setCandidateAssignments(nextCandidateAssignments)
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load CRM data.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void Promise.resolve().then(() => refresh())
  }, [refresh])

  const postcodeCoords = useMemo(() => {
    return postcodeCoordinates.reduce<PostcodeCoordinateMap>((acc, coord) => {
      acc[coord.postcode] = { lat: coord.lat, lng: coord.lng }
      return acc
    }, {})
  }, [postcodeCoordinates])

  const projectAssignments = useMemo(() => {
    return projectAssignmentRecords.reduce<ProjectAssignments>((acc, assignment) => {
      const current = acc[assignment.projectId] ?? []
      if (!current.includes(assignment.candidateId)) {
        acc[assignment.projectId] = [...current, assignment.candidateId]
      }
      return acc
    }, {})
  }, [projectAssignmentRecords])

  const value = useMemo<CrmDataContextValue>(() => ({
    clients,
    projects,
    candidates,
    vacancies,
    cvs,
    callLogs,
    postcodeCoordinates,
    postcodeCoords,
    projectAssignmentRecords,
    projectAssignments,
    candidateAssignments,
    loading,
    error,
    refresh,
    addClient: async payload => {
      const saved = await createClient(payload)
      setClients(prev => [saved, ...prev])
      return saved
    },
    addClients: async payloads => {
      const results = await Promise.allSettled(payloads.map(payload => createClient(payload)))
      const errors = results
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map(r => r.reason instanceof Error ? r.reason.message : 'Unknown error')
      await refresh()
      return { succeeded: results.length - errors.length, failed: errors.length, errors }
    },
    saveClient: async (id, payload) => {
      const saved = await updateClient(id, payload)
      setClients(prev => prev.map(c => c.id === id ? saved : c))
      return saved
    },
    deleteClient: async id => {
      await apiDeleteClient(id)
      setClients(prev => prev.filter(c => c.id !== id))
    },
    addProject: async payload => {
      const saved = await createProject(payload)
      setProjects(prev => [saved, ...prev])
      return saved
    },
    addProjects: async payloads => {
      const results = await Promise.allSettled(payloads.map(payload => createProject(payload)))
      const errors = results
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map(r => r.reason instanceof Error ? r.reason.message : 'Unknown error')
      await refresh()
      return { succeeded: results.length - errors.length, failed: errors.length, errors }
    },
    saveProject: async (id, payload) => {
      const saved = await updateProject(id, payload)
      setProjects(prev => prev.map(p => p.id === id ? saved : p))
      return saved
    },
    deleteProject: async id => {
      await apiDeleteProject(id)
      setProjects(prev => prev.filter(p => p.id !== id))
    },
    addCandidate: async payload => {
      const saved = await createCandidate(payload)
      setCandidates(prev => [saved, ...prev])
      return saved
    },
    saveCandidate: async (id, payload) => {
      const saved = await updateCandidate(id, payload)
      setCandidates(prev => prev.map(candidate => candidate.id === id ? saved : candidate))
      return saved
    },
    addVacancy: async payload => {
      const saved = await createVacancy(payload)
      setVacancies(prev => [saved, ...prev])
      return saved
    },
    saveVacancy: async (id, payload) => {
      const saved = await updateVacancy(id, payload)
      setVacancies(prev => prev.map(vacancy => vacancy.id === id ? saved : vacancy))
      return saved
    },
    submitApplication: async payload => {
      await createCvApplication(payload)
      await refresh()
    },
    saveCampaign: async payload => {
      await createEmailCampaign(payload)
    },
    assignCandidateToProject: async (projectId, candidateId, payload = {}) => {
      await assignProjectCandidate(projectId, candidateId, payload)
      await refresh()
    },
    unassignCandidateFromProject: async (projectId, candidateId) => {
      await unassignProjectCandidate(projectId, candidateId)
      await refresh()
    },
    assignCandidateToCompany: async payload => {
      await createCandidateAssignment({
        candidate_id: payload.candidateId,
        client_id: payload.clientId,
        vacancy_id: payload.vacancyId,
        project_id: payload.projectId,
        startDate: payload.startDate,
        status: 'assigned',
        notes: payload.notes,
      })
      if (payload.projectId) {
        await assignProjectCandidate(payload.projectId, payload.candidateId, {
          startDate: payload.startDate,
        })
      }
      await refresh()
    },
    removeCandidateAssignment: async assignmentId => {
      const assignment = candidateAssignments.find(item => item.id === assignmentId)
      await deleteCandidateAssignment(assignmentId)
      if (assignment?.projectId) {
        await unassignProjectCandidate(assignment.projectId, assignment.candidateId)
      }
      await refresh()
    },
    updateCandidateAssignment: async (assignmentId, payload) => {
      await updateCandidateAssignment(assignmentId, payload)
      await refresh()
    },
    addCallLog: async payload => {
      const saved = await createCallLog(payload)
      setCallLogs(prev => [saved, ...prev])
      return saved
    },
    saveCallLog: async (id, payload) => {
      const saved = await updateCallLog(id, payload)
      setCallLogs(prev => prev.map(log => log.id === id ? saved : log))
      return saved
    },
    deleteCallLog: async id => {
      await apiDeleteCallLog(id)
      setCallLogs(prev => prev.filter(log => log.id !== id))
    },
  }), [
    candidateAssignments,
    candidates,
    clients,
    cvs,
    callLogs,
    error,
    loading,
    postcodeCoordinates,
    postcodeCoords,
    projectAssignmentRecords,
    projectAssignments,
    projects,
    refresh,
    vacancies,
  ])

  return (
    <CrmDataContext.Provider value={value}>
      {children}
    </CrmDataContext.Provider>
  )
}
