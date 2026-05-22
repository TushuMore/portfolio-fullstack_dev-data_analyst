"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* Massive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-sky-400 mb-6">
            Final Step
          </p>

          <h2
            className="
              text-[4rem]
              md:text-[7rem]
              xl:text-[10rem]
              font-black
              leading-[0.85]
              tracking-[-0.08em]
            "
          >
            LET’S
            <span className="block text-slate-500">
              CREATE
            </span>

            <span className="block">
              SOMETHING
            </span>

            <span className="block text-sky-400">
              IMPACTFUL.
            </span>
          </h2>

        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mt-24">

          {/* LEFT TERMINAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              lg:col-span-7
              relative
              overflow-hidden
              rounded-[40px]
              border border-white/10
              bg-black/40
              backdrop-blur-2xl
            "
          >

            {/* Top Bar */}
            <div
              className="
                flex items-center gap-2
                px-6 py-5
                border-b border-white/10
              "
            >

              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />

            </div>

            {/* Terminal Content */}
            <div className="p-8 md:p-10 space-y-6">

              <div>
                <p className="text-slate-500 mb-2">
                  ~/introduction
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  Hi, I’m Tushar — a Full Stack Developer
                  and aspiring Data Analyst focused on
                  creating modern digital products with
                  clean architecture and premium user experiences.
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-2">
                  ~/currently-working-on
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  Real-time applications, analytics dashboards,
                  scalable frontend systems, and visually rich UI experiences.
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-2">
                  ~/open-for
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  Freelance projects, Hybrid / on-site / work from home job,
                  collaborations, and impactful opportunities.
                </p>
              </div>

              {/* Email */}
              <div className="pt-6">

                <a
                  href="mailto:tusharmore2143@gmail.com"
                  className="
                    group
                    inline-flex items-center gap-3
                    rounded-2xl
                    bg-sky-500
                    hover:bg-sky-400
                    transition
                    px-7 py-4
                    font-semibold
                  "
                >

                  <Mail size={20} />

                  Start a Conversation

                  <ArrowUpRight
                    size={18}
                    className="
                      transition
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />

                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              lg:col-span-5
              flex flex-col gap-6
            "
          >

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tushar-more-987a69258/"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                hover:border-sky-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-sky-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <FaLinkedin
                  size={34}
                  className="text-sky-400 mb-8"
                />

                <p className="text-slate-500 mb-3">
                  Professional Network
                </p>

                <h3 className="text-3xl font-bold">
                  LinkedIn
                </h3>

              </div>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TushuMore"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                hover:border-sky-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-purple-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <FaGithub
                  size={34}
                  className="text-sky-400 mb-8"
                />

                <p className="text-slate-500 mb-3">
                  Projects & Code
                </p>

                <h3 className="text-3xl font-bold">
                  GitHub
                </h3>

              </div>

            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1XzXzXzXzXzXzXzXzXzXzXzXzXzXzXzX/view?usp=sharing"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                hover:border-sky-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-emerald-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <p className="text-slate-500 mb-3">
                  Experience & Skills
                </p>

                <h3 className="text-3xl font-bold">
                  Resume
                </h3>

              </div>

            </a>

          </motion.div>

        </div>

        

      </div>
    </section>
  );
}