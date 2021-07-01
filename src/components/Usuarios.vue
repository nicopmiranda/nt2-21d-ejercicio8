<template>

  <section class="src-components-usuarios">
    <div class="jumbotron">
      <h2>Usuarios</h2>
      <hr>

      <button class="btn btn-danger my-3 mx-3" @click="$store.dispatch('getUsersAxiosAsyncAwait')">Pedir Usuarios AXIOS con Async Await</button>
      <button class="btn btn-info my-3 mx-3" @click="$store.dispatch('getUsersAxiosThenCatch')">Pedir Usuarios AXIOS con Then Catch</button>
      <label class="mx-3" v-if="$store.state.type.length">Usuarios pedidos con {{$store.state.type}}</label>

      <div v-if="getUsersLength" class="table-responsive">
        <table class="table table-striped table-dark">
          <thead class="thead-dark">
            <tr>
              <th v-for="(col, index) in getKeysFromUsers" :key="index">{{col}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in $store.state.users" :key="index">
              <td v-for="(col, index) in getKeysFromUsers" :key="index">{{user[col]}}</td>
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
      }
    },
    methods: {
    },
    computed: {
      
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
