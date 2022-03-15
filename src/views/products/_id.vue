<template>
  <div>
    <div class="web__single__app">
      <div class="">
        <div class="view">
          <div class="left__side bg-white shadow-sm p-3">
            <div class="top__data d-flex" style="gap: 20px">
              <div class="feat__image">
                <img
                  :src="
                    'https://api.africanapp.store/softwares/photos/' +
                    product.app_icon
                  "
                  alt=""
                />
              </div>
              <div
                class="content"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  width: 100%;
                "
              >
                <h3 class="">{{ product.name }}</h3>
                <div class="d-flex justify-content-between">
                  <p class="small">{{ product.developer }}</p>
                  <p class="small">
                    <span
                      class="font-weight-bold d-flex align-items-center"
                      v-if="rating"
                    >
                      <span v-if="rating.avg_rating == null" class="small mr-3">
                        No rating yet
                      </span>
                      <span v-else class="mr-4">
                        <star-rating
                          v-model="rating.avg_rating"
                          v-bind:max-rating="5"
                          inactive-color="#000"
                          active-color="#ffd700"
                          v-bind:star-size="12"
                          :show-rating="false"
                        ></star-rating>
                      </span>
                      <span class="">
                        <i
                          class="fa fa-user text-secondary mt-2"
                          aria-hidden="true"
                        ></i>
                        {{ rating.sum_rating }}
                      </span>
                    </span>
                  </p>
                </div>
                <div class="text-right">
                  <button
                    class="btn bg-info rounded-lg text-white font-weight-bold"
                    @click="downloadApp"
                    style="font-size: 0.7rem"
                  >
                    DOWNLOAD
                  </button>
                </div>
              </div>
            </div>
            <div class="images d-flex mt-5" style="gap: 10px; width:100%; overflow-x: scroll">
              <div>
               
                <!-- Button trigger modal -->
                <button type="button"  data-toggle="modal" data-target="#exampleModal">
                   <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_one" class="" alt="">
                </button>

                <!-- Modal -->
                <div class="modal fade" style="min-height: 100vh" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_one" class="modal-img" alt="">
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
               <div>
               
                <!-- Button trigger modal -->
                <button type="button"  data-toggle="modal" data-target="#exampleModal2">
                   <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_two" class="" alt="">
                </button>

                <!-- Modal -->
                <div class="modal fade" style="min-height: 100vh" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_two" class="modal-img" alt="">
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
               <div>
               
                <!-- Button trigger modal -->
                <button type="button"  data-toggle="modal" data-target="#exampleModal3">
                   <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_three" class="" alt="">
                </button>

                <!-- Modal -->
                <div class="modal fade" style="min-height: 100vh" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_three" class="modal-img" alt="">
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
               <div>
               
                <!-- Button trigger modal -->
                <button type="button"  data-toggle="modal" data-target="#exampleModal4">
                   <img :src="'https://api.africanapp.store/softwares/photos/'+product.photo_four" class="" alt="">
                </button>

                <!-- Modal -->
                <div class="modal fade" style="min-height: 100vh" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img :src="'https://api.africanapp.store/softwares/photos/'+ product.photo_four" class="modal-img" alt="">
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mid__content">
              <div class="mt-4">
                <h5 class="mb-3">Description</h5>
                <p class="small">{{ product.description }}</p>
              </div>
              <div class="mt-3">
                <h5 class="mb-3 ">Tags</h5>
                <button
                  class="btn btn__tag  btn-outline-info py-1 px-3"
                  v-if="product.tag" style="font-size: 0.8rem"
                >
                  {{ product.tag.name }}
                </button>
              </div>
              <div class="mt-5">
                <h5 class="mb-4">User Reviews</h5>
                <div
                  v-if="reviews.length === 0"
                  class="alert alert-danger"
                  role="alert"
                >
                  No reviews for this product yet
                </div>
                <div>
                  <div
                    class="review_content mb-5"
                    v-for="review in reviews"
                    :key="review.id"
                  >
                    <div class="d-flex">
                      <div
                        v-if="review"
                        class="avatar mr-3 text-uppercase"
                        :class="[review.reviewer_name.charAt(0)]"
                      >
                        {{ review.reviewer_name.charAt(0) }}
                      </div>
                      <div>
                        <h6 class="small font-weight-bold text-capitalize mb-1">
                          {{ review.reviewer_name }}
                        </h6>
                        <div class="d-flex align-items-center">
                          <star-rating
                            v-model="review.rating"
                            v-bind:max-rating="5"
                            inactive-color="#000"
                            active-color="#ffd700"
                            v-bind:star-size="13"
                            :show-rating="false"
                          ></star-rating>
                          <!-- <small class="text-muted">Stars</small> -->
                          <small class="text-muted ml-4">
                            {{ review.created_at | formatDate }}
                          </small>
                        </div>
                        <div class="main_content mt-3">
                          <p class="small">{{ review.comment }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hr2"></div>
            <div class="additional_info mt-3">
              <h6 class="mb-3">Additional Information</h6>
               <div style="display:grid; grid-template-columns: repeat(3, 1fr); grid-gap:1.2rem">
                <div v-if="product.category" class="text-capitalize"> 
                  <h6 class="font-weight-bold small">Category</h6>
                  <p class="small">{{ product.category.category_name }}</p>
                </div>
                <div class="text-capitalize">
                  <h6 class="font-weight-bold small">Platform</h6>
                  <p class="small">{{ product.platform }}</p>
                </div>
                <div class="text-capitalize">
                  <h6 class="font-weight-bold small">Developer</h6>
                  <p class="small">{{ product.developer }}</p>
                </div>
                <div class="text-capitalize">
                  <h6 class="font-weight-bold small">File Size</h6>
                  <p class="small">{{ product.file_size }}</p>
                </div>
                <div class="text-capitalize">
                  <h6 class="font-weight-bold small">Downloads</h6>
                  <p class="small">{{ product.downloads }}</p>
                </div>
                <div class="text-capitalize">
                  <h6 class="font-weight-bold small">License</h6> 
                  <p class="small" v-if="product.license === 'paid'">
                    ${{ product.price }}</p
                  >
                  <p class="small" v-else>FREE</p>
                </div>
                <div>
                  <h6 class="font-weight-bold small">Last Updated</h6>
                  <p class="small">{{ product.last_update | formatDate }}</p>
                </div>
              </div>
          </div>
          </div>
          <div class="right__side bg-white shadow-sm p-3">
            <h5 class="pl-3 mb-3">Similar Apps</h5>
           <div class="" v-for="similar_app in similar_apps" :key="similar_app.id">
             <router-link :to="'/product/' + similar_app.id">
               <div class="shadow-sm p-3 d-flex align-items-center" style="gap:20px">
               <img
                  :src="
                    'https://api.africanapp.store/softwares/photos/' +
                    similar_app.app_icon
                  "
                  class="immagg"
                  alt=""
                  style="width 90px; height:90px"
                />
             <div>
               <h6 class="text-dark"> {{ similar_app.name }} </h6>
               <p class="small m-0"> {{ similar_app.developer }} </p>
                <p class="text-secondary m-0 small"> {{ similar_app.file_size }} </p>
             </div>
             </div>
             </router-link>
           </div>
        
        
        
        </div>
        </div>
      </div>
    </div>

    <!-- Mobile View of Single App -->
    <div class="bg-white mobile__single__app">
      <div class="">
        <div class="view">
          <div class="left__side">
            <div class="top__data d-flex align-items-center" style="gap: 10px">
              <div class="feat__image mr-2">
                <img
                  :src="
                    'https://api.africanapp.store/softwares/photos/' +
                    product.app_icon
                  "
                  class="immg"
                  alt=""
                />
              </div>
              <div class="content">
                <h5 class="font-weight-bold">{{ product.name }}</h5>
                <p class="text-capitalize small">{{ product.developer }}</p>
              </div>
            </div>
            <div class="mt-4 d-flex align-items-center justify-content-between">
              <div class="text-center">
                <h5 class="font-weight-bold">
                  <span v-if="rating.avg_rating == null" class="small">
                    No rating yet
                  </span>
                  <span v-else> {{ rating.avg_rating.toFixed(1) }} </span>
                </h5>
                <p class="small">{{ rating.sum_rating }} Reviews</p>
              </div>
              <div class="vl"></div>
              <div class="text-center">
                <i class="fa fa-download fa--download" aria-hidden="true"></i>
                <p>{{ product.file_size }}</p>
              </div>
              <div class="vl"></div>
              <div class="text-center">
                <h5>{{ product.downloads }}</h5>
                <p class="small font-weight-bold">Downloads</p>
              </div>
            </div>
            <button
              class="btn mt-4 w-100 bg-info rounded-lg font-weight-bold text-white py-1"
              @click="downloadApp" style="font-size: 14px"
            >
              DOWNLOAD
            </button>
            <div
              class="images d-flex mt-5"
              style="gap: 10px; width: 100%; overflow-x: scroll"
            >
              <div>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <img
                    :src="
                      'https://api.africanapp.store/softwares/photos/' +
                      product.photo_one
                    "
                    class=""
                    alt=""
                  />
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  style="min-height: 100vh"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img
                          :src="
                            'https://api.africanapp.store/softwares/photos/' +
                            product.photo_one
                          "
                          class="modal-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                >
                  <img
                    :src="
                      'https://api.africanapp.store/softwares/photos/' +
                      product.photo_two
                    "
                    class=""
                    alt=""
                  />
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  style="min-height: 100vh"
                  id="exampleModal2"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img
                          :src="
                            'https://api.africanapp.store/softwares/photos/' +
                            product.photo_two
                          "
                          class="modal-img"
                          alt=""
                        />
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal3"
                >
                  <img
                    :src="
                      'https://api.africanapp.store/softwares/photos/' +
                      product.photo_three
                    "
                    class=""
                    alt=""
                  />
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  style="min-height: 100vh"
                  id="exampleModal3"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img
                          :src="
                            'https://api.africanapp.store/softwares/photos/' +
                            product.photo_three
                          "
                          class="modal-img"
                          alt=""
                        />
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal4"
                >
                  <img
                    :src="
                      'https://api.africanapp.store/softwares/photos/' +
                      product.photo_four
                    "
                    class=""
                    alt=""
                  />
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  style="min-height: 100vh"
                  id="exampleModal4"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <img
                          :src="
                            'https://api.africanapp.store/softwares/photos/' +
                            product.photo_four
                          "
                          class="modal-img"
                          alt=""
                        />
                      </div>
                      <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mid__content">
              <div class="mt-4">
                <h6 class=" mb-3 font-weight-bold">Description</h6>
                <p>{{ product.description }}</p>
              </div>
              <div class="mt-4">
                <h6 class="mb-3 font-weight-bold">Tags</h6>
                <button
                  class="btn btn__tag btn-outline-info py-1 px-3"
                  v-if="product.tag"
                >
                  {{ product.tag.name }}
                </button>
              </div>
              <div class="mt-4">
                <h6 class="font-weight-bold mb-3">User Reviews</h6>
                <div
                  v-if="reviews.length === 0"
                  class="text-danger small"
                  role="alert"
                >
                  No reviews for this product yet
                </div>
                <div>
                  <div
                    class="review_content mb-5"
                    v-for="review in reviews"
                    :key="review.id"
                  >
                    <div class="d-flex">
                      <div
                        v-if="review"
                        class="avatar mr-3 text-uppercase"
                        :class="[review.reviewer_name.charAt(0)]"
                      >
                        {{ review.reviewer_name.charAt(0) }}
                      </div>
                      <div>
                        <h4 class="font-weight-bold text-capitalize">
                          {{ review.reviewer_name }}
                        </h4>
                        <div class="d-flex align-items-center">
                          <star-rating
                            v-model="review.rating"
                            v-bind:max-rating="5"
                            inactive-color="#000"
                            active-color="#ffd700"
                            v-bind:star-size="13"
                            :show-rating="false"
                          ></star-rating>
                          <!-- <small class="text-muted">Stars</small> -->
                          <small class="text-muted ml-4">
                            {{ review.created_at | formatDate }}
                          </small>
                        </div>
                        <div class="main_content mt-1">
                          <p>{{ review.comment }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  name: "IdPage",
  components: {
    StarRating,
  },
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      reviews: [],
      rating: "",
      similar_apps: []
    };
  },

  methods: {
    async getSingleProduct() {
      try {
        const res = await this.$store.dispatch("getSingleProduct", this.id);
        console.log(res);
        console.log(res.product);
        this.rating = res;
        this.product = res.product;
        console.log(res.product.reviews);
        this.similar_apps = res.similar_product
        console.log(this.similar_apps);
        this.reviews = res.product.reviews;
      } catch (error) {
        console.log(error);
      }
    },
    
    async downloadApp() {
      // alert(this.id)
      // const res = await axios.get("http://zuga.divcommanifold.com/api/download-app/"+this.id)
      axios({
        url: "https://api.africanapp.store/api/download-app/" + this.id,
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fURL = document.createElement("a");
          console.log(response.data);
          fURL.href = fileURL;
          fURL.setAttribute("download", `${this.product.name}.apk`);
          document.body.appendChild(fURL);
          fURL.click();
        })
        .finally(() => {
          this.getSingleProduct();
        });

      // self.downloadProduct = res.data
    },
  },
  async created() {
    this.getSingleProduct();
  },
};
</script>

