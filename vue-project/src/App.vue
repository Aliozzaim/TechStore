<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { computed, watchEffect } from "vue"
import { useStore } from "./stores/counter"

const store = useStore()
const theme = computed(() => store.theme)
const changeTheme = () => {
  store.changeTheme(theme.value === "dark" ? "light" : "dark")
  console.log("Theme changed to", theme.value)
}

watchEffect(() => {
  document.body.className = `theme-${store.theme}`
})
</script>

<template>
  <div :class="`theme-${theme}`">
    <RouterView />
    <button @click="changeTheme">Change the theme</button>
  </div>
</template>

<style>
/* :root {
  --bg-color-light: #ffffff; 
  --font-color-light: #000000; 
  --bg-color-dark: #000000; 
  --font-color-dark: #ffffff; 
}

.theme-dark {
  background-color: var(--bg-color-dark);
  color: var(--font-color-dark);
}

.theme-light {
  background-color: var(--bg-color-light);
  color: var(--font-color-light);
} */

.theme-dark {
  background-color: black;
  color: white;
}

.theme-light {
  background-color: white;
  color: black;
}
</style>
