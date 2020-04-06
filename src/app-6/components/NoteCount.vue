<template>
    <div class="note-count">
        Note count: <strong>{{ contaNote }}</strong>
    </div>
</template>

<script>
    import EventBus from '../components/EventBus.js';

    export default{
        name: "NoteCount",
        
        data() {
            return{
                contaNote: 0
            }
        },

        created() {
           EventBus.$on('add-note', event => this.contaNote++);
        }
    }
</script>

<style>

</style>