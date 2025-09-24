import { defineComponent } from 'vue'

import Header from '~/components/Header'

const Decoration = () => (
  <>
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-1/2 left-8 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-400/25 shadow-[0_0_120px_40px_rgba(34,211,238,0.15)] blur-3xl motion-safe:animate-pulse" />
      <div class="absolute top-1/3 right-8 h-80 w-80 -translate-y-1/2 rounded-full bg-rose-400/25 shadow-[0_0_120px_40px_rgba(251,113,133,0.15)] blur-3xl motion-safe:animate-pulse" />
    </div>
  </>
)

const Mask = () => (
  <div class="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-cyan-500/10 via-transparent to-rose-500/10 backdrop-blur-3xl" />
)

const Avatar = () => (
  <div class="relative mx-auto aspect-[3/4] w-64 max-w-full overflow-hidden rounded-4xl shadow-2xl ring-1 ring-white/10">
    <img
      src="/images/avatar.png"
      alt="Hayes avatar"
      class="h-full w-full -rotate-3 object-cover transition-transform duration-300 will-change-transform hover:-rotate-6"
    />
    <div class="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-white/10" />
  </div>
)

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return () => (
      <main class="relative min-h-dvh w-full overflow-hidden bg-gradient-to-b from-black to-black/95 text-white antialiased">
        <Decoration />
        <Mask />

        <div class="relative z-50">
          <Header />
        </div>

        <section class="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-32">
          <div class="grid items-center gap-10 rounded-4xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-2xl md:grid-cols-2 md:p-10">
            <div class="pointer-events-none absolute -inset-px rounded-[2rem] opacity-70 [mask:linear-gradient(white,transparent)]">
              <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/25 to-rose-400/30 blur-xl" />
            </div>
            <div class="order-last space-y-6 lg:order-first">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Hi, i'm <b class="text-rose-400">Hayes</b>
              </h2>
              <h3 class="text-2xl font-semibold text-white/90 md:text-3xl">Nice to meet you!</h3>

              <p class="text-base leading-relaxed text-white/85 md:text-lg">
                I'm a software developer with a passion for creating beautiful and functional web
                applications. I specialize in frontend development, but I also have experience with
                backend technologies.
              </p>

              <ul class="list-disc space-y-2 pl-6 text-white/85 md:text-lg">
                <li>
                  <strong>Frontend:</strong> React, Vue, TypeScript, Tailwind CSS
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express, Python, REST APIs
                </li>
                <li>
                  <strong>Tools:</strong> Git, Docker, Vite, Webpack
                </li>
              </ul>

              <p class="text-base leading-relaxed text-white/80 md:text-lg">
                I love learning new technologies and collaborating with others to solve challenging
                problems. When I'm not coding, you can find me exploring new music, hiking, or
                reading about tech trends.
              </p>

              <div class="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://github.com/hayes"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-cyan-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href="mailto:hayes@example.com"
                  class="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-cyan-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/hayes"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-cyan-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <Avatar />
          </div>
        </section>
      </main>
    )
  },
})
