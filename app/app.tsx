import { defineComponent } from "vue";
import { NuxtLayout, NuxtPage } from "#components";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    );
  },
});
