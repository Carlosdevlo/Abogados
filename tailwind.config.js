/**
 * tailwind.config.js
 * Configuración de Tailwind CSS con colores de marca DOTASEG.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#001C4E',
          800: '#002A6B',
          700: '#003A8F',
          600: '#004BBF',
          500: '#0055D4',
          400: '#0066E6',
          300: '#0077FF',
          200: '#B3C6EC',
          100: '#D9E4F5',
          50: '#F0F4FA',
          25: '#F8FBFE',
        },
        gold: {
          500: '#D19C21',
          400: '#E0A834',
          600: '#A87D1A',
          700: '#8C6415',
          100: '#F5E6C8',
          75: '#F9F0E0',
          50: '#FEF9F0',
          25: '#FFFCF5',
        },
        secondary: {
          900: '#1A1A1A',
          800: '#2D2D2D',
          700: '#404040',
          600: '#666666',
          500: '#888888',
          400: '#AAAAAA',
          300: '#CCCCCC',
          200: '#E0E0E0',
          100: '#F0F0F0',
          50: '#F5F5F5',
          25: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 20px rgba(0, 28, 78, 0.06)',
        card: '0 10px 40px rgba(0, 28, 78, 0.10)',
        gold: '0 10px 40px rgba(209, 156, 33, 0.3)',
      },
      animation: {
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};