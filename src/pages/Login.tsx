import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { KeyRound, Mail, AlertCircle, ArrowRight } from 'lucide-react'
import logo from '../assets/logo_updated.png'

export default function Login() {
  const { login, token, error, clearError } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [validationError, setValidationError] = useState('')

  // If already authenticated, redirect to admin immediately
  if (token) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setValidationError('')
    clearError()

    if (!email.trim() || !password.trim()) {
      setValidationError('Please enter both email and password.')
      return
    }

    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin', { replace: true })
    } catch (err) {
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #161c2d 0%, #0f131f 100%)',
      fontFamily: 'Inter, sans-serif',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background shapes */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,148,46,0.08) 0%, transparent 70%)',
        top: '-10%',
        right: '-10%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,148,46,0.06) 0%, transparent 70%)',
        bottom: '-20%',
        left: '-20%',
        zIndex: 0
      }} />

      {/* Main Login Card */}
      <div className="login-card" style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)',
        zIndex: 10,
        position: 'relative'
      }}>
        {/* Logo and Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <img 
            src={logo} 
            alt="Backfill Logo" 
            style={{ 
              height: '42px', 
              width: 'auto', 
              display: 'block',
              margin: '0 auto 1rem',
              objectFit: 'contain'
            }}
          />
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            color: '#ffffff', 
            margin: '0',
            letterSpacing: '-0.02em'
          }}>
            CRM Portal
          </h1>
        </div>

        {/* Error Banners */}
        {(validationError || error) && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px',
            padding: '0.875rem 1rem',
            marginBottom: '1.5rem',
            color: '#fca5a5',
            fontSize: '0.85rem',
            lineHeight: 1.4
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{validationError || error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Email field */}
          <div>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: 600,
              fontSize: '0.82rem',
              marginBottom: '0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail 
                size={16} 
                style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'rgba(255, 255, 255, 0.4)' 
                }} 
              />
              <input
                type="email"
                placeholder=""
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                className="login-input"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 600,
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Password
              </label>
              <Link 
                to="/admin/forgot-password" 
                style={{ 
                  color: '#d4af5a', 
                  fontSize: '0.8rem', 
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Forgot Password?
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <KeyRound 
                size={16} 
                style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'rgba(255, 255, 255, 0.4)' 
                }} 
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                className="login-input"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #b8942e 0%, #d4af5a 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 16px rgba(184, 148, 46, 0.25)',
              transition: 'all 0.2s'
            }}
            className="login-btn"
          >
            {loading ? 'Signing In...' : 'Sign In'}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        {/* Global styling injected for inputs and buttons hover */}
        <style>{`
          .login-input:focus {
            border-color: #d4af5a !important;
            box-shadow: 0 0 0 3px rgba(212, 175, 90, 0.15) !important;
          }
          .login-btn:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(184, 148, 46, 0.4);
          }
          .login-btn:active:not(:disabled) {
            transform: translateY(0);
          }
          @media (max-width: 480px) {
            .login-card {
              padding: 2.25rem 1.5rem !important;
              border-radius: 16px !important;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
