"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Glow */}
      {/* <div className="absolute top-40 left-20 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" /> */}

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex items-center gap-2
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-4 py-2
              rounded-full
              mb-8
            "
          >
            <Sparkles size={16} className="text-sky-400" />

            <span className="text-sm text-slate-300">
              Available for freelance & internships
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-[0.95]
              tracking-tight
            "
          >
            Crafting
            <span className="block text-slate-400">
              Modern Digital
            </span>

            <span className="block text-sky-400">
              Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              mt-8
              text-lg
              text-slate-400
              max-w-xl
              leading-relaxed
            "
          >
            Full Stack Developer & aspiring Data Analyst
            building modern, scalable, and visually stunning
            applications with Next.js, TypeScript, and
            premium UI systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-10"
          >

            <button
              className="
                group
                flex items-center gap-2
                bg-sky-500 hover:bg-sky-400
                transition
                px-7 py-4
                rounded-2xl
                font-semibold
              "
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              className="
                border border-white/10
                hover:border-sky-400
                hover:bg-white/5
                transition
                px-7 py-4
                rounded-2xl
                font-semibold
              "
            >
              Download Resume
            </button>

          </motion.div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">

            <div>
              <h3 className="text-3xl font-bold text-sky-400">
                10+
              </h3>

              <p className="text-slate-500 mt-1">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-400">
                1+
              </h3>

              <p className="text-slate-500 mt-1">
                Years Learning
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden lg:flex items-center justify-center"
        >

          {/* Main Card */}
          <div
            className="
              relative
              w-[420px]
              h-[500px]
              rounded-[40px]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              overflow-hidden
              p-8
            "
          >

            {/* Grid */}
            <div
              className="
                absolute inset-0
                bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
                bg-[size:40px_40px]
              "
            />

            {/* Fake UI */}
            <div className="relative z-10">

              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4">

                <div className="h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 rounded-2xl bg-white/5 border border-white/10" />
                  <div className="h-40 rounded-2xl bg-white/5 border border-white/10" />
                </div>

                <div className="h-32 rounded-2xl bg-purple-500/10 border border-purple-500/20" />

              </div>

            </div>

          </div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              -left-10
              top-20
              rounded-3xl
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              p-5
            "
          >
            <Code2 className="text-sky-400 mb-3" />

            <p className="text-sm text-slate-400">
              Building scalable
              frontend systems
            </p>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-8
              bottom-20
              rounded-3xl
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              p-5
            "
          >
            <BarChart3 className="text-purple-400 mb-3" />

            <p className="text-sm text-slate-400">
              Data-driven
              problem solving
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}