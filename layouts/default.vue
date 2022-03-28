<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <NavBar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  components: { NavBar, Footer },
};
</script>

<style scoped></style>
