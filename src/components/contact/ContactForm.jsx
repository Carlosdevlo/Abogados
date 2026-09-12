/**
 * ContactForm.jsx
 * Formulario de contacto - Solo frontend.
 */
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario recibido. En una integración real, los datos serían enviados a través de la API.');
    setFormData({ name: '', email: '', phone: '', message: '' });
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
          placeholder="310 000 0000"
        />
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

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-gold-500 hover:bg-gold-400 text-primary-900 font-semibold rounded-lg transition-all duration-300 shadow-soft hover:shadow-gold"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;
