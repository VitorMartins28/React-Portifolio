import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    // Adicionei py-20 para não colar no topo no mobile
    <section className="min-h-screen flex items-center px-6 max-w-7xl mx-auto py-20 md:py-0">
      {/* No mobile: grid-cols-1 (uma coluna) 
         No desktop: md:grid-cols-2 (duas colunas)
         flex-col-reverse: Faz o texto ficar abaixo da foto no mobile se preferir, 
         ou mantenha a ordem natural.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LADO DA FOTO - Aparece primeiro no mobile com 'order-first' */}
        <div className="flex justify-center relative order-first md:order-last">
          {/* Diminuí de w-80 para w-64 no mobile */}
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
            {/* Brilho Neon */}
            <div className="absolute inset-0 rounded-full border-[3px] border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6),inset_0_0_10px_rgba(34,211,238,0.4)] animate-pulse z-20 pointer-events-none"></div>
            
            <div className="w-full h-full rounded-full border-4 border-zinc-900 overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="/vitor.jpg" 
                alt="Vitor Martins" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* LADO DO TEXTO */}
        <div className="space-y-6 text-center md:text-left">
          <span className="text-cyan-400 font-bold text-sm uppercase tracking-[0.3em]">
            Olá, eu sou Vitor Martins
          </span>
          
          {/* Texto menor no mobile (text-4xl) e maior no desktop (md:text-7xl) */}
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Desenvolvedor <br />
            <span className="text-cyan-400 block min-h-[60px] md:min-h-[80px] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Typewriter
                options={{
                  strings: ["Freelancer", "Front-end", "UI/UX Lover", "Web Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-light">
            Defendendo boas práticas e inovações da tecnologia, desenvolvendo projetos WEB e DIGITAIS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projetos" className="bg-cyan-400 text-black px-8 py-4 rounded-full font-black flex items-center justify-center gap-2 hover:bg-cyan-300 transition-all">
              Ver Projetos <span>→</span>
            </a>
            <a href="#contato" className="border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all text-center">
              Contato
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}