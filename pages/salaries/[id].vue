<template>
  <div class="h-screen flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center">
      <SalaryForm :salary="salaryData" @submit="onSubmit" @cancel="router.push('/salary')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SalaryService } from '~/apiClient';

const router = useRouter();
const { params } = useRoute();
const salaryData = ref(null);

onMounted(() => {
  loadData();
});

async function loadData () {
  salaryData.value = await SalaryService.getApiSalariesGet(params.id);
}

async function onSubmit (values) {
  await SalaryService.postApiSalariesUpdate(params.id, values);
  router.push({ path: '/salary' });
}
</script>
