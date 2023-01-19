<template>
  <div>
    <!-- NOTE PASS IN A TAG USING :tag WHEN IMPORTING THE COMPONENT -->
    <div v-if="heroText != null && tag != null" class="text-white">
      <h2>{{ heroText.title }}</h2>
      <div v-html="heroText.html" />
    </div>
    <div v-else-if="title != null && body != null">
      <h2
        class="text-2xl font-white"
      >
        {{ title }}
      </h2>
      <div class="text-lg" v-html="body" />
    </div>
  </div>
</template>

<script>
import { getPosts } from '../ghost-api/posts'
import Vue from 'vue'

export default Vue.extend({
  name: 'TitleBody',
  props: {
    tag: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
    title_css: {
      type: String,
      required: false,
    },
    body_css: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      heroText: null,
    }
  },
  async created() {
    // NOTE Get the post using the tag passed as prop
    const heroText = await getPosts(this.tag)
    // NOTE Assign the post to heroText
    this.heroText = heroText[0]
  },
})
</script>

<style scoped>
:deep(h1) {
  color: #fff;
}
:deep(h2) {
  color: #fff;
}
</style>
