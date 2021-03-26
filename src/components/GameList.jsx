import React from "react";
import GameCard from "./GameCard";
import Loader from "react-loader-spinner";

const GameList = ({ games }) => {
  if (games.length > 0) {
    return (
      <div className="list">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    );
  }
  return (
    <div className="list spinner">
      <Loader type="Rings" color="#5692e8" height={200} width={200} />
    </div>
  );
};

export default GameList;
