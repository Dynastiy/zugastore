<template>
  <div id="app">
    <AppHeader/>
    <app-categories/>
    <div class="main__page">
      <router-view :key="$route.fullPath"/>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap');
*{
  padding: 0;
  margin: 0;
  font-family: 'DM Sans', sans-serif;
}
#app {
  background: #fae4ba25;
  min-height: 100vh;
}
.bg-info{
  background: #a67b3e !important;
}
.main__page {
  margin-left: 200px;
  transition: 1s;
  padding: 2rem;
}
.bg-dark {
  background: #000 !important;
}
.btn .bg-info:hover {
  background: #d2b681 !important;
}
.text-info {
color: #a3783d !important;
}
@media (max-width: 990px) {
  .main__page{
    margin-left: unset;
  }
  
}
</style>
