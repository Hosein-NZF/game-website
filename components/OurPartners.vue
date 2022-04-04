<template>
  <v-container>
    <div class="out-partners-container">
      <h2 class="head-text">Our Backers & Partners</h2>

      <v-carousel hide-delimiters show-arrows-on-hover cycle height="auto">
        <v-carousel-item v-for="(chunk, i) in cunkedImsSlider" :key="i">
          <div class="d-flex justify-center">
            <img
              class="partner-logo mx-2 mx-sm-6"
              :src="item.src"
              :alt="item.alt"
              v-for="(item, index) in chunk"
              :key="index"
            />
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "OurBackerAndPartners",
  data() {
    return {
      imgsSlider: [
        { src: "partners/facebook.png", alt: "Lorem" },
        { src: "partners/insta.png", alt: "Lorem" },
        { src: "partners/nasa.png", alt: "Lorem" },
        { src: "partners/twitter.png", alt: "Lorem" },
        { src: "partners/random-1.png", alt: "Lorem" },
        { src: "partners/random-2.png", alt: "Lorem" },
        { src: "partners/random-3.png", alt: "Lorem" },
        { src: "partners/random-4.png", alt: "Lorem" },
        { src: "partners/random-5.png", alt: "Lorem" },
        { src: "partners/random-6.png", alt: "Lorem" },
      ],
    };
  },
  computed: {
    cunkedImsSlider() {
      let len = this.isMobile ? 3 : 5;

      let chunks = [],
        i = 0,
        n = this.imgsSlider.length;

      while (i < n) {
        chunks.push(this.imgsSlider.slice(i, (i += len)));
      }

      return chunks;
    },
  },
};
</script>

<style scoped>
.out-partners-container {
  margin-top: 40px;
}
.partner-logo {
  width: 90px;
  height: 90px;
  object-fit: cover;
}

@media (max-width: 600px) {
  .partner-logo {
    width: 70px;
    height: 70px;
  }
}
</style>
