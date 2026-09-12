/**
 * Hero.jsx
 * Sección principal.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import Button from '../common/Button';
import { getCorporateImage } from '../../utils/imagePlaceholder.js';

const Hero = () => {
  const data = homeController.getHeroData();
  const heroImage = getCorporateImage('hero');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Right Image - Responsive */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/hero-image.jpg"
                alt="Análisis de riesgos"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover object-center"
              />
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
