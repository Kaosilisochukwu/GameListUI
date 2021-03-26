import "./App.css";
import React, { useState, useEffect } from "react";
import Contact from "./Pages/Contact";
import Header from "./components/Header";
import Games from "./Pages/Games";

function App() {
  const [games, setGames] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterScore, setFilterScore] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);
  const [selectedOption, setSelectedOption] = useState("Name");
  const [order, setOrder] = useState("asc");
  const [gameListIsActive, setGameListIsActive] = useState(true);

  const handleNameChange = (e) => {
    setFilterText(e.target.value);
  };
  const handleNumberChange = (e) => {
    let val = e.target.value ? parseInt(e.target.value) : "";
    setFilterScore(val);
  };
  const handleSelectedOption = (e) => {
    let option = e.target.value;
    setSelectedOption(option);
  };
  const handleOrderChange = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  };
  const resetFilter = () => {
    setFilterScore("");
    setFilterText("");
    setOrder("asc");
    setSelectedOption("Name");
  };
  const navigate = (path) => {
    if (path === "contact") {
      setGameListIsActive(false);
    } else {
      setGameListIsActive(true);
    }
  };
  const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  };
  const sortByDate = (a, b) => {
    if (a.first_release_date > b.first_release_date) {
      return 1;
    } else if (a.first_release_date < b.first_release_date) {
      return -1;
    }
    return 0;
  };
  const sortByRating = (a, b) => {
    if (a.rating > b.rating) {
      return 1;
    } else if (a.rating < b.rating) {
      return -1;
    }
    return 0;
  };
  useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/")
      .then((response) => response.json())
      .then((data) => setGames(data));

    setFilteredGames(() => {
      let tempGames;
      if (selectedOption === "Release Date") {
        tempGames = games.sort(sortByDate);
      } else if (selectedOption === "Score") {
        tempGames = games.sort(sortByRating);
      } else {
        tempGames = games.sort(sortByName);
      }
      if (order === "desc") {
        tempGames.reverse();
      }
      return tempGames.filter(
        (game) =>
          game.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 &&
          game.rating >= filterScore
      );
    });
  }, [filterScore, filterText, games, order, selectedOption]);
  return (
    <div className="app">
      <Header gameListIsActive={gameListIsActive} handleNavigation={navigate} />
      {gameListIsActive ? (
        <Games
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          handleSelectedOption={handleSelectedOption}
          order={order}
          handleOrderChange={handleOrderChange}
          handleReset={resetFilter}
          name={filterText}
          rating={filterScore}
          option={selectedOption}
          games={filteredGames}
        />
      ) : (
        <Contact />
      )}
    </div>
  );
}

export default App;
