<template> 
    <div class="notes-section">
      
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="note in notes" class="notes">
            {{ note }}
          </div>
        </div>

        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="timestamp in timestamps" class="timestamps">
            {{ timestamp }}
          </div>
        </div>
      </div>
        <InputCommenti :placeholder="placeholder"></InputCommenti>
    </div>
</template>


<script>
    import InputCommenti from '../components/InputCommenti.vue';
    
    export default{
        name: 'ListaCommenti',

        data() {
            return {
                notes: [],
                timestamps: [],
                placeholder: 'Enter a note'
            }
        },

        components: {
            InputCommenti,
        }
    }
</script>


<style>

</style>