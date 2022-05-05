import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    filteredCountries: []
  },
  getters: {
    topPopulatedCountries (state) {
      //we take the elements from the array and compare each one (since they are objects)
      //we can access to their attributes
      //in this case if population is greater than a the element gets sorted first
      return state.filteredCountries.sort((a,b) =>
        a.population < b.population ? 1: -1
      )
    }
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setFilteredCountries(state, payload) {
      state.filteredCountries = payload
    }
  },
  actions: {
    async getCountries({commit}){
      try{
        const res = await fetch('https://restcountries.com/v2/all')
        const data = await res.json()
        console.log(data)
        commit('setCountries', data)
      } catch (error) {
        console.log(error)
      }
    },
    filterRegion({commit, state}, region) {
      const filter = state.countries.filter(country =>
        //--- first option ---
        // country=> country.region === region
        //--- alternative ---
        country.region.includes(region)
      )
      commit('setFilteredCountries', filter)
    },
    filterName({commit,state}, text){
      const textClient = text.toLowerCase()
      // everytime theres a new input the arrow key returns the new word
      // as a new country and we save it as a new filter
      //eg. user types a, filter = a.
      //eg. user types aaks, filter = aaks
      const filter = state.countries.filter(country=>{
        const textServer = country.name.toLowerCase()
        if(textServer.includes(textClient)){
          return country
        }
      })
      commit('setFilteredCountries', filter)
    }
  },
  modules: {
  }
})
