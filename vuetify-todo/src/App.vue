<template>
  <v-app id="inspire">
    <v-navigation-drawer
        floating
        permanent
        v-model="drawer"
        app
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-format-list-checks" title="Todo" value="home" to= "/"></v-list-item>
          <v-list-item prepend-icon="mdi-information" title="About" value="about" to="/about"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
        app
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Todo list</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>