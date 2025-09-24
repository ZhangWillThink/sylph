export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <header class="sticky top-0 right-0 z-10">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-2 py-6">
          <aside>Sylph</aside>

          <aside>v1.0.0</aside>
        </div>
      </header>
    )
  },
})
