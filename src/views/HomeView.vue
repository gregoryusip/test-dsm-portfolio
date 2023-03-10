<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import CardPortfolio from '../components/card/Portfolio.vue';
import CardPortfolioSecond from '../components/card/PortfolioSecond.vue';
</script>

<template>
  <main>
    <div class="home">
      <!-- LANDING -->
      <div class="site-container pt-10 pb-20 lg:pt-0 lg:pb-36">
        <div class="home--landing">
          <div class="home--landing__container home--landing__left">
            <h1 class="home--landing__container--title">
              Decision Support Model
            </h1>
            <p class="home--landing__container--subtitle">
              A decision support model (DSM) is a type of computer-based model
              that is designed and constructed to assist individuals or groups
              in making complex decisions.
            </p>

            <div class="home--landing__container--button">
              <div
                class="button button-regular"
                @click="goToSection('section-portfolio')">
                <p>PORTFOLIO</p>
              </div>
              <div class="button button-no-bg">
                <router-link to="/about">READ MORE</router-link>
              </div>
            </div>
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
      <div id="section-portfolio" class="site-container pb-20 lg:pb-36">
        <div class="home--portfolio">
          <h1 class="home--portfolio__title">Our Portfolio</h1>
          <p class="home--portfolio__subtitle">
            Checkout our latest portfolio of Decision Support Model
          </p>

          <!-- <div class="home--portfolio__container">
            <div
              v-for="(item, i) in portfolios"
              :key="`portfolio-${i}`"
              class="home--portfolio__container--wrapper">
              <CardPortfolio :item="item" />
            </div>
          </div> -->

          <!-- CONTOH -->
          <div class="home--portfolio__container mt-10">
            <div
              v-for="(item, i) in portfolios"
              :key="`portfolio-${i}`"
              class="home--portfolio__container--wrapper2">
              <CardPortfolioSecond :item="item" />
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
  methods: {
    goToSection(value) {
      const element = document.getElementById(value);
      var top = element.offsetTop - 112;
      console.log(top);
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
