<template>
  <!-- NOTE PASS IN A TAG USING :tag WHEN IMPORTING THE COMPONENT -->
  <div v-if="heroText">
    <h1>{{ heroText.title }}</h1>
    <div v-html="heroText.html"></div>
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
      required: true,
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
