<template>
  <svg
    :width="xLength + 10"
    :height="yLength + 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- x line -->
    <line
      x1="0"
      y1="0"
      :x2="xLength + 5"
      y2="0"
      style="stroke: rgb(255, 255, 255); stroke-width: 3"
      v-if="xLength"
    />

    <!-- y line -->
    <line
      :x1="xLength + 5"
      y1="0"
      :x2="xLength + 5"
      :y2="yLength"
      style="stroke: rgb(255, 255, 255); stroke-width: 2"
    />

    <circle :cx="xLength + 5" :cy="yLength" r="4" fill="white" />

  </svg>
</template>

<script>
export default {
  name: "GraphicLine",
  props: {
    xLength: {
      default: 0,
    },
    yLength: {
      required: true,
    },
  },
};
</script>

<style scoped>
svg{
  z-index: 1;
}
</style>
