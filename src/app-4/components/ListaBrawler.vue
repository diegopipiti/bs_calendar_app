<template>
    <div class="section">
            <article class="media sfondoW" 
                v-for="brawler in sharedState.brawlersData" 
                v-bind:key="brawler.id"
                v-bind:class="{ 'blue-border': brawler.trofei >= 20 }">
                
                <brawlerSheet
                v-bind:brawler="brawler"
                
                >
                </brawlerSheet>
                <!-- sopra manca  v-bind:brawlers="sortedBrawlers"-->
            </article>
        </div>
</template>

<script>
    import { store } from "../store.js";
    import BrawlerSheet from "@BrawlerSheet.Vue";

    export default{
        name: 'ListaBrawler',
        
        data () {
            return {
                sharedState: store.state
            }
        },

        components: {
            BrawlerSheet
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

</style>