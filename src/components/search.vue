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
          @keyup="searchApp"
        />
        <div class="input-group-append" @click="searchApp">
          <span class="input-group-text" id="basic-addon2">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>

    <ul
      class="bg-white ul__search list-unstyled shadow-sm"
      v-if="search_result"
    >
      <li class="" v-for="product in filteredProducts" :key="product.id">
       <a @click="viewMore(product.id)" href="javascript:void(0)">{{
          product.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      search: "",
      search_result: false,
      no_result: false,
    };
  },
  methods: {
    async searchApp() {
     if(this.search === ''){
       this.search_result = false
     }
     else {
        const res = await axios.get(
        `https://api.africanapp.store/api/search-product?name=${this.search}`
      );
      console.log(res.data.data);
      this.filteredProducts = res.data.data;
      this.search_result = true
      if (this.filteredProducts.length === 0) {
        this.no_result = true;
      
      } 
      else
       {
        this.no_result = false;
      }
     }
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
    viewMore(id){
      this.search = '';
      this.search_result = false
      this.$router.push({ name: 'product', params: { id } })
    }
  },
  async created() {
    this.getProducts();
    // this.searchApp()
  },
  computed: {
    //   filteredProducts(){
    //       return this.products.filter((product)=>{
    //           return product.name.toLowerCase().match(this.search)
    //       })
    //   }
  },
};
</script>

<style scoped>
.ul__search {
  position: absolute;
  /* top: 0; */
  width: 30%;
  z-index: 999;
  transition: 2s;
}
.search__box {
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
.ul__search li a:hover {
  text-decoration: none;
  background: #fae4ba25;
}
</style>
