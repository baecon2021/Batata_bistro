import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-40 bg-stone-950 relative overflow-hidden">
      {/* Elementos Atmosféricos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-bistro-600/5 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-6 mb-8">
            <div className="h-[1px] w-12 bg-bistro-800"></div>
            <Instagram size={24} className="text-bistro-500" />
            <div className="h-[1px] w-12 bg-bistro-800"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 tracking-tighter leading-none">
            Essência <span className="italic text-bistro-400 font-light">Digital</span>
          </h2>
          <p className="text-stone-400 font-light text-xl max-w-2xl leading-relaxed">
            Acompanhe bastidores, novos lançamentos e a beleza de cada prato em nossa galeria exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a 
              key={post.id} 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl bg-stone-900 block ${
                index % 2 !== 0 ? 'lg:translate-y-16' : ''
              } transition-all duration-1000 transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_100px_-20px_rgba(176,125,98,0.2)]`}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125 group-hover:rotate-3"
                />
                
                {/* Stunning Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]"></div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                  <div className="flex gap-4 mb-6">
                    <Heart size={18} className="text-bistro-400 fill-bistro-400" />
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4 italic leading-tight">
                    {post.alt}
                  </h3>
                  <div className="flex items-center gap-3 text-bistro-500 font-bold uppercase text-[10px] tracking-[0.3em]">
                    Ver Publicação <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Glass Border Effect */}
                <div className="absolute inset-0 border border-white/5 rounded-3xl group-hover:border-white/20 transition-colors duration-700 pointer-events-none"></div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-48 flex flex-col items-center">
            <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="group relative inline-flex items-center gap-6 px-12 py-5 border border-white/10 hover:border-bistro-500 transition-all duration-700 rounded-full bg-white/5 backdrop-blur-xl"
            >
                <Instagram size={24} className="text-bistro-400 group-hover:scale-110 transition-transform" />
                <span className="text-stone-200 font-bold uppercase tracking-[0.3em] text-[10px] group-hover:text-white transition-colors">
                  Siga @batata_bistro
                </span>
                <div className="absolute inset-0 bg-bistro-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </a>
        </div>
      </div>

      {/* Cinematic Background Text */}
      <div className="absolute -bottom-24 left-0 w-full whitespace-nowrap opacity-[0.03] select-none pointer-events-none font-serif text-[25vw] leading-none text-white overflow-hidden italic font-light tracking-tighter">
        GALERIA EXCLUSIVA • BATATA BISTRÔ • GALERIA EXCLUSIVA
      </div>
    </section>
  );
};

export default InstagramFeed;