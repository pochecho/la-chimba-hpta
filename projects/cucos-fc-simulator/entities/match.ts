import Score from "./score";
import Team from "./team";

class Match {
  minute: number;
  teams: Team[];
  score: Score;
  constructor(minute: number, teams: Team[], score: Score) {
    this.minute = minute;
    this.teams = teams;
    this.score = score;
  }
}

export default Match;
