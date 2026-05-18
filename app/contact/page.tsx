export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden relative">

      {/* BACKGROUND */}
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
      <section className="px-6 pt-36 pb-24">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="max-w-5xl">

            <p
              className="
                text-sky-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-6
              "
            >
              Contact
            </p>

            <h1
              className="
                text-[3.2rem]
                sm:text-[4rem]
                md:text-[5rem]
                xl:text-[7rem]
                font-black
                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              LET’S

              <span className="block text-slate-500">
                CONNECT
              </span>

              <span className="block">
                AND BUILD
              </span>

              <span className="block text-sky-400">
                TOGETHER.
              </span>

            </h1>

            <p
              className="
                text-slate-400
                text-lg md:text-xl
                leading-relaxed
                mt-10
                max-w-3xl
              "
            >
              Full Stack Developer and aspiring
              Data Analyst passionate about building
              modern digital experiences, scalable
              applications, clean UI systems,
              and data-driven products.
            </p>

          </div>

          {/* INFO STRIP */}
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
              mt-16
            "
          >

            {[
              {
                title: "Location",
                value: "Maharashtra, India",
              },
              {
                title: "Specialization",
                value: "Full Stack Development",
              },
              {
                title: "Analytics",
                value: "Python • SQL • Dashboards",
              },
              {
                title: "Available For",
                value: "Freelance & Internships",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-5
                "
              >

                <p className="text-slate-500 text-sm mb-2">
                  {item.title}
                </p>

                <h3
                  className="
                    font-semibold
                    text-lg
                    text-slate-200
                  "
                >
                  {item.value}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT CARDS */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* GITHUB */}
            <a
              href="https://github.com/"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                hover:border-sky-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-sky-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-slate-500
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    mb-6
                  "
                >
                  Development
                </p>

                <h2
                  className="
                    text-4xl md:text-5xl
                    font-black
                    tracking-tight
                  "
                >
                  GitHub
                </h2>

                <p
                  className="
                    mt-8
                    text-slate-400
                    leading-relaxed
                    text-lg
                  "
                >
                  Explore my projects,
                  experiments, and modern
                  web development work.
                </p>

              </div>

            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                hover:border-blue-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-blue-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-slate-500
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    mb-6
                  "
                >
                  Professional
                </p>

                <h2
                  className="
                    text-4xl md:text-5xl
                    font-black
                    tracking-tight
                  "
                >
                  LinkedIn
                </h2>

                <p
                  className="
                    mt-8
                    text-slate-400
                    leading-relaxed
                    text-lg
                  "
                >
                  Connect professionally
                  and explore my skills,
                  projects, and journey.
                </p>

              </div>

            </a>

            {/* EMAIL */}
            <a
              href="mailto:your@email.com"
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                hover:border-purple-400
                transition
              "
            >

              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br
                  from-purple-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-slate-500
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    mb-6
                  "
                >
                  Direct Contact
                </p>

                <h2
                  className="
                    text-4xl md:text-5xl
                    font-black
                    tracking-tight
                  "
                >
                  Email
                </h2>

                <p
                  className="
                    mt-8
                    text-slate-400
                    leading-relaxed
                    text-lg
                  "
                >
                  Reach out directly for
                  freelance projects,
                  internships, or collaborations.
                </p>

              </div>

            </a>

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
            Designed & Developed with Next.js + Tailwind CSS.
          </p>

        </div>

      </footer>

    </main>
  );
}