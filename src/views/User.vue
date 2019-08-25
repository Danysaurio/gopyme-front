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
      <v-toolbar-title class="primary--text">Juan Daniel Zavala Casillas</v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn color="red" class="ml-2" @click="logout">
        <v-icon color="white">fa-sign-out-alt</v-icon>
      </v-btn>  
    </v-app-bar>

     <v-container class="fill-height" fluid>
       <div class="pays-table__container" >
          <v-simple-table class="pays-table" >
            <thead>
              <tr>
                <th class="text-left primary--text">Fecha de pago</th>
                <th class="text-left primary--text">Monto</th>
                <th class="text-left primary--text">Monto a capital</th>
                <th class="text-left primary--text">Interes</th>
                <th class="text-left primary--text">Saldo</th>
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
      <span class="red--text">&copy; 2019 - Gopyme</span>
    </v-footer>
    </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      pays:[
        {
          date: `24/12/94`,
          pay: 4800,
          payToCap: 2880,
          Int: 1920,
          total: 31680
        }
      ]
    }),
    methods:{
      logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.$router.push('/')
      }
    }

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