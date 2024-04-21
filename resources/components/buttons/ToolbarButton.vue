<template>
  <!-- Plus button navbar -->
  <Menu as="div" class="relative flex-shrink-0">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <PlusCircleIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-violet-200" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-48 divide-y divide-gray-100 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <router-link
              :to="{ name: 'customers-new' }"
              :class="[
                active ? 'bg-gray-100' : '',
                'flex w-full font-normal block px-4 py-2 text-sm text-gray-700'
              ]"
            >
              New customer
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <router-link
              :to="{ name: 'licenses-new' }"
              :class="[
                active ? 'bg-gray-100' : '',
                'flex w-full font-normal block px-4 py-2 text-sm text-gray-700'
              ]"
            >
              New license
            </router-link>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, PlusCircleIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'ToolbarButton',
  components: {
    MenuButton,
    MenuItems,
    MenuItem,
    Menu,
    ChevronDownIcon,
    PlusCircleIcon
  },
  setup() {
    return {}
  }
}
</script>
