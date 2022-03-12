<template>
    <div>
        {{ dataObj }}
        <h2>{{ filter }}</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['filter'],
    data: ()=>{
        return{
            baseUrl: 'https://api.africanapp.store',
            dataObj: '',
        }
    },
    methods:{
        async getProducts() {
            let filter = this.$route.query.filter
            const res = await axios.get(this.baseUrl+'/api/'+filter)
            // return res.data
            console.log(res.data);
        },
    },
    async created(){
        this.getProducts()
    }
}
</script>