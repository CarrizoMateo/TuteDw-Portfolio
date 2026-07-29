export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-zinc-500">
        © {new Date().getFullYear()} Mateo Carrizo

        <br />

        Desarrollado con React, TypeScript y Tailwind CSS.
      </div>
    </footer>
  );
}