<template>
    <div class="section">
            <article class="media noBorder" 
                v-for="sniper in sharedState.snipersData" 
                v-bind:key="sniper.id"
                v-bind:class="{ 'blue-border': sniper.trofei >= 20 }">
                
                <SniperSheet
                v-bind:sniper="sniper"
                
                >
                </SniperSheet>
                <!-- sopra manca  v-bind:brawlers="sortedBrawlers"-->
            </article>
        </div>
</template>

<script>
    import { store } from "../store.js";
    import SniperSheet from '../components/SniperSheet.vue';

    export default{
        name: 'ListaSnipers',
        
        data () {
            return {
                sharedState: store.state
            }
        },

        components: {
            SniperSheet
        }
    }
</script>


<style lang="css" scoped>
#brawler-sheet {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.red-text{
  color: red;
  font-weight: 800; 
}

.w-text{
  color: white;
}

.lista-piccola{
  font-size: 0.7em;
}

.image.is-64x92{
  position: relative;
  top: 5px;
  border-radius: 20px;
  width: 64px;
  height: auto;
}

.noBorder{
  border: none;
}

</style>