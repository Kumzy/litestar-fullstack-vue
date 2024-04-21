<template>
  <div class="w-full h-full bg-white">
    <Sidebar />
    <NavBar />
    <main class="h-full pt-2 lg:pl-72">
      <div class="p-4">
        <Breadcrumb />
        <slot class="mt-4"></slot>
        <!-- <RouterView class="mt-4" /> -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/navbar/NavBar.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Sidebar,
    NavBar,
    Breadcrumb
  },
  setup() {
    return { Sidebar, NavBar, Breadcrumb }
  }
})
</script>
