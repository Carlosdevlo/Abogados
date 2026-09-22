/**
 * ContactForm.jsx
 * Formulario de contacto - Envía correo a gerencia@dotaseg.com.co
 */
import React, { useState } from 'react';
import { companyModel } from '../../models/companyModel';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Contacto DOTASEG - ${formData.name}`;
    const body = `Nombre: ${formData.name}\n\nCorreo: ${formData.email}\n\nTeléfono: ${formData.phone || 'No proporcionado'}\n\nMensaje:\n${formData.message}\n\n---\nEste mensaje fue enviado desde la página web de DOTASEG S.A.S.`;

    const mailtoLink = `mailto:${companyModel.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setIsSent(false), 5000);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-colors"
          placeholder="Su nombre"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-colors"
            placeholder="su@correo.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-colors"
            placeholder="310 878 7400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-colors resize-none"
          placeholder="Escriba su mensaje..."
        />
      </div>

      {isSent && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm">¡Mensaje preparado! Se abrirá su cliente de correo para enviarlo a <strong>{companyModel.contact.email}</strong>.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-8 py-3 bg-gold-500 hover:bg-gold-400 text-primary-900 font-semibold rounded-lg transition-all duration-300 shadow-soft hover:shadow-gold disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Preparando...
          </>
        ) : 'Enviar mensaje'}
      </button>
    </form>
  );
};

export default ContactForm;
