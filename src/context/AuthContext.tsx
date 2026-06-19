import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { apiFetch } from '../lib/api'

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface AuthContextValue {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  forgotPassword: (email: string) => Promise<{ message: string }>
  resetPassword: (email: string, token: string, password: string) => Promise<string>
  changePassword: (currentPassword: string, newPassword: string) => Promise<string>
  clearError: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const clearError = useCallback(() => setError(null), [])

  const checkAuth = useCallback(async () => {
    const savedToken = localStorage.getItem('crm_token')
    if (!savedToken) {
      setLoading(false)
      return
    }

    try {
      setToken(savedToken)
      const userData = await apiFetch<User>('/auth/me')
      setUser(userData)
    } catch (err) {
      console.error('Failed to verify token:', err)
      localStorage.removeItem('crm_token')
      setToken(null)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void checkAuth()
  }, [checkAuth])

  const login = useCallback(async (email: string, password: string) => {
    setError(null)
    setLoading(true)
    try {
      const response = await apiFetch<{ token: string; user: User }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password, device_name: 'crm-frontend' }),
      })
      localStorage.setItem('crm_token', response.token)
      setToken(response.token)
      setUser(response.user)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Invalid credentials.'
      setError(msg)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setLoading(true)
    try {
      await apiFetch('/auth/logout', { method: 'POST' })
    } catch (err) {
      console.error('Logout failed on backend:', err)
    } finally {
      localStorage.removeItem('crm_token')
      setToken(null)
      setUser(null)
      setError(null)
      setLoading(false)
    }
  }, [])

  const forgotPassword = useCallback(async (email: string) => {
    setError(null)
    try {
      const response = await apiFetch<{ message: string }>('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      })
      return response
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to reset password.'
      setError(msg)
      throw err
    }
  }, [])

  const resetPassword = useCallback(async (email: string, token: string, password: string) => {
    setError(null)
    try {
      const response = await apiFetch<{ message: string }>('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ email, token, password, password_confirmation: password }),
      })
      return response.message
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to reset password.'
      setError(msg)
      throw err
    }
  }, [])

  const changePassword = useCallback(async (currentPassword: string, newPassword: string) => {
    setError(null)
    try {
      const response = await apiFetch<{ message: string }>('/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
      })
      return response.message
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unable to change password.'
      setError(msg)
      throw err
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, token, loading, error, login, logout, forgotPassword, resetPassword, changePassword, clearError }}>
      {children}
    </AuthContext.Provider>
  )
}
