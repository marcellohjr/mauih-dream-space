import logoPink from "@/assets/mauih_pink.png";

export default function Footer() {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <img src={logoPink} alt="Mauih" className="h-10 opacity-70" />
        <p className="font-sans-modern text-xs text-primary-foreground/50 tracking-wider">
          © {new Date().getFullYear()} Mauih Arquitetura & Interiores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
