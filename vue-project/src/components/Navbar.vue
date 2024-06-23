<script setup>
import { computed, ref, watch } from "vue"
import { useStore } from "../stores/counter"

const store = useStore()
const theme = computed(() => store.theme)
const localTheme = ref(theme.value)
const changeTheme = () => {
  localTheme.value = localTheme.value === "dark" ? "light" : "dark"
  store.changeTheme(theme.value === "dark" ? "light" : "dark")
}
</script>

<template>
  <nav
    class="p-2 flex justify-between items-center bg-gray-800 text-white shadow-md"
  >
    <ul class="flex space-x-4">
      <li>
        <router-link
          to="/"
          class="hover:text-gray-300 transition-colors duration-300"
          >Home</router-link
        >
      </li>
    </ul>
    <ul class="flex space-x-4">
      <button
        @click="changeTheme"
        class="mt-4 p-2 bg-blue-500 text-white rounded flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors duration-300"
      >
        <transition name="fade">
          <i v-if="localTheme == 'dark'" class="fas fa-sun"></i>
          <i v-else class="fas fa-moon"></i>
        </transition>
      </button>
      <li
        class="border-2 border-gray-300 rounded-xl p-1 hover:bg-gray-700 transition-colors duration-300"
      >
        <router-link
          to="/auth"
          class="hover:text-gray-300 transition-colors duration-300"
          >Login</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

nav {
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
