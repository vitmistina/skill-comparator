import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import base from "./base";
import DummyData from "./DummyData";
import MatchMakingRandom from "./MatchMakingRandom";
import Categorie from "./Categorie";
import EloCalculator from "./EloCalculator";
import { getPlayers, getTwoPlayers } from "./data";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    players: [],
    question: {}
  };
  componentDidMount() {
    const uid = this.props.match.params.Id;
    if (uid) {
      this.refs = [
        base.bindToState(`${uid}/question`, {
          context: this,
          state: "question"
        }),
        base.bindToState(`${uid}/players`, {
          context: this,
          state: "players",
          asArray: true
        })
      ];
    }
  }

  componentWillUnmount() {
    this.refs.forEach(ref => base.removeBinding(ref));
  }
  render() {
    const question = this.state.question;
    if (
      Object.entries(question).length === 0 ||
      !question.categories ||
      !this.state.players ||
      this.state.players.length === 0
    )
      return <h1>Loading...</h1>;
    const matchMakingStrategy = new MatchMakingRandom(this.state.players);
    const { player1, player2 } = matchMakingStrategy.getPlayers();
    const eloCalculator = new EloCalculator({
      players: this.state.players
    });

    const handleWinner = event => {
      const winnerId = event.target.dataset.id;
      const data = {
        question,
        player1,
        player2,
        winnerId
      };
      this.setState({
        players: eloCalculator.getPlayersWithUpdatedScores(data)
      });
      base.post(`${this.props.match.params.Id}/events/${Date.now()}`, {
        data
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
