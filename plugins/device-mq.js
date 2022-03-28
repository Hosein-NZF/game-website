import Vue from "vue";

Vue.mixin({
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  computed: {
    isMobile() {
      return this.windowWidth < 600
    },
    isTablet() {
      return 960 > this.windowWidth && this.windowWidth > 600
    },
    isMobileOrTablet(){
      return 960 > this.windowWidth
    },
    isLaptop() {
      return 1264 > this.windowWidth && this.windowWidth > 960
    },
    isDesktop() {
      return 1904 > this.windowWidth && this.windowWidth > 1264
    },
    isDesktopOrLaptop() {
      return 1904 > this.windowWidth && this.windowWidth > 960
    },
    isDesktopOrLaptopOrExtera(){
      return this.windowWidth > 960
    }
  },
  methods: {
    myEventHandler() {
      this.windowWidth = window.innerWidth;
    },
  },
});
