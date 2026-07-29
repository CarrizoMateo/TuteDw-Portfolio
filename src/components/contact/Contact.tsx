import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess("¡Mensaje enviado correctamente!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al enviar el mensaje.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-semibold uppercase tracking-widest text-blue-500">
          Contacto
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          Trabajemos juntos
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Si tenés un proyecto, una propuesta laboral o simplemente querés
          ponerte en contacto conmigo, completá el formulario y te responderé
          lo antes posible.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href="mailto:carrizomateodw@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-blue-500"
            >
              <FaEnvelope className="text-2xl text-blue-500" />
              <span>carrizomateodw@gmail.com</span>
            </a>

            <a
              href="https://github.com/CarrizoMateo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-blue-500"
            >
              <FaGithub className="text-2xl text-blue-500" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mateo-carrizo-42a0a9323/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition hover:border-blue-500"
            >
              <FaLinkedin className="text-2xl text-blue-500" />
              <span>LinkedIn</span>
            </a>
          </div>

          <form
            onSubmit={sendEmail}
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-3 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-3 outline-none transition focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Escribí tu mensaje..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-3 outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {success && (
              <p className="text-green-400">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-400">
                {error}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}