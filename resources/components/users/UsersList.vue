<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Category
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Website
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  License status
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Type
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="user in users" :key="user.id">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <Avatar :customerName="user.name" :customerId="user.id" />
                    <!-- <img class="h-11 w-11 rounded-full" :src="customer.image" alt="" /> -->
                    <div class="ml-4">
                      <router-link :to="{ name: 'user-detail', params: { id: user.id } }">
                        <div class="font-medium text-gray-900 hover:underline">
                          {{ user.name }}
                        </div>
                      </router-link>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div class="text-gray-900">{{ user.category?.name }}</div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <a
                    :href="user.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 hover:underline"
                    >{{ user.website }}</a
                  >
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span :class="getStatusClass(user.license_status)">{{
                    user.license_status
                  }}</span>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  {{ user.customer_type?.name }}
                </td>
                <td
                  class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                >
                   <router-link :to="{ name: 'user-detail', params: { id: user.id } }">
                    <ButtonEdit/>
                   </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        :total="total"
        :limit="limit"
        :currentPage="1"
        :offset="0"
        @update:page="handlePageChange"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Avatar from '@/components/avatar/AvatarCustomer.vue';
import Pagination from '@/components/Pagination.vue';
import ButtonEdit from '@/components/buttons/ButtonTableEdit.vue';
import { fetchUsers } from '@/api/user.ts';
import { User, APIListAndCount } from '@/types/users';

// Props
const props = defineProps({
  filterStatus: String,
  searchQuery: String
});

const users = ref<User[]>([]);
const currentPage = ref(1);
const total = ref(0);
const limit = ref(20);

// Router
const route = useRoute();
const router = useRouter();

// Computed status class
const getStatusClass = (status: string) => {
  switch (status) {
    case 'active':
      return 'badge badge-green';
    case 'inactive':
      return 'badge badge-gray';
    case 'expired':
      return 'badge badge-red';
    case 'expiringSoon':
      return 'badge badge-yellow';
    default:
      return '';
  }
};

// Fetch data function
const fetchData = async (page: number = currentPage.value) => {
  const filters: APIListAndCount = { currentPage: page, pageSize: limit.value, searchField: 'name', searchString: route.query.search as string || '' };
  try {
    const response = await fetchUsers(filters);
    users.value = response.data.items;
    total.value = response.data.total;
    currentPage.value = page;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};

// Handle page change
const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
  fetchData(newPage);
};

// On mounted
onMounted(() => {
  fetchData();
});

</script>
