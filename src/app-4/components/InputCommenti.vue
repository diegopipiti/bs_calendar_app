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
                
            }
        }
        
    }
</script>