<template>
    <div>
      <h1>Rental Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Rental Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rental in rentals" :key="rental.id">
            <td>{{ rental.id }}</td>
            <td>{{ rental.rental_date }}</td>
            <td>{{ rental.return_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const rentals = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/rentals');
      rentals.value = response.data.flat();
    } catch (error) {
      console.error('Error fetching rentals:', error);
    }
  });

  </script>
  
  <style scoped>
  .merchandise-list {
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

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: rgb(121, 149, 160);

}

th {
  background-color: rgb(203, 242, 159);
  text-align: center;
}
  </style>
  