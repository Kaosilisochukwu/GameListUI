import React from "react";
import Input from "./Input";

const Filter = ({
  handleNameChange,
  handleNumberChange,
  handleSelectedOption,
  order,
  handleOrderChange,
  handleReset,
  name,
  rating,
  option,
}) => {
  return (
    <div className="filter">
      <h2>Filter Result</h2>
      <Input
        placeholder="Text string"
        label="Name (contains)"
        handleChange={handleNameChange}
        value={name}
      />
      <Input
        placeholder="1 - 100"
        label="Minimum Score"
        type="number"
        handleChange={handleNumberChange}
        value={rating}
      />
      <div className="option-container">
        <div className="arrow" onClick={handleOrderChange}>
          {order === "asc" ? "↑" : "↓"}
        </div>
        <select
          value={option}
          className="filter-option"
          onChange={handleSelectedOption}
        >
          <option>Name</option>
          <option>Release Date</option>
          <option>Score</option>
        </select>
      </div>
      <button onClick={handleReset} className="clear">Clear</button>
    </div>
  );
};

export default Filter;
