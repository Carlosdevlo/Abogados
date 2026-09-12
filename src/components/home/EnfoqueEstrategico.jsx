/**
 * EnfoqueEstrategico.jsx
 * Sección de enfoque estratégico.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const EnfoqueEstrategico = () => {
  const data = homeController.getEnfoqueEstrategicoData();

  return (
    <section id="enfoque-estrategico" className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-8 shadow-soft border-t-4 border-gold-500">
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

export default EnfoqueEstrategico;
