<template>
    <input
        class="input is-small" 
        type="text"
        :placeholder = "placeholder"
    />
</template>


<script>
    export default{
        name: 'InputCommenti',
        props: ['placeholder'],
        
        data() {
            return {

            }
        },
        
    }
</script>