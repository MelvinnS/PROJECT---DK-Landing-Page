import { useRef } from 'react'
import { motion } from 'framer-motion'

const packages = [
  {
    id: 'harian',
    titleLine1: 'CATERING',
    titleLine2: 'HARIAN',
    subtitle: 'Dari Dapoer Kuliner',
    desc: 'Untuk keluarga & kantor',
    bg: '#f2b724',
    textColor: '#1c1a17',
    subColor: '#3d2e05',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=700&auto=format&fit=crop',
    cutoutType: 'cutout-cloud',
  },
  {
    id: 'box',
    titleLine1: 'CATERING',
    titleLine2: 'BOX',
    subtitle: 'Dari Dapoer Kuliner',
    desc: 'Praktis untuk seminar & rapat',
    bg: '#e7543d',
    textColor: '#ffffff',
    subColor: 'rgba(255, 255, 255, 0.9)',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=700&auto=format&fit=crop',
    cutoutType: 'cutout-wave',
  },
  {
    id: 'prasmanan',
    titleLine1: 'CATERING',
    titleLine2: 'PRASMANAN',
    subtitle: 'Dari Dapoer Kuliner',
    desc: 'Pernikahan & acara spesial',
    bg: '#8ec637',
    textColor: '#143d1a',
    subColor: '#1a4921',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=700&auto=format&fit=crop',
    cutoutType: 'cutout-arch',
  },
]

