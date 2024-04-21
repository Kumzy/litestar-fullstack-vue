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
        Archiving the customer makes it entirely read-only. It is hidden from the dashboard and
        doesn't display in searches.
      </p>
      <button
        type="button"
        class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {{ actionButtonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardSetting',
  props: {
    title: {
      type: String,
      required: true
    },
    actionButtonText: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {}
  }
})
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
}

p {
  @apply mt-0 mb-4;
}
</style>
