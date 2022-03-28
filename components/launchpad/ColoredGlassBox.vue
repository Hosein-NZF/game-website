<template>
  <div class="colored-glass-box">
    <div class="box__info">
      <h3 v-text="title" />
      <p v-text="desc" />
    </div>
    <div class="glass" />
    <div class="light" :style="{ background: color }" />
  </div>
</template>

<script>
export default {
  name: "ColoredGlassBox",
  props: ["title", "desc", "color"],
};
</script>

<style scoped>
.colored-glass-box {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 30px;
}
.glass,
.light,
.box__info {
  position: absolute;
  width: 100%;
  height: 100%;
}
.box__info {
  height: auto;
  top: 75px;
  z-index: 3;
}
.box__info > * {
  padding: 0 30px;
}
.glass {
  top: 0;
  background: rgba(255, 255, 255, 0.08);
  z-index: 2;
}
.theme--light .glass {
  background: rgba(243, 243, 243, 0.35);
}
.light {
  top: -20px;
  left: 0;
  height: 100px;
  width: 200px;
  z-index: 1;
  filter: blur(70px);
  border-radius: 50%;
}

@media (min-width: 600px) and (max-width: 800px) {
  .box__info {
    top: 40px;
  }
}
</style>
