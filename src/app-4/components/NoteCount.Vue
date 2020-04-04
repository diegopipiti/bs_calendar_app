<template>
  <div class="note-count">
      Note count: <strong>{{ noteCount }}</strong>
</div>
</template>

<script>
import EventBus from '../components/EventBus.js';

export default {
    name: "NoteCount",
    
    data() {
        noteCount: 0
    },

    created{
        EventBus.$on('add-note', event => this.noteCount++);
    }
}
</script>

<style>

</style>