import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  const { slug, title, excerpt, coverImage, publishedAt, tags } = post;

  // Format date nicely (e.g. "Jun 15, 2026")
  const dateObj = new Date(publishedAt);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link to={`/blog/${slug}`} className="property-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <div className="property-card__image-wrapper">
        <img 
          src={coverImage} 
          alt={title} 
          className="property-card__image" 
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {tags.slice(0, 2).map(tag => (
            <span key={tag} style={{ background: 'var(--white)', color: 'var(--green-800)', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="property-card__content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: 'var(--space-2)' }}>
          {formattedDate}
        </div>
        <h3 className="property-card__title" style={{ marginBottom: 'var(--space-3)', fontSize: '1.25rem' }}>{title}</h3>
        
        <p style={{ color: 'var(--gray-600)', fontSize: '14px', lineHeight: 1.6, marginBottom: 'var(--space-4)', flexGrow: 1 }}>
          {excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gold-500)', fontWeight: 600, fontSize: '14px', marginTop: 'auto' }}>
          Read Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}
