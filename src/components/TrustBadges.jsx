const badges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'NMRDA Approved',
    sublabel: 'Government certified',
    modifier: '',
    active: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4"/>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'RL Approved',
    sublabel: 'Revenue layout cleared',
    modifier: '',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/>
      </svg>
    ),
    label: '90% Loan Facility',
    sublabel: 'Partner bank financing',
    modifier: '--gold',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Prime Locations',
    sublabel: 'Wardha Rd, Hingna, Amravati Rd',
    modifier: '--blue',
  },
];

export default function TrustBadges({ centered = false }) {
  return (
    <div className={`trust-strip${centered ? ' trust-strip--centered' : ''}`}>
      {badges.map(({ icon, label, sublabel, modifier, active }) => (
        <div key={label} className={`trust-badge${active ? ' trust-badge--active' : ''}`}>
          <div className={`trust-badge__icon${modifier ? ` trust-badge__icon${modifier}` : ''}`}>
            {icon}
          </div>
          <div>
            <div className="trust-badge__label">{label}</div>
            <div className="trust-badge__sublabel">{sublabel}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
