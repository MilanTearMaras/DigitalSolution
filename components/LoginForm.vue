<template>
  <Form ref="userForm" class="w-full max-w-lg" :validation-schema="schema" @submit="onSubmit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="frantanovak@email.cz"
        />
        <ErrorMessage name="email" class="text-red-500 text-xs italic" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label for="password" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Heslo</label>
        <Field
          id="password"
          type="password"
          name="password"
          placeholder="••••••••"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <ErrorMessage name="plainPassword" class="text-red-500 text-xs italic" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md bg-purple-500 border border-purple-500 text-white hover:shadow-lg hover:bg-purple-600"
            type="submit"
          >
            Přihlásit se
          </button>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from 'yup';

const emit = defineEmits(['submit']);
const schema = Yup.object({
  email: Yup.string().required('Toto pole je povinné').email('Toto pole musí být email'),
});

function onSubmit (values) {
  emit('submit', values);
}
</script>
