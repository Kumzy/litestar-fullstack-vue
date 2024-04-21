<template>
  <div
    v-if="show"
    class="alert flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
    role="alert"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    const show = ref(false)

    onMounted(() => {
      show.value = true
      setTimeout(() => {
        show.value = false
      }, props.duration)
    })

    watch(
      () => props.message,
      () => {
        show.value = true
        setTimeout(() => {
          show.value = false
        }, props.duration)
      }
    )

    return { show }
  }
})
</script>

<style scoped>
/* Tailwind alert styles - customize as needed */
.alert {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
