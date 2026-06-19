import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511989569045&text=Ol%C3%A1%2C%20encontrei%20o%20site%20no%20google%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%21";

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
import miguelDuda1 from "@/assets/miguel-duda-1.jpg";
import miguelDuda2 from "@/assets/miguel-duda-2.jpg";
import miguelDuda3 from "@/assets/miguel-duda-3.jpg";
import miguelDuda4 from "@/assets/miguel-duda-4.jpg";
import helena1 from "@/assets/helena-1.jpg";
import helena2 from "@/assets/helena-2.jpg";
import havik1 from "@/assets/havik-1.webp";
import havik2 from "@/assets/havik-2.webp";
import havik3 from "@/assets/havik-3.webp";
import havik4 from "@/assets/havik-4.webp";
import havik5 from "@/assets/havik-5.webp";
import havik6 from "@/assets/havik-6.webp";
import havik7 from "@/assets/havik-7.webp";
import havik8 from "@/assets/havik-8.webp";
import havik9 from "@/assets/havik-9.webp";
import havik10 from "@/assets/havik-10.webp";
import natEdu1 from "@/assets/natalia-eduardo-1.webp";
import natEdu2 from "@/assets/natalia-eduardo-2.webp";
import natEdu3 from "@/assets/natalia-eduardo-3.webp";
import natEdu4 from "@/assets/natalia-eduardo-4.webp";
import natEdu5 from "@/assets/natalia-eduardo-5.webp";
import natEdu6 from "@/assets/natalia-eduardo-6.webp";
import natEdu7 from "@/assets/natalia-eduardo-7.webp";
import natEdu8 from "@/assets/natalia-eduardo-8.webp";
import natEdu9 from "@/assets/natalia-eduardo-9.webp";
import antMar1 from "@/assets/antonio-martina-1.webp";
import antMar2 from "@/assets/antonio-martina-2.webp";
import antMar3 from "@/assets/antonio-martina-3.webp";
import antMar4 from "@/assets/antonio-martina-4.webp";
import antMar5 from "@/assets/antonio-martina-5.webp";
import antMar6 from "@/assets/antonio-martina-6.webp";
import antMar7 from "@/assets/antonio-martina-7.webp";
import karRic1 from "@/assets/karina-ricardo-1.webp";
import karRic2 from "@/assets/karina-ricardo-2.webp";
import karRic3 from "@/assets/karina-ricardo-3.webp";
import karRic4 from "@/assets/karina-ricardo-4.webp";
import karRic5 from "@/assets/karina-ricardo-5.webp";
import karRic6 from "@/assets/karina-ricardo-6.webp";
import karRic7 from "@/assets/karina-ricardo-7.webp";
import karRic8 from "@/assets/karina-ricardo-8.webp";
import karRic9 from "@/assets/karina-ricardo-9.webp";
import patMic1 from "@/assets/patricia-michael-1.webp";
import patMic2 from "@/assets/patricia-michael-2.webp";
import patMic3 from "@/assets/patricia-michael-3.webp";
import patMic4 from "@/assets/patricia-michael-4.webp";
import patMic5 from "@/assets/patricia-michael-5.webp";
import patMic6 from "@/assets/patricia-michael-6.webp";
import patMic7 from "@/assets/patricia-michael-7.webp";
import silvana1 from "@/assets/silvana-1.webp";
import silvana2 from "@/assets/silvana-2.webp";
import silvana3 from "@/assets/silvana-3.webp";
import silvana4 from "@/assets/silvana-4.webp";
import silvana5 from "@/assets/silvana-5.webp";
import silvana6 from "@/assets/silvana-6.webp";
import silvana7 from "@/assets/silvana-7.webp";
import silvana8 from "@/assets/silvana-8.webp";
import silvana9 from "@/assets/silvana-9.webp";
import silvana10 from "@/assets/silvana-10.webp";
import silvana11 from "@/assets/silvana-11.webp";
import silvana12 from "@/assets/silvana-12.webp";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Viviane e Douglas",
    category: "Residencial",
    description: "Ambientes residenciais com atmosfera acolhedora e refinada.",
    coverImage: viviane1,
    galleryImages: [viviane1, viviane2, viviane3, viviane4],
  },
  {
    id: 2,
    title: "Priscila e Douglas",
    category: "Residencial",
    description: "Projeto de interiores com identidade contemporânea e elegante.",
    coverImage: priscila1,
    galleryImages: [priscila1, priscila2, priscila3, priscila4, priscila5, priscila6],
  },
  {
    id: 3,
    title: "Luane e Caio",
    category: "Residencial",
    description: "Lar planejado com equilíbrio entre estética e funcionalidade.",
    coverImage: luaneCaio1,
    galleryImages: [luaneCaio1, luaneCaio2, luaneCaio3, luaneCaio4, luaneCaio5],
  },
  {
    id: 4,
    title: "Miguel e Duda",
    category: "Quartos Infantis",
    description: "Quarto infantil lúdico, suave e cheio de personalidade.",
    coverImage: miguelDuda1,
    galleryImages: [miguelDuda1, miguelDuda2, miguelDuda3, miguelDuda4],
  },
  {
    id: 5,
    title: "Quarto Helena",
    category: "Quartos Infantis",
    description: "Quarto infantil delicado, pensado para acolher, encantar e crescer junto.",
    coverImage: helena1,
    galleryImages: [helena1, helena2],
  },
  {
    id: 6,
    title: "Havik",
    category: "Empresarial",
    description: "Escritório corporativo sofisticado, com ambientes funcionais e design refinado.",
    coverImage: havik1,
    galleryImages: [havik1, havik2, havik3, havik4, havik5, havik6, havik7, havik8, havik9, havik10],
  },
  {
    id: 7,
    title: "Natália e Eduardo",
    category: "Residencial",
    description: "Residência contemporânea com ambientes integrados, iluminação acolhedora e marcenaria sob medida.",
    coverImage: natEdu1,
    galleryImages: [natEdu1, natEdu2, natEdu3, natEdu4, natEdu5, natEdu6, natEdu7, natEdu8, natEdu9],
  },
  {
    id: 8,
    title: "Antônio e Martina",
    category: "Quartos Infantis",
    description: "Quarto compartilhado lúdico, com marcenaria sob medida, parede de escalada e mural colorido.",
    coverImage: antMar1,
    galleryImages: [antMar1, antMar2, antMar3, antMar4, antMar5, antMar6, antMar7],
  },
  {
    id: 10,
    title: "Patrícia e Michael",
    category: "Residencial",
    description: "Apartamento elegante com cozinha gourmet em mármore, iluminação cênica e varanda integrada.",
    coverImage: patMic1,
    galleryImages: [patMic1, patMic2, patMic3, patMic4, patMic5, patMic6, patMic7],
  },
  {
    id: 9,
    title: "Karina e Ricardo",
    category: "Residencial",
    description: "Apartamento amplo com living integrado, jardim vertical e acabamentos sofisticados.",
    coverImage: karRic1,
    galleryImages: [karRic1, karRic2, karRic3, karRic4, karRic5, karRic6, karRic7, karRic8, karRic9],
  },
  {
    id: 11,
    title: "Silvana e Paulo",
    category: "Areas externas e Lazer",
    description: "Área de lazer completa com piscina, espaço gourmet coberto e ambientes integrados ao jardim.",
    coverImage: silvana7,
    galleryImages: [silvana7, silvana8, silvana9, silvana10, silvana11, silvana12, silvana1, silvana2, silvana3, silvana4, silvana5, silvana6],
  },
];

