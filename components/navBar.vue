<template>
  <div 
    class="navbar relative bg-base-100 border-b-2 border-b-primary-focus h-36 z-20 p-0 inset-0 top-0"
  >
    <div
      class="lg:w-[55%] lg:mx-auto"
    >
      <NuxtLink 
        to="/" 
        class=""
      >
        <img 
          :src="logo.feature_image"
          :alt="logo.feature_image_alt"
          class="w-full max-w-[250px] mx-8"
        />
      </NuxtLink>
      <div
        class="w-fit ml-auto flex flex-row items-center space-x-5"
      >
        <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn normal-case p-0 bg-transparent hover:bg-transparent border-0 hover:border-0 m-1 text-white text-sm font-thin">
            <span class="flex flex-row items-center space-x-2">
              <span class="tracking-widest">
                PDF Tools
              </span>
              <font-awesome-icon 
                icon="fa-solid fa-sort-down" 
                class="-translate-y-1"
              />
            </span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-0 shadow bg-primary rounded-box w-52 z-20">
            <li 
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe PDF Library
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                PDF SDKs
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Specialized Utiliites
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe InDesign Server
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn normal-case p-0 bg-transparent hover:bg-transparent border-0 hover:border-0 m-1 text-white text-sm font-thin">
            <span class="flex flex-row items-center space-x-2">
              <span class="tracking-widest">
                Developers
              </span>
              <font-awesome-icon 
                icon="fa-solid fa-sort-down" 
                class="-translate-y-1"
              />
            </span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-0 shadow bg-primary rounded-box w-52 z-20">
            <li 
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe PDF Library
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                PDF SDKs
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Specialized Utiliites
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe InDesign Server
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn normal-case p-0 bg-transparent hover:bg-transparent border-0 hover:border-0 m-1 text-white text-sm font-thin">
            <span class="flex flex-row items-center space-x-2">
              <span class="tracking-widest">
                Solutions
              </span>
              <font-awesome-icon 
                icon="fa-solid fa-sort-down" 
                class="-translate-y-1"
              />
            </span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-0 shadow bg-primary rounded-box w-52 z-20">
            <li 
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe PDF Library
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                PDF SDKs
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Specialized Utiliites
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe InDesign Server
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn normal-case p-0 bg-transparent hover:bg-transparent border-0 hover:border-0 m-1 text-white text-sm font-thin">
            <span class="flex flex-row items-center space-x-2">
              <span class="tracking-widest">
                Resources
              </span>
              <font-awesome-icon 
                icon="fa-solid fa-sort-down" 
                class="-translate-y-1"
              />
            </span>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-0 shadow bg-primary rounded-box w-52 z-20">
            <li 
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe PDF Library
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                PDF SDKs
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Specialized Utiliites
              </NuxtLink>
            </li>
            <li
              class="hover:bg-accent hover:contrast-100 transition-all duration-250 ease-in-out"
            >
              <NuxtLink
                to="/"
              >
                Adobe InDesign Server
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink
          to="/"
          class="font-thin text-sm tracking-widest text-white"
        >
          Pricing
        </NuxtLink>
        <div class="flex flex-row items-center space-x-5 pl-2">
          <NuxtLink
            to="https://github.com/datalogics/adobe-pdf-library-samples"
            class="text-lg text-primary hover:text-white transition-all duration-250 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-github" />
          </NuxtLink>
          <NuxtLink
            class="text-primary transition-all duration-250 ease-in-out hover:text-white -translate-y-0.5"
            to="https://www.nuget.org/profiles/Datalogics"
          >
            <i class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                width="20px"
                height="20px"
                fill-rule="nonzero"
                class=""
              >
                <g
                  fill="currentColor"
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
          </NuxtLink>
          <NuxtLink
            to="https://hub.docker.com/r/datalogics/pdf2img"
            class="text-lg text-primary hover:text-white transition-all duration-250 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-docker" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 
import Vue from 'vue';
import { getPosts } from '../ghost-api/posts.js'

export default Vue.extend({
  name: 'NavBar',
  data() {
    return {
      logo: ''
    }
  },
  async fetch() {
    const logo = await getPosts('hash-logo-full')
    this.logo = logo[0]
  }
})

</script>
<style>
</style>
