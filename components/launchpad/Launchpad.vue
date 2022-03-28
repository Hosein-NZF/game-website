<template>
  <v-container>
    <div class="lanchpad-container mt-15">
      <h2 class="head-text">Lorem Launchpad</h2>

      <v-row class="px-md-10">
        <v-col
          cols="12"
          sm="4"
          v-for="(item, index) in coloredBoxItems"
          :key="index"
        >
          <ColoredGlassBox
            :title="item.title"
            :desc="item.desc"
            :color="item.color"
          />
        </v-col>

        <v-col cols="12">
          <div class="large-box">
            <div>
              <small class="d-block text-center">Public Price</small>
              <p class="large-box__num text-center">$0.01</p>
            </div>
            <div>
              <small class="d-block text-center">Employes</small>
              <p class="large-box__num text-center">12</p>
            </div>
            <div>
              <small class="d-block text-center">City</small>
              <p class="large-box__num text-center">1</p>
            </div>
            <div>
              <small class="d-block text-center">Projects</small>
              <p class="large-box__num text-center">3</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ColoredGlassBox from "./ColoredGlassBox.vue";
export default {
  name: "Lanchpad",

  data() {
    return {
      coloredBoxItems: [
        {
          title: "Lorem",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam faucibus eget molestie ",
          color: "rgba(238, 72, 243, 0.35)",
        },
        {
          title: "Lorem",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam faucibus eget molestie ",
          color: "rgba(72, 243, 202, 0.35)",
        },
        {
          title: "Lorem",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam faucibus eget molestie ",
          color: "rgba(72, 181, 243, 0.35)",
        },
      ],
    };
  },
  components: { ColoredGlassBox },
};
</script>

<style scoped>
.large-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  padding: 2em 12em;
}
.theme--light .large-box {
  background: rgba(243, 243, 243, 0.35);
}
.large-box small {
  color: #54e0ff;
}
.large-box__num {
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .large-box {
    padding: 2em 4em;
  }
}
</style>
