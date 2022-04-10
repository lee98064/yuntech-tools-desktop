<template>
  <v-app id="inspire">
    <v-system-bar
      app
      window
    >
      <v-icon>mdi-message</v-icon>
      <span>雲科工具包</span>
      <v-spacer class="drag"></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon @click="close">mdi-close</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import appHeader from '@/components/header'
const remote = require('electron').remote

export default {
  name: 'DefaultLayout',
  components: { appHeader },
  data(){
    return{
      
    }
  },
  methods:{
    close(){
      window.close();
    }
  }
}
</script>

<style>
body {
  margin: 0 !important;
}
.drag{
  height: 15px;
  -webkit-app-region: drag;
  user-select: none;
}
</style>
