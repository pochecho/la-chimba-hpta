import Player from "./player";

class Team {
  name: string;
  players: Player[];

  //Herrero
  constructor(name: string, players: Player[]) { //Ventanas
    this.name = name; //Mueve el material de trabajo
    this.players = players;
  }


}

export default Team;
