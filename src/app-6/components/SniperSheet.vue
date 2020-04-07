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
                        <p class="blockquote">{{sniper.descrizione}}</p>
                    <br>
                        <div class= "columns">
                            <div class="column is-half" > 
                                <p class="lista-piccola"><span class="red-text">Trofei: </span>{{sniper.trofei}}</p>
                                <p class="lista-piccola"><span class="blue-text">Kill:</span> {{sniper.kill}}</p>
                                <p class="lista-piccola"><span class="red-text">Partite:</span> {{sniper.partite}}</p>
                                <p class="lista-piccola"><span class="blue-text">Danni:</span> {{sniper.danni}}</p>
                            </div>
                            <div class= "column is-half" >
                                <p class="lista-piccola"><span class="red-text">Trofei per partita:</span> {{(sniper.trofei / sniper.partite).toFixed(1)}}</p>
                                <p class="lista-piccola"><span class="blue-text">Kill per partita:</span> {{(sniper.kill / sniper.partite).toFixed(1)}}</p>
                                <p class="lista-piccola"><span class="red-text">Danni per partita:</span> {{(sniper.danni / sniper.partite).toFixed(1)}}</p>
                                <p class="lista-piccola"><span class="blue-text">Posizione media:</span> {{(sniper.posizioni / sniper.partite).toFixed(1)}}</p>
                            </div>
                        </div>
                </p>
            </div>
        </div>
        
        <!-- Rendering relativo alla UI EDIT -->
        <div class="media-content" v-if="sniper.edit">
            <div class="content">
                <p>
                    <strong>
                        Nome: <input class="has-text-info" type = "text" :placeholder="sniper.nome" v-model="nuovoSniper.nome"/> &nbsp
                        SOPRANNOME: <input class="has-text-info" type = "text" :placeholder="sniper.soprannome" v-model="nuovoSniper.soprannome"/>
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
    },



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

.blue-text{
  color: blue;
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
  width: 85px;
  height: auto;
}

.col10{
    margin-top: 5px;
    width: 408px;
    height: 60px;
}

.blockquote {
margin: 0;
background: #3c296b;
color: white;
padding: 30px;
position: relative;
text-align: center;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
}

.sinistro{
    float: left;
    width: 50%;
}

.destro{
    float: right;
    width: 50%;
}

</style>