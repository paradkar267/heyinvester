import { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/blogPosts';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';

// Reusing an image for the blog banner
import bgImage from '/properties.png';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract unique tags for the filter
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === 'All') return blogPosts;
    return blogPosts.filter(post => post.tags.includes(selectedTag));
  }, [selectedTag]);

  const filterRef = useScrollReveal();
  const gridRef = useStaggerReveal();

  return (
    <>
      <SEO 
        title="Blog & Insights"
        description="Latest updates, market trends, and real estate insights from Hey Investor."
      />
      {/* ── Full-Width Blog Banner ────────────────────────────── */}
      <div className="page-header page-header--blog animate-in" style={{ backgroundImage: 'url(/blogbg.png)' }}>
        <div className="container">
          <h1 className="page-header__title" style={{ fontSize: 'var(--text-4xl)' }}>Our Blog</h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" ref={filterRef} style={{ marginTop: '32px', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  border: '1px solid ' + (selectedTag === tag ? 'var(--green-800)' : 'var(--gray-200)'),
                  background: selectedTag === tag ? 'var(--green-800)' : 'var(--white)',
                  color: selectedTag === tag ? 'var(--white)' : 'var(--gray-700)',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid--3 stagger-wrap" ref={gridRef} style={{ marginTop: 'var(--space-8)' }}>
              {filteredPosts.map(post => <BlogCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <div className="empty-state animate-in" style={{ marginTop: 'var(--space-8)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3>No posts match your filter</h3>
              <p style={{ marginTop: 'var(--space-2)' }}>Try selecting a different topic.</p>
              <button className="btn btn--ghost" style={{ marginTop: 'var(--space-4)' }} onClick={() => setSelectedTag('All')}>
                View All Posts
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
