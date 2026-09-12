import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onComplete(), 1000);
          }, 1300);
          return 100;
        }
        return prev + 1;
      });
    }, 130);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
        {/* Logo Container - Professional circular design */}
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="absolute -inset-6 border-2 border-gold-300/20 rounded-full animate-spin-slow"></div>
          
          {/* Inner gold glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/30 via-gold-300/20 to-gold-400/30 rounded-full blur-2xl animate-pulse-gold"></div>
          
          {/* White background circle for logo */}
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl animate-logo-reveal">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
              <img
                src="/images/dotaseg-logo.jpg"
                alt="DOTASEG S.A.S. Logo"
                className="max-w-full max-h-full object-contain"
                style={{
                  filter: 'brightness(1.15) contrast(1.05) saturate(1.25)',
                  borderRadius: '12px',
                }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150x150/d4a76a/ffffff?text=DOTASEG'; }}
              />
            </div>
          </div>
        </div>

        {/* Company text - Professional */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '2s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-3 tracking-tight">
            <span className="text-white">DOTA</span>
            <span className="text-gold-300">SEG</span>
          </h1>
          <p className="text-gold-200 text-lg sm:text-xl md:text-2xl max-w-md mx-auto font-light">
            Transformación y adaptación — Gestión integral de seguros
          </p>
        </div>

        {/* Progress bar - Elegant */}
        <div className="w-full max-w-md mt-10">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-center text-sm text-white/70">
            Cargando experiencia profesional... {progress}%
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <p>© 2026 • DOTASEG S.A.S. • v1.0.0</p>
          <p className="mt-1">🔒 Soluciones de seguros • 🛡️ Protección integral</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
