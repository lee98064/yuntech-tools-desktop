<template>
  <v-app id="inspire">
    <v-system-bar app window height="50px">
      <v-icon>mdi-message</v-icon>
      <span>雲科工具包</span>
      <v-spacer class="drag"></v-spacer>
      <v-icon @click="minimize">mdi-minus</v-icon>
      <v-icon v-if="!ismaximize" @click="maximize"
        >mdi-checkbox-blank-outline</v-icon
      >
      <v-icon v-else @click="unmaximize">mdi-checkbox-blank-outline</v-icon>
      <v-icon @click="close">mdi-close</v-icon>
    </v-system-bar>

    <v-navigation-drawer class="drawer" v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
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
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import appHeader from "@/components/header";
const { ipcRenderer } = require("electron");
export default {
  name: "DefaultLayout",
  components: { appHeader },
  data() {
    return {
      ismaximize: false,
    };
  },
  methods: {
    close() {
      ipcRenderer.send("close", "data");
    },
    minimize() {
      ipcRenderer.send("minimize", "data");
    },
    maximize() {
      ipcRenderer.send("maximize", "data");
      this.ismaximize = true;
    },
    unmaximize() {
      ipcRenderer.send("unmaximize", "data");
      this.ismaximize = false;
    },
  },
};
</script>

<style>
body {
  margin: 0 !important;
}
.drag {
  height: 15px;
  -webkit-app-region: drag;
  user-select: none;
}

.drawer {
  max-height: calc(100vh - 50px);
}
</style>
