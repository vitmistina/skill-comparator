export default class MatchMakingRandom {
  players = [];
  constructor(players) {
    this.players = players;
  }
  getPlayers = function() {
    const playersMap = [...this.players];
    const player1Index = Math.floor(Math.random() * playersMap.length);
    const player1 = playersMap[player1Index];
    playersMap.splice(player1Index, 1);
    const player2Index = Math.floor(Math.random() * playersMap.length);
    const player2 = playersMap[player2Index];
    return {
      player1,
      player2
    };
  };
}
