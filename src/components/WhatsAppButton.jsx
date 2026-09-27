import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const kontakEl = document.getElementById('kontak')
      if (kontakEl) {
        const rect = kontakEl.getBoundingClientRect()
        // Appears when the contact/footer section enters the viewport (top of kontak <= window height)
        const inView = rect.top <= window.innerHeight - 80 && rect.bottom >= 0
        setIsVisible(inView)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="wa-floating-wrap"
          initial={{ scale: 0, y: 70, opacity: 0 }}
          animate={{
            scale: [0, 1.35, 0.82, 1.15, 0.95, 1],
            scaleX: [0, 1.4, 0.85, 1.12, 0.97, 1],
            scaleY: [0, 0.72, 1.25, 0.92, 1.04, 1],
            y: [70, -10, 4, -2, 0],
            opacity: 1,
          }}
          exit={{
            scale: [1, 1.18, 0],
            opacity: [1, 0.7, 0],
            y: 40,
            transition: { duration: 0.3, ease: 'easeIn' },
          }}
          transition={{
            duration: 0.65,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
        >
          <motion.a
            href="https://wa.me/628991004545?text=Halo%20Dapoer%20Kuliner,%20saya%20tertarik%20dengan%20paket%20catering%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
            aria-label="Hubungi kami via WhatsApp"
            whileHover={{ scale: 1.1, rotate: 6 }}
            whileTap={{ scale: 0.88, rotate: -6 }}
          >
            {/* Playful speech bubble tooltip */}
            <span className="wa-tooltip" aria-hidden="true">
              Chat Kami!
              <span className="wa-tooltip-tail" />
            </span>

            {/* Official WhatsApp SVG Icon */}
            <svg
              className="wa-icon"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.13 23.44L2.09 29.91L8.76 27.91C10.87 29.21 13.35 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2Z"
                fill="#25D366"
              />
              <path
                d="M23.63 20.08C23.21 19.87 21.14 18.85 20.76 18.71C20.37 18.57 20.09 18.5 19.81 18.92C19.53 19.34 18.73 20.28 18.49 20.56C18.24 20.84 18 20.88 17.58 20.67C17.16 20.46 15.82 20.02 14.22 18.6C12.98 17.5 12.14 16.14 11.9 15.72C11.66 15.3 11.87 15.08 12.08 14.87C12.27 14.68 12.5 14.38 12.71 14.14C12.92 13.9 12.99 13.73 13.13 13.45C13.27 13.17 13.2 12.93 13.1 12.72C13 12.51 12.16 10.45 11.81 9.61C11.47 8.79 11.12 8.9 10.87 8.89C10.63 8.88 10.35 8.88 10.07 8.88C9.79 8.88 9.34 8.99 8.96 9.41C8.58 9.83 7.5 10.84 7.5 12.9C7.5 14.96 9 16.95 9.21 17.23C9.42 17.51 12.16 21.72 16.34 23.53C17.33 23.96 18.11 24.22 18.71 24.41C19.7 24.72 20.6 24.68 21.31 24.57C22.1 24.45 23.75 23.57 24.09 22.59C24.44 21.61 24.44 20.77 24.33 20.56C24.23 20.35 24.05 20.29 23.63 20.08Z"
                fill="#ffffff"
              />
            </svg>
          </motion.a>
        </motion.div>
      )}

      <style>{`
        .wa-floating-wrap {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          border: 2.2px solid #1c1a17;
          box-shadow: 3.5px 4px 0 #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          animation: jellyPulse 4s ease-in-out infinite;
        }

        .wa-icon {
          width: 38px;
          height: 38px;
          display: block;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
        }

        .wa-tooltip {
          position: absolute;
          right: 70px;
          background: #ffd966;
          color: #1c1a17;
          border: 1.8px solid #1c1a17;
          border-radius: 9999px;
          padding: 6px 14px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 2px 2.5px 0 #1c1a17;
          pointer-events: none;
        }

        .wa-tooltip-tail {
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: #ffd966;
          border-top: 1.8px solid #1c1a17;
          border-right: 1.8px solid #1c1a17;
        }

        @keyframes jellyPulse {
          0%, 100% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(1.06, 0.94, 1) translateY(-2px);
          }
          50% {
            transform: scale3d(0.96, 1.05, 1) translateY(-5px);
          }
          70% {
            transform: scale3d(1.03, 0.97, 1) translateY(-2px);
          }
        }

        @media (max-width: 600px) {
          .wa-floating-wrap {
            bottom: 20px;
            right: 20px;
          }
          .wa-btn {
            width: 54px;
            height: 54px;
          }
          .wa-icon {
            width: 34px;
            height: 34px;
          }
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>
    </AnimatePresence>
  )
}
