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

class LiveComparator extends Component {
  players = getTwoPlayers();
  questionSelectionStrategy = new DummyData();
  state = {
    events: {},
    players: this.players,
    categories: this.questionSelectionStrategy.getCategories(),
    lastProcessedEvent: ""
  };
  componentDidMount() {
    const uid = this.props.match.params.Id;
    if (uid) {
      this.ref = base.syncState(`${uid}/events`, {
        context: this,
        state: "events"
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="liveComparatorGrid">
        <div className="comparatorGrid">
          <div className="playersDiv">
            <h2 className="display-4">Game in progress</h2>
            <h5>
              Current question: kkkkk <Button>Next question</Button>
            </h5>
          </div>
          <div className="area">
            <div
              style={{
                display: "grid",
                "grid-template-columns": `repeat(${this.state.categories
                  .length + 1},1fr)`
              }}
            >
              {this.state.categories.map(val => (
                <ScoresColumn key={val} name={val} players={this.players} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveComparator;
