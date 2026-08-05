import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import FilterBar, { applyFilters } from '../components/FilterBar';
import propertiesData from '../data/properties';
import useScrollReveal, { useStaggerReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';

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
      <SEO 
        title="Our Properties"
        description="Explore our available and upcoming premium plots in Nagpur and Vidarbha. NMRDA & RL approved with 90% bank finance available."
      />
      {/* ── Full-Width Properties Banner ────────────────────────────── */}
      <div className="page-header page-header--properties animate-in" style={{ backgroundImage: 'url(/properties.png)' }}>
        <div className="container">
          <h1 className="page-header__title" style={{ fontSize: 'var(--text-4xl)' }}>Our Properties</h1>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" ref={filterRef} style={{ marginTop: '32px', position: 'relative', zIndex: 10 }}>
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
