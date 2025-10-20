import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface AnimatedLogoProps {
  text: string;
  className?: string;
}

export function AnimatedLogo({ text, className = '' }: AnimatedLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;

    anime({
      targets: logoRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .6)',
    });

    const handleMouseEnter = () => {
      anime({
        targets: logoRef.current,
        rotate: [0, 360],
        scale: [1, 1.1, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      });
    };

    const currentLogo = logoRef.current;
    currentLogo?.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      currentLogo?.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={logoRef}
      className={className}
      style={{ transformOrigin: 'center' }}
    >
      {text}
    </div>
  );
}
