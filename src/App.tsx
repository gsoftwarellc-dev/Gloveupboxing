import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import MassEmail from './pages/MassEmail'
import Activity from './pages/Activity'
import AdminSettings from './pages/AdminSettings'
import GeoMapping from './pages/GeoMapping'
import Reports from './pages/Reports'
import ProjectDetail from './pages/ProjectDetail'
import PostJob from './pages/PostJob'
import PublicJobs from './pages/website/PublicJobs'
import JobDetail from './pages/website/JobDetail'
import CandidateApply from './pages/website/CandidateApply'
import Home from './pages/website/Home'
import SiteLayout from './pages/website/SiteLayout'
import Contact from './pages/website/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website — shared header/footer via SiteLayout */}
        <Route path="home" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<PublicJobs />} />
          <Route path="jobs/:id" element={<JobDetail />} />
          <Route path="apply" element={<CandidateApply />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
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
          <Route path="geo-mapping" element={<GeoMapping />} />
          <Route path="email" element={<MassEmail />} />
          <Route path="activity" element={<Activity />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
