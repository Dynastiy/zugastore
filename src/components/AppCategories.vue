<template>
  <div>
    <div class=" web__categories shadow-sm">
      <ul class="bg-white">
        <li class="text-center mb-3 pt-4">
          <router-link class="text-white font-weight-bold" to="/"> <img src="@/assets/img/logo_spread.svg" width="110" alt="" srcset=""> </router-link>
       
            </li>
            <li class="bg-info text-white pl-4 py-2 m-0">
              <i class="fa fa-list mr-2" aria-hidden="true"></i>
              <span> Apps </span>
            </li>
      </ul>
      <header class="main-nav bg-white">
        <div>
          <ul class="navbar-nav mr-auto mt-lg-0">
            <li
              v-for="category in categories"
              :key="category.id"
              class="nav-item"
              style="gap:12px"
            >
              
              <router-link
                class="category-text"
                :to="'/category/' + category.id"
              >
              <span>
                <img
                  :src="'https://api.africanapp.store/' + category.icon_image"
                  alt=""
                  width="25"
                  class="mr-2"
                />
              </span>
                {{ category.category_name }}
              </router-link>
            </li>
          </ul>
        </div>
      </header>
      <div class="hr2"></div>
      <div class="lower__part">
        <h6 class="small text-dark" style="padding-left: 1rem">SOCIAL</h6>
        <ul class="list-unstyled mt-3" style="padding-left: 1rem">
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
</template>

<style scoped>
.navbar {
  padding: 0;
}
</style>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        const res = await this.$store.dispatch("getCategories");
        console.log(res.categories);
        this.categories = res.categories;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getCategories();
  },
};
</script>

<style>
.web__categories{
  width: 200px;
  
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
}
.web__categories ul {
  margin: 0;
}
.main-nav {
padding: 1rem 0rem 1rem 1rem;
}
.nav-item a {
  color: #000;
  font-size: 0.8rem;
  display: block;
  padding: 0.2rem 0 0.2rem 0.6rem;
  margin-bottom: 0.1rem;
}
.hr2 {
   background: #d2b681;
  height: 1px;
  /* margin: 1.3rem 0; */
}
.lower__part{
  padding-top:1rem;
}
.lower__part ul li{
  margin-bottom: 0.3rem;
}
.lower__part a:hover {
  background: #fae4ba25;
  text-decoration: none;
  cursor: pointer;
}
.nav-item a:hover {
  background: #fae4ba25;
  text-decoration: none;
}
.router-link-exact-active {
  color: #000 !important;
}
@media (max-width: 990px) {
  .web__categories {
    display: none;
  }
}
</style>
