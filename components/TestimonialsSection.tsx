
import React from 'react';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

interface TestimonialCardProps {
  name: string;
  age: number;
  result: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, age, result, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col items-center text-center">
    <div className="flex">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <blockquote className="mt-4 italic text-gray-600">"{quote}"</blockquote>
    <div className="mt-4">
      <p className="font-bold text-gray-900">{name}, {age} anos</p>
      <p className="text-emerald-600 font-semibold">{result}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Maria S.",
      age: 42,
      result: "Perdeu 12kg!",
      quote: "Nunca imaginei que seria tão fácil! Me sinto mais jovem e cheia de energia. Recomendo para todas as minhas amigas."
    },
    {
      name: "Juliana P.",
      age: 35,
      result: "Perdeu 15kg!",
      quote: "Depois de anos tentando de tudo, finalmente encontrei algo que funciona. Minha autoestima mudou completamente."
    },
    {
      name: "Carla M.",
      age: 29,
      result: "Perdeu 8kg!",
      quote: "Perdi peso sem abrir mão das comidas que amo. É incrível! O resultado veio muito mais rápido do que eu esperava."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Veja Quem Já Transformou o Corpo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
