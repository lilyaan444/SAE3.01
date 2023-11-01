

<template>
  <div>
    
    <form @submit.prevent="loginUser()">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Utilisateur</div>

      <v-text-field
        v-model="username"
        density="compact"
        placeholder="Nom d'utilisateur"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        
        
        
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Mot de passe

        
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Entrez le mot de pass"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        
      </v-card>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        type="submit"
      >
        Connexion
      </v-btn>

      
    </v-card>
  </form>
  </div>
</template>
  
 <script >
import axios from 'axios';
export default {
    data: () => ({
      visible: false,
      username:"",
      password:"",
     
      
    }),
    methods: {
      async loginUser() {
    try {
      const response = await axios.post('https://devweb.iutmetz.univ-lorraine.fr/~heim32u/api/login.php', {
        username: this.username,  // Remplacez par le champ de saisie de l'utilisateur
        password: this.password   // Remplacez par le champ de saisie du mot de passe
      });

      if (response.data.success) {
        // Connexion réussie, vous pouvez faire quelque chose ici, par exemple rediriger l'utilisateur
        this.$router.push('/admin/sansalcool');
        console.log('Connexion réussie !');
      } else {
        // Identifiants incorrects
        console.error('Identifiants incorrects');
      }
    } catch (error) {
      // Erreur lors de la requête
      console.error('Erreur lors de la requête :', error);
    }
  }
} 
}
    
    
  
</script>
  