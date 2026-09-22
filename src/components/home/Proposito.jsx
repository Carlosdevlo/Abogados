/**
 * Proposito.jsx
 * Sección de propósito - Video profesional como elemento visual.
 */
import React, { useRef, useEffect, useState } from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const Proposito = () => {
  const data = homeController.getPropositoData();
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const icons = {
    'Datos': (
      <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3l3-3v9H9V9h3V6h-3v6zm0 0V6"></path>
      </svg>
    ),
    'Tecnología': (
      <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18V3m0 0L8 7m4-4l4 4z"></path>
      </svg>
    ),
    'Derecho de Seguros': (
      <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 012 2h14a2 2 0 012-2V9a2 2 0 012-2h14a2 2 0 002-2z"></path>
      </svg>
    ),
    'Alertas Tempranas': (
      <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m-3-3l-3 3m3-3V8a4 4 0 11-4 4H8"></path>
      </svg>
    ),
  };

  return (
    <section id="proposito" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto lg:mx-0">
              {data.text}
            </p>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-secondary-100">
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="/images/imagen-propuesta-3.jpeg"
                onError={() => setVideoError(true)}
                className="w-full h-64 sm:h-80 object-cover"
              >
                <source src="/images/Video2.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/images/imagen-propuesta-3.jpeg"
                alt="Propósito DOTASEG - Gestión de riesgos"
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.items.map((item) => (
            <div key={item.id} className="text-center bg-white rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-secondary-100 hover:border-gold-200 group">
              <div className="w-20 h-20 mx-auto bg-gold-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-200 transition-colors duration-300">
                {icons[item.name] || ''}
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                {item.name}
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

export default Proposito;
