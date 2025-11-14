
import React from 'react';

interface FinalCtaSectionProps {
  whatsappLink: string;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1-.2.2-.3 0c-.2-.1-.7-.2-1.4-.8-.5-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3.1-.2 0-.3c0-.1-.6-1.5-.8-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.2-.6.4-.2.2-.7.7-.7 1.7 0 1 .7 2 .8 2.1.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1-.2 1.2-.4.2-.2.2-.8.1-1zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
    </svg>
);

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ whatsappLink }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Sua Vaga no Grupo VIP Está Expirando!
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Clique no botão abaixo e garanta seu acesso ao grupo exclusivo. Lá você receberá o link de compra com desconto especial e frete grátis.
        </p>
        <p className="mt-6 font-bold text-2xl text-red-600 animate-pulse">
          Restam Apenas 17 Vagas Com o Valor Promocional!
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            className="inline-flex items-center justify-center w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transform transition-transform duration-300 animate-pulse-scale hover:animate-none hover:scale-105"
          >
            <WhatsAppIcon className="w-7 h-7 mr-3" />
            SIM, QUERO GARANTIR MINHA VAGA!
          </a>
        </div>
        <p className="mt-4 text-gray-700 font-semibold">A partir de R$197 com frete grátis!</p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
