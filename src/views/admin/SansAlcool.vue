<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    const salle = ref([]);
    axios
      .get('https://devweb.iutmetz.univ-lorraine.fr/~heim32u/api/cocktails.php')
      .then((response) => {
        salle.value = response.data;
      })
   
  </script>

<template>
    <h1 class="text-center">SANS ALCOOL A FAIRE</h1>
    <h2>axios depuis api de base de donnée</h2>
    <v-card v-for="(salles, i) in salle" :key="i" >
      <v-card-title>Salle numéro {{ i+1 }}</v-card-title>
      <v-card-text v-if="salles.num_salle !== ''">
    Numéro de salle : {{ salles.num_salle }}
  </v-card-text>
  
  <v-card-text v-if="salles.lib_salle !== ''">
    Libellé de salle : {{ salles.lib_salle }}
  </v-card-text>
  
  <v-card-text v-if="salles.etage !== ''">
    Étage : {{ salles.etage }}
  </v-card-text>
    </v-card>

  </template>
  
 