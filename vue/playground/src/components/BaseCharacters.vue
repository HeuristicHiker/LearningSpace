<script>
import CharacterCard from "./CharacterCard.vue";
export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      newCharacter: "",
      message: "Hello it works",
      listOfCharacters: [
        {
          name: "Ang",
          isFavorite: true,
          element: ["Fire", "Water"],
        },
        {
          name: "Bob",
          isFavorite: false,
          element: ["Fire"],
        },
        {
          name: "Sally",
          isFavorite: false,
          element: ["Water"],
        },
      ],
    };
  },
  methods: {
    addNewCharacter() {
      this.listOfCharacters.push({
        name: this.newCharacter,
        isFavorite: false,
        element: [],
      });
      this.newCharacter = { name: "" };
    },
    addFavoriteCharacter(character) {
      character.isFavorite = !character.isFavorite;
    },
  },
};
</script>

<template>
  <ul v-for="(item, index) in listOfCharacters" :key="`item-${index}`">
    <CharacterCard :character="item" @favorite="addFavoriteCharacter" />
  </ul>
  <hr />
  <ul
    v-for="(item, index) in listOfCharacters.filter((item) => item.isFavorite)"
    :key="`number-${index}`"
  >
    <CharacterCard :character="item" @favorite="addFavoriteCharacter" />
  </ul>
  <input v-model="newCharacter" />
  <button @click="addNewCharacter">Add: {{ newCharacter }}</button>
</template>
