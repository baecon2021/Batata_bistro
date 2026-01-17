import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { Smartphone, RotateCw } from 'lucide-react';
import { BRAND_LOGO } from './constants';

const OrientationLock: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-stone-900 flex flex-col items-center justify-center text-center p-8 landscape:flex portrait:hidden md:landscape:hidden">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-bistro-600 blur-xl opacity-20 rounded-full"></div>
        <img 
          src={BRAND_LOGO} 
          alt="Batata Bistrô" 
          className="w-20 h-20 rounded-full border-2 border-stone-700 relative z-10"
        />
      </div>
      
      <div className="space-y-4 max-w-sm animate-pulse">
        <div className="flex justify-center text-bistro-500 mb-4">
           <RotateCw size={48} className="animate-spin-slow" />
        </div>
        <h2 className="text-2xl font-serif text-white">Por favor, gire seu celular</h2>
        <p className="text-stone-400 font-light leading-relaxed">
          Para garantir a melhor experiência e apreciar todos os detalhes do nosso bistrô, este site foi desenhado para ser visualizado em modo retrato.
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-bistro-200 dark:selection:bg-bistro-800 selection:text-bistro-900 dark:selection:text-bistro-100 bg-bistro-50 dark:bg-stone-900 transition-colors duration-300">
      {/* Landscape Lock Overlay */}
      <OrientationLock />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default App;