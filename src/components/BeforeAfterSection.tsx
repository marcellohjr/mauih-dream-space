import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import beforeImg from "@/assets/before-kitchen.jpg";
import afterImg from "@/assets/after-kitchen.jpg";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const { ref, isVisible } = useScrollReveal();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Transformação</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-4">Antes & Depois</h2>
          <p className="font-sans-modern text-muted-foreground">Arraste para ver a transformação</p>
        </div>

        <div
          className="relative aspect-[4/3] overflow-hidden cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleTouch}
        >
          {/* After (full) */}
          <img src={afterImg} alt="Depois" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

          {/* Before (clipped) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src={beforeImg} alt="Antes" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${(100 / sliderPos) * 100}%`, maxWidth: `${(100 / sliderPos) * 100}%` }} loading="lazy" />
          </div>

          {/* Slider line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/80" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-lg">
              <span className="text-primary text-xs font-bold">↔</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-primary/70 text-primary-foreground px-3 py-1 text-xs font-sans-modern tracking-wider uppercase">Antes</div>
          <div className="absolute top-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 text-xs font-sans-modern tracking-wider uppercase">Depois</div>
        </div>

        <p className="text-center font-sans-modern text-sm text-muted-foreground mt-4">Cozinha Iago — Projeto completo</p>
      </div>
    </section>
  );
}
