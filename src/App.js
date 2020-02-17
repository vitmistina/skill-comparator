import React, { Component } from "react";
import SkillSelectionRandom from "./SkillSelectionRandom";
import MatchMakingRandom from "./MatchMakingRandom";
import Categorie from "./Categorie";
import { recalculateElo } from "./helper";
import { getPlayers } from "./data";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerCard from "./PlayerCard";

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
      <div className="app">
        <div className="appGrid">
          <h2 className="display-4">{skill.question}</h2>
          <div className="categoriesGrid">
            {Object.keys(skill.categories).map(key => (
              <Categorie name={skill.categories[key]} key={key} />
            ))}
          </div>
          <div className="playersButtons">
            <PlayerCard player={player1} handleWinner={handleWinner} />
            <Button variant="outline-warning">I don't know</Button>
            <PlayerCard player={player2} handleWinner={handleWinner} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
