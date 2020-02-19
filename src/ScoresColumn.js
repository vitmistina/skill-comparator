import React from "react";
import "./ScoresColumn.css";
import { scaleThreshold } from "d3-scale";

const computePalette = (min, max) => {
  const d = (max - min) / 9;
  return scaleThreshold()
    .range([
      "#ffffe0",
      "#c5eddf",
      "#a5d5d8",
      "#8abccf",
      "#73a2c6",
      "#5d8abd",
      "#4771b2",
      "#2e59a8",
      "#00429d"
    ])
    .domain([
      min + d * 1,
      min + d * 2,
      min + d * 3,
      min + d * 4,
      min + d * 5,
      min + d * 6,
      min + d * 7,
      min + d * 8
    ]);
};

const getMinMax = (category, players) => {
  let min = Infinity,
    max = -Infinity;
  players.forEach(player => {
    const value = player.elo[category] || 1000;
    if (min > value) min = value;
    if (max < value) max = value;
  });
  return { min, max };
};

const ScoresColumn = props => {
  const { category, players } = props;
  const { min, max } = getMinMax(category, players);
  const palette = computePalette(min, max);
  return (
    <div className="scores-column">
      <h2>{category}</h2>
      {players.map(player => {
        const elo = player.elo[category];
        return (
          <React.Fragment key={player.id}>
            <span>{player.name}</span>
            <span
              className="score"
              style={{
                backgroundColor: palette(elo || 1000),
                color: elo > max - (max - min) / 3 ? "#ededed" : "#444444"
              }}
            >
              {elo || 1000}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ScoresColumn;
