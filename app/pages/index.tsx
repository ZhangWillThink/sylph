import Header from '~/components/Header'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return () => (
      <main class="h-svh w-svw overflow-hidden bg-cover bg-top bg-no-repeat">
        <Header />

        <section class="flex justify-between sm:gap-4 md:gap-7 lg:gap-10">
          <aside>123</aside>

          <aside>12313</aside>
        </section>
      </main>
    )
  },
})
