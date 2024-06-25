<template>
  <div class="h-screen flex justify-center items-center relative">
    <div class="inline-block bg-white p-10 rounded-lg text-center">
      <UserForm :user="userData" @submit="onSubmit" @cancel="router.push('/')" />
    </div>
  </div>
  <GlobalAlert ref="alert" text="Uživatel byl editován." />
</template>

<script setup lang="ts">
import { UserService } from '~/apiClient';

const router = useRouter();
const userData = ref(null);
const { params } = useRoute();
const alert = ref(null);

onMounted(() => {
  loadData();
});

async function loadData () {
  userData.value = await UserService.getApiUsersGet(params.id);
}
async function onSubmit (values) {
  await UserService.patchApiUsersUpdate(params.id, values);
  alert.value.activateAlert();
}
</script>
