<template>
  <v-app>
    <v-app-bar app v-if="this.$route.name !== 'user'">
      <v-toolbar-title class="">
        <a href="/">
          <img src="./assets/logo.svg" alt="" width="50%">
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn text href="/">
        <span class="mr-2">Inicio</span>
      </v-btn>
      <v-btn text href="/login">
        <span class="mr-2">Iniciar sesión</span>
      </v-btn>
      <v-btn  href="/pymeinit" color="primary">
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
