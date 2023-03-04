<template>
  <div class="navbar">
    <div class="site-container flex flex-wrap items-center">
      <div class="w-1/2 lg:w-1/3">
        <router-link to="/">
          <img
            src="@/assets/img/logo/binus-logo.png"
            alt="Logo"
            class="w-[100px]" />
        </router-link>
      </div>
      <div class="w-2/3 hidden lg:block">
        <div class="w-full flex justify-end gap-x-7">
          <router-link :to="item.link" v-for="(item, i) in navbarMenu" :key="i">
            <p
              class="navbar--item__text"
              :class="{
                'navbar--item__text--active': isActiveMenu(item.link),
              }">
              {{ item.menu }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarMenu: [
        {
          menu: 'Home',
          link: '/',
        },
        {
          menu: 'About',
          link: '/about',
        },
        {
          menu: 'Portfolio',
          link: '/portfolio',
        },
      ],
    };
  },
  methods: {
    isActiveMenu(link) {
      let currUrl = this.$route.fullPath;

      if (currUrl === link) {
        return true;
      }
      return false;
    },
  },
};
</script>
