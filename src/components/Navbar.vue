<template>
  <div
    class="navbar transition-all duration-300"
    :class="{ 'shadow-md': isScroll }">
    <div class="site-container navbar-wrapper">
      <router-link to="/src" class="navbar-wrapper--left">
        <img src="/img/logo/binus-logo.png" alt="Logo" class="navbar-logo" />
        <img src="/img/logo/rig.png" alt="Logo" class="navbar-logo mt-2" />
      </router-link>

      <!-- DESKTOP NAVBAR RIGHT -->
      <div class="navbar-wrapper--right">
        <div class="navbar-wrapper--right__container">
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

      <!-- MOBILE NAVBAR RIGHT -->
      <div class="navbar-wrapper--right-mobile">
        <button
          class="burger-container"
          :class="{
            'text-black': !isBurgerMenuDown,
            'text-white': isBurgerMenuDown,
          }"
          @click="isBurgerMenuDown = !isBurgerMenuDown">
          <div class="burger-container--wrapper">
            <span
              aria-hidden="true"
              class="burger-container--wrapper__span"
              :class="{
                'rotate-45': isBurgerMenuDown,
                ' -translate-y-1.5': !isBurgerMenuDown,
              }"></span>
            <span
              aria-hidden="true"
              class="burger-container--wrapper__span"
              :class="{ 'opacity-0': isBurgerMenuDown }"></span>
            <span
              aria-hidden="true"
              class="burger-container--wrapper__span"
              :class="{
                '-rotate-45': isBurgerMenuDown,
                ' translate-y-1.5': !isBurgerMenuDown,
              }"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- BURGER MENU -->
    <div
      class="navbar-burger"
      :class="{
        'h-[100vh] opacity-100': isBurgerMenuDown,
        'h-0 opacity-0': !isBurgerMenuDown,
      }">
      <template v-for="(item, i) in navbarMenu" :key="`menu-${i}`">
        <router-link :to="item.link">
          <div class="navbar-burger--item">
            <p>{{ item.menu }}</p>
          </div>
        </router-link>
      </template>
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
      isScroll: false,
      isBurgerMenuDown: false,
    };
  },
  computed: {
    isScrolled() {
      return window.top.scrollY > 200;
    },
  },
  methods: {
    isActiveMenu(link) {
      let currUrl = this.$route.fullPath;

      if (currUrl === link) {
        return true;
      }
      return false;
    },
    handleScroll() {
      // Your scroll handling here
      // console.log(window.scrollY)
      if (window.scrollY > 85) {
        this.isScroll = true;
      } else if (window.scrollY == 0) {
        this.isScroll = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    $route(to, from) {
      this.isBurgerMenuDown = false;
    },
  },
};
</script>
