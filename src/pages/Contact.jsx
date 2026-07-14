import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const headerRef = useScrollReveal();
  const cardsRef = useStaggerReveal();
  const formRef = useScrollReveal({ rootMargin: '0px' });
  const mapRef = useScrollReveal({ rootMargin: '0px' });

  return (
    <>
      <div className="contact-hero animate-in">
        <div className="container">
          <div className="contact-hero__container">
            <div className="contact-hero__subtitle">Get in Touch</div>
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__text">We're here to help you take the next step towards your land investment.</p>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Info Cards */}
          <div className="grid grid--3 contact-info-cards stagger-wrap" ref={cardsRef}>
            <div className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="info-card__label">Our Office</div>
                <div className="info-card__value" style={{ fontSize: '13px' }}>103, Ghatate Building, WHC Road, Nr. Law College Sq., Nagpur</div>
              </div>
            </div>
            <a href="tel:+919325650256" className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="info-card__label">Call Us</div>
                <div className="info-card__value">+91-9325650256</div>
              </div>
            </a>
            <a href="mailto:info@heyinvestor.in" className="info-card">
              <div className="info-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="info-card__label">Email Us</div>
                <div className="info-card__value">info@heyinvestor.in</div>
              </div>
            </a>
          </div>

          {/* Form + Map */}
          <div className="detail-grid">
            <div className="reveal--left" ref={formRef}>
              <BookingForm />
            </div>
            <div className="map-container reveal--right" ref={mapRef} style={{ display: 'flex', flexDirection: 'column', background: 'var(--white)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)' }}>
              <iframe
                src="https://maps.google.com/maps?q=103%2C%20Ghatate%20Building%2C%20W%20High%20Ct%20Rd%2C%20near%20Law%20College%20Square%2C%20Dharampeth%2C%20Nagpur%2C%20Maharashtra%20440010%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Hey Investor Office — Nagpur"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ flex: 1, border: 0, minHeight: '320px' }}
              />
              <div style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-6)', borderTop: '1px solid var(--gray-100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flex: 1 }}>
                  <div className="info-card__icon" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--green-950)' }}>Hey Investor Pvt. Ltd.</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>103, Ghatate Building, WHC Road, Nr. Law College Sq., Nagpur</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flex: 1 }}>
                  <div style={{ color: 'var(--green-900)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--green-950)' }}>Open Hours</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-500)' }}>Mon - Sat: 10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
