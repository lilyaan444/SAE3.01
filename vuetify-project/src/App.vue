  <script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  
  const adherents = ref([])
  
  axios.get('https://devweb.iutmetz.univ-lorraine.fr/~begel38u/SAE/ff.php').then((res) => {
    adherents.value = res.data
  })
  
  </script>
<template>
  <h1>Test requete SQL à l'aide d'Axios</h1>
  <h2>Adherents</h2>
    <div>
      <table border="1">
        <th>Numéro</th>
        <th>Nom</th>
        <th>Adresse</th>
        <th>Actif</th>
        <th>Date</th>
        <tr v-for="(adherent, index) in adherents" :key="index">
          <td>{{ adherent.no_adh }}</td>
          <td>{{ adherent.nom_adh }}</td>
          <td>{{ adherent.ad_adh}}</td>
          <td>{{ adherent.actif}}</td>
          <td>{{ adherent.date_adh}}</td>
      </tr>
      </table>
    </div>
  </template>
  
  