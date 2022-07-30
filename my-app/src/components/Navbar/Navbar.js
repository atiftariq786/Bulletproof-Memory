import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
  <div className="navbar ">
    <div className="title">Bulletproof Memory</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      <span className="score">Score: {props.score}</span>{" "}
      <span className="pipe">|</span>{" "}
      <span className="score">High Score: {props.highScore}</span>
    </div>
  </div>
);

export default Navbar;
