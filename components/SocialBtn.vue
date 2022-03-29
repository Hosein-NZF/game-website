<template>
  <div
    class="social-icons-container"
    @click.self="showIcons && (showIcons = !showIcons)"
  >
    <v-expand-transition>
      <div class="social-icons" v-show="showIcons">
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <img width="24px" height="24px" src="icons/telegram.svg" />
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-discord</v-icon>
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-reddit</v-icon>
        </v-btn>
        <v-btn color="#fff" icon x-large>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </div>
    </v-expand-transition>

    <v-btn
      class="social-btn"
      color="#33b6e8"
      fab
      @click="showIcons = !showIcons"
    >
      <v-icon>mdi-phone</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "SociaMobile",
  data: () => ({
    showIcons: false,
  }),
};
</script>

<style scoped>
.social-icons-container {
  position: fixed;
  width: 100%;
  height: 100%;
}
.social-icons {
  position: fixed;
  bottom: 80px;
  right: 22px;
  display: flex;
  flex-direction: column;
}
.social-icons >>> button {
  margin-top: 5px;
}
.social-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
