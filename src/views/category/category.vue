<template>
    <div>
        <div class="d-flex align-items-center ">
            <router-link to="/" class="font-weight-bold text-dark mr-1">ALL PRODUCTS </router-link>
            <span class="text-uppercase text-muted small"> >>{{ category.category_name }} </span> 
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
            <div
        class=" text-center"
        v-for="product in productCategory"
        :key="product.id"
      >
        <router-link :to="'/product/' + product.id">
          <div class="app__list p-2">
            <img
              :src="
                'https://zuga.divcommanifold.com/app/photos/' + product.app_icon
              "
              alt=""
            />
            <div class="">
              <h6 class="text-dark mt-2 font-weight-bold">
                {{ product.name }}
              </h6>

               <h4 class="small py-2 bg-dark text-info font-weight-bold text-capitalize">
                {{ product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
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
           self.category = response.data.category
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
    /* object-fit: cover; */
    width: 50px;
    height: 50px;
    /* width: 100x%; */
    /* width: ; */
    /* border-radius: 20px; */
}
h4.small {
  border-radius: 15px;
}
.hr {
    background: #d7d7d7;
}
.app__list {
    /* background: #000; */
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
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
        /* margin-bottom: 20px; */
    }
}
</style>