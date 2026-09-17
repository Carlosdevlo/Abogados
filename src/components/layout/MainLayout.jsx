/**
 * MainLayout.jsx
 * Layout principal con header y footer.
 */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/Logo.jpg"
          alt="Logo DOTASEG"
          className="absolute top-1/2 left-1/2 w-96 h-auto opacity-[0.04] select-none brightness-0 invert"
          style={{ transform: 'translate(-50%, -50%) rotate(-25deg)', filter: 'grayscale(100%)' }}
        />
      </div>

      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
