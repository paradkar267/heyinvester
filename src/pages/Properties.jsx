import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import FilterBar, { applyFilters } from '../components/FilterBar';
import propertiesData from '../data/properties';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';

// Import image directly to ensure Vite resolves it
import bgImage from '/properties.png';

const defaultFilters = { location: 'All Locations', budgetIdx: 0, status: 'all' };

export default function Properties() {
  const [filters, setFilters] = useState(defaultFilters);
  const filtered = applyFilters(propertiesData, filters);

  const filterRef = useScrollReveal();
  const gridRef = useStaggerReveal();

  return (
    <>
      {/* ── Full-Width Properties Banner ────────────────────────────── */}
      <div style={{ 
        width: '100%', 
        height: 'clamp(300px, 40vh, 450px)', 
        marginTop: 'var(--nav-height)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Image */}
        <img 
          src={bgImage} 
          alt="Properties Banner" 
          style={{ 
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center',
            display: 'block',
            zIndex: 1
          }} 
        />
        
        {/* Subtle Light Glow for Text Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%)',
          zIndex: 2
        }}></div>

        {/* Centered Text */}
        <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', padding: '0 var(--space-4)' }}>
          <h1 style={{ 
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'var(--text-4xl)', 
            color: 'var(--green-950)', 
            margin: 0,
            letterSpacing: '0.02em',
            fontWeight: '700'
          }}>
            Our Properties
          </h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" ref={filterRef} style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
            <FilterBar filters={filters} onChange={setFilters} />
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid--3 stagger-wrap" ref={gridRef}>
              {filtered.map(p => <PropertyCard key={p.slug} property={p} />)}
            </div>
          ) : (
            <div className="empty-state animate-in">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3>No properties match your filters</h3>
              <p style={{ marginTop: 'var(--space-2)' }}>Try adjusting your location, budget, or status filters.</p>
              <button className="btn btn--ghost" style={{ marginTop: 'var(--space-4)' }} onClick={() => setFilters(defaultFilters)}>
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
