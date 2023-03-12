<template>
  <router-link :to="`/portfolio/${item.id}`" class="card-portfoliolist">
    <div class="card-portfoliolist__icon">
      <img :src="`/img/icon/icon-model-1.png`" alt="Projects Image" />
    </div>
    <h6 class="card-portfoliolist__title">
      {{ item.title }}
    </h6>
  </router-link>
</template>

<script>
export default {
  name: 'CardPortfolioList',
  props: {
    item: Object,
  },
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
