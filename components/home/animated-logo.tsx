"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

const words = [
  "Portfolio",
  "Full Stack Developer",
  "Data Analyst",
  "UI/UX Builder",
  "Creative Developer",
];

export default function AnimatedLogo() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === words.length - 1
          ? 0
          : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="relative flex items-center gap-4">

      {/* Glow */}
      <div
        className="
          absolute
          -left-10
          w-32 h-32
          bg-sky-500/20
          blur-3xl
          rounded-full
        "
      />

      {/* Logo Circle */}
      

      {/* TEXT */}
      <div className="flex flex-col">

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-xl
            md:text-2xl
            font-black
            tracking-tight
            leading-none
          "
        >
          Tushar More
        </motion.h1>

        {/* Changing Text */}
        <div
          className="
            relative
            h-6
            overflow-hidden
          "
        >

          <AnimatePresence mode="wait">

            <motion.p
              key={words[index]}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                absolute
                text-sm
                md:text-base
                text-sky-400
                font-medium
              "
            >
              {words[index]}
            </motion.p>

          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}