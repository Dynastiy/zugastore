<template>
  <div id="app">
    <AppHeader/>
    <app-categories/>
    <div class="container py-5">
      <router-view />
    </div>
    <AppFooter/>
  </div>
</template>

<style>

</style>


<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppCategories from '@/components/AppCategories.vue'
export default {
    components:{
        AppFooter,
        AppHeader,
        AppCategories
    }
}
</script>
