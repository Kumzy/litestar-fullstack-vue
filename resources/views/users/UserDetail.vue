<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-2">
      {{ user?.name}}
      <router-view>

      </router-view>
    </div>
  </div>
  <!-- Display loading message while fetching data -->
</template>

<script setup lang="ts">
import { onMounted, reactive, provide } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUser } from '@/api/user.ts';

// Reactive state for the customer data
const user = reactive<User | Record<string, unknown>>({});

const router = useRouter();
const route = useRoute();

async function fetchUserData() {
  const id = route.params.id as string;
  try {
    const response = await getUser(id);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch customer:', error);
    return {}; // Return empty object in case of an error
  }
}

onMounted(async () => {
  const data = await fetchUserData();
  Object.assign(user, data);
});

// Provide the customer object for child components
provide('user', user);

const onCancel = () => {
  router.push({ name: 'users' });
};

// Expose onCancel to the template
</script>
