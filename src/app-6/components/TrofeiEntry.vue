<template>
  <div id="calendar-entry">
    <p style="color: red; font-size: 13px" v-if="error">
      You must type something first!
    </p>
    <div class="calendar-entry-note">
      <label style="color: red; font-weight: bold"> 
        Trofei: 
        <input 
          type="number" 
          v-model="inputEntry" required

        /> 
      </label>
      <p class="calendar-entry-day testoCent">
        Sniper: <span class="bold">{{ titleOfActiveSniper }}</span>
      </p>
      <a class="button is-primary is-small is-outlined submit centrato30"
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
      inputEntry: null,
      error: false
    }
  },
  computed: {
    titleOfActiveSniper () {
      return store.getActiveSniper().nome;
    },
    trofeiActiveBrawler () {
      return store.getActiveSniper().trofei;
    }
  },
  methods: {
    submitTrofei(numeroTrofei) {
      if(numeroTrofei === null)
        return this.error = true;

      store.submitTrofei(numeroTrofei);
      this.inputEntry = null;
      this.error = false;
      
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

.testoCent{
  text-align: center;
}

.centrato30{
  width: 30%;
}

</style>
