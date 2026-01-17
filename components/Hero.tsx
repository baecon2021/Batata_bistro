import React from 'react';
import { ORDER_URL } from '../constants';
import { ChevronDown, ExternalLink } from 'lucide-react';
import heroBg from '../images/Batata_recheada.webp';

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's the external order link, let default behavior happen
    if (href.startsWith('http')) return;

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // min-h-[100dvh] ensures it fits perfectly on mobile browsers with dynamic toolbars
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-end">
      
      {/* Background with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] md:bg-center bg-no-repeat bg-fixed transform-gpu will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Imagem de destaque do Batata Bistrô"
      >
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/95 md:bg-gradient-to-t md:from-black/90 md:via-black/40 md:to-black/30"></div>
      </div>

      <div className="relative z-10 w-full px-6 pb-20 md:pb-32 lg:pb-40 max-w-7xl mx-auto">
        <div className="max-w-4xl animate-fade-in-up space-y-6 md:space-y-6">
          
          {/* Tagline */}
          <div className="flex items-center gap-3 md:gap-4 opacity-100 mb-2">
             <div className="h-[2px] w-8 md:w-12 bg-bistro-500 shadow-[0_0_10px_rgba(161,96,69,0.5)]"></div>
             <span className="text-bistro-100 md:text-bistro-200 font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-bold drop-shadow-md">
               Bistrô & Gastronomia
             </span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-serif text-white drop-shadow-2xl">
            <span className="block text-[3rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              Sabor que
            </span>
            <span className="block text-[3rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="italic text-bistro-300 font-light pr-2 brightness-110 font-serif">abraça</span> 
              a alma.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-md md:max-w-lg leading-relaxed pt-2 md:pt-4 drop-shadow-lg text-shadow-sm border-l-2 border-white/20 pl-4 md:border-0 md:pl-0">
            Batatas recheadas elevadas ao nível da alta gastronomia. Uma experiência única de conforto.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 md:pt-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href={ORDER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-bistro-600 text-white border border-bistro-600 font-serif italic text-lg hover:bg-bistro-700 hover:border-bistro-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-bistro-900/20 active:scale-95"
            >
              Fazer Pedido
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleScrollToSection(e, '#sobre')}
              className="group w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-stone-900 transition-all duration-300 flex items-center justify-center font-sans tracking-widest text-xs font-bold uppercase shadow-lg active:scale-95"
            >
              Conhecer o Bistrô
            </a>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex" 
        onClick={(e) => handleScrollToSection(e as any, '#sobre')}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/90 font-medium">Descubra</span>
        <ChevronDown size={20} className="text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;