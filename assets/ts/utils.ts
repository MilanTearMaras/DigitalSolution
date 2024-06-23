import type { Ref } from 'vue';
import { useHead, useState } from '#imports';

export const setPageTitle = (title : string) => {
  const pageTitle : Ref<string> = useState('pageTitle', () => title);
  pageTitle.value = title;
  useHead({ title });
};
