<template>
  <router-link :to="`/portfolio/${item.id}`" class="card-portfolio">
    <!-- <nuxt-link :to="`/blogs/${item.id}`"> -->
    <div class="card-portfolio__img">
      <!-- <div class="slider-container">
        <swiper
          v-if="item.img.length > 0"
          :loop="true"
          :navigation="settingsImgSlider.navigation"
          :breakpoints="settingsImgSlider.breakpoints"
          :autoplay="settingsImgSlider.autoplay"
          class="slider-container--wrapper"
        >
          <swiper-slide v-for="(img, i) in item.img" :key="`Portfolio-${i}`">
            <img
              :src="require(`@/assets/img/static/portfolio/${img}`)"
              alt="Projects"
            />
          </swiper-slide>
          <template #container-end>
            <div class="swiper-pagination"></div>
          </template>
        </swiper>
      </div> -->
      <img
        :src="`/img/static/portfolio/${item.thumbnail_img}`"
        alt="Projects Image" />
      <div class="card-portfolio__img--tag">
        <p>{{ item.tag }}</p>
      </div>
    </div>
    <h3 class="card-portfolio__title">
      {{ item.title }}
    </h3>
    <p class="card-portfolio__author">
      By: <span>{{ authors }}</span>
    </p>
    <div class="card-portfolio__button">
      <router-link
        :to="`/portfolio/${item.id}`"
        class="card-portfolio__button--wrapper">
        <p class="card-portfolio__button--wrapper__text">Detail</p>
        <svg
          class="card-portfolio__button--wrapper__icon"
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
      </router-link>
      <!-- <a
        :href="`${item.dashboardLink}`"
        target="__blank"
        class="card-portfolio__button--wrapper">
        <p class="card-portfolio__button--wrapper__text">Dashboard</p>
        <svg
          class="card-portfolio__button--wrapper__icon"
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
      </a> -->
    </div>
    <!-- </nuxt-link> -->
  </router-link>
</template>

<script>
// import { Navigation, Pagination, Autoplay } from "swiper";
// import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
// import "swiper/swiper-bundle.css";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

export default {
  name: 'CardArticles',
  props: {
    item: Object,
  },
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  data() {
    return {
      settingsImgSlider: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
        autoplay: {
          delay: 2500,
        },
      },
    };
  },
  computed: {
    authors() {
      if (this.item) {
        let author = this.item.authors.map((res) => res.name);
        let supervisor = this.item.supervisors.map((res) => res.name);

        let merge = author.concat(supervisor).join('; ');

        return merge;
      }
    },
  },
};
</script>

<style>
.swiper-pagination {
  position: absolute;
  bottom: 0;
  /* bottom: -150px; */
}
</style>
