<template>
  <v-app id="inspire" style="padding: 30px">
    <v-system-bar app window dark color="primary" height="45px">
      <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      <!-- <v-icon>mdi-application</v-icon> -->
      <span style="font-size: 1.2rem">雲科工具包</span>
      <v-spacer class="drag"></v-spacer>
      <v-icon @click="minimize">mdi-minus</v-icon>
      <v-icon v-if="!ismaximize" @click="maximize"
        >mdi-checkbox-blank-outline</v-icon
      >
      <v-icon v-else @click="unmaximize">mdi-checkbox-blank-outline</v-icon>
      <v-icon @click="close">mdi-close</v-icon>
    </v-system-bar>

    <v-navigation-drawer class="drawer" v-model="drawer" app>
      <v-img
        height="180"
        class="pa-4"
        src="https://webapp.yuntech.edu.tw/YunTechSSO/Content/patterns/4.png"
      >
        <div class="text-center">
          <v-avatar class="mb-4" color="grey darken-1" size="64">
            <v-img
              aspect-ratio="30"
              src="https://yt3.ggpht.com/esazPAO03T0f0vKdByJvkDy6MSwjyG5f-c_2S2CJapszQ3KPQyZarpoqvgv0Us0atUbILytj=s88-c-k-c0x00ffffff-no-rj"
            />
          </v-avatar>
          <h2 class="white--text">XXXXXXXXX</h2>
        </div>
      </v-img>
      <!-- <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>資訊管理</div>
        <div>B11111111@yuntech.edu.tw</div>
      </v-sheet> -->

      <v-divider></v-divider>

      <v-list>
        <v-list-item link to="/" key="mdi-home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="link in links"
          :key="link.icon"
          :prepend-icon="link.icon"
        >
          <template v-slot:activator>
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </template>
          <v-list-item
            v-for="item in link.sub_items"
            :key="item.icon"
            link
            :to="item.link"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  name: "DefaultLayout",
  components: {},
  data() {
    return {
      ismaximize: false,
      drawer: true,
      links: [
        {
          icon: "mdi-email",
          text: "Mail",
          sub_items: [
            {
              icon: "mdi-inbox-arrow-down",
              text: "Inbox",
              link: "/mail/page",
            },
            {
              icon: "mdi-send",
              text: "Send",
              link: "/mail/send",
            },
          ],
        },
      ],
      // links: [
      //   ["mdi-inbox-arrow-down", "Inbox"],
      //   ["mdi-send", "Send"],
      //   ["mdi-delete", "Trash"],
      //   ["mdi-alert-octagon", "Spam"],
      // ],
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
  height: 40px;
  -webkit-app-region: drag;
  user-select: none;
}

.drawer {
  max-height: calc(100vh - 45px);
}

.theme--dark.v-system-bar {
  box-shadow: 0 0 8px rgb(0 0 0 / 50%);
  /* border-radius: 5px 5px 0px 0px; */
}

.theme--dark.v-system-bar,
.theme--dark.v-system-bar .v-icon {
  color: #ffff;
}

@media (max-width: 1265px) {
  .drawer {
    max-height: 100vh;
  }
}
</style>
