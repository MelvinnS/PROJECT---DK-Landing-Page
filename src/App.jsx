import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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

const SPLASH_DURATION = 1600 // ms shown before landing page appears

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [heroReady, setHeroReady] = useState(false)
  const heroAboutRef = useRef(null)
  const heroSpaceRef = useRef(null)
  const aboutSpaceRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
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
      <Packages />
      <FAQ />
      <Footer />
      <WhatsAppButton />

      <style>{`
        .hero-about-wrap {
          position: relative;
        }
      `}</style>
    </>
  )
}