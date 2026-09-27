import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PhotoCluster from './components/PhotoCluster'
import WhyUs from './components/WhyUs'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CateringBoxPage from './components/CateringBoxPage'
import PrasmananPage from './components/PrasmananPage'

const SPLASH_DURATION = 1600 // ms shown before landing page appears

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [heroReady, setHeroReady] = useState(false)
  const [page, setPage] = useState('home') // 'home' | 'catering-box' | 'prasmanan'
  const heroAboutRef = useRef(null)
  const heroSpaceRef = useRef(null)
  const aboutSpaceRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION)
    return () => clearTimeout(timer)
  }, [])

  // Scroll to top when navigating between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const handleNavigateToCateringBox = () => setPage('catering-box')
  const handleNavigateToPrasmanan = () => setPage('prasmanan')
  const handleNavigateHome = () => setPage('home')

  return (
    <>
      <AnimatePresence mode="wait">
        {page === 'catering-box' ? (
          <motion.div
            key="catering-box-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <CateringBoxPage onBack={handleNavigateHome} />
          </motion.div>
        ) : page === 'prasmanan' ? (
          <motion.div
            key="prasmanan-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <PrasmananPage onBack={handleNavigateHome} />
          </motion.div>
        ) : (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence
              onExitComplete={() => {
                // Kick off the hero "gather -> spread" photo animation right
                // after the splash screen has fully faded out.
                setHeroReady(true)
              }}
            >
              {showSplash && <SplashScreen key="splash" />}
            </AnimatePresence>

            <Navbar />

            <div className="hero-about-wrap" ref={heroAboutRef}>
              <Hero spaceRef={heroSpaceRef} />
              <About spaceRef={aboutSpaceRef} />
              <PhotoCluster
                wrapperRef={heroAboutRef}
                heroSpaceRef={heroSpaceRef}
                aboutSpaceRef={aboutSpaceRef}
                ready={heroReady}
              />
            </div>

            <WhyUs />
            <Packages
              onNavigateCateringBox={handleNavigateToCateringBox}
              onNavigatePrasmanan={handleNavigateToPrasmanan}
            />
            <FAQ />
            <Footer />
            <WhatsAppButton />

            <style>{`
              .hero-about-wrap {
                position: relative;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}