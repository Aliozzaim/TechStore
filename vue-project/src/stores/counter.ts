import { defineStore } from "pinia"
import { computed } from "vue"

export const useStore = defineStore("Store", {
  state: () => ({
    count: 0,
    theme: "dark",
  }),
  getters: {
    doubleCount(state): number {
      return state.count * 2
    },
    themeColor(state): string {
      return state.theme === "dark" ? "black" : "white"
    },
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    changeTheme(newTheme: string) {
      this.theme = newTheme
    },
  },
})
