<template>
    <div id='brawler-sheet' style="display: flex; width: 100%" @click="setActiveBrawler(brawler.id)">
        <figure class="media-left">
            <img class="image is-64x64 image is-64x92"
            :src="brawler.brawlerImage">
        </figure>
        <div class="media-content">
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
        <div class="media-right">
            <span class="icon is-small" v-on:click="upVote(3)">
                <i class="fa fa-chevron-up"></i>
                <strong class="has-text-info">{{brawler.trofei}}</strong>
            </span>
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

</style>