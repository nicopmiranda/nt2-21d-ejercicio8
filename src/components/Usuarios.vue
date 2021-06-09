<template>

  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>

      <button class="btn btn-danger my-3 mx-3" @click="getUsuariosAxiosAsyncAwait()">Pedir Usuarios AXIOS con Async Await</button>
      <button class="btn btn-info my-3 mx-3" @click="getUsuariosAxiosThenCatch()">Pedir Usuarios AXIOS con Then Catch</button>
      <label class="mx-3" v-if="tipo.length">Usuarios pedidos con {{tipo}}</label>

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-striped table-dark">
          <thead class="thead-dark">
            <tr>
              <th v-for="(col, index) in getKeysUsuarios" :key="index">{{col}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td v-for="(col, index) in getKeysUsuarios" :key="index">{{usuario[col]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos o no fueron pedidos de momento</h4>

    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60adc5c380a61f0017331a4f.mockapi.io/tp4/usuarios',
        usuarios : [],
        tipo: ""
      }
    },
    methods: {
      /* ------ AJAX: AXIOS ------ */
      //https://github.com/axios/axios
      //https://www.npmjs.com/package/axios
      //https://www.npmjs.com/package/vue-axios
      //npm i axios vue-axios
      getUsuariosAxiosThenCatch() {
        this.axios(this.url)
        .then(respuesta => {
          console.log('Then, catch', respuesta.data)
          this.usuarios = respuesta.data
        })
        .catch(error => console.error(error))

        this.tipo = "then catch";
      },
      async getUsuariosAxiosAsyncAwait(){
        try {
          let res = await this.axios.get(this.url);
          this.usuarios = res.data;
          this.tipo = "async await";
        } catch (error) {
          console.log(error);
          this.tipo = "async await, pero falló";
        }
      }

    },
    computed: {
      getKeysUsuarios() {
        return Object.keys(this.usuarios[0])
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-usuarios {

  }

  .jumbotron {
    background-color: salmon;
    color: black;
  }

  hr {
    background-color: #fff;
  }

  h2{
    color: blueviolet;
  }
</style>
