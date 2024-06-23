<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { computed, ref, onMounted, watch } from "vue"
import { useStore } from "../stores/counter"

const store = useStore()
const theme = computed(() => store.theme)
const changeTheme = () => {
  store.changeTheme(theme.value === "black" ? "white" : "black")
}
</script>

<template>
  <h1 :class="`bg-${theme} `">Home page</h1>
  <Button @click="changeTheme" variant="secondary">Change the theme</Button>
</template>
