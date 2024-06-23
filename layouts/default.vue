<template>
  <div class="flex-1 flex flex-col min-h-screen overflow-auto bg-gray-100">
    <div class="flex w-full">
      <aside class="w-64 h-screen overflow-auto bg-gray-700 p-4">
        <nav>
          <NuxtLink
            to="/demo/NejakyTestSlug"
            class="inline-flex w-full px-4 py-2.5 bg-white text-black rounded-md"
          >
            Demo odkaz
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

</script>

<style scoped>
.router-link-exact-active {
  @apply opacity-80;
}
</style>
