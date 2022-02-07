<template>
  <div>
    <div class="search__box">
        <div class="input-group">
            <input
            v-model="search"
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              @keyup="getAllStarWarsPeople"
            />
            <div class="input-group-append" @click="getAllStarWarsPeople">
              <span class="input-group-text" id="basic-addon2"
                > <i class="fa fa-search" aria-hidden="true"></i> </span
              >
            </div>
        </div>
    </div>

    <ul class="bg-white ul__search list-unstyled shadow-sm" v-if="search_result">
      <li class="" v-for="product in filteredProducts " :key="product.id" >
        <router-link  :to="'/product/' + product.id">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      search: '',
      search_result: false,
      no_result: false,
    };
  },
  methods: {
    getAllStarWarsPeople() {
      fetch("https://api.africanapp.store/api/all-products")
        .then(response => response.json())
        .then(res => {
          if (this.search) {
            this.filteredProducts = res.products.filter(product =>
              product.name.toLowerCase().includes(this.search.toLowerCase())
            );
            this.search_result = true
          }
          else {
            this.search_result = false
            this.filteredProducts = res.products;
            // alert("no result found")
          }
        });
    },
    async getProducts() {
      try {
        const res = await this.$store.dispatch("getProducts");
        // console.log(res.all_products);
        this.products = res.all_products;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getProducts();
  },
  computed: {
    //   filteredProducts(){
    //       return this.products.filter((product)=>{
    //           return product.name.toLowerCase().match(this.search)
    //       })
    //   }
  }
};
</script>

<style scoped>
.ul__search{
  position: absolute;
  /* top: 0; */
  width: 30%;
  z-index: 999;
  transition: 2s;
}
.search__box{
  position: relative;
}
.ul__search li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.ul__search li a {
    color: #000;
    font-size: 0.8rem;
    display: block;
    padding: 0.5rem;
}
.ul__search  li a:hover{
  text-decoration: none;
  background: #fae4ba25;
  
}
</style>
