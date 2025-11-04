import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/Ey8YDUZXrI7AWaY9EU7gi0";
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Timer to redirect the user after 3 seconds
    const redirectTimer = setTimeout(() => {
      window.location.replace(WHATSAPP_GROUP_LINK);
    }, 3000);

    // Timer to update the countdown in the message
    const countdownInterval = setInterval(() => {
      setCountdown(prev => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    // Cleanup function to clear timers if the component unmounts
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const RedirectBanner: React.FC = () => (
    <div 
      className="fixed top-0 left-0 right-0 bg-emerald-100 text-emerald-800 p-2 text-center text-sm font-medium z-50 animate-pulse"
      style={{ transform: 'translateY(calc(100% + 50px))' }} // Positioned below the header
    >
      <p>Você será redirecionado para o nosso grupo VIP em <strong>{countdown}</strong> segundos...</p>
    </div>
  );

  return (
    <>
      <Header whatsappLink={WHATSAPP_GROUP_LINK} />
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-emerald-100 text-emerald-900 text-center p-2 font-semibold">
          <p>Você será redirecionado para o grupo VIP em {countdown} segundos...</p>
        </div>
      </div>
      <main>
        <HeroSection whatsappLink={WHATSAPP_GROUP_LINK} />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection whatsappLink={WHATSAPP_GROUP_LINK} />
      </main>
      <Footer />
    </>
  );
};

export default App;
