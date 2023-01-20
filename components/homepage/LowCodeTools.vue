<template>
  <div class="grid grid-cols-2 gap-7 w-full">
    <LowCodeToolLink 
        v-for="(post, index) in lowCodePosts"
        :key="index"
        :post="post"
        :class="{
            'col-span-2' : index == 0,
            'col-span-1' : index != 0
        }"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import TitleBody from '../TitleBody.vue'
import LowCodeToolLink from './LowCodeToolLink.vue'

export default Vue.extend({
  name: 'LowCodeTools',
  components: { TitleBody, LowCodeToolLink },
  props: {
    lowCodePosts: {
      type: Array,
      required: false,
    },
  },
})
</script>
