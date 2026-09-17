/**
 * TeamSection.jsx
 * Sección de equipo con socios y miembros.
 */
import React, { useState } from 'react';
import { homeController } from '../../controllers/homeController';
import SectionTitle from '../common/SectionTitle';

const TeamSection = () => {
  const data = homeController.getTeamData();
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredMembers = activeCategory
    ? data.members.filter(m => m.category === activeCategory)
    : data.members;

  return (
    <section id="equipo" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionTitle title={data.title} align="center" />

         {/* Logo del equipo - pequeño y elegante */}
         <div className="flex justify-center mb-8">
           <img
             src="/images/Logo.jpg"
             alt="Logo DOTASEG"
             className="h-8 w-auto opacity-60 grayscale"
           />
         </div>

         {/* Partners Section - Professional profiles with images */}
         {data.partners && data.partners.length > 0 && (
           <div className="mb-16">
             <h3 className="text-center text-xl font-display font-semibold text-primary-900 mb-12">
               Socios Fundamentales
             </h3>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
               {data.partners.map((partner) => (
                 <div
                   key={partner.id}
                   className="group flex flex-col lg:flex-row bg-white rounded-xl shadow-card hover:shadow-gold transition-all duration-500 overflow-hidden border border-secondary-100"
                 >
                   {/* Photo - Full width on mobile, side on desktop */}
                   <div className="relative w-full lg:w-64 h-56 lg:h-64 overflow-hidden">
                     <img
                       src={`/images/partner-${partner.photo}.jpg`}
                       alt={partner.name}
                       className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                       onError={(e) => {
                         e.target.src = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${encodeURIComponent(partner.name)}`;
                       }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent lg:from-black/20 lg:via-transparent lg:to-transparent"></div>
                   </div>

                  {/* Info */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <h4 className="text-2xl font-display font-bold text-primary-900 mb-2">
                      {partner.name}
                    </h4>
                    <p className="text-gold-600 font-semibold text-sm uppercase tracking-wider mb-4">
                      {partner.position}
                    </p>
                    <p className="text-secondary-600 leading-relaxed text-sm mb-4 flex-1">
                      {partner.description}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                        {partner.experience}
                      </span>
                      <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">
                        Certificado
                      </span>
                    </div>
                  </div>
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

        {/* Team Grid - Simplified and balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => {
            const name = member.name || `Miembro ${index + 1}`;
            const position = member.role || 'Cargo definiendo';

            return (
            <div key={member.id} className="bg-white rounded-xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden border border-secondary-100 group">
                <div className="h-56 overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-50 via-gold-50 to-primary-50">
                  <div className="w-24 h-24 rounded-full bg-gold-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
          <p className="text-sm text-secondary-400 italic">
            Las fotografías, nombres, cargos y certificaciones serán proporcionados por el cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
