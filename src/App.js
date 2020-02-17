import React, { Component } from "react";
import DummyData from "./DummyData";
import MatchMakingRandom from "./MatchMakingRandom";
import Categorie from "./Categorie";
import { recalculateElo } from "./helper";
import { getPlayers } from "./data";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  dummyData = new DummyData();
  matchMakingStrategy = new MatchMakingRandom(getPlayers());
  state = {
    matchHistory: {},
    players: getPlayers()
  };
  render() {
    const skill = this.dummyData.getRandomQuestion();
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
            <Button variant="outline-dark" onClick={handleWinner}>
              {player2.name}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
