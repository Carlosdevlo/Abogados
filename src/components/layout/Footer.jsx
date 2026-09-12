/**
 * Footer.jsx
 * Pie de página profesional.
 */
import React from 'react';
import { navigationModel } from '../../models/navigationModel';
import { companyModel } from '../../models/companyModel';
import { getLogo } from '../../utils/imagePlaceholder.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logo = getLogo();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gold-500 rounded-xl flex items-center justify-center overflow-hidden p-3 shadow-lg">
                <img src="/images/dotaseg-logo.jpg" alt="DOTASEG S.A.S. Logo" className="w-full h-full object-contain" style={{ filter: 'brightness(1.4) invert(1)' }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  {companyModel.name}
                </h3>
                <p className="text-sm text-white/70">
                  {companyModel.slogan}
                </p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              {companyModel.description}
            </p>
            <div className="space-y-2">
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyModel.contact.address}, {companyModel.contact.office}
              </p>
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.205l-2.083 1.042a11 11 0 005.516 5.516l1.042-2.083a1 1 0 011.205-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1.046a11 11 0 01-9.322 0H5.503a2 2 0 01-2-2v-1.046z" />
                </svg>
                {companyModel.contact.phone}
              </p>
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {companyModel.contact.email}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Navegación</h4>
            <ul className="space-y-3">
              {navigationModel.footerNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-gold-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href={`https://wa.me/${companyModel.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-400 transition-colors flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${companyModel.contact.email}`} className="text-white/70 hover:text-gold-400 transition-colors">
                  {companyModel.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://${companyModel.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-400 transition-colors">
                  {companyModel.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} {companyModel.name}. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Página web corporativa - Versión frontend.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
