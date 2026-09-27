import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Apa saja layanan catering yang disediakan?',
    a: 'Dapoer Kuliner melayani catering harian, catering box, prasmanan, acara pernikahan, event perusahaan, dan berbagai acara lainnya.',
  },
  {
    q: 'Apakah bisa memesan dengan menu khusus?',
    a: 'Bisa. Menu dapat disesuaikan dengan kebutuhan acara maupun anggaran Anda.',
  },
  {
    q: 'Berapa minimal pemesanan?',
    a: 'Minimal pemesanan berbeda untuk tiap paket. Hubungi kami untuk detail lengkapnya.',
  },
  {
    q: 'Apakah melayani area luar kota?',
    a: 'Untuk saat ini kami fokus melayani area dalam kota dan sekitarnya. Silakan tanyakan area Anda ke tim kami.',
  },
  {
    q: 'Bagaimana cara melakukan pemesanan?',
    a: 'Hubungi kami melalui tombol "Hubungi Kami" di halaman ini, lalu tim kami akan membantu proses pemesanan.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq-inner">
        <div className="faq-head">
          <p className="eyebrow">Pertanyaan Umum</p>
          <h2>Masih Ada Pertanyaan?</h2>
          <p className="faq-desc">
            Jika masih ada yang ingin ditanyakan, jangan ragu untuk
            menghubungi kami.
          </p>
          <a href="#kontak" className="btn btn-yellow">
            Hubungi Kami
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq {
          padding: 96px 0 120px;
        }
        .faq-inner {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 48px;
        }
        .faq-head h2 {
          margin-top: 10px;
          font-size: clamp(26px, 3.2vw, 34px);
        }
        .faq-desc {
          margin-top: 14px;
          max-width: 320px;
          font-size: 15px;
        }
        .faq-head .btn {
          margin-top: 26px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          border: 1.5px solid var(--color-line);
          border-radius: 16px;
          overflow: hidden;
        }
        .faq-item.is-open {
          border-color: var(--color-primary);
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text);
        }
        .faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }
        .faq-answer {
          overflow: hidden;
        }
        .faq-answer p {
          padding: 0 20px 18px;
          font-size: 14.5px;
        }

        @media (max-width: 800px) {
          .faq-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
