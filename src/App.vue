<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>

</style>


<script>
export default {
    components:{
        
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap');
@import url('./assets/util.css');
:root {
  --primary-color: #a67b3e;
  --secondary-color: #a3783d;
  --tertiary-color: #d2b681;
  --accent-color: #fae4ba25;
  --light-color: #d2b68175;
}
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
