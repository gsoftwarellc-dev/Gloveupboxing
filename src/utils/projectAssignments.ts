import { useCrmData } from '../context/useCrmData'

export type ProjectAssignments = Record<number, number[]>

export function useProjectAssignments(): ProjectAssignments {
  return useCrmData().projectAssignments
}

export function useProjectAssignedIds(projectId: number): number[] {
  return useCrmData().projectAssignments[projectId] ?? []
}
