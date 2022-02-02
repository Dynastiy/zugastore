<template>
    <nav>
        <ul class="pagination pagination-md d-flex justify-content-center mt-5">
            <li class="page-item" 
                :class="{ 'disabled': meta.total === 0 }">
                <a href="javascript:void(0)" 
                    class="page-link" 
                    @click="next(meta.from-1)">
                    &laquo;
                </a>
            </li>
            <li class="page-item" 
                v-for="page in meta.total" 
                :key="page" 
                :class="{ 'active':meta.from === page }">
                <a href="javascript:void(0)" 
                    @click.prevent="next(page)" 
                    class="page-link">
                    {{ page }}
                </a>
            </li>
            <li class="page-item"  
                :class="{ 'disabled': meta.from === meta.total }">
                <a  href="javascript:void(0)" 
                    class="page-link"
                    @click="next(meta.from+1)">
                    &raquo;
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: ['meta'],
    methods: {
        next(page) {
            this.$emit('next', page);
        }
    }
}
</script>