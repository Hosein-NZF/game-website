import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.mixin({
  mounted() {
    AOS.init({});
  },
});
