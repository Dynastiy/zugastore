<template>
  <div>
    <!-- <footer class="footer-14398">
      <div class="content pt-5 container">
        <div class="row mb-5">
          <div class="col-md-3">
            <h3>app portal</h3>
            <ul class="list-unstyled links">
              <li><a href="#">Site Description</a></li>
              <li><a href="javascript:void(0)" @click="showModal">Submit your App</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>Pages</h3>
            <ul class="list-unstyled links">
              <li><router-link to="/">Contact Us</router-link></li>
              <li><router-link to="/">About Us</router-link></li>
              <li><router-link to="/">Terms of Service</router-link></li>
              <li><router-link to="/">Privacy Policy</router-link></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h3>Categories</h3>
              <ul class="list-unstyled links ">
                <li class="text-capitalize" v-for="category of categories" :key="category.id"><a href="#"> {{ category.category_name }} </a></li>
                
              </ul>
          </div>
          <div class="col-md-3">
            <h3>contact</h3>
            <ul class="list-unstyled links">
              <li> <i class="fa fa-envelope" aria-hidden="true"></i> <a href="#">email</a></li>
              <li> <i class="fa fa-phone" aria-hidden="true"></i> <a href="#">phone number</a></li>
              <li><a href="#"> <i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
              <li><a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
              <li><a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        
          <p class="font-weight-bold">©Copyright 2021 Blockmay.com</p>
        
      </div>
    </footer> -->
    <footer>
      <div class="p-3 d-flex justify-content-center" style="gap: 30px">
          <p class="small text-dark" > <router-link to="/">Privacy Policy</router-link> </p>
          <p class="small text-dark" > <router-link to="/">Terms of Service</router-link> </p>
          <p class="small text-dark" > <router-link to="/">About</router-link> </p>
          <p class="small text-dark">©Copyright 2021 Blockmay.com</p>
        
      </div>
    </footer>
     <submit-app v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import submitApp from './submitApp.vue';
export default {
  components: { submitApp },
  data(){
    return {
      categories: [],
      isModalVisible: false,
    }
  },
  methods:{
     showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    async getCategories() {
        try {
          const res = await this.$store.dispatch("getCategories");
          // console.log(res.categories);
          this.categories = res.categories
        } catch (error) {
          console.log(error);
        }
      },
  },
  async created(){
    this.getCategories();
  }
}
</script>
<style scoped>

</style>
