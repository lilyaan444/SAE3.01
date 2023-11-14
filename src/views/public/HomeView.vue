<script>
import cocktails from "../../components/cocktail.vue";
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"], 
    cocktail: cocktails,
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>
<style scoped>

.text-basil {
  color: #356859 !important;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.card-recette {
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: large;
}
.btn-recette {
  color: white;
  border: 1px solid white;
}
#liste-recette{
  padding-left: 20px;
 
}
li{
  line-height: 2em;
}
</style>
<!-- commentaire -->
<template>
  <v-container class="pa-4 text-center mt-15">
    <p class="pa-4 text-h2 text-basil font-weight-bold">Cocktails du jour</p>
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in cocktail" :key="i">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
              <v-img :src="item.img" height="80vh" cover>
                <v-card-title
                  class="text-h4 text-basil d-flex flex-column font-weight-bold"
                >
                  <p class="mt-4">
                    {{ item.nom }}
                  </p>

                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold text-red" >
                      {{ item.alcool.join(" + ") }}
                    </p>
                  </div>
                </v-card-title>
                <div class="align-self-center">
                  <v-btn color="transparent" class="show-btns isHovering">
                    <v-icon color="white"> mdi-pencil </v-icon>
                  </v-btn>
                </div>
                <v-card-actions>
                  <span>
                    <v-btn
                      :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                      @click="item.show = !item.show"
                      color="white"
                      class="btn-recette "
                    >
                    </v-btn>
                    
                    <p class="card-recette">Recette</p>
                  </span>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="item.show">
                    <v-divider></v-divider>

                    <v-card-text class="card-recette">
                      <ul id="liste-recette">
                      <li v-for="(recette, i) in item.recette" :key="i">
                        {{ recette }}
                      </li>
                    </ul>
                    </v-card-text>
                  </div>
                </v-expand-transition>
                <!-- <div class="align-self-center">
                  <v-btn
                    v-for="(icon, index) in icons"
                    :key="index"
                    variant="text"
                    :class="{ 'show-btns': isHovering }"
                    :color="transparent"
                    :icon="icon"
                  ></v-btn>
                </div> -->
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>