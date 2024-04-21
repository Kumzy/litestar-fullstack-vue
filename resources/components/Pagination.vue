<template>
  <nav aria-label="Page navigation">
    <ul class="flex list-none">
      <li v-if="currentPage > 1">
        <button @click="goToPage(currentPage - 1)" class="p-2">
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </li>

      <li v-for="page in totalPages" :key="page" :class="{ 'font-bold': page === currentPage }">
        <button @click="goToPage(page)" class="p-2">{{ page }}</button>
      </li>

      <li v-if="currentPage < totalPages">
        <button @click="goToPage(currentPage + 1)" class="p-2">
          <span class="sr-only">Next</span>
          <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

export default defineComponent({
  name: 'Pagination',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const currentPage = ref(props.currentPage)
    const totalPages = computed(() => Math.ceil(props.total / props.limit))

    watch(
      () => props.currentPage,
      (newPage) => {
        currentPage.value = newPage
      }
    )

    const goToPage = (page: number) => {
      if (page < 1 || page > totalPages.value) return
      currentPage.value = page
      emit('update:page', page)
    }

    return { currentPage, totalPages, goToPage }
  }
})
</script>
