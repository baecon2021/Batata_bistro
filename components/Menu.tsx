import React from 'react';
import { MENU_ITEMS, ORDER_URL } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl animate-fade-in">
             <span className="text-bistro-600 dark:text-bistro-400 font-bold tracking-widest uppercase text-xs mb-4 block">
               Menu Selecionado
             </span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-stone-100 leading-tight">
               Nossas Criações
             </h2>
          </div>
          <div className="flex flex-col gap-6 md:items-end">
            <p className="text-stone-600 dark:text-stone-400 max-w-sm text-sm md:text-right leading-relaxed font-medium border-l-2 md:border-l-0 md:border-r-2 border-bistro-200 dark:border-stone-800 pl-4 md:pl-0 md:pr-4">
               Ingredientes frescos, preparo artesanal e combinações que surpreendem o paladar.
            </p>
             <a 
              href={ORDER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bistro-600 dark:text-bistro-400 font-bold uppercase text-xs tracking-widest hover:text-bistro-800 dark:hover:text-bistro-300 transition-colors group"
             >
               Pedir Online
               <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
             </a>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-y-12 gap-x-8">
          {MENU_ITEMS.map((item) => (
            <article 
              key={item.id} 
              className="group flex flex-col md:bg-white md:dark:bg-stone-900 md:hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Image Container - Mobile: Rounded & Shadowed for depth */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 dark:bg-stone-800 rounded-2xl md:rounded-none shadow-xl md:shadow-none mb-6 md:mb-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                
                 {/* Price Tag - Floating pill on Mobile for modern feel */}
                <div className="absolute top-4 right-4 md:top-auto md:bottom-0 md:right-auto md:left-0 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md text-stone-900 dark:text-white px-5 py-2 text-sm font-bold tracking-wide shadow-lg md:shadow-none md:border-t-2 border-bistro-600 rounded-full md:rounded-none">
                  {item.price}
                </div>
              </div>
              
              {/* Content - Mobile: Clean typography, lots of whitespace */}
              <div className="md:p-8 flex flex-col flex-grow relative bg-transparent md:bg-white md:dark:bg-stone-900 transition-colors duration-300">
                
                {/* Title */}
                <h3 className="text-3xl md:text-2xl font-serif text-stone-900 dark:text-stone-100 mb-4 leading-tight group-hover:text-bistro-700 dark:group-hover:text-bistro-400 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description - FIXED: Increased line-height (leading-8) and spacing */}
                <p className="text-stone-600 dark:text-stone-400 leading-8 md:leading-relaxed mb-8 text-base md:text-sm font-light tracking-wide">
                  {item.description}
                </p>
                
                {/* Footer/Serves */}
                <div className="mt-auto pt-4 border-t border-stone-200 dark:border-stone-800 md:border-0 md:pt-0">
                  <span className="text-xs tracking-widest uppercase text-stone-500 dark:text-stone-500 font-bold flex items-center gap-3">
                    <span className="w-8 md:w-2 h-[1px] bg-bistro-400"></span>
                    {item.serves}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-20 md:mt-24 text-center space-y-8">
             <a 
              href={ORDER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-block px-12 py-5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-serif italic text-xl md:text-lg shadow-xl hover:bg-bistro-600 dark:hover:bg-bistro-400 hover:text-white transition-all duration-300 rounded-lg md:rounded-none"
             >
               Ver Cardápio Completo
             </a>

             <div className="flex flex-col items-center gap-3">
                <a 
                  href="https://www.instagram.com/batata_bistro/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-stone-600 dark:text-stone-400 border-b border-stone-300 dark:border-stone-700 pb-1 hover:text-bistro-600 hover:border-bistro-600 dark:hover:text-bistro-400 transition-colors uppercase tracking-widest text-xs font-bold"
                >
                    Siga @batata_bistro
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;