class EloCalculator {
  constructor({ player1, player2, question, players }) {
    this.player1 = player1;
    this.player2 = player2;
    this.question = question;
    this.players = players;
  }

  recalculateElo = (elo1, elo2, result1) => {
    const K = 200;
    const probability = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
    const diff = parseInt(K * (result1 - probability), 10);
    return [elo1 + diff, elo2 - diff];
  };

  getPlayersWithUpdatedScores = winnerId => {
    const getEloByCategory = (playerId, category) =>
      this.players.find(player => player.id === playerId).elo[category] || 1000;
    const getUpdatedPlayer = (player, playerId, skillId, newElo) =>
      player.id === playerId
        ? { ...player, elo: { ...player.elo, [skillId]: newElo } }
        : null;

    return this.question.categories.reduce((playerArray, category) => {
      const [newElo1, newElo2] = this.recalculateElo(
        getEloByCategory(this.player1.id, category),
        getEloByCategory(this.player2.id, category),
        this.player1.id === winnerId ? 1 : 0
      );
      return playerArray.map(
        player =>
          getUpdatedPlayer(player, this.player1.id, category, newElo1) ||
          getUpdatedPlayer(player, this.player2.id, category, newElo2) ||
          player
      );
    }, this.players);
  };
}

export default EloCalculator;
