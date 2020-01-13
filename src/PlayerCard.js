import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div
    className="PlayerCard"
    data-id={props.player.id}
    onClick={props.handleWinner}
  >
    {props.player.name}
  </div>
);

export default PlayerCard;
