<template>
  <div>
    <CarouselHeader /> 
    <div class="">
        <h6 class="font-weight-bold">NEW APPS</h6>
      </div>
      <hr class="hr my-4" />
    <div class="new__apps">
     
      <div
        class=" text-center"
        v-for="new_product in products"
        :key="new_product.id"
      >
        <router-link :to="'/product/' + new_product.id">
          <div class="app__list p-2 ">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + new_product.app_icon
              "
              alt=""
              width="50"
              height="50"
            />
            <div class="">
              <h4 class="text-dark mt-2 font-weight-bold">
                {{ new_product.name }}
              </h4>

              <h4 class="small py-2 bg-dark w-100 text-info font-weight-bold text-capitalize">
                {{ new_product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Popular Apps --> 
    <div class="mt-4">
        <h6 class="font-weight-bold">POPULAR APPS</h6>
      </div>
      <hr class="hr my-4" />
    <div class="new__apps">
     
      <div
        class=" text-center"
        v-for="product in popular"
        :key="product.id"
      >
        <router-link :to="'/product/' + product.id">
          <div class="app__list p-2 ">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + product.app_icon
              "
              alt=""
              width="50"
              height="50"
            />
            <div class="">
              <h4 class="text-dark mt-2 font-weight-bold">
                {{ product.name }}
              </h4>

              <h4 class="small py-2 bg-dark w-100 text-info font-weight-bold text-capitalize">
                {{ product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- All Products --> 
    <div class=" mt-4">
        <h6 class="font-weight-bold">ALL APPS</h6>
      </div>
      <hr class="hr my-4" />
    <div class="new__apps">
     
      <div
        class=" text-center"
        v-for="all_product in all_products"
        :key="all_product.id"
      >
        <router-link :to="'/product/' + all_product.id">
          <div class="app__list p-2 ">
            <img
              :src="
                'https://api.africanapp.store/softwares/photos/' + all_product.app_icon
              "
              alt=""
              width="50"
              height="50"
            />
            <div class="">
              <h4 class="text-dark mt-2 font-weight-bold">
                {{ all_product.name }}
              </h4>

              <h4 class="small py-2 bg-dark w-100 text-info font-weight-bold text-capitalize">
                {{ all_product.file_size }}
              </h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselHeader from "@/components/CarouselHeader.vue";
export default {
  components: {
    CarouselHeader,
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
        console.log(res.products);
        this.products = res.products;
        console.log(this.products);
        this.popular = res.popular_products;
        console.log(this.popular);
        this.all_products = res.all_products.data
        console.log(this.all_products);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.new__apps img {
  /* object-fit: cover; */
  height: 50px;
  width: 50px;
  /* width: ; */
  /* border-radius: 20px; */
}
.hr {
  background: #d7d7d7;
}
.app__list {
  /* background: #000; */
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.15);
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
}
h4.small {
  border-radius: 15px;
}
.new__apps {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}
.new__apps p {
  margin: 0;
}

@media (max-width: 990px) {
  .new__apps {
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: all 2s;
  }
  .new__apps div {
    /* margin-bottom: 20px; */
  }
}
</style>
