import { motion } from 'framer-motion'

export default function About({ spaceRef }) {
  return (
    <section id="tentang" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <span className="about-eyebrow">✦ TENTANG KAMI</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
            <a href="#paket" className="about-btn-primary">
              Lihat Menu Kami
            </a>
            <a href="#kontak" className="about-link">
              Hubungi Kami →
            </a>
          </div>
        </div>

        {/* Space reserved for the scroll-linked photo cluster (active on desktop & mobile) */}
        <div className="about-photo-space" ref={spaceRef} />
      </div>

      <style>{`
        .about {
          position: relative;
          padding: 60px 0 100px;
          overflow: visible;
        }

        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 48px;
          align-items: center;
        }

        .about-text {
          max-width: 500px;
        }

        .about-eyebrow {
          display: inline-block;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .about-text h2 {
          margin-top: 6px;
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #1c1a17;
        }

        .about-desc {
          margin-top: 18px;
          font-size: 16px;
          line-height: 1.65;
          color: #555049;
        }

        .about-actions {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 9999px;
          background: #1c1a17;
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3px 0 #1c1a17;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .about-btn-primary:hover {
          transform: translate(-1.5px, -1.5px);
          box-shadow: 4px 4px 0 #1c1a17;
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .about-link {
          font-weight: 700;
          font-size: 14.5px;
          color: #1c1a17;
          border-bottom: 2px solid #1c1a17;
          padding-bottom: 2px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .about-link:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        .about-photo-space {
          position: relative;
          width: 100%;
          height: 550px;
        }

        @media (max-width: 900px) {
          .about {
            padding: 40px 0 60px;
          }
          .about-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .about-text {
            max-width: none;
          }
          .about-photo-space {
            height: 400px;
            margin-top: 10px;
          }
        }

        @media (max-width: 500px) {
          .about-photo-space {
            height: 360px;
          }
        }
      `}</style>
    </section>
  )
}