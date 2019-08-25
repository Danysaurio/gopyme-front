<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item >
            <v-icon style="padding-right: 10px">fa-money-bill-alt</v-icon>
          <v-list-item-content>
            <v-list-item-title>Mis pagos recientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Juan Daniel Zavala Casillas</v-toolbar-title>
    </v-app-bar>

     <v-container class="fill-height" fluid>
       <div class="pays-table__container" >
          <v-simple-table class="pays-table" >
            <thead>
              <tr>
                <th class="text-left">Fecha de pago</th>
                <th class="text-left">Monto</th>
                <th class="text-left">Monto a capital</th>
                <th class="text-left">Interes</th>
                <th class="text-left">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in pays" :key="item.name">
                <td>{{ item.date }}</td>
                <td>${{ item.pay }}</td>
                <td>${{ item.payToCap }}</td>
                <td>${{ item.Int }}</td>
                <td>${{ item.total }}</td>
              </tr>
            </tbody>
          </v-simple-table>
       </div>
      </v-container>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
    </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      pays:[
        {
          date: `24/12/94`,
          pay: 4000,
          payToCap: 120,
          Int: 20,
          total: 3235
        },
        {
          date: `24/12/94`,
          pay: 4000,
          payToCap: 120,
          Int: 20,
          total: 3235
        }
      ]
    })
  }
</script>
<style lang="scss">
.pays-table{
  width: 100%;
  &__container{
    padding: 1em 2em;
    width: 100%;
  }
}

</style>