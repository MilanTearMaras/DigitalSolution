<template>
  <div class="h-screen flex justify-center items-center">
    <div class="inline-block bg-white p-10 rounded-lg text-center">
      <LoginForm @submit="onSubmit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { setPageTitle } from 'assets/ts/utils';
import LoginForm from '~/components/LoginForm.vue';
import { useAuthStore } from '~/store/auth';

setPageTitle('Login');
const router = useRouter();
const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

async function onSubmit (values) {
  await authenticateUser(values);
  if (authenticated) {
    router.push({ path: '/salary' });
  }
}
</script>
