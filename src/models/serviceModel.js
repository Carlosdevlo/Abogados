/**
 * serviceModel.js
 * Datos de servicios y portafolio.
 */
export const serviceModel = {
  // Propuesta de valor
  valueProposal: {
    title: 'Analítica + modelos predictivos',
    text1:
      'Integramos conocimiento profundo del sector asegurador, análisis jurídico especializado, criterio técnico y gestión estructurada de siniestros para transformar reclamaciones complejas en procesos trazables, oportunos y plenamente sustentados.',
    text2:
      'Todo respaldado por análisis de datos y modelos predictivos que fortalecen la toma de decisiones y el control del riesgo.',
    cards: [
      {
        id: 1,
        title: 'Analítica de datos',
        description: 'Análisis de información para la toma de decisiones informadas.',
        icon: '📊',
      },
      {
        id: 2,
        title: 'Modelos predictivos',
        description: 'Tecnología de machine learning para predecir comportamientos.',
        icon: '🤖',
      },
      {
        id: 3,
        title: 'Análisis técnico-jurídico',
        description: 'Evaluación conjunta de aspectos técnicos y legales.',
        icon: '⚖️',
      },
      {
        id: 4,
        title: 'Gestión estructurada de siniestros',
        description: 'Procesos estandarizados y trazables en cada etapa.',
        icon: '📋',
      },
    ],
  },

  // ¿Por qué elegirnos?
  whyChooseUs: [
    {
      id: 1,
      title: 'Reducción de reprocesos y tiempos',
      description: 'Optimizamos flujos de trabajo para reducir tiempos de gestión.',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'Mayor consistencia en criterios',
      description: 'Evaluaciones estandarizadas con criterios homogéneos.',
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Evaluación estructurada',
      description: 'Metodologías claras y documentadas en cada etapa.',
      icon: '📐',
    },
    {
      id: 4,
      title: 'Informes KPI en línea',
      description: 'Reportes con indicadores clave de desempeño en tiempo real.',
      icon: '📈',
    },
    {
      id: 5,
      title: 'Alertas tempranas',
      description: 'Sistema de alertas para identificar riesgos oportunamente.',
      icon: '🔔',
    },
  ],

  // Portafolio - Ajuste Masivo de Hogar
  portfolio: {
    title: 'Ajuste Masivo de Hogar',
    subtitle: 'Soluciones para la gestión técnica y eficiente de siniestros de hogar.',
    description:
      'Implementar un modelo de ajuste masivo, rápido y técnicamente confiable para siniestros de hogar derivados del terremoto.',
    benefits: [
      'Tiempos de respuesta acelerados',
      'Control de fraude',
      'Homogeneidad técnica en la valoración',
      'Satisfacción del asegurado',
      'Optimización del costo de siniestralidad',
    ],
  },

  // Enfoque estratégico - Niveles
  levels: [
    {
      id: 1,
      name: 'NIVEL 1',
      title: 'Documental',
      description: 'Daños menores, evidencias claras y sin afectación estructural.',
      time: '24–48 horas',
    },
    {
      id: 2,
      name: 'NIVEL 2',
      title: 'Inspección virtual',
      description: 'Humedades, fisuras no estructurales y daños en acabados.',
      time: '3–5 días',
    },
    {
      id: 3,
      name: 'NIVEL 3',
      title: 'Inspección presencial',
      description: 'Daños estructurales, colapsos parciales, afectación de muros de carga o riesgo para ocupantes.',
      time: '5–10 días',
    },
  ],

  // ¿Qué entregamos?
  deliverables: [
    {
      id: 1,
      title: 'Reducción de siniestralidad',
      description: 'Menos visitas presenciales y menor costo operativo.',
      icon: '📉',
    },
    {
      id: 2,
      title: 'Velocidad operativa',
      description: 'Cierre del 70 % de los casos en modalidad documental o virtual. Tiempos de respuesta entre 24 horas y 10 días según el nivel de daño.',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Control técnico y jurídico',
      description: 'Ajuste estandarizado con matrices de costos, depreciación y alcance. Equipo de ingenieros y ajustadores certificados para daños estructurales. Auditoría técnica para siniestros mayores a $100 millones.',
      icon: '🔍',
    },
    {
      id: 4,
      title: 'Experiencia del asegurado',
      description: 'Comunicación clara, trazable y empática. Plataforma de evidencias 24/7. Acompañamiento técnico desde el primer contacto.',
      icon: '🤝',
    },
  ],
};

export default serviceModel;
