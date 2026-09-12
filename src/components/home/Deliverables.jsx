/**
 * Deliverables.jsx
 * Sección de entregables.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const Deliverables = () => {
  const data = homeController.getDeliverablesData();

  return (
    <section id="deliverables" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold text-primary-900 mb-2">
                {item.title}
              </h3>
              <p className="text-secondary-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
