<template>
  <div class="moon-container">
    <img
      class="moon-img"
      src="/moon.svg"
      alt="moon"
      data-aos="fade-left"
      data-aos-delay="400"
    />
    <div class="moon-effect" />
    <div
      class="moon-light"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-offset="-300"
    />
    <div
      class="moon-dark-light3"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-offset="-300"
    />
    <div
      class="moon-dark-light"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-offset="-350"
    />
    <div
      class="moon-dark-light2"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-offset="-300"
    />
  </div>
</template>

<style scoped>
.moon-img {
  position: absolute;
  right: -150px;
  top: -16vw;
  width: 75vw;
  height: 75vw;
}
.moon-effect {
  position: absolute;
  right: 0;
  left: 0;
  top: 150px;
  bottom: -150px;
  background-image: url("/moon-effect.png");
  background-repeat: repeat;
  opacity: 0;
  z-index: 1;
  -webkit-box-shadow: 0px 20px 49px 12px rgba(12, 13, 33, 0.5);
  box-shadow: 0px 20px 49px 12px rgba(12, 13, 33, 0.5);
}
.theme--light .moon-effect {
  -webkit-box-shadow: unset;
  box-shadow: unset;
  opacity: 0.1;
}
.moon-light,
.moon-dark-light3,
.moon-dark-light,
.moon-dark-light2 {
  position: absolute;
  width: 250px;
  height: 250px;
  opacity: 0.7;
  filter: blur(136px);
  border-radius: 50%;
}
.moon-dark-light {
  left: 42%;
  top: 513px;
  background: #311f9b;
}
.moon-dark-light2 {
  top: 500px;
  right: 50px;
  background: #311f9b;
}
.moon-light {
  left: 239px;
  top: 432px;
  background: #39838d;
}
.moon-dark-light3 {
  left: 339px;
  top: 331px;
  background: #311f9b;
}
</style>
