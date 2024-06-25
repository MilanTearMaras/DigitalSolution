<template>
  <div class="h-screen flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center">
      <UserForm :user="userData" @submit="onSubmit" @cancel="router.push('/')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserService } from '~/apiClient';

const router = useRouter();
const userData = ref(null);
const { params } = useRoute();

onMounted(() => {
  loadData();
});

async function loadData () {
  userData.value = await UserService.getApiUsersGet(params.id);
}
async function onSubmit (values) {
  await UserService.patchApiUsersUpdate(params.id, values);
  router.push({ path: '/' });
}
</script>
