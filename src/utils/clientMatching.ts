import type { ClientCompany, Project } from '../types/crm'

const PLACEHOLDER_RE = /(not yet appointed|multiple|preferred bidder|bidders?:|^tba\b)/i
const SUFFIX_RE = /\b(limited|ltd\.?|llp|plc|group)\b/gi

export function normalizeCompanyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(SUFFIX_RE, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Find a client company that matches a project's main contractor or org-type contacts. */
export function findRelatedClients(project: Project, clients: ClientCompany[]): ClientCompany[] {
  const clientsByNormalizedName = new Map<string, ClientCompany>()
  for (const client of clients) {
    const key = normalizeCompanyName(client.name)
    if (key && !clientsByNormalizedName.has(key)) {
      clientsByNormalizedName.set(key, client)
    }
  }

  const matches = new Map<number, ClientCompany>()

  if (project.mainContractor && !PLACEHOLDER_RE.test(project.mainContractor)) {
    const key = normalizeCompanyName(project.mainContractor)
    const client = clientsByNormalizedName.get(key)
    if (client) matches.set(client.id, client)
  }

  for (const contact of project.contacts) {
    if (contact.type !== 'org') continue
    const key = normalizeCompanyName(contact.name)
    const client = clientsByNormalizedName.get(key)
    if (client) matches.set(client.id, client)
  }

  return Array.from(matches.values())
}

/** Find projects where this client company is the main contractor or an org-type contact. */
export function findRelatedProjects(client: ClientCompany, projects: Project[]): Project[] {
  const projectsByNormalizedClientName = new Map<string, Project[]>()
  for (const project of projects) {
    const candidates: string[] = []
    if (project.mainContractor && !PLACEHOLDER_RE.test(project.mainContractor)) {
      candidates.push(project.mainContractor)
    }
    for (const contact of project.contacts) {
      if (contact.type === 'org') candidates.push(contact.name)
    }
    for (const name of candidates) {
      const key = normalizeCompanyName(name)
      if (!key) continue
      const list = projectsByNormalizedClientName.get(key) ?? []
      if (!list.find(p => p.id === project.id)) list.push(project)
      projectsByNormalizedClientName.set(key, list)
    }
  }

  const key = normalizeCompanyName(client.name)
  return projectsByNormalizedClientName.get(key) ?? []
}
