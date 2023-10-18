<style scoped>

#toolbar {
    border-bottom: 2px solid #356859;
    text-align: center;
    
}
#toolbar-title {
    color: #356859;
    margin-left: 10vw;
}
</style>
<template>
  <nav>
    <v-toolbar id="toolbar" color="#FFFBE6" flat app>
      <v-toolbar-title id="toolbar-title" class="text-uppercase text-h2">
        <span  class="font-weight-bold">SAE</span>
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