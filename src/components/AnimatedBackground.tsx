import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const particles = containerRef.current.querySelectorAll('.particle');

    anime({
      targets: particles,
      translateX: () => anime.random(-200, 200),
      translateY: () => anime.random(-200, 200),
      easing: 'linear',
      duration: 8000,
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(30, { grid: [10, 10], from: 'center' })
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 h-full"
    >
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
