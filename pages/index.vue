<template>
  <div class="h-screen flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center">
      Výpis uživatelů zde
      <br>
      <br>
      <NuxtLink :to="`/demo/${paramTestValue}`" class="underline" title="Example link">
        Demo odkaz ({{ paramTestValue }})
        <ArrowRightCircleIcon class="w-5 h-5 text-green-700 inline-block" />
      </NuxtLink>
      <br>
      <button type="button" class="bg-green-600 rounded-lg my-4 text-white px-4 py-1.5" @click.prevent="paramTestValue += 1">
        Test +1
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightCircleIcon } from '@heroicons/vue/20/solid';
import { setPageTitle } from '~/assets/ts/utils';

setPageTitle('Users');

const paramTestValue = ref(0);

</script>

<style scoped>

</style>
