import { seedData } from './seed.js';
import { brawlersData } from './seed.js';

export const store = {
  state: {
    seedData,
    brawlersData 
  },
  getActiveDay () {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay (dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    });
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
  }
}
