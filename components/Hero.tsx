import React from 'react';
import { ORDER_URL, IMAGES } from '../constants';
import { ChevronDown, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return;
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center md:justify-end bg-stone-950">
      
      {/* Background - MOBILE: Gourmet Gradient & Radial Light */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-br from-stone-950 via-stone-900 to-bistro-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,125,98,0.15)_0%,transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Background - DESKTOP: Original Image */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu will-change-transform scale-105 hero-bg"
        style={{ backgroundImage: `url('${IMAGES.HERO_MAIN}')` }}
        role="img"
        aria-label="Imagem de destaque do Batata Bistrô"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-6 py-20 md:pb-32 lg:pb-40 max-w-7xl mx-auto">
        <div className="max-w-4xl transform-gpu flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Title */}
          <h1 className="font-serif text-white mb-4 md:mb-8 order-1">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-1">
              Batata
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]">
              <span className="italic text-bistro-400 font-light pr-0 md:pr-4">Bistrô</span>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-8 md:mb-6 order-2 md:order-first">
             <div className="h-[1px] w-8 md:w-12 bg-bistro-500"></div>
             <span className="text-bistro-200 font-sans tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs font-bold whitespace-nowrap">
               A Arte do Conforto
             </span>
             <div className="h-[1px] w-8 md:hidden bg-bistro-500"></div>
          </div>

          {/* Description - Hidden on mobile */}
          <p className="hidden md:block text-base md:text-xl text-stone-300 font-light max-w-lg leading-relaxed mb-12 border-l border-bistro-600/50 pl-6 order-3">
            Onde a simplicidade encontra o luxo. Sabores que contam histórias e aquecem o coração.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 md:gap-6 w-full md:w-auto order-4 mt-8 md:mt-0">
            <a 
              href={ORDER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 md:flex-none group px-4 md:px-12 py-4 md:py-5 bg-bistro-600 text-white font-serif italic text-lg md:text-2xl hover:bg-bistro-700 transition-all duration-500 flex items-center justify-center gap-2 md:gap-4 shadow-2xl active:scale-95 transform-gpu"
            >
              <span className="md:hidden">Pedidos</span>
              <span className="hidden md:inline">Fazer Pedido</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleScrollToSection(e, '#sobre')}
              className="flex-1 md:flex-none px-4 md:px-12 py-4 md:py-5 bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white hover:text-stone-950 transition-all duration-500 flex items-center justify-center font-sans tracking-widest text-[10px] font-bold uppercase active:scale-95 transform-gpu"
            >
              <span className="md:hidden">História</span>
              <span className="hidden md:inline">Nossa História</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer group" 
        onClick={(e) => handleScrollToSection(e as any, '#sobre')}
      >
        <ChevronDown size={20} className="text-white animate-bounce group-hover:text-bistro-400 transition-colors" />
      </div>
    </section>
  );
};

export default Hero;