<template> 
  <v-card>
    <v-data-table
      :headers="headers"
      :items="usuariosFiltrado"    
      :loading="loading"    
    >
      <template v-slot:header="" class="primary white--text"></template>

      <template v-slot:item.estado="{ item }">
        <strong :class="{ 'red--text': item.estado == 'Inactivo', 'green--text': item.estado == 'Activo' }">{{ item.estado }}</strong>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "ListadoUsuarios",
  props: { filtros: Object },
  data: () => ({
    loading: true,
    headers: [
      { text: 'Usuario', align: 'left', sortable: true, value: 'usuario' },
      { text: 'Apellido', align: 'left', sortable: true, value: 'apellido' },
      { text: 'Nombre', align: 'left', sortable: true, value: 'nombre' },
      { text: 'E-mail', align: 'left', sortable: true, value: 'email' },
      { text: 'Estado', align: 'right', sortable: true, value: 'estado' }
    ],
    usuariosLista: []
  }),
  computed: {
    usuariosFiltrado() {
      return this.usuariosLista.filter( item => {
        return (
          item.usuario.includes(this.filtros.usuario) &&
          item.estado.includes(this.filtros.estado) &&
          item.email.includes(this.filtros.email) &&
          item.apellido.includes(this.filtros.apellido) &&
          item.nombre.includes(this.filtros.nombre)
        );
      });
    }
  },
  methods: {

    listarUsuarios() {
      this.axios.get('/data/usuarios.json')
        .then(resp => this.usuariosLista = resp.data)
        .then( () => this.loading = false );
    }

  },
  mounted() {
    this.listarUsuarios();
  }
}
</script>