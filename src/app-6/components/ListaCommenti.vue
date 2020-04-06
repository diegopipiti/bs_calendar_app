<template> 
    <div class="notes-section">
      
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="note in notes" class="nota">
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
      
      <InputCommenti 
      :placeholder="placeholder">
      </InputCommenti>

      <NoteCount> </NoteCount>

    </div>
</template>


<script>
    import InputCommenti from '../components/InputCommenti.vue';
    import NoteCount from "../components/NoteCount.vue";
    import EventBus from '../components/EventBus.js';
    
    export default{
        name: 'ListaCommenti',

        data() {
            return {
                notes: [],
                timestamps: [],
                placeholder: 'Enter a note'
            }
        },

        methods:{
          addNote(event){
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
          }
        },

        created() {
          EventBus.$on('add-note', event => this.addNote(event));
        },

        components: {
            InputCommenti,
            NoteCount
        }
    }
</script>


<style>
.nota{
  color: #454141;
  background: blanchedalmond;
  
}

</style>