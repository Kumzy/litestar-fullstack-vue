<template>
  <div class="relative">
    <!---->
    <div class="relative">
      <input
        id="ninja-input-74"
        type="radio"
        name="radio_custom"
        class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
        value="free"
      />
      <div
        class="card card-curved card-white peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&amp;_.child]:!opacity-100"
      >
        <div class="flex flex-col text-center">
          <img
            src="@/assets/images/customertypes/partner.svg"
            alt="Partner illustration"
            class="mx-auto mb-3 max-w-[160px]"
          />
          <p class="nui-heading nui-heading-md nui-weight-medium nui-lead-normal">Partner</p>
          <p
            class="nui-paragraph nui-paragraph-xs nui-weight-normal nui-lead-snug text-muted-500 dark:text-muted-400"
          >
            Partner of Laby for demonstration purpose
          </p>
        </div>
        <div class="child absolute end-2 top-3 opacity-0">
          <svg
            data-v-26e5b7b0=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon text-primary-500 h-7 w-7"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <g fill="currentColor">
              <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path>
              <path
                d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardCustomerType',
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
  @apply relative w-full duration-300 transition-all;
}

.card.card-curved {
  @apply rounded-xl;
}
.card.card-white {
  @apply border-white border;
}
</style>
