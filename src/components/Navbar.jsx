import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <div className="nav__brand">
            <Link to="/" className="nav__logo" aria-label="Hey Investor">
              <img src="/logo (1).png" alt="Hey Investor Logo" />
            </Link>
            <div className="nav__rera-info">
              <img
                src="/qrcode.png"
                alt="MahaRERA QR Code"
                className="nav__qrcode"
                onClick={() => setQrOpen(true)}
                style={{ cursor: 'pointer' }}
                title="Click to enlarge for scanning"
              />
              <div className="nav__rera-text">
                <span className="nav__rera-label">MahaRERA Registration No.</span>
                <span className="nav__rera-number">A50500037507</span>
              </div>
            </div>
          </div>

          <div className="nav__links">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link${pathname === to ? ' nav__link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="nav__actions">
            <Link to="/contact" className="btn btn--accent">Book a Site Visit</Link>
            <button
              className="nav__hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav__mobile-menu${menuOpen ? ' nav__mobile-menu--open' : ''}`}>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav__mobile-link${pathname === to ? ' nav__mobile-link--active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn--accent btn--lg" style={{ marginTop: '1rem' }}>
          Book a Site Visit
        </Link>
      </div>

      {/* QR Code lightbox */}
      {qrOpen && (
        <div
          className="qr-lightbox"
          onClick={() => setQrOpen(false)}
        >
          <div className="qr-lightbox__card" onClick={e => e.stopPropagation()}>
            <button className="qr-lightbox__close" onClick={() => setQrOpen(false)} aria-label="Close">×</button>
            <img src="/qrcode.png" alt="MahaRERA QR Code" className="qr-lightbox__img" />
            <p className="qr-lightbox__text">MahaRERA Registration No.</p>
            <p className="qr-lightbox__number">A50500037507</p>
          </div>
        </div>
      )}
    </>
  );
}
