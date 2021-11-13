import Action from "./action";

class Player {
  numberplayer: number;
  playProbability: number;
  actions: Action[];
  constructor(number: number) {
    this.numberplayer = number;
    this.playProbability = 0;
    this.actions = [];
  }
}
export default Player;
