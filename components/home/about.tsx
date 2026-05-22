"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

const expertise = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    desc: "Building responsive, scalable, and visually rich interfaces using modern frontend systems.",
  },
  {
    title: "UI/UX Systems",
    icon: Layers3,
    desc: "Designing smooth user experiences with modern layouts, motion, and interaction design.",
  },
  {
    title: "Data Analytics",
    icon: Database,
    desc: "Working with Python, SQL, and data visualization to solve real-world analytical problems.",
  },
];

export default function About() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">

      {/* Glow */}
      {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/10 blur-3xl rounded-full" /> */}

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* BIG TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >

            <p className="text-sky-400 mb-6">
              About Me
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
              I Build
              <span className="block text-slate-500">
                Modern Digital
              </span>

              <span className="block">
                Experiences.
              </span>
            </h2>

          </motion.div>

          {/* SIDE INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:pt-10"
          >

            <p
              className="
                text-xl
                leading-relaxed
                text-slate-300
              "
            >
              Full Stack Developer & aspiring Data Analyst
              focused on creating premium web experiences
              with performance, clean architecture,
              and modern interaction design.
            </p>

            <div className="mt-10 flex items-center gap-6">

              <div>
                <h3 className="text-5xl font-black text-sky-400">
                  5+
                </h3>

                <p className="text-slate-500 mt-2">
                  Projects
                </p>
              </div>

              <div className="w-px h-14 bg-white/10" />

              <div>
                <h3 className="text-5xl font-black text-sky-400">
                  2+
                </h3>

                <p className="text-slate-500 mt-2">
                  Years Learning
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* CENTER LARGE TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-32"
        >

          <p
            className="
              text-2xl
              md:text-4xl
              leading-[1.4]
              text-slate-400
              max-w-5xl
            "
          >
            I enjoy blending
            <span className="text-white font-semibold">
              {" "}development, motion, UI systems,
            </span>

            {" "}and
            <span className="text-white font-semibold">
              {" "}problem solving
            </span>

            {" "}to craft products that feel modern,
            interactive, and memorable.
          </p>

        </motion.div>

        {/* EXPERTISE */}
        <div className="grid lg:grid-cols-3 gap-6 mt-24">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-sky-500/10
                    to-purple-500/10
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      flex items-center justify-center
                      mb-8
                    "
                  >
                    <Icon
                      size={30}
                      className="text-sky-400"
                    />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mt-5">
                    {item.desc}
                  </p>

                  {/* <button
                    className="
                      flex items-center gap-2
                      mt-8
                      text-sky-400
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="
                        transition
                        group-hover:translate-x-1
                      "
                    />
                  </button> */}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}