<template>
  <div id="graphics">
    <h2 class="head-text">Graphics</h2>

    <div class="img-box">
      <img class="img-items" src="graphics-item.svg" />
    </div>
  </div>
</template>

<script>
import Rectangle from "./Rectangle.vue";
import Linee from "./Linee.vue";

export default {
  components: {
    Rectangle,
    Linee,
  },
};
</script>

<style scoped>
.img-box {
  position: relative;
  max-width: 1000px;
  height: 600px;
  background-image: url("@/assets/images/graphics.png");
  background-size: contain;
  margin: 0 auto;
  background-position: center top;
}
.img-items {
  position: absolute;
  width: 68%;
  top: -29px;
  left: 53%;
  transform: translateX(-50%);
}
.rect-1 {
  position: absolute;
  top: 172px;
  left: 5%;
}
.line-1 {
  position: absolute;
  top: 202px;
  left: 19.4%;
}
.rect-2 {
  position: absolute;
  top: 80px;
  left: 21%;
}
.line-2 {
  position: absolute;
  top: 120px;
  left: 37.69%;
}
.rect-3 {
  position: absolute;
  top: 21px;
  left: 42%;
}
.line-3 {
  position: absolute;
  top: 107px;
  left: 54%;
}
.rect-4 {
  position: absolute;
  top: 40px;
  left: 60%;
}
.line-4 {
  position: absolute;
  top: 107px;
  left: 62%;
}
.rect-5 {
  position: absolute;
  top: 190px;
  left: 64%;
}
.line-5 {
  position: absolute;
  top: 300px;
  left: 64%;
}
.rect-6 {
  position: absolute;
  top: 290px;
  left: 80%;
}
.line-6 {
  position: absolute;
  top: 290px;
  left: 20%;
}
.rect-7 {
  position: absolute;
  top: 200px;
  left: 80%;
}
.line-7 {
  position: absolute;
  top: 300px;
  left: 69%;
}
.rect-8 {
  position: absolute;
  top: 400px;
  left: 65%;
}
.line-8 {
  position: absolute;
  top: 400px;
  left: 56.8%;
}
.rect-9 {
  position: absolute;
  top: 350px;
  left: 10%;
}
.line-9 {
  position: absolute;
  top: 350px;
  left: 27.8%;
}

@media (max-width: 1000px) {
  .img-box {
    height: 400px;
  }
  .img-items {
    top: -28px;
  }
}

@media (max-width: 800px) {
  .img-items {
    top: -20px;
  }
}

@media (max-width: 600px) {
  .img-box {
    height: 300px;
  }
  .img-items {
    top: -15px;
  }
}
</style>
