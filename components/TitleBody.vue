

<template>
    <div>
        <h1>
            {{heroText.posts}}
        </h1>
    </div>
</template>

<script>
import { getPosts } from '../ghost-api/posts.js'
import Vue from 'vue'

export default Vue.extend({
  name: 'TitleBody',
  async asyncData() {
    const heroText = await getPosts("herotext")
    
    console.log(heroText)

    return {
      heroText: heroText,
    }
  },
})
</script>