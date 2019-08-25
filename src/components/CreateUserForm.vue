<template>
    <v-card class="elevation-12">
        <v-toolbar color="teal" dark flat>
            <v-toolbar-title>Crear cuenta</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field label="Nombre completo" name="name" prepend-icon="fa-user" type="text"
                            :autofocus="true" v-model="form.name"></v-text-field>
                        <v-text-field label="Correo electronico" name="mail" prepend-icon="fa-envelope" type="mail" v-model="form.mail">
                        </v-text-field>
                        <v-text-field label="RFC" name="rfc" prepend-icon="fa-id-card" type="text" v-model="form.rfc"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Nombre de la empresa" name="companyName" prepend-icon="fa-building"
                            type="text" v-model="form.companyName"></v-text-field>
                        <v-text-field label="Sitio Web" name="sw" prepend-icon="fa-globe" type="text" v-model="form.sw" ></v-text-field>
                        <v-text-field id="password" label="Password" name="password" prepend-icon="fa-lock"
                            type="password" v-model="form.password"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;" >
            <v-btn color="primary" @click="sendResgister"> Registrarme <v-icon right>fa-paper-plane</v-icon>
            </v-btn>
        </v-card-actions>
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
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        form:{
            name:"",
            mail:"",
            rfc:"",
            companyName:"",
            sw:"",
            password:""
        },
        alert:false,
        alertText:''
    }),
    methods:{
        sendResgister(){
            for(const item in this.form){
                const el = this.form[item];
                if(!el){
                    this.alert = true;
                    this.alertText = "No puedes dejar ningun campo vacio";
                    return
                }
            }
             axios.post('http://a0c694a9.ngrok.io/user', 
                {
                    name: this.form.name,
                    mail: this.form.mail,
                    rfc: this.form.rfc,
                    campanyName: this.form.campanyName,
                    sw: this.form.sw,
                    password: this.form.password
                }
            ).then(res=>{
                this.$set(this.$store.state, 'step', 2)
                this.$swal('Registro exitoso','','success');
           
            }).catch(err=>{
                this.$swal('Algo salio mal intenta mas tarde','','error');

            })
        }
    }
};
</script>
