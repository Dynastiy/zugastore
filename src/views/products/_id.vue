<template>
  <div>
    <div class="bg-white web__single__app">
      <div class="container py-5">
        <div class="view">
          <div class="left__side">
            
            <div class="top__data d-flex" style="gap: 10px">
              <div class="feat__image">
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.app_icon" width="100" height="100" alt="">
              </div>
              <div class="content">
                
                <h6 class=" font-weight-bold mb-3"> {{ product.name }} </h6>
                <p class=" mb-2">Rating: <span class="font-weight-bold" v-if="rating"> {{ rating.avg_rating.toFixed(1) }} </span> (Reviews: {{ rating.sum_rating }})</p>
              </div>
            </div>
            <div class="mid__content">
              <div class="mt-5">
                <h5 class=" font-weight-bold">
                Description
              </h5>
              <p> {{ product.description }} </p>
              </div>
              <div class="mt-5">
                <h5 class=" mb-3 font-weight-bold">
                Tags
              </h5>
              <button class="btn btn__tag btn-outline-info py-1 px-3" v-if="product.tag"> {{ product.tag.name }} </button>
              </div>
               <div class="mt-5">
                <h5 class=" font-weight-bold mb-4">
                User Reviews
                </h5>
                <div v-if="reviews.length === 0" class="alert alert-danger" role="alert">
                  No reviews for this product yet
                </div>
                <div>
                  <div class="review_content mb-5" v-for="review in reviews" :key="review.id">
                    <div class="d-flex">
                      <div v-if="review" class="avatar mr-3 text-uppercase" :class="[review.reviewer_name.charAt(0)]"  >
                        {{ review.reviewer_name.charAt(0) }}
                      </div>
                      <div>
                        <h6 class="font-weight-bold text-capitalize mb-1"> {{review.reviewer_name }} </h6>
                        <div class="d-flex align-items-center">
                            <star-rating v-model="review.rating"
                            v-bind:max-rating="5"
                            inactive-color="#000"
                            active-color="#ffd700"
                            v-bind:star-size="13" :show-rating = false></star-rating>
                          <!-- <small class="text-muted">Stars</small> -->
                          <small class="text-muted ml-4"> {{ review.created_at | formatDate }} </small>
                        </div>
                        <div class="main_content mt-3">
                          <p> {{ review.comment }} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right__side">
            <button class="btn w-100 bg-info rounded-lg font-weight-bold text-white py-3" @click="downloadApp">DOWNLOAD</button>
            <div>
              <p v-if="product.category" class="text-capitalize"><span class="font-weight-bold">Category:</span> {{ product.category.category_name }}  </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Platform:</span> {{ product.platform }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Developer:</span> {{ product.developer }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">File Size:</span> {{ product.file_size }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Visits:</span> {{ product.visits }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">License:</span>  <span v-if="product.license === 'paid' "> ${{ product.price }}</span> <span v-else>FREE</span>  </p>
              <hr class="hr bg-info">
              <p><span class="font-weight-bold">Last Updated:</span> {{ product.last_update | formatDate }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Mobile View of Single App -->
    <div class="bg-white mobile__single__app">
      <div class="container">
        <div class="view">
          <div class="left__side">
            
            <div class="top__data d-flex align-items-center" style="gap: 10px">
              <div class="feat__image mr-2">
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.app_icon" class="immg" alt="">
              </div>
              <div class="content">
                <h3 class=" font-weight-bold"> {{ product.name }} </h3>
                <p class="text-capitalize"> {{ product.developer }} </p>
              </div>
            </div>
            <div class="mt-4 d-flex align-items-center justify-content-between">
              <div class="text-center">
                <h4 class="font-weight-bold"v-if="rating"> {{ rating.avg_rating.toFixed(1) }} </h4>
                <p> {{ reviews.length }} Reviews </p>
              </div>
              <div class="vl">
              </div>
              <div class="text-center">
               <i class="fa fa-download fa--download" aria-hidden="true"></i>
                <p> {{ product.file_size }} </p>
              </div>
              <div class="vl">
              </div>
              <div class="text-center">
                <h4> {{ product.visits }} </h4>
                <p> Downloads </p>
              </div>
            </div>
            <button class="btn mt-4 w-100 bg-info rounded-lg font-weight-bold text-white py-1" @click="downloadApp">DOWNLOAD</button>
            <div class="images d-flex mt-4" style="gap: 10px; width:100%; overflow-x: scroll">
              <div>
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_one" class="" alt="">
              </div>
              <div>
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_two" class="" alt="">
              </div>
              <div>
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_three" class="" alt="">
              </div>
              <div>
                <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_four" class="" alt="">
              </div>
            </div>
            <div class="mid__content">
              <div class="mt-4">
                <h3 class=" font-weight-bold mb-3">
                Description
              </h3>
              <p> {{ product.description }} </p>
              </div>
              <div class="mt-4">
                <h3 class=" mb-3 font-weight-bold">
                Tags
              </h3>
              <button class="btn btn__tag btn-outline-info py-1 px-3" v-if="product.tag"> {{ product.tag.name }} </button>
              </div>
               <div class="mt-4">
                <h3 class=" font-weight-bold mb-3">
                User Reviews
                </h3>
                <div v-if="reviews.length === 0" class="text-danger" role="alert">
                  No reviews for this product yet
                </div>
                <div>
                  <div class="review_content mb-5" v-for="review in reviews" :key="review.id">
                    <div class="d-flex">
                      <div v-if="review" class="avatar mr-3 text-uppercase" :class="[review.reviewer_name.charAt(0)]"  >
                        {{ review.reviewer_name.charAt(0) }}
                      </div>
                      <div>
                        <h4 class="font-weight-bold text-capitalize"> {{review.reviewer_name }} </h4>
                        <div class="d-flex align-items-center">
                            <star-rating v-model="review.rating"
                            v-bind:max-rating="5"
                            inactive-color="#000"
                            active-color="#ffd700"
                            v-bind:star-size="13" :show-rating = false></star-rating>
                          <!-- <small class="text-muted">Stars</small> -->
                          <small class="text-muted ml-4"> {{ review.created_at | formatDate }} </small>
                        </div>
                        <div class="main_content mt-1">
                          <p> {{ review.comment }} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="right__side">
            
            <div>
              <p v-if="product.category" class="text-capitalize"><span class="font-weight-bold">Category:</span> {{ product.category.category_name }}  </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Platform:</span> {{ product.platform }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Developer:</span> {{ product.developer }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">File Size:</span> {{ product.file_size }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">Visits:</span> {{ product.visits }} </p>
              <hr class="hr bg-info">
              <p class="text-capitalize"><span class="font-weight-bold">License:</span>  <span v-if="product.license === 'paid' "> ${{ product.price }}</span> <span v-else>FREE</span>  </p>
              <hr class="hr bg-info">
              <p><span class="font-weight-bold">Last Updated:</span> {{ product.last_update | formatDate }} </p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StarRating from 'vue-star-rating';
export default {
  name: 'IdPage',
  components: {
  StarRating
},
data(){
  return {
    product: {},
    id: this.$route.params.id,
    reviews: [],
    rating: '',
  }
},
  
 methods:{
    async getSingleProduct() {
        try {
          const res = await this.$store.dispatch("getSingleProduct", this.id);
          console.log(res.product);
          this.rating = res
          this.product = res.product
          console.log(res.product.reviews);
          this.reviews = res.product.reviews;
        } catch (error) {
          console.log(error);
        }
      },
      async downloadApp(){
        // alert(this.id)
          // const res = await axios.get("http://zuga.divcommanifold.com/api/download-app/"+this.id)
          axios({
                    url: "https://api.africanapp.store/api/download-app/"+this.id,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fURL = document.createElement('a');
                    console.log(response.data);
                     fURL.href = fileURL;
                     fURL.setAttribute('download', `${this.product.name}.apk`);
                     document.body.appendChild(fURL);
    
                     fURL.click();
                });
          
    // self.downloadProduct = res.data
      }
  },
  async created(){
    this.getSingleProduct();
      
  }
}
</script>

<style>
* {
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  padding: 0;
}
.mobile__single__app {
  display: none;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.7rem;
}
.a, .b, .c, .d, .e, .A, .B, .C, .D, .E {
    background-color: #FF0000 ;
    color: #fff;
    }
    .f, .g, .h, .i, .j, .J, .I, .H, .G, .F {
        background-color: #FFB20F;
        color: #fff;
    }
    .K, .L, .M, .N, .O, .P, .m, .n, .o, .p, .k, .l {
        background-color: #000;
        color: #fff;
    }
    .q, .r, .s, .t, .u, .Q, .R, .S, .T, .U {
        background-color: #01445f ;
        color: #fff;
    }
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
.right__side p{
  color: #000;
  margin-top: 1rem;
  
}
.view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.btn__tag {
  background: #d2b68146;
  border: 1px solid #d2b681;
  color: #000;
  padding: 0.1rem 4rem !important;
  border-radius: 20px;
}
.feat__image img {
  /* object-fit: contain; */
    height: 90px;
    width: 90px;
}
.images div img {
  height: 150px;
    width: 100px;
    border-radius: 5px;
    object-fit: cover;
}
.vl {
  width: 0.2px;
  height: 3rem;
  background-color: #999;
}
.fa--download {
  font-size: 1.5rem;
}
.immg {
  height: 60px !important;
  width: 60px !important;
}
a:hover {
  text-decoration: none;
}

@media (max-width: 990px){
  .view {
    display: unset;
  }
  .web__single__app{
    display: none;
  }
  .mobile__single__app{
    display: unset;
  }
  h3, h4 {
    font-weight: bold;
  }
}
</style>
