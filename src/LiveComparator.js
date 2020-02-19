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
    question: {},
    lastProcessedEvent: ""
  };
  componentDidMount() {
    const uid = this.props.match.params.Id;
    if (uid) {
      this.refs = [
        base.bindToState(`${uid}/events`, {
          context: this,
          asArray: true,
          state: "events"
        }),
        base.syncState(`${uid}/question`, {
          context: this,
          state: "question"
        })
      ];
      if (Object.entries(this.state.question).length === 0)
        this.setState({
          question: this.questionSelectionStrategy.getNextQuestion()
        });
    }
  }

  componentWillUnmount() {
    this.refs.forEach(ref => base.removeBinding(ref));
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

            <h5>Current question: {this.state.question.question} </h5>
            <Button
              onClick={() => {
                this.setState({
                  question: this.questionSelectionStrategy.getNextQuestion()
                });
              }}
            >
              Next question
            </Button>
          </div>
          <div className="area">
            <div
              style={{
                display: "grid",
                gridGap: "8px",
                gridTemplateColumns: `repeat(${this.state.categories.length},1fr)`
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
