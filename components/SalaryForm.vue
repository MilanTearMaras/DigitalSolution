<template>
  <Form ref="salaryForm" class="w-full max-w-lg" :validation-schema="schema" :initial-values="formValues" @submit="onSubmit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label for="money" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Částka</label>
        <Field
          id="money"
          name="money"
          type="number"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <ErrorMessage name="money" class="text-red-500 text-xs italic" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <label for="year" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Rok</label>
        <Field
          id="year"
          type="number"
          name="year"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <ErrorMessage name="year" class="text-red-500 text-xs italic" />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label for="month" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Měsíc</label>
        <Field
          id="month"
          type="text"
          name="month"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <ErrorMessage name="month" class="text-red-500 text-xs italic" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <div class="p-3 mt-2 text-center space-x-4 md:block">
          <button
            class="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider rounded-md"
            :class="{'bg-purple-500 border border-purple-500 text-white hover:shadow-lg hover:bg-purple-600': props.salary, 'bg-white border text-gray-600 hover:shadow-lg hover:bg-gray-100': !props.salary}"
            type="submit"
          >
            {{ props.salary ? 'Uložit' : 'Vytvořit' }}
          </button>
          <button
            v-if="!props.salary"
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
  salary: {
    type: Object,
    default: () => {},
  },
});
const salaryForm = ref(null);
const emit = defineEmits(['submit', 'cancel']);
const schema = Yup.object({
  money: Yup.string().required('Toto pole je povinné'),
  year: Yup.string().required('Toto pole je povinné'),
  month: Yup.string().required('Toto pole je povinné'),
});
const formValues = ref({
  money: '',
  year: '',
  month: '',
});

watch(() => props.salary, (newVal) => {
  salaryForm.value.setValues({
    money: newVal.money,
    year: newVal.year,
    month: newVal.month,
  });
});

function onSubmit (values) {
  emit('submit', values);
}
</script>
