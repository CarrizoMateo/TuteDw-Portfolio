import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Vite",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-blue-500 font-semibold uppercase tracking-widest">
          Tecnologías
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Stack principal
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-500/10"
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}