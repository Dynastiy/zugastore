<template>
    <div>
        <div class="d-flex align-items-center ">
            <router-link to="/" class=" text-dark mr-1">ALL PRODUCTS </router-link>
            <span class="text-uppercase text-muted small"> >>{{ category.category_name }} </span> 
            <!-- <p class="text-info">More <i class="fa fa-angle-right" aria-hidden="true"></i> </p> -->
        </div>
        <div class="hr"></div>
          <div class="alert alert-danger" role="alert" id="noApps">
            No apps here
          </div>
          <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        <div class="new__apps">
            <div
        class=""
        v-for="product in productCategory"
        :key="product.id"
      >
        <router-link :to="'/product/' + product.id">
          <div class="app__list shadow-sm">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + product.app_icon
              "
              alt=""
            />
            <div class="">
              <h6 class="text-dark small mt-3" style="min-width: 100%; overflow: hidden">
                {{ product.name }}
              </h6>
              <h4 class="small text-dark  text-capitalize">
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
    async getApps(){
      try {
        this.loading = true;
      // var self=this;
      let res = await axios.get("https://api.africanapp.store/api/find-category/"+this.id);
     this.productCategory = res.data.category.data; // Data existed
          this.category = res.data.category.data
          // console.log(res);
           console.log(res.data.category.data);
           if(res.data.category.data.length === 0 ){
             let noApp = document.getElementById("noApps");
             noApp.style.display = 'block'
           }
           this.loading = false
      } catch (error) {
        console.log(error);
      }
      finally{
        this.loading = false;
      }
    }
  },
  
 async created() {
      this.getApps()
  }
}
</script>


<style scoped>
#noApps{
  display: none;
}
.new__apps img {
  /* object-fit: cover; */
  height: 100px;
  width: 100px;
  /* width: ; */
  /* border-radius: 20px; */
}
.hr {
  background: #d2b681;
  height: 1px;
  margin: 1.3rem 0;
}
.app__list {
 background: #fff;
 padding:1rem ;
 display: table;
 width: 100%;
 height: 100%;
}
h4.small {
  border-radius: 15px;
  margin: 0;
}
.new__apps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}
.new__apps p {
  margin: 0;
}

@media (max-width: 990px){
    .new__apps {
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    transition: all 2s;
  }
  .app__list {
    background: transparent;
    box-shadow: unset !important;
  }
  .new__apps img{
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
}
</style>