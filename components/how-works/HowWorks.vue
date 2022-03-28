<template>
  <div class="how-works-container mt-15" id="how-works">
    <h2 class="head-text">How It Works</h2>

    <div class="how-works-boxs">
      <NewSystem class="shape shape-system" />
      <Guarunteed class="shape shape-guarunteed" />
      <Process class="shape shape-process" />
      <CircleShape class="shape shape-circle" />
      <Stack class="shape shape-stack" />

      <!-- lines for mobile -->
      <template v-if="isMobile">
        <SmLine1 class="sm-shape sm-shape-line-1" />
        <SmLine2 class="sm-shape sm-shape-line-2" />
        <SmLine3 class="sm-shape sm-shape-line-3" />
      </template>

      <!-- lines for desctop -->
      <template v-else>
        <Line1 class="shape shape-line-1" />
        <Line2 class="shape shape-line-2" />
        <Line3 class="shape shape-line-3" />
        <Line4 class="shape shape-line-4" />
      </template>
    </div>
  </div>
</template>

<script>
import NewSystem from "./shapes/new-system.vue";
import Guarunteed from "./shapes/guarunteed.vue";
import Line1 from "./shapes/line-1.vue";
import Line2 from "./shapes/line-2.vue";
import Process from "./shapes/process.vue";
import Line3 from "./shapes/line-3.vue";
import CircleShape from "./shapes/circle.vue";
import Line4 from "./shapes/line-4.vue";
import Stack from "./shapes/stack.vue";
import SmLine1 from "./shapes/sm-line-1.vue";
import SmLine2 from "./shapes/sm-line-2.vue";
import SmLine3 from "./shapes/sm-line-3.vue";

export default {
  name: "HowWorks",
  components: {
    NewSystem,
    Guarunteed,
    Line1,
    Line2,
    Process,
    Line3,
    CircleShape,
    Line4,
    Stack,
    SmLine1,
    SmLine2,
    SmLine3,
  },
};
</script>

<style scoped>
.how-works-boxs {
  position: relative;
  min-height: 1200px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.shape,
.sm-shape {
  position: absolute;
}

.shape-system {
  top: 0;
  right: 18%;
}

.shape-line-1 {
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
}
.shape-guarunteed {
  top: 185px;
  left: 18%;
}
.shape-line-2 {
  top: 384px;
  left: 25%;
}
.shape-process {
  top: 568px;
  left: 55%;
}
.shape-process.aos-animate {
  transform: translateX(-50%) translateZ(0) !important;
}
.shape-line-3 {
  top: 668px;
  right: 17%;
}
.shape-circle {
  top: 968px;
  right: 16.1%;
  z-index: 1;
}
.shape-line-4 {
  top: 1006px;
  right: 23.2%;
}
.shape-stack {
  top: 918px;
  right: 45%;
}

@media (min-width: 1000px) and (max-width: 1200px) {
  .shape-system {
    right: 13%;
  }
  .shape-guarunteed {
    left: 13%;
  }
  .shape-line-2 {
    top: 384px;
    left: 20%;
  }
  .shape-line-3 {
    top: 668px;
    right: 13%;
  }
  .shape-circle {
    top: 968px;
    right: 12%;
    z-index: 1;
  }
  .shape-line-4 {
    top: 1006px;
    right: 20.5%;
  }
  .shape-stack {
    top: 918px;
    right: 48%;
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  .shape-system {
    right: 3%;
  }
  .shape-guarunteed {
    left: 2%;
  }
  .shape-line-2 {
    top: 384px;
    left: 13%;
  }
  .shape-line-3 {
    top: 668px;
    right: 9%;
  }
  .shape-circle {
    top: 968px;
    right: 8%;
    z-index: 1;
  }
  .shape-line-4 {
    top: 1006px;
    right: 18%;
  }
  .shape-stack {
    top: 918px;
    right: 51%;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .shape-system {
    right: 0;
  }
  .shape-line-1 {
    top: 59px;
  }
  .shape-guarunteed {
    top: 120px;
    left: 0;
  }
  .shape-line-2 {
    top: 323px;
    left: 12%;
  }
  .shape-process {
    top: 500px;
    left: 62%;
  }
  .shape-line-4 {
    top: 840px;
    right: unset;
    left: 62%;
    transform: translateX(-50%) rotate(90deg);
  }
  .shape-stack {
    top: 1020px;
    left: 49%;
    right: unset;
  }
}
@media (max-width: 600px) {
  .how-works-boxs {
    height: 1650px;
  }
  .shape-system {
    top: -50px;
    right: 50%;
    transform: translateX(50%);
  }
  .sm-shape-line-2 {
    top: 180px;
    right: 50%;
    transform: translateX(13%) scaleX(-1);
  }
  .shape-guarunteed {
    top: 500px;
    right: 50%;
    left: unset;
    transform: translateX(4%);
  }
  .sm-shape-line-1 {
    top: 700px;
    right: 50%;
    transform: translateX(18%);
  }
  .shape-process {
    top: 1020px;
    left: unset;
    right: 50%;
    transform: translateX(50%);
  }
  .sm-shape-line-3 {
    top: 1200px;
    right: 50%;
    transform: translateX(50%);
  }
  .shape-stack {
    top: 1440px;
    right: 50%;
    transform: translateX(50%);
  }

  /* replace animation */
  .shape-system.aos-animate,.shape-process.aos-animate,.shape-stack.aos-animate{
    transform: translateX(50%) translateZ(0) !important;
  }
  .shape-guarunteed.aos-animate{
    transform: translateX(4%) translateZ(0) !important;
  }
}
</style>
