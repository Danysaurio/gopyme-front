<template>
    <v-card class="elevation-12">
        <v-toolbar color="teal" dark flat>
            <v-toolbar-title>Validar tienda en linea</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          
        </v-card-text>
        <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;">
            <v-btn color="teal"> Enviar <v-icon right>fa-paper-plane</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({})
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