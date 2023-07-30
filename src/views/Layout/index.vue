<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue'

import {useCategroyStore} from '@/stores/categroy'
import { onMounted } from 'vue'

const categroyStore = useCategroyStore()
onMounted(() => categroyStore.getcategroy())
</script>

<template>
  <LayoutSticky />
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>