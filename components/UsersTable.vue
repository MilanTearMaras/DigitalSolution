<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="px-6 py-3">
            Email
          </th>
          <th class="px-6 py-3">
            Název
          </th>
          <th class="px-6 py-3">
            Stav
          </th>
          <th class="px-6 py-3" />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in props.items" :key="key" class="bg-white border-b">
          <td class="px-6 py-4">
            {{ item.email }}
          </td>
          <td class="px-6 py-4">
            {{ item.name }}
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center py-1 px-4 no-underline rounded-full font-sans font-semibold text-sm border-blue mr-2" :class="{'bg-red-200': !item.active, 'text-red-500': !item.active, 'bg-green-200': item.active, 'text-green-500': item.active}">
              <span class="w-3 h-3 rounded-full mr-3" :class="{'bg-red-500': !item.active, 'bg-green-500': item.active}" />
              {{ item.active ? 'Aktivní' : 'Neaktivní' }}
            </div>
          </td>
          <td class="inline-flex px-6 py-4">
            <div class="flex flex-col items-center justify-center p-3 min-h-full">
              <NuxtLink :to="`/users/${item.id}`" class="text-sm font-medium tracking-wider text-black rounded-md hover:text-purple-600" title="Example link">
                <InformationCircleIcon class="w-5 h-5 inline-block" />
              </NuxtLink>
            </div>
            <DeleteUserModal :user="item" @user-deleted="userDeleted" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/20/solid';

const emit = defineEmits(['userDeleted']);
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});

function userDeleted () {
  emit('userDeleted');
}
</script>
