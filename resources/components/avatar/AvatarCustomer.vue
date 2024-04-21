<template>
  <router-link :to="{ name: 'user-detail', params: { id: customerId } }">
    <div :class="['avatar avatar-s48 avatar-identicon', avatarClass]">
      {{ firstLetter }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { findFirstIntegerInString } from '@/utils/string'

export default defineComponent({
  name: 'Avatar',
  props: {
    customerId: {
      type: String,
      required: true
    },
    customerName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const firstLetter = computed(() => props.customerName.charAt(0).toUpperCase())

    const id: number | null = findFirstIntegerInString(props.customerId)

    const avatarClass = computed(() => {
      return id ? `avatar-identicon-bg${id}` : 'avatar-identicon-bg1'

    })

    return { firstLetter, avatarClass }
  }
})
</script>

<style>
.avatar {
  @apply border inline-flex border-solid overflow-hidden shrink-0 leading-none;
  user-select: none; /* Prevent text selection */
}

.avatar-s48 {
  @apply w-12 h-12 rounded-lg text-xl;
}

.avatar-identicon {
  @apply text-center align-top justify-center items-center text-slate-800;
}

.avatar-identicon-bg1 {
  background-color: #fcf1ef;
}
.avatar-identicon-bg2 {
  background-color: #f4f0ff;
}
.avatar-identicon-bg3 {
  background-color: #f1f1ff;
}
.avatar-identicon-bg4 {
  background-color: #e9f3fc;
}
.avatar-identicon-bg5 {
  background-color: #ecf4ee;
}
.avatar-identicon-bg6 {
  background-color: #fdf1dd;
}
.avatar-identicon-bg7 {
  background-color: #ececef;
}
</style>
