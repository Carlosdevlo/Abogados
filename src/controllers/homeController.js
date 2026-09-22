/**
 * homeController.js
 * Controlador de la página de inicio.
 * Conecta modelos con vistas.
 */
import { companyModel } from '../models/companyModel';
import { serviceModel } from '../models/serviceModel';
import { navigationModel } from '../models/navigationModel';
import { teamModel } from '../models/teamModel';

export const homeController = {
  getHeroData() {
    return {
      title: 'Transformación y adaptación',
      subtitle: 'Impulsamos decisiones de indemnización más seguras, rápidas y defendibles mediante la integración responsable de tecnología, analítica predictiva y Derecho de Seguros.',
      primaryCTA: 'Conoce nuestra propuesta',
      secondaryCTA: 'Contáctanos',
      company: companyModel.name,
      slogan: companyModel.slogan,
    };
  },

  getPropositoData() {
    return {
      title: 'Nuestro Propósito',
      text: 'Conectamos el mundo de los seguros con la transformación digital para entregar soluciones ágiles, seguras y alineadas con las necesidades de nuestros clientes.',
      items: [
        { id: 1, name: 'Datos', description: 'Gestión inteligente de información para decisiones informadas.' },
        { id: 2, name: 'Tecnología', description: 'Herramientas digitales para agilizar procesos y mejorar la experiencia.' },
        { id: 3, name: 'Derecho de Seguros', description: 'Asesoría jurídica especializada en materia de seguros.' },
        { id: 4, name: 'Alertas Tempranas', description: 'Alertas tempranas de fraude y siniestros de alto impacto para mitigar riesgos proactivamente.' },
      ],
    };
  },

  getPropuestaValorData() {
    return {
      title: 'Nuestra Propuesta de Valor',
      items: [
        { id: 1, title: 'Agilidad', description: 'Procesos optimizados que reducen tiempos de respuesta en un 40%.' },
        { id: 2, title: 'Seguridad', description: 'Protocolos de gestión de riesgos con estándares internacionales.' },
        { id: 3, title: 'Experiencia', description: 'Más de 10 años transformando la gestión de seguros.' },
        { id: 4, title: 'Tecnología', description: 'Plataformas digitales integradas para la gestión integral.' },
        { id: 5, title: 'Equipo Especializado', description: 'Profesionales certificados en análisis de riesgos.' },
        { id: 6, title: 'Enfoque Legal', description: 'Asesoría jurídica continua en todo el proceso.' },
      ],
    };
  },

  getWhyChooseUsData() {
    return {
      title: '¿Por qué elegirnos?',
      items: [
        { id: 1, title: 'Protección Integral', description: 'Coberturas personalizadas para cada necesidad.' },
        { id: 2, title: 'Respuesta Rápida', description: 'Atención ágil en caso de siniestro.' },
        { id: 3, title: 'Gestión Transparente', description: 'Información clara en cada etapa del proceso.' },
        { id: 4, title: 'Aliado Estratégico', description: 'Acompañamiento continuo en la gestión de riesgos.' },
        { id: 5, title: 'Equipo Certificado', description: 'Profesionales con amplia experiencia.' },
        { id: 6, title: 'Tecnología de Vanguardia', description: 'Herramientas digitales de última generación.' },
      ],
    };
  },

  getPortfolioData() {
    return {
      title: 'Ajuste Masivo de Hogar',
      subtitle: 'Soluciones integrales para la gestión de siniestros masivos.',
      description: 'Desarrollamos procesos de ajuste masivo que permiten la gestión eficiente de múltiples siniestros de manera simultánea, optimizando recursos y tiempos.',
      benefits: [
        'Reducción de tiempos de procesamiento',
        'Estándares de calidad consistentes',
        'Trazabilidad completa del proceso',
        'Integración con sistemas corporativos',
        'Reportes automatizados en tiempo real',
        'Gestión documental digital',
      ],
    };
  },

  getEnfoqueEstrategicoData() {
    return {
      title: 'Enfoque Estratégico',
      items: [
        { id: 1, title: 'Análisis Predictivo', description: 'Utilizamos algoritmos de machine learning para predecir riesgos y optimizar coberturas.' },
        { id: 2, title: 'Digitalización', description: 'Transformamos procesos manuales en flujos de trabajo digitales y automatizados.' },
        { id: 3, title: 'Experiencia del Cliente', description: 'Diseñamos soluciones centradas en la experiencia del cliente en cada punto de contacto.' },
      ],
    };
  },

  getDeliverablesData() {
    return {
      title: 'Entregables',
      items: [
        { id: 1, title: 'Plataforma Digital', description: 'Sistema integral de gestión en la nube.' },
        { id: 2, title: 'Reportes Ejecutivos', description: 'Informes detallados para la toma de decisiones.' },
        { id: 3, title: 'Capacitación', description: 'Formación completa para el uso de la plataforma.' },
        { id: 4, title: 'Soporte Técnico', description: 'Asistencia continua las 24 horas.' },
      ],
    };
  },

  getKPIDashboardData() {
    return {
      title: 'Indicadores de Desempeño',
      kpis: [
        { id: 1, label: 'Siniestros Procesados', value: '1,250+', change: '+15%' },
        { id: 2, label: 'Tiempo de Respuesta', value: '2.4h', change: '-40%' },
        { id: 3, label: 'Satisfacción del Cliente', value: '96%', change: '+8%' },
        { id: 4, label: 'Reducción de Costos', value: '35%', change: '+12%' },
      ],
    };
  },

  getTeamData() {
    return {
      title: 'Nuestro Equipo',
      members: teamModel.members,
      categories: teamModel.categories,
      partners: [
        {
          id: 1,
          name: 'Julian',
          position: 'Gerente de Riesgos y Seguros',
          photo: 'julian',
          experience: '12+ años',
          description: "Profesional especializado en Gestión de Riesgos y Seguros, con 12 años de experiencia en el sector asegurador, particularmente en el ramo de Automóviles. Cuenta con amplia trayectoria en la dirección y gestión integral de procesos relacionados con siniestros, responsabilidad civil, recobros, auditoría técnica y operación aseguradora. Ha liderado equipos de trabajo y procesos orientados al análisis, control y mitigación de riesgos, participando en la toma de decisiones estratégicas y en la implementación de iniciativas para optimizar procesos, fortalecer controles y mejorar los niveles de eficiencia y servicio.",
        },
        {
          id: 2,
          name: 'Oscar',
          position: 'Ajustador de Pérdidas',
          photo: 'oscar',
          experience: '18+ años',
          description: "Ajustador de Pérdidas con más de 18 años de experiencia en el sector asegurador, especializado en la investigación, análisis, valoración y gestión integral de reclamaciones de seguros. Cuenta con amplia experiencia en la evaluación de daños y pérdidas, determinación de costos de reparación o reposición y elaboración de informes técnicos que permiten sustentar de manera objetiva la procedencia y cuantificación de las reclamaciones. Posee sólidas habilidades para la negociación, manejo y resolución de controversias, así como para la coordinación de múltiples procesos de reclamación bajo condiciones de alta exigencia y presión.",
        },
      ],
    };
  },

  getContactData() {
    return {
      title: 'Contáctanos',
      contact: companyModel.contact,
    };
  },

  getNavigationData() {
    return navigationModel;
  },
};

export default homeController;