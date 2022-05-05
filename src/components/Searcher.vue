<template>
  <input 
    type="text"
    placeholder="Insert country"
    class="form-control my-3"
    v-model="text"
    @keyup="processInput">
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
    setup(){
        const text = ref('')
        const store = useStore()

        const processInput = () =>{
            console.log(text.value)
            store.dispatch('filterName', text.value)
        }

        return {text,processInput}
    }

}
</script>

<style>

</style>