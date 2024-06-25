<template>
  <button
    class="my-5 mt-auto mb-auto bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
    @click="toggleModal"
  >
    Vytvořit nového uživatele
  </button>

  <div v-if="isModalVisible" class="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full max-h-full bg-black bg-opacity-50 inset-0">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">
            Nový uživatel
          </h3>
          <button class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" @click="toggleModal">
            <XMarkIcon class="w-5 h-5 inline-block" />
          </button>
        </div>
        <div class="flex justify-center p-4 md:p-5 space-y-4">
          <UserForm @submit="onSubmit" @cancel="toggleModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { UserService } from '~/apiClient';

const emit = defineEmits(['userCreated']);
const isOpen = ref(false);

const isModalVisible = computed(() => {
  return isOpen.value;
});

function toggleModal () {
  isOpen.value = !isOpen.value;
}
async function onSubmit (values) {
  await UserService.postApiUsersCreate(values);
  toggleModal();
  emit('userCreated');
}
</script>
