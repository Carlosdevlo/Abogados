/**
 * Header.jsx
 * Navegación principal - Header fijo con fondo primary-900.
 */
import React, { useState, useEffect } from 'react';
import { navigationModel } from '../../models/navigationModel';

const Header = () => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg border-b border-gold-500/30' : 'bg-primary-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Imagen del logo de la empresa */}
          <div className="flex items-center">
            <img
              src="/images/Logo.jpg"
              alt="Logo DOTASEG"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationModel.mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="nav-link text-white hover:text-gold-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="btn-gold text-sm px-6 py-2.5"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
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
        <div className="lg:hidden bg-primary-800 border-t border-gold-500/30">
          <div className="px-4 py-4 space-y-2">
            {navigationModel.mainNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-3 text-white hover:bg-primary-700 rounded-lg transition-colors"
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
