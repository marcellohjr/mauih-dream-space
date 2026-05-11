import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511989569045&text=Ol%C3%A1%2C+encontrei+o+site+no+google+e+gostaria+de+fazer+um+or%C3%A7amento%21";

function openWhatsApp(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) {
    window.location.href = url;
  }
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", phone: "", projectType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name}. Tenho interesse em um projeto de ${form.projectType}. Meu telefone: ${form.phone}`;
    const url = `https://api.whatsapp.com/send?phone=5511989569045&text=${encodeURIComponent(msg)}`;
    openWhatsApp(url);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contato</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-4">Vamos transformar seu espaço?</h2>
          <p className="font-sans-modern text-muted-foreground">
            +85 projetos realizados · 5+ anos de experiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-offwhite border border-border px-5 py-4 font-sans-modern text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-offwhite border border-border px-5 py-4 font-sans-modern text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-colors"
            />
            <select
              required
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              className="bg-offwhite border border-border px-5 py-4 font-sans-modern text-sm text-foreground focus:outline-none focus:border-secondary transition-colors"
            >
              <option value="">Tipo de projeto</option>
              <option value="Residencial completo">Residencial completo</option>
              <option value="Reforma">Reforma</option>
              <option value="Quarto infantil">Quarto infantil</option>
              <option value="Área externa">Área externa</option>
              <option value="Consultoria">Consultoria</option>
              <option value="Outro">Outro</option>
            </select>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Enviar mensagem
            </button>
          </form>

          <div className="flex flex-col justify-center items-center text-center gap-6">
            <p className="font-serif text-2xl text-primary">Prefere falar diretamente?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(WHATSAPP_URL);
              }}
              className="inline-flex items-center gap-3 bg-green-600 text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-green-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
