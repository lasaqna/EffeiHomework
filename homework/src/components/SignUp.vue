
<template>
  <form @submit.prevent="registerUser">
    <input v-model="username" type="text" placeholder="User Name" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { username: '', password: '' };
  },
  methods: {
    async registerUser() {
      await axios.post('http://localhost:4000/register', { username: this.username, password: this.password });
      this.username = '';
      this.password = '';
    }
  }
};
</script>



