/**
 * Portfolio.jsx
 * Sección Ajuste Masivo de Hogar con imagen profesional.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const Portfolio = () => {
  const data = homeController.getPortfolioData();

  return (
    <section id="portafolio" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} subtitle={data.subtitle} align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-secondary-600 mb-8">
              {data.description}
            </p>
            <h4 className="text-lg font-display font-bold text-primary-900 mb-6">
              Beneficios
            </h4>
            <ul className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group transition-all duration-300">
                  <svg className="w-6 h-6 mr-3 text-gold-500 flex-shrink-0 mt-0.5 group-hover:text-gold-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700 group-hover:text-primary-900 transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card border border-secondary-100">
              <img
                src="/images/imagen-propuesta-6.jpeg"
                alt="Ajuste Masivo de Hogar"
                className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
