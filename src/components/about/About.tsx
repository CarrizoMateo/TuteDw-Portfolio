import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-500 font-semibold uppercase tracking-widest">
          Sobre mí
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Desarrollo experiencias web modernas
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Soy desarrollador frontend con experiencia en React, TypeScript y Tailwind CSS. Me gusta crear interfaces modernas, responsivas y con una buena experiencia de usuario. Actualmente sigo desarrollando proyectos personales mientras busco incorporarme a un equipo donde pueda seguir creciendo profesionalmente.

          <br /><br />

          Actualmente continúo desarrollando proyectos personales para
          seguir mejorando mis habilidades y enfrentar nuevos desafíos
          profesionales.
        </p>
      </motion.div>
    </section>
  );
}