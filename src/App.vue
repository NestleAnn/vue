<template>
  <div id="app">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/users">User Table</router-link>
    <router-link class="nav-link" to="/books">Book Table</router-link>
    <router-link class="nav-link" to="/rentals">Rental Table</router-link>

  </div>
    <div class="content">
      <router-view />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #50a4ffce;
}
.nav-link {
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #eee;
  color: #007BFF;
  transform: scale(1.1);
}
</style>
