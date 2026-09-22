/**
 * SectionTitle.jsx
 * Título de sección - con línea decorativa dorada y tipografía refinada.
 */
import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'left', className = '', titleClassName = '' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-20 h-1 bg-gold-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
