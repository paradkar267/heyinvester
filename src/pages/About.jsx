import { Link } from 'react-router-dom';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';
import TrustBadges from '../components/TrustBadges';

const team = [
  { name: 'Nandlal Sahu', initials: 'NS', image: '/tandekar.png', role: 'Founder & Director', bio: 'Over 15 years of real estate experience across Nagpur and Vidarbha.' },
  { name: 'Gyaneshwar Sahu', initials: 'GS', image: '/thakur.jpeg', role: 'Co-Director', bio: 'Specialises in land acquisition, regulatory approvals, and project planning.' },
  { name: 'Sushil Hatwar', initials: 'SH', image: '/sushil.jpeg', role: 'Sales Head', bio: 'Trusted advisor to 200+ investors. Expert in plot selection and financing.' },
  { name: 'Vishal Lute', initials: 'VL', image: '/vishal.jpeg', role: 'Operations Manager', bio: 'Manages site development, documentation, and customer coordination.' },
];

export default function About() {
  const teamHeaderRef = useScrollReveal();
  const teamGridRef = useStaggerReveal();
  const trustRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const gridItems = useStaggerReveal('.why-card');

  return (
    <>
      <div className="page-header page-header--properties animate-in" style={{ backgroundImage: 'url(/properties.png)' }}>
        <div className="container">
          <h1 className="page-header__title" style={{ fontSize: 'var(--text-4xl)' }}>About Hey Investor</h1>
        </div>
      </div>

      {/* Story & Values */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'center' }}>
            {/* Story Text */}
            <div style={{ paddingRight: 'var(--space-8)' }}>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                <span className="section-header__label">Our Story</span>
                <h2>Local Expertise, Real Results</h2>
              </div>
              <div style={{ fontSize: 'var(--text-lg)', color: 'var(--gray-600)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Hey Investor Pvt. Ltd. is a Nagpur-based real estate firm focused exclusively on <strong>approved residential and commercial plots</strong> in Vidarbha's high-growth corridors. Every project we offer carries NMRDA or RL approval — because land investment should come with certainty, not risk.
                </p>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Founded by industry veterans with deep roots in the region, we combine local market knowledge with transparent, investor-first service. From plot selection and documentation to bank loan facilitation, we handle the entire journey.
                </p>
                <p>
                  With projects across Wardha Road, Hingna, and Amravati Road, we're positioned in exactly the areas where Nagpur is growing fastest.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="about-values">
              <div className="about-value-card">
                <div className="about-value-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <span className="about-value-card__number">01</span>
                <h4>100% Approved</h4>
                <div className="about-value-card__divider"></div>
                <p>We only list NMRDA & RL cleared plots. No legal hassles, ever.</p>
              </div>
              <div className="about-value-card" style={{ transform: 'translateY(24px)' }}>
                <div className="about-value-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <span className="about-value-card__number">02</span>
                <h4>Prime Locations</h4>
                <div className="about-value-card__divider"></div>
                <p>Focused on high-growth corridors like Wardha & Amravati Road.</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
                <span className="about-value-card__number">03</span>
                <h4>End-to-end Support</h4>
                <div className="about-value-card__divider"></div>
                <p>From plot selection to financing and final registration, we handle everything.</p>
              </div>
              <div className="about-value-card" style={{ transform: 'translateY(24px)' }}>
                <div className="about-value-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                </div>
                <span className="about-value-card__number">04</span>
                <h4>Transparent</h4>
                <div className="about-value-card__divider"></div>
                <p>Clear pricing, no hidden charges. What you see is exactly what you pay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Expert */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Expert Guidance</span>
            <h2>Our Office Expert</h2>
            <p className="section-header__desc" style={{ maxWidth: '800px', margin: '0 auto var(--space-10)' }}>
              At Hey Investor Pvt. Ltd., we believe that expert guidance is key to making informed and confident real estate decisions. Meet our dedicated office expert, a seasoned professional with a wealth of knowledge and a passion for helping clients navigate the complexities of the real estate market.
            </p>
          </div>

          <div className="grid grid--2" style={{ marginBottom: 'var(--space-12)', textAlign: 'left', gap: 'var(--space-6)' }}>
            <div style={{ background: '#fff', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(15,91,63,0.05)', border: '1px solid var(--gray-100)' }}>
              <h4 style={{ color: 'var(--green-900)', marginBottom: 'var(--space-2)' }}>In-Depth Knowledge</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>With extensive experience in the real estate industry, our expert is well-versed in market trends, property values, and the nuances of property transactions.</p>
            </div>
            <div style={{ background: '#fff', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(15,91,63,0.05)', border: '1px solid var(--gray-100)' }}>
              <h4 style={{ color: 'var(--green-900)', marginBottom: 'var(--space-2)' }}>Personalized Assistance</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>Whether you're buying your first home, investing in commercial property, or seeking the perfect plot, our office expert provides tailored advice to meet your unique needs.</p>
            </div>
            <div style={{ background: '#fff', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(15,91,63,0.05)', border: '1px solid var(--gray-100)' }}>
              <h4 style={{ color: 'var(--green-900)', marginBottom: 'var(--space-2)' }}>Seamless Process</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>From initial consultation to finalizing the deal, our expert ensures a smooth and hassle-free experience, handling all the details with precision and care.</p>
            </div>
            <div style={{ background: '#fff', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 12px rgba(15,91,63,0.05)', border: '1px solid var(--gray-100)' }}>
              <h4 style={{ color: 'var(--green-900)', marginBottom: 'var(--space-2)' }}>Trust and Reliability</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', margin: 0 }}>Our office expert embodies the core values of Hey Investor Pvt. Ltd. – integrity, transparency, and commitment to excellence.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--green-900)', marginBottom: 'var(--space-3)' }}>Ready to make your real estate dreams a reality?</h3>
            <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>Reach out to our office expert today and embark on a journey towards securing your ideal property with confidence and ease.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Our Team</span>
            <h2>Meet the People Behind Hey Investor</h2>
          </div>
          <div className="grid grid--4">
            {team.map(({ name, initials, image, role, bio }) => (
              <div key={name} className="team-card">
                <div className="team-card__avatar">
                  {image ? <img src={image} alt={name} /> : initials}
                </div>
                <h4 className="team-card__name">{name}</h4>
                <div className="team-card__role">{role}</div>
                <p className="team-card__bio">{bio}</p>
                <div className="team-card__actions">
                  <a href="tel:+919325650256" className="btn btn--ghost" style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-2) var(--space-3)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    Call
                  </a>
                  <a href="https://wa.me/919325650256" className="btn btn--whatsapp" style={{ fontSize: 'var(--text-xs)', padding: 'var(--space-2) var(--space-3)' }} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: '#FAFAFA' }}>
        <div className="container">
          <div className="grid grid--2" style={{ gap: 'var(--space-8)' }}>
            {/* Mission Card */}
            <div style={{ background: '#fff', borderRadius: '24px', padding: 'var(--space-10)', boxShadow: '0 12px 32px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--green-50)', borderRadius: '0 0 0 100%', zIndex: 0, transition: 'transform 0.4s ease', opacity: 0.7 }} className="hover-scale"></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '20px', background: 'var(--green-100)', color: 'var(--green-700)', marginBottom: 'var(--space-6)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--green-900)', marginBottom: 'var(--space-2)', letterSpacing: '-0.02em' }}>Our Mission</h3>
                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--gold-500)', marginBottom: 'var(--space-5)', fontStyle: 'italic' }}>Empowering Dreams, Building Futures</h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-4)', fontSize: '1.05rem' }}>
                  At Hey Investor Pvt. Ltd., our mission is to empower individuals and families to own their dream properties in the vibrant city of Nagpur. We recognize that real estate is more than just transactions; it's about securing a future, creating wealth, and establishing a place where cherished memories are made.
                </p>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  We are steadfast in our commitment to ethics, transparency, and quality, ensuring that each property we offer is a true testament to our dedication to excellence. Our goal is to provide you with not just a house, but a home where dreams are nurtured and futures are built.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div style={{ background: '#fff', borderRadius: '24px', padding: 'var(--space-10)', boxShadow: '0 12px 32px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--gold-50)', borderRadius: '0 0 0 100%', zIndex: 0, transition: 'transform 0.4s ease', opacity: 0.7 }} className="hover-scale"></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '20px', background: 'var(--gold-100)', color: 'var(--gold-600)', marginBottom: 'var(--space-6)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--green-900)', marginBottom: 'var(--space-2)', letterSpacing: '-0.02em' }}>Our Vision</h3>
                <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--gold-500)', marginBottom: 'var(--space-5)', fontStyle: 'italic' }}>Redesigning Skylines, Enriching Lives</h4>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-4)', fontSize: '1.05rem' }}>
                  At Hey Investor Pvt. Ltd., our vision is to reshape Nagpur's skyline through innovative and sustainable real estate developments. We aim to create vibrant communities that go beyond bricks and mortar, becoming hubs where lives are enriched, connections are fostered, and aspirations find a solid foundation.
                </p>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  We are dedicated to offering residential and commercial plots in prime locations such as Wardha Road, Hingna, and Amravati Road. Through these developments, we strive to create spaces that reflect the dreams and ambitions of our clients, contributing to a future where every property is a step towards a better life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (from Why Us) */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--offwhite) 0%, transparent 15%, transparent 85%, var(--offwhite) 100%), url(/pillars.png) center/cover no-repeat', position: 'relative', paddingTop: 'var(--space-20)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-header__label">Our Pillars</span>
            <h2 className="section-header__title">What Sets Us Apart</h2>
          </div>
          
          <div className="grid grid--2">
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
        <div className="container" style={{ marginTop: 'var(--space-24)', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--green-950)' }}>Trusted by the best in the industry</h3>
          </div>
          <TrustBadges centered />
        </div>
      </section>





      {/* CTA Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-section">
            <div className="cta-section__content">
              <div className="cta-section__icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </div>
              <div className="cta-section__text">
                <h2>Ready to Start Your Investment Journey?</h2>
                <p>
                  Speak directly with our founders and property experts.<br />
                  We'll help you find the perfect plot for your goals.
                </p>
              </div>
              <div className="cta-section__actions">
                <Link to="/contact" className="btn btn--accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  Book a Site Visit
                </Link>
                <a href="https://wa.me/919325650256" className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
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
