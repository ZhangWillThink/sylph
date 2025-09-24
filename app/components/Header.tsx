export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <header class="sticky top-0 right-0 z-50">
        <div class="relative mx-auto flex max-w-6xl items-center justify-between bg-black/35 px-6 py-3 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-white/10 backdrop-blur-md supports-[backdrop-filter]:bg-black/25 md:py-4">
          <aside class="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-rose-300 bg-clip-text font-semibold tracking-wide text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]">
            Sylph
          </aside>

          <aside class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70 shadow-sm ring-1 ring-white/10">
            v1.0.0
          </aside>

          <div
            aria-hidden
            class="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-cyan-400/40 via-white/10 to-rose-400/40"
          />
        </div>
      </header>
    )
  },
})
