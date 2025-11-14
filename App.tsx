import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const WHATSAPP_DIRECT_LINK = "whatsapp://send?phone=5584996224700&&text=Ol%C3%A1,%20Quero%20Emagrecer%20Urgente%20! ";

  return (
    <>
      <Header whatsappLink={WHATSAPP_DIRECT_LINK} />
      <main>
        <HeroSection whatsappLink={WHATSAPP_DIRECT_LINK} />
        <FinalCtaSection whatsappLink={WHATSAPP_DIRECT_LINK} />
      </main>
      <Footer />
    </>
  );
};

export default App;