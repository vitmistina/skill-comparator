import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ResultCard.css";

class ResultCard extends Component {
  render() {
    return (
      <div className="result">
        <div className="cardImageDiv">
          <img src={this.props.imgCard} className="cardImage"></img>
        </div>
        <div className="cardText">{this.props.descriptionText}</div>
        <div className="cardButton">
          <Button>{this.props.buttonText}</Button>
        </div>
      </div>
    );
  }
}

export default ResultCard;
