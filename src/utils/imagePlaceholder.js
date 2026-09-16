import partnerJulian from '../assets/images/partner-julian.jpg?url';
import partnerOscar from '../assets/images/partner-oscar.jpg?url';
import heroImage from '../assets/images/imagen-propuesta-1.jpeg?url';
import corporateBackground from '../assets/images/imagen-propuesta-2.jpeg?url';

const IMAGES = {
  partners: {
    julian: partnerJulian,
    oscar: partnerOscar,
  },
  corporate: {
    hero: heroImage,
    background: corporateBackground,
  },
};

export const getPartnerImage = (name) => {
  switch (name) {
    case 'julian':
      return IMAGES.partners.julian;
    case 'oscar':
      return IMAGES.partners.oscar;
    default:
      return IMAGES.partners.julian;
  }
};

export const getCorporateImage = (type = 'hero') => {
  switch (type) {
    case 'hero':
      return IMAGES.corporate.hero;
    case 'background':
      return IMAGES.corporate.background;
    default:
      return IMAGES.corporate.hero;
  }
};

export const getImagePlaceholder = (seed, width = 800, height = 600, category = '') => {
  const cats = ['business', 'technology', 'people', 'nature', 'architecture'];
  const cat = category || cats[Math.floor(Math.random() * cats.length)];
  return `https://picsum.photos/seed/${seed}/${width}x${height}`;
};

export const getTeamImage = (seed) => {
  return `https://i.pravatar.cc/400?img=${seed}`;
};

export const getHeroPlaceholder = () => {
  return `https://images.unsplash.com/photo-1470115636492-6d2b6d6b6d6b?ixlib=rb-4.0.3&fit=crop&w=1200&h=800`;
};

export const getPortfolioPlaceholder = () => {
  return `https://images.unsplash.com/photo-1581090700227-1cbcb5a2a994?ixlib=rb-4.0.3&fit=crop&w=800&h=600`;
};

export const getContactPlaceholder = () => {
  return `https://images.unsplash.com/photo-1521737600005-5046354593?ixlib=rb-4.0.3&fit=crop&w=600&h=400`;
};

export default {
  IMAGES,
  getPartnerImage,
  getCorporateImage,
  getImagePlaceholder,
  getTeamImage,
  getHeroPlaceholder,
  getPortfolioPlaceholder,
  getContactPlaceholder,
};
