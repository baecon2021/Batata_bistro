import React, { useState, useEffect, useMemo } from 'react';
import { ORDER_URL, OPERATING_SCHEDULE } from '../constants';
import { Clock, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Sobre', id: '#sobre' },
    { name: 'Menu', id: '#menu' },
    { name: 'Localização', id: '#localizacao' }
  ];

  const isOpen = useMemo(() => {
    if (!currentTime) return false;
    const now = new Date();
    const day = now.getDay();
    const totalMinutes = now.getHours() * 60 + now.getMinutes();
    const openMin = 18 * 60 + 25;
    const closeSun = 22 * 60 + 50;
    const closeStd = 23 * 60;

    if (day === 0) return totalMinutes >= openMin && totalMinutes < closeSun;
    if (day >= 3 && day <= 6) return totalMinutes >= openMin && totalMinutes < closeStd;
    return false;
  }, [currentTime]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 10000);

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    if (id.startsWith('http')) return;
    e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-500 transform-gpu ${
      isScrolled ? 'bg-stone-950/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
        {/* Marca */}
        <div onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="cursor-pointer group relative z-[70]">
          <span className="font-serif font-bold text-2xl md:text-2xl text-white tracking-tight">
            Batata <span className="text-bistro-500 italic font-light">Bistrô</span>
          </span>
        </div>

        {/* Links e Status - Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.id} onClick={(e) => scrollTo(e, link.id)}
               className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-300 hover:text-white transition-all duration-300">
              {link.name}
            </a>
          ))}
          <a href={ORDER_URL} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 text-bistro-400 hover:text-bistro-300 transition-colors">
            Pedidos <ExternalLink size={12} />
          </a>
          
          <div className="relative group ml-4 pl-8 border-l border-white/10">
            <div className={`flex items-center gap-3 px-4 py-2 rounded-full text-[11px] font-bold tracking-tighter transition-all duration-500 cursor-help ${
              isOpen 
                ? 'bg-bistro-600/20 text-bistro-400 border border-bistro-600/30' 
                : 'bg-stone-800/40 text-stone-500 border border-white/5'
            }`}>
               <Clock size={14} className={isOpen ? 'animate-pulse' : ''} /> 
               <span className="tabular-nums">{currentTime}</span>
               <div className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`}></div>
            </div>

            <div className="absolute top-full right-0 mt-4 w-64 bg-stone-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-[60]">
               <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <h4 className="text-white font-serif italic text-base">Horários</h4>
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${isOpen ? 'bg-bistro-600/20 text-bistro-400' : 'bg-red-950/30 text-red-400'}`}>
                    {isOpen ? 'Aberto Agora' : 'Fechado'}
                  </span>
               </div>
               <div className="space-y-3">
                  {OPERATING_SCHEDULE.map((item) => (
                    <div key={item.day} className="flex justify-between items-center text-[10px] tracking-wide">
                      <span className="text-stone-500 font-medium">{item.day}</span>
                      <span className={`font-bold ${item.hours === 'Fechado' ? 'text-red-900/50' : 'text-stone-300'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;