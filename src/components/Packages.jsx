import { motion } from 'framer-motion'

const packages = [
  {
    label: 'PAKET A',
    title: 'Catering Harian',
    desc: 'Solusi praktis makan sehari-hari, untuk keluarga maupun karyawan kantor.',
    bg: '#ffe3a0',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'PAKET B',
    title: 'Catering Box',
    desc: 'Praktis dan higienis untuk rapat, seminar, maupun acara spesial Anda.',
    bg: '#f7c9a8',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'PAKET C',
    title: 'Catering Prasmanan',
    desc: 'Pilihan tepat untuk pernikahan, acara perusahaan, dan perayaan lainnya.',
    bg: '#cfe3b3',
    image:
      'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600&auto=format&fit=crop',
  },
]

export default function Packages() {
  return (
    <section id="paket" className="packages">
      <div className="container">
        <div className="packages-head">
          <p className="eyebrow">Paket Catering</p>
          <h2>Pilih Paket yang Sesuai untuk Kebutuhan Anda</h2>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <motion.article
              className="package-card"
              style={{ background: pkg.bg }}
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <div className="package-body">
                <span className="package-label">{pkg.label}</span>
                <h3>{pkg.title}</h3>
                <p>{pkg.desc}</p>
                <a href="#kontak" className="package-arrow" aria-label={`Pesan ${pkg.title}`}>
                  →
                </a>
              </div>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} loading="lazy" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="packages-cta">
          <a href="#kontak" className="btn btn-secondary">
            Lihat Semua Paket →
          </a>
        </div>
      </div>

      <style>{`
        .packages {
          padding: 96px 0;
        }
        .packages-head {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 48px;
        }
        .packages-head h2 {
          margin-top: 10px;
          font-size: clamp(26px, 3.2vw, 34px);
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .package-card {
          border-radius: 22px;
          padding: 26px 26px 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .package-body {
          padding-bottom: 20px;
        }
        .package-label {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          opacity: 0.65;
        }
        .package-body h3 {
          margin-top: 8px;
          font-size: 21px;
        }
        .package-body p {
          margin-top: 10px;
          font-size: 14px;
          color: rgba(28, 26, 23, 0.72);
        }
        .package-arrow {
          margin-top: 16px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }
        .package-image {
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: 16px 16px 0 0;
          overflow: hidden;
        }
        .package-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .packages-cta {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        @media (max-width: 900px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
