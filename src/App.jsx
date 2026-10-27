import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Loaded only when visited: it brings the Markdown renderer, which the home page doesn't need.
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
import {
  profile,
  experiences,
  services,
  socialLinks,
  skills,
  educations,
  certifications
} from '@/data/mockData'

function App() {
  const initials = profile ? `${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}` : 'RT'

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={<Home
            profile={profile}
            initials={initials}
            experiences={experiences}
            services={services}
            socialLinks={socialLinks}
            skills={skills}
            educations={educations}
            certifications={certifications}
          />}
        />
        <Route
          path="/privacy-policy"
          element={<Suspense fallback={null}>
            <PrivacyPolicy
              profile={profile}
              socialLinks={socialLinks}
            />
          </Suspense>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
