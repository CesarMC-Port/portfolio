import { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="relative h-full border-2 border-white bg-[#0a0a0a] p-8 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/20">
        <div className="absolute inset-0 border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ margin: '4px' }}></div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border-2 border-white transition-all duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider">{title}</h3>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-white/40 bg-[#0a0a0a] px-3 py-1 font-mono text-xs transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:-bottom-2 group-hover:-right-2"></div>
        <div className="absolute -top-1 -left-1 h-8 w-8 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:-top-2 group-hover:-left-2"></div>
      </div>
    </div>
  );
}
