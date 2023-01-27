<template>
  <div
    class="flex flex-col bg-base-content/100 border-4 border-primary/50 w-1/3 max-w-fit min-w-fit p-16 space-y-4 rounded-3xl"
  >
    <div 
      v-for="(post, index) in postList" 
      :key="index" 
      class="space-y-8"
    >
      <h2 class="font-filson font-bold text-2xl">
        {{ post.title }}
      </h2>
      <hr class="solid w-72 text-accent" />

      <div class="font-venn font-normal w-3/4 mx-auto" v-html="post.html" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getPostsMultiTag } from '~/ghost-api/posts'
export default Vue.extend({
  name: 'FeaturesBox',
  props: ['featuresContentTagList'],
  data() {
    return {
      postList: [],
    }
  },
  async fetch() {
    let postList = []
    for (let i = 0; i < this.featuresContentTagList.length; i++) {
      let post = await getPostsMultiTag([
        'hash-hp-features',
        this.featuresContentTagList[i],
      ])
      postList.push(post[0])
    }
    this.postList = postList
  },
})
</script>
<style scoped>
:deep(ul) {
  list-style-type: disc;
}
:deep(li) {
  margin-top: 0.05rem;
}
</style>
