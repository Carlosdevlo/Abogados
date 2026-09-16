/**
 * EnfoqueEstrategico.jsx
 * Sección de enfoque estratégico con iconos.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const iconMap = {
  1: (
    <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.753l-2.7 2.7 1.414 1.414L12.75 15h-3.75z" />
    </svg>
  ),
  2: (
    <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.049 15.075 12 16.5v-2.51.94a3 3 0 0 1-.55-.324l-.75-.75A3.005 3.005 0 0 1 9 12.049V15.075Zm0 0a3 3 0 1 1-6 0V9.547a3 3 0 0 1 6 0v5.528Z" />
    </svg>
  ),
  3: (
    <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11V3l-9 7Z" />
    </svg>
  ),
};

const EnfoqueEstrategico = () => {
  const data = homeController.getEnfoqueEstrategicoData();

  return (
    <section id="enfoque-estrategico" className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} subtitle="Metodología profesional para resultados excepcionales" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-8 shadow-soft border-t-4 border-gold-500 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-lg bg-primary-50 flex items-center justify-center mb-6">
                {iconMap[item.id] || iconMap[1]}
              </div>
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
