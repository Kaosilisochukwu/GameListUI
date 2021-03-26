import React from "react";
import Filter from "../components/Filter";
import GameList from "../components/GameList";

const Games = ({
  handleNameChange,
  handleNumberChange,
  handleSelectedOption,
  order,
  handleOrderChange,
  handleReset,
  name,
  rating,
  option,
  games,
}) => {
  return (
    <div className="body">
      <Filter
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSelectedOption={handleSelectedOption}
        order={order}
        handleOrderChange={handleOrderChange}
        handleReset={handleReset}
        name={name}
        rating={rating}
        option={option}
      />
      <GameList games={games} />
    </div>
  );
};

export default Games;
