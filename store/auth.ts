import { defineStore } from 'pinia';
import { OpenAPI, TokenService } from '~/apiClient';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async authenticateUser (credentials) {
      const response = await TokenService.postApiAuthToken(credentials);

      if (response) {
        OpenAPI.TOKEN = response.token;
        this.authenticated = true;
      }
    },
  },
  persist: true,
});
