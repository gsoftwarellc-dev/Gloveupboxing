import { postcodeCoords } from '../data/geo'
import { projects, type Project } from '../data/mock'
import { findRelatedClients } from './clientMatching'
import type { ClientCompany } from '../data/clients'

const EARTH_RADIUS_MILES = 3958.8

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

/** Distance in miles between two lat/lng points (haversine formula). */
export function distanceMiles(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2
  return EARTH_RADIUS_MILES * 2 * Math.asin(Math.sqrt(h))
}

/** Look up coordinates for a project's postcode, if known. */
export function projectCoords(project: Project): { lat: number; lng: number } | null {
  const pc = (project.postcode ?? '').trim().toUpperCase()
  if (!pc) return null
  return postcodeCoords[pc] ?? null
}

export interface ProjectWithDistance {
  project: Project
  distance: number
  relatedClients: ClientCompany[]
}

/** Find all projects with known coordinates within `radiusMiles` of the given centre point. */
export function findProjectsNear(centre: { lat: number; lng: number }, radiusMiles: number): ProjectWithDistance[] {
  const results: ProjectWithDistance[] = []
  for (const project of projects) {
    const coords = projectCoords(project)
    if (!coords) continue
    const distance = distanceMiles(centre, coords)
    if (distance <= radiusMiles) {
      results.push({ project, distance, relatedClients: findRelatedClients(project) })
    }
  }
  return results.sort((a, b) => a.distance - b.distance)
}

/** Resolve a free-typed postcode/outcode to coordinates using the embedded project postcode lookup. */
export function resolvePostcode(input: string): { lat: number; lng: number } | null {
  const normalized = input.trim().toUpperCase().replace(/\s+/g, ' ')
  if (!normalized) return null

  if (postcodeCoords[normalized]) return postcodeCoords[normalized]

  // Try without space (e.g. "CB23BU" -> "CB2 3BU")
  const compact = normalized.replace(/\s/g, '')
  for (const [pc, coords] of Object.entries(postcodeCoords)) {
    if (pc.replace(/\s/g, '') === compact) return coords
  }

  // Fall back to matching by outward code (area + district), e.g. "CB2"
  const outward = normalized.split(' ')[0]
  for (const [pc, coords] of Object.entries(postcodeCoords)) {
    if (pc.split(' ')[0] === outward) return coords
  }

  return null
}
