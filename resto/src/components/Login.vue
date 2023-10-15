<template>
  <img class="logo" src="../assets/restologo.webp" alt="Logo du resto">
  <h1>LogIn</h1>
  <div class="login">
    <label for="email">Email</label>
    <input type="email" v-model="email" id="email" name="email" />

    <label for="password">Password</label>
    <input type="password" v-model="password" id="password" name="password" />

    <button @click="login">LogIn</button>
    <p>
      <router-link to="/sign-up">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]));
        this.$router.push({ name: 'HomePage' });
      } else {
        alert('Please check your email and password');
      }
      console.warn(result);
    },
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'HomePage' });
    }
  },
};
</script>
