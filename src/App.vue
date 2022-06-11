<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <span>Light on</span>

      <v-spacer></v-spacer>

      <router-link to="/login" class="text-decoration-none white--text">
        <v-btn text>
          <span class="mr-2">Login</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item-group>
          <router-link to="/" class="text-decoration-none">
            <v-list-item>
              <v-icon>mdi-home</v-icon>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/idea_form" class="text-decoration-none">
            <v-list-item>
              <v-icon>mdi-lightbulb-on-10</v-icon>
              <v-list-item-title>IDEA</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-item>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
  }),
};
</script>
