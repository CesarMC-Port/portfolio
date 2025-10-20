import { ExternalLink, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  image: string;
  url?: string;
  url2?: string;
  index: number;
}

interface ProjectCardProps {
  project: ProjectProps;
  index?: number
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, date, status, index, image, url, url2 } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative overflow-hidden border-2 border-white bg-[#0a0a0a] transition-all duration-500 hover:shadow-lg hover:shadow-white/20"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute z-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-opacity duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      )}

      <div className="relative grid lg:grid-cols-[60%_40%]">
        <div className="relative overflow-hidden border-b lg:border-r lg:border-b-0 border-white/20 bg-gray-900/20 p-8 lg:p-12">
          <div className="absolute inset-0">
            <div className="before:bg-gray-800 after:bg-gray-800 relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-6">
              <h3 className="text-3xl font-bold lg:text-4xl">{title}</h3>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-1 bg-white" style={{width: '32px'}}></div>
                <div className="h-1 bg-white/60" style={{width: '16px'}}></div>
                <div className="h-1 bg-white/30" style={{width: '8px'}}></div>
              </div>
            </div>
            <div className="mb-6">
              <div className="group/image relative">
                <div className="border-white/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all duration-300 group-hover:-top-3 group-hover:-left-3"></div>
                <div className="border-white/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all duration-300 group-hover:-top-3 group-hover:-right-3"></div>
                <div className="border-white/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all duration-300 group-hover:-bottom-3 group-hover:-left-3"></div>
                <div className="border-white/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all duration-300 group-hover:-right-3 group-hover:-bottom-3"></div>
                <div className="bg-[#0a0a0a] relative overflow-hidden border-2 border-white">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-700 scale-[1.1] group-hover:scale-[1.2]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <time className="text-white/60 font-mono text-xs">{date}</time>
            <div className="bg-gray-800 h-4 w-px"></div>
            <div className="inline-flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full animate-pulse ${status === 'COMPLETED' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
              <span className="text-white/60 font-mono text-xs uppercase">{status}</span>
            </div>
          </div>

          <p className="text-white/60 mb-6 text-sm leading-relaxed md:text-base">
            {description}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="border border-white/40 bg-[#0a0a0a] font-mono text-xs px-3 py-1 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {url && <a
              href={url}
              target='_blank'
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-300 bg-[#0a0a0a] hover:bg-gray-900 hover:scale-105 h-10 rounded-md px-6 border-2 border-white/20 font-medium group/btn"
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
              Website {url2 && '1'}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>}
            {url2 && <a
              href={url2}
              target='_blank'
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-300 bg-[#0a0a0a] hover:bg-gray-900 hover:scale-105 h-10 rounded-md px-6 border-2 border-white/20 font-medium group/btn"
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
              Website 2
              <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>}
          </div>

          <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg] pointer-events-none">
            <div className="border-white/80 from-white via-white/90 to-transparent -ml-[4px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1"></div>
            <div className="border-white/80 from-white via-white/90 to-transparent -ml-[8px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3"></div>
            <div className="border-white/80 from-white via-white/90 to-transparent -ml-[12px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5"></div>
            <div className="border-white/80 from-white via-white/90 to-transparent -ml-[16px] h-12 w-full border-t bg-gradient-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
