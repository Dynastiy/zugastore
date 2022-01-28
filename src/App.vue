<template>
  <div id="app">
    <AppHeader/>
    <app-categories/>
    <div class="container py-4">
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

<style>
#app {
  background: #d2b68104;
}
.bg-info{
  background: #a67b3e !important;
}
/* .bg-info{
  background: #d2b681 !important;
} */
.bg-dark {
  background: #000 !important;
}
.btn .bg-info:hover {
  background: #d2b681 !important;
}
.text-info {
color: #a3783d !important;
}
</style>
