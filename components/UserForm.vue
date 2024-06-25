<template>
  <Form ref="userForm" class="w-full max-w-lg" :validation-schema="schema" :initial-values="formValues" @submit="onSubmit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <label for="name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Jméno</label>
        <Field
          id="name"
          type="text"
          name="name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Franta"
        />
        <ErrorMessage name="name" class="text-red-500 text-xs italic" />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="surname" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Příjmení</label>
        <Field
          id="surname"
          type="text"
          name="surname"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Novák"
        />
        <ErrorMessage name="surname" class="text-red-500 text-xs italic" />
      </div>
    </div>
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
        <label for="plainPassword" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Heslo</label>
        <Field
          id="plainPassword"
          type="password"
          name="plainPassword"
          placeholder="••••••••"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <ErrorMessage name="plainPassword" class="text-red-500 text-xs italic" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label for="note" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Poznámka</label>
        <Field
          id="note"
          type="text"
          name="note"
          placeholder="Poznámka..."
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <div class="flex items-center h-5">
          <Field
            id="active"
            v-slot="{ field }"
            :value="true"
            :unchecked-value="false"
            name="active"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          >
            <label for="active" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              <input type="checkbox" name="active" v-bind="field" :value="true">
              Aktivní
            </label>
          </Field>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md"
            :class="{'bg-purple-500 border border-purple-500 text-white hover:shadow-lg hover:bg-purple-600': props.user, 'bg-white border text-gray-600 hover:shadow-lg hover:bg-gray-100': !props.user}"
            type="submit"
          >
            {{ props.user ? 'Uložit' : 'Vytvořit' }}
          </button>
          <button
            v-if="!props.user"
            class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
            type="reset"
            @click="$emit('cancel')"
          >
            Zrušit
          </button>
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import * as Yup from 'yup';

const props = defineProps({
  user: {
    type: Object,
    default: () => {},
  },
});
const userForm = ref(null);
const emit = defineEmits(['submit', 'cancel']);
const schema = Yup.object({
  email: Yup.string().required('Toto pole je povinné').email('Toto pole musí být email'),
  name: Yup.string().required('Toto pole je povinné'),
  surname: Yup.string().required('Toto pole je povinné'),
  plainPassword: Yup.string().required('Toto pole je povinné').min(10, 'Heslo musí mít alespoň 10 znaků'),
});
const formValues = ref({
  email: '',
  name: '',
  surname: '',
  plainPassword: '',
  note: '',
  active: '',
});

watch(() => props.user, (newVal) => {
  userForm.value.setValues({
    email: newVal.email,
    name: newVal.name,
    surname: newVal.surname,
    plainPassword: newVal.plainPassword,
    note: newVal.note,
    active: newVal.active,
  });
});

function onSubmit (values) {
  emit('submit', values);
}
</script>
