<script setup>
    import axios from 'axios';
    
    let salle =[];
    axios
      .get('https://devweb.iutmetz.univ-lorraine.fr/~heim32u/api/cocktails.php')
      .then((response) => {
        salle = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
   
  </script>

<template>
    <h1 class="text-center">SANS ALCOOL A FAIRE</h1>
    <p>{{ salle }}</p>
  </template>
  
 