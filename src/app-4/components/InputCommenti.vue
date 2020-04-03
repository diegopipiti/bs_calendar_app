<template>
    <input
        class="input is-small" 
        type="text"
        :placeholder = "placeholder"
        v-model="input"
        @key.enter = "monitorEnterKey"
    />
</template>


<script>
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
                this.$emit('add-note', {
                    note: this.input,
                    timestamp: new Date().toLocaleString()
                });
                this.input = '';
            }
        }
    }
</script>