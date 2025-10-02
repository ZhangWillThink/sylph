import { defineComponent } from 'vue'

import Header from '~/components/Header'

const Decoration = () => (
  <>
    <div class="animate__pulse animate__infinite absolute top-1/2 left-1/7 size-90 rounded-full bg-cyan-500" />
    <div
      class="animate__pulse animate__infinite absolute top-1/2 right-1/7 size-90 rounded-full bg-rose-500"
      style=""
    />
  </>
)

const Mask = () => <div class="absolute inset-0 size-full backdrop-blur-3xl" />

const Avatar = () => (
  <img
    src="/images/avatar.jpg"
    class="absolute inset-0 -top-1/3 h-96 -rotate-7 rounded-4xl bg-cover bg-center transition-transform duration-300 hover:-rotate-13"
  />
)

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return () => (
      <main class="relative h-svh w-svw overflow-hidden bg-black/95 text-white">
        <Decoration />
        <Mask />

        <Header />

        <section class="relative top-30 m-20 flex justify-between rounded-4xl bg-white/10 p-10 pl-90 backdrop-blur-3xl">
          <Avatar />

          <div class="space-y-7">
            <h2 class="text-4xl font-bold">
              Hi, i'm <b class="text-rose-400">Hayes</b>
            </h2>
            <h3 class="text-3xl font-semibold">Nice to meet you!</h3>

            <p class="text-xl">
              I'm a software developer with a passion for creating beautiful and functional web
              applications. I specialize in frontend development, but I also have experience with
              backend technologies.
            </p>

            <ul class="list-disc space-y-2 pl-6 text-lg">
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

            <p class="text-xl">
              I love learning new technologies and collaborating with others to solve challenging
              problems. When I'm not coding, you can find me exploring new music, hiking, or reading
              about tech trends.
            </p>

            <div class="flex space-x-4 pt-4">
              <a
                href="https://github.com/hayes"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              <a href="mailto:hayes@example.com" class="text-cyan-400 hover:underline">
                Email
              </a>
              <a
                href="https://linkedin.com/in/hayes"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyan-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  },
})
