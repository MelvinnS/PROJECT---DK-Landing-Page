import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useScroll, useSpring, animate } from 'framer-motion'
import { photos } from '../data/photos'

// Fan-out layout while photos sit inside the HERO reserved box (Desktop)
const heroFanDesktop = [
  { xPct: 2, yPct: 28, wPct: 20, rotate: -10, z: 2 },
  { xPct: 22, yPct: 12, wPct: 21, rotate: -5, z: 3 },
  { xPct: 41, yPct: 0, wPct: 23, rotate: 0, z: 5 },
  { xPct: 62, yPct: 12, wPct: 21, rotate: 5, z: 3 },
  { xPct: 80, yPct: 28, wPct: 20, rotate: 10, z: 2 },
]

// Fan-out layout for HERO on Mobile (overlapping cards)
const heroFanMobile = [
  { xPct: 1, yPct: 22, wPct: 34, rotate: -12, z: 2 },
  { xPct: 18, yPct: 10, wPct: 36, rotate: -6, z: 3 },
  { xPct: 33, yPct: 0, wPct: 38, rotate: 0, z: 5 },
  { xPct: 49, yPct: 10, wPct: 36, rotate: 6, z: 3 },
  { xPct: 66, yPct: 22, wPct: 34, rotate: 12, z: 2 },
]

// Collage layout once photos land inside ABOUT (Desktop)
const aboutFanDesktop = [
  { xPct: 2, yPct: 2, wPct: 40, rotate: -4, z: 2 },
  { xPct: 48, yPct: 4, wPct: 40, rotate: 4, z: 3 },
  { xPct: 6, yPct: 34, wPct: 37, rotate: 5, z: 4 },
  { xPct: 50, yPct: 30, wPct: 37, rotate: -3, z: 2 },
  { xPct: 24, yPct: 48, wPct: 42, rotate: -2, z: 5 },
]

// Collage layout inside ABOUT on Mobile
const aboutFanMobile = [
  { xPct: 3, yPct: 2, wPct: 44, rotate: -4, z: 2 },
  { xPct: 48, yPct: 4, wPct: 44, rotate: 3, z: 3 },
  { xPct: 6, yPct: 32, wPct: 42, rotate: 5, z: 4 },
  { xPct: 50, yPct: 28, wPct: 42, rotate: -3, z: 2 },
  { xPct: 24, yPct: 48, wPct: 46, rotate: -2, z: 5 },
]

const lerp = (a, b, t) => a + (b - a) * t

function measureBox(wrapperEl, boxEl) {
  if (!wrapperEl || !boxEl) return null
  const wrapperRect = wrapperEl.getBoundingClientRect()
  const boxRect = boxEl.getBoundingClientRect()
  return {
    top: boxRect.top - wrapperRect.top,
    left: boxRect.left - wrapperRect.left,
    width: boxRect.width,
    height: boxRect.height,
  }
}

function toPositions(fan, box) {
  return fan.map((f) => ({
    top: box.top + (f.yPct / 100) * box.height,
    left: box.left + (f.xPct / 100) * box.width,
    width: (f.wPct / 100) * box.width,
    rotate: f.rotate,
    z: f.z,
  }))
}

export default function PhotoCluster({ wrapperRef, heroSpaceRef, aboutSpaceRef, ready }) {
  const [heroBox, setHeroBox] = useState(null)
  const [aboutBox, setAboutBox] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    function recalc() {
      setIsMobile(window.innerWidth <= 768)
      setHeroBox(measureBox(wrapperRef.current, heroSpaceRef.current))
      setAboutBox(measureBox(wrapperRef.current, aboutSpaceRef.current))
    }

    recalc()
    window.addEventListener('resize', recalc)

    let ro
    if (typeof ResizeObserver !== 'undefined' && wrapperRef.current) {
      ro = new ResizeObserver(recalc)
      ro.observe(wrapperRef.current)
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(recalc)
    }

    // Secondary recalculation after layout settles
    const t = setTimeout(recalc, 300)

    return () => {
      window.removeEventListener('resize', recalc)
      clearTimeout(t)
      if (ro) ro.disconnect()
    }
  }, [wrapperRef, heroSpaceRef, aboutSpaceRef])

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  // Map scroll progress so the transition completes smoothly as Tentang Kami enters
  // (between 0.06 and 0.52 progress, so while looking at Tentang Kami, settle is 1.0)
  const settleRaw = useTransform(scrollYProgress, [0.06, 0.52], [0, 1], { clamp: true })
  const settle = useSpring(settleRaw, { stiffness: 120, damping: 24, mass: 0.5 })

  if (!heroBox || !aboutBox) return null

  const heroFan = isMobile ? heroFanMobile : heroFanDesktop
  const aboutFan = isMobile ? aboutFanMobile : aboutFanDesktop

  const heroPositions = toPositions(heroFan, heroBox)
  const aboutPositions = toPositions(aboutFan, aboutBox)

  const center = heroPositions.reduce(
    (acc, p) => ({
      top: acc.top + p.top / heroPositions.length,
      left: acc.left + p.left / heroPositions.length,
    }),
    { top: 0, left: 0 }
  )

  return (
    <div className="photo-cluster" aria-hidden="true">
      <div className="photo-cluster-inner">
        {photos.map((photo, i) => (
          <Photo
            key={photo.id}
            photo={photo}
            hero={heroPositions[i]}
            about={aboutPositions[i]}
            center={center}
            settle={settle}
            ready={ready}
            index={i}
          />
        ))}
      </div>

      <style>{`
        .photo-cluster {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .photo-cluster-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .photo-cluster-item {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 36px -12px rgba(28, 26, 23, 0.32);
          background: #ffffff;
          border: 2px solid #1c1a17;
          will-change: transform, width, top, left;
        }
        .photo-cluster-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 5;
          display: block;
        }
        @media (max-width: 768px) {
          .photo-cluster-item {
            border-radius: 14px;
            border-width: 1.8px;
            box-shadow: 0 12px 24px -10px rgba(28, 26, 23, 0.28);
          }
        }
      `}</style>
    </div>
  )
}

function Photo({ photo, hero, about, center, settle, ready, index }) {
  const gatherX = center.left - hero.left
  const gatherY = center.top - hero.top

  const introProgress = useMotionValue(0)

  useEffect(() => {
    if (ready) {
      animate(introProgress, 1, {
        type: 'spring',
        stiffness: 90,
        damping: 15,
        mass: 0.9,
        delay: 0.12 + index * 0.08,
      })
    }
  }, [ready, index])

  const top = useTransform([settle, introProgress], ([s, i]) => lerp(hero.top, about.top, s) + gatherY * (1 - i))
  const left = useTransform([settle, introProgress], ([s, i]) => lerp(hero.left, about.left, s) + gatherX * (1 - i))
  const width = useTransform(settle, (s) => lerp(hero.width, about.width, s))
  const rotate = useTransform([settle, introProgress], ([s, i]) => lerp(hero.rotate, about.rotate, s) * i)
  const scale = useTransform(introProgress, [0, 1], [0.35, 1])
  const opacity = useTransform(introProgress, [0, 0.4, 1], [0, 1, 1])
  const zIndex = useTransform(settle, (s) => (s > 0.5 ? about.z : hero.z))

  return (
    <motion.div
      className="photo-cluster-item"
      style={{
        top,
        left,
        width,
        zIndex,
        rotate,
        scale,
        opacity,
      }}
    >
      <img src={photo.src} alt={photo.alt} loading="lazy" />
    </motion.div>
  )
}