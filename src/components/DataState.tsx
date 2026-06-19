export function DataState({ loading, error }: { loading: boolean; error: string | null }) {
  if (loading) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
        Loading database records from Laravel...
      </div>
    )
  }

  if (error) {
    return (
      <div className="card" style={{ padding: '2rem', textAlign: 'center', color: '#b91c1c', borderColor: '#fecaca', background: '#fef2f2' }}>
        {error}
      </div>
    )
  }

  return null
}
