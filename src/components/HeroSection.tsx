import heroImg from "@/assets/hero-living.jpg";
import logoPink from "@/assets/mauih_pink.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior de sala de estar elegante"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img src={logoPink} alt="Mauih" className="h-16 md:h-20 mx-auto mb-8 animate-fade-in" />
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6 animate-fade-up">
          Projetos que traduzem quem você é em cada detalhe
        </h1>
        <p className="font-sans-modern text-primary-foreground/80 text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Arquitetura de interiores personalizada, funcional e atemporal
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contato"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-secondary/90 transition-all duration-300"
          >
            Solicitar Projeto
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
