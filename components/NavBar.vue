<template>
  <div>
    <!-- navbar for phone -->
    <v-navigation-drawer color="#0c0d21" disable-resize-watcher v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in navItems" :key="item.name" :to="item.path">
          <v-list-item-content class="white--text">{{
            item.name
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <SocialBtn v-if="isMobileOrTablet" />
    </v-navigation-drawer>

    <!-- navbar for desktop -->
    <!-- :color="$vuetify.theme.isDark ? '#0c0d21' : 'rgba (42,44,62, 8%)'" -->

    <v-app-bar height="90px" :color="appBarColor" fixed flat>
      <v-app-bar-nav-icon class="d-md-none px-8" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <img class="mr-10" height="60px" src="logo.png" />

      <!-- link items -->
      <scrollactive active-class="nuxt-link-exact-active" :offset="100" :exact="true">
        <v-toolbar-items class="hidden-sm-only hidden-xs-only">
          <nuxt-link class="nav-item scrollactive-item" v-for="item in navItems" :key="item.name" :to="item.path">
            {{ item.name }}
          </nuxt-link>
        </v-toolbar-items>
      </scrollactive>
      <v-spacer></v-spacer>

      <!-- social media links -->
      <div class="social-container" v-if="!isMobileOrTablet">
        <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon>
          <img width="24px" height="24px" src="icons/telegram.svg" />
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-discord</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-reddit</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </div>
      <ThemeSwitch class="ml-9" />
    </v-app-bar>
  </div>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";
export default {
  name: "navBar",
  data() {
    return {
      appBarColor: 'transparent',
      drawer: false,
      navItems: [
        { name: "About Us", path: "#about-us" },
        { name: "Features", path: "#features" },
        { name: "How it Works", path: "#how-works" },
        { name: "Graphics", path: "#graphics" },
        { name: "Roadmap", path: "#roadmap" },
        { name: "Team", path: "#team" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      const { scrollY } = window.top
      if (scrollY > 100)
        this.appBarColor = this.$vuetify.theme.isDark ? '#0c0d21' : 'rgba (42,44,62, 8%)'
      else
        this.appBarColor = 'transparent'
    }
  },
  components: { ThemeSwitch },
};
</script>

<style scoped>
.v-app-bar {
  padding: 0 100px;
}

.nav-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #fff;
}

.theme--light .nav-item {
  color: #323232;
}

.social-container>>>button {
  color: #fff;
  width: 35px !important;
  height: 35px !important;
}

.theme--light .social-container button {
  color: #4f4f4f;
}

.theme--light .social-container img {
  filter: invert(0.7);
}

.nuxt-link-exact-active,
.v-list-item--active {
  color: #33b6e8 !important;
}

@media (max-width: 1100px) {}

@media (max-width: 1264px) {
  .v-app-bar {
    padding: 0 0;
  }
}
</style>
