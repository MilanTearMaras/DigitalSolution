<template>
  <div class="flex-1 flex flex-col min-h-screen overflow-auto bg-gray-100">
    <div class="flex w-full">
      <aside class="w-64 h-screen overflow-auto bg-gray-700 p-4">
        <nav class="flex flex-col gap-5">
          <NuxtLink
            to="/"
            class="inline-flex w-full px-4 py-2.5 bg-white text-black rounded-md"
          >
            <UserCircleIcon class="w-5 h-5 inline-block" />
            Users
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="inline-flex w-full px-4 py-2.5 bg-white text-black rounded-md"
          >
            <ArrowRightOnRectangleIcon class="w-5 h-5 inline-block" />
            Login
          </NuxtLink>
          <NuxtLink
            v-if="authenticated"
            to="/salary"
            class="inline-flex w-full px-4 py-2.5 bg-white text-black rounded-md"
          >
            <BanknotesIcon class="w-5 h-5 inline-block" />
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
import { UserCircleIcon } from '@heroicons/vue/20/solid';
import { BanknotesIcon } from '@heroicons/vue/20/solid';
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/20/solid';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const { authenticated } = storeToRefs(useAuthStore());
</script>

<style scoped>
.router-link-exact-active {
  @apply opacity-80;
}
</style>
