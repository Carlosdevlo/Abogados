/**
 * Logo.jsx
 * Componente de logo DOTASEG - Identidad visual corporativa elegante.
 */
import React from 'react';

const sizeClasses = {
  sm: { img: 'h-8 w-auto', text: 'text-lg', gap: 'gap-3' },
  md: { img: 'h-12 w-auto', text: 'text-xl', gap: 'gap-4' },
  lg: { img: 'h-16 w-auto', text: 'text-2xl', gap: 'gap-4' },
  xl: { img: 'h-24 w-auto', text: 'text-3xl', gap: 'gap-6' },
  xxl: { img: 'h-32 w-auto', text: 'text-4xl', gap: 'gap-6' },
  xxxl: { img: 'h-40 w-auto', text: 'text-5xl', gap: 'gap-8' },
};

const Logo = ({ className = '', variant = 'dark', showText = true, size = 'md', centered = false, noEffect = false }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900';
  const s = sizeClasses[size] || sizeClasses.md;
  const flexAlign = centered ? 'flex-col items-center' : 'items-center';
  const ringOpacity = noEffect ? 'border-gold-500/50' : 'border-gold-200/40';
  const shadow = noEffect ? 'shadow-soft' : 'shadow-soft';

  return (
    <div className={`inline-flex ${flexAlign} ${s.gap} ${className}`}>
      <div
        className={`relative flex-shrink-0 rounded-xl bg-white p-2 border-2 transition-all duration-300 ${ringOpacity} ${shadow}`}
      >
        <img
          src="/images/Logo.jpeg"
          alt="Logo DOTASEG S.A.S."
          className={`${s.img} object-contain`}
          loading="eager"
        />
      </div>
      {showText && (
        <span className={`font-display font-black tracking-tight ${textColor} ${s.text}`}>
          DOTA<span className="text-gold-500">SEG</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
