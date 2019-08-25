<template>
    <v-card class="elevation-12">
        <v-toolbar color="teal" dark flat>
            <v-toolbar-title>Validar tienda en linea</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <p class="text-center">
                Para validar la viabilidad del prestamo nesecitamos revisar tus estados de cuenta
                en PayPal no te preocupes <b>ninguna de tus llaves quedara guardada</b> en ninguna parte 
                solo las utilizaremos una sola vez
            </p>
            <v-form>
                <div class="d-flex align-center validate-item-box ">
                    <v-text-field label="clent_id" name="clent_id" prepend-icon="fa-key" type="text"></v-text-field>              
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon right class="ask-icon" v-on="on">fa-question-circle</v-icon>
                        </template>
                        <span>Para encontrar eso bla bla bla</span>
                    </v-tooltip>
                </div>
                 <div class="d-flex align-center validate-item-box ">
                    <v-text-field label="clent_secret" name="clent_secret" prepend-icon="fa-key" type="text"></v-text-field>              
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
            <v-btn color="primary"> Enviar <v-icon right>fa-paper-plane</v-icon>
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