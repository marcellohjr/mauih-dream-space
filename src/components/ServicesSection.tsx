import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511989569045&text=Ol%C3%A1%2C%20encontrei%20o%20site%20no%20google%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21";

const steps = [
  { num: "01", title: "Briefing e Entendimento", desc: "Escutamos suas necessidades, estilo de vida e sonhos para o espaço." },
  { num: "02", title: "Conceito e Layout", desc: "Criamos o conceito do projeto com layout funcional e identidade visual." },
  { num: "03", title: "Projeto 3D", desc: "Tenha a sensação de estar dentro do ambiente antes da primeira etapa da obra." },
  { num: "04", title: "Projeto Executivo", desc: "Documentação técnica completa para garantir precisão na execução." },
  { num: "05", title: "Acompanhamento", desc: "Acompanhamos toda a obra, do início ao acabamento final." },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Como trabalhamos</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-4">Nossas Etapas</h2>
          <p className="font-sans-modern text-muted-foreground max-w-xl mx-auto">
            Processo organizado, transparente e com acompanhamento completo do conceito à entrega final.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <StepItem key={step.num} step={step} isLeft={isLeft} index={i} />
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero começar meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, isLeft, index }: { step: { num: string; title: string; desc: string }; isLeft: boolean; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Mobile layout */}
      <div className="md:hidden flex items-start gap-4 w-full">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
          <span className="font-serif text-lg text-primary">{step.num}</span>
        </div>
        <div>
          <h3 className="font-serif text-xl text-primary mb-1">{step.title}</h3>
          <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? "" : "flex-row-reverse"}`}>
        <div className={`w-5/12 ${isLeft ? "text-right pr-12" : "text-left pl-12"}`}>
          <h3 className="font-serif text-2xl text-primary mb-2">{step.title}</h3>
          <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
        </div>
        <div className="w-2/12 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center z-10 bg-background">
            <span className="font-serif text-lg text-primary">{step.num}</span>
          </div>
        </div>
        <div className="w-5/12" />
      </div>
    </div>
  );
}
