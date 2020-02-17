import React, { Component } from "react";
import DummyData from "./DummyData";
import MatchMakingRandom from "./MatchMakingRandom";
import Categorie from "./Categorie";
import { recalculateElo } from "./helper";
import { getPlayers, getTwoPlayers } from "./data";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  players = getTwoPlayers();
  skillSelectionStrategy = new DummyData();
  matchMakingStrategy = new MatchMakingRandom(this.players);
  state = {
    matchHistory: {},
    players: this.players
  };
  render() {
    const skill = this.skillSelectionStrategy.getRandomQuestion();
    const { player1, player2 } = this.matchMakingStrategy.getPlayers();
    const handleWinner = event => {
      const getEloByCategory = (playerId, category) =>
        this.state.players.find(player => player.id === playerId).elo[
          category
        ] || 1000;
      const getUpdatedPlayer = (player, playerId, skillId, newElo) =>
        player.id === playerId
          ? { ...player, elo: { ...player.elo, [skillId]: newElo } }
          : null;

      const players = skill.categories.reduce((playerArray, category) => {
        const [newElo1, newElo2] = recalculateElo(
          getEloByCategory(player1.id, category),
          getEloByCategory(player2.id, category),
          player1.id === event.target.dataset.id ? 1 : 0
        );
        return playerArray.map(
          player =>
            getUpdatedPlayer(player, player1.id, category, newElo1) ||
            getUpdatedPlayer(player, player2.id, category, newElo2) ||
            player
        );
      }, this.state.players);

      this.setState({
        players
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
            <Button
              variant="outline-dark"
              data-id={player1.id}
              onClick={handleWinner}
            >
              {player1.name}
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => this.forceUpdate()}
            >
              I don't know
            </Button>
            <Button
              variant="outline-dark"
              data-id={player2.id}
              onClick={handleWinner}
            >
              {player2.name}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
