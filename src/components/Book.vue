<template>
  <div>
    <h1>Book Table</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Rental Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.description }}</td>
          <td>{{ book.rental_fee }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const books = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/books');
    // Flatten the array structure
    books.value = response.data.flat();
  } catch (error) {
    console.error('Error fetching books:', error);
  }
});
</script>




<style scoped>
  .supplier-list {
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
  background-color: rgb(121, 149, 160);
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: rgb(203, 242, 159);
  text-align: center;
}

</style>
