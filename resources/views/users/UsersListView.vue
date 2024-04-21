<template>
  <div class="page-title-holder">
    <h1 class="page-title">Users</h1>

  </div>

  <UsersList :filterStatus="filter" :searchQuery="search" />
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import UsersList from '@/components/users/UsersList.vue';

// Using ref to create reactive references
const filter = ref('');
const search = ref('');
const customerType = ref('');


const router = useRouter();

// Function to update filters and navigate
const updateFilter = (status: string) => {
  filter.value = status;
  router.push({
    name: 'users',
    query: { status: filter.value, search: search.value, customerType: customerType.value }
  });
};

const updateSearch = (searchValue: string) => {
  search.value = searchValue;
  router.push({
    name: 'users',
    query: { status: filter.value, search: search.value, customerType: customerType.value }
  });
};
</script>

<style scoped>
.top-area {
  @apply flex border-b border-solid;
  border-color: #dcdcde;
}

.nav-controls {
  @apply flex items-center text-right;
}

.page-title-holder {
  @apply items-center flex;
}

.page-title {
  @apply my-3.5 text-2xl font-semibold;
  color: #333238;
}

.page-title-controls {
  @apply ml-auto items-center flex gap-4;
}
</style>
