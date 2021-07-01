<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>NT2 - TP8</h1>
      <br>
      <NavBar />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

#app {
}

h1 {
  color: blue;
}

.jumbotron {
  padding: 32px !important;
}

</style>
