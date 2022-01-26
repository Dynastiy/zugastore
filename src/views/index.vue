<template>
    <div>
        <div class="d-flex justify-content-between align-items-center ">
            <h6 class="font-weight-bold">ALL PRODUCTS</h6>
            <!-- <p class="text-info">More <i class="fa fa-angle-right" aria-hidden="true"></i> </p> -->
        </div>
        <hr class="hr my-4">
        <CarouselHeader/>
        <div class="new__apps">
            <div class="app__list" v-for="product in products" :key="product.id">
                <img :src="'https://zuga.divcommanifold.com/app/photos/'+product.app_icon" alt="">
                <div class="p-2">
                   <router-link :to=" '/product/'+product.id "> <h6 class="text-white mt-2 font-weight-bold">  {{ product.name }} </h6></router-link>
                    <hr class="hr">
                <p class="small text-warning text-capitalize"> {{ product.developer }} </p>
                <p class="small text-info"> {{ product.last_update | formatDate }} </p>
                </div>
                <router-link :to=" '/product/'+product.id "><button class="btn rounded-0 bg-info w-100 font-weight-bold text-white text-uppercase" > <span v-if="product.license === 'paid' "> ${{ product.price }}</span> <span v-else>FREE</span> </button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CarouselHeader from '@/components/CarouselHeader.vue'
export default {
    components:{
        CarouselHeader
    },
  data(){
    return {
      products: []
    }
  },
  methods:{
    async getProducts() {
        try {
          const res = await this.$store.dispatch("getProducts");
          console.log(res.products);
          this.products = res.products
        } catch (error) {
          console.log(error);
        }
      },
  },
  async created(){
    this.getProducts();
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
.new__apps p {
    margin: 0;
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