import { FaCode, FaLayerGroup } from "react-icons/fa"; // Trocamos o Hi pelo FaLayerGroup

export default function About() {
  const stats = [
    { label: "Anos de Estudo", value: "5+" },
    { label: "Projetos", value: "10+" },
    { label: "Formação", value: "FATEC" },
  ];

  return (
    <section id="sobre" className="py-20 px-6 max-w-5xl mx-auto">
      <header className="mb-12">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-2 block">
  Quem Sou
</span>
<h2 className="text-4xl font-extrabold tracking-tight text-white">
  Minha Jornada na Tecnologia
</h2>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Comecei no mundo da TI em 2018 cursando Técnico em Informática na ETEC e me especializei na área de Front-end.
          </p>
          <p>
            Após o término, iniciei Desenvolvimento de Sistemas obtendo conhecimentos em UX, e finalizei o curso superior em Tecnólogo em Análise e Desenvolvimento de Sistemas em 2023.
          </p>
          
          <div className="grid grid-cols-3 gap-4 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-cyan-400">{stat.value}</div>
                <div className="text-xs uppercase mt-2 text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Ícones Animados */}
       <div className="relative flex justify-center items-center h-80 w-full">
  {/* Ícone de Código */}
  <div className="absolute left-10 bottom-10 animate-float text-cyan-600/20 text-9xl">
    <FaCode />
  </div>

  {/* Ícone de Camadas (Agora usando FaLayerGroup) */}
  <div className="absolute right-10 top-10 animate-float delay-1 text-cyan-500/20 text-8xl">
    <FaLayerGroup />
  </div>
</div>
      </div>
    </section>
  );
}