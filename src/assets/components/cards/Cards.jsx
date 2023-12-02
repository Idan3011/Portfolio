import "./Cards.css";
import "../header/Header.css";
import React from "react";
import Portfolio from "../portfolio/Portfolio";

const Cards = ({ focus2 }) => {

  return (
    <>
      <div id="cards" onMouseEnter={focus2} onMouseLeave={focus2}>
        <div className="card-header">
          <div className="header">
            <h2 style={{ color: "#f7f7f7f7" }}>My Portfolio</h2>
            <h4>MY RECENT WORKS</h4>
          </div>
        </div>
        <div className="card-container">
          <Portfolio />
        </div>
      </div>
    </>
  );
};



export default Cards;
 