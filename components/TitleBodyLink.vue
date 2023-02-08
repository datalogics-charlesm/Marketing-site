<template>

<div class="flex flex-row items-center space-x-12 w-fit h-fit ">
    <img :src="post.feature_image" :class="img_css">

    <div>
        <TitleBody :body="post.html" :title="post.title" :body_css="body_css" :title_css="title_css" />
        <NuxtLink :to="post.custom_excerpt"  :class="link_css">
            See More
        </NuxtLink>    
    </div>
</div>

</template>

<script>
import Vue from 'vue';
import TitleBody from './TitleBody.vue';


export default Vue.extend({

    components:{
        TitleBody
    },
    props: {
    title: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: false,
    },
    title_css: {
      type: String,
      required: false,
    },
    body_css: {
      type: String,
      required: false,
    },
    img_css: {
      type: String,
      required: false,
    },
    link_css: {
      type: String,
      required: false,
    },
    post: {
      type: Object,
      required: false,
    },
  },

})







</script>