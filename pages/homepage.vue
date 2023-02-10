<template>
  <!-- Content Box -->
  <div class="space-y-10 relative mt-36">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    
    <div class="hero min-h-full pb-14 mb-12 relative">
      <div
        class="absolute w-screen min-h-screen overflow-hidden -z-50"
      >
        <img 
          :src="backgroundImage.feature_image"
          :alt="backgroundImage.feature_image_alt"
          class="w-full h-full opacity-5 translate-y-96 -translate-x-10"
        />
      </div>
      <div class="hero-content min-w-full z-10">
        <div class="flex lg:flex-row w-full justify-center">
          <div class="justify-start">
            <div class="w-full ">
            <div
              class="bg-base-content border-primary-focus border-4 rounded-lg text-7xl p-4 max-w-1/2 w-7/12 mx-auto"
            >
              <h1 class="font-filson font-extrabold text-dl-white p-0 text-left">
                Take Control of <span class="text-accent">PDF</span> Workflows
              </h1>
            </div>
            <TitleBody
              :tag="'hash-homeherotext'" 
              :hide_title="true"
              class="prose mx-60 text-left pb-6 text-white" 
            />
            <SupportedPlatforms class="ml-56" />
          </div>
          </div>
          <div class="m-44 mr-[550px]" ><CircleNav/></div>
        </div>
      </div>
    </div>

    <div class="hero h-20">
      <APDFLLinks class="hero-content place-content-center"/>
    </div>
    <div class="flex flex-col lg:flex-row w-fit mx-auto space-x-6 mb-12 pb-24">
      <FeaturesBox :featuresContentTagList="firstFeatureBoxTags" />
      <FeaturesBox :featuresContentTagList="secondFeatureBoxTags" />
      <FeaturesBox :featuresContentTagList="thirdFeatureBoxTags" />
    </div>

        <div class="hero min-h-80 bg-base-content py-10 ">
      <div class=" hero-content min-w-full">
        <Endorsements class=""/>
      </div>
    </div>

    <div class="flex justify-center m-auto">
      <TitleBody class="text-accent" :title="'Low Code Command Line Tools'"/>
    </div>

    <div class="min-h-full w-full mx-8 lg:max-w-5xl lg:mx-auto pb-24 pt-24">
      <LowCodeTools :lowCodePosts="lowCodePosts"/>
    </div>

    <div class="text-center bg-primary font-bold py-2">
      <!-- make this to where it pulls only the POST title from ghost -->
      <TitleBody :title="'Companion SDKs & Publishing Tools'"/>
    </div>

    <div class="">
      <div class="min-w-full">
        <TitleBodyLink 
        v-for="(post,index) in sdkposts"
        :key="index"
        :post="post"
         class="prose text-primary-content max-w-5xl m-auto" 
         :img_css="'max-h-44 max-w-sm mr-28'"
         :link_css="'text-accent text-base font-bold'" 
         />


      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getPosts } from '~/ghost-api/posts'

import CircleNav from '~/components/CircleNav.vue'
import APDFLLinks from '~/components/homepage/APDFLLinks.vue'
import Endorsements from '~/components/homepage/Endorsements.vue'
import LowCodeTools from '~/components/homepage/LowCodeTools.vue'
import TitleBodyLink from '~/components/TitleBodyLink.vue'

export default Vue.extend({
  name: 'homepage',
  async asyncData() {
    const lowCodePosts = await getPosts('hash-hp-cl-sect')
    const backgroundImage = await getPosts('hash-hp-background-image')
    const sdkposts = await getPosts('hash-hp-sdk-pub')
    return {
      lowCodePosts: lowCodePosts.slice().reverse(),
      backgroundImage: backgroundImage[0],
      sdkposts: sdkposts.slice().reverse(),
    }
  },
  data() {
    return {
      firstFeatureBoxTags: ['hash-hpc-m', 'hash-hp-extraction'],
      secondFeatureBoxTags: [
        'hash-hp-security',
        'hash-hp-forms',
        'hash-hp-images',
      ],
      thirdFeatureBoxTags: [
        'hash-hp-text',
        'hash-hp-conversion',
        'hash-hp-ocr',
      ],
      lowCodePosts: []
    }
  },

  components: { CircleNav, LowCodeTools, APDFLLinks, Endorsements, TitleBodyLink },
})
</script>

<style>
    #circle {
      width: 800px;
      height: 800px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 300px;
      background: red;
    }
</style>