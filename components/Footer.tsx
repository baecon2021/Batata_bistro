import React from 'react';
import { BRAND_LOGO } from '../constants';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-stone-900 dark:bg-stone-950 text-stone-300 py-16 transition-colors duration-300 border-t border-transparent dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left justify-items-center md:justify-items-start">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
             <div className="flex items-center gap-3 mb-2">
                <img 
                    src={BRAND_LOGO}
                    alt="Logo Batata Bistrô" 
                    loading="lazy"
                    className="w-10 h-10 rounded-full border border-stone-600" 
                />
                <span className="text-2xl font-serif text-white">Batata Bistrô</span>
             </div>
             <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                Gastronomia reconfortante, ingredientes selecionados e o sabor inconfundível do feito à mão.
             </p>
             <div className="flex gap-4 mt-4">
                 <a href="https://www.instagram.com/batata_bistro/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-bistro-400 transition-colors" aria-label="Instagram">
                     <Instagram size={20} />
                 </a>
             </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:pl-20">
            <h3 className="text-white font-serif text-lg tracking-wide mb-2">Contato & Localização</h3>
            <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-bistro-500 shrink-0" />
                <span className="text-sm">Rua das Acácias, 123<br/>Jardim Gourmet, São Paulo - SP</span>
            </div>
             <div className="flex items-center gap-3">
                <Phone size={18} className="text-bistro-500 shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Batata Bistrô. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
                Desenvolvido por 
                <a 
                    href="https://anthonyweb.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-bistro-500 transition-colors font-medium"
                >
                    Anthony
                </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;