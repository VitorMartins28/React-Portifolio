export default function Projects() {
  const meusProjetos = [
    {
      title: "Anker Dev 3.0",
      description: "Meu portfólio minimalista construído com React e Tailwind.",
      tags: ["React", "Tailwind", "Vite"],
      link: "#"
    },
        {
      title: "Anker Dev 2.0",
      description: "Meu portfólio minimalista construído com Bootstrap.",
      tags: ["Bootstrap", "CSS", "JavaScript"],
      link: "https://anker-dev.vercel.app/"
    },
    {
      title: "World Cup Qatar 2022",
      description: "Atividade desenvolvida com o tema da FIFA World Cup 2022. Layout temático.",
      tags: ["CSS", "Html", "JavaScript"],
      link: "https://world-cup-ten.vercel.app/"
    },
     {
      title: "Design Digital",
      description: "Portfólio de artes visuais, criação de marcas e layouts para redes sociais.",
      tags: ["Photoshop", "Social Media"],
      link: "https://www.instagram.com/anker_developer/"
    },
  ];

return (
  <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
      <span className="text-blue-500 font-mono text-xl">01.</span> Projetos Selecionados
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {meusProjetos.map((proj, index) => (
    <a 
      key={index} 
      href={proj.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 
                 backdrop-blur-md 
                 hover:-translate-y-2 hover:bg-zinc-800/50 hover:border-blue-500/50 
                 transition-all duration-300 ease-out block relative overflow-hidden"
    >
      {/* Brilho interno sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 relative z-10 transition-colors">
        {proj.title}
      </h3>
      
      <p className="text-zinc-400 mb-6 relative z-10">
        {proj.description}
      </p>

      <div className="flex gap-3 relative z-10">
        {proj.tags.map(tag => (
          <span key={tag} className="text-xs font-mono bg-zinc-800/80 px-3 py-1 rounded-full text-blue-300 border border-zinc-700/50">
            {tag}
          </span>
        ))}
      </div>
    </a>
  ))}
</div>
  </section>
);
}