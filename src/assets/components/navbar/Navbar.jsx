import React from "react";

const Navbar = ({ isOver, isOver1, isOver2, isOver3 }) => {
  return (
    <>
      <nav className={"header"}>
        <div className="logo">
          <a href="#">
            <h2>ROTENBERG</h2>
          </a>
        </div>
        <ul className="navbar">
          <li className={!isOver ? "goto" : "activeTag"}>
            <a href="#home">Home</a>
          </li>
          <li className={!isOver1 ? "goto" : "activeTag"}>
            <a href="#about">About</a>
          </li>
          <li className={!isOver2 ? "goto" : "activeTag"}>
            <a href="#cards">Portfolio</a>
          </li>
          <li className={!isOver3 ? "goto" : "activeTag"}>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
