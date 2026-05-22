"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  GitBranch,
} from "lucide-react";

type ProjectCardProps = {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tech: string[];
    live: string;
    github: string;
  };

  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className={`
        grid lg:grid-cols-12 gap-10 items-center
        ${
          index % 2 !== 0
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }
      `}
    >

      {/* IMAGE */}
      <div className="lg:col-span-7">

        <motion.div
          whileHover={{
            scale: 0.98,
          }}
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
              sizes="100vw"
              priority
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

          {/* LIVE */}
          <a
            href={project.live}
            target="_blank"
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
          </a>

          {/* GITHUB */}
          <a
            href={project.github}
            target="_blank"
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
          </a>

        </div>

      </div>

    </motion.div>
  );
}