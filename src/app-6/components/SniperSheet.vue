<template>
    <div id='brawler-sheet' style="display: flex; width: 100%" @click="setActiveSniper(sniper.id)">
        <figure class="media-left">
            <img class="image is-64x64 image is-64x92"
            :src="sniper.sniperImage">
        </figure>

        <!-- Rendering relativo alla UI NORMALE -->
        <div class="media-content" v-if="!sniper.edit">
            <div class="content">
                <p>
                    <strong>
                        <div class="has-text-info">{{sniper.nome}}</div> &nbsp
                        <div class="has-text-info" ><font color="red">{{sniper.soprannome}}</font></div>
                        <span class="tag is-small">#{{sniper.id}}</span>
                    </strong>
                    <br>
                        {{sniper.descrizione}}
                    <br>
                        <p class="lista-piccola"><span class="red-text">Trofei: </span>{{sniper.trofei}}</p>
                        <p class="lista-piccola"><span class="red-text">Kill:</span> {{sniper.kill}}</p>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                        :src="sniper.avatar">
                    </small>
                </p>
            </div>
        </div>
        
        <!-- Rendering relativo alla UI EDIT -->
        <div class="media-content" v-if="sniper.edit">
            <div class="content">
                <p>
                    <strong>
                        Nome: <input class="has-text-info" type = "text" :placeholder="sniper.nome" v-model="nuovoSniper.nome"/> &nbsp
                        ENG: <input class="has-text-info" type = "text" :placeholder="sniper.soprannome" v-model="nuovoSniper.soprannome"/>
                        <span class="tag is-small">#{{sniper.id}}</span>
                    </strong>
                    <br>
                        <textarea class="has-text-info col10" type = "text" :placeholder="sniper.descrizione" v-model="nuovoSniper.descrizione">
                        </textarea>
                    <br>
                        <p class="lista-piccola"><span class="red-text">Trofei: </span>
                            <input class="has-text-info" type = "number" :placeholder="sniper.trofei" v-model="nuovoSniper.trofei"/>
                        </p>
                        <p class="lista-piccola"><span class="red-text">Kill:</span> 
                            <input class="has-text-info" type = "number" :placeholder="sniper.kill" v-model="nuovoSniper.kill"/>
                        </p>
                        <p class="lista-piccola"><span class="red-text">Posizioni:</span> 
                            <input class="has-text-info" type = "number" :placeholder="sniper.posizioni" v-model="nuovoSniper.posizioni"/>
                        </p>
                    <small class="is-size-7">
                        Submitted by:
                        <img class="image is-24x24"
                        :src="sniper.avatar">
                    </small>
                </p>
            </div>
        </div>
        <div class="media-right">
            <div v-if="!sniper.edit" class="icon is-small" v-on:click="editSniper(sniper.id)">
                <div><strong class="has-text-info">{{sniper.trofei}}</strong></div>
                <i class="fa fa-pencil-square edit-icon"></i>
            </div>
            <div v-if="sniper.edit" class="icon is-small" v-on:click="updateSniper(sniper.id, nuovoSniper)">
                <i class="fa fa-check"></i>
            </div>
        </div>
    </div>
</template>


<script>

import { store } from '../store.js';

export default {
    name: 'SniperSheet',
    props: ['sniper'],
    data() {
        return {
            nuovoSniper : {
                nome: '',
                soprannome: '',
                descrizione: '',
                trofei: null,
                kill: null,
                posizioni:null
            }
        }
    },
    methods: {
        setActiveSniper(sniperId) {
            store.setActiveSniper(sniperId);
        },
        editSniper(sniperId){
            store.editSniper(sniperId);
        },
        updateSniper(sniperId, nuovoSniper) {
            
            //controlla se i campi siano riempiti
            this.nuovoSniper.nome = this.checkEmpty(this.nuovoSniper.nome, this.sniper.nome);
            this.nuovoSniper.soprannome = this.checkEmpty(this.nuovoSniper.soprannome, this.sniper.soprannome);
            this.nuovoSniper.descrizione = this.checkEmpty(this.nuovoSniper.descrizione, this.sniper.descrizione);
            this.nuovoSniper.trofei = this.checkEmpty(this.nuovoSniper.trofei, this.sniper.trofei);
            this.nuovoSniper.kill = this.checkEmpty(this.nuovoSniper.kill, this.sniper.kill);
            this.nuovoSniper.posizione = this.checkEmpty(this.nuovoSniper.posizione, this.sniper.posizione);
            
            //Aggiorna chiamando il metodo dentro lo store
            store.updateBrawler(sniperId, nuovoSniper);
            
            //reimposta le variabili allo stato originale
            this.nuovoBrawler.nome = '';
            this.nuovoBrawler.soprannome = '';
            this.nuovoBrawler.descrizione = '';
            this.nuovoBrawler.trofei = null;
            this.nuovoBrawler.kill = null;
            this.nuovoBrawler.posizione = null;
        },
        checkEmpty(nuovoDato, vecchioDato){
            if(!nuovoDato)
                {nuovoDato = vecchioDato;}
            
            return nuovoDato;

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