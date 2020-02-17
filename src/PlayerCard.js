import React from "react";
import Button from "react-bootstrap/Button";

const PlayerCard = props => (
  <Button
    variant="outline-dark"
    className="PlayerCard"
    data-id={props.player.id}
    onClick={props.handleWinner}
  >
    {props.player.name}
  </Button>
);

export default PlayerCard;
