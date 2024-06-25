<template>
  <div class="h-[calc(100vh-4rem)] flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center overflow-x-auto h-fit">
      <SalariesTable :items="salariesData" @salary-deleted="loadData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { setPageTitle } from 'assets/ts/utils';
import SalariesTable from '~/components/SalariesTable.vue';
import { SalaryService } from '~/apiClient';

definePageMeta({
  middleware: 'auth',
});
setPageTitle('Salary');

const salariesData = ref(null);

onMounted(() => {
  loadData();
});

async function loadData () {
  const response = await SalaryService.getApiSalariesList();
  salariesData.value = response.items;
}
</script>
