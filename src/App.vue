<script setup>
  import NavBar from './components/NavBar.vue';
  import FooterBar from './components/FooterBar.vue';

</script>
<style>
  #main {
    background-color: #FFFBE6;
    
  }
  
</style>
<template>
  <v-app>
     <NavBar/>
    <v-main id="main">
      <v-content>
        <router-view></router-view>
        
      </v-content>
      
    </v-main>
    <FooterBar />
  </v-app>
 
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>