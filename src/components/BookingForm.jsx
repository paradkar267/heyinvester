import { useState } from 'react';
import properties from '../data/properties';

const available = properties.filter(p => p.status !== 'sold');

export default function BookingForm({ preselectedProperty = '' }) {
  const [form, setForm] = useState({ name: '', phone: '', property: preselectedProperty, date: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.property) e.property = 'Select a property';
    if (!form.date) e.date = 'Pick a preferred date';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // ponytail: no backend yet — just show success. Wire to API/webhook later.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', property: '', date: '', message: '' });
  };

  const set = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  return (
    <div className="form-card" style={{ border: '1px solid var(--gray-100)', boxShadow: '0 12px 32px rgba(0,0,0,0.04)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#EAF5EE', color: '#1B4F3A', borderRadius: '12px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        </div>
        <div>
          <h3 className="form-card__title" style={{ marginBottom: '2px', color: 'var(--green-950)' }}>Book a Site Visit</h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', margin: 0 }}>Fill in your details and our team will get in touch with you.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-field__label" htmlFor="bk-name">Full Name</label>
            <div className="input-with-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <input id="bk-name" className="form-field__input" type="text" value={form.name} onChange={set('name')} placeholder="Enter your full name" />
            </div>
            {errors.name && <span className="form-field__error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="bk-phone">Phone Number</label>
            <div className="input-with-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <input id="bk-phone" className="form-field__input" type="tel" value={form.phone} onChange={set('phone')} placeholder="Enter 10-digit mobile number" maxLength={10} />
            </div>
            {errors.phone && <span className="form-field__error">{errors.phone}</span>}
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="bk-property">Property</label>
            <div className="input-with-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <select id="bk-property" className="form-field__select" value={form.property} onChange={set('property')}>
                <option value="">Select a property</option>
                {available.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            {errors.property && <span className="form-field__error">{errors.property}</span>}
          </div>

          <div className="form-field">
            <label className="form-field__label" htmlFor="bk-date">Preferred Date</label>
            <div className="input-with-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <input id="bk-date" className="form-field__input" type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().split('T')[0]} />
            </div>
            {errors.date && <span className="form-field__error">{errors.date}</span>}
          </div>

          <div className="form-field form-field--full" style={{ marginTop: 'var(--space-2)' }}>
            <label className="form-field__label" htmlFor="bk-message">Message (Optional)</label>
            <div className="input-with-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <textarea id="bk-message" className="form-field__input" rows="2" value={form.message} onChange={set('message')} placeholder="Tell us about your requirement..." />
            </div>
          </div>

          <div className="form-field form-field--full" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            <button type="submit" className="btn btn--primary" style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Schedule Visit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gray-500)', fontSize: 'var(--text-xs)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              <span>Your information is safe with us and will never be shared.</span>
            </div>
          </div>
        </div>
      </form>

      {submitted && (
        <div className="form-toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Your visit has been scheduled! We'll call you to confirm.
        </div>
      )}
    </div>
  );
}
