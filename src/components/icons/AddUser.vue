<template>
    <div>
      <h1>Create New User</h1>
      <div class="col-md-5">
        <form @submit.prevent="submitForm">
          <div class="form-group mt-2">
            <label for="name">Name</label>
            <input v-model="userData.name" type="text" name="name" class="form-control">
            <p v-if="formErrors.name" class="text-danger">{{ formErrors.name }}</p>
          </div>
  
          <div class="form-group mt-2">
            <label for="email">Email</label>
            <input v-model="userData.email" type="text" name="email" class="form-control">
            <p v-if="formErrors.email" class="text-danger">{{ formErrors.email }}</p>
          </div>
  
          <div class="form-group mt-2">
            <label for="password">Password</label>
            <input v-model="userData.password" type="password" name="password" class="form-control">
            <p v-if="formErrors.password" class="text-danger">{{ formErrors.password }}</p>
          </div>
          
          <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
            {{ successMessage }}
          </div>
  
          <div class="form-group mt-3 d-grid gap-2 d-md-flex justify-content-end">
            <button type="submit" class="btn btn-warning">Add User</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const userData = ref({
    name: '',
    email: '',
    password: '',
  });
  
  const formErrors = ref({
    name: '',
    email: '',
    password: '',
  });
  
  const successMessage = ref('');
  
  const submitForm = async () => {
    // Validation logic - you can customize this based on your requirements
    formErrors.value = {}; // Reset errors
  
    if (!userData.value.name) {
      formErrors.value.name = 'Name is required';
    }
  
    if (!userData.value.email) {
      formErrors.value.email = 'Email is required';
    }
  
    if (!userData.value.password) {
      formErrors.value.password = 'Password is required';
    }
  
    // If there are no errors, you can proceed with form submission
    if (Object.values(formErrors.value).every(error => !error)) {
      try {
        // Make an API request to save the user data
        const response = await axios.post('http://localhost:8000/api/users', userData.value);
        console.log('API response:', response.data);
  
        // Display success message
        successMessage.value = 'User added successfully';
  
        // Redirect to the "/users" page after successful submission
        router.push('/users');
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally, you can handle errors and display a message to the user
      }
    }
  };
  </script>
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .col-md-5 {
    width: 400px;
    margin: 0 auto;
  }

  .form-group {
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .text-danger {
    color: #dc3545;
    margin-top: 5px;
  }

  .alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
    padding: 10px;
    border-radius: 4px;
    margin-top: 20px;
  }

  .btn-warning {
    background-color: #ffc107;
    color: #212529;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
  }

  .btn-warning:hover {
    background-color: #ffca2c;
    color: #212529;
  }

  .d-grid {
    display: grid;
  }

  .d-md-flex {
    display: flex;
  }

  .gap-2 {
    gap: 2rem;
  }

  .justify-content-end {
    justify-content: end;
  }
</style>
