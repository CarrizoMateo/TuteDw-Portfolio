import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,#2563eb22,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Frontend Developer
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Hola, soy{" "}
            <span className="text-blue-500">
              Mateo
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Desarrollo aplicaciones web modernas utilizando React,
            TypeScript y Tailwind CSS, priorizando interfaces limpias,
            responsivas y una excelente experiencia de usuario.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
            >
            Ver proyectos
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-7 py-3 font-semibold transition hover:border-blue-500"
            >
              Contactarme
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}