<script>
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 8,
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Standard - Very Long'
      } else {
        return 'Counter Standard'
      }
    },
  },
  methods: {
    incrementCount() {
      this.count += this.incrementAmount
    },
    toggleFavorite(item, event) {
      console.log(item)
      item.isFavorite = !item.isFavorite
    },
    addCharacter(character) {
      const newChar = { name: character, isFavorite: false }
      this.listOfCharacters.push(newChar)
      console.log(this.listOfCharacters)
    },
  }
}

</script>

<template>
    <h1>Hello Frontend Masters!</h1>
    <h1>{{ counterTitle }}</h1>
    <p :data-increment-by="incrementAmount">{{ count }}</p>
    <button @click="incrementCount">Increment Count</button>
    <div>
      <label for="incrementAmount">Increment by:</label>
      <input v-model.number="incrementAmount" />
    </div>
</template>