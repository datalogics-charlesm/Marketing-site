<template>
    <div class="w-full h-48">
      <NuxtLink
        class="w-full h-full"
        :to="post.excerpt"
      >
        <div
          class="flex flex-row items-center h-full bg-neutral/25 rounded-2xl hover:bg-accent transition-all duration-250 ease-in-out"
        >
          <div class="flex flex-row justify-evenly px-8 w-full">
            <img 
              :src="post.feature_image"
              class="w-24 h-24 shrink-0 mask mask-circle self-center mr-6"
            />
            <TitleBody 
              :title="post.title"
              :body="post.html"
              class="grow"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
</template>

<script>
import Vue from 'vue'
import TitleBody from '../TitleBody.vue';
export default Vue.extend({
  name: 'LowCodeToolLink',
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    console.log(this.post)
  },
  components: { TitleBody },
})
</script>
