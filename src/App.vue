<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />

  <transition name="route" mode="out-in">
    <RouterView class="mt-24 lg:mt-28 min-h-screen" />
  </transition>

  <Footer />
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
