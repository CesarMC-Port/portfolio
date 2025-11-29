import { animate, random, stagger } from 'animejs';

export function calculateMousePosition(e: MouseEvent, rect: DOMRect) {
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

export function initParticles(container: HTMLElement) {
    const particles = container.querySelectorAll(".particle");

    const loopAnimation = () => {
        animate(particles, {
            translateX: () => random(-200, 200),
            translateY: () => random(-200, 200),
            ease: "linear",
            duration: 8000,
            onComplete: () => loopAnimation(),
            delay: stagger(30, { grid: [10, 10], from: "center" }),
        })
    }

    loopAnimation();
}

export function initTiltCard(card: HTMLElement) {
    let rotateX = 0;
    let rotateY = 0;

    const updateTransform = () => {
        card.style.transform =
        `perspective(200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        rotateX = ((y - centerY) / centerY) * -5;
        rotateY = ((x - centerX) / centerX) * 5;

        updateTransform();
    });

    card.addEventListener("mouseleave", () => {
        rotateX = 0;
        rotateY = 0;
        updateTransform();
    });
}
