<template>
  <div class="h-[calc(100vh-4rem)] flex justify-center relative">
    <div class="inline-block bg-white p-10 rounded-lg text-center overflow-x-auto w-3/5">
      <div class="inline-flex w-full justify-between mb-5">
        <div class="flex items-center max-w-sm">
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon class="w-4 h-4" />
            </div>
            <input :value="searchValue" type="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Hledat podle názvu" @input="debouncedInput">
          </div>
        </div>

        <CreateUserModal @user-created="userCreated" />
      </div>

      <UsersTable v-if="usersData" :items="usersData" @user-deleted="userDeleted" @page-change="changePage" />
    </div>
  </div>
  <GlobalAlert ref="alert" :text="alertText" />
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { setPageTitle } from '~/assets/ts/utils';
import { UserService } from '~/apiClient';
import { debounce } from '~/helpers/debounceFunction';

setPageTitle('Users');

const usersData = ref(null);
const searchValue = ref(null);
const alert = ref(null);
const alertText = ref('');

const debouncedInput = debounce(e =>
  searchValue.value = e.target.value,
300, // timeout in ms
);

onMounted(() => {
  loadData({});
});

watch(() => searchValue.value, (newVal) => {
  loadData({ nameStartsWith: newVal });
});

async function loadData ({
  email = undefined,
  emailStartsWith = undefined,
  emailContains = undefined,
  name = undefined,
  nameStartsWith = undefined,
  nameContains = undefined,
  surname = undefined,
  surnameStartsWith = undefined,
  surnameContains = undefined,
  active = undefined,
  orderName = undefined,
  orderCreatedAt = undefined,
  limit = 10,
  page = undefined,
}) {
  usersData.value = await UserService.getApiUsersList(email, emailStartsWith, emailContains, name, nameStartsWith, nameContains, surname, surnameStartsWith, surnameContains, active, orderName, orderCreatedAt, limit, page);
}
function changePage (value) {
  loadData(value);
}
function userDeleted () {
  alertText.value = 'Uživatel byl smazán!';
  alert.value.activateAlert();
  loadData({});
}
function userCreated () {
  alertText.value = 'Uživatel byl vytvořen!';
  alert.value.activateAlert();
  loadData({});
}

</script>

<style scoped>
.custom-height {
  height: calc(100vh - 4rem);
}
</style>
