import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import viviane1 from "@/assets/viviane-1.jpg";
import viviane2 from "@/assets/viviane-2.jpg";
import viviane3 from "@/assets/viviane-3.jpg";
import viviane4 from "@/assets/viviane-4.jpg";
import priscila1 from "@/assets/priscila-1.jpg";
import priscila2 from "@/assets/priscila-2.jpg";
import priscila3 from "@/assets/priscila-3.jpg";
import priscila4 from "@/assets/priscila-4.jpg";
import priscila5 from "@/assets/priscila-5.jpg";
import priscila6 from "@/assets/priscila-6.jpg";
import luaneCaio1 from "@/assets/luane-caio-1.jpg";
import luaneCaio2 from "@/assets/luane-caio-2.jpg";
import luaneCaio3 from "@/assets/luane-caio-3.jpg";
import luaneCaio4 from "@/assets/luane-caio-4.jpg";
import luaneCaio5 from "@/assets/luane-caio-5.jpg";

type Category = "Todos" | "Residencial" | "Quartos Infantis" | "Áreas Externas";

const projects = [
  { name: "Viviane", img: viviane1, cat: "Residencial" as const },
  { name: "Viviane", img: viviane2, cat: "Residencial" as const },
  { name: "Viviane", img: viviane3, cat: "Residencial" as const },
  { name: "Viviane", img: viviane4, cat: "Residencial" as const },
  { name: "Priscila", img: priscila1, cat: "Residencial" as const },
  { name: "Priscila", img: priscila2, cat: "Residencial" as const },
  { name: "Priscila", img: priscila3, cat: "Residencial" as const },
  { name: "Priscila", img: priscila4, cat: "Residencial" as const },
  { name: "Priscila", img: priscila5, cat: "Residencial" as const },
  { name: "Priscila", img: priscila6, cat: "Residencial" as const },
  { name: "Luane e Caio", img: luaneCaio1, cat: "Residencial" as const },
  { name: "Luane e Caio", img: luaneCaio2, cat: "Residencial" as const },
  { name: "Luane e Caio", img: luaneCaio3, cat: "Residencial" as const },
  { name: "Luane e Caio", img: luaneCaio4, cat: "Residencial" as const },
  { name: "Luane e Caio", img: luaneCaio5, cat: "Residencial" as const },
];

const categories: Category[] = ["Todos", "Residencial", "Quartos Infantis", "Áreas Externas"];

const INITIAL_COUNT = 6;

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>("Todos");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const { ref, isVisible } = useScrollReveal();

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.cat === active);
  const visibleProjects = filtered.slice(0, visibleCount);

  const handleCategoryChange = (cat: Category) => {
    setActive(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section id="portfolio" className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfólio</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-8">Nossos Projetos</h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans-modern text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-primary border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <div key={`${project.name}-${i}`} className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
              <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif text-xl text-primary-foreground">{project.name}</p>
                  <p className="font-sans-modern text-xs text-primary-foreground/70 tracking-wider uppercase">{project.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
