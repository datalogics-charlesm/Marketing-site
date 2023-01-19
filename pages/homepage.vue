<template>
  <!-- Content Box -->
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center mx-auto w-full">
      <div class="flex lg:flex-row">
        <div>
          <div
            class="bg-dk-blue-shade-1 border-dk-blue-shade-2 border-4 rounded-lg text-5xl p-4 w-1/2"
          >
            <h1 class="font-filson font-extrabold text-dl-white">
              Take Control of <span class="text-accent">PDF</span> Workflows
            </h1>
          </div>
          <TitleBody :tag="'hash-homeherotext'" class="prose" />
        </div>
        <CircleNav class="w-1/2" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import CircleNav from '~/components/CircleNav.vue'
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
  components: { CircleNav },
})
</script>
