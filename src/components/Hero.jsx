import { motion } from 'framer-motion'

export default function Hero({ spaceRef }) {
  return (
    <section id="beranda" className="hero">
      {/* Background grid pattern with fade to transparent in middle */}
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="hero-badge-dot">✦</span>
          <span>CATERING TERPERCAYA SEJAK 2012</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Setiap Acara Lebih Spesial
          <br />
          <span className="hero-title-accent">Bersama Dapoer Kuliner</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
        >
          Tanpa bahan aneh, rasa istimewa — murni kelezatan di setiap suapan :)
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.44 }}
        >
          <a href="#paket" className="hero-btn-primary">
            Lihat Paket Catering
          </a>
          <a href="#kontak" className="hero-btn-secondary">
            Konsultasi Gratis
          </a>
        </motion.div>

        {/* Reserved space for the animated photo cluster (active on both desktop & mobile) */}
        <div className="hero-photo-space" ref={spaceRef}>
          {/* Playful Oatside-style stickers */}
          <div className="hero-sticker sticker-speech" aria-hidden="true">
            <span className="speech-text">Tanpa bahan aneh. 100% lezat & higienis!</span>
            <span className="speech-tail" />
          </div>

          <div className="hero-sticker sticker-sparkle" aria-hidden="true">
            ✦
          </div>

          <div className="hero-sticker sticker-smiley" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1c1a17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" fill="#86efac" />
              <path d="M8 13a4 4 0 0 0 8 0" />
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: 38px 0 28px;
          overflow: visible;
        }

        .hero-grid-pattern {
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 480px;
          background-size: 28px 28px;
          background-image:
            linear-gradient(to right, rgba(28, 26, 23, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28, 26, 23, 0.08) 1px, transparent 1px);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 90%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 90%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1.8px solid #1c1a17;
          background: #ffffff;
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #1c1a17;
          margin-bottom: 18px;
          box-shadow: 2px 2.5px 0 #1c1a17;
        }

        .hero-badge-dot {
          color: #e59322;
          font-size: 12px;
        }

        .hero-title {
          font-size: clamp(34px, 5.4vw, 62px);
          font-weight: 800;
          max-width: 860px;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #1c1a17;
        }

        .hero-title-accent {
          color: var(--color-primary);
          position: relative;
          display: inline-block;
        }

        .hero-sub {
          margin-top: 18px;
          font-family: var(--font-mono);
          font-size: clamp(13px, 1.8vw, 15.5px);
          font-weight: 400;
          letter-spacing: -0.01em;
          max-width: 580px;
          color: #4f4a43;
          line-height: 1.5;
        }

        .hero-actions {
          margin-top: 26px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 28px;
          border-radius: 9999px;
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 700;
          font-size: 14.5px;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-btn-primary:hover {
          transform: translate(-1.5px, -1.5px);
          box-shadow: 4.5px 5px 0 #1c1a17;
          background: var(--color-primary-dark);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 26px;
          border-radius: 9999px;
          background: #ffffff;
          color: #1c1a17;
          font-weight: 700;
          font-size: 14.5px;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-btn-secondary:hover {
          transform: translate(-1.5px, -1.5px);
          box-shadow: 4.5px 5px 0 #1c1a17;
          background: #fdfaf4;
        }

        .hero-photo-space {
          position: relative;
          width: 100%;
          height: 440px;
          margin-top: 36px;
        }

        /* Oatside playful stickers */
        .hero-sticker {
          position: absolute;
          z-index: 6;
          pointer-events: none;
          transition: transform 0.25s ease;
        }

        .sticker-speech {
          left: 4%;
          top: 8%;
          background: #bdeaff;
          border: 2px solid #1c1a17;
          border-radius: 12px;
          padding: 7px 13px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          color: #1c1a17;
          transform: rotate(-4deg);
          box-shadow: 2px 3px 0 #1c1a17;
          max-width: 190px;
          line-height: 1.25;
          text-align: left;
        }

        .sticker-speech .speech-tail {
          position: absolute;
          bottom: -7px;
          left: 20px;
          width: 10px;
          height: 10px;
          background: #bdeaff;
          border-bottom: 2px solid #1c1a17;
          border-right: 2px solid #1c1a17;
          transform: rotate(45deg);
        }

        .sticker-sparkle {
          right: 32%;
          top: 1%;
          font-size: 24px;
          color: #f59e0b;
          text-shadow: 1px 1px 0 #1c1a17, -1px -1px 0 #1c1a17, 1px -1px 0 #1c1a17, -1px 1px 0 #1c1a17;
          animation: floatSparkle 3s ease-in-out infinite alternate;
        }

        .sticker-smiley {
          right: 14%;
          bottom: 22%;
          transform: rotate(10deg);
          border-radius: 50%;
          box-shadow: 2.5px 3px 0 #1c1a17;
          animation: floatSmiley 3.5s ease-in-out infinite alternate;
        }

        @keyframes floatSparkle {
          0% { transform: scale(0.9) rotate(0deg); }
          100% { transform: scale(1.15) rotate(15deg); }
        }

        @keyframes floatSmiley {
          0% { transform: rotate(6deg) translateY(0); }
          100% { transform: rotate(14deg) translateY(-4px); }
        }

        @media (max-width: 900px) {
          .hero {
            padding: 24px 0 20px;
          }
          .hero-photo-space {
            height: 320px;
            margin-top: 28px;
          }
          .sticker-speech {
            left: 2%;
            top: 2%;
            font-size: 10px;
            padding: 5px 9px;
            max-width: 140px;
          }
          .sticker-smiley {
            right: 4%;
            bottom: 12%;
          }
          .sticker-sparkle {
            right: 22%;
            top: -2%;
          }
        }

        @media (max-width: 500px) {
          .hero-photo-space {
            height: 250px;
            margin-top: 20px;
          }
          .sticker-speech {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}