import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import StonePage from './pages/StonePage'
import About from './pages/About'
import Contact from './pages/Contact'
import useReveal from './hooks/useReveal'

export default function App() {
  const { pathname } = useLocation()

  // New page: start at the top and re-arm the scroll reveals.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  useReveal([pathname])

  return (
    <>
      <Header />
      <main>
        <div key={pathname} className="page-in">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collection/:slug" element={<StonePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
