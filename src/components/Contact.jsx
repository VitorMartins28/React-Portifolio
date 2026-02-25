import { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram 
} from "react-icons/fa"; // Importação corrigida

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Função para enviar o e-mail
  const sendEmail = (e) => {
  e.preventDefault();

  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicK = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Barreira de Proteção Merlin Style
  if (publicK === "perfect_cube_impenetrable_9999" || !publicK) {
    console.warn("✨ Merlin diz: 'Você não tem poder mágico suficiente (API KEY) para conjurar este envio!'");
    alert("Feitiço interrompido! Chaves de acesso não encontradas no Reino de Liones.");
    return;
  }

  setLoading(true);
  
  // Conjuração Real
  emailjs.sendForm(service, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, publicK)
    .then(() => {
       console.log("🔥 Raio Exterminador! Mensagem enviada com sucesso.");
       setSent(true);
       setLoading(false);
       e.target.reset();
    })
    .catch(() => {
       console.error("🚫 Maldição detectada! O envio falhou.");
       setLoading(false);
    });
};

  const socials = [
    { 
      icon: <FaEnvelope />, 
      href: "mailto:vitormartins281999@gmail.com", 
      label: "Email" 
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://www.linkedin.com/in/v%C3%ADtor-martins-21108618b/", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/VitorMartins28", 
      label: "GitHub" 
    },
    { 
      icon: <FaInstagram />, 
      href: "https://instagram.com/anker_developer", 
      label: "Instagram" 
    },
  ];

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Cabeçalho */}
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold font-mono block mb-2">
          Vamos conversar
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          Entre em Contato
        </h2>

        {/* Formulário com Glassmorphism */}
        <div className="bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-md p-8 rounded-3xl shadow-2xl mb-16 text-left">
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Nome</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="Seu nome"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">E-mail</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Mensagem</label>
              <textarea 
                name="message"
                rows="4" 
                required
                placeholder="Como posso te ajudar?"
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none text-white"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-300 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              {loading ? "ENVIANDO..." : sent ? "MENSAGEM ENVIADA! ✓" : <>ENVIAR MENSAGEM <FaPaperPlane /></>}
            </button>
          </form>
        </div>

        {/* Texto e Ícones Sociais */}
        <p className="text-zinc-400 text-lg mb-8">Ou me encontre nas redes sociais:</p>
        <div className="flex justify-center gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full 
                         bg-zinc-900 border border-zinc-800 text-cyan-400 text-2xl
                         hover:bg-cyan-400 hover:text-black hover:border-cyan-400 
                         transition-all duration-300 hover:-translate-y-2 group shadow-lg"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}