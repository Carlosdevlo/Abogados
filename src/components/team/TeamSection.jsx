/**
 * TeamSection.jsx
 * Sección de equipo con socios y miembros.
 */
import React, { useState } from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';
import { getPartnerImage } from '../../utils/imagePlaceholder.js';

const TeamSection = () => {
  const data = homeController.getTeamData();
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredMembers = activeCategory
    ? data.members.filter(m => m.category === activeCategory)
    : data.members;

  const categoryIcons = {
    arquitectos: '',
    tecnicos: '',
    plomeros: '',
    electricistas: '',
    'maestros-obra': '',
  };

  const placeholderNames = [
    'Carlos Mendoza', 'Ana Ramírez', 'Luis Fernández', 'María Torres',
    'Jorge Castañeda', 'Patricia López', 'Roberto Silva', 'Camila Herrera'
  ];

  const placeholderPositions = [
    'Arquitecto Senior', 'Técnico en Inspección', 'Plomero Certificado',
    'Electricista Profesional', 'Maestro de Obra', 'Ajustador Principal'
  ];

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={data.title} align="center" />

        {/* Partners Section - Responsive */}
        {data.partners && (
          <div className="mb-16">
            <h3 className="text-center text-lg font-display font-semibold text-primary-900 mb-8">
              Socios Fundamentales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {data.partners.map((partner) => (
                <div key={partner.id} className="flex flex-col items-center text-center">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-card mb-4 border-4 border-gold-200">
                    <img
                       src={partner.image === 1 ? '/images/partner-julian.jpg' : '/images/partner-oscar.jpg'}
                      alt={partner.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary-900 mb-1">
                    {partner.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
              activeCategory === null
                ? 'bg-primary-600 text-white shadow-soft'
                : 'bg-white text-secondary-700 border border-secondary-200 hover:border-gold-400'
            }`}
          >
            Todos
          </button>
          {data.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-soft'
                  : 'bg-white text-secondary-700 border border-secondary-200 hover:border-gold-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => {
            const name = placeholderNames[index] || 'Nombre placeholder';
            const position = placeholderPositions[index] || 'Cargo placeholder';

            return (
              <div key={member.id} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-primary-200 rounded-full flex items-center justify-center text-4xl mb-2">
                        {categoryIcons[member.category] || ''}
                      </div>
                      <p className="text-primary-400 text-xs">Fotografía pendiente</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full mb-3">
                    {data.categories.find(c => c.id === member.category)?.name}
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-1">
                    {name}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-secondary-500 italic">
            Las fotografías, nombres, cargos y certificaciones serán proporcionados por el cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
