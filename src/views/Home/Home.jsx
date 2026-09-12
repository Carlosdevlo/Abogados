/**
 * Home.jsx
 * Vista principal - página de inicio.
 */
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Hero from '../../components/home/Hero';
import Proposito from '../../components/home/Proposito';
import PropuestaValor from '../../components/home/PropuestaValor';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Portfolio from '../../components/home/Portfolio';
import EnfoqueEstrategico from '../../components/home/EnfoqueEstrategico';
import Deliverables from '../../components/home/Deliverables';
import KPIDashboard from '../../components/home/KPIDashboard';
import TeamSection from '../../components/team/TeamSection';
import ContactSection from '../../components/contact/ContactSection';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Proposito />
      <PropuestaValor />
      <WhyChooseUs />
      <Portfolio />
      <EnfoqueEstrategico />
      <Deliverables />
      <KPIDashboard />
      <TeamSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;