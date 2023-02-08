<template lang="">

<div v-html="logos.html" class="grid grid-cols-7 gap-16 px-[475px] gap-y-36 py-10" >
</div>
</template>
<script>
import { getPosts } from '~/ghost-api/posts';
export default {

 data() {
  return {
   logos: {},
  }
},

  async fetch() {
      const logos = await getPosts("hash-hp-end-logos")
      this.logos = logos[0];
    },
}


</script>
<style lang=""></style>