<style>
* {
  /* font-family: "Work Sans", sans-serif; */
  margin: 0;
  padding: 0;
}
 .close {
    font-size: 5rem;
    color: #fff;
    opacity: unset;
  }
  .modal-content {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    min-height: 100vh;
    border-radius: none !important;
    position: fixed;
    top: 0;
    left: 0;
  }
  .modal-header {
    border-bottom: none;
    padding: 0;
  }
  .modal-img {
    height: 25rem !important;
    width: 15rem !important;
  }
  .images button {
    border: none;
  }
.mobile__single__app {
  display: none;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.7rem;
}
.a,
.b,
.c,
.d,
.e,
.A,
.B,
.C,
.D,
.E {
  background-color: #ff0000;
  color: #fff;
}
.f,
.g,
.h,
.i,
.j,
.J,
.I,
.H,
.G,
.F {
  background-color: #ffb20f;
  color: #fff;
}
.K,
.L,
.M,
.N,
.O,
.P,
.m,
.n,
.o,
.p,
.k,
.l {
  background-color: #000;
  color: #fff;
}
.q,
.r,
.s,
.t,
.u,
.Q,
.R,
.S,
.T,
.U {
  background-color: #01445f;
  color: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
.right__side p {
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
  height: 100px;
  width: 100px;
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

@media (max-width: 990px) {
  .view {
    display: unset;
  }
  .web__single__app {
    display: none;
  }
  .mobile__single__app {
    display: unset;
  }
  h3,
  h4 {
    font-weight: bold;
  }
  .close {
    font-size: 5rem;
    color: #fff;
    opacity: unset;
  }
  .modal-content {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    min-height: 100vh;
    border-radius: none !important;
    position: fixed;
    top: 0;
    left: 0;
  }
  .modal-header {
    border-bottom: none;
    padding: 0;
  }
  .modal-img {
    height: 43rem !important;
    width: 23rem !important;
  }
  .images button {
    border: none;
  }
}
</style>
