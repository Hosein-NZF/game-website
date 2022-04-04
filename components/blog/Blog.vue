<template>
  <v-container class="px-md-15 mt-15" id="blog">
    <div class="blog-container">
      <div class="head-container d-flex justify-space-between align-center px-4 px-md-0">
        <h2 class="head-text d-inline-block">Blog</h2>
        <v-btn class="see-all">See All on Medium</v-btn>
      </div>
    </div>

    <div class="blog-list">
        <BlogBox :blogData="item" v-for="(item, index) in blogItems" :key="index"/>
    </div>
  </v-container>
</template>

<script>
import BlogBox from "./BlogBox.vue";
export default {
    name: "Blog",
    data() {
        return {
            blogItems: [
                {
                    date: "JAN 08 2021",
                    title: "Lorem ipsum dolor sit amet, consectetur adi.",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dictumst mattis imperdiet aliquam aliquet nunc. ",
                    img: "/blog.png",
                },
                {
                    date: "JAN 08 2021",
                    title: "Lorem ipsum dolor sit amet, consectetur adi.",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dictumst mattis imperdiet aliquam aliquet nunc. ",
                    img: "/blog.png",
                },
                {
                    date: "JAN 08 2021",
                    title: "Lorem ipsum dolor sit amet, consectetur adi.",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dictumst mattis imperdiet aliquam aliquet nunc. ",
                    img: "/blog.png",
                },
            ],
        };
    },
    components: { BlogBox }
};
</script>

<style scoped>
.see-all {
  background: -webkit-linear-gradient(
    90deg,
    #4056a0 0%,
    #33b6e8 51.04%,
    #4056a0 100%
  ) !important;
  background: linear-gradient(
    90deg,
    #4056a0 0%,
    #33b6e8 51.04%,
    #4056a0 100%
  ) !important;
  border-radius: 16px;
  align-self: center;
  color: #fff !important;
}

.blog-container{
    margin-bottom: 2em;
}
</style>
