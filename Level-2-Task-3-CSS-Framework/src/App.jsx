function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-indigo-600"
          >
            NovaTech
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section
          id="home"
          className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-indigo-100 ring-1 ring-white/20">
                Digital Solutions for Modern Businesses
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build smarter.
                <span className="block text-indigo-200">
                  Grow faster.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
                We create modern, scalable and reliable digital experiences
                that help businesses succeed in the digital era.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
                >
                  Explore Services
                </a>

                <a
                  href="#about"
                  className="rounded-lg border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-3xl font-bold text-indigo-600">100+</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-3xl font-bold text-indigo-600">50+</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Happy Clients
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-3xl font-bold text-indigo-600">24/7</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Support
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-3xl font-bold text-indigo-600">99%</p>
                    <p className="mt-2 text-sm text-slate-500">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Our Services
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to grow online
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Powerful digital solutions designed around your business
                goals.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon="01"
                title="Web Development"
                description="Responsive and scalable websites built with modern technologies."
              />

              <ServiceCard
                icon="02"
                title="App Development"
                description="User-friendly applications designed for modern digital experiences."
              />

              <ServiceCard
                icon="03"
                title="AI & Automation"
                description="Smart automation solutions that improve efficiency and reduce manual work."
              />

              <ServiceCard
                icon="04"
                title="Digital Marketing"
                description="Data-driven strategies that help your brand reach the right audience."
              />

              <ServiceCard
                icon="05"
                title="SEO Optimization"
                description="Improve search visibility and attract more organic traffic."
              />

              <ServiceCard
                icon="06"
                title="Data Analysis"
                description="Turn business data into meaningful insights for better decisions."
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-slate-100 px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                About Us
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Technology that moves your business forward
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                NovaTech helps businesses unlock their potential through
                innovative, scalable and reliable digital solutions. Our team
                focuses on creating technology that is practical, accessible
                and built for long-term growth.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">5+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Years Experience
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-indigo-600">20+</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Team Members
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900">
                Why choose us?
              </h3>

              <div className="mt-6 space-y-5">
                <Benefit text="Modern and scalable technology" />
                <Benefit text="Responsive and accessible interfaces" />
                <Benefit text="Reliable solutions with clean design" />
                <Benefit text="Customer-focused development process" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-indigo-600 px-8 py-16 text-center shadow-xl sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build something great?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">
              Let&apos;s turn your ideas into a modern digital experience.
            </p>

            <a
              href="mailto:hello@novatech.com"
              className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <p className="text-sm text-slate-500">
            © 2026 NovaTech. All rights reserved.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600"
      >
        ✓
      </span>

      <p className="text-slate-600">{text}</p>
    </div>
  );
}

export default App;