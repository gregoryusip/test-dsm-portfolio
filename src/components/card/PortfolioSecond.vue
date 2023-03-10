<template>
  <router-link :to="`/portfolio/${item.id}`" class="card-portfolio">
    <div class="card-portfolio__icon">
      <img :src="`/img/icon/icon-model-1.png`" alt="Projects Image" />
    </div>
    <h6 class="card-portfolio__title">
      {{ item.title }}
    </h6>
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
    </div>
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
