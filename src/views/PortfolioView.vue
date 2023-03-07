<script setup>
import CardPortfolio from '../components/card/Portfolio.vue';
</script>

<template>
  <main>
    <div class="portfolio">
      <!-- PORTFOLIO -->
      <div class="site-container pb-20 lg:pb-36">
        <div class="home--portfolio">
          <h1 class="home--portfolio__title">Our Portfolio</h1>
          <p class="home--portfolio__subtitle">
            Checkout our latest portfolio of Decision Support Model
          </p>

          <div class="home--portfolio__container">
            <div
              v-for="(item, i) in portfolios"
              :key="`portfolio-${i}`"
              class="home--portfolio__container--wrapper">
              <CardPortfolio :item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import json from '@/json/data.json';
export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolios: json,
    };
  },
};
</script>

<style></style>
