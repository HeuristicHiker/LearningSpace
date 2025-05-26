<script>
export default {
  data() {
    return {
      newCharacter: '',
      message: 'Hello it works',
      listOfCharacters: [
        {
          name: 'Ang',
          isFavorite: true,
        },
        {
          name: 'Bob',
          isFavorite: false,
        },
        {
          name: 'Sally',
          isFavorite: false,
        },
      ],
    }
  },

}
</script>

<template>
    <ul v-for="(item, index) in listOfCharacters" :key="`item-${index}`">
      <li>
        {{ item.name }}
      </li>
      <button @click="toggleFavorite(item)">Favorite {{ item.isFavorite }}</button>
    </ul>
    <hr />
    <ul v-for="(item, index) in listOfCharacters.filter((item) => item.isFavorite)" :key="`number-${index}`">
      <li>
        {{ item.name }}
      </li>
      <button @click="toggleFavorite(item)">Favorite {{ item.isFavorite }}</button>
    </ul>
    <input @keyup.enter="() => console.log(x)" v-model.text="newCharacter" />
    <button @click="addCharacter(newCharacter)">Add: {{ newCharacter }}</button>
</template>