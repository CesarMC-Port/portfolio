import { useEffect, useRef, ReactNode } from 'react';
import anime from 'animejs/lib/anime.es.js';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'scale' | 'slide' | 'rotate' | 'flip';
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  animation = 'scale'
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!cardRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const animations = {
            scale: {
              scale: [0.8, 1],
              opacity: [0, 1],
              easing: 'easeOutElastic(1, .8)',
              duration: 1200,
            },
            slide: {
              translateY: [50, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 800,
            },
            rotate: {
              rotate: [-10, 0],
              scale: [0.9, 1],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1000,
            },
            flip: {
              rotateY: [-90, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1000,
            },
          };

          anime({
            targets: cardRef.current,
            ...animations[animation],
            delay,
          });
        }
      },
      { threshold: 0.2 }
    );

    observerRef.current.observe(cardRef.current);

    return () => {
      if (observerRef.current && cardRef.current) {
        observerRef.current.unobserve(cardRef.current);
      }
    };
  }, [delay, animation]);

  return (
    <div ref={cardRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
