<template>
  <!-- <PadreDeportes />
  <PadreNumeross />
  <PadreComics /> -->
  <div>
    <MenuComponent />
    <hr />
    <router-view />
  </div>
</template>

<script>
// import PadreDeportes from './components/PadreDeportes.vue';
//import PadreNumeros from './components/PadreNumeros.vue';
//import PadreNumeross from './components/PadreNumeross.vue';
//import PadreComics from './components/PadreComics';
import MenuComponent from './components/MenuComponent';

export default {
  name: 'App',
  components: {
    // PadreDeportes,
    //PadreNumeross
    //PadreComics
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
