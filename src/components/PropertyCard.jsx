import { Link } from 'react-router-dom';

const statusLabel = { available: 'Available', 'coming-soon': 'Coming Soon', sold: 'Sold' };

export default function PropertyCard({ property }) {
  const { slug, name, location, pricePerSqft, plotSizes, type, status, approvals, loanEligible, image } = property;

  return (
    <article className="property-card">
      <div className="property-card__image">
        <img src={image} alt={`${name} — ${location}`} loading="lazy" />
        <span className={`property-card__status property-card__status--${status}`}>
          {statusLabel[status]}
        </span>
      </div>

      <div className="property-card__body">
        <div className="property-card__price">
          {pricePerSqft ? `₹${pricePerSqft.toLocaleString('en-IN')} / sq.ft.` : status === 'sold' ? 'Sold' : 'Price TBD'}
        </div>
        <h3 className="property-card__name">{name}</h3>
        <div className="property-card__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {location}
        </div>

        <div className="property-card__tags">
          {approvals.map(a => (
            <span key={a} className="property-card__tag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {a}
            </span>
          ))}
          {loanEligible && (
            <span className="property-card__tag property-card__tag--gold">90% Loan</span>
          )}
        </div>

        <div className="property-card__footer">
          <div className="property-card__meta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            {plotSizes.join(' / ')} sq.ft. · {type === 'mixed' ? 'Commercial / Residential' : 'Residential'}
          </div>
          <Link to={`/properties/${slug}`} className="property-card__link">
            View
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
