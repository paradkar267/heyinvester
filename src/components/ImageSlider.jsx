import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const images = [
  '/6.png',
  '/7.png',
  '/8.png',
  '/9.png',
  '/10.png',
  '/11.png',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="section" style={{ 
      paddingTop: 'calc(var(--space-16) + 40px)', 
      paddingBottom: 'var(--space-16)',
      marginTop: '-40px',
      borderRadius: '60px 60px 0 0',
      background: 'url(/posterbg.png) center/cover no-repeat',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 2,
      boxShadow: '0 -10px 30px rgba(0,0,0,0.05)'
    }}>
      {/* Decorative Blur Backgrounds */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'rgba(217,164,65,0.1)', filter: 'blur(80px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', filter: 'blur(60px)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: 'var(--space-2)' }}>Featured Projects</h2>
          <p style={{ color: 'var(--green-100)', maxWidth: '600px', margin: '0 auto' }}>
            Discover our premium plots and exclusive offerings across the best locations.
          </p>
        </div>
        
        <div className="slider-wrapper reveal" ref={sliderRef}>
          
          {/* Navigation Arrows (Outside) */}
          <button className="slider-arrow slider-arrow-left" onClick={goToPrev} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          
          <button className="slider-arrow slider-arrow-right" onClick={goToNext} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Image Container */}
          <div className="slider-container">
            {images.map((src, index) => (
              <div
                key={index}
                className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img src={src} alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Dots (Below) */}
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
