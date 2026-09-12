/**
 * teamModel.js
 * Datos del equipo - PLACEHOLDERS.
 */
export const teamModel = {
  categories: [
    { id: 'arquitectos', name: 'Arquitectos' },
    { id: 'tecnicos', name: 'Técnicos' },
    { id: 'plomeros', name: 'Plomeros' },
    { id: 'electricistas', name: 'Electricistas' },
    { id: 'maestros-obra', name: 'Maestros de Obra' },
  ],
  members: [
    { id: 1, name: 'Arquitecto Placeholder', category: 'arquitectos', role: 'Arquitecto Principal', years: 15, certifications: ['ARB', 'LEED AP'] },
    { id: 2, name: 'Técnico Placeholder', category: 'tecnicos', role: 'Técnico Especializado', years: 10, certifications: ['CIPRE'] },
    { id: 3, name: 'Plomero Placeholder', category: 'plomeros', role: 'Plomero Senior', years: 12, certifications: ['CIPRE'] },
    { id: 4, name: 'Electricista Placeholder', category: 'electricistas', role: 'Electricista Industrial', years: 8, certifications: ['SEI'] },
    { id: 5, name: 'Maestro de Obra Placeholder', category: 'maestros-obra', role: 'Maestro de Obra', years: 10, certifications: ['OPC'] },
  ],
};