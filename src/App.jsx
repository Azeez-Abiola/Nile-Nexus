import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import Favicon from './components/Favicon'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Chat from './pages/Chat'

// ScrollToTop component to handle route changes
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Changed to false so animations repeat
      offset: 100,
      mirror: true, // Enables animations when scrolling back up
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Favicon />
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
        <ProjectModal />
      </div>
    </Router>
  )
}

export default App