<template>
  <router-view/>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.logo{
  width: 200px;
  height: 160px;
  margin: 0 auto;
  display: block;
}

.register input, .login input{
  width: 300px;
  height: 30px;
  padding-left: 20px;
  display: block;
  margin: 10px auto;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid orange;
}

.register button, .login button{
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid orange;
  background-color: orange;
  cursor: pointer;
}
</style>