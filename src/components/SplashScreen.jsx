import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <motion.div
        className="splash-mark"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="splash-mark-dot">D</span>
        <span className="splash-mark-text">
          Dapoer<br />Kuliner
        </span>
      </motion.div>
      <motion.div
        className="splash-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <style>{`
        .splash {
          position: fixed;
          inset: 0;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 100;
        }
        .splash-mark {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .splash-mark-dot {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--color-primary);
          color: #fff;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .splash-mark-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 22px;
          line-height: 1.05;
          color: var(--color-text);
        }
        .splash-bar {
          width: 140px;
          height: 3px;
          border-radius: 999px;
          background: var(--color-primary);
          transform-origin: left;
        }
      `}</style>
    </motion.div>
  )
}
