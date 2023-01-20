<template>
  <div>
    <!-- NOTE PASS IN A TAG USING :tag WHEN IMPORTING THE COMPONENT -->
    <div v-if="heroTexts != null && tag != null">
      <div v-for="heroText in heroTexts" :key="heroText.id">
        <div class="flex flex-row">
          <div>
            <img
              :src="heroText.feature_image"
              :alt="feature_image_alt"
              :class="img_css"
            />
          </div>
          <div class="flex-col">
            <h2>{{ heroText.title }}</h2>
            <div v-html="heroText.html" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="title != null && body != null">
      <h2 class="text-2xl font-white">
        {{ title }}
      </h2>
      <div class="text-xs font-venn font-light" v-html="body" />
    </div>
    <div v-else-if="title != null && body == null">
      <h2 class="text-2xl font-white">
        {{ title }}
      </h2>
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
    img_css: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      heroTexts: null,
    }
  },
  async fetch() {
    // NOTE Get the post using the tag passed as prop
    const heroTexts = await getPosts(this.tag)
    // NOTE Assign the post to heroText
    this.heroTexts = heroTexts
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
