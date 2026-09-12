/**
 * Button.jsx
 * Botón reutilizable.
 */
import React from 'react';

const Button = ({ variant = 'primary', href, size = 'md', children, onClick, type = 'button' }) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary-900 hover:bg-primary-800 text-white shadow-soft hover:shadow-card transform hover:-translate-y-0.5',
    gold: 'bg-gold-500 hover:bg-gold-400 text-primary-900 shadow-soft hover:shadow-gold transform hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
    ghost: 'bg-transparent text-secondary-700 hover:text-primary-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
