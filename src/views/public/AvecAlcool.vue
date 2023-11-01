<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    const cocktail = ref([]);
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then((response) => {
        cocktail.value = response.data.drinks;
      })
   
  </script>
  <style>
  .img-fluid {
    max-width: 20vw;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
    #liste-recette{
      padding: 20px;
      margin: 5px;
      background-color: #f8f8f8;
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      
    }
    .btn-recette{
      color: #356859;
    }
    
</style>
<template>
    <h1 class="text-center">TEST AXIOS</h1>
    <div class="container">
    <v-card v-for="(cocktails, i) in cocktail" :key="i" id="liste-recette">
      <v-card-title>{{ cocktails.strDrink }}</v-card-title>
      <v-card-text>{{ cocktails.strInstructions }}</v-card-text>
      <img :src="cocktails.strDrinkThumb" class="img-fluid" alt="" >
      <v-card-actions>
        <v-btn class="btn-recette">Voir la recette</v-btn
        >
      </v-card-actions>
      
    </v-card>
  </div>  
  </template>
  
  
  