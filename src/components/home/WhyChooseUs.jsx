import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const iconMap = {
  1: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.616 2.518A11.58 11.58 0 0112 20.25a11.58 11.58 0 01-7.616-2.872M4.35 9.672A8.965 8.965 0 013.75 12c0 2.932 1.345 5.578 3.459 7.537M4.35 9.672L3 11.4l1.35-1.728v-.001zm14.7-.992a7.5 7.5 0 11-10.5-1.05L7.5 6l.033.033a.75.75 0 011.06-.06L12 8.94l3.907-3.907a.75.75 0 011.06.06v.001l-1.35 1.728v.001z" />
    </svg>
  ),
  2: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-9V3l-9 7z" />
    </svg>
  ),
  3: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3l3-3v9H9V9h3V6h-3v6zm0 0V6" />
    </svg>
  ),
  4: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20v-2a4 4 0 00-3-3.87M9 7h.01M9 7a3 3 0 116 0m-6 0v1a3 3 0 016 0V7" />
    </svg>
  ),
  5: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.023 12.023 0 0120.5 9" />
    </svg>
  ),
  6: (
    <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h2.5a2 2 0 002-2v7l-2-2m-2 2h-2m2-2v-2m-2 2H9a2 2 0 110-4h2a2 2 0 012 2v2z" />
    </svg>
  ),
};

const WhyChooseUs = () => {
  const data = homeController.getWhyChooseUsData();

  return (
    <section id="por-que-elegirnos" className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group border border-secondary-100 hover:border-gold-200">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-100 transition-colors duration-300">
                {iconMap[item.id]}
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3 group-hover:text-gold-700 transition-colors duration-300">
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

export default WhyChooseUs;
