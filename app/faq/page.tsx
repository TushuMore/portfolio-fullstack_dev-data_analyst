"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

const faqs = [
  {
    question: "Who am I as a professional?",
    answer:
      "I’m a Full Stack Developer and aspiring Data Analyst focused on building modern digital products with strong UI/UX and real-world functionality. I work with Next.js, TypeScript, Tailwind CSS, React, backend systems, APIs, and modern frontend architecture. Along with development, I also enjoy working with data, analytics dashboards, Python, SQL, and data visualization. I love combining creativity, logic, and problem-solving into one workflow.",
  },

  {
    question:
      "Why did I choose the combination of Full Stack Development and Data Analytics?",
    answer:
      "Most developers build applications, and most analysts only work on data. I wanted to understand both sides — how products are built and how users interact with them through data. Full Stack Development helps me create scalable digital experiences, while Data Analytics helps me make smarter product decisions using insights and patterns. This combination allows me to think technically, creatively, and strategically at the same time.",
  },

  {
    question: "Why should you hire me?",
    answer:
      "I bring a modern skill combination that covers development, UI/UX thinking, analytics, and problem-solving. I focus on creating clean interfaces, smooth user experiences, scalable systems, and meaningful products. I’m highly curious, continuously learning, and capable of adapting quickly to new technologies and workflows. I also care deeply about design quality and user experience rather than only writing code.",
  },

  {
    question: "What can I actually do?",
    answer:
      "I can build full stack web applications, responsive websites, dashboards, portfolio systems, admin panels, analytics interfaces, and modern frontend experiences using technologies like Next.js, React, Tailwind CSS, TypeScript, Node.js, and APIs. On the analytics side, I can work with Python, SQL, Pandas, data cleaning, data visualization, and dashboard creation. I also enjoy creating content around technology and sharing knowledge online.",
  },

  {
    question: "What makes my approach different?",
    answer:
      "I focus heavily on experience, design quality, and modern presentation. Instead of building only functional products, I try to create experiences that feel premium, smooth, and visually memorable. I pay attention to details like animations, layouts, responsiveness, interaction quality, and usability while also thinking about performance and scalability.",
  },

  {
    question: "What am I currently focused on?",
    answer:
      "Right now I’m focused on mastering Full Stack Development, improving my Data Analytics skills, building premium portfolio-level projects, creating content, and preparing for professional opportunities in tech. I’m also exploring how AI, analytics, and modern web experiences can work together to create smarter digital products.",
  },
];

export default function FAQSection() {

  const [active, setActive] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative px-6 py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute top-0 left-0
            w-[450px] h-[450px]
            bg-sky-500/10
            blur-3xl
            rounded-full
          "
        />

        {/* <div
          className="
            absolute bottom-0 right-0
            w-[450px] h-[450px]
            bg-purple-500/10
            blur-3xl
            rounded-full
          "
        /> */}

      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >

          <p
            className="
              text-sky-400
              uppercase
              tracking-[0.3em]
              text-sm
              mb-6
            "
          >
            FAQ
          </p>

          <h2
            className="
              text-[3rem]
              md:text-[5rem]
              font-black
              leading-[0.9]
              tracking-[-0.08em]
            "
          >
            MORE THAN

            <span className="block text-slate-500">
              JUST A
            </span>

            <span className="block text-sky-400">
              DEVELOPER.
            </span>

          </h2>

          <p
            className="
              mt-8
              text-slate-400
              text-lg
              leading-relaxed
              max-w-3xl
            "
          >
            A quick overview of who I am,
            what I do, why I chose this path,
            and how I combine development,
            analytics, creativity, and problem-solving.
          </p>

        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                "
              >

                {/* BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex items-center
                    justify-between
                    gap-6
                    text-left
                    p-7 md:p-8
                  "
                >

                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-bold
                      leading-snug
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex items-center justify-center
                      min-w-[60px]
                      h-[60px]
                      rounded-2xl
                      bg-sky-500/10
                      border border-sky-400/20
                    "
                  >

                    {isOpen ? (
                      <Minus
                        className="text-sky-400"
                        size={24}
                      />
                    ) : (
                      <Plus
                        className="text-sky-400"
                        size={24}
                      />
                    )}

                  </div>

                </button>

                {/* ANSWER */}
                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >

                      <div className="px-7 md:px-8 pb-8">

                        <div
                          className="
                            h-px
                            bg-white/10
                            mb-6
                          "
                        />

                        <p
                          className="
                            text-slate-400
                            leading-relaxed
                            text-lg
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}