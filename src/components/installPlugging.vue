<template>
    <v-card class="elevation-12">
        <v-toolbar color="teal" dark flat>
            <v-toolbar-title>Instalar pluggin</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-center">
            <h3>
                Para depositar los fondos en tu cuenta necesitas instalar el pluggin de gopyme en tu e-commerce:
            </h3>
            <v-row class="mt-10">
                <v-col class="text-center">
                    <v-btn color="blue" class="white--text" >  Wordpress</v-btn>
                </v-col>
                <v-col class="text-center">
                    <v-btn color="blue" class="white--text"> Shopify </v-btn>
                </v-col>
                <v-col class="text-center">
                    <v-btn color="blue" class="white--text"> PrestaShop </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;" >
            <v-btn color="primary" @click="validate"> Validar instalación</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({}),
    methods:{
        validate(){
            this.$swal({
                title: 'Un momento por favor.',
                timer: 3000,
                text: 'Estamos revisando si el pluggin esta instalado..',
                onBeforeOpen: () => {
                    this.$swal.showLoading()
                },
                onClose: () => {
                    this.$swal('¡Felicidades!',"La verificación fue exitosa, los fondos seran depositados en breve", 'success')
                    this.$router.push('/user')
                }
            });
        }
    }
};
</script>