const midpoint = Math.ceil(projects.length / 2);
const projectsFirstHalf = projects.slice(0, midpoint);
const projectsSecondHalf = projects.slice(midpoint);

export default function PortfolioSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const { ref, className } = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-12 ${className}`}>
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-12">
            Nossos Projetos
          </h2>
        </div>

        <div className="space-y-16">
          <ProjectCarousel projects={projectsFirstHalf} onOpen={setOpenProject} ariaLabel="Carrossel de projetos — parte 1" />
          <ProjectCarousel projects={projectsSecondHalf} onOpen={setOpenProject} ariaLabel="Carrossel de projetos — parte 2" />
        </div>

        <div className="text-center mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans-modern text-sm tracking-widest uppercase hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero um projeto assim
          </a>
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}

function ProjectCarousel({
  projects,
  onOpen,
  ariaLabel,
}: {
  projects: Project[];
  onOpen: (p: Project) => void;
  ariaLabel: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-3 sm:-ml-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 shrink-0 grow-0 basis-1/2 lg:basis-1/3 pl-3 sm:pl-6 py-2"
            >
              <button
                onClick={() => onOpen(project)}
                className="group w-full h-full flex flex-col text-left rounded-2xl overflow-hidden bg-card shadow-[0_4px_20px_-8px_hsl(var(--primary)/0.15)] hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Abrir galeria do projeto ${project.title}`}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-4 sm:p-6 space-y-2 flex-1 flex flex-col">
                  <p className="font-sans-modern text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-lg sm:text-2xl font-light text-primary">
                    {project.title}
                  </h3>
                  <p className="font-sans-modern text-xs sm:text-sm text-muted-foreground leading-relaxed hidden md:block">
                    {project.description}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Projeto anterior"
        className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/90 backdrop-blur hover:bg-background shadow-lg transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Próximo projeto"
        className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/90 backdrop-blur hover:bg-background shadow-lg transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {snaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (project && emblaApi) {
      emblaApi.scrollTo(0, true);
      setSelected(0);
    }
    if (!project) setFullscreen(false);
  }, [project, emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className={cn(
          "p-0 border-0 bg-background/95 backdrop-blur-xl shadow-2xl gap-0 overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          fullscreen
            ? "max-w-none w-screen h-screen rounded-none sm:rounded-none translate-x-0 translate-y-0 left-0 top-0"
            : "max-w-6xl w-[95vw] max-h-[92vh] rounded-2xl"
        )}
      >
        <DialogTitle className="sr-only">{project?.title}</DialogTitle>
        <DialogDescription className="sr-only">{project?.description}</DialogDescription>

        {project && (
          <div className="flex flex-col h-full max-h-[92vh]">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 md:px-8 py-5 border-b border-border/40">
              <div>
                <p className="font-sans-modern text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-primary">
                  {project.title}
                </h3>
                <p className="font-sans-modern text-sm text-muted-foreground mt-1 hidden md:block">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFullscreen((f) => !f)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label={fullscreen ? "Sair de tela cheia" : "Tela cheia"}
                >
                  {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative flex-1 min-h-0 bg-muted/30">
              <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {project.galleryImages.map((src, i) => (
                    <div
                      key={i}
                      className="min-w-0 shrink-0 grow-0 basis-full h-full flex items-center justify-center p-2 md:p-6"
                    >
                      <img
                        src={src}
                        alt={`${project.title} — imagem ${i + 1}`}
                        loading="lazy"
                        className={cn(
                          "max-w-full max-h-full object-contain rounded-lg",
                          fullscreen ? "h-[calc(100vh-220px)]" : "h-[55vh] md:h-[60vh]"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {project.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur hover:bg-background shadow-lg transition-all"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur hover:bg-background shadow-lg transition-all"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.galleryImages.length > 1 && (
              <div className="px-4 md:px-8 py-4 border-t border-border/40">
                <div className="flex gap-2 md:gap-3 overflow-x-auto justify-center">
                  {project.galleryImages.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => scrollTo(i)}
                      className={cn(
                        "relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-300",
                        selected === i
                          ? "ring-2 ring-primary opacity-100"
                          : "opacity-60 hover:opacity-100"
                      )}
                      aria-label={`Ir para imagem ${i + 1}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
