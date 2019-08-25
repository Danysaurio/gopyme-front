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
                            :autofocus="true"></v-text-field>
                        <v-text-field label="Correo electronico" name="name" prepend-icon="fa-envelope" type="mail">
                        </v-text-field>
                        <v-text-field label="RFC" name="rfc" prepend-icon="fa-id-card" type="text"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Nombre de la empresa" name="campanyName" prepend-icon="fa-building"
                            type="text"></v-text-field>
                        <v-text-field label="Sitio Web" name="sw" prepend-icon="fa-globe" type="text"></v-text-field>
                        <v-text-field id="password" label="Password" name="password" prepend-icon="fa-lock"
                            type="password"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions class="d-flex justify-center" style="padding-bottom:1.5em;">
            <v-btn color="primary"> Registrarme <v-icon right>fa-paper-plane</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({})
};
</script>
