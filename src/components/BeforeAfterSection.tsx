import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import beforeImg from "@/assets/before-kitchen.jpg";
import afterImg from "@/assets/after-kitchen.jpg";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511989569045&text=Ol%C3%A1%2C%20encontrei%20o%20site%20no%20google%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const { ref, className } = useScrollReveal();

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
        <div ref={ref} className={`text-center mb-12 ${className}`}>
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

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Transforme seu espaço
          </a>
        </div>
      </div>
    </section>
  );
}
