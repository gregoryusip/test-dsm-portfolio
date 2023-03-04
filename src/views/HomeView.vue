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
              DSM is a model that can provide problem-solving or decision
              support used by organizations, individuals, companies, and others
              to get maximum decisions.
            </p>
          </div>
          <div class="home--landing__container">
            <img
              src="@/assets/img/static/home/landing-2.png"
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
export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      portfolios: [
        {
          id: '1',
          img: ['portfolio-1.png'],
          title:
            'Decision Support Model Based on Fuzzy Logic To Determine Employee Salary',
          author: 'Gregoryus Imannuel Perdana',
          date: '26 December, 2022',
          tag: 'Multistage Fuzzy Logic',
        },
        {
          id: '2',
          img: ['portfolio-2.png'],
          title:
            'Decision Support Model Based on Fuzzy Logic To Determine Employee Salary',
          author: 'Muhammad Donny devanda',
          date: '22 December, 2022',
          tag: 'Multistage Fuzzy Logic',
        },
        {
          id: '3',
          img: ['portfolio-3.png'],
          title:
            'Decision Support Model Based on Fuzzy Logic To Determine Employee Salary',
          author: 'Rizky Martin',
          date: '25 December, 2022',
          tag: 'Fuzzy Guzzy',
        },
        {
          id: '4',
          img: ['portfolio-4.png'],
          title: 'Decision Support Model for Determine Green City in Indonesia',
          author: "Joshua La'la",
          date: '25 December, 2022',
          tag: 'Fuzzy AHP',
        },
      ],
    };
  },
};
</script>
