import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, Users, ChevronRight, ChevronLeft } from 'lucide-react'
import { clientCompanies } from '../data/clients'

const PAGE_SIZE = 24

const ALL_DISCIPLINES = Array.from(
  new Set(clientCompanies.flatMap(c => c.disciplines))
).sort()

export default function Clients() {
  const [search, setSearch] = useState('')
  const [discipline, setDiscipline] = useState('all')
  const [page, setPage] = useState(1)

  const filtered = clientCompanies.filter(c => {
    const q = search.toLowerCase()
    const matchesSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.contacts.some(ct =>
        ct.name.toLowerCase().includes(q) ||
        (ct.role ?? '').toLowerCase().includes(q) ||
        (ct.email ?? '').toLowerCase().includes(q)
      )
    const matchesDiscipline = discipline === 'all' || c.disciplines.includes(discipline)
    return matchesSearch && matchesDiscipline
  })

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const totalContacts = clientCompanies.reduce((sum, c) => sum + c.contacts.length, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Header */}
      <div>
        <h1 className="page-title">Clients</h1>
        <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.2rem 0 0' }}>
          Companies and contacts you've worked with, organized by trade
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Companies', value: clientCompanies.length },
          { label: 'Contacts', value: totalContacts },
          { label: 'Trade Categories', value: ALL_DISCIPLINES.length },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
          <input
            className="input"
            style={{ paddingLeft: '2.25rem', fontSize: '0.9rem' }}
            placeholder="Search companies, contacts, roles, emails..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
          />
        </div>
        <select
          className="input"
          style={{ fontSize: '0.9rem', width: 'auto', minWidth: 200 }}
          value={discipline}
          onChange={e => { setDiscipline(e.target.value); setPage(1) }}
        >
          <option value="all">All Trades</option>
          {ALL_DISCIPLINES.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Client list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {paged.map(c => (
          <div key={c.id} className="card" style={{ padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>

            <div style={{
              width: 44, height: 44, borderRadius: '0.5rem', flexShrink: 0,
              background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Building2 size={20} style={{ color: '#b8942e' }} />
            </div>

            <div style={{ flex: '1 1 220px', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111' }}>{c.name}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.35rem' }}>
                {c.disciplines.map(d => (
                  <span key={d} className="badge badge-gray" style={{ fontSize: '0.7rem' }}>{d}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexShrink: 0, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500, marginBottom: '0.15rem' }}>Contacts</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#374151', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Users size={13} />{c.contacts.length}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
              <Link to={`/clients/${c.id}`} className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}>
                View Contacts<ChevronRight size={12} />
              </Link>
            </div>
          </div>
        ))}

        {paged.length === 0 && (
          <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
            No clients match your search.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
            Showing {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} clients
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
              disabled={currentPage === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              <ChevronLeft size={12} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(n => n === 1 || n === totalPages || Math.abs(n - currentPage) <= 2)
              .reduce<(number | 'ellipsis')[]>((acc, n, i, arr) => {
                if (i > 0 && n - (arr[i - 1] as number) > 1) acc.push('ellipsis')
                acc.push(n)
                return acc
              }, [])
              .map((n, i) =>
                n === 'ellipsis'
                  ? <span key={`e${i}`} style={{ fontSize: '0.82rem', color: '#9ca3af', padding: '0 0.25rem' }}>…</span>
                  : (
                    <button
                      key={n}
                      className={n === currentPage ? 'btn-primary' : 'btn-secondary'}
                      style={{ fontSize: '0.82rem', padding: '0.4rem 0.75rem', minWidth: '2.25rem' }}
                      onClick={() => setPage(n)}
                    >
                      {n}
                    </button>
                  )
              )}
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
              disabled={currentPage === totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
