import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import DummyData from "./DummyData";
import base from "./base";
import { getPlayers, getTwoPlayers } from "./data";
import "./LiveComparator.css";
import QRCodeImage from "./QRCodeImage";
import ScoresColumn from "./ScoresColumn";
import EloCalculator from "./EloCalculator";

class LiveComparator extends Component {
  players = getPlayers();
  questionSelectionStrategy = new DummyData();
  state = {
    events: [],
    players: this.players,
    categories: this.questionSelectionStrategy.getCategories(),
    lastProcessedEvent: ""
  };
  componentDidMount() {
    const uid = this.props.match.params.Id;
    if (uid) {
      this.ref = base.bindToState(`${uid}/events`, {
        context: this,
        asArray: true,
        state: "events"
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const eloCalculator = new EloCalculator({
      players: this.state.players
    });
    const handleWinner = data => {
      const updatedPlayers = eloCalculator.getPlayersWithUpdatedScores(data);
      eloCalculator.setPlayers(updatedPlayers);
    };
    this.state.events.forEach(handleWinner);
    const players = eloCalculator.getPlayers();
    return (
      <div className="liveComparatorGrid">
        <div className="comparatorGrid">
          <div className="playersDiv">
            <h2 className="display-4">Peer assessment in progress</h2>
            <h5>
              Current question: kkkkk <Button>Next question</Button>
            </h5>
          </div>
          <div className="area">
            <div
              style={{
                display: "grid",
                "grid-gap": "8px",
                "grid-template-columns": `repeat(${this.state.categories.length},1fr)`
              }}
            >
              {this.state.categories.map(category => (
                <ScoresColumn
                  key={category}
                  category={category}
                  players={players}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveComparator;
