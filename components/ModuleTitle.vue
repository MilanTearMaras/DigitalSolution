<template>
  <span>
    {{ title }}
  </span>
</template>

<script setup>
import { useState } from '#imports';

const title = useState('pageTitle', () => '');
</script>

<style scoped>

</style>
