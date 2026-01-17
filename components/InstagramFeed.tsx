import React from 'react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS, INSTAGRAM_URL } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col items-center mb-12">
          <Instagram className="w-8 h-8 text-bistro-600 dark:text-bistro-500 mb-4" />
          <h2 className="text-3xl font-serif text-stone-800 dark:text-stone-100 mb-2">Siga @batata_bistro</h2>
          <p className="text-stone-500 dark:text-stone-400">Acompanhe nossas novidades e inspire-se.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a 
              key={post.id} 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group cursor-pointer bg-stone-300 dark:bg-stone-800"
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                loading="lazy"
                width="400"
                height="400"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
            <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-stone-800 dark:bg-stone-700 text-white rounded hover:bg-stone-700 dark:hover:bg-stone-600 transition-colors inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            >
                <Instagram size={18} />
                Seguir no Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;