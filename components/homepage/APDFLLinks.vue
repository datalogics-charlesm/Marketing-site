<template>
  <div class="flex flex-row w-full space-x-48 font-venn font-light">
    <div v-for="(link, index) in links" :key="link.id" class="">
      <div
        class="flex flex-row items-center space-x-1 group"
        :class="{
          'btn bg-primary-focus hover:bg-primary-focus rounded-full text-white hover:text-white normal-case h-fit py-0 px-6 leading-none transition-all duration-250 ease hover:brightness-125':
            index == 0,
          'btn bg-transparent hover:bg-transparent group-hover:bg-transparent text-white normal-case border-0 transition-all duration-500 ease':
            index != 0,
        }"
      >
        <i
          v-if="link.name.includes('NuGet')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="24px"
            height="16px"
            fill-rule="nonzero"
            class="text-white transition-all duration-500 ease group-hover:text-primary-content"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(10.66667,10.66667)">
                <path
                  d="M1.998,4.442c1.103,0 1.998,-0.883 1.998,-1.971c0,-1.088 -0.895,-1.971 -1.998,-1.971c-1.103,0 -1.998,0.883 -1.998,1.971c0,1.088 0.895,1.971 1.998,1.971zM24,10.853c0,-3.353 -2.755,-6.071 -6.154,-6.072h-6.667c-3.398,0.001 -6.152,2.719 -6.153,6.072v6.577c0,3.353 2.755,6.071 6.154,6.071h6.667c3.399,0 6.154,-2.718 6.154,-6.071v-6.577zM9.702,12.471c-1.379,0 -2.497,-1.103 -2.497,-2.463c0,-1.36 1.118,-2.463 2.497,-2.463c1.379,0 2.497,1.103 2.497,2.463c-0.001,1.36 -1.118,2.463 -2.497,2.463zM17.67,21.503c-2.206,0 -3.995,-1.765 -3.995,-3.941c0,-2.176 1.789,-3.941 3.995,-3.941c2.206,0 3.995,1.765 3.995,3.941c0,2.176 -1.789,3.941 -3.995,3.941z"
                />
              </g>
            </g>
          </svg>
        </i>
        <font-awesome-icon
          v-if="link.name.includes('GitHub')"
          icon="fa-brands fa-github"
          class="text-white text-normal transition-all duration-500 ease group-hover:text-primary-content"
        />
        <span
          class="h-fit w-fit transition-all duration-500 ease group-hover:text-primary-content"
        >
          {{ link.name }}
        </span>
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
