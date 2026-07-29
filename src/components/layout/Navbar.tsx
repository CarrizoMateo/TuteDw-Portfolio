export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold">
          TuteDw<span className="text-blue-500">.</span>
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="transition hover:text-blue-400">
            Sobre mí
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Proyectos
          </a>

          <a href="#skills" className="transition hover:text-blue-400">
            Tecnologías
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contacto
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-500"
        >
          Contactarme
        </a>
      </div>
    </header>
  );
}