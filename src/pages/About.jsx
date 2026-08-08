import { Link } from 'react-router-dom';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';
import TrustBadges from '../components/TrustBadges';
import SEO from '../components/SEO';

const team = [
  { name: 'Gyaneshwar Singh Thakur', initials: 'GST', image: '/thakur.jpeg', role: 'Sales Head', bio: 'Specialises in land acquisition, regulatory approvals, and project planning.' },
  { name: 'Nandlal Tandekar', initials: 'NT', image: '/tandekar.png', role: 'Founder & Director', bio: 'Over 15 years of real estate experience across Nagpur and Vidarbha.' },
  { name: 'Sushilkumar Dongarwar', initials: 'SD', image: '/sushil.jpeg', role: 'Operational Head', bio: 'Trusted advisor to 200+ investors. Expert in plot selection and financing.' },
];

export default function About() {
  const teamHeaderRef = useScrollReveal();
  const teamGridRef = useStaggerReveal();
  const trustRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const gridItems = useStaggerReveal('.why-card');

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Hey Investor. We are dedicated to providing premium, trusted, and legally approved real estate solutions in Nagpur."
      />
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
              <div className="section-header" style={{ textAlign: 'left', marginBottom: 'var(--space-6)' }}>
                <div className="story-badge">
                  OUR STORY
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17 8C17 5.24 14.76 3 12 3C9.24 3 7 5.24 7 8C7 11.42 9.54 14.4 11 16.92C11.39 17.6 12.61 17.6 13 16.92C14.46 14.4 17 11.42 17 8Z" /><path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <h2 className="story-title">Local Expertise,<br /><span className="text-green">Real Results</span></h2>
                <div className="story-divider">
                  <div className="story-diamond"></div>
                </div>
              </div>
              <div style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-8)' }}>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Hey Investor Pvt. Ltd. is a Nagpur-based real estate firm focused exclusively on <strong>approved residential and commercial plots</strong> in Vidarbha's high-growth corridors. Every project we offer carries <strong>NMRDA or RL approval</strong> — because land investment should come with certainty, not risk.
                </p>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Founded by industry veterans with deep roots in the region, we combine local market knowledge with transparent, investor-first service. From plot selection and documentation to bank loan facilitation, we handle the entire journey.
                </p>
                <p>
                  With projects across <strong>Wardha Road, Hingna,</strong> and <strong>Amravati Road,</strong> we're positioned in exactly the areas where Nagpur is growing fastest.
                </p>
              </div>

              <div className="promise-box">
                <div className="promise-box__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /><path d="M12 22V12" /></svg>
              </div>
              <div className="promise-box__text">
                <h4>Our Promise</h4>
                <p>Trusted plots. Transparent deals. Timely delivery.<br />Your future, our commitment.</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="values-grid-new">
            {/* Card 01 */}
            <div className="value-card-new">
              <div className="value-card-new__content">
                <div className="value-card-new__header">
                  <div className="value-card-new__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <div className="value-card-new__number">01</div>
                </div>
                <h4 className="value-card-new__title">
                  100% Approved
                  <span className="value-card-new__leaf">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor"><path d="M0 6h12m8 0h12" strokeWidth="1" /><path d="M16 2C14 2 12.5 4.5 16 9C19.5 4.5 18 2 16 2Z" fill="currentColor" stroke="none" /></svg>
                  </span>
                </h4>
                <p className="value-card-new__desc">We only list NMRDA & RL cleared plots.<br />No legal hassles, ever.</p>
              </div>
              <div className="value-card-new__image">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80" alt="Approved Stamp" />
              </div>
            </div>

            {/* Card 02 */}
            <div className="value-card-new">
              <div className="value-card-new__content">
                <div className="value-card-new__header">
                  <div className="value-card-new__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div className="value-card-new__number">02</div>
                </div>
                <h4 className="value-card-new__title">
                  Prime Locations
                  <span className="value-card-new__leaf">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor"><path d="M0 6h12m8 0h12" strokeWidth="1" /><path d="M16 2C14 2 12.5 4.5 16 9C19.5 4.5 18 2 16 2Z" fill="currentColor" stroke="none" /></svg>
                  </span>
                </h4>
                <p className="value-card-new__desc">Focused on high-growth corridors<br />like Wardha & Amravati Road.</p>
              </div>
              <div className="value-card-new__image">
                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=80" alt="Prime Locations" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="value-card-new">
              <div className="value-card-new__content">
                <div className="value-card-new__header">
                  <div className="value-card-new__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                  </div>
                  <div className="value-card-new__number">03</div>
                </div>
                <h4 className="value-card-new__title">
                  End-to-end Support
                  <span className="value-card-new__leaf">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor"><path d="M0 6h12m8 0h12" strokeWidth="1" /><path d="M16 2C14 2 12.5 4.5 16 9C19.5 4.5 18 2 16 2Z" fill="currentColor" stroke="none" /></svg>
                  </span>
                </h4>
                <p className="value-card-new__desc">From plot selection to financing and<br />final registration, we handle everything.</p>
              </div>
              <div className="value-card-new__image">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80" alt="End-to-end Support" />
              </div>
            </div>

            {/* Card 04 */}
            <div className="value-card-new">
              <div className="value-card-new__content">
                <div className="value-card-new__header">
                  <div className="value-card-new__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div className="value-card-new__number">04</div>
                </div>
                <h4 className="value-card-new__title">
                  Transparent
                  <span className="value-card-new__leaf">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor"><path d="M0 6h12m8 0h12" strokeWidth="1" /><path d="M16 2C14 2 12.5 4.5 16 9C19.5 4.5 18 2 16 2Z" fill="currentColor" stroke="none" /></svg>
                  </span>
                </h4>
                <p className="value-card-new__desc">Clear pricing, no hidden charges.<br />What you see is exactly what you pay.</p>
              </div>
              <div className="value-card-new__image">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80" alt="Transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >

      {/* Office Expert */}
      <section style={{ position: 'relative', padding: '0', background: '#fafafa', overflow: 'hidden' }}>
        {/* Background cityscape */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', background: 'url(/hero-bg.png) center/cover no-repeat', opacity: 0.15, zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, paddingTop: 'var(--space-12)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', color: 'var(--gold-600)', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
                <div style={{ height: '1px', width: '30px', background: 'var(--gold-300)' }}></div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                EXPERT GUIDANCE
                <div style={{ height: '1px', width: '30px', background: 'var(--gold-300)' }}></div>
              </div>
              
              <h2 style={{ fontSize: '3.5rem', fontFamily: '"Playfair Display", serif', color: 'var(--green-950)', marginBottom: '12px' }}>Our Office Expert</h2>
              
              <div style={{ color: 'var(--gold-500)', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                <svg width="40" height="20" viewBox="0 0 40 20" fill="currentColor">
                  <path d="M20 0C20 0 16 8 10 10C16 12 20 20 20 20C20 20 24 12 30 10C24 8 20 0 20 0Z" />
                </svg>
              </div>

              <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--gray-600)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                At Hey Investor Pvt. Ltd., we believe that expert guidance is key to making informed and confident real estate decisions. Meet our dedicated office expert, a seasoned professional with a wealth of knowledge and a passion for helping clients navigate the complexities of the real estate market.
              </p>
            </div>
          </div>
        </div>

        {/* Green Wave Divider */}
        <div style={{ position: 'relative', width: '100%', height: '80px', zIndex: 1, marginTop: '20px', marginBottom: '30px' }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
            <path d="M-10,40 C320,90 420,-10 720,20 C1020,50 1120,90 1450,40" fill="none" stroke="var(--green-900)" strokeWidth="16" />
            <path d="M-10,30 C320,80 420,-20 720,10 C1020,40 1120,80 1450,30" fill="none" stroke="var(--gold-400)" strokeWidth="3" />
          </svg>
        </div>

        {/* Cards Section */}
        <div style={{ position: 'relative', paddingBottom: 'var(--space-20)', zIndex: 1 }}>
          <div className="container">
            <div className="grid grid--2" style={{ gap: 'var(--space-8)' }}>
              
              {/* Card 1 */}
              <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 32px 32px 48px', display: 'flex', gap: '24px', alignItems: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20px', background: 'var(--green-900)', clipPath: 'polygon(0 0, 100% 0, 60% 50%, 100% 100%, 0 100%)' }}></div>
                <div style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '50%', background: '#fff', boxShadow: '0 8px 24px rgba(15,91,63,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-900)', position: 'relative', zIndex: 1 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--green-100) 1.5px, transparent 1.5px)', backgroundSize: '6px 6px', zIndex: -1, opacity: 0.6, borderRadius: '50%' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: 'var(--green-950)', marginBottom: '10px' }}>In-Depth Knowledge</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'var(--gold-500)', transform: 'rotate(45deg)' }}></div>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>With extensive experience in the real estate industry, our expert is well-versed in market trends, property values, and the nuances of property transactions.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 32px 32px 48px', display: 'flex', gap: '24px', alignItems: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20px', background: 'var(--green-900)', clipPath: 'polygon(0 0, 100% 0, 60% 50%, 100% 100%, 0 100%)' }}></div>
                <div style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '50%', background: '#fff', boxShadow: '0 8px 24px rgba(15,91,63,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-900)', position: 'relative', zIndex: 1 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--green-100) 1.5px, transparent 1.5px)', backgroundSize: '6px 6px', zIndex: -1, opacity: 0.6, borderRadius: '50%' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: 'var(--green-950)', marginBottom: '10px' }}>Personalized Assistance</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'var(--gold-500)', transform: 'rotate(45deg)' }}></div>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Whether you're buying your first home, investing in commercial property, or seeking the perfect plot, our office expert provides tailored advice to meet your unique needs.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 32px 32px 48px', display: 'flex', gap: '24px', alignItems: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20px', background: 'var(--green-900)', clipPath: 'polygon(0 0, 100% 0, 60% 50%, 100% 100%, 0 100%)' }}></div>
                <div style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '50%', background: '#fff', boxShadow: '0 8px 24px rgba(15,91,63,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-900)', position: 'relative', zIndex: 1 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--green-100) 1.5px, transparent 1.5px)', backgroundSize: '6px 6px', zIndex: -1, opacity: 0.6, borderRadius: '50%' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: 'var(--green-950)', marginBottom: '10px' }}>Seamless Process</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'var(--gold-500)', transform: 'rotate(45deg)' }}></div>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>From initial consultation to finalizing the deal, our expert ensures a smooth and hassle-free experience, handling all the details with precision and care.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div style={{ position: 'relative', background: '#fff', borderRadius: '16px', padding: '32px 32px 32px 48px', display: 'flex', gap: '24px', alignItems: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '20px', background: 'var(--green-900)', clipPath: 'polygon(0 0, 100% 0, 60% 50%, 100% 100%, 0 100%)' }}></div>
                <div style={{ flexShrink: 0, width: '80px', height: '80px', borderRadius: '50%', background: '#fff', boxShadow: '0 8px 24px rgba(15,91,63,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-900)', position: 'relative', zIndex: 1 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--green-100) 1.5px, transparent 1.5px)', backgroundSize: '6px 6px', zIndex: -1, opacity: 0.6, borderRadius: '50%' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: 'var(--green-950)', marginBottom: '10px' }}>Trust and Reliability</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'var(--gold-500)', transform: 'rotate(45deg)' }}></div>
                    <div style={{ height: '1px', width: '30px', background: 'var(--gold-400)' }}></div>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Our office expert embodies the core values of Hey Investor Pvt. Ltd. – integrity, transparency, and commitment to excellence.</p>
                </div>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--green-900)', marginBottom: 'var(--space-3)' }}>Ready to make your real estate dreams a reality?</h3>
              <p style={{ color: 'var(--gray-600)', maxWidth: '600px', margin: '0 auto' }}>Reach out to our office expert today and embark on a journey towards securing your ideal property with confidence and ease.</p>
            </div>
          </div>
        </div>
      </section>

  {/* Team */ }
  < section className = "section" style = {{ background: 'linear-gradient(135deg, var(--green-950) 0%, var(--green-900) 100%)', position: 'relative', overflow: 'hidden', padding: 'calc(var(--space-20) + 20px) 0' }}>
    {/* Decorative background elements */ }
    < div style = {{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url(/hero-bg.png) center/cover no-repeat', opacity: 0.1, zIndex: 0 }}></div >
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', background: 'rgba(217,164,65,0.15)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.05)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ marginBottom: 'var(--space-16)' }}>
            <span className="section-header__label" style={{ color: 'var(--gold-500)', background: 'rgba(217,164,65,0.15)', border: '1px solid rgba(217,164,65,0.2)' }}>Our Team</span>
            <h2 style={{ color: 'var(--white)' }}>Meet the People Behind Hey Investor</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>A dedicated team of experts committed to your real estate success and financial growth.</p>
          </div>
          <div className="grid grid--3">
            {team.map(({ name, initials, image, role, bio }, idx) => (
              <div key={name} className="team-card" style={{
                border: idx === 1 ? '2px solid var(--gold-400)' : '1px solid rgba(255,255,255,0.8)',
                boxShadow: idx === 1 ? '0 24px 48px rgba(0,0,0,0.3)' : '0 12px 32px rgba(0,0,0,0.15)',
                position: 'relative',
                zIndex: idx === 1 ? 2 : 1,
                paddingTop: idx === 1 ? 'var(--space-10)' : 'var(--space-8)'
              }}>
                {idx === 1 && (
                  <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--gold-500), var(--gold-400))', color: 'var(--green-950)', fontSize: '12px', fontWeight: 800, padding: '6px 20px', borderRadius: '30px', letterSpacing: '1.5px', textTransform: 'uppercase', boxShadow: '0 8px 16px rgba(217,164,65,0.3)' }}>
                    Leadership
                  </div>
                )}
                <div className="team-card__avatar" style={{ border: idx === 1 ? '4px solid var(--gold-100)' : '4px solid var(--green-50)', width: idx === 1 ? '130px' : '110px', height: idx === 1 ? '130px' : '110px', marginBottom: 'var(--space-6)' }}>
                  {image ? <img src={image} alt={name} /> : initials}
                </div>
                <h4 className="team-card__name" style={{ color: 'var(--green-950)', fontSize: idx === 1 ? '1.5rem' : '1.25rem', marginBottom: 'var(--space-2)' }}>{name}</h4>
                <div className="team-card__role" style={{ color: 'var(--gold-600)', fontWeight: 800, letterSpacing: '0.5px', fontSize: '0.85rem', textTransform: 'uppercase' }}>{role}</div>
                <p className="team-card__bio" style={{ color: 'var(--gray-600)', marginTop: 'var(--space-4)', fontSize: '0.95rem', lineHeight: 1.6 }}>{bio}</p>
                <div className="team-card__actions" style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: 'auto', paddingTop: 'var(--space-6)' }}>
                  <a href="https://wa.me/919325650256" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gray-200)', color: '#25D366', transition: 'all 0.2s', textDecoration: 'none', background: 'var(--white)' }} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/heyinvestor_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gray-200)', color: '#E1306C', transition: 'all 0.2s', textDecoration: 'none', background: 'var(--white)' }} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/hey-investor-pvt-ltd-official/" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--gray-200)', color: '#0A66C2', transition: 'all 0.2s', textDecoration: 'none', background: 'var(--white)' }} target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

  {/* Mission & Vision */ }
  < section className = "section" style = {{ background: '#FAFAFA' }}>
    <div className="container">
      <div className="grid grid--2" style={{ gap: 'var(--space-8)' }}>
        {/* Mission Card */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: 'var(--space-10)', boxShadow: '0 12px 32px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--green-50)', borderRadius: '0 0 0 100%', zIndex: 0, transition: 'transform 0.4s ease', opacity: 0.7 }} className="hover-scale"></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '20px', background: 'var(--green-100)', color: 'var(--green-700)', marginBottom: 'var(--space-6)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
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
      </section >

  {/* Feature Grid (from Why Us) */ }
  < section className = "section" style = {{ background: 'linear-gradient(to bottom, var(--offwhite) 0%, transparent 15%, transparent 85%, var(--offwhite) 100%), url(/pillars.png) center/cover no-repeat', position: 'relative', paddingTop: 'var(--space-20)' }}>
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
        <span className="section-header__label">Our Pillars</span>
        <h2 className="section-header__title">What Sets Us Apart</h2>
      </div>

      <div className="grid grid--2">
        <div className="why-card">
          <div className="why-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <h4>NMRDA &amp; RL Approved</h4>
          <p>Every project carries a clear title and official sanction. You receive government-verified documentation at purchase — absolutely zero legal ambiguity.</p>
        </div>

        <div className="why-card">
          <div className="why-card__icon" style={{ background: 'var(--gold-100)', color: 'var(--gold-600)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
          </div>
          <h4>90% Bank Loan Facility</h4>
          <p>Through our partner banks, eligible buyers can access up to 90% LTV financing. We handle your entire application process end-to-end.</p>
        </div>

        <div className="why-card">
          <div className="why-card__icon" style={{ background: 'var(--blue-100)', color: 'var(--blue-500)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
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

{/* Trust Strip */ }
<div className="container" style={{ marginTop: 'var(--space-24)', position: 'relative', zIndex: 2 }}>
  <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
    <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--green-950)' }}>Trusted by the best in the industry</h3>
  </div>
  <TrustBadges centered />
</div>
      </section >





  {/* CTA Section */ }
  < section className = "section" style = {{ paddingTop: 0 }}>
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
      </section >
    </>
  );
}
