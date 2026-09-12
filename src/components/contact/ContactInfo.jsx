/**
 * ContactInfo.jsx
 * Información de contacto.
 */
import React from 'react';
import { companyModel } from '../../models/companyModel';

const ContactInfo = () => {
  const contact = companyModel.contact;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-display font-bold text-primary-900 mb-4">
          Información de Contacto
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="font-medium text-secondary-900">Dirección</p>
              <p className="text-secondary-600">
                {contact.address}, {contact.office}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 mr-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.205l-2.083 1.042a11 11 0 005.516 5.516l1.042-2.083a1 1 0 011.205-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1.046a11 11 0 01-9.322 0H5.503a2 2 0 01-2-2v-1.046z" />
            </svg>
            <div>
              <p className="font-medium text-secondary-900">Teléfono</p>
              <a href={`tel:${contact.phone}`} className="text-primary-600 hover:text-primary-700">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 mr-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="font-medium text-secondary-900">Correo</p>
              <a href={`mailto:${contact.email}`} className="text-primary-600 hover:text-primary-700">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="w-6 h-6 mr-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
            <div>
              <p className="font-medium text-secondary-900">Web</p>
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                {contact.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          WhatsApp
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center justify-center w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Enviar Correo
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
