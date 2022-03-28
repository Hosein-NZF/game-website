<template>
  <v-container>
    <div class="out-partners-container">
      <h2 class="head-text">Our Backers & Partners</h2>

      <v-carousel hide-delimiters show-arrows-on-hover cycle height="auto">
        <v-carousel-item v-for="(chunk, i) in cunkedImsSlider" :key="i">
          <div class="d-flex justify-center">
            <img
              class="partner-logo mx-sm-6"
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
        { src: "partners/1.png", alt: "Lorem" },
        { src: "partners/1.png", alt: "Lorem" },
        { src: "partners/1.png", alt: "Lorem" },
        { src: "partners/1.png", alt: "Lorem" },
        { src: "partners/1.png", alt: "Lorem" },
        { src: "partners/1.png", alt: "Lorem" },
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
.out-partners-container{
  margin-top: 40px;
}
.partner-logo {
  width: 100px;
  height: 100px;
}
</style>
