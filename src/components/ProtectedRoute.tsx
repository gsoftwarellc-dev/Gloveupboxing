import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#161c2d',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="spinner-loader" style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(184,148,46,0.3)',
            borderTopColor: '#b8942e',
            borderRadius: '50%',
            animation: 'spin-loader 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <style>{`
            @keyframes spin-loader {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Loading CRM session...</div>
        </div>
      </div>
    )
  }

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}
