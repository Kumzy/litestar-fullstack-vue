<script <script setup lang="ts">
import { ref, watch, provide } from 'vue';
import { useRoute } from 'vue-router';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import Toast from '@/components/toasts/Toast.vue';

// Define the layout reactive reference
const layout = ref<string>('EmptyLayout');

// Use Vue Router's useRoute composable to access route details
const route = useRoute();

// Define a ref for toast messages
const toast = ref(null);

// Provide the toast ref to the component tree
provide('toast', toast);

// Watch the route changes to dynamically update the layout
watch(
  () => route.fullPath,
  () => {
    layout.value = route.meta.layout || 'EmptyLayout'; // Fallback to 'EmptyLayout' if no layout is specified in the route meta
  }
);
</script>

<template>
  <div>
    <Toast ref="toast" />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
