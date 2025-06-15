<script>

export default {
  data: () => ({
    users: [], 
  }),
  methods: {
    async fetchUsers() {
      this.users = await fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
    }
  },
  created() {
    this.fetchUsers()
    console.log("Create")
    console.log(this.users)
  }
}

</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <ul>
      <li v-for="user in users" :key="`user-${user.id}`" >{{  user.title }}: {{ user.completed }}</li>
    </ul>

    <pre>{{  users }}</pre>
    <button @click="fetchUsers">Fetch Users</button>
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


      <!-- this.users = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()) -->