<template>
  <div>
      <!-- Top Header -->
    <div class="bg-white web__header shadow-sm" id="navbar">
      <header class="main-nav px-4 py-2 d-flex justify-content-between">
        <search-bar></search-bar>

        <!-- user Profile -->
        <div class="d-flex align-items-center justify-content-between" style="gap:20px" >
          <div class="btn-group" v-show="isLoggedIn">
          <button type="button" class="drop__btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <img src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png" class="rounded-circle" width="30" height="30" alt="">
          </button>
          <div class="dropdown-menu">
            <!-- <a class="dropdown-item" href="#">Submit App</a> -->
            <!-- <a class="dropdown-item" href="#">Login</a> -->
            <!-- <a class="dropdown-item" href="#">Register</a> -->
            <a class="dropdown-item" @click="logout">Logout</a>
          </div>
        </div>
        <div v-show="!isLoggedIn">
            <router-link to="/signin"> 
              <button class="py-1 px-4 border-0 bg-info rounded-sm text-white">Sign in</button>
               </router-link>
        </div>
        </div>
      </header>
    </div>

    <div class="mobile__header sticky-top" id="navbar2">
       <nav class="d-flex bg-white shadow-sm justify-content-between  py-3 container align-items-center ">
        <div>
          <i class="fa fa-bars" aria-hidden="true" id="tog"></i>
        </div>
        <div>
          <router-link class="text-dark font-weight-bold" to="/"> <img src="@/assets/img/logo_spread.svg" width="100" alt="" srcset=""> </router-link>
        </div> 
        <i class="fa fa-search" aria-hidden="true" @click="toggleSearch"></i> 
      </nav>
      <div class="container mt-2" v-show="searchbar">
        <search-bar></search-bar>
      </div>


      <div class="mobile_nav" id="side-bar">
        <div class="bg-white nav__menu pl-4 py-2 shadow-sm" >
          <div class="my-2 text-right pr-3" id="close-menu">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <ul class="navbar-nav mr-auto  mt-lg-0" style="gap:20px">
             <li class="mb-3">
          <router-link class="text-white font-weight-bold" to="/"> <img src="@/assets/img/logo_spread.svg" width="120" alt="" srcset=""> </router-link>
       
            </li>
            <li class="bg-info px-2 py-2">
              <router-link class="text-white" to="/my-apps">My Apps and Games</router-link>
            </li>
            
            <li v-for="category in categories" :key="category.id" class="nav-item d-flex align-items-center ">
                  <router-link class="text-dark font-weight-bold nav-link text-uppercase" :to=" '/category/'+category.id">
                 - {{ category.category_name }} </router-link> 
            </li>
            <li class="mb-2 bg-info px-2 py-2 text-white">
              <i class="fa fa-power-off mr-2" aria-hidden="true"></i>
                <a class="" @click="logout">Logout</a>
            </li>
        </ul>
        <div class="hr2"></div>
      <div class="lower__part">
        <h6 class="small text-dark" style="">SOCIAL</h6>
        <ul class="list-unstyled mt-3" style="">
         <li><a href="http://fb.me/africanappstore" target="_blank"> <i class="fa fa-facebook mr-2" aria-hidden="true"></i> <span class="text-dark small">Facebook</span> </a></li>
         <li><a href="http://twitter.com/africanapp" target="_blank"> <i class="fa fa-twitter mr-1" aria-hidden="true"></i> <span class="text-dark small">Twitter</span> </a></li>
         <li><a href="http://instagram.com/africanapp" target="_blank"><i class="fa fa-instagram text-danger mr-1" aria-hidden="true"></i> <span class="text-dark small">Instagram</span> </a></li>
         <li><a href="http://linkedin.com/africanapp" target="_blank"> <i class="fa fa-linkedin mr-1" aria-hidden="true"></i>  <span class="text-dark small">LinkedIn</span> </a></li>
         <li><a href="http://tiktok.com/@african_app" target="_blank"> <img src="https://www.freelogovectors.net/wp-content/uploads/2018/10/tik_tok_logo.png" width="15" alt="" srcset=""> <span class="text-dark small">Tiktok</span> </a></li>
         <li><a href="mailto:support@africanapp.store" target="_blank"> <i class="fa fa-envelope text-dark mr-1" aria-hidden="true"></i> <span class="text-dark small">Email</span> </a></li>
         <li><a href="tel:+2348114193837" target="_blank"> <i class="fa fa-phone mr-1" aria-hidden="true"></i> <span class="text-dark small">Phone Number</span> </a></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchBar from '@/components/search.vue'
export default {
  components:{
    searchBar,
  },
  data(){
    return {
      categories: [],
      searchbar: false,
    }
  },
  methods:{
    logout(){
       this.$store.dispatch('logout')
             .then(() => {
                this.$router.push('/')
                });
    },
    toggleSearch(){
      if(this.searchbar === true){
        this.searchbar = false
      }
      else{
        this.searchbar = true
      }
    },
    async getCategories() {
        try {
          const res = await this.$store.dispatch("getCategories");
          console.log(res.categories);
          this.categories = res.categories.data
        } catch (error) {
          console.log(error);
        }
      },
  },
  mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        closeMenu.onclick = function(){
        sidee.classList.remove('active');
        bodyEl.classList.remove("active")
        }

        // Sticky
        window.onscroll = function() {myFunction()};
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      function myFunction() {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      } 
  },
  async created(){
    this.getCategories();
  },
  computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
      },
}
</script>

<style>
.drop__btn {
  border: none;
  background: transparent;
}
.sticky {
  position: fixed;
  top: 0;
  width: 85%;
  z-index: 999;
}
.sticky + .main-nav {
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
}
/* .sticky + .content {
  padding-top: 60px;
} */
.sticky2 {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.sticky2 + .content {
  padding-top: 60px;
}
.web__header {
  margin-left: 200px;
  transition: 1s;
}
.mobile__header {
  display: none;
}
.mobile__header .fa{
font-size: 25px;
}
.mobile_nav {
  /* background: rgba(0, 0, 0, 0.4); */
  z-index: 999;
  position: fixed;
   left: -1000px;
  top: 0;
  width: 100%;
  /* font-size: 1.3rem; */
  transition: 0.6s;
  max-height: 100vh;
}
.nav__menu {
  transition: 3s;
  width: 80%;
}
.mobile_nav.active{
  left: 0px;
}
.nav__menu {
  height: 100vh;
  overflow-y: scroll;
}
.dropdown-menu.show {
  left: -150px;
}
.dropdown-menu {
  border-radius: 0 !important;
}
.dropdown-item {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
}
.dropdown-menu {
    border-radius: 0;
}
.dropdown-menu a:hover {
    background-color: var(--accent-color);
    cursor: pointer;
}
@media(max-width: 990px){
.web__header{
  display: none;
}
.mobile__header {
  display: unset;
}
.nav__menu .fa {
  font-size: 0.9rem;
}
}
</style>
