import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, ORDER_URL } from '../constants';
import { ArrowUpRight, Plus, Info } from 'lucide-react';

const CATEGORIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'carne', label: 'Carnes' },
  { id: 'veg', label: 'Vegetarianas' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('todas');

  const filteredItems = useMemo(() => {
    return activeCategory === 'todas' 
      ? MENU_ITEMS 
      : MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bistro-900/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
             <span className="text-bistro-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
               Experiência Gastronômica
             </span>
             <h2 className="text-5xl md:text-7xl font-serif text-stone-100 leading-tight">
               Nossas <span className="italic font-light text-bistro-400">Criações</span>
             </h2>
          </div>
          
          <div className="bg-stone-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex items-start gap-4 max-w-sm">
             <Info className="text-bistro-500 shrink-0" size={20} aria-hidden="true" />
             <p className="text-stone-400 text-xs leading-relaxed font-light">
               Exibimos aqui apenas uma <strong className="text-white">curadoria exclusiva</strong>. Descubra mais de 15 variações autorais em nosso cardápio digital completo.
             </p>
          </div>
        </header>

        <nav className="flex flex-wrap gap-4 mb-20" aria-label="Filtrar Menu">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-700 border ${
                activeCategory === cat.id 
                  ? 'bg-bistro-600 border-bistro-600 text-white shadow-xl shadow-bistro-950' 
                  : 'bg-transparent border-stone-800 text-stone-500 hover:border-bistro-900 hover:text-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {filteredItems.map((item) => (
            <article 
              key={item.id} 
              className="group flex flex-col md:flex-row bg-stone-900/20 rounded-2xl overflow-hidden border border-white/5 hover:border-bistro-600/30 transition-all duration-700 hover:shadow-2xl hover:shadow-black"
            >
              <div className="relative md:w-[45%] aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Prato de ${item.title}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" aria-hidden="true"></div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl lg:text-3xl font-serif text-white leading-tight group-hover:text-bistro-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-bistro-400 font-bold text-xl whitespace-nowrap ml-6">{item.price}</span>
                </div>
                
                <p className="text-stone-400 leading-relaxed mb-8 text-sm lg:text-base font-light">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-bold flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-bistro-900" aria-hidden="true"></span>
                    {item.serves}
                  </span>
                </div>
              </div>
            </article>
          ))}

          <a 
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver cardápio completo"
            className="group flex flex-col items-center justify-center bg-stone-900/10 rounded-2xl border-2 border-dashed border-stone-800 hover:border-bistro-500/50 transition-all duration-700 p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-bistro-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true"></div>
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-20 h-20 bg-stone-800/50 rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-bistro-600 group-hover:text-white transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-bistro-600/20">
                <Plus size={32} className="group-hover:rotate-180 transition-transform duration-700" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">O Horizonte é Vasto</h3>
              <p className="text-sm text-stone-500 font-light max-w-[260px] mx-auto leading-relaxed">
                Temos dezenas de outras batatas recheadas, acompanhamentos e sobremesas que não couberam aqui.
              </p>
              <div className="mt-10 flex items-center justify-center gap-3 text-bistro-400 font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 w-full">
                Abrir Cardápio Completo <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </div>
          </a>
        </div>
        
        <div className="mt-32 text-center">
             <a 
              href={ORDER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ver todas as opções de pedidos"
              className="group relative inline-flex px-16 py-6 bg-white text-stone-950 font-serif italic text-2xl hover:text-white transition-colors duration-500 overflow-hidden"
             >
               <span className="relative z-10">Ver Todas as Opções</span>
               <div className="absolute inset-0 bg-bistro-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" aria-hidden="true"></div>
             </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;