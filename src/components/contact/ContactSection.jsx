/**
 * ContactSection.jsx
 * Sección de contacto con diseño profesional.
 */
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactInfo from '../contact/ContactInfo';
import ContactForm from '../contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contáctanos" subtitle="Estamos listos para atender tu consulta" align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="bg-secondary-50 rounded-2xl p-8 lg:p-10 shadow-soft border border-secondary-100">
            <h3 className="text-xl font-display font-bold text-primary-900 mb-8">
              Información de Contacto
            </h3>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-card border border-secondary-100 p-8">
            <h3 className="text-xl font-display font-bold text-primary-900 mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Map / Image with overlay */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-card border border-secondary-100 relative h-64 sm:h-80 lg:h-[400px]">
          <img
            src="/images/imagen-propuesta-7.jpeg"
            alt="Oficina DOTASEG - Gestión profesional de riesgos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/40 to-transparent flex items-center">
            <div className="p-8 sm:p-12 lg:p-16 w-full max-w-2xl">
              <span className="inline-block px-4 py-2 bg-gold-500 text-primary-900 text-xs font-semibold rounded-full mb-4">
                Asesoría especializada
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Protegemos tu futuro con soluciones integrales
              </h3>
              <p className="text-secondary-200 text-sm sm:text-base">
                DOTASEG S.A.S. cuenta con un equipo de profesionales especializados en gestión de riesgos y seguros corporativos. Estamos contigo para proteger lo que más importa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
