<template>
  <div class="roadmap-container" id="roadmap">
    <h2 class="head-text">Roadmap</h2>

    <Moon />

    <div class="hexagons">
      <SmHexagons v-if="isMobile" />
      <Hexagons v-else />
    </div>

    <div class="notes">
      <ul class="note-1">
        <li>Ideation</li>
        <li>Gathering the industry experts</li>
      </ul>

      <ul class="note-2">
        <li>Whitepaper V1.0 release</li>
        <li>GnesysOne Website goes live</li>
        <li>Initial marketing efforts kick starts</li>
        <li>Community building in Social Media’s</li>
        <li>Seed Funding Round</li>
      </ul>

      <ul class="note-3">
        <li>Private Sale A</li>
        <li>Private Sale B</li>
        <li>Pancakeswap Listing</li>
        <li>Lor staking goes live</li>
        <li>Airdrop for early supporters</li>
        <li>First Project announced for IDO</li>
      </ul>

      <ul class="note-4">
        <li>Launching of offerings in the platform</li>
        <li>Cross-Chain Swap functionalities</li>
        <li>Major Exchange listings</li>
        <li>Partnerships</li>
      </ul>

      <ul class="note-5">
        <li>Governance goes live with<br />Quadratic Votings</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hexagons from "./shapes/Hexagons.vue";
import Moon from "./shapes/Moon.vue";
import SmHexagons from "./shapes/SmHexagons.vue";

export default {
  components: { Hexagons, Moon, SmHexagons },
};
</script>

<style scoped>
.roadmap-container {
  position: relative;
  width: 100%;
  margin-top: 80px;
}
.hexagons {
  position: relative;
  z-index: 2;
}
.hexagons {
  width: 100%;
}
.notes {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
ul[class^="note-"] {
  position: absolute;
  z-index: 4;
  list-style-image: url("@/assets/icons/list-icon.svg");
}
.note-1 {
  left: 14.8%;
  bottom: 14%;
}
.note-2 {
  top: 21%;
  left: 30%;
}
.note-3 {
  bottom: 0%;
  left: 47.4%;
}
.note-4 {
  top: 25%;
  left: 62.8%;
}
.note-5 {
  right: 9.8%;
  bottom: 14%;
}
@media (max-width: 1000px) {
  .note-1 {
    bottom: 10%;
  }
  .note-2 {
    top: 21%;
  }
  .note-3 {
    bottom: -8%;
  }
  .note-5 {
    bottom: 8%;
  }
}
@media (max-width: 800px) {
  .note-1 {
    bottom: 6%;
  }
  .note-2 {
    top: 22%;
  }
  .note-3 {
    bottom: -12%;
  }
  .note-4 {
    top: 25%;
  }
  .note-5 {
    bottom: 8%;
  }
}
@media (max-width: 600px) {
  .roadmap-container {
    overflow: hidden;
  }
  .head-text {
    padding-bottom: 15px;
  }
  .notes,
  ul[class^="note-"] {
    position: static;
  }
  ul[class^="note-"] {
    margin-bottom: 20px;
  }
  .moon-container {
    display: none;
  }
  .hexagons,
  .notes {
    width: 50%;
    float: left;
  }
  .notes {
    padding-top: 10%;
  }
}
</style>
