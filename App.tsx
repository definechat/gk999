import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const WHATSAPP_GROUP_LINK = "whatsapp://send?phone=5584996224700&text=Olá,%20quero%20entrar%20no%20grupo!";

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <main>
        <HeroSection whatsappLink={WHATSAPP_GROUP_LINK} />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection whatsappLink={WHATSAPP_GROUP_LINK} />
      </main>
      <Footer />
    </div>
  );
};

export default App;