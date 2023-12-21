import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import User from '../components/User.vue';
import Book from '../components/Book.vue';  
import Rental from '../components/Rental.vue';
import CreateUser from '../components/icons/AddUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'User',
    component: User,
  },
  {
    path: '/books',
    name: 'Book',
    component: Book,
  },
  {
    path: '/rentals',
    name: 'Rental',
    component: Rental,
  },
  {
    path: '/users/create',
    name: 'Create',
    component: CreateUser,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
