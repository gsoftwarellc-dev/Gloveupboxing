import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { KeyRound, AlertCircle, CheckCircle, ArrowLeft, Eye, EyeOff } from 'lucide-react'
import logo from '../assets/logo_updated.png'

export default function ResetPassword() {
  const { resetPassword, token: authToken } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token') ?? ''
  const email = searchParams.get('email') ?? ''

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  if (authToken) return <Navigate to="/admin" replace />

  if (!token || !email) {
    return <Navigate to="/admin/forgot-password" replace />
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!password || !confirm) {
      setError('Please fill in both fields.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      await resetPassword(email, token, password)
      setSuccess(true)
      setTimeout(() => navigate('/admin/login', { replace: true }), 3000)
    } catch {
      // error set in context
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #161c2d 0%, #0f131f 100%)',
      fontFamily: 'Inter, sans-serif',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(184,148,46,0.08) 0%, transparent 70%)', top:'-10%', right:'-10%' }} />
      <div style={{ position:'absolute', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(184,148,46,0.06) 0%, transparent 70%)', bottom:'-20%', left:'-20%' }} />

      <div style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        zIndex: 10,
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={logo} alt="Bravo Logo" style={{ height:'42px', width:'auto', display:'block', margin:'0 auto 1rem', objectFit:'contain' }} />
          <h1 style={{ fontSize:'1.5rem', fontWeight:800, color:'#ffffff', margin:'0 0 0.5rem', letterSpacing:'-0.02em' }}>
            {success ? 'Password Updated' : 'Choose New Password'}
          </h1>
          {!success && (
            <p style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.5)', margin:0, lineHeight:1.5 }}>
              Must be at least 8 characters.
            </p>
          )}
        </div>

        {success ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width:'56px', height:'56px', borderRadius:'50%', background:'rgba(34,197,94,0.15)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.25rem' }}>
              <CheckCircle size={28} style={{ color: '#4ade80' }} />
            </div>
            <p style={{ color:'#e2e8f0', fontSize:'0.95rem', fontWeight:500, lineHeight:1.6, margin:'0 0 0.5rem' }}>
              Password reset successfully!
            </p>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.85rem', margin:'0 0 2rem' }}>
              Redirecting you to sign in…
            </p>
            <Link to="/admin/login" style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', color:'#d4af5a', fontSize:'0.9rem', textDecoration:'none', fontWeight:700 }}>
              <ArrowLeft size={16} /> Sign In Now
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            {(error) && (
              <div style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:'12px', padding:'0.875rem 1rem', color:'#fca5a5', fontSize:'0.85rem', lineHeight:1.4 }}>
                <AlertCircle size={16} style={{ flexShrink:0, marginTop:'2px' }} />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label style={{ display:'block', color:'rgba(255,255,255,0.75)', fontWeight:600, fontSize:'0.82rem', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em' }}>
                New Password
              </label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={16} style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.4)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  style={{ width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'12px', padding:'0.75rem 2.75rem 0.75rem 2.5rem', fontSize:'0.95rem', color:'#ffffff', outline:'none', boxSizing:'border-box' }}
                  className="rp-input"
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={{ position:'absolute', right:'1rem', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.4)', padding:0, display:'flex' }}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label style={{ display:'block', color:'rgba(255,255,255,0.75)', fontWeight:600, fontSize:'0.82rem', marginBottom:'0.4rem', textTransform:'uppercase', letterSpacing:'0.05em' }}>
                Confirm Password
              </label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={16} style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'rgba(255,255,255,0.4)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  placeholder="Repeat password"
                  style={{ width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'12px', padding:'0.75rem 1rem 0.75rem 2.5rem', fontSize:'0.95rem', color:'#ffffff', outline:'none', boxSizing:'border-box' }}
                  className="rp-input"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ background:'linear-gradient(135deg,#b8942e 0%,#d4af5a 100%)', color:'#ffffff', border:'none', borderRadius:'12px', padding:'0.85rem', fontSize:'0.95rem', fontWeight:700, cursor:'pointer', marginTop:'0.5rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', boxShadow:'0 4px 16px rgba(184,148,46,0.25)', transition:'all 0.2s' }}
              className="rp-btn"
            >
              {loading ? 'Saving…' : 'Set New Password'}
            </button>

            <div style={{ textAlign: 'center' }}>
              <Link to="/admin/login" style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', color:'rgba(255,255,255,0.5)', fontSize:'0.85rem', textDecoration:'none', fontWeight:600 }} className="back-link">
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>
          </form>
        )}

        <style>{`
          .rp-input:focus { border-color:#d4af5a !important; box-shadow:0 0 0 3px rgba(212,175,90,0.15) !important; }
          .rp-btn:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 6px 20px rgba(184,148,46,0.4); }
          .back-link:hover { color:#d4af5a !important; }
        `}</style>
      </div>
    </div>
  )
}
