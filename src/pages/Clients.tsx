import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, Users, ChevronRight, ChevronLeft, Plus, X, ClipboardPaste, Sparkles, Trash2 } from 'lucide-react'
import { DataState } from '../components/DataState'
import { useCrmData } from '../context/useCrmData'
import type { BulkImportResult } from '../context/crmDataStore'
import type { ClientCompany } from '../types/crm'
import { fetchClientsPaged } from '../lib/api'
import { useServerPage } from '../hooks/useServerPage'
import { parseClients, type ParsedClient } from '../utils/aiClient'

const PAGE_SIZE = 25

export default function Clients() {
  const { addClient: saveClient, addClients: saveClients, loading: ctxLoading, error: ctxError } = useCrmData()
  const [searchRaw, setSearchRaw] = useState('')
  const search = useDeferredValue(searchRaw)
  const [discipline, setDiscipline] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showPasteModal, setShowPasteModal] = useState(false)

  const serverFilters = useMemo(() => ({
    search: search || undefined,
    discipline: discipline !== 'all' ? discipline : undefined,
  }), [search, discipline])

  const { data: companies, meta, page, setPage, loading: pageLoading, error: pageError, reload } = useServerPage<ClientCompany, typeof serverFilters>({
    fetcher: fetchClientsPaged as Parameters<typeof useServerPage>[0]['fetcher'],
    filters: serverFilters,
    perPage: PAGE_SIZE,
  })

  if (ctxLoading && !companies.length) return <DataState loading={true} error={null} />
  if (ctxError) return <DataState loading={false} error={ctxError} />

  const totalPages = meta?.lastPage ?? 1
  const total = meta?.total ?? companies.length
  const totalContacts = companies.reduce((sum, c) => sum + c.contacts.length, 0)

  async function addClient(company: Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>) {
    await saveClient(company)
    reload()
  }

  async function addClients(parsed: ParsedClient[]) {
    const result = await saveClients(parsed.map(p => ({
      name: p.name,
      disciplines: p.disciplines.length ? p.disciplines : ['General'],
      contacts: p.contacts,
    })))
    reload()
    return result
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Clients</h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.2rem 0 0' }}>
            Companies and contacts you've worked with, organized by trade
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn-secondary" onClick={() => setShowPasteModal(true)}><ClipboardPaste size={15} />Paste Data</button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}><Plus size={15} />Add Client</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
        {[
          { label: 'Companies', value: meta?.total ?? companies.length },
          { label: 'Contacts (this page)', value: totalContacts },
        ].map(s => (
          <div key={s.label} className="card" style={{ padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.35rem', fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={14} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
          <input
            className="input"
            style={{ paddingLeft: '2.25rem', fontSize: '0.9rem' }}
            placeholder="Search companies, contacts, roles, emails..."
            value={searchRaw}
            onChange={e => setSearchRaw(e.target.value)}
          />
        </div>
        <select
          className="input"
          style={{ fontSize: '0.9rem', width: 'auto', minWidth: 160 }}
          value={discipline}
          onChange={e => setDiscipline(e.target.value)}
        >
          <option value="all">All Trades</option>
        </select>
      </div>

      {pageError && (
        <div style={{ padding: '0.75rem 1rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
          {pageError}
        </div>
      )}

      {pageLoading && <DataState loading={true} error={null} />}

      {/* Client list */}
      {!pageLoading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {companies.map(c => (
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

          {companies.length === 0 && (
            <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
              No clients match your search.
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && !pageLoading && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, total)} of {total} clients
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.7rem' }}
              disabled={page === 1}
              onClick={() => setPage(Math.max(1, page - 1))}
            >
              <ChevronLeft size={12} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(n => n === 1 || n === totalPages || Math.abs(n - page) <= 2)
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
                      className={n === page ? 'btn-primary' : 'btn-secondary'}
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
              disabled={page === totalPages}
              onClick={() => setPage(Math.min(totalPages, page + 1))}
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      )}

      {showAddModal && (
        <AddClientModal
          onClose={() => setShowAddModal(false)}
          onAdd={addClient}
        />
      )}

      {showPasteModal && (
        <PasteClientsModal
          onClose={() => setShowPasteModal(false)}
          onImport={addClients}
        />
      )}
    </div>
  )
}

function PasteClientsModal({
  onClose,
  onImport,
}: {
  onClose: () => void
  onImport: (clients: ParsedClient[]) => Promise<BulkImportResult>
}) {
  const [raw, setRaw] = useState('')
  const [parsing, setParsing] = useState(false)
  const [parsed, setParsed] = useState<ParsedClient[] | null>(null)
  const [importing, setImporting] = useState(false)
  const [importError, setImportError] = useState('')

  async function runParse() {
    if (!raw.trim()) return
    setParsing(true)
    setParsed(null)
    try {
      setParsed(await parseClients(raw))
    } finally {
      setParsing(false)
    }
  }

  function removeRow(idx: number) {
    setParsed(prev => (prev ? prev.filter((_, i) => i !== idx) : prev))
  }

  async function confirmImport() {
    if (!parsed || parsed.length === 0) {
      onClose()
      return
    }
    const validRows = parsed.filter(p => p.name.trim())
    const skipped = parsed.length - validRows.length
    if (validRows.length === 0) {
      setImportError('None of the rows have a company name — nothing to import.')
      return
    }
    setImporting(true)
    setImportError('')
    try {
      const result = await onImport(validRows)
      if (result.failed === 0 && skipped === 0) {
        onClose()
      } else {
        setImportError(
          `Imported ${result.succeeded} client${result.succeeded === 1 ? '' : 's'}.` +
          (skipped > 0 ? ` Skipped ${skipped} row${skipped === 1 ? '' : 's'} with no company name.` : '') +
          (result.failed > 0 ? ` ${result.failed} row${result.failed === 1 ? '' : 's'} failed: ${result.errors[0] ?? ''}` : '')
        )
      }
    } catch (err) {
      setImportError(err instanceof Error ? err.message : 'Import failed.')
    } finally {
      setImporting(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '720px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 className="section-title">Paste Client Data</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}><X size={16} /></button>
        </div>

        <p style={{ margin: '0 0 0.5rem', color: '#6b7280', fontSize: '0.85rem' }}>
          Paste rows copied from a spreadsheet. A header row (Company, Name, Role, Email, Phone, Trade) helps accuracy but isn't required.
        </p>
        <textarea
          className="input"
          rows={7}
          style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: '0.82rem' }}
          placeholder={'Company\tName\tRole\tEmail\tPhone\nBarnes Construction\tAlex Hewet\tQuantity Surveyor\tahewet@barnes.co.uk\t07700 900123'}
          value={raw}
          onChange={e => setRaw(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
          <button className="btn-secondary" onClick={runParse} disabled={parsing || !raw.trim()}>
            <Sparkles size={14} />{parsing ? 'Reading…' : 'Detect Clients'}
          </button>
        </div>

        {parsed && (
          <div style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div className="label">Detected {parsed.length} client{parsed.length !== 1 ? 's' : ''}</div>
            </div>
            {parsed.length === 0 && (
              <div style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.85rem', background: '#f8f9fb', borderRadius: '0.5rem' }}>
                Couldn't detect any clients. Check the pasted format.
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '34vh', overflowY: 'auto' }}>
              {parsed.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.7rem 0.875rem', background: '#f8f9fb', border: '1px solid #e8eaf0', borderRadius: '0.5rem' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>{p.name}</div>
                    {p.disciplines.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', margin: '0.3rem 0' }}>
                        {p.disciplines.map(d => <span key={d} className="badge badge-gray" style={{ fontSize: '0.68rem' }}>{d}</span>)}
                      </div>
                    )}
                    {p.contacts.map((ct, ci) => (
                      <div key={ci} style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                        {[ct.name, ct.role, ct.email, ct.phone].filter(Boolean).join(' · ')}
                      </div>
                    ))}
                  </div>
                  <button className="btn-ghost" style={{ padding: '0.2rem', color: '#9ca3af' }} onClick={() => removeRow(idx)} title="Remove"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {importError && (
          <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: 'rgba(184,148,46,0.08)', border: '1px solid rgba(184,148,46,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#8a6d1f' }}>
            {importError}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={confirmImport} disabled={!parsed || parsed.length === 0 || importing}>
            {importing ? 'Importing…' : `Add ${parsed?.length || ''} Client${(parsed?.length ?? 0) !== 1 ? 's' : ''}`}
          </button>
        </div>
      </div>
    </div>
  )
}

function AddClientModal({
  onClose,
  onAdd,
}: {
  onClose: () => void
  onAdd: (company: Omit<ClientCompany, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>
}) {
  const [name, setName] = useState('')
  const [disciplines, setDisciplines] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactRole, setContactRole] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [error, setError] = useState('')

  async function save() {
    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Company name is required.')
      return
    }

    const disciplineList = disciplines.split(',').map(s => s.trim()).filter(Boolean)
    const contacts: ClientCompany['contacts'] = []
    if (contactName.trim()) {
      contacts.push({
        name: contactName.trim(),
        role: contactRole.trim() || undefined,
        email: contactEmail.trim() || undefined,
        phone: contactPhone.trim() || undefined,
      })
    }

    await onAdd({
      name: trimmedName,
      disciplines: disciplineList.length ? disciplineList : ['General'],
      contacts,
    })
    onClose()
  }

  const inputStyle = { fontSize: '0.9rem' } as const

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: '600px' }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <h2 className="section-title">Add Client</h2>
          <button className="btn-ghost" style={{ padding: '0.25rem' }} onClick={onClose}><X size={16} /></button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Company Name *</label>
            <input className="input" style={inputStyle} placeholder="e.g. Barnes Construction Limited" value={name} onChange={e => { setName(e.target.value); setError('') }} />
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Trades / Disciplines</label>
            <input className="input" style={inputStyle} placeholder="Comma-separated, e.g. Groundworks, Civil" value={disciplines} onChange={e => setDisciplines(e.target.value)} />
          </div>
          <div style={{ gridColumn: '1/-1', borderTop: '1px solid #eef0f4', paddingTop: '0.75rem', fontWeight: 700, color: '#0f172a', fontSize: '0.85rem' }}>
            Primary Contact (optional)
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Contact Name</label>
            <input className="input" style={inputStyle} placeholder="e.g. Alex Hewet" value={contactName} onChange={e => setContactName(e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Role</label>
            <input className="input" style={inputStyle} placeholder="e.g. Quantity Surveyor" value={contactRole} onChange={e => setContactRole(e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Email</label>
            <input className="input" style={inputStyle} type="email" placeholder="name@company.co.uk" value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
          </div>
          <div>
            <label className="label" style={{ display: 'block', marginBottom: '0.35rem' }}>Phone</label>
            <input className="input" style={inputStyle} placeholder="07700 000000" value={contactPhone} onChange={e => setContactPhone(e.target.value)} />
          </div>
        </div>

        {error && (
          <div style={{ marginTop: '0.875rem', padding: '0.6rem 0.875rem', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#dc2626' }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={save}>Add Client</button>
        </div>
      </div>
    </div>
  )
}
