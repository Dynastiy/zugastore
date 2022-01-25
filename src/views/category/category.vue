<template>
    <div>
        <div class="d-flex align-items-center ">
            <router-link to="/" class="font-weight-bold text-dark mr-1">ALL PRODUCTS </router-link>
            <!-- <span class="text-uppercase text-muted small"> >>{{ category.category_name }} </span>  -->
            <!-- <p class="text-info">More <i class="fa fa-angle-right" aria-hidden="true"></i> </p> -->
        </div>
        <hr class="hr my-4">
        <!-- <CarouselHeader/> -->
          <div v-if="productCategory.length === 0 "  class="alert alert-danger" role="alert">
            No apps here
          </div>
          <!-- <div v-else-if="loading" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div> -->
        <div class="new__apps">
            <div class="app__list" v-for="product in productCategory" :key="product.id">
                <img :src="'https://zuga.divcommanifold.com/app/photos/'+product.app_icon" alt="">
                <div class="p-2">
                   <router-link :to=" '/products/'+product.id "> <h6 class="text-white mt-2 font-weight-bold">  {{ product.name }} </h6></router-link>
                    <hr class="hr">
                <p class="small text-warning text-capitalize"> {{ product.developer }} </p>
                <p class="small text-info"> {{ product.last_update }} </p>
                </div>
                <router-link :to=" '/product/'+product.id "><button class="btn rounded-0 bg-info w-100 font-weight-bold text-white text-uppercase"> <span v-if="product.license === 'paid' "> ${{ product.price }}</span> <span v-else>FREE</span></button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import CarouselHeader from '@/components/CarouselHeader.vue'
export default {
    components:{
        // CarouselHeader
    },
  data(){
    return {
        id: this.$route.params.id,
      productCategory: [],
      category: {},
      noApps: false,
      loading: false,
    }
  },
  methods:{
    // async 
  },
  
 async created() {
  //  var self = this;
  //   const res = await axios.get("http://zuga.divcommanifold.com/api/find-category/"+this.id)
  //   console.log(res.data.category.products);
  //   self.productCategory = res.data.category.products
  this.loading = true;
    var self=this;
      axios
       .get("https://zuga.divcommanifold.com/api/find-category/"+this.id)
       .then(function (response) {
           self.productCategory = response.data.category.products; // Data existed
           console.log(response.data.category.products);
           
       })
       .catch(function (err) {
           console.log(err);
       }) 
      
  }
}
</script>


<style scoped>
.new__apps img {
    object-fit: cover;
    height: 150px;
    width: 100%;
    /* width: ; */
    /* border-radius: 20px; */
}
.hr {
    background: #d7d7d7;
}
.app__list {
    background: #000;
}
.new__apps{
     display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap:20px ;
}

@media (max-width: 990px){
    .new__apps {
        display: grid;
        grid-template-columns: 1fr 1fr;
        transition:  all 2s;
    }
    .new__apps div {
        margin-bottom: 20px;
    }
}
</style>