import { useState, useEffect } from "react";
import { FaAnchor, FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar a cor ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#", icon: <FaHome /> },
    { name: "Sobre", href: "#sobre", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projetos", href: "#projetos", icon: <FaBriefcase /> },
    { name: "Contato", href: "#contato", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "h-16 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5" : "h-24 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO - Minimalista e Forte */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
             <FaAnchor className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:rotate-12 transition-transform duration-300" />
             <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full group-hover:bg-cyan-400/40 transition-all"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Anker<span className="text-cyan-400">.</span></span>
        </div>

        {/* DESKTOP NAV - Links com underline animado */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-all group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE - Botão Estilizado */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-cyan-400 shadow-lg"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* MOBILE MENU - Estilo "Glass Overlay" */}
      <div className={`
        fixed inset-0 z-[90] bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}>
        {navLinks.map((link, index) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${index * 50}ms` }}
            className={`
              flex items-center gap-4 text-3xl font-black uppercase tracking-tighter text-white hover:text-cyan-400 transition-all
              ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
          >
            <span className="text-cyan-500 text-xl">{link.icon}</span>
            {link.name}
          </a>
        ))}
        
        {/* Rodapé do Menu Mobile */}
        <div className="absolute bottom-10 text-zinc-600 text-xs tracking-[0.5em] uppercase">
          Anker Developer © 2026
        </div>
      </div>
    </nav>
  );
}