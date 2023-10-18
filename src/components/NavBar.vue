<style scoped>

#toolbar {
    border-bottom: 2px solid #356859;
    text-align: center;
    
}
#toolbar-title {
    color: #356859;
    
}
.v-navigation-drawer {
    background-color: #FFFBE6;
}
</style>
<template>
  <nav>
    <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://imgs.search.brave.com/plFtB6pqSyL56-1tKJ0In1PHeIW-2xQpgewk3G1ogoU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQ5Lzk4LzM5/LzM2MF9GXzU0OTk4/Mzk3MF9iUkNrWWZr/MFA2UFA1ZktiTWha/TUliMDdtQ0o2ZXNY/TC5qcGc"
          title="Nom du compte"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Cocktail avec alcool" value="avec_alcool" to="/avecalcool"></v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Cocktail sans alcool" value="sans_alcool" to="/sansalcool"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar id="toolbar" color="#FFFBE6" flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" size="x-large"></v-app-bar-nav-icon>
      <v-toolbar-title id="toolbar-title" class="text-uppercase text-h2">
        
          <p class="font-weight-bold">Cocktails</p>
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
    <script>
export default {
  data: () => ({
    show: false,
    drawer: false,
    
    
  })
}
</script>