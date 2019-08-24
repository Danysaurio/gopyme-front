<template>
  <div id="inspire">
    <v-content style="padding:0">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-stepper v-model="step">
              <v-stepper-header>
                <v-stepper-step :complete="step > 1" step="1">Registro</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="step > 2" step="2">Validación</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Resultado</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>

                <v-stepper-content step="1">
                  <CreateUserForm></CreateUserForm>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <ValidateUserPays></ValidateUserPays>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                  <v-btn color="primary" @click="e1 = 1">
                    Continue
                  </v-btn>
                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import CreateUserForm from '../components/CreateUserForm.vue'
import ValidateUserPays from '../components/ValidateUserPays.vue'
import ValidateResult from '../components/ValidateResult'
  export default {
    components:{
        CreateUserForm,
        ValidateUserPays
    },
    data: () => ({
      step:3
    }),
  }
</script>
