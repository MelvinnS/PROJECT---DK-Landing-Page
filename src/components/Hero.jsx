import { motion } from 'framer-motion'
import { photos } from '../data/photos'

export default function Hero({ spaceRef }) {
  return (
    <section id="beranda" className="hero">
      <div className="container hero-inner">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
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
          Rasa istimewa, kualitas terjaga, untuk setiap momen berharga Anda.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.44 }}
        >
          <a href="#paket" className="btn btn-primary">
            Lihat Paket Catering
          </a>
          <a href="#kontak" className="btn btn-secondary">
            Konsultasi Gratis
          </a>
        </motion.div>

        {/* Reserved space for the animated photo cluster (desktop only).
            PhotoCluster measures this box's real position/size so photos
            always stay locked inside it, no matter the screen width. */}
        <div className="hero-photo-space" ref={spaceRef} />

        {/* Simple static grid fallback for mobile / small screens */}
        <div className="hero-photo-grid">
          {photos.map((photo) => (
            <div className="hero-photo-grid-item" key={photo.id}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          padding: 56px 0 40px;
        }
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-title {
          font-size: clamp(34px, 5.2vw, 58px);
          max-width: 820px;
          letter-spacing: -0.01em;
        }
        .hero-title-accent {
          color: var(--color-primary);
        }
        .hero-sub {
          margin-top: 18px;
          font-size: 17px;
          max-width: 480px;
        }
        .hero-actions {
          margin-top: 30px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-photo-space {
          width: 100%;
          height: 460px;
        }
        .hero-photo-grid {
          display: none;
        }

        @media (max-width: 900px) {
          .hero-photo-space {
            display: none;
          }
          .hero-photo-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 36px;
            width: 100%;
          }
          .hero-photo-grid-item {
            border-radius: 16px;
            overflow: hidden;
            aspect-ratio: 4 / 5;
            box-shadow: 0 14px 28px -16px rgba(28, 26, 23, 0.3);
          }
          .hero-photo-grid-item:first-child {
            grid-column: span 2;
          }
          .hero-photo-grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  )
}