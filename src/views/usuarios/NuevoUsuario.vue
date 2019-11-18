<template>
  <v-dialog v-model="dialog" max-width="600px" @click:outside="cerrar()">
    <v-card>
      <v-card-title class="nombre_modulo">
        <span class="headline">Nuevo Usuario</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
          <v-form ref="formNuevo">
            <v-container>
              <v-row>
                
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formNuevo.usuario.value"
                    :rules="formNuevo.usuario.rules"
                    label="Usuario"
                    required>
                  </v-text-field>
                </v-col> 

                <v-col cols="12" md="6">
                  <v-text-field
                    type="password"
                    v-model="formNuevo.pass1.value"
                    :rules="formNuevo.pass1.rules"
                    label="Contraseña"
                    required>
                  </v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="formNuevo.nombre.value"
                    :rules="formNuevo.nombre.rules"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="formNuevo.apellido.value"
                    :rules="formNuevo.apellido.rules"
                    label="Apellido"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="formNuevo.email.value"
                    :rules="formNuevo.email.rules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>

              </v-row>
            </v-container>
          </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pie_modulo">
        <v-spacer></v-spacer>
        <v-btn color="error" depressed  @click="cerrar()">Salir</v-btn>
        <v-btn color="primary" depressed  @click="cerrar()">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "NuevoUsuario",
  props: {
    dialog: Boolean
  },
  data: () => ({
    formNuevo: {
      nombre: {
        value: '',
        rules: [v => !!v || 'Ingrese un nombre'],
      },
      apellido: {
        value: '',
        rules: [v => !!v || 'Ingrese un apellido'],
      },
      email: {
        value: '',
        rules: [
          v => !!v || 'Ingrese un e-mail',
          v => /.+@.+/.test(v) || 'E-mail inválido',
        ],
      },
      usuario: {
        value: '',
        rules: [
          v => !!v && v.length <= 10 && v.length >= 5 || 'Ingrese un usuario entre 5 y 10 caracteres',
        ],
      },
      pass1: {
        value: '',
        rules: [
          v => !!v || 'Ingrese una contraseña',
        ],
      }
    }
  }),
  methods: {
    cerrar() {
      this.$refs.formNuevo.reset();
      this.$emit('cerrar');
    }
  }
}
</script>