<template>
    <v-content >
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Correo electronico" name="mail" prepend-icon="fa-user" type="mail" v-model="name" required>
                                </v-text-field>

                                <v-text-field id="password" label="Contraseña" name="password" prepend-icon="fa-lock"
                                    type="password" v-model="pass"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn color="primary" @click="sendMail">Iniciar sesión</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
          <v-snackbar
            v-model="alert"
            >
            {{alertText}}
            <v-btn
                color="pink"
                text
                @click="alert = false"
            >
                Cerrar
            </v-btn>
            </v-snackbar>
    </v-content>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        name:"",
        pass:'',
        alert: false,
        alertText: ""
    }),
    props:['result'],
    methods:{
        sendMail(){
            if(this.name === ""  || this.pass === ""){
                this.alert = true;
                this.alertText = "No puedes dejar ningun campo vacio";
                return
            }
            axios.post('http://ec2-54-91-193-72.compute-1.amazonaws.com:3000/auth/login', 
                {
                    email: `Pinkie.Will85@yahoo.com`,//this.name,
                    password:`dn2TGpvj5gq7OD3`// this.pass
                }
            )
            .then( (response)=> {
                const {data} = response;
                if(data.access_token){
                    localStorage.setItem("token", data.access_token);
                    const dataUser = JSON.stringify(data.user)
                    localStorage.setItem("user", dataUser);
                    this.$router.push('/user')
                }
            })
            .catch( (error) =>{
                const {data} = error.response;
                this.alert = true;
                this.alertText = data.message;
            });
        }
    }
};
</script>