<style scoped>

#toolbar {
    border-bottom: 2px solid #356859;
    text-align: center;
    
}
#tolbar-title {
    color: #356859;
}
</style>
<template>
  <nav>
    <v-toolbar id="toolbar" color="#FFFBE6" flat app>
      <v-toolbar-title id="tolbar-title" class="text-uppercase text-h2">
        <span id="tolbar-title" class="font-weight-bold">SAE</span>
      </v-toolbar-title>
      <v-btn>
        <span>Mon compte</span>
        <v-icon end> mdi-account </v-icon>
      </v-btn>
      <!-- <v-btn>
                <span>Modifier</span>
                <v-icon end>mdi-pencil</v-icon>
            </v-btn> -->
    </v-toolbar>
  </nav>
</template>