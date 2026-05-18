"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
} from "lucide-react";

const projects = [
  {
    title: "Whispr",
    subtitle: "Real-Time Chat Experience",
    description:
      "A modern real-time messaging platform focused on mobile-first UI, smooth interactions, and scalable communication systems.",
    image: "/images/1.jfif",
    tech: ["Next.js", "Socket.io", "TypeScript"],
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Interactive Data Visualization",
    description:
      "Premium analytics dashboard built with interactive charts, filtering systems, and clean data-driven UI architecture.",
    image: "/images/2.jfif",
    tech: ["React", "Charts", "Tailwind"],
  },
  {
    title: "eCommerce Platform",
    subtitle: "Modern Shopping Experience",
    description:
      "A scalable eCommerce interface focused on smooth user experience, responsive layouts, and premium visual design.",
    image: "/images/3.jfif",
    tech: ["Next.js", "Stripe", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-sky-400 mb-5">
            Selected Work
          </p>

          <h2
            className="
              text-[3.5rem]
              md:text-[6rem]
              font-black
              leading-[0.9]
              tracking-[-0.05em]
            "
          >
            Featured
            <span className="block text-slate-500">
              Projects.
            </span>
          </h2>

        </motion.div>

        {/* Projects */}
        <div className="space-y-32">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                grid lg:grid-cols-12 gap-10 items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* IMAGE */}
              <div className="lg:col-span-7">

                <motion.div
                  whileHover={{ scale: 0.98 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                  "
                >

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-transparent
                      to-transparent
                      z-10
                    "
                  />

                  {/* Image */}
                  <div className="relative h-[450px]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* Floating Bottom Content */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      z-20
                      p-8
                    "
                  >

                    <p className="text-sky-400 mb-3">
                      {project.subtitle}
                    </p>

                    <h3
                      className="
                        text-4xl
                        md:text-5xl
                        font-black
                        leading-none
                      "
                    >
                      {project.title}
                    </h3>

                  </div>

                </motion.div>

              </div>

              {/* CONTENT */}
              <div className="lg:col-span-5">

                <p
                  className="
                    text-slate-400
                    text-lg
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item) => (
                    <div
                      key={item}
                      className="
                        px-4 py-2
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        text-slate-300
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-10">

                  <button
                    className="
                      group
                      flex items-center gap-2
                      bg-sky-500
                      hover:bg-sky-400
                      transition
                      px-6 py-4
                      rounded-2xl
                      font-semibold
                    "
                  >
                    Live Preview

                    <ArrowUpRight
                      size={18}
                      className="
                        transition
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </button>

                  <button
                    className="
                      flex items-center gap-2
                      border border-white/10
                      hover:border-sky-400
                      hover:bg-white/5
                      transition
                      px-6 py-4
                      rounded-2xl
                    "
                  >
                    Source Code

                    <GitBranch size={18} />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}