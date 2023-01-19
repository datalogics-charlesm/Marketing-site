<template>
    <div class="w-full h-44">
      <NuxtLink
        class="w-full h-full"
        to="/"
      >
        <div
          class="flex flex-row items-center h-full bg-neutral rounded-lg hover:bg-accent transition-all duration-250 ease-in-out"
        >
          <div class="flex flex-row items-center space-x-5 p-5">
            <img 
              :src="''"
              class="w-24 h-24 mask mask-circle bg-white"
            />
            <TitleBody 
              :title="title"
              :body="body"
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
  data() {
    return {
      title: 'Some title',
      body: 'Lorem ipsum blah blah blah Lorem ipsum blah blah blah Lorem ipsum blah blah blah'
    }
  },
  components: { TitleBody },
})
</script>
