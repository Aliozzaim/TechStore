<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { computed, watchEffect } from "vue"
import { useStore } from "./stores/counter"
import Navbar from "@/components/Navbar.vue"
const store = useStore()
const theme = computed(() => store.theme)
watchEffect(() => {
  document.body.className = `theme-${store.theme}`
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
.theme-dark {
  background-color: black;
  color: white;
}

.theme-light {
  background-color: white;
  color: black;
}
</style>
