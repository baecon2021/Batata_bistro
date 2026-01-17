import React from 'react';
import { ABOUT_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-32 lg:py-40 bg-white dark:bg-stone-950 transition-colors duration-500 overflow-hidden relative">
      {/* Subtle Texture for Light Mode */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Image Column - Top on Mobile */}
          <div className="md:col-span-7 relative order-1 md:order-1">
             <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden rounded-sm shadow-xl md:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-none bg-stone-200 dark:bg-stone-900">
               <img 
                 src= "images/Batata_recheada.jpg" 
                 alt="Chef preparando prato no Batata Bistrô" 
                 loading="lazy"
                 width="800"
                 height="600"
                 className="w-full h-full object-cover"
               />
               
               {/* Badge - Elegant Overlay for Mobile */}
               <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur text-stone-900 dark:text-white px-4 py-2 shadow-lg flex flex-col items-center justify-center border border-stone-100 dark:border-stone-800">
                  <span className="block text-lg md:text-2xl font-serif italic font-bold text-bistro-600">100%</span>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-wider block">Artesanal</span>
               </div>
             </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-5 space-y-6 order-2 md:order-2">
            <div className="space-y-3">
               <span className="inline-block py-1 px-3 border border-bistro-200 dark:border-bistro-800/50 rounded-full text-bistro-700 dark:text-bistro-400 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-bistro-50 dark:bg-stone-900">
                 Nossa História
               </span>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-100 leading-[1.15]">
                 O conforto <br/> em cada <span className="text-bistro-600 dark:text-bistro-500 italic font-medium">detalhe</span>.
               </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-stone-600 dark:text-stone-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                O <strong className="text-stone-900 dark:text-stone-200 font-medium">Batata Bistrô</strong> nasceu de um desejo simples: resgatar a memória afetiva da comida feita em casa, mas com a sofisticação que o paladar moderno exige.
              </p>
              <p>
                Cada batata é selecionada rigorosamente e assada por horas até atingir a cremosidade perfeita. Nossos recheios fogem do comum, combinando técnicas da alta gastronomia com ingredientes frescos.
              </p>
            </div>

            <div className="pt-4 md:pt-6">
                <div className="flex items-center gap-4">
                   <div className="h-[1px] w-12 bg-bistro-300 dark:bg-stone-700"></div>
                   <span className="font-serif italic text-xl text-stone-500 dark:text-stone-500">Bon Appétit</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
