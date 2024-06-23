import { defineStore } from "pinia"
import axios from "axios"
export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    user: null,
    token: null,
  }),
})
