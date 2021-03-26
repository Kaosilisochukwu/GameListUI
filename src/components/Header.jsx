import React from "react";

const Header = ({ gameListIsActive, handleNavigation }) => {
  return (
    <div className="header-container">
      <div className="header" onClick={handleNavigation.bind(this, "video")}>
        <div className={`shadow ${gameListIsActive ? "active" : ""}`}>
          <h1>VIDEO</h1>
        </div>

        <h1>VIDEO GAMES</h1>
      </div>
      <div className="header" onClick={handleNavigation.bind(this, "contact")}>
        <div className={`shadow ${!gameListIsActive ? "active" : ""}`}>
          <h1>CONTACT</h1>
        </div>
        <h1>CONTACT</h1>
      </div>
    </div>
  );
};

export default Header;
