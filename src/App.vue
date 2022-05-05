<template>
  <div class="container">
    <h1 class="text-center">Countries API</h1>
    <Continent />
    <Searcher />
    <CardList />
  </div>

</template>

<script>
import CardList from './components/CardList.vue'
import Searcher from './components/Searcher.vue'
import Continent from './components/Continent.vue'
export default {
  name: 'App',
  components: {
    CardList,
    Continent,
    Searcher
  }
}
</script>

<style>

</style>
