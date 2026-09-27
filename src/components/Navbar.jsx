import { useState } from 'react'

const links = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Paket Catering', href: '#paket' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#beranda" className="nav-logo">
          <span className="nav-logo-mark">D</span>
          <span>
            Dapoer<br />Kuliner
          </span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#kontak" className="btn btn-primary nav-cta">
            Hubungi Kami
          </a>
          <button
            className="nav-toggle"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 78px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          line-height: 1.1;
        }
        .nav-logo-mark {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: var(--color-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 14.5px;
          font-weight: 500;
        }
        .nav-links a {
          color: var(--color-text);
          position: relative;
          padding-bottom: 4px;
        }
        .nav-links a:hover {
          color: var(--color-primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-cta {
          padding: 11px 20px;
          font-size: 14px;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          padding: 6px;
        }
        .nav-toggle span {
          width: 22px;
          height: 2px;
          background: var(--color-text);
          border-radius: 2px;
        }

        @media (max-width: 860px) {
          .nav-cta {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 78px;
            left: 0;
            right: 0;
            background: #fff;
            border-bottom: 1px solid var(--color-line);
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s var(--ease-smooth);
          }
          .nav-links.is-open {
            max-height: 320px;
          }
          .nav-links a {
            width: 100%;
            padding: 14px 24px;
            border-bottom: 1px solid var(--color-line);
          }
        }
      `}</style>
    </header>
  )
}
