<template>
  <div>
    <Features />
    <TierStructure />
    <HowWorks />
    <Graphics />
    <Launchpad />
    <Roadmap />
    <OurPartners />
    <Blog />
    <Subscribe />
  </div>
</template>

<script>
import Features from "~/components/Features.vue";
import TierStructure from "~/components/TierStructure.vue";
import HowWorks from "~/components/how-works/HowWorks.vue";
import Graphics from "~/components/graphics/Graphics.vue";
import Launchpad from "~/components/launchpad/Launchpad.vue";
import Blog from "~/components/blog/Blog.vue";
import Subscribe from "~/components/Subscribe.vue";
import Roadmap from "~/components/roadmap/Roadmap.vue";

export default {
  name: "IndexPage",
  components: {
    Features,
    TierStructure,
    HowWorks,
    Graphics,
    Launchpad,
    Blog,
    Subscribe,
    Roadmap,
  },
};
</script>
