import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { prasmananCategories, prasmananInfo } from '../data/prasmanan'
import Navbar from './Navbar'

// ─── Modal Detail Menu Olahan ────────────────────────────────────────────────
function PrasmananDetailModal({ item, onClose }) {
  if (!item) return null

  const handleConsult = () => {
    const text = `Halo Dapoer Kuliner! 👋\n\nSaya sedang melihat katalog prasmanan dan tertarik dengan menu *${item.name}*. Boleh konsultasi pilihan menu dan penawaran paket prasmanannya? Terima kasih! 🙏`
    const url = `https://wa.me/628991004545?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-card"
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header" style={{ background: item.accentColor }}>
            <div className="modal-header-text">
              <span className="modal-badge">{item.badge}</span>
              <div className="modal-title-wrap">
                <span className="modal-icon">{item.icon}</span>
                <h2 className="modal-pkg-name">{item.name}</h2>
              </div>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Tutup">
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <p className="modal-desc">{item.desc}</p>

            <div className="modal-menu-section">
              <h3 className="modal-section-title">
                <span>📋</span>
                Daftar Pilihan Menu:
              </h3>
              <ul className="modal-menu-list">
                {item.menu.map((menuItem, idx) => (
                  <li key={idx} className="modal-menu-item">
                    <span className="menu-num" style={{ background: item.accentColor }}>
                      {idx + 1}
                    </span>
                    <span>{menuItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-info-note">
              <span className="info-icon">💡</span>
              <p>
                Anda bebas memilih dan mengombinasikan varian menu ini ke dalam paket prasmanan acara Anda.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="modal-close-text" onClick={onClose}>
              Tutup
            </button>
            <button className="modal-consult-btn" onClick={handleConsult} style={{ background: item.accentColor }}>
              <span>💬</span> Konsultasi Menu Ini
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Card Olahan ─────────────────────────────────────────────────────────────
function OlahanCard({ item, index, onOpenDetail }) {
  return (
    <motion.article
      className="pras-card"
      style={{ '--card-accent': item.accentColor, background: item.bgColor }}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top accent strip */}
      <div className="pras-card-strip" style={{ background: item.accentColor }} />

      <div className="pras-card-body">
        {/* Header */}
        <div className="pras-card-header">
          <div className="pras-icon-wrap" style={{ background: item.accentColor }}>
            <span>{item.icon}</span>
          </div>
          <span className="pras-badge" style={{ color: item.accentColor, borderColor: item.accentColor }}>
            {item.badge}
          </span>
        </div>

        <h3 className="pras-card-name" style={{ color: item.accentColor }}>
          {item.name}
        </h3>

        <p className="pras-card-desc">{item.desc}</p>

        {/* Menu preview (first 4 items) */}
        <ul className="pras-menu-preview">
          {item.menu.slice(0, 4).map((m, i) => (
            <li key={i}>
              <span className="pras-bullet" style={{ background: item.accentColor }} />
              <span>{m}</span>
            </li>
          ))}
          {item.menu.length > 4 && (
            <li className="pras-menu-more">+{item.menu.length - 4} pilihan menu lainnya...</li>
          )}
        </ul>
      </div>

      {/* Action: Only Detail Popup */}
      <div className="pras-card-actions">
        <button
          className="pras-btn-detail"
          onClick={() => onOpenDetail(item)}
          style={{ '--btn-accent': item.accentColor, borderColor: item.accentColor, color: item.accentColor }}
        >
          <span>Detail Menu</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </motion.article>
  )
}

// ─── Main Component: PrasmananPage ───────────────────────────────────────────
export default function PrasmananPage({ onBack }) {
  const [detailItem, setDetailItem] = useState(null)

  const handleGeneralConsult = () => {
    const text = 'Halo Dapoer Kuliner! 👋\n\nSaya ingin konsultasi mengenai paket prasmanan untuk acara saya. Boleh minta informasi paket dan pricelist lengkapnya? Terima kasih! 🙏'
    const url = `https://wa.me/628991004545?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <div className="pras-page">
      <Navbar />

      {/* Grid Pattern Background */}
      <div className="pras-grid-pattern" aria-hidden="true" />

      <div className="container pras-container">
        {/* Back Button */}
        <motion.button
          className="pras-back-btn"
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

        {/* Header */}
        <div className="pras-page-header">
          <motion.div
            className="pras-page-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span>🍽️</span> KATALOG MENU PRASMANAN
          </motion.div>

          <motion.h1
            className="pras-page-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Pilihan Menu
            <br />
            <span className="pras-title-sub">Prasmanan Dapoer Kuliner</span>
          </motion.h1>

          <motion.p
            className="pras-page-subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
          >
            Katalog lengkap 8 kelompok olahan lezat untuk acara pernikahan, hajatan keluarga, maupun gathering kantor Anda.
          </motion.p>
        </div>

        {/* Highlight Banner / Info Notes */}
        {/* <motion.div
          className="pras-info-banner"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="info-banner-item">
            <span className="banner-icon">👥</span>
            <div>
              <strong>Minimal Order:</strong>
              <p>200 pax per acara</p>
            </div>
          </div>
          <div className="info-banner-divider" />
          <div className="info-banner-item">
            <span className="banner-icon">📍</span>
            <div>
              <strong>Venue Fleksibel:</strong>
              <p>Rumah, gedung, atau outdoor venue</p>
            </div>
          </div>
          <div className="info-banner-divider" /> */}
          {/* <div className="info-banner-item">
            <span className="banner-icon">🎁</span>
            <div>
              <strong>Bonus Menu Gubug:</strong>
              <p>Order 500+ pax free gubug 100 pax</p>
            </div>
          </div> */}
        {/* </motion.div> */}

        {/* 8 Olahan Grid */}
        <div className="pras-grid">
          {prasmananCategories.map((item, index) => (
            <OlahanCard
              key={item.id}
              item={item}
              index={index}
              onOpenDetail={setDetailItem}
            />
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <motion.div
          className="pras-cta-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="pras-cta-text">
            <h3>Ingin Menyusun Kombinasi Menu Prasmanan?</h3>
            <p>
              Tim Dapoer Kuliner siap membantu merekomendasikan susunan menu terbaik sesuai tema acara dan anggaran Anda.
            </p>
          </div>
          <button className="pras-cta-btn" onClick={handleGeneralConsult}>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
              <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.13 23.44L2.09 29.91L8.76 27.91C10.87 29.21 13.35 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2Z" fill="#25D366" />
              <path d="M23.63 20.08C23.21 19.87 21.14 18.85 20.76 18.71C20.37 18.57 20.09 18.5 19.81 18.92C19.53 19.34 18.73 20.28 18.49 20.56C18.24 20.84 18 20.88 17.58 20.67C17.16 20.46 15.82 20.02 14.22 18.6C12.98 17.5 12.14 16.14 11.9 15.72C11.66 15.3 11.87 15.08 12.08 14.87C12.27 14.68 12.5 14.38 12.71 14.14C12.92 13.9 12.99 13.73 13.13 13.45C13.27 13.17 13.2 12.93 13.1 12.72C13 12.51 12.16 10.45 11.81 9.61C11.47 8.79 11.12 8.9 10.87 8.89C10.63 8.88 10.35 8.88 10.07 8.88C9.79 8.88 9.34 8.99 8.96 9.41C8.58 9.83 7.5 10.84 7.5 12.9C7.5 14.96 9 16.95 9.21 17.23C9.42 17.51 12.16 21.72 16.34 23.53C17.33 23.96 18.11 24.22 18.71 24.41C19.7 24.72 20.6 24.68 21.31 24.57C22.1 24.45 23.75 23.57 24.09 22.59C24.44 21.61 24.44 20.77 24.33 20.56C24.23 20.35 24.05 20.29 23.63 20.08Z" fill="#fff" />
            </svg>
            <span>Hubungi Kami Sekarang</span>
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {detailItem && (
        <PrasmananDetailModal item={detailItem} onClose={() => setDetailItem(null)} />
      )}

      <style>{`
        .pras-page {
          min-height: 100vh;
          background: var(--color-bg);
          position: relative;
          overflow-x: hidden;
          padding-bottom: 90px;
        }

        .pras-grid-pattern {
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

        .pras-container {
          position: relative;
          z-index: 1;
          padding-top: 28px;
        }

        .pras-back-btn {
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

        .pras-back-btn:hover {
          transform: translateX(-3px);
          box-shadow: 3.5px 4px 0 #1c1a17;
        }

        .pras-page-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 36px;
        }

        .pras-page-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: #8ec637;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          margin-bottom: 18px;
        }

        .pras-page-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 6.5vw, 68px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #1c1a17;
        }

        .pras-title-sub {
          color: #8ec637;
          font-size: clamp(26px, 4.2vw, 44px);
        }

        .pras-page-subtitle {
          margin-top: 16px;
          font-family: var(--font-mono);
          font-size: 15px;
          color: #555049;
          line-height: 1.55;
        }

        /* ─── Info Banner ────────────────────────── */
        .pras-info-banner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #ffffff;
          border: 2px solid #1c1a17;
          border-radius: 20px;
          box-shadow: 3.5px 4px 0 #1c1a17;
          padding: 18px 28px;
          margin-bottom: 46px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .info-banner-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .banner-icon {
          font-size: 26px;
        }

        .info-banner-item strong {
          display: block;
          font-size: 14px;
          color: #1c1a17;
        }

        .info-banner-item p {
          font-size: 13px;
          color: #6b6560;
          margin: 0;
        }

        .info-banner-divider {
          width: 1px;
          height: 38px;
          background: #e5e0d8;
        }

        /* ─── Grid 8 Olahan ──────────────────────── */
        .pras-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-bottom: 54px;
        }

        .pras-card {
          border-radius: 24px;
          border: 2px solid #1c1a17;
          box-shadow: 3.5px 4.5px 0 #1c1a17;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .pras-card:hover {
          transform: translateY(-5px);
          box-shadow: 5px 7px 0 #1c1a17;
        }

        .pras-card-strip {
          height: 6px;
          width: 100%;
        }

        .pras-card-body {
          padding: 22px 20px 14px;
          flex: 1;
        }

        .pras-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .pras-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1.5px solid #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 1.5px 2px 0 #1c1a17;
        }

        .pras-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .pras-card-name {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.015em;
          margin-bottom: 8px;
        }

        .pras-card-desc {
          font-size: 13px;
          color: #555049;
          line-height: 1.45;
          margin-bottom: 14px;
        }

        .pras-menu-preview {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pras-menu-preview li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #3b3830;
          font-weight: 500;
          line-height: 1.3;
        }

        .pras-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pras-menu-more {
          color: #7a756c !important;
          font-style: italic;
          font-size: 12px !important;
          margin-top: 2px;
        }

        .pras-card-actions {
          padding: 14px 20px 20px;
        }

        .pras-btn-detail {
          width: 100%;
          padding: 11px 16px;
          border-radius: 12px;
          background: #ffffff;
          border: 2px solid;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 13.5px;
          cursor: pointer;
          box-shadow: 2px 2.5px 0 #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.18s ease, color 0.18s ease, transform 0.15s ease;
        }

        .pras-btn-detail:hover {
          background: var(--btn-accent);
          color: #ffffff !important;
          border-color: var(--btn-accent) !important;
          transform: translateY(-2px);
        }

        .btn-arrow {
          font-weight: 800;
          font-size: 15px;
        }

        /* ─── Bottom CTA Box ─────────────────────── */
        .pras-cta-box {
          background: #fffbe8;
          border: 2px solid #1c1a17;
          border-radius: 24px;
          box-shadow: 4px 5px 0 #1c1a17;
          padding: 32px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .pras-cta-text h3 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          color: #1c1a17;
          margin-bottom: 6px;
        }

        .pras-cta-text p {
          font-size: 14.5px;
          color: #555049;
          max-width: 520px;
          line-height: 1.5;
        }

        .pras-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 14px;
          background: #25D366;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .pras-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4.5px 5px 0 #1c1a17;
        }

        /* ─── Modal ──────────────────────────────── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28, 26, 23, 0.55);
          backdrop-filter: blur(4px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-card {
          background: #ffffff;
          border-radius: 26px;
          border: 2px solid #1c1a17;
          box-shadow: 5px 7px 0 #1c1a17;
          width: 100%;
          max-width: 500px;
          max-height: 88vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 22px 22px 20px;
          border-radius: 24px 24px 0 0;
          color: #ffffff;
        }

        .modal-header-text {
          flex: 1;
        }

        .modal-badge {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.25);
          border: 1.5px solid rgba(255,255,255,0.55);
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 10px;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .modal-icon {
          font-size: 28px;
        }

        .modal-pkg-name {
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .modal-close-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 1.5px solid rgba(255,255,255,0.45);
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 12px;
          transition: background 0.15s ease;
        }

        .modal-close-btn:hover {
          background: rgba(255,255,255,0.35);
        }

        .modal-body {
          padding: 22px 24px;
          flex: 1;
        }

        .modal-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #555049;
          margin-bottom: 20px;
        }

        .modal-menu-section {
          background: #faf7f2;
          border: 1.5px solid #e8e4dc;
          border-radius: 16px;
          padding: 16px 18px;
          margin-bottom: 16px;
        }

        .modal-section-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: #1c1a17;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .modal-menu-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #3b3830;
          font-weight: 500;
          line-height: 1.4;
        }

        .menu-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .modal-info-note {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          font-size: 13px;
          color: #1e40af;
          line-height: 1.4;
        }

        .info-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .modal-info-note p {
          margin: 0;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px 22px;
          border-top: 1.5px solid #eeebe5;
          gap: 12px;
        }

        .modal-close-text {
          background: none;
          border: none;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          color: #6b6560;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 9999px;
          transition: color 0.15s ease, background 0.15s ease;
        }

        .modal-close-text:hover {
          color: #1c1a17;
          background: #f4f2ee;
        }

        .modal-consult-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .modal-consult-btn:hover {
          transform: translateY(-2px);
        }

        /* ─── Responsiveness ─────────────────────── */
        @media (max-width: 1100px) {
          .pras-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pras-info-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .info-banner-divider {
            display: none;
          }
          .pras-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .pras-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .pras-grid {
            grid-template-columns: 1fr;
          }
          .modal-card {
            max-height: 92vh;
          }
        }
      `}</style>
    </div>
  )
}
