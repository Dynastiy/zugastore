<template>
  <div>
    <div>
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

    <ul class="bg-white ul__search list-unstyled">
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
          }
          else {
            // this.filteredProducts = res.products;
            alert("no result found")
          }
        });
    },
    async getProducts() {
      try {
        const res = await this.$store.dispatch("getProducts");
        console.log(res.products);
        this.products = res.products;
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
.ul__search li {
    padding: 1rem;
}
.ul__search li a {
    color: #000;
}
</style>
