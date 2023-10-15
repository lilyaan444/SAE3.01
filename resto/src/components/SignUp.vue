<template>
  <img class="logo" src="../assets/restologo.webp" alt="Logo du resto">
<h1>Sign Up</h1>
<div class="register">
  <label for="email">Email</label>
  <input type="email" v-model="email" id="email" name="email" />

  <label for="password">Password</label>
  <input type="password" v-model="password" id="password" name="password" />

  <button v-on:click="signUp">Sign Up</button>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    date() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/user', {
                email: this.email,
                password: this.password,
            });
            console.warn(result);
            if (result.status === 201) {
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({ name: 'HomePage' });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'HomePage' });
        }
    },
}
</script>
