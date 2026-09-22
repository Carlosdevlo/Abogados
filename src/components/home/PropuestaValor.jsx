/**
 * PropuestaValor.jsx
 * Sección de propuesta de valor con imagen profesional.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const PropuestaValor = () => {
  const data = homeController.getPropuestaValorData();

  return (
    <section id="propuesta" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {data.items.map((item) => (
              <div key={item.id} className="flex items-start group transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-200 transition-colors duration-300">
                  <span className="text-primary-900 font-bold text-xl">{item.id}</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-2 group-hover:text-gold-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-secondary-100">
            <img
              src="/images/imagen-propuesta-5.jpeg"
              alt="Propuesta de valor DOTASEG"
              className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
