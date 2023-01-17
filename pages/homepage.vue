
import SupportedPlatforms from '~/components/SupportedPlatforms.vue';


import FeaturesBox from '~/components/FeaturesBox.vue';




<template>
    <div class="pagecontainer">
        
    <div class="flex flex-row justify-center space-x-96">
            <!-- Content Box -->

            <div>

                <div class="bg-dk-blue-shade-1 border-dk-blue-shade-2 border-4 rounded-lg text-5xl">
                    <h1>Take Control of</h1>
                    <h1 text-accent>PDF Workflows</h1>
                </div>
                <SupportedPlatforms/>

            <!-- Circle Icons -->

            </div>

            <div class="inline-flex pb-96 pt-60">

                <CircleNav/>

            </div>

    </div>

    <div class="flex flex-row justify-center space-x-48 p-40 pt-60">

        <FeaturesBox/>
        <FeaturesBox/>
        <FeaturesBox/>
        
    </div>

    </div>



</template>