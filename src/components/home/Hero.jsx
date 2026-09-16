/**
 * Hero.jsx
 * Sección principal.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import Button from '../common/Button';

const Hero = () => {
  const data = homeController.getHeroData();

  return (
    <section id="hero" className="pt-16 lg:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full mb-6">
              {data.slogan}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-secondary-600 mb-8 max-w-xl">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" href="#propuesta" size="lg">
                {data.primaryCTA}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" href="#contacto" size="lg">
                {data.secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Right Image - Professional */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-secondary-100">
              <img
                src="/images/imagen-propuesta-1.jpeg"
                alt="Análisis de riesgos y seguros"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-soft">
                <p className="text-primary-900 font-semibold text-sm">Gestión de riesgos especializada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
