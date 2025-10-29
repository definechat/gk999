
import React from 'react';

interface HeaderProps {
  whatsappLink: string;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1-.2.2-.3 0c-.2-.1-.7-.2-1.4-.8-.5-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3.1-.2 0-.3c0-.1-.6-1.5-.8-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.2-.6.4-.2.2-.7.7-.7 1.7 0 1 .7 2 .8 2.1.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1-.2 1.2-.4.2-.2.2-.8.1-1zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ whatsappLink }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center py-3 text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
        >
          <span className="text-xl lg:text-2xl font-bold tracking-wide">Emagreça urgente Grupo</span>
          <WhatsAppIcon className="w-7 h-7 ml-2" />
        </a>
      </div>
    </header>
  );
};

export default Header;
