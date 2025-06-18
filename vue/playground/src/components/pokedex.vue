<script>
import { computed, reactive, ref } from "vue"

export default {
  async setup() {
    const regionName = ref("kanto");
    const regionNameAllCaps = computed(
      () => {
        return regionName.value.toUpperCase()
      }
    )

    const state = reactive({
      elementType: "lightning"
    })

    const pokedex = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=25"
    ).then((response) => response.json());

    return {
      pokedex,
      regionName,
      regionNameAllCaps,
      state
    };
  },
  created() {
    console.log(this.regionName);
    console.log(this.pokedex);
  },
  methods: {
    changeRegionName() {
      this.regionName = "Hoenn"
    }
  }
};
</script>

<template>
  <h2>{{  regionName }}</h2>
  <h2>{{  regionNameAllCaps }}</h2>
  <h2>{{  state.elementType }}</h2>
  <button @click="changeRegionName">Change region name</button>
    <pre>{{ pokedex }}</pre>
    <button @click="fetchPokemon">Fetch Pokemon</button>
</template>
