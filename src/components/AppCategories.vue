<template>
  <div>
    <div class="bg-info shadow-sm">
      <header
        class="main-nav container d-flex justify-content-between align-items-center py-3"
      >
        <div>
          <nav class="navbar navbar-expand-sm navbar-light bg-info">
              <!-- <a class="navbar-brand" href="#">Navbar</a> -->
              <button class="navbar-toggler d-lg-none " type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                  <ul class="navbar-nav mr-auto  mt-lg-0">
                      <li v-for="category in categories" :key="category.id" class="nav-item">
                         <router-link class="text-white font-weight-bold nav-link text-uppercase" :to="'/product/category/'+category.id"> {{ category.category_name }} </router-link> </li>
                  </ul>
              </div>
          </nav>
        </div>
      </header>
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
  data(){
    return {
      categories: []
    }
  },
  methods:{
    async getCategories() {
        try {
          const res = await this.$store.dispatch("getCategories");
        //   console.log(res.categories);
          this.categories = res.categories
        } catch (error) {
          alert(error);
          console.log(error);
          
        }
      },
  },
  async created(){
    this.getCategories();
  }
}
</script>
