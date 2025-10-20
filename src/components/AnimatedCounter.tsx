import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
          const suffix = value.replace(/[0-9.]/g, '');

          if (!isNaN(numericValue)) {
            const obj = { value: 0 };

            anime({
              targets: obj,
              value: numericValue,
              duration,
              easing: 'easeOutExpo',
              round: 1,
              update: () => {
                setDisplayValue(Math.floor(obj.value) + suffix);
              },
            });
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [value, duration]);

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
}
