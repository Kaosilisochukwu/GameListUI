import React from "react";

const GameCard = ({ game }) => {
  const date = new Date(game.first_release_date);
  return (
    <div className="game-card">
      <div className="black"></div>
      <div className="details">
        <h1>{game.name}</h1>
        <h4>
          Release Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </h4>
        <p>{game.summary}</p>
      </div>
      <div className="number-wrapper">{Math.trunc(game.rating)}</div>
    </div>
  );
};

export default GameCard;
