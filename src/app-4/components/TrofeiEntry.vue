<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <label style="color: red; font-weight: bold"> 
        Trofei: 
        <input 
          type="number" 
          v-model="inputEntry" required

        /> 
      </label>
      <p class="calendar-entry-day">
        Brawler: <span class="bold">{{ titleOfActiveBrawler }}</span>
      </p>
      <a class="button is-primary is-small is-outlined"
        @click="submitTrofei(inputEntry)">
        Submit
        </a>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'TrofeiEntry',
  data(){
    return{
      inputEntry: null
    }
  },
  computed: {
    titleOfActiveBrawler () {
      return store.getActiveBrawler().nomeIta;
    },
    trofeiActiveBrawler () {
      return store.getActiveBrawler().trofei;
    }
  },
  methods: {
    submitTrofei(numeroTrofei) {
      store.submitTrofei(numeroTrofei);
      this.inputEntry = null;
      
    }
  }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
