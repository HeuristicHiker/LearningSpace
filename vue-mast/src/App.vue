<script>
// Useful link
// Lifecycle hooks
// https://vuejs.org/guide/essentials/lifecycle.html


export default {
  data: () => ({
    pokedex: [1,2,3], 
  }),
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => response.json())
    }
  },
  created() {
    this.fetchPokemon()
    console.log("Create")
    console.log(this.pokedex)
  }
}
</script>

<template>
<h1>New App</h1>”‹⁄
<pre>{{  pokedex }}</pre>
<button @click="fetchPokemon">Fetch Pokemon</button>
</template> 

<style>
</style> 