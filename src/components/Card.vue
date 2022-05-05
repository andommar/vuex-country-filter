<template>
    <div class="card mb-2">
        <div class="card-body">
            <h5 class="text-center">{{country.name}}</h5>
            <div class="text-center">
                <img :src="country.flag" alt="'flag-{{country.name}}'" class="img-fluid w-50 mb-5">
            </div>
            <p class="card-text">
                <span class="badge badge-dark d-block mb-1"> Native name: {{country.nativeName}}</span>
                <span class="badge badge-info p-3 d-block mb-1">Population: {{formatNumber(country.population)}}</span>
                <span class="badge badge-dark d-block mb-1">Capital: {{country.capital}}</span>
                <span class="badge badge-dark d-block mb-1">Region: {{country.region}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:['country'],
    setup (){
        const formatNumber = (number) => {
            return new Intl.NumberFormat('de-DE').format(number)
        }

        return {formatNumber}
    }
}
</script>

<style>

</style>