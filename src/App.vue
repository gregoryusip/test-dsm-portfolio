<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />

  <transition name="route" mode="out-in">
    <RouterView class="mt-28" />
  </transition>
</template>

<style>
.route-enter-active,
.route-leave-active {
  transition: opacity 1.5s;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
