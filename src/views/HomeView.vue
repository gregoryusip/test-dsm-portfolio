<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import CardPortfolio from '../components/card/Portfolio.vue';
</script>

<template>
  <main>
    <div class="home">
      <!-- LANDING -->
      <div class="site-container py-10 lg:pb-36">
        <div class="home--landing">
          <div class="home--landing__container home--landing__left">
            <h1 class="home--landing__container--title">
              Decision Support Model
            </h1>
            <p class="home--landing__container--subtitle">
              A decision support model (DSM) is a type of computer-based model
              that is designed and constructed to assist individuals or groups
              in making complex decisions. It is a tool finally that helps
              people analyze data, evaluate options, and make informed choices.
              The goal of a DSM is to provide decision-makers with the
              information and tools they need to make better decisions. This can
              involve modelling data to identify patterns or trends, simulating
              the effects of different scenarios, and providing the media to see
              the suggested actionable decision.
            </p>
          </div>
          <div class="home--landing__container">
            <img
              src="/img/static/home/landing-2.png"
              alt="Image Landing"
              class="home--landing__container--img" />
          </div>
        </div>
      </div>
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
  name: 'IndexPage',
  data() {
    return {
      portfolios: json,
    };
  },
};
</script>
