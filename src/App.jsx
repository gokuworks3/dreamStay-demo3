import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SplashScreen from './components/SplashScreen'
import About from './pages/About'
import Amenities from './pages/Amenities'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Rooms from './pages/Rooms'

const pageVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
}

function AnimatedPage({ children }) {
  return (
    <Motion.div variants={pageVariants} initial="hidden" animate="visible" exit="exit">
      {children}
    </Motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/rooms"
          element={
            <AnimatedPage>
              <Rooms />
            </AnimatedPage>
          }
        />
        <Route
          path="/amenities"
          element={
            <AnimatedPage>
              <Amenities />
            </AnimatedPage>
          }
        />
        <Route
          path="/gallery"
          element={
            <AnimatedPage>
              <Gallery />
            </AnimatedPage>
          }
        />
        <Route
          path="/booking"
          element={
            <AnimatedPage>
              <Booking />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [splashDone, setSplashDone] = useState(false)

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {splashDone && (
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="pt-20 sm:pt-24">
            <AppRoutes />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
