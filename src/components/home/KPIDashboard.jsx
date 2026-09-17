/**
 * KPIDashboard.jsx
 * Sección de KPIs con imagen de fondo.
 */
import React from 'react';
import { homeController } from '../../controllers/homeController';

const KPIDashboard = () => {
  const data = homeController.getKPIDashboardData();

  return (
    <section id="kpis" className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/imagen-propuesta-2.jpeg)' }}
      >
        <div className="absolute inset-0 bg-primary-900/85"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 inline-flex items-center">
            <div className="mr-4 sm:mr-6 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gold-400/20 rounded-lg blur-lg"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center relative z-10">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L4 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12l2 2 2-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            Indicadores de Desempeño
          </h2>
          <div className="mt-6 w-20 h-1 bg-gold-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.kpis.map((kpi) => (
            <div key={kpi.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
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
