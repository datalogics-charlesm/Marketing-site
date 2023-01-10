<template>
  <div class="grid grid-cols-4 gap-4 justify-items-center my-5">
    <div v-for="post in companyNews" :key="companyNews.id">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img :src="post.feature_image" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ post.title }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p v-html="post.excerpt" class="prose"></p>
          <div
            class="card-actions justify-end"
            v-for="tag in post.tags"
            :key="companyNews.id"
          >
            <div class="badge badge-outline">{{ tag.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../../ghost-api/posts.js'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData() {
    const companyNews = await getPosts('company-news')

    return {
      companyNews: companyNews,
    }
  },
})
</script>
