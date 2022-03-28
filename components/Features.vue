<template>
  <v-container id="features">
    <div class="features">
      <h2 class="head-text">Features</h2>
      <div class="features__boxs">
        <div
          v-for="(item, index) in featuresItems"
          :key="index"
          :class="`box_${index}`"
        >
          <div class="info-box">
            <h3 v-text="item.title" />
            <p v-text="item.description" />
          </div>
          <img class="box__img" :src="item.img" />
          <div class="light" :style="{ background: item.color }" />
          <div class="glass"></div>
          <div class="back_glass" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Features",
  data() {
    return {
      featuresItems: [
        {
          img: "/icons/features/support.svg",
          title: "Support",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(108, 84, 255, 0.35)",
        },
        {
          img: "/icons/features/system.svg",
          title: "System",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(252, 84, 255, 0.35)",
        },
        {
          img: "/icons/features/smooth.svg",
          title: "Smooth and Intuitive",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(84, 224, 255, 0.35)",
        },
        {
          img: "/icons/features/cross.svg",
          title: "Cross Platform",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(84, 193, 255, 0.35)",
        },
        {
          img: "/icons/features/tools.svg",
          title: "Tools",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(255, 84, 166, 0.35)",
        },
        {
          img: "/icons/features/stack.svg",
          title: "Stack",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(255, 187, 84, 0.35)",
        },
        {
          img: "/icons/features/vote.svg",
          title: "Vote",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo",
          color: "rgba(87, 255, 84, 0.35)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.features__boxs {
  position: relative;
  height: 700px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
div[class^="box"] {
  position: absolute;
  width: 330px;
  height: 200px;
  border-radius: 30px;
}
.glass,
.back_glass {
  position: absolute;
  background: rgba(131, 131, 150, 0.08);
  /* Note: backdrop-filter has minimal browser support */
  width: 100%;
  border-radius: 30px;
}
.glass {
  backdrop-filter: blur(48px);
  height: 100%;
  z-index: 1;
}
.back_glass {
  backdrop-filter: blur(28px);
  height: 80%;
}
.box_0 {
  top: 65px;
  left: 0;
}
.box_1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.box_2 {
  top: 65px;
  right: 0;
}
.box_3 {
  top: 350px;
  left: 0;
}
.box_4 {
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
}
.box_5 {
  top: 350px;
  right: 0;
}
.box_6 {
  top: 500px;
  left: 50%;
  transform: translateX(-50%);
}
.box__img {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%) !important;
  width: 65px;
  height: 65px;
  object-fit: contain;
  z-index: 2;
}
.light {
  position: absolute;
  width: 160px;
  height: 110px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  filter: blur(70px);
  z-index: 5;
  border-radius: 100%;
}
.info-box {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding-top: 55px;
}
.info-box > * {
  text-align: center;
}
.info-box p {
  margin-top: 10px;
  padding: 0 4em;
  color: #a0a0a0;
}

@media (max-width: 1264px) {
  .features__boxs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: auto;
  }
  div[class^="box"] {
    position: relative;
    right: unset;
    left: unset;
    top: unset;
    transform: unset;
    margin-bottom: 50px;
  }
}
</style>
