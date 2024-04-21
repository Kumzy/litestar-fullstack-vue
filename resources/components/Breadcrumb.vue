<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <!-- Home Link -->
      <li>
        <div>
          <router-link to="/" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </router-link>
        </div>
      </li>
      <!-- Breadcrumb Items -->
      <li v-for="(page, index) in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <router-link
            :to="page.href"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            :aria-current="index === pages.length - 1 ? 'page' : undefined"
          >
            {{ page.name }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'

export default defineComponent({
  components: {
    ChevronRightIcon,
    HomeIcon
  },
  setup() {
    const route = useRoute()

    const pages = computed(() => {
      const pathArray = route.path.split('/').filter((path) => path)
      const breadcrumbPages = pathArray.map((path, index) => {
        // Logic to map path segments to page names and hrefs
        // Replace this with your own logic, possibly using route.meta for more descriptive names
        return {
          name: path.charAt(0).toUpperCase() + path.slice(1),
          href: '/' + pathArray.slice(0, index + 1).join('/')
        }
      })

      return breadcrumbPages
    })

    return { pages }
  }
})
</script>
