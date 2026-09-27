import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useScroll, useSpring, animate } from 'framer-motion'
import { photos } from '../data/photos'

// Fan-out layout while photos sit inside the HERO reserved box.
// All values are PERCENTAGES of that box's own width/height, so the
// cluster always fits the box regardless of screen size or text length
// (this is what fixes photos overlapping the headline/buttons).
const heroFan = [
  { xPct: 2, yPct: 34, wPct: 20, rotate: -10, z: 2 },
  { xPct: 22, yPct: 14, wPct: 21, rotate: -5, z: 3 },
  { xPct: 41, yPct: 0, wPct: 24, rotate: 0, z: 5 },
  { xPct: 64, yPct: 16, wPct: 21, rotate: 6, z: 3 },
  { xPct: 82, yPct: 32, wPct: 19, rotate: 11, z: 2 },
]

// Layout once the photos "land" inside the ABOUT collage box (right column).
const aboutFan = [
  { xPct: 2, yPct: 6, wPct: 40, rotate: -5, z: 2 },
  { xPct: 48, yPct: 0, wPct: 34, rotate: 4, z: 4 },
  { xPct: 8, yPct: 44, wPct: 32, rotate: 6, z: 5 },
  { xPct: 52, yPct: 38, wPct: 30, rotate: -3, z: 3 },
  { xPct: 26, yPct: 64, wPct: 34, rotate: -7, z: 4 },
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

  // Measure the two reserved boxes relative to the wrapper, and re-measure
  // whenever the layout changes (resize, text reflow, fonts loading in).
  // This is what keeps the photos locked inside their box instead of
  // drifting on top of the headline/paragraph text.
  useLayoutEffect(() => {
    function recalc() {
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

    return () => {
      window.removeEventListener('resize', recalc)
      if (ro) ro.disconnect()
    }
  }, [wrapperRef, heroSpaceRef, aboutSpaceRef])

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  // Raw scroll progress mapped to a 0->1 "settle" value (hero -> about),
  // then run through a spring so the morph glides instead of tracking the
  // scrollbar 1:1 — this is the main thing that makes it feel "smooth".
  const settleRaw = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, 1])
  const settle = useSpring(settleRaw, { stiffness: 110, damping: 22, mass: 0.6 })

  if (!heroBox || !aboutBox) return null

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
          z-index: 1;
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
          box-shadow: 0 20px 40px -18px rgba(28, 26, 23, 0.35);
          background: var(--color-surface);
          will-change: transform;
        }
        .photo-cluster-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 5;
          display: block;
        }
        @media (max-width: 900px) {
          .photo-cluster {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

function Photo({ photo, hero, about, center, settle, ready, index }) {
  // Offset from this photo's hero slot back to the shared center point —
  // used so, before the intro plays, every photo starts stacked together
  // at the center and then flies out into its fanned hero position.
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
        delay: 0.12 + index * 0.09,
      })
    }
  }, [ready])

  const top = useTransform([settle, introProgress], ([s, i]) => lerp(hero.top, about.top, s) + gatherY * (1 - i))
  const left = useTransform([settle, introProgress], ([s, i]) => lerp(hero.left, about.left, s) + gatherX * (1 - i))
  const rotate = useTransform([settle, introProgress], ([s, i]) => lerp(hero.rotate, about.rotate, s) * i)
  const scale = useTransform(introProgress, [0, 1], [0.35, 1])
  const opacity = useTransform(introProgress, [0, 0.4, 1], [0, 1, 1])
  // Switch stacking order once the photo has mostly landed in the About
  // collage, so the layering there matches the About layout, not the hero one.
  const zIndex = useTransform(settle, (s) => (s > 0.5 ? about.z : hero.z))

  return (
    <motion.div
      className="photo-cluster-item"
      style={{
        top,
        left,
        width: hero.width,
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