<template>
  <div class="switch-container">
    <input type="checkbox" class="checkbox" id="checkbox" v-model="darkmode" />
    <label for="checkbox" class="label">
      <v-icon small>mdi-white-balance-sunny</v-icon>
      <v-icon small>mdi-weather-night</v-icon>
      <div class="ball" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkmode: null,
    };
  },
  watch: {
    darkmode(val) {
      this.handledarkmode();
      this.handleClass(val);
    },
  },
  created() {
    const cookieValue = localStorage.getItem("DarkMode");
    this.darkmode = JSON.parse(cookieValue) ?? true;
  },
  methods: {
    handleClass(dark) {
      if (dark) document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
    handledarkmode() {
      if (this.darkmode === true) {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("DarkMode", true);
      } else if (this.darkmode === false) {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("DarkMode", false);
      }
    },
  },
};
</script>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 45px;
  height: 20px;
  background-color: rgba(17, 17, 17, 0.808);
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.3);
  cursor: pointer;
}
.theme--dark .switch-container label {
  background-color: rgba(255, 255, 255, 0.808);
}
.ball {
  width: 22px;
  height: 22px;
  background-color: white;
  position: absolute;
  top: -1px;
  left: -0.6px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(26px);
}

.mdi-weather-night {
  color: white;
}

.mdi-white-balance-sunny {
  color: yellow;
}

@media (max-width: 960px) {
  .label {
    margin-right: 10px;
    transform: scale(1.5);
  }
}
</style>
