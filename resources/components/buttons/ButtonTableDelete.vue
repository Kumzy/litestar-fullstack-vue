<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

// Define props with their types
const props = defineProps<{
  itemId: string;
}>()

// Define emits
const emit = defineEmits<{
  (event: 'edit', itemId: string): void;
}>()

const editItem = () => {
  emit('edit', props.itemId)
}
</script>

<template>
  <button
    class="px-4 py-2 bg-blue-500 text-white font-bold text-xs rounded hover:bg-blue-600 transition duration-300 ease-in-out"
    @click="editItem"
  >
    Edit
  </button>
</template>

<style scoped>

</style>
