<template>
  <div class="h-[calc(100vh-4rem)] flex justify-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center overflow-x-auto">
      <div class="inline-flex w-full justify-between mb-5">
        <div class="flex items-center max-w-sm">
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon class="w-4 h-4" />
            </div>
            <input v-model="searchValue" type="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Hledat podle názvu">
          </div>
        </div>

        <CreateUserModal @user-created="loadData" />
      </div>

      <UsersTable :items="filteredUsersData" @user-deleted="loadData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { setPageTitle } from '~/assets/ts/utils';
import { UserService } from '~/apiClient';

setPageTitle('Users');

const usersData = ref(null);
const searchValue = ref(null);

const filteredUsersData = computed(() => {
  return searchValue.value ? usersData.value?.filter(item => item.name.includes(searchValue.value)) : usersData.value;
});

onMounted(() => {
  loadData();
});

async function loadData () {
  const response = await UserService.getApiUsersList();
  usersData.value = response.items;
}

</script>

<style scoped>
.custom-height {
  height: calc(100vh - 4rem);
}
</style>
