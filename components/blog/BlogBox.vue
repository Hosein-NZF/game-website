<template>
  <div
    class="blog-container"
    data-aos="fade-up"
    data-aos-anchor-placement="center-center"
    data-aos-offset="-350"
  >
    <v-row>
      <v-col cols="8" md="3" offset="2" offset-md="0">
        <v-img
          :src="blogData.img"
          class="rounded-xl"
          width="100%"
          aspect-ratio="1"
        />
      </v-col>

      <v-col
        class="d-flex flex-column justify-center"
        cols="8"
        md="4"
        offset="2"
        offset-md="0"
      >
        <span class="blog-box__date" v-text="blogData.date" />
        <h3 class="pb-md-6 blog-box__title" v-text="blogData.title" />
      </v-col>

      <v-col class="d-flex" cols="8" md="4" offset="2" offset-md="0">
        <p class="align-self-center blog-box__desc" v-text="blogData.desc" />
      </v-col>

      <v-col
        class="d-flex align-center justify-end justify-md-end pt-0 pt-md-3"
        cols="8"
        md="1"
        offset="2"
        offset-md="0"
      >
        <img
          class="blog-arrow cursor-pointer"
          src="/icons/circle-arrow.svg"
          width="50px"
          height="50px"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BlogBox",
  props: ["blogData"],
};
</script>

<style scoped>
.blog-box__date {
  font-size: 12px;
}

.blog-box__title {
  font-size: 25px;
}
.blog-box__desc {
  color: #a0a0a0;
}

@media (max-width: 900px) {
  .blog-box__title {
    font-size: 28px;
  }
}
</style>
