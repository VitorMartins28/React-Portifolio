import { useState } from "react"; // Adicionado useState
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiMysql, SiAdobephotoshop, SiTailwindcss, SiVite } from "react-icons/si";

export default function Tools() {
  // Estado para controlar qual card está virado no mobile
  const [activeCard, setActiveCard] = useState(null);

  const ferramentas = [
    { name: "React", icon: <FaReact />, color: "text-sky-400", description: "Desenvolvimento de SPAs com hooks e componentes." },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400", description: "Estilização rápida com foco em performance e utilitários." },
    { name: "Vite", icon: <SiVite />, color: "text-purple-400", description: "Build system moderno que acelera o desenvolvimento." },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", description: "Manipulação de DOM e lógica assíncrona com ES6+." },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600", description: "Estrutura web semântica e SEO friendly." },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-600", description: "Modelagem de dados e consultas complexas." },
    { name: "Java", icon: <FaJava />, color: "text-red-600", description: "Backend escalável com Spring Boot e POO." },
    { name: "Photoshop", icon: <SiAdobephotoshop />, color: "text-blue-500", description: "Criação de assets e prototipagem de UI." },
  ];

  const handleCardClick = (name) => {
    // Se clicar no que já está aberto, fecha. Se não, abre o novo.
    setActiveCard(activeCard === name ? null : name);
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="text-cyan-400 uppercase tracking-widest text-xs font-bold font-mono">Stack</span>
      <h2 className="text-4xl font-bold mt-2 mb-4 text-white">Minhas Ferramentas</h2>
      
      {/* AVISO PARA MOBILE */}
      <p className="text-zinc-500 text-sm mb-12 md:hidden animate-pulse">
        (Toque no card para ver detalhes)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {ferramentas.map((tool) => (
          <div 
            key={tool.name} 
            className="group h-48 perspective cursor-pointer"
            onClick={() => handleCardClick(tool.name)}
          >
            <div className={`relative w-full h-full transition-all duration-500 preserve-3d 
              ${activeCard === tool.name ? 'rotate-y-180' : ''} 
              md:group-hover:rotate-y-180`}
            >              
              {/* FRENTE DO CARD */}
              <div className="absolute inset-0 backface-hidden bg-zinc-900/50 border border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-4">
                <div className={`text-6xl ${tool.color}`}>
                  {tool.icon}
                </div>
                <span className="font-bold text-sm uppercase tracking-widest text-zinc-400">{tool.name}</span>
              </div>

              {/* VERSO DO CARD */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-cyan-950 border border-cyan-500/50 rounded-3xl flex items-center justify-center p-6">
                <p className="text-sm text-cyan-50 text-center leading-relaxed font-medium">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}