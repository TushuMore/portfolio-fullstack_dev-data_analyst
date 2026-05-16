"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Started learning modern frontend development with React, Next.js, and Tailwind CSS.",
  },
  {
    year: "2025",
    title: "Built Real Projects",
    description:
      "Created chat apps, analytics dashboards, AI tools, and modern UI projects.",
  },
  {
    year: "2025",
    title: "Google Data Analytics",
    description:
      "Learned Python, SQL, data visualization, data cleaning, and analytics workflows.",
  },
  {
    year: "2026",
    title: "Agency & Portfolio Building",
    description:
      "Focused on premium UI/UX, freelance-ready projects, and professional branding.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sky-400 mb-3">
            Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & Learning
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >

              {/* Dot */}
              <div
                className="
                  absolute
                  -left-[41px]
                  top-1
                  w-5 h-5
                  rounded-full
                  bg-sky-400
                  shadow-lg shadow-sky-500/50
                "
              />

              {/* Card */}
              <div
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <span className="text-sky-400 text-sm">
                  {item.year}
                </span>

                <h3 className="text-2xl font-semibold mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}