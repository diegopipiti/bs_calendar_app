<template>
    <div id='brawler-sheet' style="display: flex; width: 100%" @click="setActiveBrawler(brawler.id)">
        <figure class="media-left">
            <img class="image is-64x64 image is-64x92"
            :src="brawler.brawlerImage">
        </figure>

        <!-- Rendering relativo alla UI NORMALE -->
        <div class="media-content" v-if="!brawler.edit">
            <div class="content">
                <p>
                    <strong>
                        <a :href="brawler.url" class="has-text-info">{{brawler.nomeIta}}</a> &nbsp
                        <a v-if="brawler.nomeIta !== brawler.nomeEng" v-bind:href="brawler.url" class="has-text-info" ><font color="red">{{brawler.nomeEng}}</font></a>
                        <span class="tag is-small">#{{brawler.id}}</span>
                    </strong>
                    <br>
                        {{brawler.descrizione}}
                    <br>
                        <p class="lista-piccola"><span class="red-text">Punti vita: </span>{{brawler.puntiVita}}</p>
                        <p class="lista-piccola"><span class="red-text">Attacco:</span> {{brawler.attacco}}</p>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                        :src="brawler.avatar">
                    </small>
                </p>
            </div>
        </div>
        
        <!-- Rendering relativo alla UI EDIT -->
        <div class="media-content" v-if="brawler.edit">
            <div class="content">
                <p>
                    <strong>
                        ITA: <input class="has-text-info" type = "text" :value="brawler.nomeIta"/> &nbsp
                        ENG: <input class="has-text-info" type = "text" :value="brawler.nomeEng"/>
                        <span class="tag is-small">#{{brawler.id}}</span>
                    </strong>
                    <br>
                        <textarea class="has-text-info col10" type = "text" :value="brawler.descrizione">
                        </textarea>
                    <br>
                        <p class="lista-piccola"><span class="red-text">Punti vita: </span>
                            <input class="has-text-info" type = "text" :value="brawler.puntiVita"/>
                        </p>
                        <p class="lista-piccola"><span class="red-text">Attacco:</span> 
                            <input class="has-text-info" type = "text" :value="brawler.attacco"/>
                        </p>
                        <p class="lista-piccola"><span class="red-text">Trofei:</span> 
                            <input class="has-text-info" type = "text" :value="brawler.trofei"/>
                        </p>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                        :src="brawler.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <div><strong class="has-text-info" v-if="!brawler.edit">{{brawler.trofei}}</strong></div>
            <div class="icon is-small" v-on:click="editBrawler(brawler.id)">
                <i class="fa fa-pencil-square edit-icon"></i>
            </div>
        </div>
    </div>
</template>


<script>

import { store } from '../store.js';

export default {
    name: 'BrawlerSheet',
    props: ['brawler'],
    methods: {
        setActiveBrawler(brawlerId) {
            store.setActiveBrawler(brawlerId);
        },
        editBrawler(brawlerId){
            store.editBrawler(brawlerId);
        }
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

.col10{
    margin-top: 5px;
    width: 408px;
    height: 60px;
}

</style>