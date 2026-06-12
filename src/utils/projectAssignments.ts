import { useEffect, useState } from 'react'

const STORAGE_KEY = 'crm.projectAssignments'
const EVENT_NAME = 'crm.projectAssignments.changed'

export type ProjectAssignments = Record<number, number[]>

function readAll(): ProjectAssignments {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeAll(data: ProjectAssignments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  window.dispatchEvent(new CustomEvent(EVENT_NAME))
}

export function getAssignedCandidateIds(projectId: number): number[] {
  return readAll()[projectId] ?? []
}

export function assignCandidateToProject(projectId: number, candidateId: number) {
  const all = readAll()
  const current = all[projectId] ?? []
  if (!current.includes(candidateId)) {
    all[projectId] = [...current, candidateId]
    writeAll(all)
  }
}

export function unassignCandidateFromProject(projectId: number, candidateId: number) {
  const all = readAll()
  all[projectId] = (all[projectId] ?? []).filter(id => id !== candidateId)
  writeAll(all)
}

// Subscribes to changes so all open pages stay in sync.
export function useProjectAssignments(): ProjectAssignments {
  const [data, setData] = useState<ProjectAssignments>(() => readAll())

  useEffect(() => {
    const onChange = () => setData(readAll())
    window.addEventListener(EVENT_NAME, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(EVENT_NAME, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [])

  return data
}

export function useProjectAssignedIds(projectId: number): number[] {
  const all = useProjectAssignments()
  return all[projectId] ?? []
}
