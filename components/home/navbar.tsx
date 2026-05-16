"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  "Home",
  "About",
  "Projects",
  "Contact",
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          fixed top-4 left-1/2
          -translate-x-1/2
          z-50
          w-[92%]
          max-w-4xl
        "
      >

        <nav
          className="
            flex items-center justify-between
            border border-white/10
            bg-black/30
            backdrop-blur-xl
            px-5 py-4
            rounded-2xl
          "
        >

          {/* Logo */}
          <h1 className="font-bold text-lg">
            Tushar
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <button
                key={link}
                className="
                  px-4 py-2
                  rounded-xl
                  text-sm text-slate-300
                  hover:text-white
                  hover:bg-white/10
                  transition
                "
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              p-2 rounded-xl
              border border-white/10
            "
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              fixed inset-0
              z-40
              bg-black/70
              backdrop-blur-2xl
              flex flex-col
              items-center
              justify-center
              gap-8
            "
          >

            {links.map((link) => (
              <button
                key={link}
                onClick={() => setOpen(false)}
                className="
                  text-3xl
                  font-semibold
                  text-slate-200
                  hover:text-sky-400
                  transition
                "
              >
                {link}
              </button>
            ))}

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}   