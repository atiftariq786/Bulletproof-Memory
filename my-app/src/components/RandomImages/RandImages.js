import React from "react";
import "./RandImages.css";
import Character from "../Character/Character.js";

const RandImages = (props) => {
  return (
    <div
      className={
        props.shake
          ? "container d-flex flex-wrap justify-content-center shake"
          : "container d-flex flex-wrap justify-content-center"
      }
    >
      {props.characters.map((a, i) => (
        <Character name={a} key={i} clickEvent={props.clickEvent} />
      ))}
    </div>
  );
};
export default RandImages;
