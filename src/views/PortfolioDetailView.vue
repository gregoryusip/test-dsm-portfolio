<script setup></script>

<template>
  <main>
    <div class="portfolio-detail">
      <!-- PORTFOLIO -->
      <div class="site-container pb-20 lg:pb-36">
        <router-link :to="`/portfolio`" class="button-back">
          <img
            src="/img/icon/arrow-right.svg"
            alt="Arrow Right Icon"
            class="button-back--icon" />
          <p class="button-back--text">Back to List of Portfolio</p>
        </router-link>
        <div class="portfolio-detail--model">
          <div class="portfolio-detail--model__left">
            <h1 class="portfolio-detail--model__left--title">
              {{ portfolioDetail.title }}
            </h1>
            <img
              :src="`/img/static/portfolio/${portfolioDetail.thumbnail_img}`"
              alt="Portfolio Image"
              class="portfolio-detail--model__left--thumbnail" />
            <p class="portfolio-detail--model__left--description">
              {{ portfolioDetail.description }}
            </p>
            <div class="portfolio-detail--portfolio">
              <div class="portfolio-detail--portfolio__demo">
                <div class="card-detail--portfolio">
                  <img
                    :src="`/img/static/portfolio/${portfolioDetail.demo_img}`"
                    alt="Demo Image"
                    class="card-detail--portfolio__img" />
                  <a
                    :href="portfolioDetail.demoLink"
                    target="__blank"
                    class="card-detail--portfolio__button">
                    <p class="card-detail--portfolio__button__text">Model</p>
                    <svg
                      class="card-detail--portfolio__button__icon"
                      width="19"
                      height="17"
                      fill="none"
                      viewBox="0 0 19 17"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="portfolio-detail--portfolio__demo">
                <div class="card-detail--portfolio">
                  <img
                    :src="`/img/static/portfolio/${portfolioDetail.dashboard_img}`"
                    alt="Demo Image"
                    class="card-detail--portfolio__img" />
                  <a
                    :href="portfolioDetail.dashboardLink"
                    target="__blank"
                    class="card-detail--portfolio__button">
                    <p class="card-detail--portfolio__button__text">
                      Dashboard
                    </p>
                    <svg
                      class="card-detail--portfolio__button__icon"
                      width="19"
                      height="17"
                      fill="none"
                      viewBox="0 0 19 17"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="portfolio-detail--model__left--flow">
              <h2 class="portfolio-detail--model__left--flow__title">
                Flow Chart Diagram
              </h2>
              <img
                :src="`/img/static/portfolio/${portfolioDetail.flowchart_img}`"
                alt="Flow Chart Diagram"
                class="portfolio-detail--model__left--flow__img" />
            </div>

            <div class="portfolio-detail--model__left--author">
              <h3 class="portfolio-detail--model__left--author__creator">
                CREATOR
              </h3>
              <div
                v-for="(author, i) in portfolioDetail.authors"
                :key="`author-${i}`"
                class="portfolio-detail--model__left--author__item">
                <img
                  :src="`/img/static/author/${author.image}`"
                  alt="Author Image"
                  class="portfolio-detail--model__left--author__item--img" />
                <div
                  class="portfolio-detail--model__left--author__item--information">
                  <h5 class="mb-2">{{ author.name }}</h5>
                  <p>
                    {{ author.biography }}
                  </p>
                </div>
              </div>
              <h3 class="portfolio-detail--model__left--author__creator">
                SUPERVISOR
              </h3>
              <div
                v-for="(supervisor, i) in portfolioDetail.supervisors"
                :key="`author-${i}`"
                class="portfolio-detail--model__left--author__item">
                <img
                  :src="`/img/static/author/${supervisor.image}`"
                  alt="Author Image"
                  class="portfolio-detail--model__left--author__item--img" />
                <div
                  class="portfolio-detail--model__left--author__item--information">
                  <h5 class="mb-2">{{ supervisor.name }}</h5>
                  <p>
                    {{ supervisor.biography }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-detail--model__right">
            <div class="portfolio-detail--model__right--others">
              <h3>Other Portfolios</h3>
              <div class="portfolio-detail--model__right--others__wrapper">
                <div
                  v-for="(other, i) in otherPortfolio"
                  :key="`other-${i}`"
                  class="card-other--portfolio">
                  <router-link :to="`/portfolio/${other.id}`">
                    <h6 class="card-other--portfolio__title">
                      {{ other.title }}
                    </h6>
                    <p class="card-other--portfolio__date">{{ other.date }}</p>
                  </router-link>
                </div>
              </div>
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
  computed: {
    portfolioDetail() {
      let id = this.$route.params.id;

      if (id) {
        return this.portfolios.find((res) => res.id === id);
      }
    },
    otherPortfolio() {
      if (this.portfolioDetail) {
        let arr = this.portfolios.filter(
          (res) => res.id !== this.portfolioDetail.id
        );

        if (arr.length > 3) {
          let others = [];
          for (let index = 0; index < 3; index++) {
            const i = Math.floor(Math.random() * arr.length);
            const element = arr[i];
            others.push(element);
            arr.splice(i, 1);
          }
          return others;
        } else {
          return arr;
        }
      }
    },
  },
};
</script>

<style></style>
