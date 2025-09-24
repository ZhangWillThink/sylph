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

const Mask = () => <div class="inset-0 size-full backdrop-blur-3xl" />

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return () => (
      <main class="relative h-svh w-svw overflow-hidden bg-black">
        <Decoration />
        <Mask />

        <Header />

        <section class="flex justify-between rounded-lg sm:gap-4 sm:p-4 md:gap-7 md:p-7 lg:gap-10 lg:p-10">
          <aside>123</aside>

          <aside>12313</aside>
        </section>
      </main>
    )
  },
})
