/**
 * Footer.jsx
 * Pie de página profesional con logo y diseño limpio.
 */
import React from 'react';
import { navigationModel } from '../../models/navigationModel';
import { companyModel } from '../../models/companyModel';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Logo */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo variant="light" size="md" noEffect />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              {companyModel.description}
            </p>
            <div className="space-y-2">
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {companyModel.contact.address}, {companyModel.contact.office}
              </p>
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.205l-2.083 1.042a11 11 0 005.516 5.516l1.042-2.083a1 1 0 011.205-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1.046a11 11 0 01-9.322 0H5.503a2 2 0 01-2-2v-1.046z" />
                </svg>
                <a href={`tel:${companyModel.contact.phone}`} className="hover:text-gold-300 transition-colors">
                  {companyModel.contact.phone}
                </a>
              </p>
              <p className="text-white/80 flex items-center">
                <svg className="w-5 h-5 mr-3 text-gold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 01-2 2z" />
                </svg>
                <a href={`mailto:${companyModel.contact.email}`} className="hover:text-gold-300 transition-colors">
                  {companyModel.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gold-300">Navegación</h4>
            <ul className="space-y-3">
              {navigationModel.footerNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-gold-300 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gold-300">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${companyModel.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold-300 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2.01L4.06 5.93c-1.01.505-1.01 1.49 0 2.005L12 13.97l7.94-4.035c1.01-.505 1.01-1.49 0-2.005l-7.94-3.92z" />
                    <path d="M12 17.728V13.97l-3.11-.79a1 1 0 0 1-.73-1.27l.57-1.35a1 1 0 0 1 1.22-.52L12 12l5.11-1.28a1 1 0 0 1 1.31 1.07l-.12.35a1 1 0 0 1-.96.84l-3.11.79v1.718h2.8a1 1 0 1 1 0 2h-2.8z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${companyModel.contact.email}`} className="text-white/70 hover:text-gold-300 transition-colors">
                  {companyModel.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://${companyModel.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-300 transition-colors">
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
