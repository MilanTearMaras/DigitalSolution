<template>
  <button
    class="my-5 mt-auto mb-auto bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
    @click="toggleModal"
  >
    Přidat
  </button>

  <div v-if="isModalVisible" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full max-h-full bg-black bg-opacity-50 inset-0">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex justify-center p-4 md:p-5 space-y-4">
          <SalaryForm @submit="onSubmit" @cancel="toggleModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SalaryService } from '~/apiClient';

const emit = defineEmits(['salaryCreated']);
const isOpen = ref(false);

const isModalVisible = computed(() => {
  return isOpen.value;
});

function toggleModal () {
  isOpen.value = !isOpen.value;
}
async function onSubmit (values) {
  await SalaryService.postApiSalariesCreate(values);
  toggleModal();
  emit('salaryCreated');
}
</script>
