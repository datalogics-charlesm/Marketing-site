<template>
  <div class="grid grid-cols-2 gap-4 w-full">
    <LowCodeToolLink 
        v-for="index in 7"
        :key="index"
        :class="{
            'col-span-2' : index == 1,
            'col-span-1' : index != 1
        }"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { getPosts } from '~/ghost-api/posts'

import TitleBody from '../TitleBody.vue'
import LowCodeToolLink from './LowCodeToolLink.vue'

export default Vue.extend({
  name: 'LowCodeTools',
  data() {
    return {
      lowCodePosts: [],
    }
  },
  //   async fetch() {
  //     const lowCodePosts = getPosts('hash-hp-cl-sect')
  //     return {
  //         lowCodePosts: lowCodePosts
  //     }
  //   },
  components: { TitleBody, LowCodeToolLink },
})
</script>
