<template>
  <div id="menu" v-if="loggeado">
    <v-navigation-drawer v-model="primaryDrawer.model" app permanent clipped expandOnHover miniVariant miniVariantWidth="50" class="fondo-menu">
      
      <ul class="navegacion">

        <li class="item-navegacion" v-ripple v-for="(item, i) in menu" :key="i">
          <router-link :to="item.to">
            <div class="icono"><i class="fas fa-fw" :class="item.icono"></i></div>
            <span class="texto">{{item.texto}}</span>
          </router-link>
        </li>

      </ul>
    
    </v-navigation-drawer>

    <v-app-bar color="primary" clippedLeft app dark>
      <img src="@/assets/torre2.svg" alt="" height="40px" style="margin-right:10px">
      <v-toolbar-title>Administración SinPeCor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn color="white" text dark v-on="on">
            <i class="fas fa-user-circle" style="font-size: 20px; margin-right: 10px;"></i>
            <span style="font-size: 12px;">{{ nombreUsuario }}</span>
            <i class="fas fa-angle-down" style="font-size: 14px; margin-left: 10px;"></i>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="$store.dispatch('salir')">
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    primaryDrawer: {
      model: null,
      absolute: true,
      clipped: false,
      floating: true,
      mini: false,
    },
    menu: [
      { type: 'link', texto: 'Home', icono: 'fa-home', to: '/home' },
      { type: 'link', texto: 'Usuarios', icono: 'fa-users', to: '/usuarios' },
    ],
  }),
  computed: {
    loggeado() {
      return this.$store.state.sesion != null;
    },
    nombreUsuario() {
      return this.$store.state.sesion != null? this.$store.state.sesion.nombre : '';
    }
  },
};
</script>