export default function Footer() {
  return (
    <footer id="kontak" className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">
            <span className="footer-logo-mark">D</span>
            <span>
              Dapoer<br />Kuliner
            </span>
          </div>
          <p className="footer-desc">
            Catering terpercaya sejak 2012 untuk kebutuhan harian hingga
            acara besar Anda.
          </p>
        </div>

        <div className="footer-col">
          <h4>Kontak</h4>
          <p>0899-1004-545</p>
          <p>dapoerkuliner1979@gmail.com</p>
          <p>Kota Malang, Jawa Timur</p>
        </div>

        <div className="footer-col">
          <h4>Tautan</h4>
          <a href="#tentang">Tentang Kami</a>
          <a href="#paket">Paket Catering</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Dapoer Kuliner. Semua hak dilindungi.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-surface);
          padding: 72px 0 0;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          line-height: 1.1;
        }
        .footer-logo-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--color-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-desc {
          margin-top: 16px;
          font-size: 14px;
          max-width: 280px;
        }
        .footer-col h4 {
          font-size: 15px;
          margin-bottom: 14px;
        }
        .footer-col p,
        .footer-col a {
          display: block;
          font-size: 14px;
          color: var(--color-muted);
          margin-bottom: 10px;
        }
        .footer-col a:hover {
          color: var(--color-primary);
        }
        .footer-bottom {
          margin-top: 56px;
          border-top: 1px solid var(--color-line);
          padding: 22px 0;
        }
        .footer-bottom p {
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .footer-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
