import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, useScroll, animate } from 'framer-motion'
import { photos } from '../data/photos'

// Layout of each photo while in the HERO section (top/left in px measured
// from the top of the combined Hero+About wrapper, sizes in px, rotate in deg).
const heroLayout = [
  { top: 120, left: 40, width: 190, rotate: -6, z: 2 },
  { top: 90, left: 230, width: 190, rotate: -2, z: 3 },
  { top: 40, left: 420, width: 230, rotate: 0, z: 5 },
  { top: 100, left: 640, width: 170, rotate: 4, z: 3 },
  { top: 70, left: 800, width: 220, rotate: 7, z: 4 },
]

// Layout of each photo once they've "landed" inside the About section collage
// (positioned toward the right column, next to the About text on the left).
const aboutLayout = [
  { top: 860, left: 560, width: 170, rotate: -5, z: 2 },
  { top: 800, left: 700, width: 150, rotate: 4, z: 4 },
  { top: 900, left: 560, width: 210, rotate: -2, z: 5 },
  { top: 780, left: 830, width: 170, rotate: 6, z: 3 },
  { top: 990, left: 780, width: 190, rotate: 3, z: 4 },
]

const lerp = (a, b, t) => a + (b - a) * t

export default function PhotoCluster({ wrapperRef, ready }) {
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  // Scroll from hero (0) to about (1). Bias so the descent mostly happens
  // in the second half of the wrapper's scroll range.
  const settle = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0, 1])

  const introProgress = useMotionValue(0)

  useEffect(() => {
    if (ready) {
      animate(introProgress, 1, { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 })
    }
  }, [ready])

  const center = { top: 380, left: 460 }

  return (
    <div className="photo-cluster" aria-hidden="true">
      <div className="container photo-cluster-inner">
        {photos.map((photo, i) => (
          <Photo
            key={photo.id}
            photo={photo}
            hero={heroLayout[i]}
            about={aboutLayout[i]}
            center={center}
            settle={settle}
            introProgress={introProgress}
            delay={i * 0.08}
          />
        ))}
      </div>

      <style>{`
        .photo-cluster {
          position: absolute;
          inset: 0;
          top: 0;
          pointer-events: none;
        }
        .photo-cluster-inner {
          position: relative;
          height: 100%;
        }
        .photo-cluster-item {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px -18px rgba(28, 26, 23, 0.35);
          background: var(--color-surface);
        }
        .photo-cluster-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          aspect-ratio: 4 / 5;
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

function Photo({ photo, hero, about, center, settle, introProgress, delay }) {
  const gatheredOffsetX = center.left - hero.left
  const gatheredOffsetY = center.top - hero.top

  const top = useTransform([settle, introProgress], ([s, i]) => {
    const base = lerp(hero.top, about.top, s)
    return base + gatheredOffsetY * (1 - i)
  })
  const left = useTransform([settle, introProgress], ([s, i]) => {
    const base = lerp(hero.left, about.left, s)
    return base + gatheredOffsetX * (1 - i)
  })
  const rotate = useTransform([settle, introProgress], ([s, i]) => lerp(hero.rotate, about.rotate, s) * i)
  const scale = useTransform([settle, introProgress], ([s, i]) => lerp(1, 1, s) * lerp(0.3, 1, i))
  const opacity = useTransform(introProgress, [0, 0.4, 1], [0, 1, 1])

  return (
    <motion.div
      className="photo-cluster-item"
      style={{
        top,
        left,
        width: hero.width,
        zIndex: hero.z,
        rotate,
        scale,
        opacity,
        transitionDelay: `${delay}s`,
      }}
    >
      <img src={photo.src} alt={photo.alt} loading="lazy" />
    </motion.div>
  )
}
