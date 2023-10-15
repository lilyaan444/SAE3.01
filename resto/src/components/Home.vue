<template>
  <HeaderPage/>
  <h1>Hello {{email}}, welcome on Home Page</h1>
  <table>
    <tr>
      <td>
        Name
      </td>
      <td>
        Address
      </td>
      <td>
        Phone
      </td>
    </tr> 
      <tr v-for="item in restaurants" :key = "item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.numero }}</td>
    </tr>


  </table>
</template>

<script>
import HeaderPage from './Header.vue';
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      email: '',
      restaurants: []
    }
  },
  components: {
    HeaderPage
  },

  async mounted() {
    let user = localStorage.getItem('user-info');
    this.email = JSON.parse(user).email;
    if(!user) {
      this.$router.push({name: 'SignUp'});
    }
    let result = await axios.get(`http://localhost:3000/restaurant`);
    console.warn(result);
    this.restaurants = result.data;
  }
}

</script>

<style > 
td {
  padding: 10px;
  width: 150px;
  height: 30px;
  border : 1px solid black;
  text-align: center;
}

table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 50%;
  text-align: center;
}
</style>