import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
    title: "Viviane",
    category: "Residencial",
    description: "Ambientes residenciais com atmosfera acolhedora e refinada.",
    coverImage: viviane1,
    galleryImages: [viviane1, viviane2, viviane3, viviane4],
  },
  {
    id: 2,
    title: "Priscila",
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
];

export default function PortfolioSection() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans-modern text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-primary mb-12">
            Nossos Projetos
          </h2>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setOpenProject(project)}
                className="group text-left rounded-2xl overflow-hidden bg-card shadow-[0_4px_20px_-8px_hsl(var(--primary)/0.15)] hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                <div className="p-6 space-y-2">
                  <p className="font-sans-modern text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl font-light text-primary">
                    {project.title}
                  </h3>
                  <p className="font-sans-modern text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
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
