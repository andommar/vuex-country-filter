<template>
<div class="d-flex flex-column justify-content-center">
    <h3 class="text-center">Filter </h3>
    <div class="btn-group">
      <button @click="filteredContinent('Americas')" class="btn btn-dark">AM</button>
      <button @click="filteredContinent('Europe')" class="btn btn-dark">EU</button>
      <button @click="filteredContinent('Asia')" class="btn btn-dark">AS</button>
      <button @click="filteredContinent('Oceania')" class="btn btn-dark">OC</button>
      <button @click="filteredContinent('Africa')" class="btn btn-dark">AF</button>
      <button @click="filteredContinent('')" class="btn btn-dark">ALL</button>
    </div>
</div>

</template>

<script>
import {useStore} from 'vuex'
import {onMounted, computed} from 'vue'
export default {
    setup(){
        const store = useStore()

        const filteredContinent = (region) => {
            store.dispatch('filterRegion', region)
        }
        return {filteredContinent}

    }
}
</script>

<style>

</style>