'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div className="counter-card" ref={ref}>
      <div className="num">
        {display}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Counter;
