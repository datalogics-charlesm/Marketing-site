<template>
    <div class="flex flex-row w-fit mx-auto space-x-8">
        <div 
            class="card w-96 bg-primary-focus shadow-xl"
            v-for="(post, index) in recentPosts"
            :key="index"
        >
            <figure><img :src="post.feature_image" :alt="post.feature_image_alt" /></figure>
            <div class="card-body">
              <h2 class="card-title">
                {{ post.title }}
              </h2>
              <NuxtLink 
                class="text-accent text-sm mb-auto"
                to="/"
              >
                Read more
              </NuxtLink>
              <!-- <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div> 
                <div class="badge badge-outline">Products</div>
              </div> -->
              <hr />
              <p class="text-primary text-sm">{{ calculatePublishedDate(post.published_at) }}</p>
            </div>
          </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { getPosts } from '../ghost-api/posts.js'

export default Vue.extend({
    name: 'latest-updates',
    data() {
        return {
            recentPosts: []
        }
    },
    async asyncData() {
        const recentPosts = await getPosts(['adobe-pdf-library'], 4);
        return {
            recentPosts: recentPosts
        }
    },
    methods: {
      calculatePublishedDate(publishedAt) {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

        let publishedDate = new Date(publishedAt);
        let dateString = months[publishedDate.getMonth()] + " " + publishedDate.getDay() + ', ' + publishedDate.getFullYear();
        return dateString;
      }
    },
    components: {
      
    },
})
</script>
