<template>
  <v-container>
    <div class="tier-structure">
      <h2 class="head-text">Tier Structure</h2>

      <div class="box-container">
        <div
          class="box"
          v-for="(item, index) in structureItems"
          :key="index"
          data-aos="fade-up"
        >
          <div class="box__info" :style="{ color: item.txtColor }">
            <p v-text="item.level" />
            <h3 v-text="item.name" />
            <div class="d-flex flex-column">
              <small>REQUIREMENT</small>
              <strong v-text="item.requirement" />
            </div>
            <div class="d-flex flex-column">
              <small>WEIGHT</small>
              <strong v-text="item.weight" />
            </div>
          </div>
          <div class="glass" />
          <div class="light" :style="{ background: item.color }" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Structure",
  data() {
    return {
      structureItems: [
        {
          level: "Tier 01",
          name: "Ceres",
          requirement: "1 USD",
          weight: "1x",
          color: "rgba(87, 255, 84, 0.35)",
          txtColor: "#57FF54",
        },
        {
          level: "Tier 03",
          name: "Kepler",
          requirement: "2 USD",
          weight: "2x",
          color: "rgba(238, 72, 243, 0.35)",
          txtColor: "#EE48F3",
        },
        {
          level: "Tier 05",
          name: "Aquilla",
          requirement: "3 USD",
          weight: "3x",
          color: "rgba(255, 78, 54, 0.35)",
          txtColor: "#FF4E36",
        },
        {
          level: "Tier 04",
          name: "Starfish",
          requirement: "5 USD",
          weight: "5x",
          color: "rgba(174, 71, 255, 0.35)",
          txtColor: "#AE47FF",
        },
        {
          level: "Tier 02",
          name: "Titan",
          requirement: "10 USD",
          weight: "12x",
          color: "rgba(55, 139, 237, 0.35)",
          txtColor: "#378BED",
        },
      ],
    };
  },
};
</script>

<style scoped>
.tier-structure {
  margin-top: 4em;
}
.box-container {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}
.box {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  text-align: center;
  border-radius: 30px;
}
.box__info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.box__info > * {
  z-index: 4;
}
.box__info p {
  letter-spacing: 0.2em;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0;
}
.box__info h3 {
  font-size: 40px;
  color: #fff;
}
.theme--light .box__info h3 {
  color: rgb(43, 43, 43);
}
.box__info strong {
  font-size: 20px;
}
.box__info small {
  color: #a0a0a0;
}
.glass {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
  top: 0;
  z-index: 2;
}
.theme--light .glass {
  background: rgba(243, 243, 243, 0.658);
}
.light {
  position: absolute;
  top: -30px;
  left: -80px;
  width: 200px;
  height: 120px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
}
.box:nth-child(2),
.box:nth-child(4) {
  margin-top: 50px;
}
.box:nth-child(3) {
  margin-top: 80px;
}
@media (max-width: 1264px) {
  .box-container {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box {
    margin-top: 0 !important;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
