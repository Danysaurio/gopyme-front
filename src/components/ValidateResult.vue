<template>
    <v-card class="elevation-12">
        <v-toolbar :color="result ? 'teal': 'red'" dark flat>
            <v-toolbar-title>Resultado</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <div class="text-center">
                <v-icon :color="payments ? 'teal': 'red'" :size="80">far fa-smile-beam</v-icon>
                <h4 class="display-1 primary-text teal--text" style="margin-top:10px">
                    {{payments ? '¡Felicidades!': 'Lo sentimos' }}
                </h4>
                <p>Tu credito ha sido aprobado por la cantidad de <b>${{payments.capitalAprobe}}</b> <br>y tus pagos mensuales tan solo seran de <b>${{payments.payments}}</b></p>

            </div>
        </v-card-text>
         <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;">
            <v-btn color="primary"> Solicitar prestamo 
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({}),
    props:['result'],
    computed:{
        payments(){
            return this.$store.state.payments
        }
    }
};
</script>
<style lang="scss" >

</style>