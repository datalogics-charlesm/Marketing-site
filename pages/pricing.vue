<template>


    <div>
        <div class="hero">
              <h1 class="font-filson font-extrabold text-dl-white p-0 text-left">
                
              </h1>

            </div>
            <div>
                <TitleBody
              :tag="'hash-pricingtitlebody'" 
              :hide_title="false"
              class="prose text-base font-normal font-venn font-light"
                 
            />
              </div>
        </div>
        

</template>

<script>

  import { getPosts } from '~/ghost-api/posts';

  export default {
    async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
  }

</script>