<template>
  <div>
    <div class="div-btn">
      <router-link class="btn-add-user" to="/users/create">Add new user</router-link>
    </div>
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const successMessage = ref(''); // Variable to store success message

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/users');
    users.value = response.data;
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

// Function to handle successful user addition
const handleSuccess = (message) => {
  successMessage.value = message;
  // Clear the success message after a certain duration (e.g., 5 seconds)
  setTimeout(() => {
    successMessage.value = '';
  }, 5000);
};
</script>

<style scoped>
  .user-list {
    margin: 20px;
  }

  h1 {
    color: #333;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  tr {
    align-items: center;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: rgb(0, 0, 0, 0.5);
  }
  td{
    color: white;
  }

  th {
    background-color: rgb(203, 242, 159);
    text-align: center;
  }

  /* Style for the "Add new user" button */
  .btn-add-user {
    background-color: #ffc107;
    color: #212529;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 20px;
  }

  .btn-add-user:hover {
    background-color: #ffca2c;
    color: #212529;
  }

  /* Corrected styling for the container div */
  .div-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }
</style>
