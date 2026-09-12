/**
 * PropuestaValor.jsx
 * Sección de propuesta de valor.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="card-gold-border">
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-secondary-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
