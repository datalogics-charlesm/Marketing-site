<template>
  <div class="flex flex-row w-full">
    <div v-for="link in links" :key="link.id" class="">
      <div class="btn rounded-full">
        <i class="icon icon-4691586_nuget_icon"></i>{{ link.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Adobe PDF Library',
          link: 'https://www.datalogics.com/adobe-pdf-library/',
        },
        {
          name: 'APDFL on NuGet',
          link: 'https://www.nuget.org/profiles/Datalogics',
        },
        {
          name: 'APDFL on GitHub',
          link: 'https://github.com/datalogics/adobe-pdf-library-samples',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
