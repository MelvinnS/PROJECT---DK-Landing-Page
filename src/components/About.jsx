import { motion } from 'framer-motion'
import { photos } from '../data/photos'

export default function About() {
  return (
    <section id="tentang" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="eyebrow">Tentang Kami</p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Lebih dari 10 Tahun Menyajikan Rasa untuk Momen Spesial Anda
          </motion.h2>
          <p className="about-desc">
            Sejak 2012, Dapoer Kuliner melayani wedding, acara perusahaan, dan
            berbagai acara lainnya — sekaligus catering harian dan makan siang
            karyawan dengan rasa yang konsisten setiap hari.
          </p>
          <div className="about-actions">
            <a href="#paket" className="btn btn-primary">
              Tentang Kami
            </a>
            <a href="#galeri" className="about-link">
              Lihat Galeri
            </a>
          </div>
        </div>

        {/* Space reserved for the scroll-linked photo cluster (desktop) */}
        <div className="about-photo-space" />

        {/* Static fallback grid for mobile */}
        <div className="about-photo-grid">
          {photos.slice(0, 4).map((photo) => (
            <div className="about-photo-grid-item" key={photo.id}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about {
          padding: 40px 0 120px;
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .about-text {
          max-width: 480px;
        }
        .about-text h2 {
          margin-top: 10px;
          font-size: clamp(28px, 3.4vw, 38px);
        }
        .about-desc {
          margin-top: 18px;
          font-size: 15.5px;
        }
        .about-actions {
          margin-top: 30px;
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .about-link {
          font-weight: 600;
          border-bottom: 1.5px solid var(--color-text);
          padding-bottom: 2px;
        }
        .about-photo-space {
          height: 560px;
        }
        .about-photo-grid {
          display: none;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
          }
          .about-photo-space {
            display: none;
          }
          .about-text {
            max-width: none;
          }
          .about-photo-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 8px;
          }
          .about-photo-grid-item {
            border-radius: 16px;
            overflow: hidden;
            aspect-ratio: 4 / 5;
            box-shadow: 0 14px 28px -16px rgba(28, 26, 23, 0.3);
          }
          .about-photo-grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      `}</style>
    </section>
  )
}
