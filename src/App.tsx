import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Candidates from './pages/Candidates'
import CandidateDetail from './pages/CandidateDetail'
import Vacancies from './pages/Vacancies'
import VacancyDetail from './pages/VacancyDetail'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import ClientDetail from './pages/ClientDetail'
import Matching from './pages/Matching'
import Cvs from './pages/Cvs'
import MassEmail from './pages/MassEmail'
import CallLogs from './pages/CallLogs'
import AdminSettings from './pages/AdminSettings'
import GeoMapping from './pages/GeoMapping'
import ProjectDetail from './pages/ProjectDetail'
import PostJob from './pages/PostJob'
import PublicJobs from './pages/website/PublicJobs'
import JobDetail from './pages/website/JobDetail'
import CandidateApply from './pages/website/CandidateApply'
import Home from './pages/website/Home'
import SiteLayout from './pages/website/SiteLayout'
import Contact from './pages/website/Contact'
import WeeklyIntelligenceReports from './pages/website/WeeklyIntelligenceReports'
import WhatMakesUsDifferent from './pages/website/WhatMakesUsDifferent'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ProtectedRoute from './components/ProtectedRoute'

// Redirects a bare CRM path (e.g. /projects/145) to its /admin equivalent, preserving id + query.
function AdminRedirect({ base }: { base: string }) {
  const { pathname, search } = useLocation()
  const rest = pathname.replace(new RegExp(`^/${base}`), '')
  return <Navigate to={`/admin/${base}${rest}${search}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website — shared header/footer via SiteLayout */}
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<PublicJobs />} />
          <Route path="jobs/:id" element={<JobDetail />} />
          <Route path="apply" element={<CandidateApply />} />
          <Route path="weekly-intelligence-reports" element={<WeeklyIntelligenceReports />} />
          <Route path="what-makes-us-different" element={<WhatMakesUsDifferent />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* CRM Dashboard / Admin panel */}
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/forgot-password" element={<ForgotPassword />} />
        <Route path="admin/reset-password" element={<ResetPassword />} />

        <Route path="admin" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetail />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="vacancies/new" element={<PostJob />} />
          <Route path="vacancies/:id" element={<VacancyDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:id" element={<ClientDetail />} />
          <Route path="matching" element={<Matching />} />
          <Route path="cvs" element={<Cvs />} />
          <Route path="geo-mapping" element={<GeoMapping />} />
          <Route path="email" element={<MassEmail />} />
          <Route path="call-logs" element={<CallLogs />} />
          <Route path="activity" element={<Navigate to="/admin" replace />} />
          <Route path="reports" element={<Navigate to="/admin" replace />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Legacy/bare CRM paths without the /admin prefix → redirect into the admin area, keeping the id */}
        <Route path="/projects/*" element={<AdminRedirect base="projects" />} />
        <Route path="/candidates/*" element={<AdminRedirect base="candidates" />} />
        <Route path="/clients/*" element={<AdminRedirect base="clients" />} />
        <Route path="/vacancies/*" element={<AdminRedirect base="vacancies" />} />

        {/* Unknown route → public home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
