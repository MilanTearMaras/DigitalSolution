// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBasePath: 'https://interview-test.digital.cz',
    },
  },
  generate: {
    routes: ['/', '/login', '/salary'], // pre-generate static pages
  },
});
