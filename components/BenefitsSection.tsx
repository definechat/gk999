
import React from 'react';

const CutleryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const LeafIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
    {icon}
    <h3 className="text-xl font-bold text-gray-800 mt-4">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <CutleryIcon />,
      title: "Sem Dietas Restritivas",
      description: "Conquiste o corpo dos seus sonhos com a liberdade de comer o que você mais gosta, sem culpa."
    },
    {
      icon: <MoonIcon />,
      title: "Sem Exercícios Exaustivos",
      description: "Nossa fórmula potente atua na queima de gordura até mesmo enquanto você descansa."
    },
    {
      icon: <RocketIcon />,
      title: "Resultados Rápidos e Visíveis",
      description: "Sinta a diferença na balança e no espelho já na primeira semana de uso contínuo."
    },
    {
      icon: <LeafIcon />,
      title: "100% Natural e Seguro",
      description: "Produto com fórmula natural, aprovado pela ANVISA e sem relatos de efeitos colaterais."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Por Que Nosso Método é Infalível?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
