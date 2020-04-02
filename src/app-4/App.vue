<template>
  <div id="app">
    <ListaBrawler />
    <TrofeiEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';
import ListaBrawler from "./components/ListaBrawler.vue";
import TrofeiEntry from "./components/TrofeiEntry.vue";

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
    ListaBrawler,
    TrofeiEntry
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