export default function Packages({ onNavigateCateringBox }) {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="paket" className="packages">
      {/* Background grid pattern with fade to transparent */}
      <div className="packages-grid-pattern" aria-hidden="true" />

      <div className="container packages-container">
        <div className="packages-head">
          <div className="packages-badge-wrap">
            <span className="packages-badge">MENU PILIHAN</span>
          </div>
          <h2 className="packages-title">Pilih Paket Catering Sesuai Kebutuhan Anda</h2>
        </div>

        <div className="packages-carousel-wrap">
          {/* Navigation Arrow Left */}
          <button
            className="carousel-arrow arrow-left"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="packages-cards-scroll" ref={scrollRef}>
            {packages.map((pkg, i) => (
              <motion.article
                key={pkg.id}
                className={`oatside-pkg-card ${pkg.id === 'box' ? 'is-clickable' : ''}`}
                style={{ backgroundColor: pkg.bg }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                onClick={pkg.id === 'box' ? onNavigateCateringBox : undefined}
                title={pkg.id === 'box' ? 'Klik untuk lihat paket lengkap Catering Box' : undefined}
              >
                {/* Header text on top-left of card */}
                <div className="card-top">
                  <h3 className="card-title" style={{ color: pkg.textColor }}>
                    <span>{pkg.titleLine1}</span>
                    <span>{pkg.titleLine2}</span>
                  </h3>
                  {/* "Lihat Paket" pill on catering box card */}
                  {pkg.id === 'box' && (
                    <span className="card-cta-pill">Lihat Paket →</span>
                  )}
                </div>

                {/* Creative Organic Cutout with Image */}
                <div className={`card-cutout-wrap ${pkg.cutoutType}`}>
                  <div className="card-cutout-inner">
                    <img src={pkg.image} alt={`${pkg.titleLine1} ${pkg.titleLine2}`} loading="lazy" />
                  </div>
                </div>

                {/* Subtitle / Description on bottom-left of card */}
                <div className="card-bottom">
                  <span className="card-subtitle" style={{ color: pkg.subColor }}>
                    {pkg.subtitle}
                  </span>
                  <span className="card-desc" style={{ color: pkg.subColor }}>
                    {pkg.desc}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Navigation Arrow Right */}
          <button
            className="carousel-arrow arrow-right"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* Explore More CTA Button */}
        <div className="packages-cta-wrap">
          <button className="packages-explore-btn" onClick={onNavigateCateringBox}>
            Lihat Semua Paket Catering Box →
          </button>
        </div>
      </div>

      <style>{`
        .packages {
          position: relative;
          padding: 80px 0 100px;
          overflow: hidden;
        }

        .packages-grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background-size: 28px 28px;
          background-image:
            linear-gradient(to right, rgba(28, 26, 23, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28, 26, 23, 0.08) 1px, transparent 1px);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 95%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 95%);
          pointer-events: none;
          z-index: 0;
        }

        .packages-container {
          position: relative;
          z-index: 1;
        }

        .packages-head {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 46px;
        }

        .packages-badge-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
        }

        .packages-badge {
          display: inline-block;
          padding: 5px 16px;
          background: #2563eb;
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          border-radius: 9999px;
          border: 1.8px solid #1c1a17;
          box-shadow: 2px 2.5px 0 #1c1a17;
        }

        .packages-title {
          font-size: clamp(30px, 4.4vw, 50px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: #1c1a17;
        }

        .packages-carousel-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-arrow {
          position: absolute;
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #1c1a17;
          box-shadow: 2.5px 3px 0 #1c1a17;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1c1a17;
          transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }

        .carousel-arrow:hover {
          transform: scale(1.08);
          background: #fdfaf4;
          box-shadow: 3.5px 4px 0 #1c1a17;
        }

        .carousel-arrow:active {
          transform: scale(0.95);
        }

        .arrow-left {
          left: -18px;
        }

        .arrow-right {
          right: -18px;
        }

        .packages-cards-scroll {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          width: 100%;
          padding: 8px 0;
        }

        .oatside-pkg-card {
          position: relative;
          border-radius: 28px;
          border: 2.2px solid #1c1a17;
          box-shadow: 4px 5px 0 #1c1a17;
          height: 380px;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .oatside-pkg-card:hover {
          transform: translateY(-4px);
          box-shadow: 5.5px 7px 0 #1c1a17;
        }

        .oatside-pkg-card.is-clickable {
          cursor: pointer;
        }

        .card-cta-pill {
          display: inline-block;
          margin-top: 8px;
          padding: 4px 13px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.25);
          border: 1.5px solid rgba(255,255,255,0.6);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.03em;
          backdrop-filter: blur(4px);
          box-shadow: 1.5px 2px 0 rgba(255,255,255,0.3);
        }

        .card-top {
          position: relative;
          z-index: 2;
        }

        .card-title {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          font-size: clamp(23px, 2.4vw, 29px);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.02em;
        }

        /* Organic cutout containers for food photos (matching Oatside style) */
        .card-cutout-wrap {
          position: absolute;
          right: -12px;
          bottom: -10px;
          width: 210px;
          height: 220px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cutout-cloud .card-cutout-inner {
          width: 190px;
          height: 190px;
          border-radius: 50% 50% 45% 45%;
          border: 2px solid #1c1a17;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 2px 3px 0 #1c1a17;
          transform: rotate(-4deg);
        }

        .cutout-wave .card-cutout-inner {
          width: 195px;
          height: 200px;
          border-radius: 55% 45% 50% 50% / 50% 50% 45% 55%;
          border: 2px solid #1c1a17;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 2px 3px 0 #1c1a17;
          transform: rotate(3deg);
        }

        .cutout-arch .card-cutout-inner {
          width: 185px;
          height: 210px;
          border-radius: 90px 90px 40px 40px;
          border: 2px solid #1c1a17;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 2px 3px 0 #1c1a17;
          transform: rotate(-2deg);
        }

        .card-cutout-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }

        .oatside-pkg-card:hover .card-cutout-inner img {
          transform: scale(1.06);
        }

        .card-bottom {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 3px;
          max-width: 150px;
        }

        .card-subtitle {
          font-family: var(--font-body);
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.25;
        }

        .packages-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        .packages-explore-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          border-radius: 9999px;
          background: #ffffff;
          color: #1c1a17;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 700;
          border: 2px solid #1c1a17;
          box-shadow: 3px 3.5px 0 #1c1a17;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .packages-explore-btn:hover {
          transform: translate(-1.5px, -1.5px);
          box-shadow: 4.5px 5px 0 #1c1a17;
          background: #faf6ee;
        }

        @media (max-width: 960px) {
          .packages-carousel-wrap {
            position: relative;
          }
          .packages-cards-scroll {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px;
            padding: 8px 4px 16px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .packages-cards-scroll::-webkit-scrollbar {
            display: none;
          }
          .oatside-pkg-card {
            flex: 0 0 280px;
            height: 360px;
            scroll-snap-align: center;
          }
          .arrow-left {
            left: -8px;
          }
          .arrow-right {
            right: -8px;
          }
        }

        @media (max-width: 600px) {
          .carousel-arrow {
            display: none;
          }
          .packages-cards-scroll {
            padding-left: 12px;
            padding-right: 12px;
          }
          .oatside-pkg-card {
            flex: 0 0 260px;
            height: 340px;
          }
          .card-cutout-wrap {
            width: 170px;
            height: 180px;
          }
          .cutout-cloud .card-cutout-inner,
          .cutout-wave .card-cutout-inner,
          .cutout-arch .card-cutout-inner {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </section>
  )
}
