import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogPosts from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';
import React from 'react';

// Custom component to render the parsed markdown-like content
function CustomContentRenderer({ content }) {
  const blocks = content.split('\n\n').map(b => b.trim()).filter(Boolean);
  
  const renderedBlocks = [];
  let currentList = [];

  const flushList = () => {
    if (currentList.length > 0) {
      renderedBlocks.push(
        <div key={`list-${renderedBlocks.length}`} style={{ position: 'relative', paddingLeft: '24px', margin: 'var(--space-6) 0 var(--space-8)' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '11px', top: '30px', bottom: '24px', width: '2px', background: 'var(--gray-200)', zIndex: 0 }}></div>
          
          {currentList.map((item, idx) => {
            const match = item.match(/^\d+\.\s+\*\*(.*?)\*\*(.*)/);
            if (match) {
              const [, title, desc] = match;
              return (
                <div key={idx} style={{ position: 'relative', marginBottom: 'var(--space-6)', paddingLeft: '24px' }}>
                  {/* Circle number */}
                  <div style={{ position: 'absolute', left: '-33px', top: '2px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--green-800)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', zIndex: 1, boxShadow: '0 0 0 6px var(--white)' }}>
                    {idx + 1}
                  </div>
                  <h4 style={{ color: 'var(--gray-900)', fontSize: '17px', marginBottom: '4px', fontWeight: 'bold' }}>{title.replace(/:$/, '')}</h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{desc.trim()}</p>
                </div>
              );
            }
            return <p key={idx}>{item}</p>;
          })}
        </div>
      );
      currentList = [];
    }
  };

  blocks.forEach((block, index) => {
    if (block.match(/^\d+\.\s+\*\*/)) {
      currentList.push(block);
    } else {
      flushList();

      if (block.startsWith('### ')) {
        const lines = block.split('\n');
        const headingText = lines[0].replace('### ', '').trim();
        const remainingText = lines.slice(1).join('\n').trim();
        
        renderedBlocks.push(
          <div key={index + '-heading'} style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 'var(--space-8) 0 var(--space-6)' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--green-800)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--gray-900)', margin: 0, fontWeight: 700 }}>{headingText}</h3>
            <div style={{ flex: 1, borderBottom: '2px dashed var(--gray-200)' }}></div>
          </div>
        );

        if (remainingText) {
          const renderTextWithBold = () => {
              const parts = remainingText.split(/(\*\*.*?\*\*)/g);
              return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} style={{ color: 'var(--gray-900)' }}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
              });
          };
          renderedBlocks.push(
            <p key={index + '-p'} style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              {renderTextWithBold()}
            </p>
          );
        }
      } else if (index === blocks.length - 1 && block.length > 50) {
        const cleanText = block.replace(/\*\*(.*?)\*\*/g, '$1');
        renderedBlocks.push(
          <div key={index} style={{ background: '#EAF5EE', borderRadius: '8px', padding: '24px', display: 'flex', gap: '20px', alignItems: 'center', marginTop: 'var(--space-10)' }}>
            <div style={{ color: 'var(--green-700)', alignSelf: 'flex-start', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p style={{ color: 'var(--gray-800)', fontSize: '14px', lineHeight: 1.6, margin: 0, flex: 1 }}>{cleanText}</p>
            <div style={{ color: 'var(--green-700)', flexShrink: 0 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
          </div>
        );
      } else {
        const renderTextWithBold = () => {
            const parts = block.split(/(\*\*.*?\*\*)/g);
            return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} style={{ color: 'var(--gray-900)' }}>{part.slice(2, -2)}</strong>;
                }
                return part;
            });
        };
        renderedBlocks.push(
          <p key={index} style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
            {renderTextWithBold()}
          </p>
        );
      }
    }
  });

  flushList();

  return <>{renderedBlocks}</>;
}

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
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.tags.some(t => tags.includes(t)))
    .slice(0, 3);

  // Estimate read time
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200) + ' min read';

  return (
    <>
      <Helmet>
        <title>{title} | Hey Investor Blog</title>
        <meta name="description" content={excerpt} />
      </Helmet>
      
      {/* Custom Hero mimicking the screenshot */}
      <div className="reveal" style={{ paddingTop: '120px', paddingBottom: '40px', background: 'var(--white)', overflow: 'hidden' }} ref={headerRef}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--gray-500)', marginBottom: 'var(--space-6)', fontWeight: 500 }}>
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span style={{ color: 'var(--green-700)' }}>{tags[0]}</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--green-950)', lineHeight: 1.1, marginBottom: 'var(--space-6)', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>

          {/* Meta Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: 'var(--gray-600)', fontSize: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>By {author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>{formattedDate}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <section style={{ paddingBottom: 'var(--space-12)', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="reveal" ref={contentRef}>
            {/* Cover Image */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <img src={coverImage} alt={title} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '24px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
            </div>

            {/* Tags (Below image) */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
              {tags.map(tag => (
                <span key={tag} style={{ background: '#F0F7F3', color: '#1B4F3A', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(27,79,58,0.1)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Body Content */}
            <div style={{ maxWidth: '800px' }}>
              <CustomContentRenderer content={content} />
            </div>
          </div>
          
          {/* Bottom CTA Card */}
          <div className="reveal" ref={ctaRef} style={{ marginTop: 'var(--space-12)' }}>
            <div className="form-card" style={{ textAlign: 'center', background: 'var(--gray-50)', border: '1px solid var(--gray-200)', boxShadow: 'none' }}>
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
        <section className="section" style={{ background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
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
