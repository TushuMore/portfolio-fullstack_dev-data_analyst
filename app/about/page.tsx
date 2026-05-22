export default function AboutPage() {
  return (
    <main className="min-h-screen  text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* HERO */}
      <section className="relative px-6 pt-36 pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <p className="text-sky-400 uppercase tracking-[0.3em] mb-6 text-sm">
              About Me
            </p>

            <h1
              className="
                text-[4rem]
                md:text-[6rem]
                xl:text-[8rem]
                font-black
                leading-[0.9]
                tracking-[-0.08em]
              "
            >
              TUSHAR
              <span className="block text-slate-500">
                MORE.
              </span>
            </h1>

            <div className="mt-10 space-y-6 max-w-2xl">

              <p className="text-2xl text-slate-300 leading-relaxed">
                Full Stack Developer, UI/UX Enthusiast,
                and aspiring Data Analyst passionate about
                building premium digital experiences.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                I belong to Maharashtra, India, and I’m currently
                focused on becoming a modern full stack developer
                while also exploring the power of data analytics.
                I enjoy combining development, design, motion,
                and problem solving to create products that feel
                visually impressive and technically strong.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

              {[
                {
                  value: '5+',
                  label: 'Projects Built',
                },
                {
                  value: '2+',
                  label: 'Years Learning',
                },
                {
                  value: '15+',
                  label: 'UI Concepts',
                },
                {
                  value: '100+',
                  label: 'Hours Coding',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                  "
                >
                  <h3 className="text-3xl font-black text-sky-400">
                    {item.value}
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative">

            {/* BIG CIRCLE */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br
                from-sky-500/20
                to-purple-500/20
                blur-3xl
                rounded-full
              "
            />

            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-4
              "
            >

              <div className="relative h-[600px] rounded-[32px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                  alt="Tushar"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* Floating Card */}
                <div
                  className="
                    absolute bottom-6 left-6 right-6
                    rounded-3xl
                    border border-white/10
                    bg-black/40
                    backdrop-blur-xl
                    p-6
                  "
                >

                  <p className="text-slate-400 text-sm mb-3">
                    Current Focus
                  </p>

                  <h3 className="text-2xl font-bold leading-tight">
                    Building modern web products
                    with premium UI experiences.
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHO I AM */}
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* LEFT TITLE */}
            <div className="lg:col-span-4">

              <p className="text-sky-400 mb-5 uppercase tracking-[0.2em] text-sm">
                Who I Am
              </p>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                "
              >
                More Than
                <span className="block text-slate-500">
                  Just Coding.
                </span>
              </h2>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 space-y-6">

              <div
                className="
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                "
              >

                <p className="text-xl text-slate-300 leading-relaxed">
                  I started my journey with curiosity about how
                  modern websites work and slowly moved toward
                  full stack development, UI/UX systems,
                  animations, and scalable product thinking.
                </p>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div
                  className="
                    rounded-[32px]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                  "
                >

                  <h3 className="text-2xl font-bold mb-5">
                    Development
                  </h3>

                  <ul className="space-y-3 text-slate-400 leading-relaxed">
                    <li>• Next.js & React Development</li>
                    <li>• TypeScript & Modern JavaScript</li>
                    <li>• Responsive UI Systems</li>
                    <li>• Tailwind CSS Architecture</li>
                    <li>• Backend APIs & Databases</li>
                    <li>• Performance Optimization</li>
                  </ul>

                </div>

                <div
                  className="
                    rounded-[32px]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    p-8
                  "
                >

                  <h3 className="text-2xl font-bold mb-5">
                    Data Analytics
                  </h3>

                  <ul className="space-y-3 text-slate-400 leading-relaxed">
                    <li>• Python for Data Analysis</li>
                    <li>• SQL Queries & Data Handling</li>
                    <li>• Pandas & NumPy</li>
                    <li>• Data Cleaning</li>
                    <li>• Data Visualization</li>
                    <li>• Dashboard Thinking</li>
                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SPECIAL SECTION */}
      <section className="px-6 py-24">

        <div
          className="
            max-w-7xl mx-auto
            rounded-[40px]
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">

              <p className="text-sky-400 mb-5 uppercase tracking-[0.2em] text-sm">
                Vision
              </p>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                "
              >
                Why This
                <span className="block text-slate-500">
                  Combination?
                </span>
              </h2>

            </div>

            {/* RIGHT */}
            <div className="p-10 md:p-14">

              <p className="text-xl text-slate-300 leading-relaxed">
                I believe combining Full Stack Development
                with Data Analytics creates stronger digital
                products.
              </p>

              <p className="text-slate-400 leading-relaxed mt-8 text-lg">
                Development helps me build scalable and modern
                applications, while analytics helps me understand
                user behavior, data-driven decisions, and product
                improvement.
              </p>

              <p className="text-slate-400 leading-relaxed mt-6 text-lg">
                My goal is to create experiences that are not only
                visually premium but also smart, optimized,
                and meaningful.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
