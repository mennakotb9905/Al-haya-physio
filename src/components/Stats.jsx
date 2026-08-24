import React, { useState, useEffect, useRef } from 'react';

function Counter({ targetValue, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          
          let startTime = null;
          const duration = 2000; // 2 seconds

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function (outQuad)
            const easeProgress = progress * (2 - progress);
            const currentVal = Math.floor(easeProgress * targetValue);
            
            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [targetValue]);

  // Format count to Arabic Eastern numerals ('ar-EG')
  const formattedCount = count.toLocaleString('ar-EG') + suffix;

  return (
    <div className="stat-num" ref={elementRef}>
      {formattedCount}
    </div>
  );
}

export default function Stats() {
  const statsList = [
    { icon: 'fa-solid fa-user-tie', val: 25, suffix: '+', label: 'سنة من الخبرة والتميز' },
    { icon: 'fa-solid fa-hospital-user', val: 8000, suffix: '', label: 'حالة تم علاجها بنجاح' },
    { icon: 'fa-solid fa-heart-pulse', val: 98, suffix: '', label: '% نسبة رضا المرضى' },
    { icon: 'fa-solid fa-building-shield', val: 19, suffix: '', label: 'شركة تأمين متعاقد معها' },
  ];

  return (
    <section className="stats-section">
      <div className="container stats-container">
        {statsList.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-icon">
              <i className={stat.icon}></i>
            </div>
            <Counter targetValue={stat.val} suffix={stat.suffix} />
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
