<script>

import { computed, ref, reactive } from "vue"

export default {
  async setup() {
    const todos =  await fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
    const status = ref("ready")
    
    const capitalStatus = computed(() => {
      return status.value.toUpperCase()
    })

    return {
      todos,
      status,
      capitalStatus
    }
  },
  methods: {
    changeStatus(){
      if(this.status == "ready") {
        this.status = "Not ready"
      }
      else {
        this.status = "ready"
      }
    }
  }
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
      <li v-for="todo in todos" :key="`user-${todo.id}`" >{{  todo.title }}: {{ todo.completed }}</li>
    </ul>
    <pre>{{  users }}</pre>
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

