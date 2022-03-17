<template>
    <div>
        <h3>My Apps and Games</h3>
        <div v-show="!isLoggedIn">
            <h6 class="mt-3">Please <router-link to="/signin">Login</router-link> if you have an account</h6>
            <h6>or</h6>
            <router-link to="/signup">Create a new Account</router-link>
        </div>
        <div v-show="isLoggedIn" class="mt-4">
            <div class="no__apps" v-if="no_apps">
                <div class="alert alert-danger" role="alert">
                    <strong>No Apps yet</strong>
                </div>
                <router-link to="/submit_app">
                    <button class="bg-info border-0 px-4 py-1 text-white rounded-lg"> Create your first App </button>
                </router-link>
            </div>
            <div v-else>
                <div class="text-right">
                     <router-link to="/submit_app">
                    <button class="bg-info border-0 px-4 py-1 text-white rounded-lg"> Submit New App </button>
                </router-link>
                </div>

                <!-- App Table -->
                 <div class="row m-t-30" id="main">
      <div class="col-lg-12">
        <!-- <h5 class="font-weight-bold mb-4">{{ currentRouteName }} Apps</h5> -->
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead class="thead-light">
              <tr>
                <!-- <th>Id</th> -->
                <th>Name of App</th>
                <th>Size</th>
                <th>Version</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in all_products" :key="product.id">
                <!-- <td>12324233DED  {{ products }} </td> -->
                <td class="text-capitalize"> {{ product.name }} </td>

                <td> {{ product.file_size }} </td>
                <!-- <td>Blockchain</td> -->
                <td>{{ product.version}} </td>
                <td>
                  <span class="badge badge-warning p-1" v-if="product.status === 'pending' "> {{ product.status }} </span>
                  <span class="badge badge-success p-1" v-else-if="product.status === 'approved' ">{{ product.status }}</span>
                  <span class="badge badge-danger p-1" v-else>{{ product.status }}</span>
                </td>
                <td class="d-flex " style="gap:10px">
                  <router-link :to="'/product/' + product.id"><button class="view-more-button">View More</button> </router-link>
                  <router-link :to="'/update-app/' +product.id "><button class="update">Update</button></router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table-responsive -->
      </div>
      </div>
            </div>
        </div>
    </div>
</template>

<script>
import helpers from "@/helpers/index";
export default {
    data(){
        return {
            all_products: [],
            no_apps: false
        }
    },
    methods:{
        async getProducts(){
            const res = await helpers.getDevProducts();
            console.log(res.dev_products.data);
            this.all_products = res.dev_products.data
            if(res.dev_products.data.length === 0 ){
                this.no_apps = true
            }
        }
    },
    computed: {
        isLoggedIn: function() {
          return this.$store.getters.isLoggedIn;
        }
    },
    async created(){
        this.getProducts();
    }
}
</script>

<style>
.table .thead-light th {
    background-color: var(--light-color);
    border-color: var(--primary-color);
    color: var(--dark);
}
.table td, .table th {
    vertical-align: middle;
}
.view-more-button {
    background: var(--primary-color);
    color: var(--light);
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    border: none;
}
table tr, table td {
    font-size: 0.8rem;
}
.update {
    background: green;
    color: var(--light);
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    border: none;
}
</style>