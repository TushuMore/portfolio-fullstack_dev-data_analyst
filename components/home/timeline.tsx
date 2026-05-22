"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Began learning modern frontend development with React, Next.js, and Tailwind CSS while exploring UI/UX systems and responsive design.",
  },
  {
    year: "2025",
    title: "Built Real-World Projects",
    description:
      "Developed chat applications, analytics dashboards, AI-powered tools, and scalable frontend systems with modern architecture.",
  },
  {
    year: "2026",
    title: "Entered Data Analytics",
    description:
      "Learned Python, SQL, data cleaning, visualization, and analytical workflows through practical datasets and Google Data Analytics training.",
  },
  {
    year: "2026",
    title: "Professional Growth",
    description:
      "Focused on premium digital experiences, freelance-ready development, branding, performance optimization, and scalable product thinking.",
  },
];

export default function Timeline() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* Glow */}
      {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full" /> */}

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="text-sky-400 mb-5">
            Journey
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
            Learning
            <span className="block text-slate-500">
              Experience.
            </span>
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden lg:block
              w-px
              h-full
              bg-gradient-to-b
              from-transparent
              via-white/10
              to-transparent
            "
          />

          <div className="space-y-24">

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`
                  relative
                  grid lg:grid-cols-2 gap-10 items-center
                  ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >

                {/* Content */}
                <div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[36px]
                      border border-white/10
                      bg-white/5
                      backdrop-blur-2xl
                      p-8 md:p-10
                    "
                  >

                    {/* Hover Gradient */}
                    <div
                      className="
                        absolute inset-0
                        opacity-0 hover:opacity-100
                        transition duration-500
                        bg-gradient-to-br
                        from-sky-500/10
                        to-purple-500/10
                      "
                    />

                    <div className="relative z-10">

                      <span
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-sky-400
                        "
                      >
                        {item.year}
                      </span>

                      <h3
                        className="
                          text-3xl
                          md:text-4xl
                          font-black
                          leading-tight
                          mt-4
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-slate-400
                          text-lg
                          leading-relaxed
                          mt-6
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                </div>

                {/* Huge Year */}
                <div
                  className={`
                    hidden lg:flex
                    items-center
                    ${index % 2 === 0
                      ? "justify-start pl-20"
                      : "justify-end pr-20"
                    }
                  `}
                >

                  <motion.h1
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="
                      text-[8rem]
                      xl:text-[10rem]
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.04]
                      select-none
                    "
                  >
                    {item.year}
                  </motion.h1>

                </div>

                {/* Dot */}
                <div
                  className="
                    hidden lg:block
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-5 h-5
                    rounded-full
                    bg-sky-400
                    shadow-[0_0_30px_rgba(56,189,248,0.8)]
                  "
                />

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}