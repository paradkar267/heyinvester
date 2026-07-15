import { useParams, Link } from 'react-router-dom';
import properties from '../data/properties';
import BookingForm from '../components/BookingForm';
import TrustBadges from '../components/TrustBadges';
import useScrollReveal from '../hooks/useScrollReveal';

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = properties.find(p => p.slug === slug);

  const headerRef = useScrollReveal();
  const heroRef = useScrollReveal();
  const infoRef = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const formRef = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });

  if (!property) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Property Not Found</h1>
          </div>
        </div>
        <section className="section">
          <div className="container empty-state">
            <h3>We couldn't find that property.</h3>
            <Link to="/properties" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>
              View All Properties
            </Link>
          </div>
        </section>
      </>
    );
  }

  const { name, location, area, pricePerSqft, plotSizes, type, status, approvals, loanEligible, description, image, additionalDetails, features } = property;
  const statusLabel = { available: 'Available', 'coming-soon': 'Coming Soon', sold: 'Sold' }[status];

  return (
    <>
      <div className="page-header reveal" ref={headerRef}>
        <div className="container">
          <h1 className="page-header__title">{name}</h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
        <div className="container">
          <div className="detail-grid" style={{ alignItems: 'start' }}>
            {/* Left — Info */}
            <div className="reveal--left" ref={infoRef} style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', boxShadow: '0 8px 32px rgba(15,91,63,0.06)', overflow: 'hidden', border: '1px solid var(--gray-100)' }}>
              
              {/* Image Hero inside Card */}
              <div style={{ position: 'relative', width: '100%', background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'center' }}>
                <img src={image} alt={`${name} — ${location}`} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }} />
                <div className={`property-card__status property-card__status--${status}`} style={{ position: 'absolute', top: 'var(--space-4)', left: 'var(--space-4)', fontSize: '13px', padding: '6px 16px', borderRadius: '4px', zIndex: 2 }}>
                  {statusLabel}
                </div>
              </div>

              {/* Content Box */}
              <div style={{ padding: 'var(--space-8)' }}>
                {/* Header (Price & Type Badge) */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                  {pricePerSqft ? (
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--green-900)', lineHeight: 1 }}>
                      ₹{pricePerSqft.toLocaleString('en-IN')} <span style={{ fontSize: '1.5rem', color: 'var(--green-900)' }}>/ sq.ft.</span>
                    </span>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--green-900)', lineHeight: 1 }}>
                      Price on Request
                    </span>
                  )}
                  <span style={{ display: 'inline-flex', padding: '6px 16px', background: '#EAF5EE', color: '#1B4F3A', borderRadius: 'var(--radius-full)', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(27,79,58,0.1)' }}>
                    {type === 'mixed' ? 'Commercial / Residential' : 'Residential Plot'}
                  </span>
                </div>

                <div style={{ fontSize: '15px', color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 'var(--space-8)', whiteSpace: 'pre-wrap' }}>
                  {description}
                </div>

              </div>
            </div>

            {/* Right — Booking Form */}
            <div className="reveal--right" ref={formRef} style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
              {status !== 'sold' ? (
                <BookingForm preselectedProperty={slug} />
              ) : (
                <div className="form-card" style={{ textAlign: 'center' }}>
                  <h3 className="form-card__title">This Property is Sold</h3>
                  <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
                    All plots in {name} have been sold. Check out our other available properties.
                  </p>
                  <Link to="/properties" className="btn btn--primary">View Available Properties</Link>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Information Section (Below Form) */}
          <div style={{ marginTop: 'var(--space-12)', background: 'var(--white)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', boxShadow: '0 8px 32px rgba(15,91,63,0.06)', border: '1px solid var(--gray-100)' }}>
            
            {/* Horizontal Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
              
              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Location</div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>{location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="3"/><rect x="14" y="7" width="3" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Area</div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>{area}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Plot Sizes</div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>{plotSizes.join(', ')} sq.ft.</div>
                </div>
              </div>

              {pricePerSqft && (
                <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                  <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Price Range</div>
                    <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>₹{(pricePerSqft * Math.min(...plotSizes)).toLocaleString('en-IN')} - ₹{(pricePerSqft * Math.max(...plotSizes)).toLocaleString('en-IN')}</div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 15 9"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Approvals</div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>{approvals.length ? approvals.join(', ') : 'Pending'}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Loan Facility</div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-800)', fontSize: '15px' }}>{typeof loanEligible === 'string' ? loanEligible : (loanEligible ? 'Yes — up to 90% LTV' : 'Not available')}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-3)' }}>
                <div style={{ background: 'var(--green-50)', padding: '8px', borderRadius: '8px', color: 'var(--green-800)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '13px' }}>Status</div>
                  <div style={{ fontWeight: 700, color: 'var(--green-900)', fontSize: '15px' }}>{statusLabel}</div>
                </div>
              </div>

            </div>

            {/* Additional Details & Features */}
            {(additionalDetails || features) && (
              <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 'var(--space-8)', marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                {additionalDetails && additionalDetails.length > 0 && (
                  <div>
                    <h4 style={{ color: 'var(--gray-900)', marginBottom: 'var(--space-4)' }}>Additional Details</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-3)' }}>
                      {additionalDetails.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', padding: '12px', background: 'var(--gray-50)', borderRadius: '8px', border: '1px solid var(--gray-100)' }}>
                          <span style={{ fontSize: '12px', color: 'var(--gray-500)', marginBottom: '4px' }}>{detail.label}</span>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--gray-800)' }}>{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {features && features.length > 0 && (
                  <div>
                    <h4 style={{ color: 'var(--gray-900)', marginBottom: 'var(--space-4)' }}>Features & Amenities</h4>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-3)', margin: 0, padding: 0, listStyle: 'none' }}>
                      {features.map((feature, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--gray-700)' }}>
                          <svg style={{ color: 'var(--green-600)', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Trust Badges */}
            <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 'var(--space-6)', marginTop: 'var(--space-8)' }}>
              <TrustBadges centered />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
