<template>
  <div id="login-page">

    <v-row>
      <v-col cols="6" class="izquierda">
        <div class="background"></div>
        <div class="content">
          <img src="@/assets/torre.svg" alt="" height="50%">
          <h2 class="primary--text">SISTEMA DE ADMINISTRACIÓN SINPECOR</h2>
        </div>
      </v-col>
      <v-col cols="6" class="derecha">
        <v-card raised class="card-login">
          
          <v-card-title class="primary white--text">Ingreso al sistema</v-card-title>
          
          <v-card-text>
            <v-form ref="formLogin" v-model="frmLogin.valido" lazy-validation>
              
              <v-text-field
                v-model="frmLogin.usuario.valor"
                :rules="frmLogin.usuario.reglas"
                :error-messages="frmLogin.usuario.error"
                label="Usuario"
                type="text"
                required
                hint="Usuario: admin"
                persistent-hint
                v-on:keyup.enter="login"
              ></v-text-field>

              <v-text-field
                v-model="frmLogin.clave.valor"
                :rules="frmLogin.clave.reglas"
                :error-messages="frmLogin.clave.error"
                label="Clave"
                type="password"
                required
                hint="clave: prueba"
                persistent-hint
                v-on:keyup.enter="login"
              ></v-text-field>

            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn
              :disabled="enviando"
              :loading="enviando"
              color="success"
              block
              class="mr-4"
              @click="login"
            >
              Ingresar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    

  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    frmLogin: {
      usuario: {
        valor: '',
        error: '',
        reglas: [
          v => !!v || 'Complete el nombre',
        ]
      },
      clave: {
        valor: '',
        error: '',
        reglas: [
          v => !!v || 'Complete la clave',
        ]
      },
      valido: false
    },
    enviando: false
  }),
  methods: {
    login: function () {
      this.enviando = true;
      const store = this.$store;

      if(!this.$refs.formLogin.validate()) {
          this.enviando = false;
          return false;
      }

      const datos = {
        usuario: this.frmLogin.usuario.valor,
        clave: this.frmLogin.clave.valor
      }

      // Reemplazo del backend //
      if(datos.usuario == 'admin' && datos.clave == 'prueba') {
        this.frmLogin.usuario.error = '';
        this.frmLogin.clave.error = '';

        store.dispatch('ingresar', {
          nombre: 'Administrador General',
          rol: 'Super Administrador',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluaXN0cmFkb3IgR2VuZXJhbCIsImlhdCI6MTUxNjIzOTAyMn0.jvdaoblIzbHpC9itvka6SiAAwmBpkvG8_tIm0fnxBcc'
        });
      }
      else {
        if(datos.usuario != 'admin') this.frmLogin.usuario.error = 'El usuario no existe.'
        else this.frmLogin.usuario.error = '';

        if(datos.clave != 'prueba') this.frmLogin.clave.error = 'Clave incorrecta.'
        else this.frmLogin.clave.error = '';
      }

      setTimeout(() => this.enviando = false, 500);
      // Reemplazo del backend //
    }
  }
}
</script>