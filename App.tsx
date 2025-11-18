import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const WHATSAPP_DIRECT_LINK = "whatsapp://chat?code=F5AO9r1uqT2Kcz7xB7Q1pT";

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