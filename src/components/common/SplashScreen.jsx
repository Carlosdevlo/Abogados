import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 1200),
      setTimeout(() => setStep(3), 2000),
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => onComplete(), 1200);
      }, 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
        {/* Justice Scale - Main element */}
        <div
          className={`transition-all duration-700 ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        >
          <div className="relative flex flex-col items-center">
            {/* Pivot point */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-500 shadow-lg mb-2 flex items-center justify-center">
              <div className="absolute -inset-1 bg-gold-400/30 rounded-full blur animate-pulse"></div>
              <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
            </div>

            {/* Vertical beam */}
            <div className={`w-0.5 bg-gold-400 transition-all duration-700 ${step >= 2 ? 'h-32 animate-balance-scale' : 'h-0 opacity-0'}`}></div>

            {/* Scale arms with animation */}
            <div
              className={`relative w-64 h-12 transition-all duration-700 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
              {/* Left arm */}
              <div className="absolute left-0 top-6 w-28 h-0.5 bg-gold-400 origin-right rotate-12"></div>
              <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-gold-500 shadow-md"></div>

              {/* Right arm */}
              <div className="absolute right-0 top-6 w-28 h-0.5 bg-gold-400 origin-left -rotate-12"></div>
              <div className="absolute right-2 top-6 w-4 h-4 rounded-full bg-gold-500 shadow-md"></div>
            </div>

            {/* Center support */}
            <div className="w-1 h-6 bg-secondary-300 rounded-full mb-2"></div>

            {/* Scale pans */}
            <div
              className={`flex justify-center gap-16 mt-4 transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="w-12 h-6 border-2 border-secondary-400 rounded-b-lg"></div>
              <div className="w-12 h-6 border-2 border-secondary-400 rounded-b-lg"></div>
            </div>
          </div>
        </div>

        {/* DOTASEG text appears after balance animation */}
        <div
          className={`mt-8 transition-all duration-700 text-center ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary-900 mb-2">
            DOTA<span className="text-gold-500">SEG</span>
          </h1>
          <p className="text-secondary-600 text-sm sm:text-base">
            Transformación y adaptación
          </p>
        </div>

        {/* Progress indicator */}
        <div
          className={`w-32 h-1 bg-secondary-200 rounded-full overflow-hidden transition-all duration-700 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <div className="h-full bg-gold-500 rounded-full animate-pulse" style={{ width: '100%' }}></div>
        </div>

        {/* Footer text */}
        <div
          className={`mt-4 text-xs text-secondary-400 transition-all duration-700 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}
        >
          <p>© 2026 • DOTASEG S.A.S. • Gestión integral de riesgos</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
