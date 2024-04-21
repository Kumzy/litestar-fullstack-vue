<template>
  <!-- Profile dropdown -->
  <Menu as="div" class="ml-4 relative flex-shrink-0">
    <div>
      <MenuButton
        class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
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
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100' : '',
                'flex w-full font-normal block px-4 py-2 text-sm text-gray-700'
              ]"
              >Your Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100' : '',
                'flex w-full font-normal block px-4 py-2 text-sm text-gray-700'
              ]"
              >Settings</a
            >
          </MenuItem>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="/logout"
              @click.prevent="handleLogout()"
              :class="[
                active ? 'bg-gray-100' : '',
                'flex w-full font-normal block px-4 py-2 text-sm text-gray-700'
              ]"
              >Sign out</a
            >
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'NavHeaderProfileDropdown',
  components: {
    MenuButton,
    MenuItems,
    MenuItem,
    Menu,
    ChevronDownIcon,
    QuestionMarkCircleIcon
  },
  setup() {
    return {}
  },
  methods: {
    handleLogout() {
      const authStore = useAuthStore()
      authStore.logout()
    }
  }
}
</script>
