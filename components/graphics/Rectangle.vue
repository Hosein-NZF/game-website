<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- texts inside rectangle -->
    <text class="txt-title" x="10" y="22" fill="#fff">
      {{ title }}
    </text>
    <text class="txt-percent" x="10" y="60" fill="#fff">
      {{ percent }}
    </text>

    <g filter="url(#filter0_b_856_175)">
      <rect
        x="0.5"
        :width="width"
        :height="height"
        rx="8"
        fill="white"
        fill-opacity="0.08"
      />
      <rect
        x="1.12097"
        y="0.620968"
        :width="width - 1"
        :height="height - 1"
        rx="7.37903"
        stroke="url(#paint0_linear_856_175)"
        stroke-width="1.24194"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_856_175"
        x="-59.1129"
        y="-59.6129"
        width="234.726"
        height="196.226"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="29.8065" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_856_175"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_856_175"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_856_175"
        x1="58.25"
        y1="0"
        x2="58.25"
        y2="77"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#54E0FF" />
        <stop offset="0.151042" stop-color="#5160E2" stop-opacity="0.848958" />
        <stop offset="1" stop-color="#0DD3FF" stop-opacity="0.39" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "Rectangle",
  props: {
    width: {
      default: 116,
    },
    height: {
      default: 77,
    },
    title: {},
    percent: {},
  },
};
</script>
<style scoped>
svg {
  z-index: 2;
}
.txt-title {
  font-size: 20px;
  font-weight: 300;
}

.txt-percent {
  font-size: 30px;
  font-weight: bold;
}
</style>
