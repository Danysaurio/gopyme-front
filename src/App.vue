<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="">
        <a href="/about">
          <img src="./assets/logo.svg" alt="" width="50%">
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn text href="/">
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn text href="/login">
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn  href="/" color="primary">
        <span class="mr-2">Solicitar Credito</span>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  html{
    overflow-y: auto !important;
  }
</style>
