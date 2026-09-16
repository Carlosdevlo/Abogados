/**
 * Logo.jsx
 * Componente de logo DOTASEG - Diseño tecnológico profesional.
 */
import React from 'react';

const Logo = ({ className = "w-48 h-auto", variant = "dark", showIcon = true }) => {
  const textColor = variant === "light" ? "text-white" : "text-primary-900";
  
  return (
    <div className={`inline-flex items-center ${className}`}>
      {showIcon && (
        <div className="mr-3 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gold-400/20 rounded-lg blur-lg"></div>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center relative z-10">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L4 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 12l2 2 2-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}
      <span className={`font-display font-black tracking-tight ${textColor}`}>
        DOTA<span className="text-gold-500">SEG</span>
      </span>
    </div>
  );
};

export default Logo;
