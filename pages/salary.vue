<template>
  <div class="h-[calc(100vh-4rem)] flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center overflow-x-auto h-fit w-3/5">
      <div class="inline-flex w-full justify-between mb-5">
        <div class="flex items-center max-w-sm">
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon class="w-4 h-4" />
            </div>
            <input :value="searchValue" type="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Hledat podle ID uživatele" @input="debouncedInput">
          </div>
        </div>

        <CreateSalaryModal @salary-created="salaryCreated" />
      </div>
      <SalariesTable v-if="salariesData" :items="salariesData" @salary-deleted="salaryDeleted" @page-change="changePage" />
    </div>
  </div>
  <GlobalAlert ref="alert" :text="alertText" />
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { setPageTitle } from 'assets/ts/utils';
import SalariesTable from '~/components/SalariesTable.vue';
import { SalaryService } from '~/apiClient';
import CreateSalaryModal from '~/components/CreateSalaryModal.vue';
import { debounce } from '~/helpers/debounceFunction';

definePageMeta({
  middleware: 'auth',
});
setPageTitle('Salary');

const salariesData = ref(null);
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
  loadData({ user: newVal });
});

async function loadData ({
  user = undefined,
  money = undefined,
  moneyGt = undefined,
  moneyGte = undefined,
  moneyLt = undefined,
  moneyLte = undefined,
  year = undefined,
  yearGt = undefined,
  yearGte = undefined,
  yearLt = undefined,
  yearLte = undefined,
  month = undefined,
  monthGt = undefined,
  monthGte = undefined,
  monthLt = undefined,
  monthLte = undefined,
  orderCreatedAt = undefined,
  limit = 10,
  page = undefined,
}) {
  salariesData.value = await SalaryService.getApiSalariesList(user, money, moneyGt, moneyGte, moneyLt, moneyLte, year, yearGt, yearGte, yearLt, yearLte, month, monthGt, monthGte, monthLt, monthLte, orderCreatedAt, limit, page);
}
function changePage (value) {
  loadData(value);
}
function salaryCreated () {
  alertText.value = 'Záznam byl vytvořen!';
  alert.value.activateAlert();
  loadData({});
}
function salaryDeleted () {
  alertText.value = 'Záznam byl smazán!';
  alert.value.activateAlert();
  loadData({});
}
</script>
