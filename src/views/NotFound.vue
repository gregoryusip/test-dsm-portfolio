<script setup></script>

<template>
  <main>
    <div class="home">
      <img
        src="/img/static/home/notfound.png"
        alt="Not Found Image"
        class="w-[40%] mx-auto" />
    </div>
  </main>
</template>

<script>
import json from '@/json/data.json';
export default {
  name: 'IndexPage',
  data() {
    return {
      portfolios: json,
    };
  },
};
</script>
