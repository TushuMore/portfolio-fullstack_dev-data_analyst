"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[-100px]
          left-[-100px]
          w-[400px]
          h-[400px]
          bg-sky-500/20
          blur-3xl
          rounded-full
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[350px]
          h-[350px]
          bg-purple-500/20
          blur-3xl
          rounded-full
        "
      />

    </div>
  );
}