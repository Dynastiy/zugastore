<template>
    <div>
        <div class="mb-4">
            <h4 class="font-weight-bold">Update App</h4>
        </div>
        <form action="" @submit.prevent="submit">
            <div  class="row">
                <div class="col-md-3 mb-3">
                    <label for="">Name of App</label> 
                    <input type="text" id="" v-model="formFields.name" class="form-control" placeholder="Enter App Name" readonly>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="">Name of Developer</label> 
                    <input  type="text" id="" v-model="formFields.developer" class="form-control" placeholder="" readonly>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="">Company Name</label> <br>
                    <input type="text" id="" v-model="formFields.company_name" class="form-control" placeholder="Enter Company Name">
                </div>
                <div class="col-md-3 mb-3">
                    <label for="">Platform</label> <br>
                    <select v-model="formFields.platform" id="select-platform" class="form-control">
                        <option value="" > --- </option>
                        <option value="android">Android</option>
                        <option value="ios">iOS</option>
                    </select>
                </div>
            </div>
            <div  class="row">
                <div class="col mb-3">
                    <label for="">License</label> 
                    <select v-model="formFields.license" @change="togglePrice()" id="select-license" class="form-control">
                        <option value="" > --- </option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
                <div class="col mb-3">
                    <label for="">Price</label> 
                    <input v-model="formFields.price" :disabled="disabled" type="number" id="" class="form-control" placeholder="">
                </div>
                <div class="col mb-3">
                    <label for="">Select Tag</label> <br>
                    <select readonly v-model="formFields.tag_id" id="select-tag" class="form-control">
                        <option value= ""> --- </option>
                        <option :value="tag.id" v-for="tag in tags" :key="tag.id"> {{ tag.name }} </option>
                        
                    </select>
                </div>
                 <div class="col mb-3">
                    <label for="">Version</label> 
                    <input v-model="formFields.version" type="text" id="" class="form-control" placeholder="">
                </div>
                <div class="col mb-3">
                    <label for="">Select Category</label> <br>
                    <select readonly v-model="formFields.category_id" id="select-category" class="form-control">
                        <option value="" > --- </option>
                        <option v-for="category in categories" :key="category.id" :value="category.id" > {{ category.category_name }} </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <label for="">App Icon</label>
                    <input type="file" class="" id="app-icon"  @change="appIconUpload($event)" >
                </div>
                <div class="col-md-4 mb-3">
                    <label for="">App File</label>
                    <input type="file" class="" id="app-icon"  @change="appFileUpload($event)" >
                </div>
                <div class="col-md-4 mb-3">
                    <label for="">App Image 1 </label>
                    <input type="file" class="" id="app-icon"  @change="photoOneUpload($event)" >
                </div>            
            </div>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <label for="">App Image 2</label>
                    <input type="file" class="" id="app-icon"  @change="photoTwoUpload($event)" >
                </div>
                <div class="col-md-4 mb-3">
                    <label for="">App Image 3</label>
                    <input type="file" class="" id="app-icon"  @change="photoThreeUpload($event)" >
                </div>
                <div class="col-md-4 mb-3">
                    <label for="">App Image 4 </label>
                    <input type="file" class="" id="app-icon"  @change="photoFourUpload($event)" >
                </div>            
            </div>
            <div class="mb-3">
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">App Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formFields.description"></textarea>
                </div>   
            </div>
             <div class="text-center">
        <div class="d-flex justify-content-center" v-if="loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <button v-if="!loading"
          class="border-0 bg-info py-2 px-5 rounded-lg text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
        </form>
    </div>
</template>

<script>
import helpers from '@/helpers/index.js'
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    data(){
        return{
            disabled: true,
            categories: '',
            tags: '',
            user: {},
            loading: '',
            id: this.$route.params.id,
            formFields: {
                company_name: '',
                name: '',
                description: '',
                price: null,
                license: '',
                developer: '',
                platform: '',
                tag_id: '',
                version: '',
                category_id: '',
                app_icon: null,
                app_file: null,
                photo_one: null,
                photo_two: null,
                photo_three: null,
                photo_four: null
            }
        }
    },
    methods:{
        appIconUpload(){
        var input = event.target;
        this.formFields.app_icon = input.files[0];
        console.log(this.formFields.app_icon);
        },
        appFileUpload(){
        var input = event.target;
        this.formFields.app_file = input.files[0];
        console.log(this.formFields.app_file);
        },
        photoOneUpload(){
        var input = event.target;
        this.formFields.photo_one = input.files[0];
        console.log(this.formFields.photo_one);
        },
        photoTwoUpload(){
        var input = event.target;
        this.formFields.photo_two = input.files[0];
        console.log(this.formFields.photo_two);
        },
        photoThreeUpload(){
        var input = event.target;
        this.formFields.photo_three = input.files[0];
        console.log(this.formFields.photo_three);
        },
        photoFourUpload(){
        var input = event.target;
        this.formFields.photo_four = input.files[0];
        console.log(this.formFields.photo_four);
        },
        async getCategories(){
            let res = await helpers.getCategories();
            // console.log(res.categories.data);
            this.categories = res.categories.data;
        },
        async getUser(){
            let res = await helpers.getUser();
            // console.log(res);
            this.user = res;
        },
        async getTags(){
            let res = await helpers.getTags();
            // console.log(res.products.data);
            this.tags = res.products.data;
        },
         async getProductDetails(){
            let res = await helpers.getProductDetails(this.id);
            this.formFields = res.product
            console.log(res.formFields);
            },
        togglePrice(){
        var priceOptions = document.getElementById("select-license");
        var selOption = priceOptions.options[priceOptions.selectedIndex].value;
        if(selOption === "free"){
            this.disabled = true;
        }
        else{
            this.disabled = false;
        }
      },
      async submit(){
          this.loading = true;
        try {
            const formData = new FormData();
            // formData.append("name", this.formFields.name);
            formData.append("description", this.formFields.description);
            // formData.append("price", this.formFields.price);
            formData.append("license", this.formFields.license);
            // formData.append("developer", this.formFields.developer);
            formData.append("platform", this.formFields.platform);
            // formData.append("tag_id", this.formFields.tag_id);
            formData.append("version",  this.formFields.version);
            formData.append("app_icon", this.formFields.app_icon);
            formData.append("app_file", this.formFields.app_file);
            formData.append("photo_one", this.formFields.photo_one);
            formData.append("photo_two", this.formFields.photo_two);
            formData.append("photo_three", this.formFields.photo_three);
            formData.append("photo_four", this.formFields.photo_four);
            // formData.append("status", "approved");
            let res = await axios.post('https://api.africanapp.store/api/edit-product/'+this.id, formData);
            console.log(this.formFields);
            console.log(res);
            Swal.fire(
            'Nice!',
            'App Update Successfull!',
            'success'
            )
            this.getProductDetails()
        } catch (error) {
            console.log(error);
             Swal.fire(
            'Chill!',
            'Something went wrong!',
            'warning'
            )
           this.getProductDetails()
        }
        this.loading = false
      }
      
    },
    async created(){
        this.getCategories();
        this.getTags();
        this.getProductDetails()
        this.user = this.$store.getters.getUser
        this.formFields.developer = this.user.name;
    }
}
</script>

