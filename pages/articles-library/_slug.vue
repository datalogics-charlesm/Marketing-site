<template>
  <div class="grid grid-cols-4 gap-4 justify-items-center my-5">
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            {{ page.title }}
            <div class="badge badge-secondary">NEW</div>
          </h2>

          <p v-html="page.html" class="prose"></p>
          <div class="card-actions justify-end">
            <!-- <div class="badge badge-outline">{{ tag.name }}</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPageBySlug } from '../../ghost-api/posts.js'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ params }) {
    const page = await getPageBySlug(params.slug)
    return {
      page: page,
    }
  },
})
</script>
