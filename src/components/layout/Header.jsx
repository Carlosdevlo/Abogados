/**
 * Header.jsx
 * Navegación principal - Header fijo.
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationModel } from '../../models/navigationModel';
import { companyModel } from '../../models/companyModel';
import dotasegLogo from '../../utils/imagePlaceholder.js';

const Header = () => {
  const logo = dotasegLogo.getLogo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Responsive */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center overflow-hidden bg-white p-2 shadow-sm border border-gold-200">
                <img src="/images/dotaseg-logo.jpg" alt="DOTASEG S.A.S. Logo" className="w-full h-full object-contain" style={{ filter: 'brightness(1.2)' }} />
              </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-primary-900 leading-none">
                {companyModel.name}
              </h1>
              <p className="text-xs text-secondary-500 leading-none mt-0.5">
                {companyModel.slogan}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationModel.mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="btn-gold text-sm px-5 py-2.5"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-secondary-100">
          <div className="px-4 py-4 space-y-2">
            {navigationModel.mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-3 text-secondary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a href="#contacto" className="btn-gold w-full text-center block">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
