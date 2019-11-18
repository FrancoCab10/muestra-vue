<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col xl="2" lg="3" md="4" cols="12" sm="6" v-for="(sis, i) in sistemas" :key="i">
          
          <v-card :style="{background: 'linear-gradient('+sis.bg+')'}" hover ripple>
            <v-row>
              <v-col cols="6" offset="3" style="text-align:center;">
                <br>
                <img :src="'/icons/'+sis.icono+'.svg'" class="icono-sistema">
              </v-col>
              <v-col cols="12">
                <v-card-title :style="{color: sis.color}" v-text="sis.nombre"></v-card-title>
              </v-col>
            </v-row>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  .icono-sistema {
    height: 80px;
  }
</style>

<script>
export default {
  name: 'home',
  data: () => ({
    sistemas: []
  }),
  methods: {
    
    listarSistemas() {
      this.axios.get('/data/sistemas.json')
        .then( resp => this.sistemas = resp.data );
    }

  },
  mounted() {
    this.listarSistemas();
  }
}
</script>


