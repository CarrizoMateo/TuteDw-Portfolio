import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-semibold uppercase tracking-widest text-blue-500">
          Proyectos
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Algunos de mis trabajos
        </h2>

        <div className="mt-14 space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-blue-500"
            >
              <div className="grid items-center lg:grid-cols-2">
  <img
    src={project.image}
    alt={project.title}
    className="w-full transition duration-300 hover:scale-[1.02]"
  />

                <div className="flex flex-col justify-center p-10">
                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">
  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
  >
    <ExternalLink size={18} />
    Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-blue-500"
  >
    GitHub
  </a>
</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}