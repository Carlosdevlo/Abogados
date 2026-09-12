/**
 * KPIDashboard.jsx
 * Sección de KPIs.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const KPIDashboard = () => {
  const data = homeController.getKPIDashboardData();

  return (
    <section id="kpis" className="py-16 lg:py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" className="text-white" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.kpis.map((kpi) => (
            <div key={kpi.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="text-4xl lg:text-5xl font-display font-bold text-gold-400 mb-2">
                {kpi.value}
              </div>
              <p className="text-white/80 text-sm mb-2">
                {kpi.label}
              </p>
              <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-300 text-xs font-semibold rounded-full">
                {kpi.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIDashboard;
