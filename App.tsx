import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const WHATSAPP_DIRECT_LINK = "whatsapp://send?phone=5584996224700&&text=Ol%C3%A1,%20Quero%20Emagrecer%20Urgente%20! ";

  return (
    <>
      <Header whatsappLink={WHATSAPP_DIRECT_LINK} />
      <main>
        <HeroSection whatsappLink={WHATSAPP_DIRECT_LINK} />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection whatsappLink={WHATSAPP_DIRECT_LINK} />
      </main>
      <Footer />
    </>
  );
};

export default App;