import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogPosts from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const ctaRef = useScrollReveal({ rootMargin: '0px 0px -20px 0px' });
  const relatedRef = useStaggerReveal({ rootMargin: '0px 0px -20px 0px' });

  if (!post) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Post Not Found</h1>
          </div>
        </div>
        <section className="section">
          <div className="container empty-state">
            <h3>We couldn't find that blog post.</h3>
            <Link to="/blog" className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>
              View All Posts
            </Link>
          </div>
        </section>
      </>
    );
  }

  const { title, author, publishedAt, coverImage, tags, content, excerpt } = post;

  const dateObj = new Date(publishedAt);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Find related posts (share at least one tag)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.tags.some(t => tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{title} | Hey Investor Blog</title>
        <meta name="description" content={excerpt} />
      </Helmet>
      
      <div className="page-header reveal" ref={headerRef}>
        <div className="container">
          <h1 className="page-header__title" style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>{title}</h1>
          <div style={{ marginTop: 'var(--space-4)', color: 'var(--green-100)', display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', fontSize: '15px' }}>
            <span>By {author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal" ref={contentRef} style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', boxShadow: '0 8px 32px rgba(15,91,63,0.06)', overflow: 'hidden', border: '1px solid var(--gray-100)' }}>
            
            {/* Cover Image */}
            <div style={{ position: 'relative', width: '100%', background: 'var(--gray-50)', borderBottom: '1px solid var(--gray-100)', display: 'flex', justifyContent: 'center' }}>
              <img src={coverImage} alt={title} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Content Box */}
            <div style={{ padding: 'clamp(var(--space-6), 5vw, var(--space-10))' }}>
              
              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
                {tags.map(tag => (
                  <span key={tag} style={{ background: '#EAF5EE', color: '#1B4F3A', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(27,79,58,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Body Content */}
              <div style={{ fontSize: '17px', color: 'var(--gray-700)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                {content}
              </div>

            </div>
          </div>
          
          {/* Bottom CTA Card */}
          <div className="reveal" ref={ctaRef} style={{ marginTop: 'var(--space-8)' }}>
            <div className="form-card" style={{ textAlign: 'center' }}>
              <h3 className="form-card__title">Interested in investing?</h3>
              <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-6)', fontSize: '16px' }}>
                Our experts are here to help you find the perfect property that aligns with your financial goals.
              </p>
              <Link to="/contact" className="btn btn--primary btn--lg">Book a Site Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <h2 className="section__title" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>Related Posts</h2>
            <div className="grid grid--3 stagger-wrap" ref={relatedRef}>
              {relatedPosts.map(p => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
