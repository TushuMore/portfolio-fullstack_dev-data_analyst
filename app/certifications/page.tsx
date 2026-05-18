"use client";

import Image from "next/image";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google • Coursera",
    year: "2025",
    image: "/images/certification-dummy.png",
    link: "https://coursera.org/share/e797cacd3e778fac37da337bd758e458",
    type: "Certificate",
  },

  {
    title: "Google Data Analytics Badge",
    issuer: "Google",
    year: "2025",
    image: "/images/badge.png",
    link: "https://www.credly.com/badges/103e5bab-10ed-4da8-8c2d-7c6796fd3e05/public_url",
    type: "Badge",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-0 left-0
            w-[500px] h-[500px]
            bg-sky-500/20
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[500px] h-[500px]
            bg-purple-500/20
            blur-3xl
            rounded-full
          "
        />
      </div>

      {/* HERO */}
      <section className="px-6 pt-36 pb-20">
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
            Certifications
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
            VERIFIED
            <span className="block text-slate-500">LEARNING &</span>
            <span className="block text-sky-400">ACHIEVEMENTS.</span>
          </h1>

          <p
            className="
              mt-10
              text-slate-400
              text-lg
              leading-relaxed
              max-w-3xl
            "
          >
            My certifications and achievements representing my learning journey
            in Data Analytics and modern technology.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  hover:border-sky-400
                  transition
                "
              >
                {/* IMAGE */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    loading="eager"
                    priority
                    className="
                         w-full h-full
                         object-cover
                         transition duration-700
                         group-hover:scale-110
                            "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/30
                      to-transparent
                    "
                  />

                  {/* TYPE */}
                  <div
                    className="
                      absolute top-5 left-5
                      px-4 py-2
                      rounded-full
                      bg-black/40
                      backdrop-blur-xl
                      border border-white/10
                      text-sm text-slate-200
                    "
                  >
                    {item.type}
                  </div>

                  {/* YEAR */}
                  <div
                    className="
                      absolute top-5 right-5
                      px-4 py-2
                      rounded-full
                      bg-sky-500/20
                      backdrop-blur-xl
                      border border-sky-400/30
                      text-sm text-sky-300
                    "
                  >
                    {item.year}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <p
                    className="
                      text-sky-400
                      uppercase
                      tracking-[0.2em]
                      text-sm
                      mb-4
                    "
                  >
                    {item.issuer}
                  </p>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      font-black
                      leading-tight
                    "
                  >
                    {item.title}
                  </h2>

                  <div
                    className="
                      mt-8
                      flex items-center
                      justify-between
                    "
                  >
                    <p className="text-slate-400">View Credential</p>

                    <div
                      className="
                        w-14 h-14
                        rounded-2xl
                        bg-sky-500
                        flex items-center
                        justify-center
                        text-2xl
                        group-hover:rotate-45
                        transition
                      "
                    >
                      ↗
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-10">
        <div
          className="
            max-w-7xl mx-auto
            border-t border-white/10
            pt-8
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-slate-500 text-sm">
            © 2026 Tushar More. All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Always learning. Always building.
          </p>
        </div>
      </footer>
    </main>
  );
}
