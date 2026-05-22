"use client";


import ProjectCard from "@/components/home/project-card";

import { projects } from "@/projectData";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute top-0 left-0
            w-[500px] h-[500px]
            bg-sky-500/10
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[500px] h-[500px]
            bg-purple-500/10
            blur-3xl
            rounded-full
          "
        />

      </div>

      {/* HERO */}
      <section className="px-6 pt-36 pb-24">

        <div className="max-w-7xl mx-auto">

          <p
            className="
              text-sky-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
            "
          >
            Projects
          </p>

          <h1
            className="
              text-[3.5rem]
              md:text-[5rem]
              xl:text-[7rem]
              font-black
              leading-[0.9]
              tracking-[-0.08em]
            "
          >
            DIGITAL

            <span className="block text-slate-500">
              PRODUCTS &
            </span>

            <span className="block text-sky-400">
              EXPERIENCES.
            </span>

          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-slate-400
              text-lg
              leading-relaxed
            "
          >
            A collection of projects focused on
            modern UI/UX, scalable architecture,
            performance, real-world functionality,
            and premium digital experiences.
          </p>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          <div className="space-y-32">

            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}