<template>
  <div class="flex-1 flex flex-col min-h-screen overflow-auto bg-gray-100">
    <div class="flex w-full">
      <aside class="w-64 h-screen overflow-auto bg-gray-700 p-4">
        <nav class="flex flex-col gap-5">
          <NuxtLink
            to="/"
            class="inline-flex w-full px-4 py-2.5 bg-white text-white rounded-md items-center bg-opacity-20"
          >
            <UserCircleIcon class="w-5 h-5 inline-block mr-2" />
            Users
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="inline-flex w-full px-4 py-2.5 bg-white text-white rounded-md items-center bg-opacity-20"
          >
            <ArrowRightOnRectangleIcon class="w-5 h-5 inline-block mr-2" />
            Login
          </NuxtLink>
          <NuxtLink
            v-if="authenticated"
            to="/salary"
            class="inline-flex w-full px-4 py-2.5 bg-white text-white rounded-md items-center bg-opacity-20"
          >
            <BanknotesIcon class="w-5 h-5 inline-block mr-2" />
            Salary
          </NuxtLink>
        </nav>
      </aside>
      <div class="flex flex-col flex-1 items-center justify-center">
        <header class="border-b h-16 px-4 w-full flex items-center justify-between">
          <ModuleTitle />
        </header>
        <main class="w-full h-full overflow-auto">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon, BanknotesIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/20/solid';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const { authenticated } = storeToRefs(useAuthStore());
</script>

<style scoped>
.router-link-exact-active {
  @apply opacity-80;
}
</style>
