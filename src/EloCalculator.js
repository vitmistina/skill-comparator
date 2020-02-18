class EloCalculator {
  constructor({ player1, player2, question, players }) {
    this.players = players;
  }

  recalculateElo = (elo1, elo2, result1) => {
    const K = 200;
    const probability = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
    const diff = parseInt(K * (result1 - probability), 10);
    return [elo1 + diff, elo2 - diff];
  };

  getPlayersWithUpdatedScores = ({ question, player1, player2, winnerId }) => {
    const getEloByCategory = (playerId, category) =>
      this.players.find(player => player.id === playerId).elo[category] || 1000;
    const getUpdatedPlayer = (player, playerId, skillId, newElo) =>
      player.id === playerId
        ? { ...player, elo: { ...player.elo, [skillId]: newElo } }
        : null;

    const newPlayers = question.categories.reduce((playerArray, category) => {
      const [newElo1, newElo2] = this.recalculateElo(
        getEloByCategory(player1.id, category),
        getEloByCategory(player2.id, category),
        player1.id === winnerId ? 1 : 0
      );
      return playerArray.map(
        player =>
          getUpdatedPlayer(player, player1.id, category, newElo1) ||
          getUpdatedPlayer(player, player2.id, category, newElo2) ||
          player
      );
    }, this.players);

    return newPlayers;
  };
}

export default EloCalculator;
