/**
 * Hero.jsx
 * Sección principal - Logo grande, estático y centrado como elemento visual.
 * Logo grande con efecto dorado + mensaje principal + llamada a la acción.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import Button from '../common/Button';

const Hero = () => {
  const data = homeController.getHeroData();

  return (
    <section id="hero" className="pt-16 lg:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12 lg:py-20">
          {/* Logo grande con efecto dorado - elemento visual principal */}
          <div className="flex flex-col items-center mb-12 animate-slide-up">
            <div className="relative">
              {/* Anillo de luz dorada sutil */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-200/40 via-gold-100/20 to-secondary-100/10 blur-xl opacity-70"></div>
              <div className="absolute -inset-2 rounded-full bg-gold-400/10 blur-2xl"></div>

              {/* Contenedor del logo con borde dorado */}
              <div className="relative rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-gold border-2 border-gold-200/40">
                <img
                  src="/images/Logo.jpeg"
                  alt="Logo DOTASEG S.A.S."
                  className="h-32 sm:h-40 md:h-48 w-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>

            {/* Texto institucional */}
            <span className="mt-6 text-3xl sm:text-4xl font-display font-black text-primary-900 tracking-tight">
              DOTA<span className="text-gold-500">SEG</span>
            </span>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full mb-6">
              {data.slogan}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" href="#propuesta" size="lg">
                {data.primaryCTA}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outlineGold" href="#contacto" size="lg">
                {data.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
