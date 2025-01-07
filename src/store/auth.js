// store.js (Pinia例)
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false, // ログイン状態
    isRegistered: false, // 登録状態
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
    register() {
      this.isRegistered = true;
    },
  },
});
