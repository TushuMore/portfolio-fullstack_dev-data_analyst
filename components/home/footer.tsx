export default function Footer() {
  return (
    <footer
      className="
        mt-16
        border-t border-white/10
      "
    >

      <div
        className="
          max-w-7xl mx-auto
          px-6 py-8
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-4
        "
      >

        <p className="text-slate-500 text-sm">
          © 2026 Tushar More. All rights reserved.
        </p>

        <p className="text-slate-600 text-sm">
          Designed & Developed with Next.js
        </p>

      </div>

    </footer>
  );
}