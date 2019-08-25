<template>
  <div>
    <v-parallax dark
      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <v-row align="center" justify="center">
        <div class="display-3 text-center ">
          <div class="banner-title">
            ¿Necesitas un préstamo <br> para tu negocio?
          </div>
          <div>
            <v-btn href="/pymeinit" color="primary">
              <span class="mr-2">Solicitar Crédito</span>
            </v-btn>
          </div>
        </div>
      </v-row>
    </v-parallax>
    <v-container class="pt-10 pb-10">
      <v-row justify="center" >
        <v-col  class="text-center" cols="3">
          <v-icon :size="60" class="mb-5">fa-tachometer-alt</v-icon>
          <h3 class="primary--text">Prestamos en minutos</h3>
          <p>Despues de ser acreditado para un prestamo reciviras tu dinero en cuestion de minutos</p>
        </v-col>
        <v-col class="text-center" cols="3">
          <v-icon :size="60"  class="mb-5">far fa-handshake</v-icon>
          <h3 class="primary--text">Pagos pequeños</h3>
          <p>Pagas en base a las ganancias que generes con tu negocio</p>

        </v-col>
        <v-col class="text-center" cols="3">
          <v-icon :size="60" class="mb-5">fa fa-receipt</v-icon>
          <h3 class="primary--text">Pagos automaticos</h3>
          <p>Los pagos se harán automáticamente conforme vas recibiendo ganancias hasta cubrir la mensualidad</p>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="(link,i) in footerLinks" :key="'link-'+i" color="white" text rounded class="my-2">
          {{ link.name }}
        </v-btn>
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Gopyme</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () =>({
     items: [
          {
            src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          }
        ],
        footerLinks:[
          {
            name: "Inicio",
            link: "/"
          },
          {
            name: "Iniciar sesión",
            link: "/login"
          },
          {
            name: "Solicitar Crédito",
            link: "/login"
          }
        ]
  }),
  components: {},
};
</script>
<style lang="scss">
  .banner-title{
    font-weight: bold !important;
    text-shadow: 2px 2px 5px  rgba(0,0,0,.8);
  }
</style>