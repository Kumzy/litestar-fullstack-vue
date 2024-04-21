<template>
  <div class="relative overflow-hidden border rounded-lg bg-white px-4 pb-12 pt-5 sm:px-6 sm:pt-6">
    <dt v-if="loading" class="animate-pulse">
      <!-- Loading content -->
    </dt>
    <dt v-else>
      <div class="absolute">
        <Avatar :customerName="customer.name" :customerId="customer.id" />
      </div>
      <p class="ml-16 truncate text-2xl font-semibold text-gray-900 mr-16">
        {{ customer.name }}
      </p>
      <p class="ml-16 truncate text-sm font-medium text-gray-500">{{ customer.category?.name }}</p>
      <!-- License Status in the top right corner -->
      <div class="absolute top-4 right-4 mt-2 mr-2">
        <span class="badge badge-green">{{ customer.license_status }}</span>
      </div>
    </dt>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Customer } from '@/types/customer'
import Avatar from '@/components/avatar/AvatarCustomer.vue'

export default defineComponent({
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    customer: {
      type: Object as PropType<Customer>,
      required: true
    }
  },
  components: {
    Avatar
  }
})
</script>
