<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-6 py-3">
            Částka
          </th>
          <th class="px-6 py-3">
            Měsíc
          </th>
          <th class="px-6 py-3">
            Rok
          </th>
          <th class="px-6 py-3" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in props.items.items" :key="key" class="bg-white border-b">
          <td class="px-6 py-4">
            {{ item.money }}
          </td>
          <td class="px-6 py-4">
            {{ item.month }}
          </td>
          <td class="px-6 py-4">
            {{ item.year }}
          </td>
          <td class="inline-flex px-6 py-4">
            <div class="flex flex-col items-center justify-center p-3 min-h-full">
              <NuxtLink :to="`/salaries/${item.id}`" class="text-sm font-medium tracking-wider text-black rounded-md hover:text-purple-600" title="Example link">
                <InformationCircleIcon class="w-5 h-5 inline-block" />
              </NuxtLink>
            </div>
            <DeleteSalaryModal :salary-id="item.id" @salary-deleted="salaryDeleted" />
          </td>
        </tr>
        <tr>
          <td>
            <div class="max-w-lg mx-auto flex items-center">
              <button
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="border border-black text-black text-sm p-3 first:rounded-l-md last:rounded-r-md"
                :class="{'bg-purple-500 text-white': props.items.page === pageNumber}"
                @click="changePage(pageNumber)"
              >
                {{ pageNumber }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/20/solid';
import DeleteSalaryModal from '~/components/DeleteSalaryModal.vue';

const emit = defineEmits(['salaryDeleted', 'pageChange']);
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});

const totalPages = computed(() => {
  return Math.ceil(props.items.count / props.items.limit);
});

function salaryDeleted () {
  emit('salaryDeleted');
}
function changePage (pageNumber) {
  emit('pageChange', { page: pageNumber });
}
</script>
