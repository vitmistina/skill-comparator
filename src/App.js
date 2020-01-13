import React, { Component } from "react";
import SkillSelectionRandom from "./SkillSelectionRandom";
import MatchMakingRandom from "./MatchMakingRandom";
import PlayerCard from "./PlayerCard";
import { recalculateElo } from "./helper";
import { getPlayers } from "./data";
import "./App.css";

class App extends Component {
  skillSelectionStrategy = new SkillSelectionRandom();
  matchMakingStrategy = new MatchMakingRandom(getPlayers());
  state = {
    matchHistory: {},
    players: getPlayers()
  };
  render() {
    const skill = this.skillSelectionStrategy.getSkill();
    const { player1, player2 } = this.matchMakingStrategy.getPlayers();
    const handleWinner = event => {
      const getEloById = playerId =>
        this.state.players.find(player => player.id === playerId).elo[skill.id];
      const [newElo1, newElo2] = recalculateElo(
        getEloById(player1.id),
        getEloById(player2.id),
        player1.id === event.target.dataset.id ? 1 : 0
      );
      const getUpdatedPlayer = (player, playerId, skillId, newElo) =>
        player.id === playerId
          ? { ...player, elo: { ...player.elo, [skillId]: newElo } }
          : null;
      this.setState({
        players: this.state.players.map(
          player =>
            getUpdatedPlayer(player, player1.id, skill.id, newElo1) ||
            getUpdatedPlayer(player, player2.id, skill.id, newElo2) ||
            player
        )
      });
    };
    return (
      <div className="App">
        <div className="center-container">
          <h2>{skill.question}</h2>
          <PlayerCard player={player1} id={1} handleWinner={handleWinner} />
          <PlayerCard player={player2} id={2} handleWinner={handleWinner} />
          <button onClick={() => this.forceUpdate()}>I don't know</button>
          <ul>
            {this.state.players
              .sort((a, b) => (a.elo.javascript > b.elo.javascript ? -1 : 1))
              .map(player => (
                <li key={player.id}>
                  {player.name} {player.elo.javascript}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
