<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
   <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <router-link :to="{name: 'dashboard'}">
          <img class="h-8 w-auto" src="@/assets/images/laby-picto-white.svg" alt="Laby" />
          </router-link>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in filteredRoutes" :key="item.name">
                  <router-link
                    :to="{ name: item.name, params: { }}"
                    class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                  >
                    <component :is="item.meta.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span >{{ item.meta.title }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">Recent customers</div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a :href="team.href" :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{ team.initial }}</span>
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
<!--            <li class="mt-auto">-->
<!--              <router-link :to="{name:'admin'}" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">-->
<!--                <WrenchIcon class="h-6 w-6 shrink-0" aria-hidden="true" />-->
<!--                Administration-->
<!--              </router-link>-->
<!--            </li>-->
          </ul>
        </nav>
      </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRouter, useRoute,  RouteRecordRaw } from 'vue-router'
import {
  WrenchIcon
} from '@heroicons/vue/24/outline'

const sidebarOpen = ref(false)
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
export default defineComponent({
  name: 'Sidebar',
  components: {
    WrenchIcon
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const filteredRoutes = computed(() => {
      // Filtering routes based on the meta field
      return router.getRoutes().filter(r => {
        return r.meta.sidebar && r.meta.sidebar === route.meta.sidebar;
      });
    });

    return { filteredRoutes, teams }

  }
})
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-800;
  @apply text-white;
}
</style>
