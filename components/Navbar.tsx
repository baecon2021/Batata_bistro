import React, { useState, useEffect } from 'react';
import { ORDER_URL, OPERATING_SCHEDULE } from '../constants';
import { Clock, Menu as MenuIcon, X, Moon, Sun, ExternalLink, CalendarDays } from 'lucide-react';
import logoImg from '../images/Logo_bataBistro.webp';

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));

      // Operating Hours Logic
      const day = now.getDay(); // 0 = Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const OPEN_MINUTES = 18 * 60 + 25; // 18:25
      const CLOSE_MINUTES_SUN = 22 * 60 + 50; // 22:50
      const CLOSE_MINUTES_STD = 23 * 60; // 23:00

      let open = false;

      if (day === 0) { // Sunday
        if (totalMinutes >= OPEN_MINUTES && totalMinutes < CLOSE_MINUTES_SUN) {
          open = true;
        }
      } else if (day >= 3 && day <= 6) { // Wed-Sat
        if (totalMinutes >= OPEN_MINUTES && totalMinutes < CLOSE_MINUTES_STD) {
          open = true;
        }
      }
      
      setIsOpen(open);
    };

    updateTimeAndStatus();
    const interval = setInterval(updateTimeAndStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    setMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Cardápio / Pedidos', href: ORDER_URL },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-stone-900/95 shadow-lg backdrop-blur-md py-2 border-b border-stone-100 dark:border-stone-800' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo Section */}
          <div 
            onClick={handleScrollToTop}
            className="flex-shrink-0 flex items-center gap-2 md:gap-3 cursor-pointer group"
            title="Voltar ao início"
          >
             <img 
              src={logoImg}
              alt="Logo Batata Bistrô" 
              width="48"
              height="48"
              className={`rounded-full border-2 border-bistro-500 shadow-sm group-hover:scale-105 transition-all duration-300 object-cover 
                ${isScrolled ? 'h-8 w-8 md:h-10 md:w-10' : 'h-10 w-10 md:h-12 md:w-12'}`}
            />
            <span className={`font-serif font-bold tracking-tight transition-colors duration-300 hidden xs:block
              ${isScrolled ? 'text-stone-900 dark:text-stone-100 text-lg md:text-xl' : 'text-white text-lg md:text-2xl drop-shadow-md'}`}>
              Batata Bistrô
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`cursor-pointer font-sans font-bold tracking-widest text-xs uppercase transition-all duration-300 relative group flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-stone-600 dark:text-stone-400 hover:text-bistro-600 dark:hover:text-bistro-400' 
                    : 'text-stone-200 hover:text-white'
                }`}
              >
                {link.name}
                {link.href.startsWith('http') && <ExternalLink size={10} className="mb-0.5" />}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bistro-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Desktop Clock & Hours Tooltip */}
            <div className="relative group z-50">
               <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 cursor-help ${
                  isOpen 
                    ? 'bg-bistro-600 border-bistro-600 text-white shadow-md' 
                    : `border-transparent ${isScrolled ? 'bg-stone-200 text-stone-500 opacity-70' : 'bg-white/10 text-stone-300 opacity-60'} hover:opacity-100`
               }`}>
                  <Clock size={16} className={isOpen ? 'animate-pulse' : ''} />
                  <span className="text-xs font-bold tabular-nums tracking-wider">{currentTime}</span>
               </div>

               {/* Dropdown Menu */}
               <div className="absolute top-full right-0 pt-4 hidden group-hover:block w-72 origin-top-right animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-white dark:bg-stone-900 rounded-xl shadow-2xl p-5 border border-stone-100 dark:border-stone-800 relative">
                     <div className="absolute -top-2 right-6 w-4 h-4 bg-white dark:bg-stone-900 transform rotate-45 border-t border-l border-stone-100 dark:border-stone-800"></div>
                     <div className="flex items-center gap-2 mb-4 text-bistro-600 dark:text-bistro-400">
                        <CalendarDays size={18} />
                        <span className="font-serif font-bold text-lg">Horários</span>
                     </div>
                     <ul className="space-y-2">
                        {OPERATING_SCHEDULE.map((item, index) => {
                           const isToday = new Date().getDay() === index;
                           return (
                             <li key={item.day} className={`flex justify-between text-xs py-1 border-b border-stone-50 dark:border-stone-800 last:border-0 ${
                               isToday ? 'font-bold text-stone-900 dark:text-white' : 'text-stone-500 dark:text-stone-400'
                             }`}>
                               <span>{item.day}</span>
                               <span className={item.hours === 'Fechado' ? 'text-stone-400' : ''}>{item.hours}</span>
                             </li>
                           );
                        })}
                     </ul>
                     <div className={`mt-4 text-center text-[10px] font-bold uppercase tracking-widest py-1.5 rounded ${
                        isOpen ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
                     }`}>
                        {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
                     </div>
                  </div>
               </div>
            </div>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
             <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 shadow-sm border border-transparent ${
                isOpen 
                  ? 'bg-bistro-600 text-white border-bistro-500/50' 
                  : 'bg-stone-200/80 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 opacity-90'
             }`}>
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOpen ? 'bg-white animate-pulse' : 'bg-stone-400'}`}></div>
                <span className="text-[9px] font-bold uppercase tracking-wider leading-none pt-[1px]">
                  {isOpen ? 'Aberto' : 'Fechado'}
                </span>
             </div>

            <button 
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-colors duration-300 ${isScrolled ? 'text-stone-800 dark:text-stone-200' : 'text-white'}`}
            >
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-md transition-colors duration-300 ${isScrolled ? 'text-stone-800 dark:text-stone-200' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-stone-900 shadow-2xl border-t border-stone-100 dark:border-stone-800 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="block px-4 py-4 text-base font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 hover:text-bistro-600 dark:hover:text-bistro-400 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg cursor-pointer border-b border-stone-100 dark:border-stone-800 last:border-0"
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.href.startsWith('http') && <ExternalLink size={14} />}
                </span>
              </a>
            ))}
            
            {/* Mobile Hours List */}
            <div className="mt-6 px-4 py-4 bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-100 dark:border-stone-700">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-wide flex items-center gap-2">
                        <Clock size={14} /> Horário de Funcionamento
                    </span>
                </div>
                <ul className="space-y-1.5">
                    {OPERATING_SCHEDULE.map((item, index) => (
                        <li key={index} className="flex justify-between text-[11px] text-stone-500 dark:text-stone-400 border-b border-stone-200/50 dark:border-stone-700/50 last:border-0 pb-1">
                            <span>{item.day.split('-')[0]}</span>
                            <span>{item.hours}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;