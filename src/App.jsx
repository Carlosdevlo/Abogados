/**
 * App.jsx
 * Componente principal.
 */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import SplashScreen from './components/common/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('dotaseg-loaded');
    if (hasLoaded) {
      setLoading(false);
    } else {
      sessionStorage.setItem('dotaseg-loaded', 'true');
    }
  }, []);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;