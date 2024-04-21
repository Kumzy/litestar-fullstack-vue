<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title-wrapper">
        <h4 class="card-title">
          {{ title }}
        </h4>
      </div>
    </div>
    <div class="card-body py-3 px-4">
      <p>
        This action deletes {{ entityName }} and everything this customer contains. <b>There is no going back.</b>
      </p>
        <button
          @click="showModal = true"
          class="rounded-md bg-danger px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-danger-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {{ actionButtonText }}
        </button>
    </div>
  </div>

    <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
       <div v-if="showModal" class="card">
          <div class="card-header">
            <div class="card-title-wrapper">
              <h4 class="card-title">
                Confirm Deletion
              </h4>
            </div>
          </div>
          <div class="card-body py-3 px-4">
            <p>
              Enter the following to confirm:
              {{ entityName }}
            </p>
            <input
              type="text"
              v-model="inputText"
              @input="checkInput"
              class="border-2 border-gray-300 p-2 rounded"/>
          </div>
          <div class="modal-footer card-footer">
            <button class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="showModal = false">Cancel, keep customer</button>
            <button class="ml-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" :disabled="!isButtonEnabled" @click="handleDeleteCustomer">Confirm, delete customer</button>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, defineProps } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deleteCustomer } from '@/api/customers.ts';

// Define props with TypeScript interface for better type inference and checking
interface CardSettingProps {
  title: string;
  actionButtonText: string;
  entityName?: string;
  entityId?: string;
}

const props = defineProps<CardSettingProps>();

const showModal = ref(false);
const inputText = ref('');
const isButtonEnabled = ref(false);

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showModal.value = false;
  }
};

// Lifecycle hooks in <script setup>
onMounted(() => {
  window.addEventListener('keydown', closeOnEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', closeOnEscape);
});

// Function to check input text
const checkInput = () => {
  isButtonEnabled.value = inputText.value === props.entityName;
};

const router = useRouter();
const handleDeleteCustomer = async () => {
  try {
    const response = await deleteCustomer(props.entityId);
    router.push({ name: 'customers' });
  } catch (error) {
    console.error('Failed to delete customer:', error);
  }
};

</script>

<style scoped>
.card {
  @apply mt-4 border border-solid rounded;
  border-color: #dcdcde;
  background-color: #fbfafd;
}

.card-header {
  @apply pr-4 pl-4 pt-3 pb-3 flex justify-between border-b border-solid rounded-t;
  background-color: #fff;
  border-color: #dcdcde;
}

.card-title-wrapper {
  @apply flex grow;
}
.card-title {
  @apply flex text-sm font-semibold relative m-0;
}

.card-body {
  @apply rounded-b;
  background-color: #fcf1ef;
}

.card-footer {
  @apply flex flex-row p-4 pt-2 border-none;
  background-color: #fbfafd;
}

.modal-footer {
  @apply flex flex-wrap justify-end border-t border-t-[#bfbfc3];
}

p {
  @apply mt-0 mb-4;
}
</style>
