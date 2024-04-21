<template>
  <div class="lg:pl-72">
    <Disclosure as="nav" class="sticky p-0 top-0 inset-x-0 z-50 bg-white shadow" v-slot="{ open }">
      <div class="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  ctrl-k-focus
                  id="search"
                  name="search"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
                <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd
                    class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"
                  >
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden lg:ml-4 lg:flex lg:items-center">
            <ToolbarButton />
            <NavHeaderHelpDropdown />
            <NavHeaderProfileDropdown />
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
          <DisclosureButton
            as="a"
            href="#"
            class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Dashboard</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Team</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Projects</DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="#"
            class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Calendar</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">Tom Cook</div>
              <div class="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button
              type="button"
              class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <DisclosureButton
              as="a"
              href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >Your Profile</DisclosureButton
            >
            <DisclosureButton
              as="a"
              href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >Settings</DisclosureButton
            >
            <DisclosureButton
              as="a"
              href="#"
              class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >Sign out</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import ToolbarButton from '@/components/buttons/ToolbarButton.vue'
import NavHeaderHelpDropdown from '@/components/navbar/NavHeaderHelpDropdown.vue'
import NavHeaderProfileDropdown from '@/components/navbar/NavHeaderProfileDropdown.vue'

interface NavigationItem {
  name: string
  route: string
}

export default defineComponent({
  name: 'NavBar',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuButton,
    MenuItems,
    MenuItem,
    Menu,
    ToolbarButton,
    NavHeaderHelpDropdown,
    NavHeaderProfileDropdown,
    BellIcon,
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon
  },
  setup() {
    return { ToolbarButton, NavHeaderHelpDropdown, NavHeaderProfileDropdown }
  }
})
</script>
