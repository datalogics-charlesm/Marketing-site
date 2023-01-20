<template>
  <!-- Content Box -->
  <div class="space-y-10">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
    
    <div class="hero min-h-screen bg-base-200 mb-12">
      <div class="hero-content text-center min-w-full">
        <div class="flex lg:flex-row w-full justify-center">
          <div>
            <div
              class="bg-dk-blue-shade-1 border-dk-blue-shade-2 border-4 rounded-lg text-5xl p-4 max-w-1/2"
            >
              <h1 class="font-filson font-extrabold text-dl-white">
                Take Control of <span class="text-accent">PDF</span> Workflows
              </h1>
            </div>
            <TitleBody :tag="'hash-homeherotext'" class="prose" />
            <SupportedPlatforms />
          </div>
          <CircleNav class="w-1/4" />
        </div>
      </div>
    </div>

    

    <div class="hero h-20">
      <APDFLLinks class="hero-content"/>
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
