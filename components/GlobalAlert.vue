<template>
  <div v-if="isActive" class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 absolute top-3 right-3" role="alert">
    <InformationCircleIcon class="w-5 h-5 inline-block" />
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 3,
  },
});
const isActive = ref(false);

function activateAlert () {
  isActive.value = true;
  setInterval(() => {
    isActive.value = false;
  }, props.duration * 1000);
}

defineExpose({ activateAlert });
</script>
