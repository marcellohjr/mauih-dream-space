import { useScrollReveal } from "@/hooks/useScrollReveal";

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
