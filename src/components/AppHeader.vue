<template>
  <div>
      <!-- Top Header -->
    <div class="bg-dark web__header">
      <header
        class="main-nav container d-flex justify-content-between align-items-center py-3"
      >
        <div>
          <router-link class="text-white font-weight-bold" to="/">Samzuga App Store</router-link>
        </div>
        <div>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2"
                > <i class="fa fa-search" aria-hidden="true"></i> </span
              >
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="mobile__header">
       <nav class="sticky-top d-flex shadow-sm  py-3 container align-items-center justify-content-between ">
        <div>
          <i class="fa fa-bars" aria-hidden="true" id="tog"></i>
        </div>
        <div>
          <router-link class="text-dark font-weight-bold" to="/">Samzuga App Store</router-link>
        </div> <i class="fa fa-search" aria-hidden="true"></i> 
      </nav>


      <div class="mobile_nav" id="side-bar">
        <div class="bg-white nav__menu pl-4 py-3 w-50 shadow-sm" >
          <ul class="navbar-nav mr-auto  mt-lg-0" style="gap:20px">
            <li v-for="category in categories" :key="category.id" class="nav-item d-flex align-items-center ">
                <span> <img :src=" 'https://zuga.divcommanifold.com/'+category.icon_image " alt="" width="15" class="mr-3"> </span>
                  <router-link class="text-dark font-weight-bold nav-link text-uppercase" :to=" '/category/'+category.id">
                  {{ category.category_name }} </router-link> 
            </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      categories: []
    }
  },
  methods:{
    async getCategories() {
        try {
          const res = await this.$store.dispatch("getCategories");
          console.log(res.categories);
          this.categories = res.categories
        } catch (error) {
          console.log(error);
          
        }
      },
  },
  mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            // toggller.style.opacity = '1'
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        // toggller.style.opacity = '0'
        }
  },
  async created(){
    this.getCategories();
  }
}
</script>

<style>
.mobile__header {
  display: none;
}
.mobile__header .fa{
font-size: 25px;
}
.mobile_nav {
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
   left: -500px;
  /* top: 0; */
  width: 100%;
  /* font-size: 1.3rem; */
  transition: 0.6s;
  max-height: 100vh;
}
.nav__menu {
  transition: 2s;
}
.mobile_nav.active{
  left: 0px;
}
.nav__menu {
  min-height: 100vh;
}
@media(max-width: 990px){
.web__header{
  display: none;
}
.mobile__header {
  display: unset;
}
}
</style>
