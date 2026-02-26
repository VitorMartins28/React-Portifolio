import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu e navegar
  const navTo = (dest) => {
    setIsOpen(false);
    window.location.href = dest;
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6">
      {/* LOGO */}
      <div className="text-white font-black text-2xl z-[110]">
        ANKER<span className="text-cyan-400">.</span>
      </div>

      {/* BOTÃO HAMBÚRGUER - Ele fica SEMPRE acima de tudo */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-[110] text-cyan-400 text-4xl p-2"
      >
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* MENU MOBILE - O "CÁLICE DE SANGUE" (Cobre tudo) */}
      <div className={`
        fixed inset-0 w-full h-screen bg-black transition-all duration-500 ease-in-out z-[105]
        flex flex-col items-center justify-center gap-8
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}>
        <button onClick={() => navTo("#inicio")} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">INÍCIO</button>
        <button onClick={() => navTo("#sobre")} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">SOBRE</button>
        <button onClick={() => navTo("#skills")} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">SKILLS</button>
        <button onClick={() => navTo("#contato")} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">CONTATO</button>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-8 text-zinc-400 font-medium">
        <a href="#inicio" className="hover:text-cyan-400">INÍCIO</a>
        <a href="#sobre" className="hover:text-cyan-400">SOBRE</a>
        <a href="#skills" className="hover:text-cyan-400">SKILLS</a>
        <a href="#contato" className="hover:text-cyan-400">CONTATO</a>
      </div>
    </nav>
  );
}