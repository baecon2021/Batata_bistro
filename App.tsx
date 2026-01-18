import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-bistro-800 selection:text-bistro-100 bg-stone-950 transition-colors duration-300 relative">
      
      {/* Texture Overlay - Optimized via opacity and blend mode */}
      <div 
        className="fixed inset-0 z-[40] pointer-events-none opacity-[0.05] mix-blend-soft-light bg-repeat"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')", backgroundSize: '250px' }}
        aria-hidden="true"
      ></div>

      <Navbar />
      
      <main id="main-content">
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