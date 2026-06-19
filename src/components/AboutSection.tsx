import { useScrollReveal } from "@/hooks/useScrollReveal";
import thaisImg from "@/assets/architect-thais.jpg";
import marianaImg from "@/assets/architect-mariana.jpg";

const stats = [
  { number: "+85", label: "Projetos desde 2020" },
  { number: "14+", label: "Anos de experiência" },
  { number: "100%", label: "Dedicação ao cliente" },
];

export default function AboutSection() {
  const { ref: refA, className: classA } = useScrollReveal();
  const { ref: refB, className: classB } = useScrollReveal();
  const { ref: refC, className: classC } = useScrollReveal();

  return (
    <section id="sobre" className="section-padding bg-offwhite">
      <div className="max-w-6xl mx-auto">
        {/* Company */}
        <div ref={refA} className={`text-center mb-20 ${classA}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Sobre nós</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-6">
            Arquitetura sensível, funcional e atemporal
          </h2>
          <p className="font-sans-modern text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Na Mauih Arquitetura, cada projeto nasce da escuta atenta e do desejo de criar espaços que
            refletem a identidade única de cada cliente. Unimos estética, funcionalidade e personalização
            para transformar ambientes em experiências.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl md:text-4xl text-secondary">{s.number}</p>
                <p className="font-sans-modern text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div ref={refB} className={`text-center mb-20 ${classB}`}>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-primary mb-6">Nossa História</h3>
          <p className="font-sans-modern text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Mauih nasceu da amizade e da paixão compartilhada por transformar espaços. Duas amigas
            arquitetas que começaram juntas e, com o crescimento natural de cada projeto, fundaram um
            escritório focado em projetos residenciais completos — do conceito à entrega.
          </p>
        </div>

        {/* Architects */}
        <div ref={refC} className={`grid md:grid-cols-2 gap-12 ${classC}`}>
          {[
            {
              name: "Thaís",
              role: "Conceito & Estética",
              img: thaisImg,
              desc: "Criativa, detalhista e sensível. Foco em conceito, estética e personalização. Valoriza a escuta e a identidade do cliente em cada projeto.",
            },
            {
              name: "Mariana",
              role: "Execução & Projeto",
              img: marianaImg,
              desc: "Técnica, estratégica e objetiva. Foco em execução e projeto executivo. Garante viabilidade e precisão em cada detalhe construtivo.",
            },
          ].map((arch) => (
            <div key={arch.name} className="text-center group">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={arch.img}
                  alt={arch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h4 className="font-serif text-2xl text-primary mb-1">{arch.name}</h4>
              <p className="font-sans-modern text-xs tracking-[0.2em] uppercase text-secondary mb-3">{arch.role}</p>
              <p className="font-sans-modern text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">{arch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
