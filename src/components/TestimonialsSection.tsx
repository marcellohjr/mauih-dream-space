import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Luana M.",
    text: "A Mauih superou todas as nossas expectativas. Cada detalhe foi pensado com carinho e profissionalismo. Nossa casa ficou exatamente como sonhamos.",
  },
  {
    name: "Priscila D.",
    text: "A experiência foi incrível do início ao fim. A equipe é atenciosa, criativa e muito organizada. Recomendo de olhos fechados!",
  },
  {
    name: "Carol R.",
    text: "O que mais nos encantou foi a escuta. Elas realmente entenderam nosso estilo de vida e traduziram isso em cada ambiente. Resultado impecável.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="depoimentos" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Depoimentos</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary-foreground">O que nossos clientes dizem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: { name: string; text: string }; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`bg-primary-foreground/5 border border-primary-foreground/10 p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="font-serif text-4xl text-secondary mb-4">"</div>
      <p className="font-sans-modern text-sm text-primary-foreground/80 leading-relaxed mb-6">{testimonial.text}</p>
      <p className="font-serif text-lg text-secondary">{testimonial.name}</p>
    </div>
  );
}
