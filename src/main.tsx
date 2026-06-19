import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App.tsx'
import { CrmDataProvider } from './context/CrmDataContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CrmDataProvider>
        <App />
      </CrmDataProvider>
    </AuthProvider>
  </StrictMode>,
)
