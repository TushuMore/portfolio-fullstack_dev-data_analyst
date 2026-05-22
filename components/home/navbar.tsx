"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

import { usePathname } from "next/navigation";
import AnimatedLogo from "./animated-logo";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Certifications",
    href: "/certifications",
  },
  {
    name: "FaQ",
    href: "/faq",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          fixed top-5 left-1/2
          -translate-x-1/2
          z-50
          w-[94%]
          max-w-6xl
        "
      >

        <nav
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border border-white/10
            bg-black/30
            backdrop-blur-2xl
            px-5 md:px-7
            py-4
          "
        >

          {/* Glow */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-sky-500/5
              via-transparent
              to-purple-500/5
            "
          />

          {/* Main Nav */}
          <div className="relative z-10 flex items-center justify-between">

            {/* Logo */}
            <AnimatedLogo/>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">

              {links.map((link) => {

                const isActive =
                  pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`
                      group
                      relative
                      overflow-hidden
                      px-5 py-3
                      rounded-2xl
                      text-sm
                      font-medium
                      transition
                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-300 hover:text-white"
                      }
                    `}
                  >

                    {/* Active Background */}
                    <div
                      className={`
                        absolute inset-0
                        rounded-2xl
                        transition duration-300
                        ${
                          isActive
                            ? "bg-sky-500/20 border border-sky-400/20"
                            : "scale-0 bg-white/10 group-hover:scale-100"
                        }
                      `}
                    />

                    {/* Active Dot */}
                    {isActive && (
                      <div
                        className="
                          absolute
                          top-2
                          right-2
                          w-2 h-2
                          rounded-full
                          bg-sky-400
                          shadow-lg
                          shadow-sky-400/50
                        "
                      />
                    )}

                    {/* Text */}
                    <span className="relative z-10">
                      {link.name}
                    </span>

                  </a>
                );
              })}

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Desktop CTA */}
              <a
                href="/contact"
                className="
                  hidden md:flex
                  items-center justify-center
                  rounded-2xl
                  bg-sky-500
                  hover:bg-sky-400
                  transition
                  px-5 py-3
                  text-sm
                  font-semibold
                "
              >
                Let’s Talk
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="
                  md:hidden
                  flex items-center justify-center
                  w-12 h-12
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                "
              >

                {open ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}

              </button>

            </div>

          </div>

        </nav>

      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0
              z-40
              bg-black/80
              backdrop-blur-3xl
            "
          >

            {/* Close Button */}
            <div className="absolute top-5 right-5">

              <button
                onClick={() => setOpen(false)}
                className="
                  flex items-center justify-center
                  w-12 h-12
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                "
              >
                <X size={22} />
              </button>

            </div>

            {/* Menu Content */}
            <div
              className="
                h-full
                flex flex-col
                items-center
                justify-center
                gap-8
              "
            >

              {/* Links */}
              {links.map((link, index) => {

                const isActive =
                  pathname === link.href;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className={`
                      group
                      relative
                      text-5xl
                      font-black
                      tracking-tight
                      transition
                      ${
                        isActive
                          ? "text-sky-400"
                          : "text-slate-200 hover:text-sky-400"
                      }
                    `}
                  >

                    {link.name}

                    {/* Underline */}
                    <div
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        bg-sky-400
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />

                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.a
                href="/contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-500
                  hover:bg-sky-400
                  transition
                  px-8 py-4
                  text-lg
                  font-semibold
                "
              >
                Let’s Talk
              </motion.a>

              {/* Bottom Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="
                  absolute bottom-10
                  text-sm
                  text-slate-500
                "
              >
                Full Stack Developer • Data Analyst
              </motion.p>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}