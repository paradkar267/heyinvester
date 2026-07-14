import { Link } from 'react-router-dom';
import TrustBadges from '../components/TrustBadges';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';

export default function WhyHeyInvestor() {
  const trustRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const gridItems = useStaggerReveal('.why-card');
  const ctaRef = useScrollReveal();

  return (
    <>
      <div className="page-header page-header--properties animate-in" style={{ backgroundImage: 'url(/properties.png)' }}>
        <div className="container">
          <h1 className="page-header__title" style={{ fontSize: 'var(--text-4xl)' }}>Why Hey Investor</h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container animate-in" style={{ maxWidth: '800px', textAlign: 'center', animationDelay: '0.2s' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--green-950)', marginBottom: 'var(--space-6)', lineHeight: 1.3 }}>
              Invest with Confidence, Build with Certainty
            </h2>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gray-600)', lineHeight: 1.8 }}>
              At Hey Investor, we believe that real estate shouldn't be a gamble. That's why we meticulously vet every single plot before it reaches you. When you buy with us, you are buying verified, government-approved land designed for high appreciation.
            </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--offwhite) 0%, transparent 15%, transparent 85%, var(--offwhite) 100%), url(/pillars.png) center/cover no-repeat', position: 'relative', paddingTop: 'var(--space-20)' }}>
        <div className="container reveal" ref={gridRef} style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-header__label">Our Pillars</span>
            <h2 className="section-header__title">What Sets Us Apart</h2>
          </div>
          
          <div className="grid grid--2 stagger-wrap" ref={gridItems}>
            <div className="why-card">
              <div className="why-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>NMRDA &amp; RL Approved</h4>
              <p>Every project carries a clear title and official sanction. You receive government-verified documentation at purchase — absolutely zero legal ambiguity.</p>
            </div>
            
            <div className="why-card">
              <div className="why-card__icon" style={{ background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <h4>90% Bank Loan Facility</h4>
              <p>Through our partner banks, eligible buyers can access up to 90% LTV financing. We handle your entire application process end-to-end.</p>
            </div>
            
            <div className="why-card">
              <div className="why-card__icon" style={{ background: 'var(--blue-100)', color: 'var(--blue-500)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Prime Growth Corridors</h4>
              <p>We focus exclusively on high-appreciation zones like Wardha Road, Hingna, and Amravati Road, ensuring your investment grows rapidly.</p>
            </div>

            <div className="why-card">
              <div className="why-card__icon" style={{ background: 'var(--green-100)', color: 'var(--green-600)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4>Certified Expert Team</h4>
              <p>Our agents are certified real estate professionals. From site selection to post-sale registration, we provide premium concierge-level support.</p>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="container reveal" ref={trustRef} style={{ marginTop: 'var(--space-24)', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--green-950)' }}>Trusted by the best in the industry</h3>
          </div>
          <TrustBadges centered />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container reveal" ref={ctaRef}>
          <div className="cta-section">
            <div className="cta-section__content">
              <div className="cta-section__icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </div>
              <div className="cta-section__text">
                <h2>Ready to Make the Right Choice?</h2>
                <p>
                  Join hundreds of happy investors who have secured their future.<br/>
                  Schedule a free site visit today.
                </p>
              </div>
              <div className="cta-section__actions">
                <Link to="/contact" className="btn btn--accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Book a Site Visit
                </Link>
                <a href="https://wa.me/919325650256" className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
