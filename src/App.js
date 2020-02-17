import React, { Component } from "react";
import DummyData from "./DummyData";
import MatchMakingRandom from "./MatchMakingRandom";
import Categorie from "./Categorie";
import EloCalculator from "./EloCalculator";
import { getPlayers, getTwoPlayers } from "./data";
import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  players = getTwoPlayers();
  questionSelectionStrategy = new DummyData();
  matchMakingStrategy = new MatchMakingRandom(this.players);
  state = {
    matchHistory: {},
    players: this.players
  };
  render() {
    const question = this.questionSelectionStrategy.getRandomQuestion();
    const { player1, player2 } = this.matchMakingStrategy.getPlayers();
    const eloCalculator = new EloCalculator({
      players: this.state.players,
      question,
      player1,
      player2
    });

    const handleWinner = event => {
      const winnerId = event.target.dataset.id;
      this.setState({
        players: eloCalculator.getPlayersWithUpdatedScores(winnerId)
      });
    };
    return (
      <div className="app">
        <div className="appGrid">
          <h2 className="display-4">{question.question}</h2>
          <div className="categoriesGrid">
            {Object.keys(question.categories).map(key => (
              <Categorie name={question.categories[key]} key={key} />
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
