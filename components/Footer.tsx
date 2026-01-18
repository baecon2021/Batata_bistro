import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="localizacao" className="bg-stone-900 dark:bg-stone-950 text-stone-300 py-16 transition-colors duration-300 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <section className="flex flex-col items-center md:items-start space-y-6">
             <div className="flex items-center gap-3">
                <h2 className="text-3xl font-serif text-white tracking-tight">Batata <span className="text-bistro-500 italic">Bistrô</span></h2>
             </div>
             <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                Gastronomia reconfortante, ingredientes selecionados e o sabor inconfundível do feito à mão desde o coração da nossa cozinha.
             </p>
             <nav className="flex gap-6 mt-4" aria-label="Social">
                 <a 
                   href={INSTAGRAM_URL} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-stone-400 hover:text-bistro-400 transition-colors transform hover:scale-110" 
                   aria-label="Siga-nos no Instagram"
                 >
                     <Instagram size={24} />
                 </a>
             </nav>
          </section>

          {/* Contact */}
          <section className="flex flex-col items-center md:items-start space-y-6 md:pl-20">
            <h3 className="text-white font-serif text-xl tracking-wide">Contato & Localização</h3>
            <address className="not-italic space-y-6">
              <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 text-bistro-500 shrink-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">Rua das Acácias, 123<br/>Jardim Gourmet, São Paulo - SP</span>
              </div>
               <div className="flex items-center gap-4">
                  <Phone size={20} className="text-bistro-500 shrink-0" aria-hidden="true" />
                  <a href="tel:+5511999999999" className="text-sm hover:text-bistro-400 transition-colors">(11) 99999-9999</a>
              </div>
            </address>
          </section>

        </div>

        <div className="border-t border-stone-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-500 gap-6">
            <p>&copy; {new Date().getFullYear()} Batata Bistrô. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
                Desenvolvido com excelência por 
                <a 
                    href="https://anthonyweb.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-bistro-500 transition-colors font-bold"
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