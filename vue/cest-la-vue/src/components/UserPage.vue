<script>
import { computed, ref, reactive } from "vue"
import UserCard from "./UserCard.vue"

export default {
  components: {
    UserCard
  },
  async setup() {
    const users = reactive({
      usersList: [],
    })

    async function fetchUsers(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
      return response
    }
    
    state.userList = await fetchUsers()

    return {
      state,
      fetchUsers,
    }
  },
  created() {
    users,
  },
}

</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <h2>{{ status }}</h2>
    <h2>{{ capitalStatus }}</h2>
    <button @click="changeStatus"></button>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <ul>
      <UserCard
        v-for="user in state.userList"
        :user="user"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>

