import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import TrustBadges from '../components/TrustBadges';
import ImageSlider from '../components/ImageSlider';
import properties from '../data/properties';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';

const featured = properties.filter(p => p.status === 'available').slice(0, 3);

export default function Home() {
  const trustRef = useScrollReveal();
  const sectionHeaderRef = useScrollReveal();
  const gridRef = useStaggerReveal();
  const whyHeaderRef = useScrollReveal();
  const whyGridRef = useStaggerReveal();
  const ctaRef = useScrollReveal();
  const videoRef = useStaggerReveal();
  const comingSoonRef = useStaggerReveal();

  return (
    <>
      {/* ── Hero ────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Trusted by 500+ investors across Vidarbha
            </div>
            <h1 className="hero__title">
              Build Your Legacy on<br />Land You Can <em>Trust</em>
            </h1>
            <p className="hero__subtitle">
              Premium, NMRDA &amp; RL approved residential plots in Nagpur's fastest-growing corridors. Secure your future with prime locations and easy 90% bank financing.
            </p>
            <div className="hero__ctas">
              <Link to="/properties" className="btn btn--primary btn--lg">View Properties</Link>
              <Link to="/contact" className="btn btn--accent btn--lg">Book a Site Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ─────────────────────── */}
      <section style={{ marginTop: '-120px', paddingBottom: 'var(--space-4)', position: 'relative', zIndex: 10 }}>
        <div className="container reveal" ref={trustRef}>
          <TrustBadges centered />
        </div>
      </section>

      {/* ── Perfect Property Video Section (Redesigned) ─────────────────────── */}
      <section className="section" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-8)' }}>
        <div className="container">
          <div className="grid grid--2 stagger-wrap" ref={videoRef} style={{ alignItems: 'center', gap: 'var(--space-16)' }}>
            {/* Left: Video & Decorations */}
            <div className="reveal" style={{ position: 'relative', padding: 'var(--space-4) 0' }}>
              {/* Background Shapes */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '65%', height: '70%', background: 'var(--green-800)', borderRadius: '32px 0 0 0', zIndex: 0 }}></div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '60%', height: '70%', background: 'rgba(217,164,65,0.2)', borderRadius: '0 0 32px 0', zIndex: 0 }}></div>
              
              {/* Dots Pattern */}
              <div style={{ position: 'absolute', top: 'var(--space-2)', right: 'var(--space-8)', zIndex: 1, color: 'var(--green-700)', opacity: 0.3 }}>
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dots" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                    <circle fill="currentColor" cx="3" cy="3" r="2"></circle>
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
                </svg>
              </div>

              {/* Video Element */}
              <video 
                src="/newVideo.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ 
                  width: '90%', 
                  marginLeft: '5%', 
                  borderRadius: '24px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
                  position: 'relative', 
                  zIndex: 2, 
                  border: '8px solid #fff',
                  display: 'block'
                }}
              />

              {/* Floating Badge */}
              <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                left: '-5%', 
                background: 'var(--green-800)', 
                color: '#fff', 
                padding: '12px 20px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                zIndex: 3, 
                boxShadow: '0 10px 25px rgba(26,67,49,0.4)' 
              }}>
                <div style={{ background: 'transparent' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <polyline points="17 11 19 13 23 9" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', lineHeight: 1.2 }}>Trusted by 1000+</div>
                  <div style={{ fontSize: '12px', opacity: 0.9, lineHeight: 1.2, marginTop: '2px' }}>Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="reveal" style={{ animationDelay: '0.2s', paddingLeft: 'var(--space-2)' }}>
              <div style={{ color: 'var(--accent-500)', fontSize: '13px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                WHY CHOOSE US
              </div>
              <h2 style={{ marginBottom: 'var(--space-4)', fontSize: '2.5rem', color: 'var(--green-900)', lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>
                The Right Place<br/>for Your Next Move
              </h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent-500)', marginBottom: 'var(--space-6)' }}></div>
              
              <div style={{ color: '#555', marginBottom: 'var(--space-8)', lineHeight: 1.7, fontSize: '15px' }}>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Finding the perfect property can be challenging, but we're here to make it simple, smooth, and rewarding.
                </p>
                <p>
                  At Hey Investor Pvt. Ltd., our expert team understands your unique needs and connects you with the best opportunities in the market. From residential plots to commercial spaces, we offer premium properties in prime locations like Wardha Road, Hingna, and Amravati Road.
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div style={{ background: '#fff', padding: 'var(--space-4)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
                  <div style={{ color: 'var(--green-700)', background: 'rgba(15,91,63,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polygon points="22 13 18 16 20 20 16 18 12 20 14 16 10 13 15 12 16 7 17 12"/></svg>
                  </div>
                  <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '14px', marginBottom: '4px' }}>Expert Guidance</strong>
                  <span style={{ color: '#666', fontSize: '12px', lineHeight: 1.5, display: 'block' }}>Knowledgeable agents with in-depth market insights to help you make the best decisions.</span>
                </div>
                
                <div style={{ background: '#fff', padding: 'var(--space-4)', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.02)' }}>
                  <div style={{ color: 'var(--accent-500)', background: 'rgba(217,164,65,0.1)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  </div>
                  <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '14px', marginBottom: '4px' }}>Commitment to Excellence</strong>
                  <span style={{ color: '#666', fontSize: '12px', lineHeight: 1.5, display: 'block' }}>Ethics, transparency, and quality service are at the heart of everything we do.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Features Strip */}
          <div className="reveal" style={{ animationDelay: '0.4s', marginTop: 'var(--space-12)', background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 8px' }}>
              <div style={{ color: 'var(--green-800)', background: 'rgba(15,91,63,0.08)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div>
                <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '13px', marginBottom: '2px' }}>Wide Range of<br/>Properties</strong>
                <span style={{ color: '#777', fontSize: '11px', lineHeight: 1.3, display: 'block' }}>Residential & Commercial<br/>options for every need</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 8px', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ color: 'var(--green-800)', background: 'rgba(15,91,63,0.08)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '13px', marginBottom: '2px' }}>Prime Locations</strong>
                <span style={{ color: '#777', fontSize: '11px', lineHeight: 1.3, display: 'block' }}>Properties in high-growth<br/>areas with great connectivity</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 8px', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ color: 'var(--green-800)', background: 'rgba(15,91,63,0.08)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3-6 6"/><path d="M8.4 21.6A5.8 5.8 0 0 1 1.5 15l2.77-2.77a6 6 0 0 1 8.49 0l.94.94"/><path d="M17 11l-3 3"/><path d="M12.5 15.5l-3 3"/></svg>
              </div>
              <div>
                <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '13px', marginBottom: '2px' }}>Transparent Deals</strong>
                <span style={{ color: '#777', fontSize: '11px', lineHeight: 1.3, display: 'block' }}>Honest guidance and clear<br/>process every step of the way</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '0 8px', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ color: 'var(--green-800)', background: 'rgba(15,91,63,0.08)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z"/><path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z"/></svg>
              </div>
              <div>
                <strong style={{ color: 'var(--green-900)', display: 'block', fontSize: '13px', marginBottom: '2px' }}>End-to-End Support</strong>
                <span style={{ color: '#777', fontSize: '11px', lineHeight: 1.3, display: 'block' }}>From search to possession,<br/>we're with you always</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Gallery Slider ────────────────────────────── */}
      <ImageSlider />

      {/* ── Coming Soon: Savitri Park ─────────────────────── */}
      <section className="section" style={{ padding: 'var(--space-4) 0 var(--space-8) 0' }}>
        <div className="container">
          <div className="grid grid--2 stagger-wrap" ref={comingSoonRef} style={{ alignItems: 'center', gap: 'var(--space-12)', background: 'var(--green-950)', borderRadius: '32px', padding: 'var(--space-12)', color: 'var(--white)', overflow: 'hidden', position: 'relative' }}>
            {/* Background decorative elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217,164,65,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>

            {/* Left: Text Content */}
            <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', background: 'rgba(217,164,65,0.2)', color: 'var(--gold-400)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 'var(--space-4)', border: '1px solid rgba(217,164,65,0.3)' }}>
                Coming Soon
              </div>
              <h2 style={{ fontSize: '3rem', color: 'var(--white)', marginBottom: 'var(--space-4)', lineHeight: 1.1 }}>
                Savitri Park
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, marginBottom: 'var(--space-6)', maxWidth: '480px' }}>
                Discover an upcoming premium residential layout designed to blend nature's serenity with modern connectivity. Featuring lush green spaces, wide roads, and state-of-the-art infrastructure in a highly sought-after location.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--gold-400)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>NMRDA Approved Premium Layout</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--gold-400)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Strategic Location & Connectivity</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'var(--gold-400)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <span style={{ color: 'rgba(255,255,255,0.9)' }}>Exclusive Pre-Launch Pricing</span>
                </li>
              </ul>
              
              <Link to="/contact" className="btn btn--accent" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Register Interest
              </Link>
            </div>

            {/* Right: Video */}
            <div className="reveal" style={{ position: 'relative', zIndex: 1, animationDelay: '0.2s' }}>
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '6px solid rgba(255,255,255,0.1)' }}>
                <video 
                  src="/video2.mp4" 
                  controls 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  style={{ width: '100%', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Properties ──────────────── */}
      <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
        <div className="container">
          <div className="section-header reveal" ref={sectionHeaderRef}>
            <span className="section-header__label">Featured Listings</span>
            <h2>Available Properties</h2>
            <p>Premium plots with government approvals and loan assistance.</p>
          </div>
          <div className="grid grid--3 stagger-wrap" ref={gridRef}>
            {featured.map(p => <PropertyCard key={p.slug} property={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link to="/properties" className="btn btn--ghost btn--lg">View All Properties →</Link>
          </div>
        </div>
      </section>

      {/* ── Why Hey Investor Teaser ───────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header reveal" ref={whyHeaderRef}>
            <span className="section-header__label">Why Hey Investor</span>
            <h2>Your Trusted Land Investment Partner</h2>
          </div>
          <div className="grid grid--3 stagger-wrap" ref={whyGridRef}>
            <div className="why-card">
              <div className="why-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Government Approved</h4>
              <p>All projects carry NMRDA and RL approval — no legal ambiguity. Clear titles, registered layouts, ready for immediate possession and construction.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon" style={{ background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
              </div>
              <h4>90% Loan Facility</h4>
              <p>Partner bank financing with up to 90% LTV. We assist with documentation, eligibility checks, and the entire loan process end to end.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon" style={{ background: 'var(--blue-100)', color: 'var(--blue-500)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Prime Locations Only</h4>
              <p>Strategically selected plots along Nagpur's key growth corridors — Wardha Road, Hingna, and Amravati Road — backed by infrastructure investment and demand.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
            <Link to="/why-hey-investor" className="btn btn--ghost">Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-section reveal--scale" ref={ctaRef}>
            <div className="cta-section__content">
              <div className="cta-section__icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </div>
              <div className="cta-section__text">
                <h2>Ready to Invest?</h2>
                <p>
                  Schedule a free site visit and see the plots in person.<br/>
                  Our team will guide you through every step —<br/>
                  from selection to registration.
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
