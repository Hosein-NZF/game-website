<template>
  <v-footer class="justify-center" color="#4056A0">
    <span
      >Made with <v-icon class="heart-icon" color="red">mdi-heart</v-icon> by
      <a class="my-github" href="https://github.com/Hosein-NZF" target="_blank">HoseinNz</a></span
    >
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.copyright-text {
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  padding: 3px 0;
}
.my-github{
  color: inherit;
  text-decoration: underline !important;
  padding-bottom:2px;
  text-underline-offset: 2px;
}

@keyframes heart-anim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
}
.heart-icon {
  animation: heart-anim 1s linear infinite;
}
</style>
