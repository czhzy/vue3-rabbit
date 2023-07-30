<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div  class="container">
    <HomeCategory />
    <HomeBanner />  
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>