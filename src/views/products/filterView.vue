<template>
  <div>
     <div>
      <div class="mt-4 d-flex align-items-center justify-content-between">
        <h5 class="font-weight-bold"> {{ apps_type }} </h5>
      </div>
      <div class="hr"></div>
    <div class="new__apps">
      <div
        class=""
        v-for="new_product in dataObj"
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
    <nav>
          <ul
            class="pagination pagination-md d-flex justify-content-center align-items-center mt-5" style="gap:20px"
          >
            <li class="page-item" :class="{ disabled: dataArr.total === 0 }">
              <a
                href="javascript:void(0)"
                class="page-link"
                @click="next(dataArr.current_page - 1)"
              >
                &laquo;
              </a>
            </li>
            <li>
               Showing <span> {{ dataArr.from }} - {{ dataArr.to }} </span> of <span> {{ dataArr.total }} </span>
            </li>
            <!-- <li
              class="page-item"
              v-for="page in dataArr.last_page"
              :key="page"
              :class="{active: dataArr.current_page === page }"
            >
              <a
                href="javascript:void(0)"
                @click.prevent="next(page)"
                class="page-link"
              >
                {{ page}}
              </a>
            </li> -->
            <li
              class="page-item"
              :class="{ disabled: dataArr.current_page === dataArr.last_page }"
            >
              <a
                href="javascript:void(0)"
                class="page-link"
                @click="next(dataArr.current_page + 1)"
              >
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["filter"],
  data: () => {
    return {
      baseUrl: "https://api.africanapp.store",
      dataObj: "",
      apps_type: '',
      dataArr: ''
    };
  },
  methods: {
    async getProducts(page = 1) {
      let filter = this.$route.query.type;
      const res = await axios.get(this.baseUrl + "/api/" + filter, {
           params: {
            page,
          },
      });
      if (filter == "all-apps") {
        console.log(res.data.all_apps);
        this.dataObj = res.data.all_apps.data
        this.dataArr = res.data.all_apps
        this.apps_type = "ALL APPS"
      } else if (filter == "popular-apps") {
        console.log(res.data.popular_apps);
        this.dataObj = res.data.popular_apps.data
        this.dataArr = res.data.popular_apps
        this.apps_type = 'POPULAR APPS'
      } else {
        console.log(res.data.new_products);
        this.dataObj = res.data.new_products.data
        this.dataArr = res.data.new_products
        this.apps_type = 'NEW APPS'
      }
    },
    next(page) {
      this.getProducts(page);
    },
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
  background: #fff;
}
.new__apps img:hover {
  background: rgba(0, 0, 0, 0.01);
}
.hr {
  background: #d2b681;
  height: 1px;
  margin: 0.3rem 0;
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
.see--more {
  background: #a67b3e;
  font-size: 0.8rem;
  color: #fff;
  padding: 0.2rem 0.6rem;
  border: none;
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
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.01);
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
    width: 80px;
    height: 80px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.01);
  }
}
</style>
