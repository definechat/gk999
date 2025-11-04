import React from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/Ey8YDUZXrI7AWaY9EU7gi0";

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
