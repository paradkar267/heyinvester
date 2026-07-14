const locations = ['All Locations', 'Wardha Road', 'Hingna', 'Amravati Road'];
const budgets = [
  { label: 'Any Budget', min: 0, max: Infinity },
  { label: 'Under ₹1,500/sqft', min: 0, max: 1500 },
  { label: '₹1,500 – ₹2,000/sqft', min: 1500, max: 2000 },
  { label: 'Above ₹2,000/sqft', min: 2000, max: Infinity },
];
const statuses = ['all', 'available', 'coming-soon', 'sold'];
const statusLabels = { all: 'All', available: 'Available', 'coming-soon': 'Coming Soon', sold: 'Sold' };

export default function FilterBar({ filters, onChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__group">
        <label className="filter-bar__label">Location</label>
        <select
          className="filter-bar__select"
          value={filters.location}
          onChange={e => onChange({ ...filters, location: e.target.value })}
        >
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label">Budget</label>
        <select
          className="filter-bar__select"
          value={filters.budgetIdx}
          onChange={e => onChange({ ...filters, budgetIdx: Number(e.target.value) })}
        >
          {budgets.map((b, i) => <option key={i} value={i}>{b.label}</option>)}
        </select>
      </div>

      <div className="filter-bar__group">
        <label className="filter-bar__label">Status</label>
        <div className="filter-bar__chips">
          {statuses.map(s => (
            <button
              key={s}
              className={`filter-chip${filters.status === s ? ' filter-chip--active' : ''}`}
              onClick={() => onChange({ ...filters, status: s })}
            >
              {statusLabels[s]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper — apply filters to properties array
export function applyFilters(properties, filters) {
  const budget = budgets[filters.budgetIdx] || budgets[0];
  return properties.filter(p => {
    if (filters.location !== 'All Locations' && p.area !== filters.location) return false;
    if (filters.status !== 'all' && p.status !== filters.status) return false;
    if (p.pricePerSqft !== null && (p.pricePerSqft < budget.min || p.pricePerSqft > budget.max)) return false;
    // Include null-priced (coming soon) in "any budget"
    if (p.pricePerSqft === null && filters.budgetIdx !== 0) return false;
    return true;
  });
}
