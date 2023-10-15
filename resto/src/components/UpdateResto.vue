<template>
  <HeaderPage/>
  <h1>Hello user, welcome on Update Page</h1>
</template>

<script>
import HeaderPage from './Header.vue';
export default {
  name: 'UpdatePage',
  components: {
    HeaderPage
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user) {
      this.$router.push({name: 'SignUp'});
    }
  }
}

</script>