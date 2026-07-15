import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand + Contact */}
          <div style={{ paddingRight: 'var(--space-12)' }}>
            <div style={{ marginBottom: 'var(--space-6)', display: 'inline-block' }}>
              <img src="/logo (1).png" alt="Hey Investor" style={{ height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="footer__text">
              Trusted partner for premium residential and commercial plots across Nagpur &amp; Vidarbha. NMRDA &amp; RL approved projects with <span className="footer__text-highlight">90% loan facility.</span>
            </p>
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                103, Ghatate Building, WHC Road,<br/>
                Nr. Law College Sq., Nagpur<br/>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-xs)' }}>Maharashtra, India</span>
              </div>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <a href="tel:+919325650256" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93256 50256</a>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <a href="mailto:info@heyinvestor.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@heyinvestor.in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">
              <div className="footer__heading-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              Quick Links
            </h4>
            
            <Link className="footer__link-pill" to="/">
              <div className="footer__link-pill-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Home
              </div>
              <div className="footer__link-pill-right"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
            </Link>
            
            <Link className="footer__link-pill" to="/properties">
              <div className="footer__link-pill-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                Properties
              </div>
              <div className="footer__link-pill-right"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
            </Link>
            
            <Link className="footer__link-pill" to="/about">
              <div className="footer__link-pill-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                About Us
              </div>
              <div className="footer__link-pill-right"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
            </Link>
            
            <Link className="footer__link-pill" to="/contact">
              <div className="footer__link-pill-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Contact / Book Visit
              </div>
              <div className="footer__link-pill-right"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
            </Link>
          </div>

          {/* Connect With Us */}
          <div style={{ paddingLeft: 'var(--space-8)' }}>
            <h4 className="footer__heading">
              <div className="footer__heading-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              Connect With Us
            </h4>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: 'var(--space-4)' }}>
              <a href="https://www.youtube.com/@heyinvestorpvtltd-realesta4416" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(217,164,65,0.3)', color: 'var(--gold-400)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.facebook.com/heyinvestorofficial" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(217,164,65,0.3)', color: 'var(--gold-400)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/hey-investor-pvt-ltd-official/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(217,164,65,0.3)', color: 'var(--gold-400)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-shield">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span>© {new Date().getFullYear()} Hey Investor Pvt. Ltd. All rights reserved.</span>
            <span style={{ fontSize: '13px', color: 'var(--gray-400)' }}>
              Developed by <a href="https://bizleap.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold-400)', textDecoration: 'none', fontWeight: 500 }}>BizLeap</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
