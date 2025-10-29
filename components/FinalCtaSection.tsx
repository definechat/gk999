import React from 'react';

interface FinalCtaSectionProps {
  whatsappLink: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ whatsappLink }) => {
  return (
    <section className="bg-emerald-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Sua Vaga no Grupo VIP Está Expirando!
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-emerald-100">
          Clique no botão abaixo e garanta seu acesso ao grupo exclusivo. Lá você receberá o link de compra com desconto especial e frete grátis.
        </p>
        <p className="mt-6 font-bold text-2xl text-yellow-300 animate-pulse">
          Restam Apenas 17 Vagas Com o Valor Promocional!
        </p>
        <div className="mt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-white hover:bg-gray-100 text-emerald-600 font-bold py-4 px-10 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            SIM, QUERO GARANTIR MINHA VAGA!
          </a>
        </div>
        <p className="mt-4 text-white font-semibold">A partir de R$197 com frete grátis!</p>
      </div>
    </section>
  );
};

export default FinalCtaSection;