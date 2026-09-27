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
          <div className="faq-pixel-tag">
            <span className="pixel-tag-icon">[?]</span>
            <span>PERTANYAAN UMUM</span>
          </div>

          <h2 className="faq-title">Masih Ada Pertanyaan?</h2>
          <p className="faq-desc">
            Jika masih ada yang ingin ditanyakan, jangan ragu untuk menghubungi kami melalui admin WhatsApp.
          </p>

          <a href="#kontak" className="faq-pixel-btn">
            <span>Tanya Admin</span>
            <span className="pixel-arrow">→</span>
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-pixel-toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        .faq {
          position: relative;
          padding: 90px 0 110px;
        }

        .faq-inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 52px;
          align-items: start;
        }

        .faq-pixel-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1.8px solid #1c1a17;
          background: #ffea79;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          margin-bottom: 18px;
        }

        .pixel-tag-icon {
          font-weight: 800;
          color: #b45309;
        }

        .faq-title {
          font-size: clamp(28px, 3.4vw, 42px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #1c1a17;
        }

        .faq-desc {
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.6;
          color: #555049;
          max-width: 360px;
        }

        .faq-pixel-btn {
          margin-top: 26px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 26px;
          border-radius: 9999px;
          background: var(--color-yellow);
          color: #1c1a17;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14.5px;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .faq-pixel-btn:hover {
          transform: translate(-1.5px, -1.5px);
          box-shadow: 4.5px 5px 0 #1c1a17;
          background: #ffbe26;
        }

        .pixel-arrow {
          font-weight: 800;
          font-size: 16px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 20px;
          box-shadow: 3px 3.5px 0 #1c1a17;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0 #1c1a17;
        }

        .faq-item.is-open {
          background: #fdfbf7;
          border-color: #1c1a17;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          cursor: pointer;
        }

        .faq-question-text {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 700;
          color: #1c1a17;
          line-height: 1.35;
        }

        .faq-pixel-toggle {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #1c1a17;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 17px;
          border: 1.5px solid #1c1a17;
          box-shadow: 2px 2px 0 #1c1a17;
          flex-shrink: 0;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .faq-item.is-open .faq-pixel-toggle {
          background: var(--color-primary);
          color: #ffffff;
        }

        .faq-answer-wrap {
          overflow: hidden;
        }

        .faq-answer-inner {
          padding: 0 22px 20px;
          border-top: 1.5px dashed rgba(28, 26, 23, 0.2);
          margin-top: -2px;
          padding-top: 14px;
        }

        .faq-answer-inner p {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.65;
          color: #555049;
        }

        @media (max-width: 860px) {
          .faq {
            padding: 60px 0 80px;
          }
          .faq-inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  )
}
