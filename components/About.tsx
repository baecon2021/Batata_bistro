import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="sobre" 
      className="py-20 md:py-48 bg-stone-950 overflow-hidden relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-stone-900/30"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          
          <div className="space-y-4">
            <span className="text-bistro-500 font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px]">
              Tradição e Inovação
            </span>
            <div className="h-px w-16 md:w-24 bg-bistro-800 mx-auto"></div>
          </div>

          <h2 className="text-4xl md:text-8xl font-serif text-stone-100 leading-[1.1] md:leading-[1] tracking-tight text-balance">
            Elevando o simples ao <span className="text-bistro-500 italic">extraordinário</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-left items-start pt-8 border-t border-stone-900/50">
            <p className="text-xl md:text-2xl text-stone-300 font-serif italic leading-relaxed">
              "Nascemos do desejo de transformar a batata recheada em uma experiência de alta gastronomia."
            </p>
            
            <div className="space-y-6 text-stone-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                No <strong className="text-stone-200 font-medium">Batata Bistrô</strong>, cada prato é uma sinfonia de texturas. Da cremosidade do requeijão à nossa palha artesanal ultra-crocante.
              </p>
              <p>
                Unimos o conforto da culinária afetiva com o rigor técnico de um verdadeiro bistrô, garantindo uma experiência memorável em cada pedido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;