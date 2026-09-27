import { motion } from 'framer-motion'

const items = [
  {
    title: 'Pengalaman 10+ Tahun',
    desc: 'Dari skala harian hingga acara besar.',
    color: '#f7d6cf',
  },
  {
    title: 'Konsistensi Rasa',
    desc: 'Terjaga lewat ribuan porsi terkirim tiap hari.',
    color: '#cdeee0',
  },
  {
    title: 'Menu Fleksibel',
    desc: 'Disesuaikan kebutuhan acara dan anggaran.',
    color: '#cfe2fb',
  },
  {
    title: 'Siap Volume Besar',
    desc: 'Didukung mitra dapur terpercaya.',
    color: '#ffe3b0',
  },
]

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="container whyus-inner">
        <div className="whyus-head">
          <p className="eyebrow">Keunggulan Kami</p>
          <h2>Kenapa Memilih Dapoer Kuliner?</h2>
          <p className="whyus-desc">
            Pengalaman, kualitas, dan layanan terbaik untuk setiap kebutuhan
            catering Anda.
          </p>
          <a href="#kontak" className="btn btn-yellow">
            Konsultasi Sekarang
          </a>
        </div>

        <div className="whyus-list">
          {items.map((item, i) => (
            <motion.div
              className="whyus-item"
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              <span className="whyus-dot" style={{ background: item.color }} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .whyus {
          background: var(--color-surface);
          padding: 96px 0;
        }
        .whyus-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .whyus-head h2 {
          margin-top: 10px;
          font-size: clamp(26px, 3.2vw, 34px);
        }
        .whyus-desc {
          margin-top: 14px;
          max-width: 380px;
          font-size: 15px;
        }
        .whyus-head .btn {
          margin-top: 26px;
        }
        .whyus-list {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }
        .whyus-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .whyus-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .whyus-item h3 {
          font-size: 17px;
        }
        .whyus-item p {
          margin-top: 4px;
          font-size: 14.5px;
        }

        @media (max-width: 800px) {
          .whyus-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
