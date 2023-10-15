<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add restaurant</router-link>
    <router-link to="/update">Update restaurant</router-link>
    <a v-on:click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  methods: {
    logout() {
      localStorage.removeItem('user-info');
      this.$router.push({name: 'SignUp'});
     
    }
  }
}
</script>

<style>
.nav {
  background-color: orange;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.nav a:hover {
  color: rgb(176, 115, 0);
}
</style>
