<template>
    <div class="row">
        <div 
        class="col-12"
        v-for="country in countries" :key="country.name">
            <Card :country="country" />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'
import {useStore} from 'vuex'
import {onMounted, computed} from 'vue'
export default {
    components:{
        Card
    },
    setup(){

        const countries = computed(()=>{
            // return store.state.countries
            return store.getters.topPopulatedCountries
        })

        const store = useStore()

        onMounted(async()=> {
            //since we're making API calls we need to wait for data to be fetched
            //otherwise javascript just calls up the filterRegion function
            //without any data
            await store.dispatch('getCountries')
            await store.dispatch('filterRegion', 'Americas')
        })

        return {countries}
    }
}
</script>

<style>

</style>