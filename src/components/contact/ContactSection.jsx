/**
 * ContactSection.jsx
 * Sección de contacto.
 */
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactInfo from '../contact/ContactInfo';
import ContactForm from '../contact/ContactForm';
import { getCorporateImage } from '../../utils/imagePlaceholder.js';

const ContactSection = () => {
  const backgroundImage = getCorporateImage('background');
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contáctanos" align="center" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-white rounded-2xl shadow-soft p-8 border border-secondary-100">
            <h3 className="text-xl font-display font-bold text-primary-900 mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Contact Hero Image - Responsive */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-card">
          <img
            src="/images/corporate-background.jpg"
            alt="Equipo DOTASEG"
            className="w-full h-48 sm:h-64 lg:h-[300px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
