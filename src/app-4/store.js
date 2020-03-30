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
  }
}
