<template>
    <input
        class="input is-small" 
        type="text"
        :placeholder = "placeholder"
        v-model="input"
        @keyup.enter = "monitorEnterKey"
    />
</template>


<script>
import EventBus from '../components/EventBus.js';

    export default{
        name: 'InputCommenti',
        props: ['placeholder'],
        
        data() {
            return {
                input: ''
            }
        },

        methods:{
            monitorEnterKey() {
                EventBus.$emit('add-note', {
                    note: this.input,
                    timestamp: new Date().toLocaleString()
                });
                this.input = '';
            }
        }
    }
</script>