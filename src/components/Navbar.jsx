import { useState, useEffect } from 'react'

const links = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Paket Catering', href: '#paket' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`nav-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-capsule">
        <a href="#beranda" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-mark">D</span>
          <span className="nav-logo-text">
            DAPOER<span className="nav-logo-sub">KULINER</span>
          </span>
        </a>

        <nav className="nav-links-desktop">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#kontak" className="nav-cta-btn">
            Hubungi Kami
          </a>
          <button
            className={`nav-toggle ${open ? 'is-active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Card */}
      <div className={`nav-mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="nav-mobile-inner">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      <style>{`
        .nav-wrapper {
          position: sticky;
          top: 12px;
          z-index: 50;
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 16px;
          transition: transform 0.3s ease;
        }

        .nav-capsule {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(254, 252, 248, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1.8px solid #1c1a17;
          border-radius: 9999px;
          padding: 7px 10px 7px 20px;
          box-shadow: 0 8px 24px -10px rgba(28, 26, 23, 0.12);
          transition: all 0.25s ease;
        }

        .nav-wrapper.is-scrolled .nav-capsule {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 30px -10px rgba(28, 26, 23, 0.18);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .nav-logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: var(--color-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 17px;
          border: 1.5px solid #1c1a17;
        }

        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 16px;
          letter-spacing: -0.02em;
          color: #1c1a17;
          display: flex;
          flex-direction: column;
          line-height: 0.95;
        }

        .nav-logo-sub {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links-desktop a {
          font-size: 14px;
          font-weight: 600;
          color: #2b2823;
          position: relative;
          padding: 4px 2px;
          transition: color 0.2s ease;
        }

        .nav-links-desktop a:hover {
          color: var(--color-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 20px;
          border-radius: 9999px;
          background: #1c1a17;
          color: #ffffff;
          font-weight: 600;
          font-size: 13.5px;
          border: 1.5px solid #1c1a17;
          transition: all 0.2s ease;
        }

        .nav-cta-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-1px);
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 38px;
          height: 38px;
          background: #f4efe6;
          border: 1.5px solid #1c1a17;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
        }

        .nav-toggle span {
          display: block;
          height: 2px;
          width: 100%;
          background: #1c1a17;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .nav-toggle.is-active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nav-toggle.is-active span:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle.is-active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .nav-mobile-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 16px;
          right: 16px;
          border-radius: 24px;
          background: rgba(254, 252, 248, 0.98);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1.8px solid #1c1a17;
          box-shadow: 0 16px 36px -12px rgba(28, 26, 23, 0.22);
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
        }

        .nav-mobile-menu.is-open {
          max-height: 380px;
          opacity: 1;
          pointer-events: auto;
        }

        .nav-mobile-inner {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nav-mobile-link {
          padding: 11px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #2b2823;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .nav-mobile-link:hover {
          background: #f3eee6;
          color: var(--color-primary);
        }

        .nav-mobile-cta {
          margin-top: 8px;
          padding: 12px;
          text-align: center;
          border-radius: 14px;
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          border: 1.5px solid #1c1a17;
        }

        @media (max-width: 860px) {
          .nav-wrapper {
            top: 8px;
            padding: 0 12px;
          }
          .nav-capsule {
            padding: 6px 8px 6px 14px;
          }
          .nav-links-desktop {
            display: none;
          }
          .nav-cta-btn {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}
