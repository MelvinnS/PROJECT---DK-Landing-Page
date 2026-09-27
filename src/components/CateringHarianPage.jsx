import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  harianProofStats,
  harianMenuSamples,
  harianSegments,
  harianSteps,
  harianFaqs,
} from '../data/harian'
import Navbar from './Navbar'

export default function CateringHarianPage({ onBack }) {
  const [openFaq, setOpenFaq] = useState(0)

  const handleWhatsappConsult = (segmentName = '') => {
    const segmentText = segmentName ? ` untuk *${segmentName}*` : ''
    const message = [
      `Halo Dapoer Kuliner! 👋`,
      ``,
      `Saya tertarik untuk *Konsultasi Langganan Harian (Paket A)*${segmentText}.`,
      ``,
      `Boleh minta informasi detail paket, contoh rotasi menu minggu ini, serta ketersediaan slot pengantaran untuk area saya?`,
      ``,
      `Terima kasih! 🙏`,
    ].join('\n')

    const url = `https://wa.me/628991004545?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="harian-page">
      <Navbar />

      {/* Grid Pattern Background with Gradient Fade */}
      <div className="harian-grid-pattern" aria-hidden="true" />

      <div className="container harian-container">
        {/* Back Button */}
        <motion.button
          className="harian-back-btn"
          onClick={onBack}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Kembali ke Beranda
        </motion.button>

        {/* ─── 1. HERO SECTION ────────────────────────────────────────── */}
        <header className="harian-hero">
          <motion.div
            className="harian-hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span>🍲</span> PAKET A — CATERING HARIAN
          </motion.div>

          <motion.h1
            className="harian-hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Makan Enak & Bergizi Tiap Hari,
            <br />
            <span className="harian-title-accent">Tanpa Repot Memasak</span>
          </motion.h1>

          <motion.p
            className="harian-hero-desc"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
          >
            Langganan catering harian terpercaya dengan <strong>10–15 rotasi menu rumahan berganti tiap hari</strong>.
            Dimasak segar dari bahan berkualitas, diantar hangat tepat sebelum waktu santap Anda.
          </motion.p>

          <motion.div
            className="harian-hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            <button
              className="harian-btn-primary"
              onClick={() => handleWhatsappConsult()}
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.13 23.44L2.09 29.91L8.76 27.91C10.87 29.21 13.35 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2Z" fill="#25D366" />
                <path d="M23.63 20.08C23.21 19.87 21.14 18.85 20.76 18.71C20.37 18.57 20.09 18.5 19.81 18.92C19.53 19.34 18.73 20.28 18.49 20.56C18.24 20.84 18 20.88 17.58 20.67C17.16 20.46 15.82 20.02 14.22 18.6C12.98 17.5 12.14 16.14 11.9 15.72C11.66 15.3 11.87 15.08 12.08 14.87C12.27 14.68 12.5 14.38 12.71 14.14C12.92 13.9 12.99 13.73 13.13 13.45C13.27 13.17 13.2 12.93 13.1 12.72C13 12.51 12.16 10.45 11.81 9.61C11.47 8.79 11.12 8.9 10.87 8.89C10.63 8.88 10.35 8.88 10.07 8.88C9.79 8.88 9.34 8.99 8.96 9.41C8.58 9.83 7.5 10.84 7.5 12.9C7.5 14.96 9 16.95 9.21 17.23C9.42 17.51 12.16 21.72 16.34 23.53C17.33 23.96 18.11 24.22 18.71 24.41C19.7 24.72 20.6 24.68 21.31 24.57C22.1 24.45 23.75 23.57 24.09 22.59C24.44 21.61 24.44 20.77 24.33 20.56C24.23 20.35 24.05 20.29 23.63 20.08Z" fill="#fff" />
              </svg>
              <span>Konsultasi Langganan Harian</span>
            </button>
            <a href="#segmen" className="harian-btn-secondary">
              Pilihan Paket Segmen ↓
            </a>
          </motion.div>

          {/* 3 Proof Stats */}
          <div className="harian-stats-grid">
            {harianProofStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="harian-stat-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-body">
                  <span className="stat-number">{stat.value}</span>
                  <strong className="stat-label">{stat.label}</strong>
                  <p className="stat-desc">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </header>

        {/* ─── 2. GALERI CONTOH MENU ──────────────────────────────────── */}
        <section className="harian-gallery-section">
          <div className="harian-section-head">
            <span className="harian-subbadge">🍱 VARIASI MASAKAN RUMAHAN</span>
            <h2 className="harian-section-title">Contoh Variasi Menu Harian</h2>
            {/* Disclaimer Label sesuai instruksi user */}
            <div className="harian-disclaimer-pill">
              <span className="disclaimer-icon">ℹ️</span>
              <span>Menu berganti tiap hari — ini contoh, bukan pilihan tetap.</span>
            </div>
          </div>

          <div className="harian-gallery-grid">
            {/* PLACEHOLDER: Foto makanan dihasilkan AI sebagai mockup visual sementara, wajib diganti dengan foto dokumentasi asli Dapoer Kuliner */}
            {harianMenuSamples.map((sample, idx) => (
              <motion.article
                key={sample.id}
                className="gallery-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <div className="gallery-img-wrap">
                  <img src={sample.image} alt={sample.title} loading="lazy" />
                  <span className="gallery-tag">{sample.tag}</span>
                </div>
                <div className="gallery-body">
                  <h3 className="gallery-title">{sample.title}</h3>
                  <p className="gallery-desc">{sample.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ─── 3. TIGA KARTU SEGMEN ───────────────────────────────────── */}
        <section id="segmen" className="harian-segments-section">
          <div className="harian-section-head">
            <span className="harian-subbadge">🎯 PILIHAN SEGMEN LANGGANAN</span>
            <h2 className="harian-section-title">Pilih Paket Sesuai Kebutuhan Anda</h2>
            <p className="harian-section-sub">
              Disesuaikan untuk santap bersama di rumah, makan siang kantor, hingga kebutuhan makan institusi skala besar.
            </p>
          </div>

          <div className="harian-segments-grid">
            {harianSegments.map((segment, idx) => (
              <motion.article
                key={segment.id}
                className="segment-card"
                style={{ '--seg-accent': segment.accentColor, background: segment.bgColor }}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.09 }}
              >
                {/* Top strip */}
                <div className="segment-strip" style={{ background: segment.accentColor }} />

                <div className="segment-body">
                  <div className="segment-header">
                    <span className="segment-badge" style={{ background: segment.badgeColor }}>
                      {segment.badge}
                    </span>
                    <h3 className="segment-name" style={{ color: segment.accentColor }}>
                      {segment.name}
                    </h3>
                    <p className="segment-tagline">{segment.tagline}</p>
                  </div>

                  {/* 3 Core Specs */}
                  <div className="segment-specs">
                    <div className="spec-row">
                      <span className="spec-icon">🍲</span>
                      <div>
                        <strong className="spec-title">Porsi:</strong>
                        <span className="spec-val">{segment.porsi}</span>
                      </div>
                    </div>
                    <div className="spec-row">
                      <span className="spec-icon">⏰</span>
                      <div>
                        <strong className="spec-title">Jadwal:</strong>
                        <span className="spec-val">{segment.jadwal}</span>
                      </div>
                    </div>
                    <div className="spec-row">
                      <span className="spec-icon">💳</span>
                      <div>
                        <strong className="spec-title">Sistem Bayar:</strong>
                        <span className="spec-val">{segment.sistemBayar}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="segment-features">
                    <strong className="features-head">Keuntungan Paket:</strong>
                    <ul className="features-list">
                      {segment.features.map((feat, i) => (
                        <li key={i}>
                          <span className="feat-check" style={{ color: segment.accentColor }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="segment-action">
                  <button
                    className="segment-consult-btn"
                    onClick={() => handleWhatsappConsult(segment.name)}
                    style={{ background: segment.accentColor }}
                  >
                    <span>Konsultasi Langganan Harian</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ─── 4. CARA KERJA 5 LANGKAH ────────────────────────────────── */}
        {/* <section className="harian-steps-section">
          <div className="harian-section-head">
            <span className="harian-subbadge">⚡ PROSES MUDAH & CEPAT</span>
            <h2 className="harian-section-title">Cara Kerja Berlangganan</h2>
            <p className="harian-section-sub">
              5 langkah sederhana untuk menikmati masakan lezat setiap hari di rumah atau kantor Anda.
            </p>
          </div>

          <div className="harian-steps-grid">
            {harianSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="step-top">
                  <div className="step-number-badge">{step.number}</div>
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* ─── 5. FAQ SECTION ─────────────────────────────────────────── */}
        {/* <section className="harian-faq-section">
          <div className="harian-faq-inner">
            <div className="harian-faq-head">
              <span className="harian-subbadge">❓ PERTANYAAN UMUM</span>
              <h2 className="harian-section-title">Pertanyaan Seputar Langganan</h2>
              <p className="harian-section-sub">
                Hal yang sering ditanyakan oleh pelanggan kami sebelum memulai langganan catering harian.
              </p>
              <button
                className="harian-faq-cta-btn"
                onClick={() => handleWhatsappConsult()}
              >
                <span>Tanya Admin Langsung</span>
                <span>→</span>
              </button>
            </div>

            <div className="harian-faq-list">
              {harianFaqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <motion.div
                    key={faq.q}
                    className={`harian-faq-item ${isOpen ? 'is-open' : ''}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <button
                      className="harian-faq-question"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="harian-faq-toggle" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          className="harian-faq-answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="harian-faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section> */}

        {/* ─── 6. FINAL CTA SECTION ───────────────────────────────────── */}
        <motion.section
          className="harian-cta-box"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="cta-box-text">
            <span className="cta-tag">✨ MULAI HARI INI</span>
            <h3>Siap Makan Enak Tiap Hari Tanpa Pusing?</h3>
            <p>
              Konsultasikan jadwal, porsi, dan lokasi pengantaran Anda. Admin Dapoer Kuliner siap membantu menyiapkan menu terbaik untuk Anda.
            </p>
          </div>
          <button
            className="cta-wa-btn"
            onClick={() => handleWhatsappConsult()}
          >
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.13 23.44L2.09 29.91L8.76 27.91C10.87 29.21 13.35 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2Z" fill="#25D366" />
              <path d="M23.63 20.08C23.21 19.87 21.14 18.85 20.76 18.71C20.37 18.57 20.09 18.5 19.81 18.92C19.53 19.34 18.73 20.28 18.49 20.56C18.24 20.84 18 20.88 17.58 20.67C17.16 20.46 15.82 20.02 14.22 18.6C12.98 17.5 12.14 16.14 11.9 15.72C11.66 15.3 11.87 15.08 12.08 14.87C12.27 14.68 12.5 14.38 12.71 14.14C12.92 13.9 12.99 13.73 13.13 13.45C13.27 13.17 13.2 12.93 13.1 12.72C13 12.51 12.16 10.45 11.81 9.61C11.47 8.79 11.12 8.9 10.87 8.89C10.63 8.88 10.35 8.88 10.07 8.88C9.79 8.88 9.34 8.99 8.96 9.41C8.58 9.83 7.5 10.84 7.5 12.9C7.5 14.96 9 16.95 9.21 17.23C9.42 17.51 12.16 21.72 16.34 23.53C17.33 23.96 18.11 24.22 18.71 24.41C19.7 24.72 20.6 24.68 21.31 24.57C22.1 24.45 23.75 23.57 24.09 22.59C24.44 21.61 24.44 20.77 24.33 20.56C24.23 20.35 24.05 20.29 23.63 20.08Z" fill="#fff" />
            </svg>
            <span>Konsultasi Langganan Harian</span>
          </button>
        </motion.section>
      </div>

      <style>{`
        .harian-page {
          min-height: 100vh;
          background: var(--color-bg);
          position: relative;
          overflow-x: hidden;
          padding-bottom: 90px;
        }

        .harian-grid-pattern {
          position: fixed;
          inset: 0;
          background-size: 28px 28px;
          background-image:
            linear-gradient(to right, rgba(28, 26, 23, 0.065) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28, 26, 23, 0.065) 1px, transparent 1px);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 80%);
          pointer-events: none;
          z-index: 0;
        }

        .harian-container {
          position: relative;
          z-index: 1;
          padding-top: 28px;
        }

        .harian-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          color: #1c1a17;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          margin-bottom: 36px;
        }

        .harian-back-btn:hover {
          transform: translateX(-3px);
          box-shadow: 3.5px 4px 0 #1c1a17;
        }

        /* ─── Hero Styles ────────────────────────── */
        .harian-hero {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 60px;
        }

        .harian-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: var(--color-primary);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          margin-bottom: 18px;
        }

        .harian-hero-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5.8vw, 64px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #1c1a17;
        }

        .harian-title-accent {
          color: var(--color-primary);
        }

        .harian-hero-desc {
          margin: 18px auto 0;
          font-family: var(--font-body);
          font-size: clamp(15px, 2vw, 17px);
          color: #555049;
          line-height: 1.6;
          max-width: 680px;
        }

        .harian-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .harian-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 9999px;
          background: #25D366;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .harian-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 4.5px 5px 0 #1c1a17;
        }

        .harian-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 13px 24px;
          border-radius: 9999px;
          background: #ffffff;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          color: #1c1a17;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14.5px;
          text-decoration: none;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .harian-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 4.5px 5px 0 #1c1a17;
          background: #faf6ee;
        }

        /* ─── 3 Stats Cards ──────────────────────── */
        .harian-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
          text-align: left;
        }

        .harian-stat-card {
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 20px;
          box-shadow: 3.5px 4px 0 #1c1a17;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: transform 0.2s ease;
        }

        .harian-stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-icon {
          font-size: 32px;
          line-height: 1;
          flex-shrink: 0;
        }

        .stat-body {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1.05;
        }

        .stat-label {
          font-family: var(--font-body);
          font-size: 14px;
          color: #1c1a17;
          margin-top: 4px;
        }

        .stat-desc {
          font-size: 12.5px;
          color: #6b6560;
          line-height: 1.4;
          margin-top: 4px;
        }

        /* ─── Section Head Shared ────────────────── */
        .harian-section-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 38px;
        }

        .harian-subbadge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .harian-section-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #1c1a17;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .harian-section-sub {
          margin-top: 12px;
          font-size: 15px;
          color: #555049;
          line-height: 1.55;
        }

        /* Disclaimer Pill */
        .harian-disclaimer-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: #fff9e6;
          border: 1.8px solid #1c1a17;
          box-shadow: 2px 2.5px 0 #1c1a17;
          font-family: var(--font-mono);
          font-size: 12.5px;
          font-weight: 700;
          color: #7a5f00;
          margin-top: 16px;
        }

        /* ─── Gallery Section ────────────────────── */
        .harian-gallery-section {
          margin-bottom: 74px;
        }

        .harian-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .gallery-card {
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 22px;
          box-shadow: 3.5px 4.5px 0 #1c1a17;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 5px 6.5px 0 #1c1a17;
        }

        .gallery-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-bottom: 2px solid #1c1a17;
          overflow: hidden;
          background: #f4efe6;
        }

        .gallery-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .gallery-card:hover .gallery-img-wrap img {
          transform: scale(1.05);
        }

        .gallery-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(28, 26, 23, 0.85);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 4px 11px;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .gallery-body {
          padding: 18px 20px 22px;
          flex: 1;
        }

        .gallery-title {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 800;
          color: #1c1a17;
          margin-bottom: 6px;
        }

        .gallery-desc {
          font-size: 13.5px;
          color: #555049;
          line-height: 1.5;
        }

        /* ─── 3 Segments Section ─────────────────── */
        .harian-segments-section {
          margin-bottom: 80px;
        }

        .harian-segments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .segment-card {
          border-radius: 26px;
          border: 2px solid #1c1a17;
          box-shadow: 4px 5.5px 0 #1c1a17;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .segment-card:hover {
          transform: translateY(-5px);
          box-shadow: 6px 8px 0 #1c1a17;
        }

        .segment-strip {
          height: 7px;
          width: 100%;
        }

        .segment-body {
          padding: 24px 22px 16px;
          flex: 1;
        }

        .segment-header {
          margin-bottom: 18px;
        }

        .segment-badge {
          display: inline-block;
          padding: 4px 13px;
          border-radius: 9999px;
          border: 1.5px solid #1c1a17;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 10.5px;
          letter-spacing: 0.07em;
          color: #ffffff;
          box-shadow: 2px 2px 0 #1c1a17;
          margin-bottom: 10px;
        }

        .segment-name {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.015em;
        }

        .segment-tagline {
          font-size: 13.5px;
          color: #555049;
          margin-top: 6px;
          line-height: 1.45;
        }

        .segment-specs {
          background: #ffffff;
          border: 1.8px solid #1c1a17;
          border-radius: 16px;
          padding: 14px 16px;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 2px 2.5px 0 rgba(28,26,23,0.15);
        }

        .spec-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
        }

        .spec-icon {
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .spec-row strong {
          color: #1c1a17;
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .spec-val {
          color: #44403a;
          line-height: 1.35;
        }

        .segment-features {
          padding-top: 4px;
        }

        .features-head {
          display: block;
          font-size: 13px;
          font-weight: 800;
          color: #1c1a17;
          margin-bottom: 8px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          color: #4a453d;
          line-height: 1.4;
        }

        .feat-check {
          font-weight: 800;
          font-size: 14px;
          flex-shrink: 0;
        }

        .segment-action {
          padding: 16px 22px 22px;
        }

        .segment-consult-btn {
          width: 100%;
          padding: 12px 18px;
          border-radius: 12px;
          border: 2px solid #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 3px 3.5px 0 #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
        }

        .segment-consult-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0 #1c1a17;
          filter: brightness(1.06);
        }

        /* ─── 4. Cara Kerja 5 Langkah ────────────── */
        .harian-steps-section {
          margin-bottom: 80px;
        }

        .harian-steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .step-card {
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 20px;
          box-shadow: 3.5px 4px 0 #1c1a17;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
        }

        .step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .step-number-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-yellow);
          border: 1.8px solid #1c1a17;
          box-shadow: 1.5px 2px 0 #1c1a17;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 16px;
          color: #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-icon {
          font-size: 24px;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 800;
          color: #1c1a17;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .step-desc {
          font-size: 12.5px;
          color: #555049;
          line-height: 1.45;
        }

        /* ─── 5. FAQ Section ─────────────────────── */
        .harian-faq-section {
          margin-bottom: 80px;
        }

        .harian-faq-inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: start;
        }

        .harian-faq-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .harian-faq-cta-btn {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 9999px;
          background: var(--color-yellow);
          color: #1c1a17;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .harian-faq-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0 #1c1a17;
        }

        .harian-faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .harian-faq-item {
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 18px;
          box-shadow: 3px 3.5px 0 #1c1a17;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .harian-faq-item:hover {
          transform: translateY(-2px);
        }

        .harian-faq-item.is-open {
          background: #fdfbf7;
        }

        .harian-faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          text-align: left;
          cursor: pointer;
        }

        .faq-q-text {
          font-family: var(--font-body);
          font-size: 15.5px;
          font-weight: 700;
          color: #1c1a17;
          line-height: 1.35;
        }

        .harian-faq-toggle {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #1c1a17;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 16px;
          border: 1.5px solid #1c1a17;
          box-shadow: 1.5px 2px 0 #1c1a17;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .harian-faq-item.is-open .harian-faq-toggle {
          background: var(--color-primary);
        }

        .harian-faq-answer-wrap {
          overflow: hidden;
        }

        .harian-faq-answer {
          padding: 0 20px 18px;
          border-top: 1.5px dashed rgba(28, 26, 23, 0.2);
          margin-top: -2px;
          padding-top: 12px;
        }

        .harian-faq-answer p {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.6;
          color: #555049;
          margin: 0;
        }

        /* ─── 6. Final CTA Box ───────────────────── */
        .harian-cta-box {
          background: #fffbe8;
          border: 2px solid #1c1a17;
          border-radius: 24px;
          box-shadow: 4px 5px 0 #1c1a17;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          flex-wrap: wrap;
        }

        .cta-tag {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .cta-box-text h3 {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          color: #1c1a17;
          margin-bottom: 6px;
        }

        .cta-box-text p {
          font-size: 15px;
          color: #555049;
          max-width: 540px;
          line-height: 1.55;
          margin: 0;
        }

        .cta-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          border-radius: 14px;
          background: #25D366;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 15.5px;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .cta-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4.5px 5px 0 #1c1a17;
        }

        /* ─── Responsive Breakpoints ─────────────── */
        @media (max-width: 1024px) {
          .harian-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .harian-segments-grid {
            grid-template-columns: 1fr;
          }
          .harian-steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 860px) {
          .harian-stats-grid {
            grid-template-columns: 1fr;
          }
          .harian-faq-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 680px) {
          .harian-gallery-grid {
            grid-template-columns: 1fr;
          }
          .harian-steps-grid {
            grid-template-columns: 1fr;
          }
          .harian-cta-box {
            padding: 24px;
          }
          .cta-wa-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}
