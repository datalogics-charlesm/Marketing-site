<template>
  <!-- Content Box -->
  <div class="space-y-10">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    
    <div class="hero min-h-full pb-14 bg-base-200 mb-12">
      <div class="hero-content  min-w-full">
        <div class="flex lg:flex-row w-full justify-center">
          <div class="justify-start">
            <div class="w-full">
            <div
              class="bg-base-content border-primary-focus border-4 rounded-lg text-7xl p-4 max-w-1/2 w-7/12 mx-auto"
            >
              <h1 class="font-filson font-extrabold text-dl-white p-0 text-left">
                Take Control of <span class="text-accent">PDF</span> Workflows
              </h1>
            </div>
            <TitleBody :tag="'hash-homeherotext'" class="prose mx-60 text-left pb-6" />
            <SupportedPlatforms class=" mx-56" />
          </div>
          </div>
          <div class=" m-44" ><CircleNav/></div>
        </div>
      </div>
    </div>

    

    <div class="hero">
      <div class="">
        <div class="max-w-full">
      <APDFLLinks class=" space-x-60"/>
        </div>
      </div>
    </div>
    <div class="flex lg:flex-row w-fit mx-auto space-x-6 mb-12">
      <FeaturesBox :featuresContentTagList="firstFeatureBoxTags" />
      <FeaturesBox :featuresContentTagList="secondFeatureBoxTags" />
      <FeaturesBox :featuresContentTagList="thirdFeatureBoxTags" />
    </div>
    <div class="min-h-screen w-1/2 mx-auto">
      <LowCodeTools />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import CircleNav from '~/components/CircleNav.vue'
import APDFLLinks from '~/components/homepage/APDFLLinks.vue'
import LowCodeTools from '~/components/homepage/LowCodeTools.vue'
export default Vue.extend({
  name: 'homepage',
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
    }
  },
  components: { CircleNav, LowCodeTools, APDFLLinks },
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