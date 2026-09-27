import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cateringBoxPackages, cateringBoxAddons } from '../data/cateringBox'
import Navbar from './Navbar'

// ─── Format currency ─────────────────────────────────────────────────────────
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID')
}

// ─── Package Detail Modal ─────────────────────────────────────────────────────
function DetailModal({ pkg, onClose }) {
  if (!pkg) return null
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
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header" style={{ background: pkg.accentColor }}>
            <div className="modal-header-text">
              {pkg.badge && (
                <span className="modal-badge">{pkg.badge}</span>
              )}
              <h2 className="modal-pkg-name">{pkg.name}</h2>
              <p className="modal-pkg-price">{pkg.priceLabel} / kotak</p>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Tutup">
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <p className="modal-desc">{pkg.desc}</p>

            <div className="modal-menu-section">
              <h3 className="modal-section-title">
                <span className="modal-section-icon">🍱</span>
                Menu yang Didapat
              </h3>
              <ul className="modal-menu-list">
                {pkg.menu.map((item, idx) => (
                  <li key={idx} className="modal-menu-item">
                    <span className="menu-dot" style={{ background: pkg.accentColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-addons">
              <div className="modal-addon-box">
                <span className="addon-icon">✨</span>
                <div>
                  <p className="addon-label">{cateringBoxAddons.label}</p>
                  <p className="addon-items">{cateringBoxAddons.items.join(' / ')}</p>
                </div>
              </div>
            </div>

            <div className="modal-min-order">
              <span className="modal-min-icon">📦</span>
              Minimal pemesanan <strong>20 kotak</strong>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button className="modal-close-text" onClick={onClose}>
              Tutup
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Order Modal ──────────────────────────────────────────────────────────────
const MIN_QTY = 20

function OrderModal({ pkg, onClose }) {
  const [qty, setQty] = useState(MIN_QTY)
  const [withAddon, setWithAddon] = useState(false)
  const [selectedAddon, setSelectedAddon] = useState(cateringBoxAddons.items[0])

  if (!pkg) return null

  const baseTotal = qty * pkg.price
  const addonTotal = withAddon ? qty * 8000 : 0
  const grandTotal = baseTotal + addonTotal

  const handleQtyChange = (val) => {
    const num = parseInt(val, 10)
    if (isNaN(num)) { setQty(''); return }
    setQty(num)
  }

  const handleDecrement = () => setQty(prev => Math.max(MIN_QTY, (parseInt(prev) || MIN_QTY) - 1))
  const handleIncrement = () => setQty(prev => (parseInt(prev) || MIN_QTY) + 1)

  const isValid = parseInt(qty) >= MIN_QTY

  const handleOrder = () => {
    const qtyVal = parseInt(qty)
    if (!isValid) return

    const addonLine = withAddon
      ? `\n➕ *Tambahan:* ${selectedAddon} (+Rp 8.000/kotak)`
      : ''

    const message = [
      `Halo Dapoer Kuliner! 👋`,
      ``,
      `Saya ingin memesan *Catering Box* dengan rincian berikut:`,
      ``,
      ` *Paket:* ${pkg.name} (${pkg.priceLabel}/kotak)`,
      ` *Jumlah:* ${qtyVal} kotak`,
      addonLine,
      ``,
      ` *Rincian Harga:*`,
      `   • Paket ${pkg.name}: ${qtyVal} × ${formatRupiah(pkg.price)} = ${formatRupiah(qtyVal * pkg.price)}`,
      withAddon ? `   • Tambahan ${selectedAddon}: ${qtyVal} × Rp 8.000 = ${formatRupiah(addonTotal)}` : null,
      `   ───────────────────────`,
      `   • *Total: ${formatRupiah(grandTotal)}*`,
      ``,
      `Mohon konfirmasi ketersediaan dan jadwal pengiriman. Terima kasih! 🙏`,
    ]
      .filter((line) => line !== null)
      .join('\n')

    const waNumber = '628991004545'
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank')
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
          className="modal-card order-modal-card"
          initial={{ scale: 0.82, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header" style={{ background: pkg.accentColor }}>
            <div className="modal-header-text">
              <h2 className="modal-pkg-name">Pesan {pkg.name}</h2>
              <p className="modal-pkg-price">{pkg.priceLabel} / kotak</p>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Tutup">
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Quantity */}
            <div className="order-field">
              <label className="order-label">
                Jumlah Kotak
                <span className="order-min-note">min. {MIN_QTY} kotak</span>
              </label>
              <div className="qty-control">
                <button
                  className="qty-btn"
                  onClick={handleDecrement}
                  disabled={parseInt(qty) <= MIN_QTY}
                >
                  −
                </button>
                <input
                  type="number"
                  className="qty-input"
                  value={qty}
                  min={MIN_QTY}
                  onChange={(e) => handleQtyChange(e.target.value)}
                />
                <button className="qty-btn" onClick={handleIncrement}>
                  +
                </button>
              </div>
              {!isValid && (
                <p className="qty-error">⚠️ Minimal pemesanan adalah {MIN_QTY} kotak.</p>
              )}
            </div>

            {/* Addon */}
            <div className="order-field">
              <label className="order-label">Tambahan (Opsional)</label>
              <label className="addon-checkbox-wrap">
                <input
                  type="checkbox"
                  checked={withAddon}
                  onChange={(e) => setWithAddon(e.target.checked)}
                />
                <span>Tambahkan {cateringBoxAddons.label}</span>
              </label>
              {withAddon && (
                <div className="addon-select-wrap">
                  {cateringBoxAddons.items.map((item) => (
                    <button
                      key={item}
                      className={`addon-option-btn ${selectedAddon === item ? 'is-selected' : ''}`}
                      onClick={() => setSelectedAddon(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Summary */}
            <div className="order-summary">
              <div className="order-summary-row">
                <span>{pkg.name} × {parseInt(qty) || 0} kotak</span>
                <span>{formatRupiah((parseInt(qty) || 0) * pkg.price)}</span>
              </div>
              {withAddon && (
                <div className="order-summary-row">
                  <span>{selectedAddon} × {parseInt(qty) || 0} kotak</span>
                  <span>{formatRupiah((parseInt(qty) || 0) * 8000)}</span>
                </div>
              )}
              <div className="order-summary-divider" />
              <div className="order-summary-row order-total-row">
                <span>Total Estimasi</span>
                <span>{formatRupiah(grandTotal)}</span>
              </div>
              <p className="order-summary-note">
                * Harga final dikonfirmasi oleh admin setelah pemesanan.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer order-footer">
            <button className="modal-close-text" onClick={onClose}>
              Batal
            </button>
            <motion.button
              className="order-wa-btn"
              onClick={handleOrder}
              disabled={!isValid}
              whileHover={isValid ? { scale: 1.04 } : {}}
              whileTap={isValid ? { scale: 0.96 } : {}}
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.13 23.44L2.09 29.91L8.76 27.91C10.87 29.21 13.35 30 16 30C23.72 30 30 23.72 30 16C30 8.28 23.72 2 16 2Z" fill="#25D366" />
                <path d="M23.63 20.08C23.21 19.87 21.14 18.85 20.76 18.71C20.37 18.57 20.09 18.5 19.81 18.92C19.53 19.34 18.73 20.28 18.49 20.56C18.24 20.84 18 20.88 17.58 20.67C17.16 20.46 15.82 20.02 14.22 18.6C12.98 17.5 12.14 16.14 11.9 15.72C11.66 15.3 11.87 15.08 12.08 14.87C12.27 14.68 12.5 14.38 12.71 14.14C12.92 13.9 12.99 13.73 13.13 13.45C13.27 13.17 13.2 12.93 13.1 12.72C13 12.51 12.16 10.45 11.81 9.61C11.47 8.79 11.12 8.9 10.87 8.89C10.63 8.88 10.35 8.88 10.07 8.88C9.79 8.88 9.34 8.99 8.96 9.41C8.58 9.83 7.5 10.84 7.5 12.9C7.5 14.96 9 16.95 9.21 17.23C9.42 17.51 12.16 21.72 16.34 23.53C17.33 23.96 18.11 24.22 18.71 24.41C19.7 24.72 20.6 24.68 21.31 24.57C22.1 24.45 23.75 23.57 24.09 22.59C24.44 21.61 24.44 20.77 24.33 20.56C24.23 20.35 24.05 20.29 23.63 20.08Z" fill="#fff" />
              </svg>
              Pesan Sekarang via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Package Card ─────────────────────────────────────────────────────────────
function PackageCard({ pkg, index, onDetail, onOrder }) {
  return (
    <motion.article
      className="cb-card"
      style={{ '--card-accent': pkg.accentColor, background: pkg.bgColor }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="cb-card-badge" style={{ background: pkg.badgeColor }}>
          {pkg.badge}
        </div>
      )}

      {/* Accent top strip */}
      <div className="cb-card-strip" style={{ background: pkg.accentColor }} />

      {/* Content */}
      <div className="cb-card-body">
        <div className="cb-card-header">
          <div>
            <h3 className="cb-card-name" style={{ color: pkg.accentColor }}>
              {pkg.name}
            </h3>
            <p className="cb-card-price">
              <span className="cb-price-tag" style={{ background: pkg.accentColor }}>
                {pkg.priceLabel}
              </span>
              <span className="cb-price-unit">/ kotak</span>
            </p>
          </div>
        </div>

        <p className="cb-card-desc">{pkg.desc}</p>

        {/* Menu Preview — show first 3 items */}
        <ul className="cb-menu-preview">
          {pkg.menu.slice(0, 3).map((m, i) => (
            <li key={i}>
              <span className="cb-menu-dot" style={{ background: pkg.accentColor }} />
              {m}
            </li>
          ))}
          {pkg.menu.length > 3 && (
            <li className="cb-menu-more">+{pkg.menu.length - 3} menu lainnya...</li>
          )}
        </ul>
      </div>

      {/* Actions */}
      <div className="cb-card-actions">
        <button
          className="cb-btn-detail"
          onClick={() => onDetail(pkg)}
          style={{ '--btn-accent': pkg.accentColor, borderColor: pkg.accentColor, color: pkg.accentColor }}
        >
          Detail Paket
        </button>
        <button
          className="cb-btn-order"
          onClick={() => onOrder(pkg)}
          style={{ background: pkg.accentColor }}
        >
          Pesan Paket
        </button>
      </div>
    </motion.article>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CateringBoxPage({ onBack }) {
  const [detailPkg, setDetailPkg] = useState(null)
  const [orderPkg, setOrderPkg] = useState(null)

  return (
    <div className="cb-page">
      {/* Reuse existing Navbar */}
      <Navbar />

      {/* Background grid pattern */}
      <div className="cb-grid-pattern" aria-hidden="true" />

      <div className="container cb-container">
        {/* Back button */}
        <motion.button
          className="cb-back-btn"
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

        {/* Page Header */}
        <div className="cb-page-header">
          <motion.div
            className="cb-page-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span>📦</span> PAKET CATERING BOX
          </motion.div>

          <motion.h1
            className="cb-page-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Nasi Kotak
            <br />
            <span className="cb-title-sub">Dapoer Kuliner</span>
          </motion.h1>

          <motion.p
            className="cb-page-subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
          >
            Minimal order <strong>20 kotak</strong> — pilih paket yang paling sesuai kebutuhan acaramu!
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="cb-packages-grid">
          {cateringBoxPackages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={i}
              onDetail={setDetailPkg}
              onOrder={setOrderPkg}
            />
          ))}
        </div>

        {/* Addons note */}
        <motion.div
          className="cb-addon-note"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="cb-addon-note-icon">✨</span>
          <span>
            <strong>{cateringBoxAddons.label}:</strong>{' '}
            {cateringBoxAddons.items.join(' / ')}
          </span>
        </motion.div>
      </div>

      {/* Modals */}
      {detailPkg && (
        <DetailModal pkg={detailPkg} onClose={() => setDetailPkg(null)} />
      )}
      {orderPkg && (
        <OrderModal pkg={orderPkg} onClose={() => setOrderPkg(null)} />
      )}

      <style>{`
        .cb-page {
          min-height: 100vh;
          background: var(--color-bg);
          position: relative;
          overflow-x: hidden;
          padding-bottom: 80px;
        }

        .cb-grid-pattern {
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

        .cb-container {
          position: relative;
          z-index: 1;
          padding-top: 28px;
        }

        .cb-back-btn {
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
          margin-bottom: 40px;
        }

        .cb-back-btn:hover {
          transform: translateX(-3px);
          box-shadow: 3.5px 4px 0 #1c1a17;
        }

        .cb-page-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 56px;
        }

        .cb-page-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: #e7543d;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          margin-bottom: 18px;
        }

        .cb-page-title {
          font-family: var(--font-display);
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #1c1a17;
        }

        .cb-title-sub {
          color: #e7543d;
          font-size: clamp(28px, 4.5vw, 46px);
        }

        .cb-page-subtitle {
          margin-top: 16px;
          font-family: var(--font-mono);
          font-size: 15px;
          color: #555049;
          line-height: 1.55;
        }

        /* ─── Package Cards Grid ─────────────────── */
        .cb-packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .cb-card {
          position: relative;
          border-radius: 24px;
          border: 2px solid #1c1a17;
          box-shadow: 4px 5px 0 #1c1a17;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .cb-card:hover {
          transform: translateY(-5px) translateX(-1px);
          box-shadow: 6px 8px 0 #1c1a17;
        }

        .cb-card-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1.5px solid #1c1a17;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 10.5px;
          letter-spacing: 0.07em;
          color: #ffffff;
          box-shadow: 2px 2px 0 #1c1a17;
          z-index: 2;
        }

        .cb-card-strip {
          height: 6px;
          width: 100%;
        }

        .cb-card-body {
          padding: 22px 22px 16px;
          flex: 1;
        }

        .cb-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .cb-card-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.015em;
        }

        .cb-card-price {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 5px;
        }

        .cb-price-tag {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 9999px;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 14px;
          border: 1.5px solid #1c1a17;
          box-shadow: 2px 2px 0 #1c1a17;
        }

        .cb-price-unit {
          font-family: var(--font-body);
          font-size: 13px;
          color: #6b6560;
          font-weight: 600;
        }

        .cb-card-desc {
          font-size: 13.5px;
          color: #555049;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .cb-menu-preview {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .cb-menu-preview li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: #3b3830;
          font-weight: 500;
        }

        .cb-menu-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1px solid rgba(0,0,0,0.15);
        }

        .cb-menu-more {
          color: #6b6560 !important;
          font-style: italic;
          font-size: 12.5px !important;
        }

        .cb-card-actions {
          display: flex;
          gap: 10px;
          padding: 16px 22px 22px;
        }

        .cb-btn-detail {
          flex: 1;
          padding: 10px;
          border-radius: 12px;
          background: transparent;
          border: 2px solid;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .cb-btn-detail:hover {
          background: var(--btn-accent);
          color: #ffffff !important;
          border-color: var(--btn-accent) !important;
        }

        .cb-btn-order {
          flex: 1;
          padding: 10px;
          border-radius: 12px;
          background: #1c1a17;
          border: 2px solid #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          cursor: pointer;
          box-shadow: 2.5px 3px 0 rgba(28,26,23,0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        .cb-btn-order:hover {
          transform: translateY(-2px);
          box-shadow: 3.5px 5px 0 rgba(28,26,23,0.4);
          filter: brightness(1.08);
        }

        /* ─── Addon Note ─────────────────────────── */
        .cb-addon-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 14px;
          background: #fffbe8;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          font-family: var(--font-body);
          font-size: 14.5px;
          color: #3b3830;
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
        }

        .cb-addon-note-icon {
          font-size: 18px;
        }

        /* ─── Modals ─────────────────────────────── */
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
          max-width: 480px;
          max-height: 88vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .order-modal-card {
          max-width: 500px;
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

        .modal-pkg-name {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .modal-pkg-price {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          margin-top: 4px;
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
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .modal-section-icon {
          font-size: 18px;
        }

        .modal-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modal-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: #3b3830;
          font-weight: 500;
        }

        .menu-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          border: 1.5px solid rgba(0,0,0,0.15);
        }

        .modal-addons {
          margin-bottom: 14px;
        }

        .modal-addon-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: #fff9e6;
          border: 1.5px solid #f2d26a;
        }

        .addon-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .addon-label {
          font-size: 13px;
          font-weight: 800;
          color: #7a5f00;
          margin-bottom: 2px;
        }

        .addon-items {
          font-size: 13.5px;
          color: #3b3830;
          font-weight: 600;
        }

        .modal-min-order {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          color: #555049;
          padding: 10px 14px;
          background: #f4f2ee;
          border-radius: 10px;
        }

        .modal-min-icon {
          font-size: 17px;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 24px 22px;
          border-top: 1.5px solid #eeebe5;
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

        /* ─── Order Modal Specific ───────────────── */
        .order-field {
          margin-bottom: 20px;
        }

        .order-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14.5px;
          color: #1c1a17;
          margin-bottom: 10px;
        }

        .order-min-note {
          font-size: 12px;
          font-weight: 600;
          color: #6b6560;
          background: #f4f2ee;
          padding: 3px 10px;
          border-radius: 9999px;
        }

        .qty-control {
          display: flex;
          align-items: center;
          gap: 0;
          border: 2px solid #1c1a17;
          border-radius: 14px;
          overflow: hidden;
          width: fit-content;
          box-shadow: 2.5px 3px 0 #1c1a17;
        }

        .qty-btn {
          width: 46px;
          height: 46px;
          background: #f4f2ee;
          border: none;
          font-size: 22px;
          font-weight: 700;
          color: #1c1a17;
          cursor: pointer;
          transition: background 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .qty-btn:hover:not(:disabled) {
          background: #e8e4dc;
        }

        .qty-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .qty-input {
          width: 78px;
          height: 46px;
          text-align: center;
          border: none;
          border-left: 1.5px solid #1c1a17;
          border-right: 1.5px solid #1c1a17;
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          color: #1c1a17;
          background: #fff;
          outline: none;
          -moz-appearance: textfield;
        }

        .qty-input::-webkit-outer-spin-button,
        .qty-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .qty-error {
          margin-top: 8px;
          font-size: 13px;
          color: #c64a1f;
          font-weight: 600;
        }

        .addon-checkbox-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14.5px;
          font-weight: 600;
          color: #1c1a17;
          cursor: pointer;
          margin-bottom: 12px;
        }

        .addon-checkbox-wrap input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #c64a1f;
        }

        .addon-select-wrap {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .addon-option-btn {
          padding: 8px 18px;
          border-radius: 9999px;
          border: 2px solid #d0ccc4;
          background: #f7f5f0;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          color: #555049;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .addon-option-btn.is-selected {
          background: #1c1a17;
          border-color: #1c1a17;
          color: #ffffff;
          box-shadow: 2px 2.5px 0 rgba(28,26,23,0.3);
        }

        .order-summary {
          background: #faf7f2;
          border: 1.5px solid #e8e4dc;
          border-radius: 16px;
          padding: 16px 18px;
        }

        .order-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #555049;
          padding: 4px 0;
        }

        .order-summary-divider {
          border: none;
          border-top: 1.5px dashed #c8c5be;
          margin: 10px 0;
        }

        .order-total-row {
          font-size: 16px;
          font-weight: 800;
          color: #1c1a17;
        }

        .order-summary-note {
          font-size: 11.5px;
          color: #9b978f;
          margin-top: 10px;
          font-style: italic;
        }

        .order-footer {
          justify-content: space-between;
        }

        .order-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 14px;
          background: #25D366;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        .order-wa-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0 #1c1a17;
          filter: brightness(1.06);
        }

        .order-wa-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* ─── Responsive ─────────────────────────── */
        @media (max-width: 900px) {
          .cb-packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .cb-packages-grid {
            grid-template-columns: 1fr;
          }
          .modal-card {
            max-height: 92vh;
          }
          .order-footer {
            flex-wrap: wrap;
            gap: 12px;
          }
          .order-wa-btn {
            flex: 1;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}
