import { useState, useEffect } from "react";
import logoBrown from "@/assets/mauih_brown.png";
import logoWhite from "@/assets/mauih_white.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-offwhite/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="relative h-10 md:h-12 block" aria-label="Mauih Arquitetura">
          <img
            src={logoWhite}
            alt="Mauih Arquitetura"
            className={`h-10 md:h-12 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={logoBrown}
            alt=""
            aria-hidden="true"
            className={`h-10 md:h-12 absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-sans-modern text-sm tracking-wider transition-colors duration-300 uppercase ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-white hover:text-secondary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-offwhite/98 backdrop-blur-md border-t border-border px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans-modern text-sm tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
