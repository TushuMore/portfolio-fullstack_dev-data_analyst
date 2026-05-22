"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import ProjectCard from "./project-card";

import {projects} from "@/projectData"

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
            <ProjectCard key={project.title} project={project} index={index}/>
          ))}

        </div>

      </div>
    </section>
  );
}