<template>
  <div id="app">
    <ListaSnipers />
    <TrofeiEntry />
    <ListaCommenti />
  </div>
</template>

<script>

import ListaSnipers from "./components/ListaSnipers.vue";
import TrofeiEntry from "./components/TrofeiEntry.vue";
import ListaCommenti from "./components/ListaCommenti.vue";

export default {
  name: 'App',
  components: {
    ListaSnipers,
    TrofeiEntry,
    ListaCommenti
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  //height: inherit;
  background: #6e6e6e;
  //display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
