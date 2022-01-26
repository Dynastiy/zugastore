<template>
  <div>
    <footer class="footer-14398">
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

  @import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
  
  .footer-14398 {
    /* padding: 3rem 0; */
    background: #212529;
    color: #fff;
  }
  .footer-14398 ul li {
    padding: 0.2rem 0;
  }
  .footer-site-logo {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
    display: block;
  }
  .footer-14398 .content h3 {
    color: #d2b681;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-family: "Fjalla One", sans-serif;
    text-transform: uppercase;
  }
  .links li {
    /* margin-bottom: 10px; */
  }
  .links a {
    color: #fff !important;
    font-size: 0.8rem;
    line-height: 0.8rem;
  }
  .links a:hover {
    color: #d2b681;
    text-decoration: none;
    transition: 1s;
  }

  .link-menu li {
    display: inline-block;
  }
  .link-menu a {
    color: #fff;
    display: inline-block;
    padding: 5px;
  }

  .link-menu a .nav-left li :first-child a {
    padding-left: 0;
  }
  .copyright {
    background: #d2b681;
    color: #000;
    font-weight: bold;
    padding: 0.8rem;
    text-align: center;
  }
  .copyright p {
    margin: 0;
  }
</style>
