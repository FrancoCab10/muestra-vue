<template>
  <v-container fluid> 

    <!-- Modal de carga de datos -->
    <v-row justify="center">
      <NuevoUsuario :dialog="dialog" @cerrar="dialog = false;"/>
    </v-row>

    <!-- Main -->
    <v-row>

      <!-- Filtros -->
      <v-col cols="12" md="4" lg="3">
        <v-card>
          <v-list-item class="primary">
            <v-list-item-subtitle class="font-weight-bold text-left white--text">USUARIOS</v-list-item-subtitle>

              <v-row>
                <v-col
                  cols="4"
                  md="3"
                >
                  <v-btn
                    color="secondary"
                    small
                    absolute              
                    bottom
                    right
                    fab             
                    dark
                    @click.stop="dialog = true"
                  >              
                    <v-icon small>fas fa-user-plus</v-icon>
                  </v-btn>      
                </v-col>
              </v-row>
            </v-list-item>

            <v-divider></v-divider>

            <v-card-text>
              <v-text-field
                v-model="filtros.usuario"
                label="Usuario"
              ></v-text-field>
              <v-text-field
                v-model="filtros.nombre"
                label="Nombre"
              ></v-text-field>
              <v-text-field
                v-model="filtros.apellido"
                label="Apellido"
              ></v-text-field>
              <v-text-field
                v-model="filtros.email"
                label="E-mail"
              ></v-text-field>
              <v-select
                :items="['Activo', 'Inactivo']"
                v-model="filtros.estado"
                label="Estado"
              ></v-select>
            </v-card-text>
        </v-card>
      </v-col> 
    
      <!-- Listado -->
      <v-col cols="12" md="8" lg="9">
        <ListadoUsuarios :filtros="filtros"/>
      </v-col>

    </v-row>
      
  </v-container>
</template>

<script>
  import NuevoUsuario from "./NuevoUsuario.vue";
  import ListadoUsuarios from "./ListadoUsuarios.vue";

  export default {
    name: "Usuarios",
    data: () => ({ 
      dialog: false,
      filtros: {
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        estado: ''
      }
    }),
    components: {
      ListadoUsuarios,
      NuevoUsuario
    }
  }
</script>