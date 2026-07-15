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
    <Link to={`/blog/${slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', marginBottom: 'var(--space-3)' }}>
        <div style={{ aspectRatio: '1.2/1', overflow: 'hidden', borderRadius: '12px' }}>
          <img 
            src={coverImage} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
            loading="lazy"
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
        <div style={{ position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {tags.slice(0, 2).map(tag => (
            <span key={tag} style={{ background: 'var(--white)', color: 'var(--green-800)', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '6px' }}>
          {formattedDate}
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--green-950)', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '8px' }}>
          {title}
        </h3>
        
        <p style={{ color: 'var(--gray-600)', fontSize: '13px', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
