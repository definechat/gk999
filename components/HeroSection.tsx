
import React from 'react';

interface HeroSectionProps {
  whatsappLink: string;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1-.2.2-.3 0c-.2-.1-.7-.2-1.4-.8-.5-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3.1-.2 0-.3c0-.1-.6-1.5-.8-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.2-.6.4-.2.2-.7.7-.7 1.7 0 1 .7 2 .8 2.1.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1-.2 1.2-.4.2-.2.2-.8.1-1zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
    </svg>
);

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => {
  const benefits = [
    "Acelera o metabolismo 24/7",
    "Inibe o apetite por doces e massas",
    "Queima gordura localizada (barriga, braços, coxas)"
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
              O Segredo para Emagrecer Rápido, <br /> <span className="text-emerald-600">Sem Passar Fome.</span>
            </h1>
            <p className="mt-2 text-lg text-gray-500 font-medium tracking-wider uppercase">suplemento natural</p>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Descubra o grão milagroso que está revolucionando a perda de peso. Mais potente que capsulas e injeçoes famosas, porém 100% natural e seguro.
            </p>
            <div className="mt-8">
              <a 
                href={whatsappLink} 
                className="inline-flex items-center justify-center w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transform transition-transform duration-300 animate-pulse-scale hover:animate-none hover:scale-105"
              >
                <WhatsAppIcon className="w-7 h-7 mr-3" />
                ENTRE NO GRUPO VIP
              </a>
              <p className="mt-1 text-sm text-red-600 font-bold">Vagas limitadas. Garanta a sua agora!</p>
            </div>
            <ul className="mt-8 space-y-3 text-left inline-block">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex justify-center">
              <a href={whatsappLink} className="block w-full max-w-2xl">
                <img 
                  src="https://i.imgur.com/2qqdnb2.jpeg" 
                  alt="Resultados reais" 
                  className="rounded-xl shadow-2xl border-4 border-white w-full transform hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
