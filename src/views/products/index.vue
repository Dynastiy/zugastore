<template>
  <div class="">
    <div class="d-lg-none mb-3 text-right">
        <button class="submit-app-button" @click="submitApp">Submit App</button>
    </div>
    <CarouselHeader /> 
    <div>
      <div class="">
        <h6 class="">NEW APPS</h6>
      </div>
      <div class="hr"></div>
    <div class="new__apps">
      <div
        class=""
        v-for="new_product in products"
        :key="new_product.id"
      >
        <router-link :to="'/product/' + new_product.id">
          <div class="app__list shadow-sm">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + new_product.app_icon
              "
              alt=""
            />
            <div class="">
              <h6 class="text-dark small mt-3" style="min-width: 100%; overflow: hidden">
                {{ new_product.name }}
              </h6>

              <h4 class="small text-dark  text-capitalize">
                {{ new_product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Popular Apps --> 
      <div class="mt-4">
        <h6 class="">POPULAR APPS</h6>
      </div>
      <div class="hr"></div>

    <div class="new__apps">
     
      <div
        class=""
        v-for="product in popular"
        :key="product.id"
      >
        <router-link :to="'/product/' + product.id">
          <div class="app__list shadow-sm ">
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

    <!-- All Products --> 
    <div class=" mt-4">
        <h6 class="">ALL APPS</h6>
      </div>
      <div class="hr"></div>
    <div class="new__apps">
     
      <div
        class=""
        v-for="all_product in all_products"
        :key="all_product.id"
      >
        <router-link :to="'/product/' + all_product.id">
          <div class="app__list shadow-sm">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + all_product.app_icon
              "
              alt=""
            />
            <div class="">
              <h6 class="text-dark small mt-3" style="min-width: 100%; overflow: hidden">
                {{ all_product.name }}
              </h6>

              <h4 class="small text-dark  text-capitalize">
                {{ all_product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CarouselHeader from "@/components/CarouselHeader.vue";
import Swal from 'sweetalert2'
// import StarRating from "vue-star-rating";
export default {
  components: {
    CarouselHeader, 
    // StarRating
  },
  data() {
    return {
      products: [],
      popular: [],
      all_products:[],
    };
  },
  methods: {
    async getProducts() {
      try {
        const res = await this.$store.dispatch("getProducts");
        console.log(res);
        this.products = res.products;
        this.popular = res.popular_products;
        this.all_products = res.all_products;
      } catch (error) {
        console.log(error);
      }
    },
    submitApp(){
      if(!this.$store.getters.isLoggedIn){
         Swal.fire(
          'You are not signed in!',
          'Sign in or register to submit app',
          'warning'
        )
        this.$router.push('/signin');
      }
      else{
        Swal.fire(
          'Welcome!',
          'Submit App Here',
          'success'
        )
        this.$router.push('/submit_app')
      }
    }
  },
  async created() {
    this.getProducts();
  },
  
};
</script>

<style>

.new__apps img {
  height: 100px;
  width: 100px;
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
.submit-app-button {
  padding: 0.2rem 1rem;
  border: 1px solid #d2b681;
  background: #fff;
  border-radius: 3px;
}

@media (max-width: 990px) {
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
@media (max-width: 424px) {
  .new__apps {
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    transition: all 2s;
  }
  .app__list {
    background: transparent;
    box-shadow: unset !important;
  }
  .new__apps img{
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
}
</style>
