// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
  ],
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
    routes: ['/', '/login', '/salaries'], // pre-generate static pages
  },
});
