"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10 md:p-16
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              top-0 right-0
              w-72 h-72
              bg-sky-500/10
              blur-3xl
              rounded-full
            "
          />

          <p className="text-sky-400 mb-4 relative z-10">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold relative z-10 leading-tight">
            Let’s Build
            <span className="block text-slate-400">
              Something Amazing
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl relative z-10">
            I’m currently open to internships, freelance projects,
            collaborations, and full-time opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 relative z-10">

            <a
              href="mailto:your@email.com"
              className="
                flex items-center gap-2
                bg-sky-500 hover:bg-sky-400
                transition
                px-6 py-4
                rounded-2xl
                font-medium
              "
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="#"
              className="
                flex items-center gap-2
                border border-white/10
                hover:border-sky-400
                transition
                px-6 py-4
                rounded-2xl
              "
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="#"
              className="
                flex items-center gap-2
                border border-white/10
                hover:border-sky-400
                transition
                px-6 py-4
                rounded-2xl
              "
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="#"
              className="
                flex items-center gap-2
                border border-white/10
                hover:border-sky-400
                transition
                px-6 py-4
                rounded-2xl
              "
            >
              Resume
              <ArrowUpRight size={20} />
            </a>

          </div>

        </motion.div>

        {/* Footer */}
        <footer className="mt-10 text-center text-slate-500 text-sm">
          © 2026 Tushar More. Built with Next.js & Tailwind CSS.
        </footer>

      </div>
    </section>
  );
}