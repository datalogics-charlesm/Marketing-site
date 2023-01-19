<template>
  <div class="pagecontainer">
    <div class="flex flex-row justify-center space-x-96">
      <!-- Content Box -->
      <div>
        <div
          class="bg-dk-blue-shade-1 border-dk-blue-shade-2 border-4 rounded-lg text-5xl p-4 w-3/6"
        >
          <h1 class=" font-filson font-extrabold text-dl-white ">Take Control of <span class="text-accent">PDF</span> Workflows</h1>
        </div>
      <SupportedPlatforms />
      </div>
      <div class="inline-flex pb-96 pt-60">
        <CircleNav />
      </div>
    </div>
    <div class="flex flex-row justify-center space-x-10 p-40 pt-60">
      <FeaturesBox 
        :featuresContentTagList="firstFeatureBoxTags"
      />
      <FeaturesBox 
        :featuresContentTagList="secondFeatureBoxTags"
      />
      <FeaturesBox 
        :featuresContentTagList="thirdFeatureBoxTags"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import CircleNav from '~/components/CircleNav.vue';
export default Vue.extend({
    name: "homepage",
    data() {
        return {
            firstFeatureBoxTags: [
                "hash-hpc-m",
                "hash-hp-extraction"
            ],
            secondFeatureBoxTags: [
                "hash-hp-security",
                "hash-hp-forms",
                "hash-hp-images"
            ],
            thirdFeatureBoxTags: [
                "hash-hp-text",
                "hash-hp-conversion",
                "hash-hp-ocr"
            ]
        };
    },
    components: { CircleNav }
})
</script>
