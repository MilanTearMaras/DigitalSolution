import { OpenAPI } from '~/apiClient';

export default defineNuxtPlugin((nuxtApp) => {
  OpenAPI.BASE = nuxtApp.$config.public.apiBasePath ?? OpenAPI.BASE;
  OpenAPI.TOKEN = undefined;
  return;
  console.log(nuxtApp);
});
