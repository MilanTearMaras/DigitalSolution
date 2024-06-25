<template>
  <div class="h-[calc(100vh-4rem)] flex justify-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center overflow-x-auto">
      <div class="inline-flex">
        <div class="inline-flex items-center justify-center p-3 min-h-full">
          <MagnifyingGlassIcon class="w-5 h-5 inline-block" />
          <input v-model="searchValue" type="search" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Hledat podle názvu">
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
