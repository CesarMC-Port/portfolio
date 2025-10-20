import { AnimatedCounter } from './AnimatedCounter';
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  // Delay para sincronizar la tarjeta y las esquinas
  const delay = `${index * 200}ms`;

  return (
    <div
      className="relative border-2 border-white bg-[#0a0a0a] p-4 text-center transition-all duration-300 animate-pulse-scale"
      style={{ animationDelay: delay }}
    >
      {/* Esquinas animadas: usamos variables CSS --dx y --dy para controlar la dirección */}
      <div
        className="absolute -top-1 -left-1 h-6 w-6 border-t-2 border-l-2 border-white animate-pulse-corner"
        style={
          {
            ['--dx' as any]: -1,
            ['--dy' as any]: -1,
            ['--dist' as any]: '3px',
            animationDelay: delay,
          } as React.CSSProperties
        }
      />
      <div
        className="absolute -top-1 -right-1 h-6 w-6 border-t-2 border-r-2 border-white animate-pulse-corner"
        style={
          {
            ['--dx' as any]: 1,
            ['--dy' as any]: -1,
            ['--dist' as any]: '3px',
            animationDelay: delay,
          } as React.CSSProperties
        }
      />
      <div
        className="absolute -bottom-1 -left-1 h-6 w-6 border-b-2 border-l-2 border-white animate-pulse-corner"
        style={
          {
            ['--dx' as any]: -1,
            ['--dy' as any]: 1,
            ['--dist' as any]: '3px',
            animationDelay: delay,
          } as React.CSSProperties
        }
      />
      <div
        className="absolute -bottom-1 -right-1 h-6 w-6 border-b-2 border-r-2 border-white animate-pulse-corner"
        style={
          {
            ['--dx' as any]: 1,
            ['--dy' as any]: 1,
            ['--dist' as any]: '3px',
            animationDelay: delay,
          } as React.CSSProperties
        }
      />

      <AnimatedCounter value={value} className="mb-2 text-4xl font-bold" />

      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="h-px w-8 bg-white/40"></div>
        <div className="h-1.5 w-1.5 rotate-45 border border-white/60"></div>
        <div className="h-px w-8 bg-white/40"></div>
      </div>

      <div className="font-mono text-[16px] text-white">{label}</div>
    </div>
  );
}
