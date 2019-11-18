<template>
  <v-app>
    <Menu />
    <v-content>
      <transition name="fade">
        <router-view />
      </transition>
    </v-content>
  </v-app>

</template>

<script>
import Menu from './components/Menu';
export default {
  name: 'App',
  components: {
    Menu,
  },
  data: () => ({
  }),
  mounted() {
    this.$store.dispatch('restaurarSesion');
  }
};
</script>

<style lang="scss">
  @import 'scss/global';
</style>
