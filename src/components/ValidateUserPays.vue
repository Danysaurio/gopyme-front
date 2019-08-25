<template>
    <v-card class="elevation-12">
        <v-toolbar color="teal" dark flat>
            <v-toolbar-title>Validar tienda en linea</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <p class="text-center">
                Para validar la viabilidad del préstamo resucitamos revisar tus estados de cuenta
                en PayPal no te preocupes <b>ninguna de tus llaves quedara guardada</b> en ninguna parte 
                solo las utilizaremos una sola vez
            </p>
            <v-form>
                <div class="d-flex align-center validate-item-box ">
                    <v-text-field label="clent_id" name="clent_id" prepend-icon="fa-key" type="text" v-model="clientid"></v-text-field>              
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon right class="ask-icon" v-on="on">fa-question-circle</v-icon>
                        </template>
                        <span>Para encontrar eso bla bla bla</span>
                    </v-tooltip>
                </div>
                 <div class="d-flex align-center validate-item-box ">
                    <v-text-field label="clent_secret" name="clent_secret" prepend-icon="fa-key" type="text" v-model="clientsecret"></v-text-field>              
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon right class="ask-icon" v-on="on">fa-question-circle</v-icon>
                        </template>
                        <span>Para encontrar eso bla bla bla</span>
                    </v-tooltip>
                </div>
            </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;">
            <v-btn color="primary" @click="sendMail"> Enviar <v-icon right>fa-paper-plane</v-icon>
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
        clientid:'',
        clientsecret:'',
        alert:false,
        alertText:''
    }),
    methods:{
        sendMail(){
            if(this.clientid === ""  || this.clientid === ""){
                this.alert = true;
                this.alertText = "No puedes dejar ningun campo vacio";
                return
            }
            let user = localStorage.getItem("user");
            if(user){
                user = JSON.parse(user)
            }
            
            if(!user.email) return;

            this.$swal({
                title: 'Un momento por favor.',
                timer: 3000,
                text: 'Estamos revisando tus datos...',
                onBeforeOpen: () => {
                    this.$swal.showLoading()
                },
                onClose: () => {
                    this.$set(this.$store.state, 'step', 3)
                    const paymentsRes = {
                        "payments": 4800,
                        "interestPerMounth": 19200,
                        "capitalPerMount": 28800,
                        "capitalAprobe": 345600,
                        "interestTotal": 230400,
                        "id": 2
                    }
                    this.$set(this.$store.state, 'payments', paymentsRes);
                    /*
                    axios.post('http://a0c694a9.ngrok.io/paypal', 
                        {  
                            clientid: "AdaZ7LqinnLXSwlZJzTFvs5JWq1J7GycWfwsODpKG5E6vzIkr6E7eIidw8fiXqQaiOeoPA5HCrSQbi1K",
                            clientsecret: "EKsVEYd49I4V9A-2Jepf1GMDq6wRK-eA-8oKsNSD-o_GFvlfhLqcxgY6EOqzLLWUj1zsBzSJXS6kJ1Tx",
                            email: user.email

                        }
                    )
                    .then( (response)=> {
                        const {data} = response;
                     
                        
                    })
                    .catch( (error) =>{
                        console.log(error)
                    });*/
                }
            });
         
        }
    }
};
</script>
<style lang="scss" >
    .validate-item-box{
        max-width: 80%;
        margin: 0 auto;
        .ask-icon {
           margin-left: 1em;
           opacity: .4;
        }
    }
</style>