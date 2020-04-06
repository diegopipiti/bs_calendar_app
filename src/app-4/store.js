import { brawlersData } from './seed.js';
import { snipersData } from './seed.js';

export const store = {
  state: {
    brawlersData,
    snipersData
  },
  
  //Metodi dei brawler
  getActiveBrawler(){
    return this.state.brawlersData.find((brawler) => brawler.active);
  },
  setActiveBrawler(brawlerId){
    this.state.brawlersData.map((brawlerObj) => {
      brawlerObj.id === brawlerId ? brawlerObj.active = true : brawlerObj.active = false;
    });
  },
  submitTrofei(nuoviTrofei){
    const activeBrawler = this.getActiveBrawler();

    activeBrawler.trofei = nuoviTrofei;
  },
  editBrawler(brawlerId){
    this.resetEditOfAllBrawler();
    const brawlerObj = this.state.brawlersData.find(brawler => brawler.id === brawlerId);
    brawlerObj.edit = true;
  },
  resetEditOfAllBrawler(){
    this.state.brawlersData.map(brawlerObj => brawlerObj.edit = false);
  },
  updateBrawler(brawlerId, nuovoBrawler){
    const brawlerObj = this.state.brawlersData.find(brawler => brawler.id === brawlerId);
    brawlerObj.nomeIta = nuovoBrawler.nomeIta;
    brawlerObj.nomeEng = nuovoBrawler.nomeEng;
    brawlerObj.descrizione = nuovoBrawler.descrizione;
    brawlerObj.trofei = nuovoBrawler.trofei;
    brawlerObj.attacco = nuovoBrawler.attacco;
    brawlerObj.puntiVita = nuovoBrawler.puntiVita;
    brawlerObj.edit = false;
  },


  //Metodi degli Snipers
  getActiveSniper(){
    return this.state.snipersData.find((sniper) => sniper.active);
  },
  setActiveSniper(sniperId){
    this.state.snipersData.map((sniperObj) => {
      sniperObj.id === sniperId ? sniperObj.active = true : sniperObj.active = false;
    });
  },
  submitTrofei(nuoviTrofei){
    const activeSniper = this.getActiveSniper();

    activeSniper.trofei = nuoviTrofei;
  },
  editSniper(sniperId){
    this.resetEditOfAllSnipers();
    const sniperObj = this.state.snipersData.find(sniper => sniper.id === sniperId);
    sniperObj.edit = true;
  },
  resetEditOfAllSnipers(){
    this.state.snipersData.map(sniperObj => sniperObj.edit = false);
  },
  updateSniper(sniperId, nuovoSniper){
    const sniperObj = this.state.snipersData.find(sniper => sniper.id === sniperId);
    sniperObj.nome = nuovoSniper.nome;
    sniperObj.soprannome = nuovoSniper.soprannome;
    sniperObj.descrizione = nuovoSniper.descrizione;
    sniperObj.trofei = nuovoSniper.trofei;
    sniperObj.kill = nuovoSniper.kill;
    sniperObj.posizioni = nuovoSniper.posizioni;
    sniperObj.edit = false;
  },

  trofei_partita(sniperId){
    const sniperObj = this.state.snipersData.find(sniper => sniper.id === sniperId);
    return sniperObj.trofei/sniperObj.partite;
  }
}

  
