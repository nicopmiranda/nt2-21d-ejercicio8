<template>

  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>

      <button class="btn btn-info my-3 mx-3" @click="getUsuariosCb()">Pedir Usuarios XMLHttpRequest</button>    
      <button class="btn btn-warning my-3 mx-3" @click="getUsuariosFetch()">Pedir Usuarios FETCH</button>    
      <button class="btn btn-danger my-3 mx-3" @click="getUsuariosAxios()">Pedir Usuarios AXIOS</button>
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

      /* --------------------------------------------------------------- */
      /*              AJAX: Asynchronous Javascript And XML              */
      /* --------------------------------------------------------------- */
      
      /* ------ AJAX: XMLHttpRequest ------ */
      getUsuariosCb() {
        //Creo la instancia de comunicación asincrónica AJAX con XMLHttpRequest
        let xhr = new XMLHttpRequest
        //Configuro dicha instancia
        xhr.open('get', this.url)
        //Registro el evento de fin de la comunicación
        xhr.addEventListener('load', () => {
          //La comunicación finalizó en forma exitosa
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest',respuesta)
            this.usuarios = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
            console.error(`Error XMLHttpRequest ->`, e)
        })
        //Envío la petición al servidor
        xhr.send()
        //Pongo el método pedido
        this.tipo = "XMLHttpRequest";
      },

      /* ------ AJAX: FETCH ------ */
      getUsuariosFetch() {
          fetch(this.url)
          .then(datos => datos.json())
          .then(respuesta => {
            console.log('FETCH', respuesta)
            this.usuarios = respuesta
          })
          .catch(error => console.error(error))
          
          this.tipo = "Fetch";
      },

      /* ------ AJAX: AXIOS ------ */
      //https://github.com/axios/axios
      //https://www.npmjs.com/package/axios
      //https://www.npmjs.com/package/vue-axios
      //npm i axios vue-axios
      getUsuariosAxios() {
          this.axios(this.url)
          .then(respuesta => {
            console.log('AXIOS', respuesta.data)
            this.usuarios = respuesta.data
          })
          .catch(error => console.error(error))

          this.tipo = "Axios";
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
