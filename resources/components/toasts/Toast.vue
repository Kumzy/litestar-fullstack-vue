<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 text-white bg-black rounded"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const message = ref('')

    function showToast(msg: string) {
      console.log(msg)
      message.value = msg
      visible.value = true
      setTimeout(() => (visible.value = false), 3000) // Auto-hide after 3 seconds
    }

    return { visible, message, showToast }
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
