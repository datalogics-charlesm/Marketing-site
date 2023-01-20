<template lang="">
  <div class="grid grid-cols-7 gap-x-12 gap-y-20">
    <div v-for="company in companys" :key="company.id">
      <img :src="company.logo" :alt="company.name" class="h-24 w-auto" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      companys: [
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
        {
          name: 'company-name',
          logo: 'https://www.datalogics.com/wp-content/uploads/2022/12/callas_b.png',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>
