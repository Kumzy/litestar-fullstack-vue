<template>
  <div class="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
    <dt v-if="loading" class="animate-pulse">
      <div class="absolute rounded-md bg-gray-300 p-3">
        <div class="h-6 w-6 bg-gray-200"></div>
      </div>
      <p
        class="ml-16 h-4 w-3/4 bg-gray-200 rounded-md text-sm font-medium text-transparent select-none"
      >
        Loading...
      </p>
    </dt>
    <dt v-else>
      <div class="absolute rounded-md bg-primary p-3">
        <component :is="icon" class="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <p class="ml-16 truncate text-sm font-medium text-gray-500">{{ name }}</p>
    </dt>
    <dd v-if="loading" class="animate-pulse ml-16 flex items-baseline pb-6 sm:pb-7">
      <div class="h-8 w-1/2 bg-gray-200 rounded-md"></div>
      <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
        <div class="text-sm">
          <div class="font-medium text-transparent select-none">View all</div>
        </div>
      </div>
    </dd>
    <dd v-else class="ml-16 flex items-baseline pb-6 sm:pb-7">
      <p class="text-2xl font-semibold text-gray-900">{{ stat }}</p>
      <p
        v-if="change"
        :class="[
          changeType === 'increase' ? 'text-green-600' : 'text-red-600',
          'ml-2 flex items-baseline text-sm font-semibold'
        ]"
      >
        <ArrowUpIcon
          v-if="changeType === 'increase'"
          class="h-5 w-5 flex-shrink-0 self-center text-green-500"
          aria-hidden="true"
        />
        <ArrowDownIcon
          v-else-if="changeType === 'decrease'"
          class="h-5 w-5 flex-shrink-0 self-center text-red-500"
          aria-hidden="true"
        />
        <span class="sr-only">
          {{ changeType === 'increase' ? 'Increased' : 'Decreased' }} by
        </span>
        {{ change }}
      </p>
      <div class="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
        <div class="text-sm">
          <router-link :to="link" class="font-medium text-indigo-600 hover:text-indigo-500">
            View all<span class="sr-only"> {{ name }} stats</span>
          </router-link>
        </div>
      </div>
    </dd>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/20/solid'

export default defineComponent({
  props: {
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    name: {
      type: String as PropType<string>,
      required: true
    },
    stat: {
      type: Number,
      required: true
    },
    icon: {
      type: Object as PropType<Component>,
      required: true
    },
    change: {
      type: String as PropType<string>,
      default: null
    },
    changeType: {
      type: String as PropType<'increase' | 'decrease'>,
      default: null
    },
    link: {
      type: String as PropType<string>,
      default: '#'
    }
  },
  components: {
    ArrowUpIcon,
    ArrowDownIcon
  }
})
</script>
